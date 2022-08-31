import { MAIL, NAME, PHONE } from "@constants";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer-area bg-f7fafd">
    <div className="container">
      <div>
        <img src="/images/map.png" className="map" alt="map" />
      </div>
      <div className="row trs_center">
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <div className="logo">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/"
              >
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/contact"
            >
              <h3>Контакты</h3>
            </Link>

            <div>
              <a href={`mailto:${MAIL}`}>{MAIL}</a>
            </div>

            <br />

            <div>
              <a href={`tel:${PHONE}`}>{PHONE}</a>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="copyright-area">
            <p>Copyright &copy; 2021 {NAME}</p>
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
