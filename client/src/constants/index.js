// export const AUTHED_ROUTES = [{
//     path: "/home",
//     name: 'Home',
//     icon: ''
// }]

export const GOAL_COLORS = [
    'BerryRed',
    'Red',
    'Orange',
    'Yellow',
    'OliveGreen',
    'LimeGreen',
    'Green',
    'MintGreen',
    'Teal',
    'SkyBlue',
    'LightBlue',
    'Blue',
    'Grape',
    'Violet',
    'Lavender',
    'Magenta',
    'Salmon',
    'Charcoal',
    'Grey',
    'Taupe'
];

let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = 'https://pygyy.herokuapp.com';
} else {
    API_BASE_URL = '';
}

export { API_BASE_URL };
