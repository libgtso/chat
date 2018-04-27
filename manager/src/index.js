import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Manager from './Manager';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Manager />, document.getElementById('root'));
registerServiceWorker();
