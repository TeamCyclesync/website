'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Load the CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load and initialize the chatbot
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({ 
        webhookUrl: 'https://kuldip99123.app.n8n.cloud/webhook/46a7ac9a-2848-41f0-ac19-8aaac523b05d/chat',
        position: 'left',
        theme: 'light'
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
} 