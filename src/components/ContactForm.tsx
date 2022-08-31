import React, { useState } from "react";
import InputMask from "react-input-mask";

import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Мы скоро перезвоним!",
    // text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  number: "",
};

const templateUrl =
  "https://za-it.bitrix24.ru/rest/1/ae0hygmqx539sfic/crm.lead.add.json";

export const ContactForm = () => {
  const [number, setNumber] = useState("");
  const {
    formState: { errors },
  } = useForm();

  const onChange = (event) => {
    setNumber(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchUrl = new URL(templateUrl);
      fetchUrl.searchParams.append("FIELDS[TITLE]", `${number} Заявка с сайта`);
      fetchUrl.searchParams.append("FIELDS[PHONE][0][VALUE]", number);
      const response = await fetch(fetchUrl.toString());
      setNumber("");
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Мы вам перезвоним</h2>
          <div className="bar"></div>
          <p>Просто оставьте номер</p>
        </div>

        <div className="row align-items-center">
          {/* <div className="col-lg-6 col-md-12">
            <img src="/images/contact-img.png" alt="image" />
          </div> */}

          <div className="col-lg-3"></div>

          <div className="col-lg-6">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <InputMask
                      mask="+9 999 999 99-99"
                      maskChar=" "
                      onChange={onChange}
                      placeholder="Ваш телефон"
                      className="form-control"
                      value={number}
                    />

                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.number && "Number is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Перезвоните мне
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
