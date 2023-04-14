import { useState, useEffect } from 'react';

import './style.css';
import logo from '../../../img/logo.svg';
import { Navigation } from './Navigation';
import { Burger } from './Burger';

export const Header = ({width}) => {
    return(
        <header className='blue-bg header'>
            <div className='container'>
            {width > 670
                ? 
                <div className='nav'>
                    <a href="#" className='nav-logo'><img src={logo} alt="logo" /></a>
                    <Navigation open={false}/>
                </div>
                : 
                <>
                    <div className='nav'>
                        <a href="#" className='nav-logo'><img src={logo} alt="logo" /></a>
                    </div> 
                    <Burger/>
                </>}
            </div>
            
        </header>
    )
}