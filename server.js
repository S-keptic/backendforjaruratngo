const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const resourceRoutes = require("./routes/resourceRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/resources", resourceRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
