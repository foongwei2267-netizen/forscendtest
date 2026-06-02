const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbyULK-zjaooebD2bLhWYjFQdGV5MWsGiUQyFY88CvCuCKoGuc9-kEEHmGGWz6cds2Db/exec";

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const messageBox = document.getElementById("messageBox");

contactForm.addEventListener("submit", async function (e) {

  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  messageBox.style.display = "none";

  try {

    const formData = new URLSearchParams(
      new FormData(contactForm)
    );

    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(
        `Server Error (${response.status})`
      );
    }

    const data = await response.json();

    if (data.result === "success") {

      messageBox.style.display = "block";
      messageBox.style.backgroundColor = "#d4edda";
      messageBox.style.color = "#155724";

      messageBox.innerHTML = `
        <strong>Thank you for contacting Forscend.</strong><br>
        Your enquiry has been received successfully.<br>
        Reference Number:
        <strong>${data.form_number}</strong><br>
        Our team will contact you within 3 to 5 working days.
      `;

      contactForm.reset();

      messageBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    } else {

      throw new Error(
        data.error || "Unknown server error"
      );
    }

  } catch (error) {

    messageBox.style.display = "block";
    messageBox.style.backgroundColor = "#f8d7da";
    messageBox.style.color = "#721c24";

    messageBox.innerHTML = `
      <strong>Submission Failed</strong><br>
      ${error.message}
    `;

    console.error(error);

  } finally {

    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";

  }

});