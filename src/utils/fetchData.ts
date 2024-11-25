export async function fetchData(
  query: string,
  method: string = "GET",
  body?: string
): Promise<any> {
  try {
    const response = await fetch(`http://35.246.89.97/${query}`, {
      method,
      ...(method !== "GET" && {
        headers: { "Content-Type": "application/json" },
      }),
      ...(body && { body }),
    });

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
