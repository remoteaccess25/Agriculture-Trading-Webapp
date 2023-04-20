const mongoose = require('mongoose')

const conenctDB = (url) => {
    return mongoose.connect(url)
        .then(console.log("connected"))
        .catch((error) => console.log(error))
}


module.exports = conenctDB