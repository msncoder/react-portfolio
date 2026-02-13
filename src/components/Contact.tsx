import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous messages
    setSuccessMsg("");
    setErrorMsg("");

    // Validate inputs
    setNameError(name.trim() === "");
    setEmailError(email.trim() === "");
    setMessageError(message.trim() === "");

    if (name && email && message) {
      const templateParams = { name, email, message };

      emailjs
        .send(
          "service_04s2s0m", // your Service ID
          "template_puwfjmh", // your Template ID
          templateParams,
          "Xpe72QwMhvFJ3F3jo", // your Public Key / API Key
        )
        .then(
          (response) => {
            setSuccessMsg("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            setErrorMsg("Failed to send message. Please try again later.");
            console.error("EmailJS error:", error);
          },
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>

          <form
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                fullWidth
                required
                id="name-field"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                name="name"
              />

              <TextField
                fullWidth
                required
                id="email-field"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
                name="email"
              />
            </div>

            <TextField
              fullWidth
              required
              id="message-field"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              name="message"
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ marginTop: 2 }}
            >
              Send
            </Button>

            {/* Success / Error Messages */}
            {successMsg && <p className="success-msg">{successMsg}</p>}
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
