import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import styled from 'styled-components';
import NavBar from './components/NavBar.js';

import './App.css';

// styled components


function App() {
  return (
    <div>
     <Route exact path='/' component={NavBar} />

    </div>
    
  );
}

export default App;
