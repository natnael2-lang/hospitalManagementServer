const Appointments = require("../../models/appointment");

const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointments.findOne({ status: "incomplete" });
        
        if (!appointments) {
            return res.status(404).json({ message: "No request" });
        }
        
        res.status(200).json({ data:appointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getAppointments }; 