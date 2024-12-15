import express from "express";
import db from "../config/db.js";

const router = express.Router();

// 1. API to Upload a Booking
router.post("/book", (req, res) => {
  const { 
    name, 
    email, 
    phoneNumber, 
    countryCode, 
    age, 
    trekDate, 
    numberOfPeople, 
    Trekname, 
    totalPrice 
  } = req.body;
  console.log(req.body);
  // Validate input
  if (!name || !email || !phoneNumber || !countryCode || !age || !trekDate || !numberOfPeople || !Trekname || !totalPrice) {
    return res
      .status(400)
      .json({ message: "All fields are required, including name, email, phone number, country code, age, trek date, number of people, Trekname, and totalPrice." });
  }

  const query = `
    INSERT INTO bookings (name, email, phone_number, country_code, age, trek_date, number_of_people, trekname, price) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [name, email, phoneNumber, countryCode, age, trekDate, numberOfPeople, Trekname, totalPrice], (error, results) => {
    if (error) {
      console.error("Error saving bookings:", error);
      return res.status(500).json({ message: "Failed to save bookings" });
    }
    res.status(201).json({ message: "Booking saved successfully", bookingId: results.insertId });
  });
});

// 2. API to Fetch All Bookings
router.get("/bookings", (req, res) => {
  const query = "SELECT * FROM bookings ORDER BY booking_date DESC";
  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching bookings:", error);
      return res.status(500).json({ message: "Failed to fetch bookings" });
    }
    res.status(200).json(results);
  });
});

// 3. API to Delete a Booking by ID
router.delete("/bookings/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM bookings WHERE id = ?";
  db.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error deleting bookings:", error);
      return res.status(500).json({ message: "Failed to delete bookings" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  });
});

export default router;
