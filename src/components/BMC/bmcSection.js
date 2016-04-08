import React, {PropTypes} from 'react';
import SectionTitles from '../../constants/SectionTypes';
import '../../styles/bmc.scss';

// Destrucuring props for brevity below.
const BMCSection = ({sectionId, appState}) => {
  return (
    <div className="bmc-section">
      <span className="section-title">{SectionTitles[sectionId]}</span>
        <div className="bmc-section-items">
          {appState.sections[sectionId].map((result) => {
            return (
              <div key={result.id} className="bmc-item col-xs-12">
                <span className="bmc-text">{result.text}</span>
              </div>
            );
          })}
        </div>
    </div>
  );
};

BMCSection.propTypes = {
  appState: PropTypes.object.isRequired,
  sectionId: PropTypes.string.isRequired
};

export default BMCSection;
