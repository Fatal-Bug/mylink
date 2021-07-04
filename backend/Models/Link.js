const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const linkSchema = new Schema({
     Link1: { type: String, required: true,min:6 },
     Link2: { type: String, required: true ,min:6},
     Link3: { type: String, required: true ,min:6},
}, {
     timestamps:true
})
     
const Link = mongoose.model('Link', linkSchema)
module.exports=Link