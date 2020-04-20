import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </ThemeProvider>,
    document.getElementById('root')
);

// if (process.env.NODE_ENV === 'production') {
//     console.log = () => {};
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
