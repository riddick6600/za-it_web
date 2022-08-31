import { NAME, PHONE } from "@constants";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div>
          <img src="/images/map.png" className="map" alt="map" />
        </div>
        <div className="row trs_center">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo.svg" alt="logo" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Digital</h3>
              <ul className="list">
                <li>
                  <Link to="/contact">Контакты</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Контакты</h3>
              <ul className="footer-contact-info">
                <li>
                  {/* <Icon.Mail /> */}
                  <a href="mailto:admin@za-it.ru">admin@za-it.ru</a>
                </li>
                <li>
                  {/* <Icon.PhoneCall /> */}
                  <a href={`tel:${PHONE}`}>{PHONE}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} {NAME}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </footer>
  );
};
