import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Header from '../Header/Header';

//IndexLink to="/">Home</IndexLink> | <Link to="/About">About</Link>

const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
