const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "MukulRajput",
            password: "mr12345",
            emailId: "mr@gmail.com",
        },
        {
            id: uuid(),
            username: "HappyChauhan",
            password: "hc12345",
            emailId: "hc@gmail.com",
        },
    ]
}

module.exports = userdata;