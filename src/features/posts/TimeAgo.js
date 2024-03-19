import React from 'react';
import { Text } from 'react-native';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';

  if (timestamp) {
    const date = new Date(timestamp);
    const now = new Date();

    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      timeAgo = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      timeAgo = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      timeAgo = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  }

  return (
    <Text>
      {timeAgo}
    </Text>
  );
};

export default TimeAgo;
