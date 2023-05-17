import React from "react";
import { motion } from "framer-motion";

const Create = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen"
    > 
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600">Title:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600">Amount:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600">Date:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600">Description:</label>
            <textarea
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg focus:outline-none"
          >
            Save
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Create;
