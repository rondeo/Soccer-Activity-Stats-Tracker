import React from 'react';
import ReactDOM from 'react-dom';
import SoccerDayCount  from './components/SoccerDayCount';
import registerServiceWorker from './registerServiceWorker';

window.React = React

ReactDOM.render(
    <SoccerDayCount total={50}
                              grass={20}
                              turf={12}
                              goal={100}/>,
document.getElementById('root'));
registerServiceWorker();
