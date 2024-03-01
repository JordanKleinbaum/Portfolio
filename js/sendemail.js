function sendMail() {
  let params = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("contactSubject").value,
    message: document.getElementById("contactMessage").value,
  };

  emailks
    .send("service_v6vzuzh", "template_v7q3057", params)
    .then(alert("Email has been sent!"));
}
