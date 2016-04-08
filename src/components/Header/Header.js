import React, { PropTypes } from 'react';
import BMCAddItem from '../BMC/bmcAddItem';
import '../../styles/header.scss';

const Header = ({appState, addBMCItem, updateTextInput, updateSelectedCat}) => {
  return (
    <header>
      <div id="menu">
        <span className="title">Business Model Canvas Generator</span>
        <BMCAddItem
          appState={appState}
          addBMCItem={addBMCItem}
          updateTextInput={updateTextInput}
          updateSelectedCat={updateSelectedCat}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  addBMCItem: PropTypes.func.isRequired,
  updateTextInput: PropTypes.func.isRequired,
  updateSelectedCat: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default Header;
