const bcryptjs = require('bcryptjs');

const keys = {
    "admin": "abcde",
}

const admin = (key) => {
    return (key === keys.admin) ? true : false
}




module.exports = {admin}

