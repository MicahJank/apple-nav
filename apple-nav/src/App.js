import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import styled from 'styled-components';
import NavBar from './components/NavBar.js';
import SubNav from './components/sub-nav/SubNav.js';
import HomePage from './components/home-page/HomePage.js';
import MacPage from './components/mac-page/MacPage.js';
import IpadPage from './components/ipad-page/IpadPage.js';
import IphonePage from './components/iphone-page/IphonePage.js';
import WatchPage from './components/watch-page/WatchPage.js';
import TVPage from './components/tv-page/TVPage.js';

import './App.css';

// styled components


function App() {
  return (
    <div>
      <Route path={'/'} component={NavBar}/>
      <Route exact path={['/mac', '/ipad', '/iphone', '/watch', '/tv', '/music']} component={SubNav} />
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/mac'} component={MacPage} />
      <Route exact path={'/ipad'} component={IpadPage} />
      <Route exact path={'/iphone'} component={IphonePage} />
      <Route exact path={'/watch'} component={WatchPage} />
      <Route exact path={'/tv'} component={TVPage} />

    </div>
    
  );
}

export default App;
