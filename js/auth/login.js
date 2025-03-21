// ----- Login ----- //
const BASE_URL = "http://localhost:3001"

export async function login() {
    try {
        const response = await fetch(`${BASE_URL}/spotify/login`, {
            method: 'GET'
        });
        const result = await response.json();

        console.log(result);

        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}