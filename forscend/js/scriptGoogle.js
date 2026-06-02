const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzmDSdElO1kAgVvdS0QtT4ag0cJahKJ_qaZqlAn2Fv8BwtPbcWVR31mlmJsed7QMRqJ/exec";

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const messageBox = document.getElementById("messageBox");

  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";
  messageBox.style.display = "none";

  // Convert form elements to URL parameters for Apps Script e.parameter
  const formData = new URLSearchParams(new FormData(this));

  fetch(WEB_APP_URL, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not stable");
      }
      return response.json();
    })
    .then((data) => {
      if (data.result === "success") {
        messageBox.style.backgroundColor = "#d4edda";
        messageBox.style.color = "#155724";
        messageBox.style.display = "block";
        messageBox.innerText = `Success! Your reference number is: ${data.form_number}`;
        document.getElementById("contactForm").reset();
      } else {
        throw new Error(data.error || "Unknown server error");
      }
    })
    .catch((error) => {
      messageBox.style.backgroundColor = "#f8d7da";
      messageBox.style.color = "#721c24";
      messageBox.style.display = "block";
      messageBox.innerText = `Error sending message: ${error.message}`;
      console.error("Error:", error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
    });
});
