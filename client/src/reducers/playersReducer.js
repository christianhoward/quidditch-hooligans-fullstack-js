import { FETCH_PLAYERS, LOAD_PLAYER, SUBMIT_PLAYER, UPDATE_PLAYER, DELETE_PLAYER } from '../actions/types';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_PLAYERS:
            return action.payload;
        case LOAD_PLAYER:
            return action.payload;
        case SUBMIT_PLAYER:
            return action.payload;
        case UPDATE_PLAYER:
            return action.payload;
        case DELETE_PLAYER:
            return action.payload;
        default:
            return state;
    }
}