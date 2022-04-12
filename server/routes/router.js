const express = require('express')
const  route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

//for root route
route.get('/', services.homeRoutes)

//for adding a user
route.get('/add-user', services.add_user)

//for updating a user
route.get('/update-user', services.update_user)

//API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route