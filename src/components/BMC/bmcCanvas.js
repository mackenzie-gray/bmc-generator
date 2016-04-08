import React, {PropTypes} from 'react';
//import FuelSavingsResults from './FuelSavingsResults';
//import FuelSavingsTextInput from './FuelSavingsTextInput';
import BMCSection from './bmcSection.js';
import BMCForm from './bmcForm.js';
import '../../styles/bmc.scss';

// Destrucuring props for brevity below.
const BMCCanvas = ({appState}) => {
  return (
    <div>
      <div id="bmc-canvas" className="container">
        <div id="bmc-top" className="row">
          <div className="bmc-col col-xs">
            <BMCSection appState={appState} sectionId="0"/>
          </div>
          <div className="bmc-col col-xs">
            <div className="bmc-box col-xs-12">
              <BMCSection appState={appState} sectionId="1"/>
            </div>
            <div className="bmc-box col-xs-12">
              <BMCSection appState={appState} sectionId="2"/>
            </div>
          </div>
          <div className="bmc-col col-xs">
            <BMCSection appState={appState} sectionId="3"/>
          </div>
          <div className="bmc-col col-xs">
            <div className="bmc-box col-xs-12">
              <BMCSection appState={appState} sectionId="4"/>
            </div>
            <div className="bmc-box col-xs-12">
              <BMCSection appState={appState} sectionId="5"/>
            </div>
          </div>
          <div className="bmc-col col-xs">
            <BMCSection  appState={appState} sectionId="6"/>
          </div>
        </div>
        <div id="bmc-bottom" className="row">
          <div className="bmc-col col-xs">
            <BMCSection  appState={appState} sectionId="7"/>
          </div>
          <div className="bmc-col col-xs">
            <BMCSection  appState={appState} sectionId="8"/>
          </div>
        </div>
      </div>
    </div>
  );
};

BMCCanvas.propTypes = {
  appState: PropTypes.object.isRequired
};

export default BMCCanvas;
