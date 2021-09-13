export const LOGIN="LOGIN"

export function login(details) {
    return {
        type: LOGIN,
        payload: details
    }
}