import React, { PropTypes } from 'react';
import BMCTextInput from './bmcTextInput';
import BMCSelectInput from './bmcSelectInput';
import * as actions from '../../actions/bmcActions';
import '../../styles/bmc.scss';

const BMCAddItemForm = ({ appState, addBMCItem, updateTextInput, updateSelectedCat }) => {
  const handleTextInputChange = ( name, value ) => {
    updateTextInput(appState, name, value);
  };

  const handleSelectInputChange = ( name, value ) => {
    updateSelectedCat(appState, name, value);
  };

  return (
    <div className="bmc-add-form">
      <div className="pure-form">
        <fieldset>
          <BMCSelectInput
            value={appState.selectedCategory}
            name="BMCSelect"
            onChange={handleSelectInputChange} />
          <BMCTextInput
            placeholder="Enter Text"
            name="BMCText"
            value={appState.textInputValue}
            onChange={handleTextInputChange} />
          <button
            className="pure-button add-btn"
            onClick={() => addBMCItem(appState, appState.selectedCategory, appState.textInputValue)}>
            Add
          </button>
        </fieldset>
      </div>
    </div>
  );
};

BMCAddItemForm.propTypes = {
  addBMCItem: PropTypes.func.isRequired,
  updateTextInput: PropTypes.func.isRequired,
  updateSelectedCat: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default BMCAddItemForm;
