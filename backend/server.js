const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

const connectDB = require("./config/database");

const PORT = process.env.PORT || 4000;

// initialising server
const server = app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});

// mongo string error handling
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log(`Shutting down server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});

connectDB();