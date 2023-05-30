import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AddButton from "./Add_Button";
import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hoverEffect, setHoverEffect] = useState(false);
  const location = useLocation();
  const saved = location.state && location.state.saved;
  const deleted = location.state && location.state.deleted;

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:3001/api/records/create")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
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

  useEffect(() => {
    if (saved) {
      const timeout = setTimeout(() => {
        location.state.saved = false;
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [saved]);

  useEffect(() => {
    if (deleted) {
      const timeout = setTimeout(() => {
        location.state.deleted = false;
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [deleted]);

  useEffect(() => {
    localStorage.setItem("saved", saved);
    localStorage.setItem("deleted", deleted);
  }, [saved, deleted]);

  // Filter data by date and amount
  const filterData = (startDate, endDate, minAmount, maxAmount) => {
    const filteredExpenses = data.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const expenseAmount = expense.amount;

      return (
        expenseDate >= startDate &&
        expenseDate <= endDate &&
        expenseAmount >= minAmount &&
        expenseAmount <= maxAmount
      );
    });

    setFilteredData(filteredExpenses);
  };

  return (
    <div className="h-[85vh] flex items-center justify-center">
      {/* Filter section */}
      <div className="absolute top-28 left-10">
        <div className="">
          <label
            htmlFor=""
            className="text-lg font-bold mb-2 pr-4"
          >
            Search With Date
          </label>
          <input
            type="date"
            onChange={(e) => {
              const startDate = new Date(e.target.value);
              const endDate = new Date();
              const minAmount = 0;
              const maxAmount = Infinity;
              filterData(startDate, endDate, minAmount, maxAmount);
            }}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <label htmlFor="" className="text-lg font-bold mb-2">
          Filter With Amount
        </label>
        <div className="mt-2">
          <input
            type="number"
            placeholder="Min Amount"
            onChange={(e) => {
              const startDate = new Date("1900-01-01");
              const endDate = new Date();
              const minAmount = Number(e.target.value);
              const maxAmount = Infinity;
              filterData(startDate, endDate, minAmount, maxAmount);
            }}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white focus:outline-none focus:border-blue-500 mr-2"
          />
          <input
            type="number"
            placeholder="Max Amount"
            onChange={(e) => {
              const startDate = new Date("1900-01-01");
              const endDate = new Date();
              const minAmount = 0;
              const maxAmount = Number(e.target.value);
              filterData(startDate, endDate, minAmount, maxAmount);
            }}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="container mx-auto p-4">
        <motion.div
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {filteredData.length === 0 ? (
            <div className="text-center text-gray-500 m-auto ">
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
            filteredData.map((record) => (
              <Link
                to={{
                  pathname: `/editExpense/${record._id}`,
                  state: { record },
                }}
                key={record._id}
              >
                <motion.div
                  key={record._id}
                  className="rounded-lg shadow-md p-4 mb-4 mr-4 relative w-56 h-40 bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-blue-700 dark:to-blue-500 transform transition duration-300 ease-in-out"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                  }}
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
};

export default Dashboard;
