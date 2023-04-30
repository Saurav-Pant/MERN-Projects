import React from 'react'

const Create = ({
  title,
  amount,
  date,
  description,
  handleTitleChange,
  handleAmountChange,
  handleDateChange,
  handleDescriptionChange,
  handleSaveClick,
}) => {
  return (
    <div>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitleChange} />

      <label>Amount:</label>
      <input type="text" value={amount} onChange={handleAmountChange} />

      <label>Date:</label>
      <input type="text" value={date} onChange={handleDateChange} />

      <label>Description:</label>
      <input type="text" value={description} onChange={handleDescriptionChange} />

      <button onClick={handleSaveClick}>Save</button>
    </div>
  )
}

export default Create;
