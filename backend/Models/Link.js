const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const linkarr = new Schema({
     link: { type: String, required: true,min:6 },
})

const linkSchema = new Schema({
     _id:{ type:String, required:true, min:6 },
     Link:{ type:[linkarr], required:true}
}, {
     timestamps:true
})
     
const Link = mongoose.model('Link', linkSchema)
module.exports=Link