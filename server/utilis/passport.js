const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const passport = require("passport")

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://yourdomain:3000/auth/google/callback"
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser((user, done)=>{
  done(null, user)
})
 
passport.deserializeUser((user, done)=>{
    done(null, user)
  })