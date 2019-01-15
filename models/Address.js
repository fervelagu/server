const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    street: { 
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    

    zipCode: Number,
    state: String,
    country: String,
});

module.exports = mongoose.model('Address', addressSchema);