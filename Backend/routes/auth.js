
const express = require("express"); // goto "https://express-validator.github.io/docs/" for validator documentation
const { body, validationResult } = require("express-validator"); // use "npm install --save express-validator"
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../module/User");
require('dotenv').config();
const bycrypt = require("bcrypt");
const fetch = require('node-fetch');


// for JWT authetication
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET_for_ACCESS_TOKEN = process.env.JWT_SECRET_for_ACCESS_TOKEN;

// route 1 for creating user

router.post(
  "/createaccount",
  // this part is to check wether user has given correct input or not
  [
    // here after email a msg is there which shown with the error for a particular value
    body("name", "enter the valide email").isLength({ min: 3 }), // check naem lenght atleat 4 char long
    body("email", "enter the valide email").isLength({ min: 4 }), // check naem lenght atleat 4 char long
    body("password", "Enter the correct password").isLength({ min: 5 }), //password of minimum lenght 5
  ],
  // below we have to make this function as async because we are using asyncronus function
  async (req, res) => {
    let Success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({"success":Success,errors: errors.array() });
    }

    try {
      // check whaether the user with the email exists already
      let isUseExit = await User.findOne({ email: req.body.email });
      if (isUseExit) {
        return res.status(400).json({"success":false, error: "user already exists" });
      }
      // geting salt from the function
      const salt = await bycrypt.genSalt(10);
      // adding the password and creting hash of it
      const secpass = await bycrypt.hash(req.body.password, salt);
      // adding data to the collection
      let NewAccount = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      // for jwt authentication taking id of the user
      const data_for_gen_token = {
        user: {
          id: NewAccount.id,
        },
      };
      const auth_token = jwt.sign(data_for_gen_token, JWT_SECRET);

      res.json({"success":true,auth_token });
    } catch (error) {
      // this is used to catch error which is in the try block
      console.error(error.messsage);
      res.status(500).json({"success":false, error: "some error occured" });
    }
  }
);


// route 2 for  login 
router.post(
  "/login",
  [
    body("email", "enter the valide email").isLength({ min: 4 }),
    body("password", "enter the password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req); // to check weather email is valide or not
    if (!errors.isEmpty()) {
      return res.status(400).json({"success":false, errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let userAccount = await User.findOne({ email });
      if (!userAccount) {
        return res.status(400).json({"success":false, error: "invalid credential" });
      }
      // compare password and hash and return bool value
      const comppass = await bycrypt.compare(password, userAccount.password);

      if (!comppass) {
        return res.status(400).json({"success":false,error: "invalid credential" });
      }

      const accountId = {
        user: {
          id: userAccount.id,
        },
      };

      const authtoken = jwt.sign(accountId, JWT_SECRET);

      // this is call header and only use one time in a flow
      res.json({"success":true,authtoken });

      // this is used to catch error which is in the try block
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("some internal error");
    }
  }
);


router.post('/facebook', async (req, res) => {
  const { accessToken } = req.body;

  try {
    const response = await fetch(`https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${FACEBOOK_APP_ID}|${FACEBOOK_APP_SECRET}`);
    const data = await response.json();
    if (data.data.is_valid) {
      // Token is valid, create user session
      const userData = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`);
      const userDataJson = await userData.json();
      const gen_token = {
        user: {
          id: userDataJson.id,
          name:userDataJson.name,
          email:userDataJson.email,
          accessToken: accessToken
        },
      };
      const auth_token = jwt.sign(gen_token, JWT_SECRET_for_ACCESS_TOKEN);
      res.status(200).json({"auth-token":auth_token});
    } else {
      res.status(401).json({ error: 'Invalid token' });
    }
  } catch (error) {
    console.error('Error during Facebook authentication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post("/getuser", fetchuser, async (req, res) => {
  let Success = false;
  try {
    let userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    Success=true;
    res.json({"success":Success,user:user});
  } catch (error) {
    console.error(error);
    res.status(500).json({"success":Success,error:"some internal error in get"});
  }
});

module.exports = router;


