// authControllers.js
const User = require('../models/authModels');
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
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        return res.status(200).json({
            msg: "User added successfully"
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    console.log("rerererfervervreverv", req.body);

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            'jwtSecret',
            { expiresIn: '24h' }, 
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};