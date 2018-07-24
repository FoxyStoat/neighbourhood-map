import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NeighbourhoodMapApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NeighbourhoodMapApp />, document.getElementById('root'));
registerServiceWorker();
