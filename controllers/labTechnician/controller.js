const LabRequests = require("../../models/labRequest");

const getLabRequests = async (req, res) => {
    try {
        const labRequest = await LabRequests.findOne({ status: "incomplete" });
        
        if (!labRequest) {
            return res.status(404).json({ message: "No request" });
        }
        
        res.status(200).json({ data: labRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getLabRequests }; 