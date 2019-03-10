const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chaim:cohen1234@spiderweb-vmgts.mongodb.net/textfilters?retryWrites=true', {
    useNewUrlParser: true,
    useCreateIndex: true
})
