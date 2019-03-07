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




// app.post('/AddFile', upload.any(), (req, res) => {
//     var data = fs.readFileSync('files/' + req.files[0].filename, 'utf8');
//     filreringWord(data.toString(), result => {
//         console.log(result);
//     });
//     const arr = [{ word1: 'chaim' }, { word1: 'tzipora',  }];
//     mongoDbCon.mongoAdd(arr);
//     res.end('ok');
// });

// router.get('/getWords:name', (req) => {
//     var word = req.params.name;
//     mongoDbCon.mongoGet({name: word },res=>{
//         console.log(res);
//     })
// },(res)=>{
//     res.send(res)
// });


app.post('/results', upload.any(), (req, res) => {
    var data = fs.readFileSync('files/' + req.files[0].filename, 'utf8');
    filreringWord(data.toString(), result => {
        console.log(result);
    });
    // const arr = [{ word1: 'chaim',word2: 'cohen', sum: 24}, { word1: 'tzipora', word2: 'cohen', sum: 30 }];
    const word = new Word({ word1: 'chaim',word2: 'cohen', sum: 24})
    console.log(word);
    
    word.save().then(() => {
        res.status(201).send(word)
    }).catch((e) => {
        res.status(400).send(e)
    })

});

app.get('/results:name', (req, res) => {
    var word = req.params.name;
    console.log(word);
    Word.find({word1: word}).then((word) => {
        console.log(word);
        res.status(200).send(word)
    }).catch((e) => {
        res.status(500).send()
    })
})


// Word.find().then((word) => {
//     console.log(word);
//     // res.status(200).send(word)
// }).catch((e) => {
//     // res.status(500).send()
// })

app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});

