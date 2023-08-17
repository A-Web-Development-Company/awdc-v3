import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-cta">
      <h2 className="tagline">
        Discover your digital edge.
        <br />
        Accelerate your business
        <br />
        potential.
      </h2>
      <PrimaryButton className="landing-button">
        Schedule a free consultation
      </PrimaryButton>
    </div>
  );
};

export default LandingPage;
