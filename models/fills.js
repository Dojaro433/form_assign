const mongoose = require("mongoose");




const userSchema = new mongoose.Schema(


    {

        Name: "String",
        Date: "String",
        Sex: "String",
        Mobile: Number,
        Govid: "String",
        Govrid: "String",
        Label:"String",
        Gname:"String",
        Email: "String",
        CEumber: Number,
        Address: "String",
        State: "String",
        City: "String",
        Country: "String",
        Pincode: Number,
        Occupation: "String",
        Relegion: "String",
        Married: "String",
        Bgroup: "String",
        Nationality: "String"
    }




    

)

module.exports = mongoose.model("fills", userSchema);