async function checkLoggedIn(fetch) {
  try {
    const response = await fetch("http://20.57.127.87/api/logged", {
      credentials: "include",
    });

    if (response.ok) {
      const { isLoggedIn } = await response.json();
      console.log("[!!] Checking if logged. Response: ", isLoggedIn);
      return isLoggedIn ? "true" : "false";
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    console.error("Error checking logged in status:", error);
    return "false";
  }
}

export { checkLoggedIn };
