const mongoose = require('mongoose')


let ProductSchema = mongoose.Schema({
    productName:{
        type: String,
        required:true
    },
    productImage :{
        // type :String
         data : Buffer,
         contentType: String

    },
    Description:{
        type:String,
        required:true
    },
    Quantity:{
        type: Number,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    }
    
})

let ProductModel = mongoose.model("product",ProductSchema)

module.exports = ProductModel