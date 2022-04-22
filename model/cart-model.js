const mongoose = require('mongoose')

let CartSchema = mongoose.Schema({
    product:{
        type: mongoose.Types.ObjectId,
        ref : "product"
    }
    
})

let CartModel = mongoose.model("cart",CartSchema)

module.exports = CartModel

