import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchPlayers } from '../actions';

class Player extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         players: []
    //     };
    // }
    componentDidMount() {
        this.props.fetchPlayers();
    }
    renderPlayers() {
        return this.props.players.map(player => {
            return (
                <tbody>
                    <tr key={player._id}><td>{player.playername}</td><td>{player.age}</td><td>{player.city}, {player.country}</td><td>{player.team}</td><td><button onClick={() => {this.handleEditPlayer(player._id)}} className="btn btn-primary">Edit</button></td><td><button className="btn btn-danger" onClick={() => {this.handleDeletePlayer(player._id)}}>Delete</button></td></tr>
                </tbody>
            );
        });
    }
    // componentDidMount() {
    //     axios.get(`/api/players`)
    //         .then(response => {
    //             const players = response.data;
    //             this.setState({ players });
    //         })
    //         .catch(error => console.log(error));
    // }

    handleEditPlayer(id) {
        axios.get(`/api/players/${id}`)
            .then(response => {
                const player = response.data;
                console.log(player);
            }).catch(error => console.log(error));
    }

    handleDeletePlayer(id) {
        axios.delete(`/api/players/${id}`)
            .then(response => {
                this.setState(prevState => ({
                    players: prevState.players.filter(function(player) {
                        return player._id !== id;
                    })
                }))
            })
            .catch(error => console.log(error));
    }

    render() {
        // const { players } = this.state;
        console.log(this.props.players);
        return (            
            <div className="container">
                <table className="table table-sm table-bordered">
                    <thead><tr><th className="text-center">Player Name</th><th>Age</th><th>Hometown</th><th>Team</th><th>Edit</th><th>Delete</th></tr></thead>
                    {this.renderPlayers()}
                </table>
            </div>
            // <tbody>
            //     {players.map(player => <tr key={player._id}><td>{player.playername}</td><td>{player.age}</td><td>{player.city}, {player.country}</td><td>{player.team}</td><td><button onClick={() => {this.handleEditPlayer(player._id)}} className="btn btn-primary">Edit</button></td><td><button className="btn btn-danger" onClick={() => {this.handleDeletePlayer(player._id)}}>Delete</button></td></tr>)}
            // </tbody>
        );
    }
}

function mapStateToProps({ players }) {
    return { players };
}

export default connect(mapStateToProps, { fetchPlayers })(Player);
// export default Player;