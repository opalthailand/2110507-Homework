export default async function getHospitals() {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const response = await fetch("http://localhost:5000/api/v1/hospitals", {
      next: { tags: ["hospitals"] },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch hospitals data from backend");
    }

    return await response.json();
}