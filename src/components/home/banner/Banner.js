import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from '../search/Search';
import './Banner.css'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();
    
    
    return (
        <div className="banner">
            <div className="banner__search">
                <Button onClick={()=> setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Show dates"}
                </Button>
                {showSearch && <Search /> }

            </div>
            <div className="banner__info">
                <h1>Get out and stretch you imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
