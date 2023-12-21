import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import MostUpvotedMessage from './MostUpvotedMessage';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [mostUpvoted, setMostUpvoted] = useState(null);

  const sendMessage = (text) => {
    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      upvotes: 0,
    };
    setMessages([newMessage, ...messages]);
  };

  const handleUpvote = (id) => {
    const updatedMessages = messages.map((message) =>
      message.id === id ? { ...message, upvotes: message.upvotes + 1 } : message
    );
    setMessages(updatedMessages);

    const mostUpvotedMessage = updatedMessages.reduce((prev, current) =>
      prev.upvotes > current.upvotes ? prev : current
    );
    setMostUpvoted(mostUpvotedMessage);
  };

  return (
    
    <div className="container mx-auto max-w-md p-4">
        <div className="mb-4">
        <MostUpvotedMessage mostUpvoted={mostUpvoted} />
      </div>
      <div>
      <div className="h-96 overflow-y-auto flex flex-col-reverse">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onUpvote={handleUpvote}
          />
        ))}
      </div>
      <div className="mt-4">
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
      </div>
   
  );
};

export default ChatApp;
