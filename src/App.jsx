import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Layouts/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./Components/Forms/ContactForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <ContactForm />
        <Footer />
      </Router>
    </>
  );
}

export default App;
