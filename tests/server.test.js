const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const Player = mongoose.model('players');
const { players, populatePlayers } = require('./seed/seed');

beforeEach(populatePlayers);

describe('GET /api/players', () => {
    it('should get all players', (done) => {
        request(app)
            .get('/api/players')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /api/players/:id', () => {
    it('should return specific player', (done) => {
        request(app)
            .get(`/api/players/${players[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.playername).toBe(players[0].playername);
            })
            .end(done);
    });
    it('should return 404 if player not found', (done) => {
        const hexId = new ObjectID().toHexString();
        request(app)
          .get(`/api/players/${hexId}`)
          .expect(404)
          .end(done);
    });
});

describe('POST /api/players' , () => {
    it('should create a new player', (done) => {
        const playername = "chris";
        request(app)
            .post('/api/players')
            .send({playername})
            .expect(200)
            .expect((res) => {
                expect(res.body.playername).toBe(playername);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Player.find({playername}).then((players) => {
                    expect(players.length).toBe(1);
                    expect(players[0].playername).toBe(playername);
                    done();
                }).catch((e) => done(e));
            });
    });
    it('should not create player with invalid body data', (done) => {
        request(app)
            .post('/api/players')
            .send({})
            .expect(422)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Player.find().then((players) => {
                    expect(players.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('PATCH /api/players/:id', () => {
    it('should update the player', (done) => {
        const hexId = players[0]._id.toHexString();
        const playername = "Stanley Howard";
        const age = 26;
        request(app)
            .patch(`/api/players/${hexId}`)
            .send({playername, age})
            .expect(200)
            .expect((res) => {
                expect(res.body.playername).toBe(playername);
                expect(res.body.age).toBe(age);
            })
            .end(done);
    });
    it('should not update a player that does not exist', (done) => {
        const hexId = new ObjectID().toHexString();
        const playername = "Barry Allen";
        request(app)
            .patch(`/api/players/${hexId}`)
            .send({playername})
            .expect(422)
            .end(done);
    });
});

describe('DELETE /api/players/:id', () => {
    it('should delete the player', (done) => {
        const hexId = players[0]._id.toHexString();
        request(app)
            .delete(`/api/players/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body._id).toBe(hexId);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Player.findById(hexId).then((player) => {
                    expect(player).toBeFalsy();
                    done();
                }).catch((e) => done(e));
            });
    });
    it('should return a 422 if the player is not found', (done) => {
        const hexId = new ObjectID().toHexString();
        request(app)
            .delete(`/api/players/${hexId}`)
            .expect(422)
            .end(done);
    });
});