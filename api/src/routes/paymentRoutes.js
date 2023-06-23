const {Router} = require('express');
const {createPayment, getPayments, getPaymentById, updatePaymentById, deletePaymentById} = require ("../controllers/payment.controller");
const paymentRoutes = Router();


paymentRoutes.get("/", getPayments)
paymentRoutes.get("/:paymentId", getPaymentById)
paymentRoutes.post("/", createPayment)
paymentRoutes.put("/:paymentId", updatePaymentById)
paymentRoutes.delete("/:paymentId", deletePaymentById)

module.exports = paymentRoutes;