const Doctor = require('../../models/employee.js');
const { Patient } = require('../../models/patient.js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const login = async (req, res) => {


    try {
        let role;

        

        const { username, password } = req.body;
        const patientRegex = /^PT\d+$/; 
        const doctorRegex = /^DR\d+$/;

        let user;
         
        if (patientRegex.test(username)) {
            user = await Patient.findOne({ username });
            if (!user) {
                return res.status(404).send("Patient not found");
            }
            role = 'patient'; 
        } else if (doctorRegex.test(username)) {
            user = await Doctor.findOne({ employeeId: username });
            if (!user) {
                return res.status(404).send("Doctor not found");
            }
            console.log(user)
            
            role = user.role; 
        } else {
            return res.status(400).send("Invalid ID format.");
        }

      

        const tokenPayload = { username, role };
        const newToken = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log("role",role,"token",newToken)
        res.cookie('token', newToken, {
            httpOnly: true,
            secure:true, 
            maxAge: 3600000,
            sameSite: 'Lax',
        });

        return res.status(200).json({ redirect: `/${role}` }); 

    } catch (error) {
        console.error("Failed to login", error);
        return res.status(500).send("Internal server error");
    }
};

const loginOnLoad = (req, res) => {
    const token = req.cookies.token; 
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return res.status(200).json({ redirect: `/${decoded.role}` });
        } catch (error) {
            console.error("Token verification failed", error);
            return res.status(400).json({ message: "Invalid token, please login" });
        }
    }
    return res.status(400).json({ message: "No token, please login" });
};

const logout = (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    });
    return res.status(200).json({ redirect: "/" });
};
module.exports = { login, logout ,loginOnLoad};
