const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://tuliocll:7eKVFlf1ueW1wdT9@cluster0-i9pvf.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
