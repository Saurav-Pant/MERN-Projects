import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const ProfileIcon = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/signup/signup/ProfileImage")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProfile(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <div>
      <div className="flex justify-center items-center pl-10">
        <Link to="/profile">
          {profile ? profile : <CgProfile size={40} />}
        </Link>
      </div>
    </div>
  );
};

export default ProfileIcon;
