import React, { useState, useContext } from "react";
import Create from "../components/Create";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/theme";

const AddExpense = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleAmountChange = (event) => setAmount(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSaveClick = (event) => {
    setShowForm(true); 
  };

  const buttonClick = (event) => {
    navigate("/create");
    setShowForm(true);
  };

  return (
    <div>
      <button
        className="ml-3 text-3xl absolute top-10 right-10 shadow-md rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        onClick={toggleTheme}
      >
        {theme.icon}
      </button>

      {showForm ? (
        <Create
          title={title}
          amount={amount}
          date={date}
          description={description}
          handleTitleChange={handleTitleChange}
          handleAmountChange={handleAmountChange}
          handleDateChange={handleDateChange}
          handleDescriptionChange={handleDescriptionChange}
          handleSaveClick={handleSaveClick}
        />
      ) : (
        <button
          className="fixed bottom-10 right-10 shadow-md rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 w-16 h-16 text-3xl text-center "
          onClick={buttonClick}
        >
          +
        </button>
      )}
    </div>
  );
};

export default AddExpense;
