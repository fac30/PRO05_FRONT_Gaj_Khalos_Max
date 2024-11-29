export async function fetchData(
  query: string,
  method: string = "GET",
  body?: string
): Promise<any> {
  try {
    const response = await fetch(
      `https://pokelike-api-882521424304.europe-west2.run.app/${query}`,
      {
        method,
        ...(method !== "GET" && {
          headers: { "Content-Type": "application/json" },
        }),
        ...(body && { body }),
      }
    );

    if (!response.ok) {
      console.error("HTTP error:", response.status, response.statusText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return method === "GET" ? response.json() : response.text();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
