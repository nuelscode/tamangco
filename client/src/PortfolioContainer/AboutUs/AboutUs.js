import React  from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutUs.css";

export default function AboutUs(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "We are happy to introduce Tamang Financial and Commercial Services (UK) Ltd to you. We are a small consultancy with experience in business planning, process modelling and improvement,  requirements planning and project management and training. We offer consultancy services in Entrepreneur Visa Business Plans, Small Business Plans, Process Improvement and coaching services in the fields of Project Management and Business Analysis. We also sale African/Nigerian food items.",
        
      highlights: {
      bullets: [
      ],
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-In" 
        id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Us"} subHeading={"Why Choose Us?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
                  onClick={() => ScrollService.scrollHandler.scrollToContact()}
              > GET QUOTE </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}