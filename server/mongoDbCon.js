const MongoClient = require('mongodb').MongoClient;;

const mongoAdd = (array) => {
    const uri = "mongodb+srv://chaim:cohen1234@spiderweb-vmgts.mongodb.net/textfilters?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        client.db("textfilters").collection("result").insertMany(array)
        client.close();
    })
}
const mongoGet = (text,callbace) => {
    const uri = "mongodb+srv://chaim:cohen1234@spiderweb-vmgts.mongodb.net/textfilters?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(req => {
         client.db("textfilters").collection("result").find(text).toArray()
            .then(result => {
                callbace(result)
                // var word = req.params.name;
                // console.log(text.name);
                // return text.name;
                // // result.end(text);
                // console.log(result);
            }).catch(arr => {
                console.log(arr);
            })
    })
}

exports.mongoAdd = mongoAdd;
exports.mongoGet = mongoGet;
