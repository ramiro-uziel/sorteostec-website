// src/lib/auth.js

// Access the environment variable for the API URL
const API_URL = import.meta.env.API_URL;

// Function to check if the user is logged in
async function checkLoggedIn(fetch) {
    try {
        const response = await fetch('http://20.57.127.87/api/login', {
            credentials: 'include'
        });

        if (response.ok) {
            const { isLoggedIn } = await response.json();
            console.log("[!!] Checking if logged. Response: ", isLoggedIn)
            return isLoggedIn ? "true" : "false";
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.error('Error checking logged in status:', error);
        return "false"; // Return "false" on error to indicate not logged in
    }
}

export { checkLoggedIn };
