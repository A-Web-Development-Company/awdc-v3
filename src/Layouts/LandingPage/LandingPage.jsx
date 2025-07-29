import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import './LandingPage.css';
import ContactForm from '../../Components/Forms/Contact/ContactForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Rafiki from '../../assets/images/UI-UX-design-rafiki.svg?react';

const theme = createTheme({
  typography: {
    fontFamily: ['fieldwork', 'sans-serif'].join(','),
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

      <Rafiki className="rafiki-image" />
      <p className="image-caption">
        UI/UX-Design Illustration by{' '}
        <a
          href="https://storyset.com/web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storyset
        </a>
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
