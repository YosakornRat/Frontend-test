const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema  = new Schema ({
    menu : {
        type: String
    },
    taste : {
        type: String
    },
    size : {
        type: String
    }
} , {
    collation: 'order'
})

module.exports = mongoose.model('Order', orderSchema)