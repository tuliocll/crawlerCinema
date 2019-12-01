const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://tuliocll:r3gbip8a@cluster0-i9pvf.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
