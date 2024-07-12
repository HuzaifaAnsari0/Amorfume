const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel.js'); // Adjust the path as necessary
require('dotenv').config();

/*********************************************************
                      Register
*********************************************************/
const register = async (name, email, password) => {
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) return { message: "User already exists", status: 403 };
  
      // Hash the password before saving it to the database
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user object
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      // Save the new user to the database
      await newUser.save();
  
      // Generate a token for the new user
      const token = jwt.sign({ userId: newUser._id },process.env.JWT_SECRET);
  
      // Return success message and token
      return { 
        message: "User created successfully", 
        token: token,
        status: 200
      };
    } catch (error) {
      console.error("Error in user registration:", error);
      return { message: "Error registering user", status: 500 };
    }
  };


/*********************************************************
                      Login
*********************************************************/
const login = async (email, password) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return { message: "User not found", status: 404 };

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { message: "Invalid credentials", status: 401 };

    const isAdmin = user.role === 1;
    // Generate a token for the user
    const token = jwt.sign({ userId: user._id, isAdmin:isAdmin}, process.env.JWT_SECRET);

    console.log('isAdmin:', isAdmin);
    // Return success message and token
    return {
      isAdmin:true,
      message: "Logged in successfully",
      token: token,
      status: 200
    };
  } catch (error) {
    console.error("Error in user login:", error);
    return { message: "Error logging in user", status: 500 };
  }
};


/*********************************************************
                      editUser
*********************************************************/
const editUser = async (userId, updates) => {
  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) return { message: "User not found", status: 404 };

    // Update fields if they exist in updates object
    if (updates.name) user.name = updates.name;
    if (updates.email) user.email = updates.email;
    if (updates.password) {
      // Hash the new password before saving
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(updates.password, salt);
    }

    // Save the updated user
    await user.save();

    // Return success message
    return {
      message: "User updated successfully",
      status: 200
    };
  } catch (error) {
    console.error("Error in updating user:", error);
    return { message: "Error updating user", status: 500 };
  }
};

module.exports = { register, login, editUser };