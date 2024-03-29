import { useTranslation } from "react-i18next";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contacts.css";

const Contacts = () => {
  const { t } = useTranslation();
  const [captcha, setCaptcha] = useState(null);

  return (
    <div className="contacts" id="contacts">
      <div className="contacts-wrap">
        <h1>{t("contact")}</h1>
        <ReCAPTCHA
          sitekey="6Lfo5FMpAAAAAI6Y0YkCOosYs2Qou1mdcRbRcH8D"
          onChange={(val) => setCaptcha(val)}
          className={captcha && "unactive"}
        />
        <div className={`contacts-items ${captcha ? "" : "unactive"}`}>
          <a
            href="mailto:pitiphong.kit@gmail.com"
            className="contacts-item"
            target="_blank"
          >
            <i className="fa-solid fa-envelope"></i>
            <h4>pitiphong.kit@gmail.com</h4>
          </a>
          <a
            href="https://github.com/RealNai"
            className="contacts-item"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
            <h4>Github</h4>
          </a>
          <a
            href="https://line.me/ti/p/pitiphong.kit"
            className="contacts-item"
            target="_blank"
          >
            <i className="fa-brands fa-line"></i>
            <h4>pitiphong.kit</h4>
          </a>
          <a
            href="https://www.linkedin.com/in/pitiphong-kit/"
            className="contacts-item"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
            <h4>Linkedin</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
