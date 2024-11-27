"use client"
import { useState } from 'react';
import { Send, User, MessageSquare, Loader } from 'lucide-react';

export default function ChatWithDoctor() {
  const [messages, setMessages] = useState([
    { sender: 'doctor', text: 'Bonjour, comment puis-je vous aider aujourd\'hui ?', time: '10:00 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    // Ajout du message du patient
    const patientMessage = { sender: 'patient', text: newMessage, time: new Date().toLocaleTimeString() };
    setMessages([...messages, patientMessage]);

    setIsLoading(true);
    setTimeout(() => {
      const doctorResponse = { sender: 'doctor', text: 'Merci pour votre message, je vais examiner cela.', time: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, doctorResponse]);
      setIsLoading(false);
    }, 1500); 

    setNewMessage('');
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Chat avec le Docteur</h2>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-500">Docteur en ligne</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-[70vh] overflow-y-scroll space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'doctor' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs p-4 rounded-xl ${message.sender === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} shadow-lg`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-10 h-10 ${message.sender === 'doctor' ? 'bg-blue-600' : 'bg-gray-400'} rounded-full p-2`}>
                  {message.sender === 'doctor' ? (
                    <User className="w-6 h-6 text-white" />
                  ) : (
                    <MessageSquare className="w-6 h-6 text-gray-600" />
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
