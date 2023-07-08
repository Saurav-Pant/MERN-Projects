import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AddButton from "./Add_Button";
import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";

const Dashboard = React.memo(() => {
  const [data, setData] = useState([]);
  const [hoverEffect, setHoverEffect] = useState(false);
  const [isShimmer, setIsShimmer] = useState(true);
  const location = useLocation();
  const saved = location.state && location.state.saved;
  const deleted = location.state && location.state.deleted;

  // Shimmer Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShimmer(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Fetching Expenses Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId"); // Retrieve the user's ID from the local storage
        console.log("User ID:", userId);
        const response = await fetch(
          `http://localhost:3001/api/records/create?userId=${userId}`, // Include the user's ID in the query parameters
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  // Format Date
  const formatDate = (date) => {
    const formattedDate = format(new Date(date), "dd/MM/yyyy");
    return formattedDate;
  };

  // For No Expenses Found Hovering Effect

  useEffect(() => {
    const interval = setInterval(() => {
      setHoverEffect((prevHoverEffect) => !prevHoverEffect);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // For Saved  Alert

  useEffect(() => {
    if (saved) {
      const timeout = setTimeout(() => {
        location.state.saved = false;
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [saved]);

  // For Deleted  Alert

  useEffect(() => {
    if (deleted) {
      const timeout = setTimeout(() => {
        location.state.deleted = false;
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [deleted]);

  // For Local Storage of Saved and Deleted Alerts

  useEffect(() => {
    localStorage.setItem("saved", saved);
    localStorage.setItem("deleted", deleted);
  }, [saved, deleted]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4 relative bottom-2 md:bottom-14 lg:bottom-16 ">
        <div className="flex flex-wrap justify-center">
          {data.length === 0 ? (
            <div className="text-center text-gray-500 m-auto ">
              <h1 className="text-6xl uppercase relative text-gray-300 animate-bounce">
                <span className={`${hoverEffect ? "text-gray-400" : ""}`}>
                  ADD Expenses
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
                key={record._id}
              >
                {isShimmer ? (
                  <Shimmer />
                ) : (
                  <motion.div
                    key={record._id}
                    className="rounded-lg shadow-xl p-4 mb-4 mr-4 relative w-56 h-40 bg-gradient-to-r from-purple-500 to-indigo-500 transform transition-all duration-300 hover:shadow-2xl  hover:rotate-1 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500"
                  >
                    <div className="rounded-lg p-4 w-full h-full absolute top-0 left-0 backdrop-filter backdrop-blur-md transition duration-300 ease-in-out">
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
                      <p className="text-gray-300 mt-14 z-10 relative">
                        {record.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </Link>
            ))
          )}
        </div>
        <AddButton />
      </div>
      {saved && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 mb-4">
          <motion.div
            className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg shadow-lg p-4 w-96"
            initial={{ scale: 0 }}
            animate={{ scale: 1, delay: 0.5, easing: "ease-in-out" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-900 text-lg text-center">
              Expense saved successfully! 🎉
            </p>
          </motion.div>
        </div>
      )}

      {deleted && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 mb-4">
          <motion.div
            className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-lg shadow-lg p-4 w-96"
            initial={{ scale: 0 }}
            animate={{ scale: 1, delay: 0.5, easing: "ease-in-out" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white text-lg text-center">
              Expense Deleted successfully!
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
});

export default Dashboard;
