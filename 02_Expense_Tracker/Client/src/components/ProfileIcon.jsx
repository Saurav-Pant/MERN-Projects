import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const ProfileIcon = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/profile/ProfileImg/")
      .then((res) => res.json())
      .then((result) => {
        setProfile(result.profile); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center pl-10">
        <Link to="/profile">
          {profile ? (
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full"
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
