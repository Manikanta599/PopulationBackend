const express = require('express');
const formController = require('../Controller/formcontroller');

const router = express.Router();

router.get('/get', formController.getDetails);
router.get('/counts', formController.getCount);
router.post('/save', formController.saveDetails);
router.delete('/delete',formController.deleteDetails);


module.exports = router;
