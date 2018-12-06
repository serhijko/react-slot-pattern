import React from 'react';
import Profile from './Profile';
import AvatarRound from './AvatarRound';

const User = ({ user }) => (
  <Profile user={user}>
    <AvatarRound user={user} />
  </Profile>
);

export default User;
