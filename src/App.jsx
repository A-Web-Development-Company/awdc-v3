import "./App.css";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import LandingPage from "./Layouts/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./Components/Forms/Contact/ContactForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AboutPage from "./Pages/AboutPage";

const theme = createTheme({
  typography: {
    fontFamily: ["fieldwork", "san-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <ThemeProvider theme={theme}>
          <ContactForm />
        </ThemeProvider>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
