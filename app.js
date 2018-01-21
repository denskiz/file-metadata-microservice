const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 1024 * 1024 * 4 }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.status(200).json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(port, () => {
  console.log('Node is listening on port 8080');
});
