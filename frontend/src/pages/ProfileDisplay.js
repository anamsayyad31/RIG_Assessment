import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfileDisplay = () => {
  const location = useLocation();
  const { userProfile } = location.state;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Date of Birth: {userProfile.dob}</p>
      <p>Country Code: {userProfile.country_code}</p>
      <p>Contact Number: {userProfile.contact_number}</p>
    </div>
  );
};

export default ProfileDisplay;
