import "./contactus.scss";

// From react Reveal
import {Zoom, Fade} from "react-reveal";

// From Materail UI
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Contactus = () => {
  return (
    <section id="contactus" className="contactus-container">
      <div className="location-container">
        <div className="location-header">
          <Zoom delay={40} duration={2000}>
            <h1>Visit Us</h1>
            <h2>Our Location</h2>
            <div className="divider">
              <span className="left"></span>
              <LocalDiningIcon className="spoonFork" />
              <span className="right"></span>
            </div>
          </Zoom>
        </div>
        <div className="locations">
          <div className="location">
            <div className="name-address">
              <h1>市ケ谷</h1>
              <div className="divider">
                <span className="left"></span>
                <LocalDiningIcon className="spoonFork" />
                <span className="right"></span>
              </div>
              <h2>
                〒102-0073 東京都千代田区九段北４丁目２−15 市ヶ谷プラザ(2F)
              </h2>
            </div>
            <div className="open-hours">
              <h1>営業時間</h1>
              <div className="hours">
                <h1>毎日 : </h1>
                <h2>
                  11:00 am - 03:00 pm
                  <br />
                  05:00 pm - 10:30 pm
                </h2>
                <br />
              </div>
            </div>
            <div className="contact-us">
              <h1>お問い合わせ</h1>
              <h2>+81-50-5571-6403</h2>
            </div>

            <a
              href="https://www.google.com/maps/place/%E3%82%A4%E3%83%B3%E3%83%89%E6%96%99%E7%90%86%E5%BA%97%E3%83%8A%E3%83%B3%E3%83%8F%E3%82%A6%E3%82%B9+(Indian+Restaurant+Nan+House)/@35.6915574,139.7345974,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c60b66565a1:0xd038dd79f515ef70!8m2!3d35.6915574!4d139.7367861"
              className="direction"
              target="_blank"
              rel="noreferrer"
            >
              Get Direction <KeyboardDoubleArrowRightIcon className="arrow" />
            </a>
          </div>
          <div className="location">
            <div className="name-address">
              <h1>市ケ谷</h1>
              <div className="divider">
                <span className="left"></span>
                <LocalDiningIcon className="spoonFork" />
                <span className="right"></span>
              </div>
              <h2>
                〒102-0073 東京都千代田区九段北４丁目２−15 市ヶ谷プラザ(2F)
              </h2>
            </div>
            <div className="open-hours">
              <h1>営業時間</h1>
              <div className="hours">
                <h1>毎日 : </h1>
                <h2>
                  11:00 am - 03:00 pm
                  <br />
                  05:00 pm - 10:30 pm
                </h2>
                <br />
              </div>
            </div>
            <div className="contact-us">
              <h1>お問い合わせ</h1>
              <h2>+81-50-5571-6403</h2>
            </div>

            <a
              href="https://www.google.com/maps/place/%E3%82%A4%E3%83%B3%E3%83%89%E6%96%99%E7%90%86%E5%BA%97%E3%83%8A%E3%83%B3%E3%83%8F%E3%82%A6%E3%82%B9+(Indian+Restaurant+Nan+House)/@35.6915574,139.7345974,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c60b66565a1:0xd038dd79f515ef70!8m2!3d35.6915574!4d139.7367861"
              className="direction"
              target="_blank"
              rel="noreferrer"
            >
              Get Direction <KeyboardDoubleArrowRightIcon className="arrow" />
            </a>
          </div>
          <div className="location">
            <div className="name-address">
              <h1>市ケ谷</h1>
              <div className="divider">
                <span className="left"></span>
                <LocalDiningIcon className="spoonFork" />
                <span className="right"></span>
              </div>
              <h2>
                〒102-0073 東京都千代田区九段北４丁目２−15 市ヶ谷プラザ(2F)
              </h2>
            </div>
            <div className="open-hours">
              <h1>営業時間</h1>
              <div className="hours">
                <h1>毎日 : </h1>
                <h2>
                  11:00 am - 03:00 pm
                  <br />
                  05:00 pm - 10:30 pm
                </h2>
                <br />
              </div>
            </div>
            <div className="contact-us">
              <h1>お問い合わせ</h1>
              <h2>+81-50-5571-6403</h2>
            </div>

            <a
              href="https://www.google.com/maps/place/%E3%82%A4%E3%83%B3%E3%83%89%E6%96%99%E7%90%86%E5%BA%97%E3%83%8A%E3%83%B3%E3%83%8F%E3%82%A6%E3%82%B9+(Indian+Restaurant+Nan+House)/@35.6915574,139.7345974,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c60b66565a1:0xd038dd79f515ef70!8m2!3d35.6915574!4d139.7367861"
              className="direction"
              target="_blank"
              rel="noreferrer"
            >
              Get Direction <KeyboardDoubleArrowRightIcon className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
