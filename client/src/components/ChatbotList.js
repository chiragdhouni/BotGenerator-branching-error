// components/ChatbotList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ChatbotList() {
  const [chatbots, setChatbots] = useState([]);
  useEffect(() => {
    console.log('ChatbotList component mounted');
    const fetchChatbots = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chatbots');
        console.log('Chatbots fetched:', response.data);
        setChatbots(response.data);
      } catch (error) {
        console.error('Error fetching chatbots:', error);
      }
    };
    fetchChatbots();
  }, []);
  

  return (
    <div>
      <h2>Your Chatbots</h2>
      <ul>
        {chatbots.map(chatbot => (
          <li key={chatbot.chatbotId}>
            <Link to={`/embed/${chatbot.chatbotId}`}>{chatbot.name}{chatbot.chatbotId}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Create New Chatbot</Link>
    </div>
  );
}

export default ChatbotList;
