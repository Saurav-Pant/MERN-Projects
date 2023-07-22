import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./Loading";

const ProfileIcon = () => {
  const { logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggingOut(true);
    logout();
    setTimeout(() => {
      navigate("/");
      setLoggingOut(false);
    }, 2000);
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.9,
    },
  };

  const logoutButtonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const loadingSpinnerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },

    transition: {
      delay: 0.5,
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="p-2 focus:outline-none"
        onClick={toggleLogout}
      >
        <CgProfile size={50} className="pl-5" />
      </motion.button>

      {showLogout && !loggingOut && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoutButtonVariants}
          className="ml-2"
        >
          <button
            className="px-4 py-2 pl-5 rounded bg-red-500 hover:bg-red-700 text-white font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </motion.div>
      )}

      {loggingOut && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={loadingSpinnerVariants}
          className="ml-2"
        >
          <LoadingSpinner />
        </motion.div>
      )}
    </div>
  );
};

export default ProfileIcon;
