const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.

const PORT = 3100
const main = async () => {
  try {
    await conn.authenticate();
    await conn.sync({ force: true });
    console.log("Connection has been established successfully.");
    server.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};
main();