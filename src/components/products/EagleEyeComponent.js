import React from "react";
import {} from "../../styles/EeScreenStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import {
  faChartPie,
  faChartBar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

const EagleEyeComponent = () => {
  return (
    <>
      <div className="firstEeDiv">
        <div className="eELogoDiv">
          <img
            className="eElogo shadow rounded"
            src="/images/logos/eagle-eye-1.png"
            alt="Eagle Eye Logo"
          ></img>
        </div>
        <div className="eETextFirstDiv">
          <h1 className="eETitle">
            Under new MiFID II and ESMA guidelines, financial entities within
            the industry must prove BEST EXECUTION.
          </h1>
          <h2 className="eESubtitle">
            Eagle Eye® is our digital fund governance tool to help you assess
            the available share classes of a given fund and select the cheapest
            class appropriate to each client profile
          </h2>
        </div>

        <div className="threeDivQuotes">
          <div className="eEquote shadow rounded">
            <h1 className="quote">Class Leading Data Accuracy</h1>
          </div>

          <div className="eEquote shadow rounded">
            <h1 className="quote">Transparent Costs and Charges</h1>
          </div>

          <div className="eEquote shadow rounded">
            <h1 className="quote">Proprietary Target Market Data</h1>
          </div>
        </div>
        <div className="eETextSecondDiv">
          <p className="firstDivParagraph">
            Eagle Eye® is powered by our proprietary Eagle Eye® database. The
            database is continuously audited and supported by our Data Team
            facilitating compliance in a simple, efficient, and cost-effective
            manner. Proprietary target market data empowers Eagle Eye® to help
            prove best execution.
          </p>
          <p className="firstDivParagraph">
            This class-leading accuracy helps you achieve efficient governance
            of fund ranges and buy lists while helping reduce the cost of
            ownership for investors.
          </p>
        </div>
      </div>
      <div className="secondEeDiv shadow rounded">
        <h1 className="title titleEdit">How does Eagle Eye <p className="rSize"> ®{ " " }</p> { " " } work?</h1>
        <img
          className="eEdataflow"
          src="/images/EE_data_process_flow.svg"
          alt="Eagle Eye data process flow"
        ></img>
        <div className="hEworksDiv">
          <h1 className="hEworkSubTitle">
            CUT DOWN ON CLICKS WITH A SEAMLESS DIGITAL EXPERIENCE
          </h1>
          <ul className="hEworksUl">
            <li className="hEworksIl">
              Search for any fund and easily apply your customised filters for
              jurisdiction, investment size, client type and share class
              characteristics.
            </li>
            <li className="hEworksIl">
              Access all available fund share classes and filter for the
              cheapest most appropriate class to comply with best execution.
            </li>
            <li className="hEworksIl">
              Efficient compliance with our transparent cost and charges date –
              ex-ante costs &amp; charges when selecting products, ex-post
              requirements when reporting
            </li>
          </ul>
        </div>
      </div>

      <div className="fFrictDiv">
        <h1 className="title">Fast and Frictionless</h1>
        <div className="eETextSecondDiv">
          <p className="firstDivParagraph">
            Automatic Best Execution reporting – Upload your client portfolio
            through our user-friendly web interface and view a customised
            best-execution report to assess your current investments and
            recommend alternative classes to ensure compliance.
          </p>
          <p className="firstDivParagraph">
            Access to EMT for investor profile to ensure fund meets client
            investment objectives
          </p>
          <p className="firstDivParagraph">
            Product suitability through EPT data analysis to ensure products are
            aligned with investor’s appropriate risk level.
          </p>
          <div className="videoDiv ">
            <video
              src="/videos/ee-vid.mp4"
              className="eeVid shadow rounded"
              controls={true}
            ></video>
          </div>
        </div>
      </div>
      <div className="keyFiguresDiv">
        <h1 className="title">Key Figures and Features</h1>

        <div className="firstDataDiv">
          <div className="littleDataCards">
            <div className="littleDataCard">
              <div className="aMDataCard">
                <h1 className="dataCardTitle">400+</h1>
                <p className="dataCardP">Asset Managers</p>
              </div>
              <FontAwesomeIcon icon={faChartBar} className="aMicon" />
            </div>

            <div className="littleDataCard">
              <div className="aMDataCard">
                <h1 className="dataCardTitle">30K+</h1>
                <p className="dataCardP">UCITS Funds</p>
              </div>
              <FontAwesomeIcon icon={faChartPie} className="aMicon" />
            </div>
          </div>
          <div className="customCard shadow rounded">
            <h1 className="customCardTitle">CUSTOMISABLE</h1>
            <p className="customCardP">
              Share class analysis for every client type, complying with MIFID
              II regulation based on: Target Market, Business Model, Investment
              Amount.
            </p>
          </div>

          <div className="customCard shadow rounded">
            <h1 className="customCardTitle">CLASS LEADING ACCURACY</h1>
            <p className="customCardP">
              Independently governed static, legal, operation and costs and
              charges data to ensure full compliance with best execution.
            </p>
          </div>
        </div>

        <div className="firstDataDiv">
          <div className="littleDataCards">
            <div className="littleDataCard">
              <div className="aMDataCard">
                <h1 className="dataCardTitle">130K+</h1>
                <p className="dataCardP">Share Classes</p>
              </div>
              <FontAwesomeIcon icon={faListAlt} className="aMicon" />
            </div>

            <div className="littleDataCard">
              <div className="aMDataCard">
                <h1 className="dataCardTitle">250K+</h1>
                <p className="dataCardP">Data per ISIN</p>
              </div>
              <FontAwesomeIcon icon={faSearch} className="aMicon" />
            </div>
          </div>
          <div className="customCard shadow rounded">
            <h1 className="customCardTitle">COMPLETE UNIVERSE</h1>
            <p className="customCardP">
              Proprietary Eagle Eye Database with over 120,000+ ISINs to
              independently assess all available share classes.
            </p>
          </div>

          <div className="customCard shadow rounded">
            <h1 className="customCardTitle">CLASS LEADING ACCURACY</h1>
            <p className="customCardP">
              Enabling compliance with ex-ante costs &amp; charges when
              selecting products, and ex-post requirements when reporting.
            </p>
          </div>
        </div>
      </div>
      <div className="contactEeDiv shadow rounded">
        <h1 className="title">Book your Demo</h1>
        <LinkContainer to="/contactus">
        <button className="btn rounded-pill contactBtnEe" type="">Get Started</button>
        </LinkContainer>
      </div>
    </>
  );
};

export default EagleEyeComponent;
