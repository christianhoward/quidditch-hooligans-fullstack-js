const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    playername: { 
        type: String,
        required: true
    },
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