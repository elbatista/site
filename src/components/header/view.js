import React from 'react';
import './styles.css';

export default () => (
    <div className="header">
        <img alt="logo" src={require('../../assets/images/logo.png')}/>
        <div className="header-name">
            <label>Eliã</label>
            <label>Batista</label>
        </div>
        {/* <div className="header-flags">
            <img alt="br" src={require('../../assets/images/br.png')} className="selected"/>
            <img alt="it" src={require('../../assets/images/it.png')}/>
            <img alt="en" src={require('../../assets/images/en.png')}/>
        </div> */}
    </div>
);