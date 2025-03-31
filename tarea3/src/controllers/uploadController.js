const fs = require('fs');
const path = require('path');

const getGallery = (req, res) => {
    const uploadDir = path.join(__dirname, '../public/uploads');
    
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer los archivos');
        }
        
        const images = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png'].includes(ext);
        });
        
        res.render('gallery', { 
            images, 
            hasImages: images.length > 0 
        });
    });
};

const showUploadForm = (req, res) => {
    res.render('upload');
};

const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).render('upload', { 
            error: 'No se seleccionó ningún archivo o el archivo no es válido' 
        });
    }
    
    res.redirect('/gallery');
};

module.exports = {
    getGallery,
    showUploadForm,
    uploadFile
};