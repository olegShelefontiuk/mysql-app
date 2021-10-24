  const {Router} = require( 'express')
  const customers = require("../controllers/customer.controller.js");


  const router = Router()
  // Create a new Customer
  router.route('/customers')
      .post(customers.create)
  module.exports = router