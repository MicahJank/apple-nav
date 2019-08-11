import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import styled from 'styled-components';
import NavBar from './components/NavBar.js';
import SubNav from './components/sub-nav/SubNav.js';
import HomePage from './components/home-page/HomePage.js';
import MacPage from './components/mac-page/MacPage.js';

import './App.css';

// styled components


function App() {
  return (
    <div>
      <Route path={'/'} component={NavBar}/>
      <Route exact path={['/mac', '/ipad', '/iphone', '/watch', '/tv', '/music']} component={SubNav} />
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/mac'} component={MacPage} />

    </div>
    
  );
}

export default App;
