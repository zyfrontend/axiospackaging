const TOKEN_KEY = 'xtoken';
export function getTokenAUTH() {
    console.log(localStorage.getItem(TOKEN_KEY));
    return localStorage.getItem(TOKEN_KEY);
}