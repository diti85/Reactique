const mongoose = requre("mongoose")
const OrderSchema = new mongoose.Schema(
    {
        userId: {type:String, required:true, unique:true},
        products: [
            {
                productId:{type:String},
                quantity:{type:Number,default:1},
            }
        ],
        amount:{type:Number, required:true},
        address:{type:Object,required:true},
        status:{type:String, defualt:"Pending"}
    },{timestamps:true}
)

module.exports = mongoose.model("Order", OrderSchema);