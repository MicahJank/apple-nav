import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Mac from './Mac.js';

const SubNavContainer = styled.div`
    background-color: #F7F7F7;
    padding: 50px;
`;

const SubNav = (props) => {

    const [url, setUrl] = useState(props.location.pathname);

    useEffect(() => {
        setUrl(props.location.pathname)
    }, [props.location.pathname]);
    console.log(url);

    //TODO - Depending on which navlink is clicked in the navbar a different subcomponent should pop up with different icons that represent the sub component.

    return(
        <SubNavContainer>
            
        </SubNavContainer>
    );
};

export default SubNav;