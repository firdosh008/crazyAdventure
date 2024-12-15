import express from "express";
import db from "../config/db.js";
import multer from "multer";

const router = express.Router();

// Multer setup for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to upload image and image name to the database with category = 'top_spots'
// router.post("/upload", upload.single("image"), (req, res) => {
//   const { image_name } = req.body;

//   if (!image_name || !req.file) {
//     return res.status(400).json({ message: "Image and image name are required" });
//   }

//   const image = req.file.buffer; // Buffer for the binary data of the image
//   const listing = 10; // Default listing value
//   const category = "top_spots"; // Explicitly set the category

//   db.query(
//     "INSERT INTO tour (image, image_name, listing, category) VALUES (?, ?, ?, ?)",
//     [image, image_name, listing, category],
//     (error, results) => {
//       if (error) {
//         console.error("Error uploading image:", error);
//         return res.status(500).json({ message: "Failed to upload image" });
//       }
//       res.status(201).json({ message: "Image uploaded successfully", id: results.insertId });
//     }
//   );
// });

// Route to fetch all records where category = 'top_spots'
router.get("/fetch", (req, res) => {
  db.query(
    "SELECT id, image_name, image, listing FROM tour WHERE category = 'top_spots'",
    (error, results) => {
      if (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json({ message: "Failed to fetch data" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No records found" });
      }

      // Convert binary image data to base64 for each record
      const spots = results.map((row) => ({
        id: row.id,
        image_name: row.image_name,
        listing: row.listing,
        image: row.image
          ? `data:image/jpeg;base64,${Buffer.from(row.image).toString("base64")}`
          : null, // Handle null or undefined image data
      }));

      res.json(spots);
    }
  );
});

// Route to delete a record by ID and category = 'top_spots'
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   db.query(
//     "DELETE FROM tour WHERE id = ? AND category = 'top_spots'",
//     [id],
//     (error, results) => {
//       if (error) {
//         console.error("Error deleting record:", error);
//         return res.status(500).json({ message: "Failed to delete record" });
//       }

//       if (results.affectedRows === 0) {
//         return res.status(404).json({ message: "Record not found" });
//       }

//       res.json({ message: "Record deleted successfully" });
//     }
//   );
// });

export default router;
