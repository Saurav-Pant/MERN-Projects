import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get('http://localhost:3001/profile/profile');
        setUserData(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Render other profile information as needed */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
