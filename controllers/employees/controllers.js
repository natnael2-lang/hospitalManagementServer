const Doctor=require("../../models/employee");
 let employeeId=1000
const employeeRegitration=async (req,res)=>{
   

    try{

        const post=req.body.data;
        console.log("post",post)
    if(!post){res.status(400).json({message:"employee post not found"})}
    const newEmployee=new Doctor({...post,employeeId:`DR${employeeId}`})
       await newEmployee.save()

       employeeId++;
        console.log("newpost",newEmployee)

     return res.status(201).json({ id:`${newEmployee.employeeId}`});
    


    }
    catch(err){
        res.status(500).json({message:"internal server error"})
        console.log(err)
    }
    

}



module.exports={employeeRegitration}