import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from "axios";


const ProfileIcon = () => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await axios.get("http://localhost:3001/SignUp/profile");
        setProfileImage(response.data.profile);
        console.log(response.data.profile)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileImage();
  }, []);

  const getBase64ImageSource = () => {
    if (profileImage) {
      return `data:image;base64, ${profileImage}`;
    }
  
    return null;
  };
  

  return (
    <div>
      <div className="flex justify-center items-center pl-10">
        <Link to="/profile">
          {profileImage ? (
            <img
              src={getBase64ImageSource()}
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <CgProfile size={40} />
          )}
        </Link>
      </div>
    </div>
  );
};

export default ProfileIcon;
