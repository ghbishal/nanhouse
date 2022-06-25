import "./contactus.scss";

// From react Reveal
import {Zoom, Fade} from "react-reveal";

// From Materail UI
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import StoreIcon from "@mui/icons-material/Store";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import {useRef} from "react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_234f5oj",
        "template_zzbxy7y",
        form.current,
        "VM9x5CufUB2MLxG1C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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

      <div className="contactus">
        <div className="contact-us-head">
          <Zoom delay={40} duration={2000}>
            <h1>Contact Us</h1>
            <h2>Reservation</h2>
            <div className="divider">
              <span className="left"></span>
              <LocalDiningIcon className="spoonFork" />
              <span className="right"></span>
            </div>
          </Zoom>
        </div>
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.8032005052496!2d140.04475811792753!3d35.48219674832178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60229e418807ad7f%3A0xa289976e78085069!2z44OK44Oz44OP44Km44K5!5e0!3m2!1sja!2sjp!4v1656065845903!5m2!1sja!2sjp"></iframe>
        </div>
        <div className="contactus-form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="ナンハウス" required />
            <input
              type="email"
              name="email"
              placeholder="nanhousejp@gmail.com"
              required
            />
            <input type="text" name="phone" placeholder="080 - 1234 - 4567" />
            <textarea
              name="message"
              placeholder="メッセージ"
              rows="5"
              required
            ></textarea>
            <button type="submit"> Send Message </button>
          </form>

          <div className="contact-element">
            <div className="element-container">
              <div className="element">
                <a
                  href="https://www.google.com/maps/dir/35.4767337,140.0495734/%E3%80%92299-0111+%E5%8D%83%E8%91%89%E7%9C%8C%E5%B8%82%E5%8E%9F%E5%B8%82%E5%A7%89%E5%B4%8E%EF%BC%97%EF%BC%92%EF%BC%99%E2%88%92%EF%BC%93+%E3%83%8A%E3%83%B3%E3%83%8F%E3%82%A6%E3%82%B9/@35.4788162,140.0441912,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x60229e418807ad7f:0xa289976e78085069!2m2!1d140.0444581!2d35.4821689!3e0?hl=ja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-container"
                >
                  <StoreIcon className="icon" />
                </a>
                <h1>住所</h1>
                <a
                  href="https://www.google.com/maps/dir/35.4767337,140.0495734/%E3%80%92299-0111+%E5%8D%83%E8%91%89%E7%9C%8C%E5%B8%82%E5%8E%9F%E5%B8%82%E5%A7%89%E5%B4%8E%EF%BC%97%EF%BC%92%EF%BC%99%E2%88%92%EF%BC%93+%E3%83%8A%E3%83%B3%E3%83%8F%E3%82%A6%E3%82%B9/@35.4788162,140.0441912,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x60229e418807ad7f:0xa289976e78085069!2m2!1d140.0444581!2d35.4821689!3e0?hl=ja"
                  target="_blank"
                  rel="noreferrer"
                >
                  〒299-0111 千葉県市原市姉崎 <br />
                  ７２９−３ ナンハウス
                </a>
              </div>
              <div className="element">
                <a
                  href="tel:+81-04-3661-6442"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-container"
                >
                  <PhoneIcon className="icon" />
                </a>
                <h1>電話</h1>
                <a href="tel:+81-04-3661-6442" target="_blank" rel="noreferrer">
                  +81-04-3661-6442
                </a>
              </div>
              <div className="element">
                <a
                  href="mailto:nanhousejapan@gmail.com"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <EmailIcon className="icon" />
                </a>
                <h1>メイル</h1>
                <a
                  href="mailto:nanhousejapan@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  nanhousejapan@gmail.com
                </a>
              </div>
              <div className="element">
                <a
                  href="https://www.facebook.com/nanhousejp"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookOutlinedIcon className="icon" />
                </a>
                <h1>フェイスブック</h1>
                <a
                  href="https://www.facebook.com/nanhousejp"
                  target="_blank"
                  rel="noreferrer"
                >
                  nanhouse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
