import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileIcon = () => {
  const { logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="flex items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 focus:outline-none"
        onClick={toggleLogout}
      >
        <CgProfile size={50} className="pl-5"/>
      </motion.button>

      {showLogout && (
        <div className="ml-2">
          <button
            className="px-4 py-2 pl-5 rounded bg-red-500 hover:bg-red-700 text-white font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
