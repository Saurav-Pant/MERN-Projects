import React,{useState} from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Create = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (

    <div
      className="flex items-center justify-center h-screen"> 
      <motion.div className="bg-white rounded-lg shadow-lg p-8 w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1, delay: 0.5, easing: "ease-in-out" }}
        transition={{ duration: 0.5 }}
        >

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
      </motion.div>
    </div>
  );
};

export default Create;
