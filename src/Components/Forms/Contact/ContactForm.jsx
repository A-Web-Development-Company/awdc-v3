import { TextField } from "@mui/material";
import PrimaryButton from "../../Buttons/PrimaryButton";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form
        method="POST"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <TextField
          variant="outlined"
          label="Name"
          name="name"
          required
          fullWidth
          type="text"
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Email Address"
          name="email"
          required
          fullWidth
          type="email"
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Company/Organization Name"
          name="company"
          fullWidth
          type="text"
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Additional Comments/Notes"
          name="message"
          fullWidth
          multiline
          rows={4}
          type="text"
          margin="normal"
        />
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactForm;
