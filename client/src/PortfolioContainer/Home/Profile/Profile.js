import React, { useEffect } from "react";
import Typical from "react-typical";

import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
             
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              <span className="highlighted-text">Tamang Financial and Commercial Services (UK) Ltd</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Business Analysis Training",
                      1000,
                      "Project Management Training",
                      1000,
                      "Commission Agents",
                      1000,
                      "New Business Agents ",
                      1000,
                      "Nigerian Food Items",
                      1000,
                    ]}
                  />
                </h1>
            </span>
            <span className="primary-text">
                {" "}
                Business management consultants and retail traders
                <p>Company Number 08119804</p>
              </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToContact()}
            > GET QUOTE </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}