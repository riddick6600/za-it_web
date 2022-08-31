import { MAIL, PHONE } from "@constants";

export const ContactInfo = () => {
  return (
    <div className="contact-info-area ptb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <p>
                <a href={`mailto:${MAIL}`}>{MAIL}</a>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <p>
                <a href={`tel:${PHONE}`}>{PHONE}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
