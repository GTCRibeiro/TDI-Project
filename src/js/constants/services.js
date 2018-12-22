export const ENDPOINT = 'http://localhost:81/api/';

export const CLIENT_ID = "1";
export const REDIRECT_URI = "http://localhost:3000/callback";
export const SECRET = "w6jJPQxN6e3zMicygXU20QgMwemJaOgnJmt0fttn";

export const AUTH_ENDPOINT = 'http://localhost:81/oauth/authorize?' +
    'client_id='+CLIENT_ID +
    '&redirect_uri='+REDIRECT_URI +
    '&response_type=code';

export const TOKEN_ENDPOINT = 'http://localhost:81/oauth/token';

export const USER_ENDPOINT = 'http://localhost:81/api/authUser';

export const ENDPOINT_USERS =  'http://localhost:81/api/users';
export const ENDPOINT_REVIEWS = 'http://localhost:81/api/reviews';
export const ENDPOINT_GAMES = 'http://localhost:81/api/games';
export const ENDPOINT_GENRES = 'http://localhost:81/api/genres';

