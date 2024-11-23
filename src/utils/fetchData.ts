export async function fetchData(
  query: string,
  method: string = "GET",
  body?: string
): Promise<any> {
  try {
    const response = await fetch(`http://34.111.86.146/${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(body && { body }),
    });

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
