import React, { Suspense } from 'react';
import './assets/styles/styles.css';
import ConfigStore from './config/store';
import Routes from './config/routes';
import './config/translation/index.js';

export default ()=>(
    <ConfigStore>
        <Suspense fallback={null}>
            <Routes/>
        </Suspense>
    </ConfigStore>
);
