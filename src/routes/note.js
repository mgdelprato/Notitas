const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');



router.post('/create', noteController.create)

router.get('/edit/:id', noteController.detail)
router.post('/edit/:id', noteController.update)

router.post('/delete/:id', noteController.delete)

module.exports = router;