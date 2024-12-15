import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import "./config/passport.js";  // Ensure this import is present
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import db from "./config/db.js";
import multer from "multer"; // Added for handling file uploads
import jwt from "jsonwebtoken";
import passport from "passport";
import bookingRoutes from "./routes/booking.js";
import reviewRoutes from "./routes/review.js";
import blogRoutes from "./routes/blog.js";
import popularTourRoutes from "./routes/most_popular_tour.js";
import heroSectionRoutes from "./routes/hero_section.js";
import topSpotsRoutes from "./routes/topspots.js";









dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Add these lines to increase the upload size limit
app.use(express.json({ limit: "100mb" })); 
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// Add booking routes
app.use("/api", bookingRoutes);

// Routes for review 
app.use("/api/reviews", reviewRoutes);

// Routes for blogs
app.use("/api", blogRoutes);

//Routes for most_popular_tours
app.use("/api/most_popular_tours", popularTourRoutes);

//Routes for hero section
app.use("/api/hero_section", heroSectionRoutes);

//Routes for topspots
app.use("/api/top_spots", topSpotsRoutes);

//winter tour routes
// Multer configuration for handling image uploads
const upload = multer({ storage: multer.memoryStorage() });

// Image upload route with image_name support
app.post("/api/slider_upload", upload.single("image"), (req, res) => {
  const { imageName, category } = req.body; // Expecting imageName and category from the frontend

  if (!req.file || !imageName || !category) {
    return res.status(400).json({ message: "File, image name, or category missing" });
  }

  const imageData = req.file.buffer; // Image data as buffer

  db.query(
    "INSERT INTO tour (image_name, image, category) VALUES (?, ?, ?)",
    [imageData, imageName, category],
    (error, results) => {
      if (error) {
        if (error.fatal) {
          console.error('Fatal error in database connection:', error);
        } else {
          console.error("Error uploading image:", error);
        }
        return res.status(500).json({ message: "Failed to upload image" });
      }
      res.status(201).json({
        message: "Image uploaded successfully",
        imageId: results.insertId,
      });
    }
  );
});

app.get("/api/slider_images", (req, res) => {
  db.query(
    "SELECT id, image, image_name, location FROM tour WHERE category = 'winter_track'",
    (error, results) => {
      if (error) {
        console.error("Error fetching images:", error);
        return res.status(500).json({ message: "Failed to fetch images" });
      }

      // Convert binary image data to base64 for each image
      const images = results.map((row) => ({
        id: row.id,
        image_name: row.image_name,
        location: row.location,
        image_data: `data:image/jpeg;base64,${Buffer.from(row.image).toString("base64")}`,
      }));

      res.json(images); // Send images as JSON
    }
  );
});

app.delete("/api/slider_images/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tour WHERE id = ?", [id], (error) => {
    if (error) {
      console.error("Error deleting image:", error);
      return res.status(500).json({ message: "Failed to delete image" });
    }
    res.status(200).json({ message: "Image deleted successfully" });
  });
});



app.get("/api/tour", (req, res) => {
  const query = "SELECT * FROM tour"; // Adjust based on your table name
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching tours:", err);
      return res.status(500).json({ message: "Failed to fetch tours" });
    }
    res.json(results);
  });
});

app.post("/api/tour/upload", upload.single("image"), (req, res) => {
  const { image_name, price, days, rating, location, listing, category } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  if (!image_name || !price || !days || !rating || !location || !listing || !category || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO tour (image_name, image, rating, price, days, location, listing, category)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [image_name, image, rating, price, days, location, listing, category],
    (err, result) => {
      if (err) {
        console.error("Error uploading tour:", err);
        return res.status(500).json({ message: "Failed to upload tour" });
      }
      res.json({ message: "Tour uploaded successfully" });
    }
  );
});

app.delete("/api/tour/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM tour WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting tour:", err);
      return res.status(500).json({ message: "Failed to delete tour" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Tour not found" });
    }
    res.json({ message: "Tour deleted successfully" });
  });
});

// Add session middleware for Google OAuth
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Existing routes
app.use("/api/auth", authRoutes);

// Google login route
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback route
app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.redirect(`http://localhost:5173?token=${token}`);
  }
);

// Logout route
app.get("/api/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Logout failed");
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});




// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
