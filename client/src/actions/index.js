import axios from 'axios';
import { FETCH_PLAYERS, SUBMIT_PLAYER, UPDATE_PLAYER, DELETE_PLAYER } from './types';

export const fetchPlayers = () => async dispatch => {
    const res = await axios.get('/api/players');
    dispatch({ type: FETCH_PLAYERS, payload: res.data });
};

export const submitPlayer = (player) => async dispatch => {
    axios.post('/api/players', player);
    const res = await axios.get('/api/players');
    dispatch({ type: SUBMIT_PLAYER, payload: res.data });
};

export const updatePlayer = (player) => async dispatch => {
    axios.patch(`/api/players/${player._id}`, player);
    const res = await axios.get('/api/players');
    dispatch({ type: UPDATE_PLAYER, payload: res.data });
};

export const deletePlayer = (id) => async dispatch => {
    axios.delete(`/api/players/${id}`);
    const res = await axios.get(`/api/players`);
    dispatch({ type: DELETE_PLAYER, payload: res.data });
};