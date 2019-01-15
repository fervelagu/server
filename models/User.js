const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String, 
    password: String,
    age: Number,
    active: Boolean,
    email: { 
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        required: true,
        default: 'http://lllkd.kcol'
    },
    addresses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Address'
        }
    ],
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Orders'
        }
    ],
});

module.exports = mongoose.model('User', userSchema);