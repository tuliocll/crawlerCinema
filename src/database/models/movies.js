const mongoose = require("../index");

const MovieSchema = new mongoose.Schema({
  eventID: {
    type: String,
    require: true,
    index: true
  },
  eventTitle: {
    type: String,
    require: true
  },
  trailerURL: {
    type: String,
    require: true
  },
  eventComingSoon: {
    type: Boolean,
    require: true
  },
  complementaryText: {
    type: String,
    require: true
  },
  posterImage: {
    type: String,
    require: true
  },
  buyClick: {
    type: String,
    require: true
  },
  distributor: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    require: true
  },
  votes: {
    type: Number,
    require: false,
    default: 1
  },
  rate: {
    type: Number,
    require: false,
    default: 1
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
