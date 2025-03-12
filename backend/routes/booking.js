import express from "express";
import db from "../config/db.js";

const router = express.Router();

// 1. API to Upload a Booking
router.post("/book", (req, res) => {
  const { 
    name, 
    email, 
    phoneNumber, 
    age, 
    trekDate, 
    numberOfPeople, 
    Trekname, 
    price,              // base price (track price)
    priceWithCharges,   // amount with GST
    amountPaid,         // paying amount
    remainingAmount,    // remaining amount
    userId 
  } = req.body;

  // Validate user is logged in
  if (!userId) {
    return res.status(401).json({ message: "User must be logged in to book" });
  }

  // Check if there's an existing booking
  const checkExisting = `
    SELECT SUM(amount_paid) as total_paid
    FROM bookings 
    WHERE trekname = ? AND user_id = ?
  `;

  db.query(checkExisting, [Trekname, userId], (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Error checking existing booking" });
    }

    const query = `
      INSERT INTO bookings (
        name, email, phone_number, age, trek_date, 
        number_of_people, trekname, price, 
        price_with_charges, amount_paid, remaining_amount, user_id
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      query, 
      [
        name, email, phoneNumber, age, trekDate, 
        numberOfPeople, Trekname, price, 
        priceWithCharges, amountPaid, remainingAmount, userId
      ], 
      (error, results) => {
        if (error) {
          console.error("Error saving booking:", error);
          return res.status(500).json({ message: "Failed to save booking" });
        }
        res.status(201).json({ 
          message: "Booking saved successfully", 
          bookingId: results.insertId,
          remainingAmount
        });
      }
    );
  });
});

// 2. API to Fetch All Bookings
router.get("/bookings", (req, res) => {
  const query = `
    SELECT 
      id,
      name,
      email,
      phone_number,
      age,
      trekname,
      number_of_people,
      trek_date,
      price,
      amount_paid,
      price_with_charges,
      remaining_amount,
      user_id,
      booking_date
    FROM bookings 
    ORDER BY booking_date DESC
  `;
  
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

// 4. API to check remaining amount
router.get("/remaining-amount/:trekName/:userId", (req, res) => {
  const { trekName, userId } = req.params;

  const query = `
    SELECT 
      price,
      price_with_charges,
      amount_paid,
      remaining_amount
    FROM bookings 
    WHERE trekname = ? AND user_id = ?
    ORDER BY booking_date DESC
    LIMIT 1
  `;

  db.query(query, [trekName, userId], (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Error checking remaining amount" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No booking found" });
    }

    res.json(results[0]);
  });
});

export default router;
