import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    accent1Color: '#00BCD4',
  },
});

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <RaisedButton label="Hello World" primary />
  </MuiThemeProvider>
);

export default Main;

