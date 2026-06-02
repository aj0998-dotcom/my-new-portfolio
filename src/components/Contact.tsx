import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:jainaditya0310@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — jainaditya0310@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              SRM Institute of Science and Technology — B.Tech CSE, CGPA 9.51
            </p>
            <p>Sannmati Higher Secondary School — Class XII, 91.4%</p>
            <p>Sannmati Higher Secondary School — Class X, 89.6%</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ajj098-dotcom"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://adj098-dotcom.github.io/my-portfolio/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
            <a
              href="tel:+916263120550"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Mobile <MdArrowOutward />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> for <span>Aditya Jain</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
