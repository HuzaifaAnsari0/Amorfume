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
              googleId:profile.id,
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

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user ID instead of the whole object
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
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
  successRedirect:"http://localhost:3000/",
  failureRedirect:"http://localhost:3000/signup"
}))

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

    res.json({msg: " Transaction is legit!", orderId: razorpay_order_id,paymentId: razorpay_payment_id});
})
/*********************************************************
                      
*********************************************************/

app.use('/', adminRoutes); // admin routes

// Use router for all routes
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on the defined port, fallback to 3000 if not specified
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
