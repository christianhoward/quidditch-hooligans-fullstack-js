import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPlayers, deletePlayer } from '../actions';

class PlayerTable extends Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }
    handleEditPlayer(id) {
        this.props.history.push(`/form/${id}`);
    }
    handleDeletePlayer(id) {
        this.props.deletePlayer(id);
    }
    renderPlayers() {
        return this.props.players.map(player => {
            return (
                <tbody key={player._id}>
                    <tr><td>{player.playername}</td><td>{player.age}</td><td>{player.city}, {player.country}</td><td>{player.team}</td><td><Link to={`/form/${player._id}`}><button className="btn btn-success">Edit</button></Link></td><td><button className="btn btn-danger" onClick={() => {this.handleDeletePlayer(player._id)}}>Delete</button></td></tr>
                </tbody>
            );
        });
    }
    render() {
        return (            
            <div className="container">
                <table className="table table-sm table-bordered">
                    <thead><tr><th className="text-center">Player Name</th><th>Age</th><th>Hometown</th><th>Team</th><th>Edit</th><th>Delete</th></tr></thead>
                    {this.renderPlayers()}
                </table>
            </div>
        );
    }
}

function mapStateToProps({ players }) {
    return { players };
}

export default connect(mapStateToProps, { fetchPlayers, deletePlayer })(PlayerTable);