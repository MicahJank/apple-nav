import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Mac from './items/Mac.js';

const SubNavContainer = styled.div`
    background-color: #F7F7F7;
    padding: 50px;
`;

const SubNav = (props) => {

    //TODO - Depending on which navlink is clicked in the navbar a different subcomponent should pop up with different icons that represent the sub component.

    const SubNavItems = () => {
        switch(props.history.location.pathname) {
            
        }
    };
    
    console.log(props.history.location.pathname);

    return(
        <SubNavContainer>
            
        </SubNavContainer>
    );
};

export default SubNav;