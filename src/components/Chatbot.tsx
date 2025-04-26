'use client';

import { useEffect } from 'react';
import ChatbotStyles from './ChatbotStyles';

export default function Chatbot() {
  useEffect(() => {
    // Create and configure the widget configuration
    const configScript = document.createElement('script');
    configScript.textContent = `
      window.ChatWidgetConfig = {
        webhook: {
          url: "https://kuldip123456.app.n8n.cloud/webhook/46a7ac9a-2848-41f0-ac19-8aaac523b05d/chat",
          route: "general",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        },
        branding: {
          logo: "/assets/logo.png",
          name: "CycleSync",
          welcomeText: "Hi!💜 Here to help you track your cycle and care better!",
          responseTimeText: "Tap below and let's chat 💬"
        },
        style: {
          primaryColor: "#A259FF",
          secondaryColor: "#F6C915",
          position: "right",
          backgroundColor: "#ffffff",
          fontColor: "#1f293f"
        }
      };
    `;
    document.head.appendChild(configScript);

    // Load the chat widget script
    const widgetScript = document.createElement('script');
    widgetScript.src = "https://cdn.jsdelivr.net/gh/funtastic418/chat-widget@main/chat-widget.js";
    widgetScript.async = true;
    widgetScript.onerror = (error) => {
      console.error('Failed to load chat widget script:', error);
    };

    // Add error handling for the widget
    window.addEventListener('error', (event) => {
      if (event.filename && event.filename.includes('chat-widget.js')) {
        console.error('Chat widget error:', event.error);
      }
    });

    document.body.appendChild(widgetScript);

    return () => {
      try {
        if (document.head.contains(configScript)) {
          document.head.removeChild(configScript);
        }
        if (document.body.contains(widgetScript)) {
          document.body.removeChild(widgetScript);
        }
        window.removeEventListener('error', () => {});
      } catch (error) {
        console.error('Error cleaning up chat widget:', error);
      }
    };
  }, []);

  return (
    <>
      <ChatbotStyles />
    </>
  );
} 