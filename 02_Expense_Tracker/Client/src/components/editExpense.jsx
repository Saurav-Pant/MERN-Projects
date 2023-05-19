import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";

const EditExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/edit/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setExpense(data);
        setTitle(data.title);
        setAmount(data.amount);
        setSelectedDate(new Date(data.date));
        setDescription(data.description);
      })
      .catch((error) => console.log("Error:", error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          amount,
          date: selectedDate.toISOString(),
          description,
        }),
      });
      if (response.ok) {
        // Expense updated successfully
        console.log("Expense updated");
        navigate("/dashboard"); // Navigate to the dashboard page
      } else {
        // Failed to update the expense
        console.log("Failed to update the expense");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/edit/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Expense deleted successfully
        console.log("Expense deleted");
        navigate("/dashboard"); // Navigate to the dashboard page
      } else {
        // Failed to delete the expense
        console.log("Failed to delete the expense");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (!expense) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1, delay: 0.5, easing: "ease-in-out" }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleUpdate}>
          <div className="space-y-4">
            <div className="flex flex-col " >
              <label className="text-gray-600">Title:</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-teal-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Amount:</label>
              <input
                type="number"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-teal-400"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-teal-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Description:</label>
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-teal-400"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg focus:outline-none"
              type="submit"
            >
              Save
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white py-2 px-4 rounded-md shadow-lg focus:outline-none ml-44"
              onClick={handleDelete}
            >
              Delete
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditExpense;
