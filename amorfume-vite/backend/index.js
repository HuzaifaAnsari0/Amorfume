const express = require("express");
require("dotenv").config(); // Ensure this is at the top to load environment variables first
const connectDB = require("./src/db.js"); // Adjust the path as necessary
const router = require("./src/router/userRouter.js"); // Adjust the path as necessary
const adminRoutes = require("./src/router/adminRoutes.js"); // Adjust the path as necessary
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./src/model/userModel.js");
const bodyParser = require('body-parser');
const Razorpay = require("razorpay");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const recommendations = require("./src/router/recommendations.js"); // Adjust the path as necessary

// Connect to MongoDB
connectDB();
const url = process.env.FRONTEND_URL

app.use(
  cors({
    origin: `${url}`, // Allow only the client app to connect
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent from the client
  })
);

app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

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

/*********************************************************
                      Google OAuth
*********************************************************/
// Passport setup
app.use(passport.initialize());
app.use(passport.session());

passport.use('google-register',
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
          // If no user is found by googleId, check if the email already exists
          const existingUserByEmail = await userdb.findOne({ email: profile.emails[0].value });
      
        if(existingUserByEmail){
          // If a user with the same email exists, log them in (update googleId if needed)
          existingUserByEmail.googleId = profile.id; 
          const token = jwt.sign({ userId: existingUserByEmail.id }, process.env.JWT_SECRET);
          return done(null, { user: existingUserByEmail, token });
      }
      
        // If no user is found by email either, create a new user
          user = new userdb({
              googleId:profile.id,
              name:profile.displayName,
              email:profile.emails[0].value,
              image:profile.photos[0].value
          });

          await user.save();
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return done(null,{ user, token })
  } catch (error) {
      return done(error,null)
  }
  }
));


passport.use('google-login', new OAuth2Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/login/callback",
  scope: ["email", "profile"],
},
async function(accessToken, refreshToken, profile, cb) {
  try {
    // Attempt to find the user in the database
    const user = await userdb.findOne({ googleId: profile.id });
    if (!user) {
      // User not found, you can decide how to handle this.
      // For example, redirect to signup or return an error.
      return cb(null, false, { message: 'User not found' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    // User found, return the user object
    return cb(null, { user, token });

  } catch (err) {
    return cb(err, null);
  }
}));

passport.serializeUser((userObj, done) => {
  if (userObj && userObj.user && userObj.user.id) {
    done(null, userObj.user.id); // Serialize user ID instead of the whole object
  } else {
    done(new Error('User object does not have an id property'), null);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userdb.findById(id); // Assuming userdb supports findById
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
// initial google ouath login
app.get("/auth/google",passport.authenticate("google-register",{scope:["profile","email"]}));

app.get("/auth/google/callback", passport.authenticate("google-register", {
  failureRedirect: `${url}/signup`
}), (req, res) => {
  if (req.user && req.user.token) {
    res.redirect(`${url}/?token=${req.user.token}`);
  } else {
    res.redirect(`${url}/signup`);
  }
});

app.get("/auth/google/login/callback", passport.authenticate("google-login", {
  failureRedirect: `${url}/login`
}), (req, res) => {
  if (req.user && req.user.token) {
    res.redirect(`${url}/?token=${req.user.token}`);
  } else {
    res.redirect(`${url}/login`);
  }
});


/*********************************************************
                      Payment
*********************************************************/

app.post("/order", async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send("Request body is missing");
    }

    const razorpay = new Razorpay({
      key_id: 'rzp_test_qE4CFpkQIJgBAY',
      key_secret: 'GjJlffkpJbd8aLXnbkerlJPN'
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if(!order){
        return res.status(500).send("Failed to create order");
    }
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/validate", async (req, res) => {

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body

    const sha = crypto.createHmac("sha256", "GjJlffkpJbd8aLXnbkerlJPN");
    // order_id + " | " + razorpay_payment_id

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest!== razorpay_signature) {
        return res.status(400).json({msg: " Transaction is not legit!"});
    }

    res.json({msg: " Transaction is legit!", status: "success", orderId: razorpay_order_id,paymentId: razorpay_payment_id});
})
/*********************************************************
                      
*********************************************************/

app.use('/', adminRoutes); // admin routes

// Use router for all routes
app.use("/", router);
app.use("/", recommendations); // recommendations routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on the defined port, fallback to 3000 if not specified
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
