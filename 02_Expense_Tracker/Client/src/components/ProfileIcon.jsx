import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const ProfileIcon = () => {
  return (
    <div>
      <div className="flex justify-center items-center pl-10">
        <Link to="/profile">
          <CgProfile size={40} />
        </Link>
      </div>
    </div>
  );
};

export default ProfileIcon;
