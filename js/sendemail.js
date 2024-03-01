function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kleimwein@gmail.com",
    Password: "A23A4A4F14856A9E7A33B43E3EC74601D849",
    To: "jordankleinbaum1@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("contactSubject").value,
    Body: document.getElementById("contactMessage").value,
  }).then((message) => alert("Message Send Successfully"));
}
