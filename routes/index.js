var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer()
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'meta-file' });
});



router.post('/',upload.single('file'),function(req, res, next) {
    res.json({
        name:req.file.originalname,
        size:req.file.size,
        type:req.file.mimetype
    })
});


module.exports = router;
