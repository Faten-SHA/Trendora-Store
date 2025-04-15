import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({

    title:{type:String, required:true},
    desc:{type:String, required:true},
    // whatinbox:{type:String},
    img:{type:String, required:true},
    video:{type:String},
    wholesalePrice:{type:Number},
    wholesaleMinimumQuantity:{type:Number},
    categories:{type:Array},
    concern:{type:Array},
    brand:{type:String},
    skintype:{type:Array},
    originalPrice:{type:Number},
    discountedPrice:{type:Number},
    inStock:{type:Boolean, default:true},
    ratings: [
        {
            star: {type:Number, min:1, max:5},
            comment: {type:String},
            name: {type:String}
            postedBy: {type:String}
        }
    ]

})

const Product = mongoose.model('Product', ProductSchema);
export default Product;