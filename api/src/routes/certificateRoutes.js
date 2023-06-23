const {Router} = require('express');
const {createCertificate, getCertificates, getCertificateById, updateCertificateById, deleteCertificateById} = require ("../controllers/certificate.controller.js");
const certificateRoutes = Router();



certificateRoutes.get("/", getCertificates)
certificateRoutes.get("/:certificateId", getCertificateById)
certificateRoutes.post("/", createCertificate)
certificateRoutes.put("/:certificateId", updateCertificateById)
certificateRoutes.delete("/:certificateId", deleteCertificateById)

module.exports = certificateRoutes;