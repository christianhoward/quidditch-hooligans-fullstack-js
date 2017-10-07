import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'

import playersReducer from './playersReducer';

export default combineReducers({
    players: playersReducer,
    form: reduxForm
});