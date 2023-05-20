import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/records/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          amount,
          date: selectedDate,
          description,
        }),
      });
      if (response.ok) {
        // Record saved successfully
        const data = await response.json();
        console.log("Record saved:", data);
        // Reset the form
        setTitle("");
        setAmount("");
        setSelectedDate(null);
        setDescription("");
        navigate("/dashboard", { state: { saved: true } }); // Redirect to the dashboard page with the saved state
      } else {
        // Failed to save the record
        console.log("Failed to save the record");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1, delay: 0.5, easing: "ease-in-out" }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 text-teal-400">
            <div className="flex flex-col">
              <label className="text-gray-600">Title:</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Amount:</label>
              <input
                type="number"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Description:</label>
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              type="submit"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Save
              </span>
            </motion.button>
          </div>
        </form>
      </motion.div>
      <div className="absolute left-5 bottom-10">
        <Link to="/dashboard">
          <button className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Dashboard</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Create;
