const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
    title: String,
    price: Number,
    location: String,
    type: String,
    space: Number,
    file: { type: Buffer},
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    date: Date
});

mongoose.model('properties', propertySchema);