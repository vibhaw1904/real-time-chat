import React from 'react';

const ChatMessage = ({ message, onUpvote }) => {
  const handleUpvote = () => {
    onUpvote(message.id); 
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <p className="text-gray-800">{message.text}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mt-2"
        onClick={handleUpvote}
      >
        Upvote
      </button>
      <span className="text-gray-500">Upvotes: {message.upvotes}</span>
    </div>
  );
};

export default ChatMessage;
