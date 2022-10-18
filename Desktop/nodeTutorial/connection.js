const Client = require("pg").Client;


const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Password",
    database:"postgres"
})

module.exports = client;