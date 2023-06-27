const { Payment } = require("../db");

const createPayment = async (req, res) => {
  try {
    const { payment_date, payment_amount, profileId } = req.body;
    const payment = await Payment.create({ payment_date, payment_amount, profileId });
    res.json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating payment" });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving payments" });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    res.json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving payment" });
  }
};

const updatePaymentById = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const { payment_date, payment_amount } = req.body;
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    payment.payment_date = payment_date;
    payment.payment_amount = payment_amount;
    await payment.save();
    res.json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating payment" });
  }
};

const deletePaymentById = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    await payment.destroy();
    res.json({ message: "Payment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting payment" });
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
};
