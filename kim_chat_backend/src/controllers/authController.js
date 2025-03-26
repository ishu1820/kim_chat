const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    let { name, username, email, password } = req.body;


    name = name.toUpperCase();
    username = username.toLowerCase();
    email = email.toLowerCase();

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ name, username, email, password: hashedPassword });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ message: "User created successfully", token, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error signing up", error });
  }
};


module.exports = {signup};