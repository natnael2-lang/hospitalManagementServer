
const receptionOnLoad=(req,res)=>{
       const role=req.role;
       if(!role==="reception"){return res.statu(302).json({redirect:"/login"})}
       return res.status(200).send("accepted")
} 

module.exports={receptionOnLoad}