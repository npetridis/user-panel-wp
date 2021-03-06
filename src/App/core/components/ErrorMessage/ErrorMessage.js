import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import { hideErrorMessage } from './actions/actionCreators';

class ErrorMessage extends React.Component {
  componentWillUnmount() {
    this.props.hideErrorMessage();
  }

  render() {
    const { isVisible, message, hideErrorMessage } = this.props;

    return (
      <React.Fragment>
        {isVisible && (
          <Message
            negative
            header='Oops! Something went wrong!'
            content={`${!!message ? message : ''}Please try refreshing the page or try again later.`}
            onDismiss={hideErrorMessage}
          />)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isVisible: state.errorMessage.display,
  message: state.errorMessage.message,
});

const mapDispatchToProps = dispatch => ({
  hideErrorMessage: () => dispatch(hideErrorMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
