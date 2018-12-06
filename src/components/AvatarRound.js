import React from 'react';

const AvatarRound = ({ user }) => (
  <img className="round" alt="avatar" src={user.avatarUrl} />
);

export default AvatarRound;
