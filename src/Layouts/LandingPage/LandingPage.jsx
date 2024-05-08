import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import "./LandingPage.css";
import ContactForm from "../../Components/Forms/Contact/ContactForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: ["fieldwork", "san-serif"].join(","),
  },
});

const LandingPage = () => {
  return (
    <div className="landing-cta">
      <h2 className="tagline">Discover your digital edge.</h2>
      <p className="sub-tagline">
        Accelerate your business potential with our strategists, engineers, and
        designers, all working to elevate your digital presence with a team of
        experts who are passionate about helping businesses succeed.
      </p>

      <PrimaryButton className="landing-button">
        Schedule a free consultation
      </PrimaryButton>
      <ThemeProvider theme={theme}>
        <ContactForm />
      </ThemeProvider>
    </div>
  );
};

export default LandingPage;
