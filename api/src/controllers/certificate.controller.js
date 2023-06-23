const { Certificate } = require("../db");

const createCertificate = async (req, res) => {
  try {
    const { issuance_date } = req.body;
    const certificate = await Certificate.create({ issuance_date });
    res.json(certificate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating certificate" });
  }
};

const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.findAll();
    res.json(certificates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving certificates" });
  }
};

const getCertificateById = async (req, res) => {
  try {
    const { certificateId } = req.params;
    const certificate = await Certificate.findByPk(certificateId);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.json(certificate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving certificate" });
  }
};

const updateCertificateById = async (req, res) => {
  try {
    const { certificateId } = req.params;
    const { issuance_date } = req.body;
    const certificate = await Certificate.findByPk(certificateId);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    certificate.issuance_date = issuance_date;
    await certificate.save();
    res.json(certificate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating certificate" });
  }
};

const deleteCertificateById = async (req, res) => {
  try {
    const { certificateId } = req.params;
    const certificate = await Certificate.findByPk(certificateId);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    await certificate.destroy();
    res.json({ message: "Certificate deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting certificate" });
  }
};

module.exports = {
  createCertificate,
  getCertificates,
  getCertificateById,
  updateCertificateById,
  deleteCertificateById,
};
