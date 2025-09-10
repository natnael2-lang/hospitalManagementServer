const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const patientRouter =require("./routers/patientRoutes");
const adminRouter=require("./routers/adminRoutes");
const authRouter=require("./routers/authRouter")

const receptionRouter=require("./routers/receptionRoutes")
require('dotenv').config();
const app = express();
app.use(cookieParser());
const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://natnael:CqMd83LicZQ6eV4Z@cluster1.e4nlf6k.mongodb.net/HospitalManagement?retryWrites=true&w=majority&appName=Cluster1");
        console.log('database connected');
    } catch(err) {
        console.log("database failed to connect",err);
       
    }
}

db();


app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
}));

app.use(express.json());
app.use("/patient",patientRouter)
app.use("/admin",adminRouter)
app.use("/reception",receptionRouter)
app.use("/auth",authRouter)








const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});