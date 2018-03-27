import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import formFields from './formFields';
import PlayerField from './PlayerField';
import { submitPlayer, updatePlayer } from '../actions';


class PlayerForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name, type, options }) => {
            return (
                <Field key={name} component={PlayerField} label={label} name={name} type={type} options={options} />
            );
        });
    }

    onSubmit(player) {
        if (player._id) {
            this.props.updatePlayer(player);
            this.props.history.push('/table');
        } else {
            this.props.submitPlayer(player);
            this.props.history.push('/table');
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(props => this.onSubmit(props))}>
                    <input type="hidden" name="_id" />
                    {this.renderFields()}
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
};

function mapStateToProps(state, props) {
    return {
        initialValues: state.players.find(player => player._id === props.match.params.id)
    }
}

export default connect(mapStateToProps, { submitPlayer, updatePlayer })(reduxForm({
    form: 'playerForm'
})(PlayerForm));