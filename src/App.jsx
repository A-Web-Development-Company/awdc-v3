import "./App.css";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import LandingPage from "./Layouts/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./Components/Forms/Contact/ContactForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AboutPage from "./Pages/AboutPage";
import MainLayout from "./Layouts/MainLayout"

const theme = createTheme({
  typography: {
    fontFamily: ["fieldwork", "san-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <Router>
        {/* <Header />  now present on all pages via MainLayout */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/About" element={<AboutPage />} />
          </Route>
        </Routes>
        {/* <ThemeProvider theme={theme}>
          <ContactForm />
        </ThemeProvider>  now only present on landing page, but can be implemented wherever */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
