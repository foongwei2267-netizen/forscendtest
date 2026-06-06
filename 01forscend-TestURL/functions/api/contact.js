export async function onRequestPost(context) {

  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbx72-mueiVwmosg0gyPYUQdN5Ui13b_IzHmoX4munJ25cR94mbZqkXbaZrKKjSyEZWa/exec";

  const SECRET =
    "FC2026_SECRET";

  try {

    const formData =
      await context.request.formData();

    const body =
      new URLSearchParams();

    for (const [key, value] of formData.entries()) {

      body.append(key, value);

    }

    body.append(
      "secret",
      SECRET
    );

    const response =
      await fetch(GAS_URL, {
        method: "POST",
        body
      });

    return response;

  } catch (error) {

    return new Response(
      JSON.stringify({
        result: "error",
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type":
            "application/json"
        }
      }
    );

  }

}