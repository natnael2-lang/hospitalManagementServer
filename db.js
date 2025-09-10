const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://salman:salman@cluster0.zfsrnui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('database connected');
    } catch(err) {
        console.log("database failed to connect");
       
    }
}
module.exports = db;