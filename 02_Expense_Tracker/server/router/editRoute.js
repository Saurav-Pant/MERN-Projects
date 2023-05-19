const express = require("express");
const router = express.Router();
const ExpenseRecord = require("../models/ExpenseRecord");

router
  .route("/:id")
  // GET request to fetch a specific expense record
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const record = await ExpenseRecord.findById(id);
      if (!record) {
        return res.status(404).json({ error: "Expense record not found." });
      }
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch the expense record." });
    }
  })
  // PUT request to update a specific expense record
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { title, amount, date, description } = req.body;
      const updatedRecord = await ExpenseRecord.findByIdAndUpdate(
        id,
        { title, amount, date, description },
        { new: true }
      );
      if (!updatedRecord) {
        return res.status(404).json({ error: "Expense record not found." });
      }
      res.status(200).json(updatedRecord);
    } catch (error) {
      res.status(500).json({ error: "Failed to update the expense record." });
    }
  })
  // DELETE request to delete a specific expense record
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRecord = await ExpenseRecord.findByIdAndDelete(id);
      if (!deletedRecord) {
        return res.status(404).json({ error: "Expense record not found." });
      }
      res.status(200).json({ message: "Expense record deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete the expense record." });
    }
  });

module.exports = router;
