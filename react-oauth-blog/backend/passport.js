const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const mongoose = require("mongoose");

// Load environment variables
require('dotenv').config();


const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.REACT_APP_GOOGLE_SLIENT_SECRET;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a User model for MongoDB
const User = mongoose.model("User", {
  googleId: String,
  displayName: String,
  photos: [{
    value: String
  }],
  // Add other fields as needed
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GOOGLE_SLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // Check if the user already exists in the database
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // User already exists, return the user
        return done(null, existingUser);
      }

      // User doesn't exist, create a new user in the database
      const newUser = new User({
        googleId: profile.id,
        displayName: profile.displayName,
        photos: profile.photos.map(photo => ({ value: photo.value })),
        // Add other fields as needed
      });

      await newUser.save();
      done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});