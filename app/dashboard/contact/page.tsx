'use client'
import { useState } from 'react';
import { Search, UserPlus, Trash2, Edit, Mail, Phone, MapPin, X, Save, Filter, Download, SortDesc } from 'lucide-react';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      phone: '+33 6 12 34 56 78',
      location: 'Paris, France',
      category: 'Doctor',
      avatar: '/api/placeholder/48/48'
    },
    {
      id: 2,
      name: 'Jean Martin',
      email: 'jean.martin@email.com',
      phone: '+33 6 98 76 54 32',
      location: 'Lyon, France',
      category: 'Doctor',
      avatar: '/api/placeholder/48/48'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [notification, setNotification] = useState(null);
  const [editingContact, setEditingContact] = useState(null);
  const [isAddingContact, setIsAddingContact] = useState(false);

  const categories = ['Tous', 'Professionnel', 'Personnel', 'Famille', 'Autres'];

  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    location: '',
    category: 'Personnel',
  };

  const [formData, setFormData] = useState(initialFormState);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredAndSortedContacts = contacts
    .filter(contact => 
      (contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'Tous' || contact.category === selectedCategory)
    )
    .sort((a, b) => {
      const factor = sortOrder === 'asc' ? 1 : -1;
      return a[sortBy].localeCompare(b[sortBy]) * factor;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      setContacts(contacts.map(c => 
        c.id === editingContact.id ? { ...formData, id: c.id, avatar: c.avatar } : c
      ));
      showNotification('Contact modifié avec succès');
    } else {
      const newContact = {
        ...formData,
        id: contacts.length + 1,
        avatar: '/api/placeholder/48/48'
      };
      setContacts([...contacts, newContact]);
      showNotification('Contact ajouté avec succès');
    }
    setFormData(initialFormState);
    setEditingContact(null);
    setIsAddingContact(false);
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFormData(contact);
    setIsAddingContact(true);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
    showNotification('Contact supprimé avec succès', 'error');
  };

  const exportContacts = () => {
    const data = JSON.stringify(contacts, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacts.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Contacts exportés avec succès');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
          notification.type === 'error' ? 'bg-red-500' : 'bg-green-500'
        } text-white transition-all duration-300 z-50`}>
          {notification.message}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Doctors</h1>
        <button 
          onClick={() => setIsAddingContact(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <UserPlus size={20} />
          <span>Nouveau Contact</span>
        </button>
      </div>

      {/* Barre d'outils */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Nom</option>
          <option value="email">Email</option>
          <option value="location">Localisation</option>
        </select>

        <button
          onClick={exportContacts}
          className="flex items-center justify-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Download size={20} />
          <span>Exporter</span>
        </button>
      </div>

      {/* Formulaire d'ajout/édition */}
      {isAddingContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingContact ? 'Modifier le contact' : 'Nouveau contact'}
              </h2>
              <button
                onClick={() => {
                  setIsAddingContact(false);
                  setEditingContact(null);
                  setFormData(initialFormState);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Localisation
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Save size={20} />
                <span>{editingContact ? 'Enregistrer' : 'Ajouter'}</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Liste des contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAndSortedContacts.map(contact => (
          <div key={contact.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <img 
                  src={contact.avatar} 
                  alt={contact.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{contact.name}</h3>
                  <span className="inline-block px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-600 mb-2">
                    {contact.category}
                  </span>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span className="text-sm">{contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span className="text-sm">{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">{contact.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEdit(contact)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <Edit size={20} />
                </button>
                <button 
                  onClick={() => handleDelete(contact.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedContacts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucun contact trouvé
        </div>
      )}
    </div>
  );
};

export default ContactList;