const mongoose = require('mongoose');
const _ = require('lodash');

const Player = mongoose.model('players');

module.exports = app => {
    app.get('/api/players', async (req, res) => {
        const players = await Player.find();
        res.send(players);
    });

    app.get('/api/players/:id', async(req, res) => {
        const id = req.params.id;
        const player = await Player.findById(id);
        res.send(player);
    });

    app.post('/api/players', async (req, res) => {
        const { playername, age, city, country, gender, handedness, broom, position, team, favoritecolor, headshot } = req.body;
        const player = new Player({
            playername, 
            age,
            city,
            country,
            gender,
            handedness,
            broom,
            position,
            team,
            favoritecolor,
            headshot
        });
        try {
            await player.save();
            res.send(player);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.patch('/api/players/:id', async (req, res) => {
        const id = req.params.id;
        const { playername, age, city, country, gender, handedness, broom, position, team, favoritecolor, headshot } = req.body;
        const player = { playername, age, city, country, gender, handedness, broom, position, team, favoritecolor, headshot };
        try {
            await Player.findByIdAndUpdate(id, {$set: player}, {new: true});
            res.send(player);
        } catch (err) {
            res.status(422).send(err);
        }
    });
    
    app.delete('/api/players/:id', async (req, res) => {
        const id = req.params.id;
        const player = await Player.findByIdAndRemove(id);
        res.send(player);
    });
}