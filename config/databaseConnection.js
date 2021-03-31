const mongoose = require("mongoose");
require('dotenv').config();

module.exports = function() {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
      console.log("connected with DB");
  });
//   mongoose.connection.on("connected", () => {
//     console.log("DB connected");
//   });
};
