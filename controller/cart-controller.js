const CartModel = require('../model/cart-model')

// module.exports.addProductToCart = function(req,res){
//     let product = req.body.product
//     let cart = new CartModel({
//         product : product,
        
//     })
//     cart.save(function(err,data){
//         if(err){
//             console.log(err)
//             res.json({msg:"Something Went Wrong!",status:-1,data:req.body})
//         }
//         else{
//             res.json({msg:"Product Added!",status:200,data:data})
//         }
//     })
// }


exports.postCart = asyncHandler(async (req, res, next) => {
    let cart = JSON.parse(req.body.cart);
    if (!cart) return res.json(products)
    for (var i = 0; i < products.length; i++) {
      id = products[i].id.toString();
      if (cart.hasOwnProperty(id)) {
        products[i].qty = cart[id]
        products.push(products[i]);
      }
    }
    return res.json(products);
  })