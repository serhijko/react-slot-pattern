import React from 'react';
import Profile from './Profile';
import AvatarRound from './AvatarRound';
import BiographyFat from './BiographyFat';

const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);

export default User;
