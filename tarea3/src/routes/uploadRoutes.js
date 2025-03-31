const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const upload = require('../middlewares/upload');

router.get('/', uploadController.getGallery);
router.get('/upload', uploadController.showUploadForm);
router.get('/gallery', uploadController.getGallery);

router.post('/upload', upload.single('image'), uploadController.uploadFile);

module.exports = router;