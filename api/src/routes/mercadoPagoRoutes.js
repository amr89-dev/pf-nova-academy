const {Router} = require('express');
const {createPayment} = require ("../controllers/mercadoPago.controller");
const mercadoPagoRoutes = Router();

// Ruta para realizar el pago
mercadoPagoRoutes.post('/', createPayment);

module.exports = mercadoPagoRoutes;


  