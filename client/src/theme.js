import { createMuiTheme } from '@material-ui/core';

const pallete = {
    palette: {
        common: { black: '#000', white: '#fff' },
        background: { paper: '#fff', default: 'rgba(250, 250, 250, 1)' },
        primary: {
            light: '#7986cb',
            main: 'rgba(2, 136, 209, 1)',
            dark: '#303f9f',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff4081',
            main: 'rgba(241, 16, 97, 1)',
            dark: '#c51162',
            contrastText: '#fff'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.64)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.04)'
        }
    }
};

const theme = createMuiTheme(pallete);

export default theme;
