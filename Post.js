const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true} )

postSchema.query.insensitiveNameFind = function(name){
    return this.find({ title: new RegExp( name , 'i') });
}

module.exports = mongoose.model("Post", postSchema);