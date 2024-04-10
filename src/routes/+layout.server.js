export const prerender = false;

export async function load({ fetch }) {
  const test = async function () {
    try {
      const response = await fetch("/api/logged");
      const data = await response.text();
      console.log("[!!] AAA", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  await test();
}
