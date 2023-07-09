import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";  // <-- Use this instead of Navigate

const ProfileIcon = () => {
  const { logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div>
      <div className="flex justify-center items-center pl-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-3xl drop-shadow-2xl"
          onClick={toggleLogout}
        >
          <CgProfile size={40} />
        </motion.button>
      </div>
      {showLogout && (
        <div className="flex justify-center items-center pl-10">
          <button className="drop-shadow-2xl" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
