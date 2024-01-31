const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID = "802599943235-ij0vh00krbfng1vqhd39bj5rcgrbd9fn.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"



passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });