const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const Player = mongoose.model('players');

const players = [{
    _id: new ObjectID(),
    playername: 'Christian Howard',
    age: 27,
    city: 'Arlington',
    country: 'USA',
    gender: 'Male',
    handedness: 'Right',
    broom: 'Nimbus 2017',
    position: 'Keeper',
    team: 'Hufflepuff',
    favoritecolor: 'Blue',
    headshot: 'choward.jpg'
}, {
    _id: new ObjectID(),
    playername: 'Alex Howard',
    age: 23,
    city: 'Las Vegas',
    country: 'USA',
    gender: 'Male',
    handedness: 'Right',
    broom: 'Nimbus 2015',
    position: 'Beater',
    team: 'Hufflepuff',
    favoritecolor: 'Red',
    headshot: 'ahoward.jpg'
}];

const populatePlayers = (done) => {
    Player.remove({}).then(() => {
        return Player.insertMany(players);
    }).then(() => done());
};

module.exports = { players, populatePlayers };