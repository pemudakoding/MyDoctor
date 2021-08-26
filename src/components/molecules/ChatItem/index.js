import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

export default function Chatting({isMe}) {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
}
