import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Panel from 'react-bootstrap/lib/Panel'

import * as actions from './actions/actions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getUsers();
  }

  render() {
    const { users } = this.props;
    console.log('props', this.props, users);
    return (
      <div className="container">
        <Panel>
          <Panel.Heading >Panel heading without a title</Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{users.map(user => (
            <p key={user.id}>
              name: {user.name}, username: {user.username}
            </p>
          ))}</Panel.Body>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);