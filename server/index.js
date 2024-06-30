const express = require("express");
require("dotenv").config(); // Ensure this is at the top to load environment variables first
const connectDB = require("./src/db.js"); // Adjust the path as necessary
const router = require("./src/user/router.js"); // Adjust the path as necessary
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./src/user/userModel.js");
const bodyParser = require('body-parser');

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow only the client app to connect
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent from the client
  })
);
app.use(bodyParser.json()); // Parse JSON bodies

// Middleware to parse JSON bodies
app.use(express.json());

// Setup session middleware
app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true,
  })
);

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["email", "profile"],
  },
  async (accessToken, refreshToken, profile, done)=>{
    try {
      let user = await userdb.findOne({googleId:profile.id});

      if(!user){
          user = new userdb({
              // googleId:profile.id,
              name:profile.displayName,
              email:profile.emails[0].value,
              image:profile.photos[0].value
          });

          await user.save();
        }
      return done(null,user)
  } catch (error) {
      return done(error,null)
  }
  }
));

passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
  successRedirect:"http://localhost:3000/",
  failureRedirect:"http://localhost:3000/signup"
}))

// app.get("/login/sucess",async(req,res)=>{

//   if(req.user){
//       res.status(200).json({message:"user Login",user:req.user})
//   }else{
//       res.status(400).json({message:"Not Authorized"})
//   }
// })

// app.get("/logout",(req,res,next)=>{
//   req.logout(function(err){
//       if(err){return next(err)}
//       res.redirect("http://localhost:3000");
//   })
// })

// Use router for all routes
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on the defined port, fallback to 3000 if not specified
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
