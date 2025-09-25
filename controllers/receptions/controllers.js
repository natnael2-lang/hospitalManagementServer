import Appointment from "../../models/appointment";
const receptionOnLoad=(req,res)=>{
       const role=req.role;
       if(!role==="reception"){return res.status(302).json({redirect:"/login"})}
       return res.status(200).send("accepted")
} 

const patientAppointment=async(req,res)=>{
       const post=req.body
       if(!post){
              console.log("appointment schedule not send")
             return  res.status(404).json({message:"appointment form not received"})
       }

       try{
              
               const appointment=new Appointment(post)
               await appointment.save();
               return res.status(202).json({message:"appointment created successfuly"})
       }
       catch(err){
              return res.status(500).json({message:"servor error"})
       }
        
}

module.exports={receptionOnLoad,patientAppointment}