import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import './styles.css';

export default props => (
    <div className="page">
        <Header/>
        <div className="page-content">
            <div className="page-content-left">
                <Sidebar/>
            </div>
            <div className="page-content-right">
                {props.children}
            </div>
        </div>
        <Footer/>
    </div>
);