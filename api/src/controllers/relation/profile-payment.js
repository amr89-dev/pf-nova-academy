const {Profile} = require("../../db");
const {Payment} = require("../../db");

// Controlador para obtener el perfil con sus pagos
const getProfileWithPayments = async (req, res) => {
  const profileId = req.params.profileId;
  try {
    const profile = await Profile.findByPk(profileId, {
      include: [Payment],
    });
    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el perfil con los pagos" });
  }
};

// Controlador para crear un nuevo pago para un perfil
const createPaymentForProfile = async (req, res) => {
  const profileId = req.params.profileId;
  const { payment_date, payment_amount } = req.body;
  try {
    const profile = await Profile.findByPk(profileId);
    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }
    const payment = await Payment.create({ payment_date, payment_amount, profileId });
    res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el pago para el perfil" });
  }
};

module.exports = {
  getProfileWithPayments,
  createPaymentForProfile,
};
