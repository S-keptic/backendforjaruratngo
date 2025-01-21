const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = new User({ username, password, role });
        await user.save();
        res.status(201).send({ message: "User registered" });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).send({ token });
};
