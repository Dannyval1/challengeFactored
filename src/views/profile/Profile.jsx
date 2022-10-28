import React, { useEffect, useState } from "react";
import Instagram from "./../../assets/images/instaIcon.png";
import Twitter from "./../../assets/images/twitterIcon.png";
import Header from "./../header/Header";

import "./Profile.css";
import Chart from "../chart/Chart";

const Profile = () => {
  const [generalData, setGeneralData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setGeneralData(data.data);
      });
  }, []);

  return (
    <div className="profilePage">
      <Header />
      <div className="firstPart">
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-12">
              <div className="profilePic mt-5 mb-3">
                <img
                  className="pic"
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  alt="Profile Pic"
                />
              </div>
              <div className="mainData">
                <h2 className="title">{generalData.name}</h2>
                <h3 className="subtitle">{generalData.position}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionSocialMedia">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="buttonContainer">
                <button className="btn-social">
                  <img src={Instagram} alt="Instagram" />
                </button>
                <button className="btn-social">
                  <img src={Twitter} alt="Twitter" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutMeSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aboutMe mt-5">
                <h2 className="title-rows">About Me</h2>
                <p className="description">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mySkills">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-rows">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Chart generalSkills={generalData.skills} />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
