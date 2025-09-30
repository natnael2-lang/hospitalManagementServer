const Appointment =require("../../models/appointment");
const Patient=require("../../models/patient");
const jwt=require("jsonwebtoken")
let id=2000
const getReceptionId=()=>{



}
const receptionOnLoad=(req,res)=>{
       const role=req.role;
       if(!role==="reception"){return res.status(302).json({redirect:"/login"})}
       return res.status(200).send("accepted")
} 

const patientAppointment=async(req,res)=>{
       const post=req.body
       
       console.log("post appointment ",post)
       if(!post){
              console.log("appointment schedule not send")
             return  res.status(404).json({message:"appointment form not received"})
       }

        const token = req.cookies.token;
        console.log("token",token)
            if (!token) {
                return res.status(400).json({redirect:"/login"});
           }
       
       
                 const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const username= decoded.username;
                console.log("username",username)


       try{
              
               const appointment=new Appointment({...post,receptionId:username})

               await appointment.save();
               return res.status(202).json({message:"appointment created successfuly"})
       }
       catch(err){
              return res.status(500).json({message:"servor error"})
       }
        
}
const patientRegistration=async(req,res)=>{
       
       const post=req.body
       
       console.log("post appointment ",post.data)
       if(!post){
              console.log("appointment schedule not send")
             return  res.status(404).json({message:"appointment form not received"})
       }

        const token = req.cookies.token;
        console.log("token",token)
            if (!token) {
                return res.status(400).json({redirect:"/login"});
           }
       
       
                 const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const username= decoded.username;
                console.log("username",username)


       try{
              
               const newPatient=new Patient({...post.data,cardNumber:`PT${id}`})

               await newPatient.save();
               console.log("database res ",newPatient)
               id++;
               console.log("patient database ",newPatient)
               return res.status(200).json({message:"appointment created successfuly"})
       }
       catch(err){
              return res.status(500).json({message:"servor error"})
       }
        
}

module.exports={receptionOnLoad,patientAppointment,patientRegistration}