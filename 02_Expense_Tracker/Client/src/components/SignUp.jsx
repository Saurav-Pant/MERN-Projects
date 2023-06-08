import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const profileImageString = await convertToBase64(profile); // Convert the selected image to base64

      const res = await axios.post("http://localhost:3001/signup/signup", {
        profile: profileImageString,
        name,
        email,
        password,
      });
      console.log(res.data); // Handle success response
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (err) {
      console.error(err.response.data); // Handle error response
    }
  };

  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result.split(",")[1]); // Extract the base64 string from the data URL
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = (event) => {
    setProfile(event.target.files[0]);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <motion.form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSignUp}
      >
        {/* Profile Section */}

        <div className="flex justify-center items-center">
          <label htmlFor="upload-input">
            <div
              className={`h-32 w-32 rounded-full flex items-center justify-center text-white cursor-pointer ${
                profile ? "" : "bg-red-500"
              }`}
            >
              {profile ? (
                // Display the selected image
                <img
                  src={URL.createObjectURL(profile)}
                  alt="Selected Image"
                  className="h-32 w-32 rounded-full"
                />
              ) : (
                // Display the red background and CgProfile icon
                <CgProfile className="h-24 w-24" />
              )}
            </div>
          </label>
          <input
            id="upload-input"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="inline-block  font-bold text-sm text-blue-500 mt-8 ">
          Already have an account?
          <Link to="/login">
            <span className="cursor-pointer underline hover:text-blue-800 pl-3">
              Login
            </span>
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default Signup;
