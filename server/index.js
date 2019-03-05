const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');

const PORT = 8888;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})


const app = express();
app.use(cors());
app.use(express.json());


app.post('/AddFile',upload.any(), (req, res) => {
    var data = fs.readFileSync('files/'+req.files[0].filename, 'utf8');
    data = data.toString(); 
    console.log(data);
    
    
    res.end('ok');
});


app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});