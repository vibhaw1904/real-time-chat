import React from 'react';

const MostUpvotedMessage = ({ mostUpvoted }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Most Upvoted Message:</h2>
      {mostUpvoted ? (
        <p className="text-gray-800">{mostUpvoted.text}</p>
      ) : (
        <p className="text-gray-500">No messages yet</p>
      )}
    </div>
  );
};

export default MostUpvotedMessage;
