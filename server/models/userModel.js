import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Store the hashed password directly
  password: {
    type: String,
    required: true,
  },
  salt: String, // Store a unique salt value for each user
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contact: {
    phone: Number,
    address: {
      street: String,
      city: String,
      state: String,
      Zipcode: Number,
    },
  }
}, {timestamps: true});

// Middleware to hash the password before saving
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = this.hashPassword(this.password);
  }
  next();
});

// Method to hash the password
userSchema.methods.hashPassword = function (password) {
  return crypto
    .pbkdf2Sync(password, this.salt, 10000, 64, 'sha512')
    .toString('hex');
};

// Method to verify a password
userSchema.methods.verifyPassword = function (password) {
  const hashedPassword = this.hashPassword(password);
  return this.password === hashedPassword;
};

const User = mongoose.model('User', userSchema);

export default User;
