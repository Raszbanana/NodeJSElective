import db from "./createConnection.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
  db.exec("DROP TABLE IF EXISTS players;");
}

db.exec(`CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(70)
);`);

// Seed
if (isInDeleteMode) {
db.run("insert into players (name) VALUES ('Messi')")
db.run("insert into players (name) VALUES ('Ronaldo')")
}