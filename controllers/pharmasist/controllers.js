const Prescription=require("../../models/prescription");
const jwt = require("jsonwebtoken");
const Medication=require("../../models/medicine")
const getOrders=async (req,res)=>{
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
                     const data = await Prescription.find({pharmacistId:username,status:"Pending" });
                                         
                     console.log("result ",data)
                     
                     if (!data) {
                         return res.status(404).json({ message: "invalid form" });
                     }
                     
                     res.status(200).json({ data });
                 } catch (error) {
                     console.error(error);
                     res.status(500).json({ message: "Internal Server Error" });
                 }
}

const sellMedicine=async (req,res)=>{
                   const post=req.body;
                   console.log("medicine post ",post)
    let username;
                    if(!post){
                        console.log("no post")
                        return res.staus(400).json({message:"the form is not posted "})
                    }
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
                     const data = new Medication({pharmacistId:username,...post });
                                         
                     console.log("result ",data)
                     
                     if (!data) {
                         return res.status(404).json({ message: "invalid form" });
                     }
                     
                     res.status(200).json({ data });
                 } catch (error) {
                     console.error(error);
                     res.status(500).json({ message: "Internal Server Error" });
                 }
}



module.exports={getOrders,sellMedicine}