const express = require('express');
const router = express.Router();
const hp = require('../controller/Control')


router.get('/', hp.jem)
router.get('/about', hp.emile)
router.get('/contact', hp.contact)
router.get('/message', hp.message)
router.get('/report', hp.report)
module.exports = router;