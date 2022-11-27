import React, { useState, useRef } from "react";
import {} from "../styles/LoginRegisterScreenStyles.css";
import { Button, Form, Modal } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import { LinkContainer } from "react-router-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [select, setSelect] = useState("ES");
  const onSelect = (code) => setSelect(code);
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(true);

  const disclainerPDF = "/Disclaimer.pdf";
  const tAcPdf ="/Terms_&_Conditions.pdf"
  const pApPdf ="/Privacy_Policy.pdf"

  const handleSubmit = (event) => {
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(false);
      event.currentTarget.reset();
      event.preventDefault();
      handleClose(true);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
      show={!show}
      onHide={handleClose}
    >
      <Modal.Body className="modalBody">
        <div className="modalLogoDiv">
          <img
            src="/images/logos/logo-360-1.png"
            alt="FundFairway-logo"
            className="fundFiLogo"
          />
        </div>
        <h4 className="modalH4">Disclaimer</h4>
        <p className="modalP">
          Our tools are meant for Professional Investors ONLY, in order to have
          access to our tools and services, please identify your investor
          profile and country of domicile.
        </p>
        <Form
          noValidate
          ref={form}
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="divModalSelect">
            <div className="countrySelectorDiv">
              <ReactFlagsSelect
                className="countrySelector"
                selected={select}
                onSelect={onSelect}
                countries={[
                  "ES",
                  "GB",
                  "AT",
                  "BE",
                  "BG",
                  "HR",
                  "CY",
                  "CZ",
                  "DK",
                  "EE",
                  "FI",
                  "FR",
                  "DE",
                  "EL",
                  "HU",
                  "IS",
                  "IE",
                  "IT",
                  "LV",
                  "LI",
                  "LT",
                  "LU",
                  "MT",
                  "NL",
                  "NO",
                  "PL",
                  "PT",
                  "RO",
                  "SI",
                  "SK",
                  "SE",
                  "CH",
                ]}
              />
            </div>
            <div className="profInvestorDiv">
              <Form.Check
                label="I am a Professional Investor"
                required
              ></Form.Check>
              <Form.Control.Feedback type="invalid">
                Please select that you are a valid Professional Investor for
                continuining.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="modalConditions">
            <Form.Check
              label={
                <span>
                  I hereby confirm that I have read and accepted the <a href={disclainerPDF} target="_blank" rel="noreferrer" className="linkToDocs">disclaimer</a> and <a href={tAcPdf} target="_blank" rel="noreferrer" className="linkToDocs">terms and conditions</a>  of use as well the <a href={pApPdf} target="_blank" rel="noreferrer" className="linkToDocs">privacy policy of
                  360fundinsight.com.</a> 
                </span>
              }
              required
            ></Form.Check>
          </div>
          <div className="modalBtns">
            <Button type="submit" className="fTbutton pill" size="lg">
              Proceed
            </Button>
            <LinkContainer to="/">
              <Button className="loginButton pill" size="lg">
                Cancel
              </Button>
            </LinkContainer>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const LoginRegisterScreen = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const fundsfairwayLink = "https://fundsfairway.com";
  return (
    <div className="lRDiv">
      <div className="leftLrDiv">
        <div className="fFimgDiv">
          <img
            src="/images/logos/fund-Fairway-.png"
            alt="FundFairway-logo"
            className="fundFimg"
          />
        </div>
        <div className="lRparagraphDiv">
          <p className="lRparagraph">
            Register for a free trial today and see how our powerful tools can
            help you improve your business profitability.
          </p>
        </div>
        <div className="lRbuttonsDiv">
          <Button
            size="lg"
            className="fTbutton pill"
            href={fundsfairwayLink}
            rel="noreferrer"
          >
            Free Trial
          </Button>
          <Button
            size="lg"
            className="loginButton pill"
            href={fundsfairwayLink}
            rel="noreferrer"
          >
            Login
          </Button>
        </div>
      </div>
      <div className="rightLrDiv">
        <img
          src="/images/login-images.png"
          alt="login-images"
          className="loginImages"
        />
      </div>
      <MyVerticallyCenteredModal show={show} onHide={handleClose} />
    </div>
  );
};

export default LoginRegisterScreen;
