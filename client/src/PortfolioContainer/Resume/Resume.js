import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

      /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
      { label: "Business Analysis Training And Consulting", logoSrc: "education.svg" },
      { label: "Project Management Training And Consulting", logoSrc: "work-history.svg" },
      { label: "Commission Agents ", logoSrc: "programming-skills.svg" },
      { label: "New Business Agents", logoSrc: "projects.svg" },
      { label: "Nigerian Food Items", logoSrc: "interests.svg" },
    ];
  
    //here we have


    const resumeDetails = [
      <div className="resume-screen-container" key="business-agent">
        <div className="experience-container">

          <div className="experience-description">
            <span className="resume-description-text">
            Do you inspire to be a  Business Analyst, or PMO Analyst, then you are on the right website. Our trainers have globally recognized project management and business analysis qualifications including PMP, PRINCE2, and Agile Certifications. For training made to fit your schedule and needs, you can achieve your career goals in business analysis.
            </span>
          </div>
          <div className="experience-description">

          </div>
        </div>
      </div>,
  
      /* Project Management */
      <div className="resume-screen-container" key="project-management">
        <div className="experience-container">
          <div className="experience-description">
            <span className="resume-description-text">
              Making our esteem clients understand Project management as the application of processes, methods, skills, knowledge, and experience to achieve specific project objectives according to the project acceptance criteria within agreed parameters is our core as professionals because Project management has final deliverables that are constrained to a finite timescale and budget in any project. We provide expert opinions, analysis, and recommendations to organizations or individuals, based on their own expertise.
               We are essentially fixers, serving as objective troubleshooters, and providing strategies to prevent problems and improve performance.

            </span>
          </div>
          <div className="experience-description">
          </div>
        </div>
      </div>,
  
      /* Commission Agent */
      <div className="resume-screen-container" key="commission-agent">
        <div className="experience-container">

          <div className="experience-description">
            <span className="resume-description-text">
            As Commission agents serve as liaisons for companies by being the direct seller of a product or service. We are well versed in the product and business we are representing and passionate about what and who we’re representing and a solid reputation in our industry. We also assist businesses that have limited budgets and those that wish for anonymity in the marketplace. We purchase and sell items on behalf of our principal, usually a company. 
We are responsible for meeting the ideal conditions requested by the principal and must stay within the provided budget or the price of sale. Reroute customer calls to appropriate sales personnel. Maintain a database of customer calls, their needs
            </span>
          </div>
          <div className="experience-description">
          </div>
        </div>
      </div>,

  
      /* New Business */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">

          <div className="experience-description">
            <span className="resume-description-text">
            As a business agent, we manage our client’s, company’s, or group’s business affairs.  negotiate contracts for them, helps in managing their finances and arrange their public appearance schedules. Our job may also involve organizing travel itineraries for cost effective purposes
we act as the primary point of contact with customers and build long-term relationships with them. We are act as middlemen, communicating for the customer and the agency and ensuring both parties are happy

            </span>
      </div>
       </div>
      </div>,
  
      /* Nigeria food item */
      <div className="resume-screen-container" key="nigerian-food">
        <div className="experience-container">
          < div className="experience-description">
        <span className="resume-description-text">
            We have in Nigeria one of the best cuisines in the world, which comprises dishes or food items obtained from the numerous ethnic group
             that makes up the country. Nigerian cuisine like those of other West African countries such as Ghana and the Benin Republic contains spices
              and herbs alongside palm or groundnut oil to produce deeply flavored sauces and soups with an enticing aroma.
              Nigerian food is surprisingly hearty and tasty. From the interesting texture of pounded yam to the commonly eaten varieties of Nigerian soups. Below are 
              some Nigerian foods you must try; Iyan (Pounded Yam), Ewa Riro (Beans Porridge), Jollof Rice, Beef Suya (Thin Strips of Seasoned, Grilled Beef, 
             Dodo (Fried Plantain), Moi Moi (Bean Pudding), Nkwobi (Head And Legs Of Cow).  We provide Nigerian food items to your doorstep, shop with us at
            </span>
            <a target="_blank" rel="noreferrer" href="https://theangelmarketplace.com/">
               <button className="food-button">AngelMarketPlace</button>
            </a>
          </div>
          </div>
      </div>,
    ];

    const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

    const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };
  
    const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };

    useEffect(() => {
      return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);
  

    return (
      <div className="resume-container screen-container " id={props.id || ""}>
        <div className="resume-content">
          <ScreenHeading title={"Services"} subHeading={"Business Management Consultants And Retail Traders"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
  
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;