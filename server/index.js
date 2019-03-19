const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');

const filreringWord = require('./filteringWoeds')
const Word = require('./models/word.js')
require('./db/mongoose')


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 1123;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


app.post('/results', upload.any(), (req, res) => {
    var data = fs.readFileSync('files/' + req.files[0].filename, 'utf8');
    filreringWord(data.toString(), result => {
        Word.insertMany(result,res).then(() => {
            res.status(201).send(result)
        }).catch((a) => {
            res.status(400).send(a)
        })
    });
});

app.get('/results:name', (req, res) => {
    var word = req.params.name;
    console.log(word);
    Word.find({word1:word}).then((word) => {
        console.log('hjgkjhgjhg');
        
        console.log(word);
        res.status(200).send(word)
    }).catch((e) => {
        console.log(e);
        
        res.status(500).send()
    })
})


app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});

