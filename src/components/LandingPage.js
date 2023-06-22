import landing from "../images/landing.png";

export const LandingPage = () => {
  return (
    <div className="col-12 col-md-9 col-lg-3 mx-auto text-center">
      <img className="landing-image" src={landing} alt="memories" />
      <div className=" my-2">
        <div className="app-slogan">"Capture moments to cherish memories"</div>
        <div className="app-slogan"></div>
      </div>

      <h1 className="fs-4 badge bg-dark">
        <span>Get Started</span>
      </h1>
    </div>
  );
};
