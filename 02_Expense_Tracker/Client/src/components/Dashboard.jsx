import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AddButton from "./Add_Button";
import { format } from "date-fns";


const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:3001/api/records/create")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  const formatDate = (date) => {
    const formattedDate = format(new Date(date), "dd/MM/yyyy");
    return formattedDate;
  };

  return (
    <div className="absolute top-28 container p-4 m-auto">
      <motion.div
        className="flex flex-wrap"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {data.map((record) => (
          <motion.div
            key={record._id}
            className="bg-white rounded-lg shadow-md p-4 mb-4 mr-4 relative w-64 h-64"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-lg font-semibold mb-2 text-center">{record.title}</p>
            <p className="text-gray-600 mb-2 absolute bottom-7 right-2 text-xl">
              &#x20B9; {record.amount}
            </p>
            <p className="text-gray-600 mb-2">{formatDate(record.date)}</p>
            <p className="text-gray-600 mt-10">{record.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <AddButton />
    </div>
  );
};

export default Dashboard;
