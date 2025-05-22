export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return new Response(JSON.stringify({ error: "Missing domain parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiUrl = `https://brand-logo-api.p.rapidapi.com/brand/retrieve?domain=${encodeURIComponent(
    domain
  )}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c46cccdb54msh3f91c8cff237152p10557fjsn47a08ef7425a",
        "x-rapidapi-host": "brand-logo-api.p.rapidapi.com",
      },
    });
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch logo" }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
