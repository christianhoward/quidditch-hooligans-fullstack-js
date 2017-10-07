const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    playername: String,
    age: Number,
    city: String,
    country: String,
    gender: String,
    handedness: String,
    broom: String,
    position: String,
    team: String,
    favoritecolor: String,
    headshot: String
});

mongoose.model('players', playerSchema);