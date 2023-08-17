import { TextField } from "@mui/material";
import PrimaryButton from "../Buttons/PrimaryButton";
import { FormControl } from "@mui/material";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <FormControl>
        <form
          method="POST"
          name="contact-mui"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-mui" />
          <TextField
            label="Name"
            name="name"
            required
            fullWidth
            type="text"
            margin="normal"
          />
          <TextField
            label="Email Address"
            required
            fullWidth
            type="email"
            margin="normal"
          />
          <TextField
            label="Company/Organization Name"
            fullWidth
            type="text"
            margin="normal"
          />
          <TextField
            label="Additional Comments/Notes"
            fullWidth
            multiline
            rows={4}
            type="text"
            margin="normal"
          />
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </FormControl>
    </div>
  );
};

export default ContactForm;
