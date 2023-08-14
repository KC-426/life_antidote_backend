const mongoose = require('mongoose')
const Enquiry_Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone_no: {
            type: Number,
            required: true
        },
        message: {
            type: String, 
            required: true
        },
        product_detail: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Enquiry', Enquiry_Schema)