export async function fetchData(
  query: string,
  method: string = "GET",
  body?: string
): Promise<any> {
  try {
    const response = await fetch(`http://34.105.229.117:8080/${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(body && { body }),
    });

    // Check if the response is OK before parsing as JSON
    if (!response.ok) {
      console.error("HTTP error:", response.status, response.statusText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
