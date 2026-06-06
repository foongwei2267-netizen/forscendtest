const WEB_APP_URL =
  "/api/contact";

const contactForm =
  document.getElementById(
    "contactForm"
  );

if (contactForm) {

  const submitBtn =
    document.getElementById(
      "submitBtn"
    );

  contactForm.addEventListener(
    "submit",
    async function (e) {

      e.preventDefault();

      submitBtn.disabled = true;

      submitBtn.textContent =
        "Sending...";

      try {

        const formData =
          new URLSearchParams(
            new FormData(
              contactForm
            )
          );

        const response =
          await fetch(
            WEB_APP_URL,
            {
              method: "POST",
              body: formData
            }
          );

        const data =
          await response.json();

        if (
          data.result !== "success"
        ) {

          throw new Error(
            data.error
          );

        }

        const redirectUrl =
          "thank_you.html?" +
          new URLSearchParams({

            ref:
              data.form_number,

            first_name:
              data.first_name,

            last_name:
              data.last_name,

            phone:
              data.phone,

            email:
              data.email,

            company:
              data.company,

            job_title:
              data.job_title,

            enquiry:
              data.enquiry,

            message:
              data.message

          });

        window.location.href =
          redirectUrl;

      } catch (error) {

        alert(
          "Unable to submit form.\n\n" +
          error.message
        );

      } finally {

        submitBtn.disabled =
          false;

        submitBtn.textContent =
          "Submit";

      }

    }
  );

}

const params =
  new URLSearchParams(
    window.location.search
  );

if (
  document.getElementById(
    "referenceNumber"
  )
) {

  if (
    !params.get("ref")
  ) {

    window.location.href =
      "contact.html";

  }

  const setText =
    (id, value) => {

      const element =
        document.getElementById(id);

      if (element) {

        element.textContent =
          value || "";

      }

    };

  setText(
    "referenceNumber",
    params.get("ref")
  );

  setText(
    "customerName",
    (
      params.get(
        "first_name"
      ) +
      " " +
      params.get(
        "last_name"
      )
    ).trim()
  );

  setText(
    "customerEmail",
    params.get("email")
  );

  setText(
    "customerPhone",
    params.get("phone")
  );

  setText(
    "customerCompany",
    params.get("company")
  );

  setText(
    "customerJobTitle",
    params.get(
      "job_title"
    )
  );

  setText(
    "customerEnquiry",
    params.get("enquiry")
  );

  setText(
    "customerMessage",
    params.get("message")
  );

}

const printButton =
  document.getElementById(
    "printButton"
  );

if (printButton) {

  printButton.addEventListener(
    "click",
    function () {

      window.print();

    }
  );

}