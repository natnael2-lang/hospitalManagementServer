const LabRequests = require("../../models/labRequest");
const LabResult = require("../../models/labResult");

const jwt = require("jsonwebtoken");

const getLabRequests = async (req, res) => {

        let username;
        const token = req.cookies.token;
                console.log("token",token)
                    if (!token) {
                        console.log("no token")
                        return res.status(400).json({redirect:"/login"});
                   }
               
               
                         const decoded = jwt.verify(token, process.env.JWT_SECRET);
                        username= decoded.username;
                        console.log("username",username)
    try {
        const labRequest = await LabRequests.find({ status: "Pending",labTechnicianId:username });
        console.log("labrequest ",labRequest)
        
        if (labRequest.length === 0) {
    return res.status(404).json({ message: "No request" });
}
        res.status(200).json({ data: labRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const postLabresult = async (req, res) => {
  const post=req.body
  if (!post || Object.keys(post).length === 0) {
    console.log("lab result is not posted");
    return res.status(400).json({ message: "The lab result is not received" });
}
        let username;
        const token = req.cookies.token;
                console.log("token",token)
                    if (!token) {
                        console.log("no token")
                        return res.status(400).json({redirect:"/login"});
                   }
               
               
                         const decoded = jwt.verify(token, process.env.JWT_SECRET);
                        username= decoded.username;
                        console.log("username",username)
    try {
        const labResult = new LabResult({...post,labTechnicianId:username });
                            await labResult.save()
        console.log("result ",labResult)
        
        if (!labResult) {
            return res.status(400).json({ message: "invalid form" });
        }
        
        res.status(200).json({ data: labResult });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getLabRequests,postLabresult }; 