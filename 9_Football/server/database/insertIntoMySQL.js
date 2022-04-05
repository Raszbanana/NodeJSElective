import db from "./createMySQLConnection.js";
const err = "";

db.query(`INSERT INTO players (name) VALUES ('Malte')`, (err, data =>{
    console.log(data);
    db.end();
}))