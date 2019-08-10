import React from 'react';

import { NavLink } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const StyledNavLink = styled.div`
    color: #FAFAFA;
    font-size: 1rem;
    padding: 12px 22px;
    transition: color 0.3s;
    
    :hover {
        color: #B7B7B7;
        transition: color 0.3s;
    }
`;



const Icon = styled.span`
    font-size: 1.3rem;
`;

const StyledLink = (props) => {

    let content = '';
    switch(props.content) {
        case 'apple-icon':
            content = (<Icon> <FontAwesomeIcon icon={faApple} /> </Icon>);
            break;
        
        case 'mac':
            content = 'Mac';
            break;
        
        case 'ipad':
            content = 'iPad';
            break;

        case 'iphone':
            content = 'iPhone';
            break;
        
        case 'watch':
            content = 'Watch';
            break;

        case 'tv':
            content = 'TV';
            break;

        case 'music':
            content = 'Music';
            break;

        case 'support':
            content = 'Support';
            break;

        case 'search-icon':
            content = (<Icon><FontAwesomeIcon icon={faSearch} /></Icon>);
            break;

        case 'bag-icon':
            content = (<Icon><FontAwesomeIcon icon={faShoppingBag} /></Icon>);
            break;

        default: 
            content = 'ERROR';
    }

    return (
        <StyledNavLink>{content}</StyledNavLink>
    );
};

export default StyledLink;