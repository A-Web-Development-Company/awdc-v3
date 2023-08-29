import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-cta">
      <h2 className="tagline">Discover your digital edge.</h2>
      <p className="sub-tagline">
        Accelerate your business potential with our strategists, engineers, and
        designers, all working to elevate your digital presence with a team of
        experts who are passionate about helping businesses succeed.
      </p>

      <h2 className="mobile-tagline">
        Discover your digital edge. Accelerate your business potential
      </h2>
      <PrimaryButton className="landing-button">
        Schedule a free consultation
      </PrimaryButton>
    </div>
  );
};

export default LandingPage;
