const express = require("express");
const router = express.Router();
const ExpenseRecord = require("../models/ExpenseRecord");

router
  .route("/create")

  // POST request to create a new expense record
  .post(async (req, res) => {
    try {
      const { title, amount, date, description, userId } = req.body; // Include the user's ID in the request body
      const newRecord = new ExpenseRecord({
        title,
        amount,
        date,
        description,
        user: userId, // Assign the record to the user
      });
      await newRecord.save();
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(500).json({ error: "Failed to save the record." });
    }
  })

  // GET request to fetch records for a specific user
  .get(async (req, res) => {
    try {
      const records = await ExpenseRecord.find({ user: req.query.userId }); // Find records for the user specified in the query parameters
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch records." });
    }
  });

module.exports = router;
