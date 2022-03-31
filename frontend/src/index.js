import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import {ThemeProvider, createTheme} from '@mui/material';

// This theme doesnt work for some reason
const theme = createTheme({
    typography: {
      fontFamily: ['"Gilroy-Regular"', 'sans-serif'].join(',')
     },
     palette:{
       primary: {
        main: '#056D78'
      },
      secondary: {
        main: '#E30072'
      }
     }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />,
    </BrowserRouter>,
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
