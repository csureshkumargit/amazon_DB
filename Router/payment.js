const express = require('express');
const router = express.Router();
const paymentGatewayController = require('../Controller/PaymentGateway');

router.post('/payment', paymentGatewayController.payment);
router.post('/callback', paymentGatewayController.callback);
//router.get('/', usersController.validateToken, usersController.getAllUsers);

module.exports = router;