import "./styles/aboutstyle.css";
import ProfileImage from "./resources/Profile.jpg";
import LinkedInIcon from "./resources/linkedin.png";
import GitHubIcon from "./resources/github.png";
import InstagramIcon from "./resources/instagram.png";
import TwitterIcon from "./resources/twitter.png";

function About() {
  return (
    <div className="body">
      <h1 className="kn">Know Me</h1>
      <div className="creators mt-4">
        <div className="cards">
          <div className="details">
            <div className="image">
              <div className="img">
                <img src={ProfileImage} alt="" />
              </div>
            </div>
            <div className="data">
              <h3 className="name">
                <span>
                  <h2>Suraj Kumar</h2>
                </span>
                <span>
                  <h2>Yadav</h2>
                </span>
              </h3>
              <p className="designation">MERN Developer, ML, JAVA Developer</p>
              <div className="social-media-list">
                <ul>
                  <li>
                    <a target="_blank" href="http://www.linkedin.com/in/suraj-kumar-yadav-318230238" rel="noreferrer">
                      <img className="icn" src={LinkedInIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/TheSuraj01" rel="noreferrer">
                      <img className="icn" src={GitHubIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/surajkumaryadav.in/" rel="noreferrer">
                      <img className="icn" src={InstagramIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/SURAJRAIZADA6" rel="noreferrer">
                      <img className="icn" src={TwitterIcon} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
