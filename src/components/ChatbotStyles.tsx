'use client';

import { useEffect } from 'react';

export default function ChatbotStyles() {
  useEffect(() => {
    // Add custom styles for the chatbot
    const style = document.createElement('style');
    style.textContent = `
      .chat-widget-container {
        position: fixed;
        right: 190px;
        bottom: 40px;
        z-index: 1000;
        max-width: 400px;
        width: 100%;
      }

      @media (max-width: 768px) {
        .chat-widget-container {
          right: 10px;
          bottom: 10px;
          max-width: calc(100% - 20px);
        }
      }

      .chat-widget {
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      .chat-widget-header {
        padding: 16px;
        background-color: #A259FF;
        color: white;
      }

      .chat-widget-messages {
        max-height: 60vh;
        overflow-y: auto;
        padding: 16px;
      }

      .chat-widget-input {
        padding: 16px;
        border-top: 1px solid #e5e7eb;
      }

      /* Custom scrollbar */
      .chat-widget-messages::-webkit-scrollbar {
        width: 6px;
      }

      .chat-widget-messages::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      .chat-widget-messages::-webkit-scrollbar-thumb {
        background: #A259FF;
        border-radius: 3px;
      }

      .chat-widget-messages::-webkit-scrollbar-thumb:hover {
        background: #8a4bd8;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
} 