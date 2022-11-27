import React from "react";

import "../styles/MeetUsStyles.css";

import { Container, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import {
  ContainerModal,
  MeetTitle,
  Greeting,
  Paragraph,
  Title,
  BioParagraph,
  BioName,
  BioImagen,
  BioSpan,
} from "../styles/MeetusStyles.js";

function BioModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ContainerModal>
        <div className="row text-center">
          <Modal.Body>
            <BioImagen
              src="/images/meetusimages/EnriquePardo.png"
              alt="Enrique Pardo CEO"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />

            <BioName variant="primary">Enrique Pardo</BioName>
            <BioSpan
              variant="primary"
              className="small text-uppercase text-muted"
            >
              CHIEF EXECUTIVE OFFICER
            </BioSpan>
            <BioParagraph>
              Enrique had been working in the Asset Management industry for over
              30 years before co-founding 360 Fund Insight. Enrique worked at
              Allfunds Bank as Global Head of Investment and was a member of the
              Executive Committee since 2013.
            </BioParagraph>
            <BioParagraph>
              Enrique has years of experience leading teams of Investment
              Professionals providing Fund Research,Governance, and Investment
              Solutions. CFA charter holder since 2003.
            </BioParagraph>
            <BioParagraph>
              *Enrique holds Director Responsibilities as described by the FCA
            </BioParagraph>
          </Modal.Body>
        </div>
      </ContainerModal>
    </Modal>
  );
}

const MeetTheTeamScreen = () => {
  //const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="firstDivMeetUs">
        <MeetTitle>
          <Title> Meet the Team </Title>
        </MeetTitle>
        <Greeting>
          <h2>
            <strong>Description</strong>
          </h2>
          <Paragraph>
            We are a vastly experienced team that moved away from legacy
            business models to create something innovative in our industry.
          </Paragraph>
          <Paragraph>
            We aspire to provide truly independent, transparent and
            cost-effective investment research that is aligned with the
            interests of the end investor in this new environment. Current
            business models are challenged as transparency, independence and
            best execution become critical in the new regulatory regime.
          </Paragraph>
          <Paragraph>
            Our philosophy is to focus on becoming your trusted partner to help
            your company adapt and differentiate your business model to benefit
            from the revolutionary changes in the market in a fast and
            cost-effective manner
          </Paragraph>
        </Greeting>

        <Container>
          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4 ">
                <BioImagen
                  src="/images/meetusimages/EnriquePardo.png"
                  alt="Enrique Pardo CEO"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName variant="primary" onClick={() => setModalShow(true)}>
                  Enrique Pardo
                </BioName>
                <BioSpan className="small text-uppercase text-muted">
                  CEO
                </BioSpan>

                <BioModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  className="modal-content-background"
                />
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5 ">
              <div className="bg-transparent rounded shadow-sm py-5 px-4 ">
                <BioImagen
                  src="/images/meetusimages/PedroMarazuela.png"
                  alt="Pedro Marazuela COO"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Pedro Marazuela</BioName>
                <span className="small text-uppercase text-muted">COO</span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/KatyGavelas.png"
                  alt="Katy Gavelas CCO"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Katy Gavelas</BioName>
                <span className="small text-uppercase text-muted">CCO</span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/PhilLindsay.png"
                  alt="Phil Lindsay (Chairman)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Philip Lindsay</BioName>
                <span className="small text-uppercase text-muted">
                  Chairman
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/ChetanModi.png"
                  alt="Chetan Modi (CCO-Chief Commercial Officer) "
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Chetan Modi</BioName>
                <span className="small text-uppercase text-muted">CCO</span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/LuisBenitez.png"
                  alt="Luis Benitez (CIO-Chief Information Officer) "
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Luis Benitez</BioName>
                <span className="small text-uppercase text-muted">CIO</span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/OlgaRosario.png"
                  alt="Olga Rosario (HOF-Head of Finance and Human Resources) "
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Olga Rosario</BioName>
                <span className="small text-uppercase text-muted">
                  Head of Finance and RRHH
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/FernandoZapata.png"
                  alt="Fernando Zapata (Head of Marketing and Communication)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Fernando Zapata</BioName>
                <span className="small text-uppercase text-muted">
                  Head of Marketing
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/PabloBadenes.png"
                  alt="Pablo Badenes
                (Investment Analyst - Fund Selection)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Pablo Badenes</BioName>
                <span className="small text-uppercase text-muted">
                  Investment Analyst
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/DanielAyquipa.png"
                  alt="Daniel Ayquipa (Investment Research - Portfolios)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Daniel Ayquipa</BioName>
                <span className="small text-uppercase text-muted">
                  Investment Research
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/BenjaminSanz.jpg"
                  alt="Daniel Ayquipa (Investment Research - Portfolios)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Benjamin Sanz</BioName>
                <span className="small text-uppercase text-muted">
                  Head Of IT
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/AsierAranda.jpg"
                  alt="Daniel Ayquipa (Investment Research - Portfolios)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Asier Aranda</BioName>
                <span className="small text-uppercase text-muted">
                  IT Developer
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/JaraGracia.JPEG"
                  alt="Daniel Ayquipa (Investment Research - Portfolios)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Jara García</BioName>
                <span className="small text-uppercase text-muted">
                  Data Analyst
                </span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-transparent rounded shadow-sm py-5 px-4">
                <BioImagen
                  src="/images/meetusimages/JuanCamiloHernandez.jpg"
                  alt="Daniel Ayquipa (Investment Research - Portfolios)"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <BioName className="mb-0">Juan Camilo Hernandez</BioName>
                <span className="small text-uppercase text-muted">
                  Data Analyst
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="contactEeDiv shadow rounded">
          <h1 className="title">Book your Demo</h1>
          <LinkContainer to="/contactus">
            <button className="btn rounded-pill contactBtnEe" type="">
              Get Started
            </button>
          </LinkContainer>
        </div>
    </>
  );
};
export default MeetTheTeamScreen;
