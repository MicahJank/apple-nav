import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import styled from 'styled-components';
import NavBar from './components/NavBar.js';
import SubNav from './components/sub-nav/SubNav.js';

import './App.css';

// styled components


function App() {
  return (
    <div>
      <Route path={'/'} component={NavBar}/>
      {/* <NavBar /> */}
     <Route exact path={['/mac', '/ipad', '/iphone', '/watch', '/tv', '/music']} component={SubNav} />

    </div>
    
  );
}

export default App;
