import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './fonts/silka-regular-webfont.eot';
import './fonts/silka-regular-webfont.woff2';
import './fonts/silka-regular-webfont.woff';
import './fonts/silka-regular-webfont.ttf';

import './fonts/silka-regularitalic-webfont.eot';
import './fonts/silka-regularitalic-webfont.woff2';
import './fonts/silka-regularitalic-webfont.woff';
import './fonts/silka-regularitalic-webfont.ttf';

import FullPage from './components/fullPage';

ReactDOM.render(<FullPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
