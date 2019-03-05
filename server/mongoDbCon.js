const MongoClient = require('mongodb').MongoClient;;

const mongoAdd = (array) => {
    const uri = "mongodb+srv://chaim:cohen1234@spiderweb-vmgts.mongodb.net/textfilters?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
         client.db("textfilters").collection("result").insertMany(array)
        client.close();
    })
}
const mongoGet = (text) => {
    const uri = "mongodb+srv://chaim:cohen1234@spiderweb-vmgts.mongodb.net/textfilters?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        return client.db("textfilters").collection("result").find(text).toArray()
        .then(result =>{
            console.log(result);
        }).catch(arr =>{
            console.log(arr);
        })
    })
}


exports.mongoAdd = mongoAdd;
exports.mongoGet = mongoGet;
