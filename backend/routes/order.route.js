const express = require('express');
const orderRoute = express.Router();

let orderModel = require('../models/order') 

//get all data 
orderRoute.route('/').get((req, res, next) => {
     orderModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}) 

//create data
orderRoute.route('/create-order').post((req, res, next) => {
    orderModel.create(req.body, (error, data) => {
        if (error){
            return next(error)
        } else {
            res.json(data)
        }
    }) 
}) 

//edit data
orderRoute.route('/edit-order/:id').get((req, res , next) => {
    orderModel.findById(req.params.id,(error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//update data 
orderRoute.route('/update-order/:id').put((req, res, next) => {
    orderModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error,data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Order Succuessfully updated')
        }
    })
})

//delete data
orderRoute.route('/delete-order/:id').delete((req, res, next) => {
    orderModel.findByIdAndDelete(req.params.id, (error,data) => {
        if(error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = orderRoute