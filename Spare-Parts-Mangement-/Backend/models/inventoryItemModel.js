//create Inventory item Model
const mongoose = require("mongoose")

//create schema
const inventoryItemSchema = mongoose.Schema({
    
    itemName:{
        type:String,
        required:[true,"Please add a Item Name"],
        trim: true //trim if there's space around a name
    },
    sku:{
        type:String,
        required:[true],
        default: "SKU",
        maxlength: 8
    },
    recieveDate: {
        type: String,   //mm/dd/yy
        
    },
    category:{
        type:String,
        trim:true
    },
    condition:{
        type:String,
        required:[true,"Please add a item condition"],
        trim:true
    },
    brand:{
        type:String,
        required:true,
        trim:true,
        
    },
    initialPrice:{
        type:String,
        required:[true,"Please add a Price (per item)"],
        default: "Rs",
        trim:true
    
    },
    initialQuantity:{
        type:String,
        required:[true,"Please add a Quantity"],
        trim:true
    },
    tax:{
        type:String,
        trim:true,
        default: "-",
    },
    newPrice:{
        type:String,
        default: "-",
        trim:true
    },
    quantityOut:{
        type:String,
        trim:true,
        default: "-",
    },
    quantityAvailable:{
        type:String,
        trim:true,
        default: "-",
    },
    totalPrice:{
        type:String,
        default: "-",
        trim:true
    },
    supplier:{
        type:String,
        trim: true //trim if there's space around a name
        
    },
    

},
{
    timestamps:true,
})

//access schema
const Inventory_Item = mongoose.model("inventory-items", inventoryItemSchema);
module.exports = Inventory_Item;