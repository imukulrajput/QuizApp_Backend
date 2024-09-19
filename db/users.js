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
            username: "SharikaAbrar",
            password: "sb12345",
            emailId: "sb@gmail.com",
        },
    ]
}

module.exports = userdata;