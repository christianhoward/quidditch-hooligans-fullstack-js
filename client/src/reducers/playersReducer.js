import { FETCH_PLAYERS, SUBMIT_PLAYER, UPDATE_PLAYER, DELETE_PLAYER } from '../actions/types';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_PLAYERS:
            return action.payload;
        case SUBMIT_PLAYER:
            return [
                ...state,
                action.payload
            ];
        case UPDATE_PLAYER:
            return state.map((player) => {
                if (player._id === action.payload._id) {
                    return [
                        ...player,
                        ...action.payload
                    ];
                } else {
                    return player;
                }
            });
        case DELETE_PLAYER:
            return state.filter((player) => player._id !== action.payload._id);
        default:
            return state;
    }
}