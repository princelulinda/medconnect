'use client'
import { useState } from 'react';
import { Send, User, MessageCircle, Loader } from 'lucide-react';

export default function ChatContact() {
  const [messages, setMessages] = useState([
    { sender: 'doctor', text: 'Bonjour, comment puis-je vous aider aujourd\'hui ?', time: '10:00 AM' },
    { sender: 'patient', text: 'J\'ai des douleurs à la tête, que devrais-je faire ?', time: '10:02 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    // Ajouter le message du patient
    const patientMessage = { sender: 'patient', text: newMessage, time: new Date().toLocaleTimeString() };
    setMessages([...messages, patientMessage]);

    // Simulation de la réponse du docteur
    setIsLoading(true);
    setTimeout(() => {
      const doctorResponse = { sender: 'doctor', text: 'Je vous conseille de prendre un antalgique, mais si cela persiste, veuillez consulter un médecin.', time: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, doctorResponse]);
      setIsLoading(false);
    }, 1500); // Réponse après 1.5 seconde

    setNewMessage('');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Fil de Contact - Chat avec le Docteur</h2>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-500">Docteur en ligne</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-4 max-h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'doctor' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs p-4 rounded-xl ${message.sender === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} shadow-md`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-10 h-10 ${message.sender === 'doctor' ? 'bg-blue-600' : 'bg-gray-400'} rounded-full p-2`}>
                  {message.sender === 'doctor' ? (
                    <User className="w-6 h-6 text-white" />
                  ) : (
                    <MessageCircle className="w-6 h-6 text-gray-600" />
                  )}
                </div>
                <div>
                  <span className="font-semibold">{message.sender === 'doctor' ? 'Docteur' : 'Vous'}</span>
                  <div className="text-xs text-gray-500">{message.time}</div>
                </div>
              </div>
              <p className="mt-2">{message.text}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-center items-center">
            <Loader className="animate-spin w-6 h-6 text-blue-500" />
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="mt-4 flex items-center space-x-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Écrivez votre message..."
          className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition duration-200"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 flex items-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Envoyer</span>
        </button>
      </form>
    </div>
  );
}
