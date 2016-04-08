import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/bmcActions';
import Header from '../components/Header/Header';
import BMCCanvas from '../components/BMC/bmcCanvas';

class BMCPage extends Component {
  render() {
    return (
      <div>
        <Header
          appState={this.props.appState}
          addBMCItem={this.props.actions.addBMCItem}
          updateTextInput={this.props.actions.updateTextInput}
          updateSelectedCat={this.props.actions.updateSelectedCat}
        />
        <BMCCanvas
          appState={this.props.appState}
        />
      </div>
    );
  }
}

BMCPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.bmcAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BMCPage);

