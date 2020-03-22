const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength:100
    }
});

const Publisher = mongoose.model('Brand', brandSchema);


module.exports = {brand}