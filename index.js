const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const patientRouter = require("./routers/patientRoutes");
const adminRouter = require("./routers/adminRoutes");
const authRouter = require("./routers/authRouter");
const receptionRouter = require("./routers/receptionRoutes");
const doctorRouter = require("./routers/doctorRoutes");
const labTechnicianRouter = require("./routers/labTechnicianRoutes");
const pharmacistRouter=require("./routers/pharmacistRoutes")
require('dotenv').config();

const app = express();

const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://natnael:CqMd83LicZQ6eV4Z@cluster1.e4nlf6k.mongodb.net/HospitalManagement?retryWrites=true&w=majority&appName=Cluster1");
        console.log('Database connected');
    } catch (err) {
        console.error("Database failed to connect", err);
    }
};

db();

app.use(cors({
    origin: 'https://hospital-management-client-nu.vercel.app/',
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/patient", patientRouter);
app.use("/admin", adminRouter);
app.use("/reception", receptionRouter);
app.use("/auth", authRouter);
app.use("/doctor", doctorRouter);
app.use("/labTechnician", labTechnicianRouter);
app.use("/pharmacist",pharmacistRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});