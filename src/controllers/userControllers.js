const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getAllUSers = async (req, res) => {
  console.log("get users")
  try {
      let user = await User.find();
      res.send(user);
  } catch (error) {
      console.log(error)
  }
}

exports.signup = async (req, res) => {
    const { username, email, password, billingAddress, shippingAddress, userRole } = req.body;
  
    try {
      let user = await User.findOne({ email });
  
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      user = new User({
        username,
        email,
        password,
        billingAddress,
        shippingAddress,
        userRole: userRole || 'USER' // Default to 'USER' if not provided
      });
  
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      console.log(user)
  
      await user.save();
      res.status(200).json({ message: 'User created successfully', user });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)
  try {
      let user = await User.findOne({ email });

      // need user role
      if (!user) {
          return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const payload = {
          user: {
              id: user._id,
          },
      };

      console.log(user)

      jwt.sign(
          payload,  
          process.env.JWT_SECRET,
          { expiresIn: '24h' },
          (err, token) => {
              if (err) throw err;
              res.json({ token  ,userData:user});
          }
      );
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
};

exports.logOut = async (req , res)=>{
  const { email, password } = req.body;
  try {
    console.log(req.body)
    res.status(200).json({ msg: 'Logout successful' });

  } catch (error) {
    console.log(error)
    res.status(500).send('Server error');
  }
}

exports.getAllSellersList = async (req , res) =>{
    try {
      let sellers = await User.find({  });

      
        res.send("data")
    } catch (error) {
        res.status(500).send('Server error');
    }
}

exports.getAllUsersList = async (req , res) =>{
    try {
        res.send("data")
    } catch (error) {
        res.status(500).send('Server error');
    }
}