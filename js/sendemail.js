function sendMail() {
  let params = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("contactSubject").value,
    message: document.getElementById("contactMessage").value,
  };

  emailjs
    .send("service_v6vzuzh", "template_v7q3057", params)
    .then(function () {
      document.getElementById("message-success").style.display = "block";
    })
    .catch(function (error) {
      console.error("Email could not be sent: ", error);
    });
}
