const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwTyvLqu3Sq05f6vmFWlN4nRj8AOi5H2CAoeuCVVT2brj5DhwpKnp1ndxz4e6-dcxS6/exec";

const contactForm =
  document.getElementById("contactForm");

const submitBtn =
  document.getElementById("submitBtn");

contactForm.addEventListener(
  "submit",
  async function (e) {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {

      const firstName =
        contactForm.first_name.value;

      const formData =
        new URLSearchParams(
          new FormData(contactForm)
        );

      const response =
        await fetch(WEB_APP_URL, {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded"
          },
          body: formData
        });

      if (!response.ok) {
        throw new Error(
          `Server Error (${response.status})`
        );
      }

      const data =
        await response.json();

      if (data.result === "success") {

        contactForm.reset();

        window.location.href =
          "/thank-you.html" +
          "?ref=" +
          encodeURIComponent(
            data.form_number
          ) +
          "&name=" +
          encodeURIComponent(
            firstName
          );

      } else {

        throw new Error(
          data.error ||
          "Unknown server error"
        );
      }

    } catch (error) {

      alert(
        "Unable to submit the form.\n\n" +
        error.message
      );

      console.error(error);

    } finally {

      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";

    }

  }
);

//Thank you

const params =
  new URLSearchParams(
    window.location.search
  );

document.getElementById(
  "referenceNumber"
).textContent =
  params.get("ref") || "N/A";

document.getElementById(
  "customerName"
).textContent =
  params.get("name") || "";