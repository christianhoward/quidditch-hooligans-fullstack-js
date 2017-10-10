import axios from 'axios';
import { FETCH_PLAYERS, SUBMIT_PLAYER, UPDATE_PLAYER, DELETE_PLAYER } from './types';

export const fetchPlayers = () => async dispatch => {
    const res = await axios.get('/api/players');
    dispatch({ type: FETCH_PLAYERS, payload: res.data });
};

export const submitPlayer = (player) => async dispatch => {
    const res = await axios.post('/api/players', player);
    dispatch({ type: SUBMIT_PLAYER, payload: res.data });
};

export const updatePlayer = (player) => async dispatch => {
    const res = await axios.patch(`/api/players/${player._id}`, player);
    dispatch({ type: UPDATE_PLAYER, payload: res.data });
};

export const deletePlayer = (id) => async dispatch => {
    const res = await axios.delete(`/api/players/${id}`);
    dispatch({ type: DELETE_PLAYER, payload: res.data });
};