const ProductModel = require('../model/product-model')

module.exports.addProducts = function(req,res){
    let productName = req.body.productName
    let productImage = req.body.productImage
    let Description = req.body.Description
    let Quantity = req.body.Quantity

    let unitPrice = req.body.unitPrice

    // var obj = {
    //     img: {
    //         data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
    //         contentType: 'image/png'
    //     }
    // }
    // ProductModel.productImage.create(obj, (err, item) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         // item.save();
    //         res.redirect('/');
    //     }
    // });

    let product = new ProductModel({
        productName : productName,
        productImage : productImage,
        Description : Description,
        Quantity : Quantity,
        unitPrice : unitPrice
    })
    

    product.save(function(err,data){
        if(err){
            console.log(err)
            res.json({msg:"Something Went Wrong!",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Product Added!",status:200,data:data})
        }
    })
}


module.exports.listAllProduct = function(req,res){
    ProductModel.find(function(err,data){
        if(err){
            console.log(err)
            res.json({msg:"Something Went Wrong!",status:-1,data:err})
        }
        else{
            res.json({msg:"Products...",status:200,data:data})
        }
    })
}