import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AddButton from "./Add_Button";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [hoverEffect, setHoverEffect] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setHoverEffect((prevHoverEffect) => !prevHoverEffect);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="absolute top-28 container mx-auto p-4">
        <motion.div
          className="flex flex-wrap"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {data.length === 0 ? (
            <div className="text-center text-gray-500 m-auto pt-64">
              <h1 className="text-6xl uppercase relative text-gray-300">
                <span className={`${hoverEffect ? "text-gray-400" : ""}`}>
                  No expenses found.
                </span>
                <span className="animate-pulse absolute top-0 left-0 text-gray-400 h-full w-full">
                  &nbsp;
                </span>
              </h1>
            </div>
          ) : (
            data.map((record) => (
              <Link
                to={{
                  pathname: `/editExpense/${record._id}`,
                  state: { record },
                }}
              >
                <motion.div
                  key={record._id}
                  className="rounded-lg shadow-md p-4 mb-4 mr-4 relative w-56 h-40 bg-gradient-to-r from-purple-400 to-pink-500 transform transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    perspective: "500px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="hover:bg-opacity-50 hover:bg-gray-200 rounded-lg p-4 w-full h-full absolute top-0 left-0 backdrop-filter backdrop-blur-md transition duration-300 ease-in-out"></div>
                  <p className="text-lg font-semibold mb-2 text-center text-white z-10 relative">
                    {record.title}
                  </p>
                  <p className="text-gray-300 mb-2 absolute bottom-7 right-2 text-2xl flex justify-center items-center z-10 ">
                    <span className="text-green-300 mr-1">&#x20B9;</span>
                    {record.amount}
                  </p>
                  <p className="text-gray-300 mb-2 text-center z-10 relative">
                    {formatDate(record.date)}
                  </p>
                  <p className="text-gray-300 mt-10 z-10 relative">
                    {record.description}
                  </p>
                </motion.div>
              </Link>
            ))
          )}
        </motion.div>
        <AddButton />
      </div>
    </div>
  );
};

export default Dashboard;
