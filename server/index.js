const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const mongoDbCon = require('./mongoDbCon');
const filreringWord = require('./filteringWoeds')

const PORT = 8888;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


const app = express();
app.use(cors());
app.use(express.json());


app.post('/AddFile', upload.any(), (req, res) => {
    var data = fs.readFileSync('files/' + req.files[0].filename, 'utf8');
    filreringWord(data.toString(), result => {
        console.log(result);
    });
    const arr = [{ name: 'fffccxx' }, { name: 'dddddssss' }];
    mongoDbCon.mongoAdd(arr);
    res.end('ok');
});

app.get('/getWords', (req, res) => {
    mongoDbCon.mongoGet({name: req});
    res.end('ok');
});

app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});
