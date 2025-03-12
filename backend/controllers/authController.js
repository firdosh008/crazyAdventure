import { createUser, findUserByEmail } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "../config/passport.js";

export const register = (req, res) => {
  const { username, email, password } = req.body;
  findUserByEmail(email, (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }
    createUser(username, email, password, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};
 //login 
export const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Log the admin status and username for debugging
    console.log("user id:", user.id);
    console.log("User is admin:", user.isAdmin);
    console.log("Username:", user.username);

    res
      .cookie("auth_token", token, { httpOnly: true })
      .json({
        message: "Login successful",
        token,
        isAdmin: user.isAdmin, // Include admin status
        username: user.username, // Add username to the response
        userId: user.id, // Add userId to the response
      });
  });
};

export const logout = (req, res) => {
  res.clearCookie("auth_token").json({ message: "Logged out successfully" });
};

// New: Handle Google OAuth login
export const googleLogin = (req, res) => {
  // Google user information is available in req.user (set by Passport.js)
  if (!req.user) {
    return res.status(401).json({ message: "Google authentication failed" });
  }

  const { email, name } = req.user;

  // Check if user exists
  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length === 0) {
      // If user doesn't exist, create a new one
      createUser(name, email, null, (err, result) => {
        if (err) return res.status(500).json({ message: "Error creating user" });

        // Generate a token for the new user
        const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res
          .cookie("auth_token", token, { httpOnly: true })
          .json({ message: "Login successful", token });
      });
    } else {
      // User exists, generate a token
      const user = results[0];
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res
        .cookie("auth_token", token, { httpOnly: true })
        .json({ message: "Login successful", token });
    }
  });
};
