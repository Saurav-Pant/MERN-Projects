const express = require("express");
const router = express.Router();
const ExpenseRecord = require("../models/ExpenseRecord");

router
  .route("/create")

  // POST request to create a new expense record
  .post(async (req, res) => {
    try {
      const { title, amount, date, description } = req.body;
      const newRecord = new ExpenseRecord({
        title,
        amount,
        date,
        description,
      });
      await newRecord.save();
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(500).json({ error: "Failed to save the record." });
    }
  })

  // GET request to fetch all expense records
  .get(async (req, res) => {
    try {
      const records = await ExpenseRecord.find();
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch records." });
    }
  });

module.exports = router;
