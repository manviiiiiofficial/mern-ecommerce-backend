const User = require("../models/userModel");
const bcrypt = require("bcrypt");


//  Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      userType
    });

    res.status(201).json({
      message: "User registered successfully",
      data: user
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// LOGIN
const loginUser = async (req, res) => {
  try {
    // check email & password
    if (!req.body.email || !req.body.password) {
      return res.status(403).json({
        message: "Email and Password is required",
        success: false
      });
    }

    // find user
    const user = await User.findOne({ email: req.body.email });

    // user not found
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false
      });
    }

    // compare password
    const isMatch = bcrypt.compareSync(req.body.password, user.password);

    // check password
    if (isMatch) {
      res.json({
        message: "Login successful",
        success: true,
        data: user
      });
    } else {
      res.status(401).json({
        message: "Invalid password",
        success: false
      });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//  Get Single User
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update User
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "User updated",
      data: user
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "User deleted" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// export all
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
};