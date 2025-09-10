const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Patient } = require('../../models/patient.js');

let genId=1008;
const patientRegister = async (req, res) => {
    try {
        const post = req.body.patientInfo;

        if (!post) {
            return res.status(400).send("Patient sign-up data not posted");
        }
        console.log(post)
         const existingPatient = await Patient.findOne({ email: post.email });
        if (existingPatient) {
             console.log("already exits",existingPatient)
            return res.status(400).send("Email already exists");
        }

        const newPatient = new Patient({ ...post, cardNumber: `PT${genId}` });
        await newPatient.save();
        genId++;

        return res.status(201).json({ id: `${newPatient.cardNumber}` });
    } catch (error) {
        console.error("Failed to post patient sign-up", error);
        return res.status(500).send("Internal server error");
    }
};

module.exports = {
    patientRegister,
};