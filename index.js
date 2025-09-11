const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const patientRouter = require("./routers/patientRoutes");
const adminRouter = require("./routers/adminRoutes");
const authRouter = require("./routers/authRouter");
const receptionRouter = require("./routers/receptionRoutes");
require('dotenv').config();

const app = express();

// Database connection
const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://natnael:CqMd83LicZQ6eV4Z@cluster1.e4nlf6k.mongodb.net/HospitalManagement?retryWrites=true&w=majority&appName=Cluster1");
        console.log('Database connected');
    } catch (err) {
        console.log("Database failed to connect", err);
    }
};

db();

// CORS configuration
app.use(cors({
    origin: 'https://hospital-management-client-nine.vercel.app',
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

// Route setups
app.use("/patient", patientRouter);
app.use("/admin", adminRouter);
app.use("/reception", receptionRouter);
app.use("/auth", authRouter);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
