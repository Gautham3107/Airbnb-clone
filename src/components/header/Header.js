import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Header() {
    const history = useHistory();
    return (
        <div className="header">
            <img onClick={() => history.push('/')} className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="logo"/>

            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
