import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, FloatingLabel, Col, Modal } from "react-bootstrap";
import {} from "../styles/ContactUsStyles.css";

const ContactUsScreen = () => {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let serviceId = process.env.REACT_APP_SERVICE_ID;
    let templateId = process.env.REACT_APP_TEMPLATE_ID;
    let publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, "#contact-form", publicKey).then(
      () => {
        setValidated(false);
      },
      (error) => {
        alert("There was a problem sending your message.", error);
      }
    );
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail(event);
      setValidated(false);
      event.currentTarget.reset();
      setShow(true);
    }
  };

  return (
    <>
      <div className="firstContactUsDiv">
        <div className="firstSubDivMu">
          <div className="logoMUDiv">
            <img src="/logo-header360.svg" alt="360-logo" className="logoMU" />
          </div>

          <div className="secondSubDivMu">
            <div className="ukImageDiv">
              <img src="/images/uk-map.svg" alt="ukMap" className="ukMap" />
              <p className="pAddressTitle">UNITED KINGDOM</p>
              <p className="pAddress">Spaces Ealing Aurora 71-75</p>
              <p className="pAddress">Uxbridge Road - Ealing</p>
              <p className="pAddress">LONDON | W5 5SL</p>
              <p className="pAddress">+44(0)795 714 7852</p>
            </div>

            <div className="spImageDiv">
              <img
                src="/images/spain-map.png"
                alt="Map-Spain"
                className="spainMap"
              />
              <p className="pAddressTitleSP">SPAIN</p>
              <p className="pAddress">Calle Félix Boix, 3</p>
              <p className="pAddress">PLanta 1º</p>
              <p className="pAddress">MADRID - 28035</p>
              <p className="pAddress">+35 915 797 084</p>
            </div>
          </div>
        </div>

        <div className="formDivMu">
          <h1 className="formTitle">Contact Us</h1>
          <Form
            noValidate
            ref={form}
            onSubmit={handleSubmit}
            validated={validated}
            id="contact-form"
          >
            <Form.Group className="mb-3" controlId="contactUsForm">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Name"
                className="mb-3 border-dark"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                  className="border-dark"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Company"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Company"
                  name="user_company"
                  required
                  className="border-dark"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid company name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="E-mail"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                  className="border-dark"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Message (optional)"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="user_message"
                  style={{ height: "90px" }}
                  className="border-dark"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a message.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </FloatingLabel>
              <Col md={{ span: 10, offset: 2 }}>
                <Form.Check
                  label="Accept Privacy Policy and Conditions"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a message.
                </Form.Control.Feedback>
              </Col>
              <Col md={{ span: 10, offset: 2 }}>
                <Form.Check label="Subscribe to relevant updates and news" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
              <Col md={{ span: 10, offset: 5 }} className="btmFormDiv">
                <Button
                  type="submit"
                  value="send"
                  className="mb-2 mt-3 modalButton"
                  size="lg"
                >
                  Submit
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header
                    closeButton
                    className="modalTextCentered"
                  ></Modal.Header>
                  <Modal.Body className="modalTextCentered">
                    Your message has been succesfully sent.
                  </Modal.Body>
                  <Modal.Footer className="modalTextCentered">
                    <Button
                      className="modalButton rounded-pill"
                      onClick={handleClose}
                    >
                      Accept
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};
export default ContactUsScreen;
