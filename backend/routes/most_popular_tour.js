import express from "express";
import db from "../config/db.js";
// import multer from "multer";

const router = express.Router();

// // Multer setup for handling image uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// Route to upload image, image name, price, and days to the database
// router.post("/upload", upload.single("image"), (req, res) => {
//   const { image_name, price, days } = req.body;

//   if (!image_name || !price || !days || !req.file) {
//     return res.status(400).json({ message: "Image, image name, price, and days are required" });
//   }

//   const image = req.file.buffer; // Buffer for the binary data of the image
//   const rating = 5; // Default rating
//   const category = "popular_tours"; // Set the category explicitly

//   db.query(
//     "INSERT INTO tour (image, image_name, price, rating, days, category) VALUES (?, ?, ?, ?, ?, ?)",
//     [image, image_name, price, rating, days, category],
//     (error, results) => {
//       if (error) {
//         console.error("Error uploading image:", error);
//         return res.status(500).json({ message: "Failed to upload image" });
//       }
//       res.status(201).json({ message: "Image uploaded successfully", id: results.insertId });
//     }
//   );
// });

// Route to fetch all images with name, rating, price, and days for "popular_tours"
router.get("/fetch", (req, res) => {
  db.query(
    "SELECT id, image_name, image_url, rating, price, days FROM tour WHERE category = 'popular_tours'",
    (error, results) => {
      if (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json({ message: "Failed to fetch data" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No records found" });
      }

      // Safely process each row
      const tours = results.map((row) => ({
        id: row.id,
        image_name: row.image_name,
        rating: row.rating,
        price: row.price,
        days: row.days,
        image: row.image_url
      }));

      res.json(tours);
    }
  );
});

// Route to delete an image entry by ID
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   db.query("DELETE FROM tour WHERE id = ? AND category = 'popular_tours'", [id], (error, results) => {
//     if (error) {
//       console.error("Error deleting image:", error);
//       return res.status(500).json({ message: "Failed to delete image" });
//     }

//     if (results.affectedRows === 0) {
//       return res.status(404).json({ message: "Image not found" });
//     }

//     res.json({ message: "Image deleted successfully" });
//   });
// });


export default router;
