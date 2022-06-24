import "./reservation.scss";

// From react Reveal
import { Zoom, Fade } from "react-reveal";

// From Materail UI
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Reservation = () => {
  return (
    <div className="ourteam-container">
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
    </div>
  );
};

export default Reservation;
