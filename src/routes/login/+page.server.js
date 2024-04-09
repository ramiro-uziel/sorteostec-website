export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        console.log({ email, password });

        try {
            const response = await fetch("http://20.57.127.87/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log('Response from API:', responseData);

        } catch (error) {
            console.error('Error sending data to API:', error);
        }
    }
};


/*
async function handleLogin(event) {
    console.log(`${API_URL}`);
    event.preventDefault(); // Prevent form from submitting normally

    const loginResponse = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (loginResponse.ok) {
        const profileResponse = await fetch(`${API_URL}/api/perfil`, {
            credentials: "include", // To send cookies with the request
        });

        if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            userProfile.set(profileData);
            userLogged.set(true);

            if (browser) {
                goto("/cuenta/perfil"); // Navigate to profile page
            }
        }
    }
}
*/