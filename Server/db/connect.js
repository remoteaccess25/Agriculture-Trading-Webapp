const mongoose = require('mongoose')

const conncetDB = (url) => {
    return mongoose.connect(url)
        .then(console.log("connected"))
        // .catch((error) => console.log(error))
}

module.exports = conncetDB