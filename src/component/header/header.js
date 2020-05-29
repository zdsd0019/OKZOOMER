import React, { Component } from 'react';
import './header.scss'

class header extends Component {
    render() {
        return (
            <>
            <header className='header'>
                <h1 className='robson'>ROBSON</h1>
                <span className='Rectangle-1'>
                <h2>DINE SAFE</h2>
                </span>
                <input type='text' name='search' className='search Rectangle-7' placeholder='City, Reasturants or Cusine'/>
            </header>
            </>
        );
    }
}

export default header;