import "./team.scss";

// From react Reveal
import {Zoom, Fade} from "react-reveal";
import Pulse from "react-reveal/Pulse";

// From Materail UI
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import team from "../../database/team.js";

const Team = () => {
  return (
    <div id="team" className="ourteam-container">
      <div className="valuableAssets">
        <Zoom delay={40} duration={2000}>
          <div className="slogan">
            <h1>Our most valuable asset</h1>
            <h2>Always friendly & professional staff</h2>
            <div className="divider">
              <span className="left"></span>
              <LocalDiningIcon className="spoonFork" />
              <span className="right"></span>
            </div>
          </div>
        </Zoom>
      </div>

      <div className="team-container">
        {team.map(({id, name, title, img, desc}) => {
          return (
            <Pulse delay={50} duration={2000}>
              <div className="team" key={id}>
                <img src={img} alt={name} className="photo" />
                <h2 className="name">{name}</h2>
                <h3 className="title">{title}</h3>
                <div className="divider">
                  <span className="left"></span>
                  <LocalDiningIcon className="spoonFork" />
                  <span className="right"></span>
                </div>
                <p className="message">{desc}</p>
              </div>
            </Pulse>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
