'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Temperature from './Temperature.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


injectTapEventPlugin();

ReactDOM.render((
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Temperature/>
      </MuiThemeProvider>
    </div>
), document.getElementById('root'), () => {

});
