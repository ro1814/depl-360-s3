import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";

import {
  faChartBar,
  faSearch,
  faPlus,
  faChartPie,
  faLeaf,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/DataFeedStyles.css";

const DataFeedComponent = () => {
  return (
    <>
      <div className="firstDivDf">
        <h1 className="title titleDf">360 Data Feed</h1>
        <p className="firstPDf">
          A reliable solution for high quality fund data at your disposal –
          adaptable to individual needs with market leading accuracy.
        </p>
        <p className="firstPDf secondPDf">
          Our data-driven solutions, combined with state-of-the-art digital
          services can greatly improve your business profitability, reduce
          regulatory risk, and lead to better expected results for final
          investors. 360 Data Feed
        </p>
        <div className="twoCardsDivDf">
          <div className="cardBlOneDf shadow rounded">
            <h1 className="cardTitle">Certifying Data Quality</h1>
            <div className="blPlusBtn">
              <a href="#certifying-data" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>

          <div className="cardBlTwoDf shadow rounded">
            <h1 className="cardTitle">Tailored to Client Needs</h1>
            <div className="blPlusBtn2">
              <a href="#bespoke" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="certifying-data" className="secondDivDf">
        <h1 className="title">Certifying Highest Quality – Our Process</h1>
        <p className="thirdPDf">
          We tirelessly work to deliver market leading accuracy to our clients
          with our robust data gathering, processing, and auditing practices.
          All of the data delivered to our clients has undergone a rigorous
          cleansing process.
        </p>
        <div className="firstDivImgDf">
          <img
            className="firstImgDf"
            src="/images/process-data-feed.png"
            alt="data-feed"
          ></img>
        </div>
        <p className="thirdPDf">
          With this aim in mind, we have set robust processes that ensure our
          database contains the cleanest data available, sourcing the data from
          various providers, and continually auditing the veracity of the data
          fed into the database. All of our solutions rely on this thorough
          process:
        </p>
        <div className="firstDivImgDf">
          <img
            className="firstImgDf"
            src="/images/pocess-two-data-feed.png"
            alt="data-feed"
          ></img>
        </div>
      </div>

      <div id="bespoke" className="thirdDivDf">
        <h1 className="title">Bespoke Solutions for Different Client Needs</h1>

        <div className="besPokeDiv rounded shadow fourthCardDf">
          <div className="logosDivOneDf firstCardIconsMi">
            <FontAwesomeIcon icon={faChartBar} className="aMIcon" />
            <h1 className="subtitleBesPoke ">400+</h1>
            <p className="paraKfDf ">Asset Managers</p>
          </div>
          <div className="logosDivOneDf logosDivTwoDf firstCardIconsMi">
            <FontAwesomeIcon icon={faChartPie} className="aMIcon" />
            <h1 className="subtitleBesPoke">30K+</h1>
            <p className="paraKfDf">UCITS Funds</p>
          </div>
          <div className="logosDivOneDf logosDivThreeDf firstCardIconsMi">
            <FontAwesomeIcon icon={faListAlt} className="aMIcon" />
            <h1 className="subtitleBesPoke">120K+</h1>
            <p className="paraKfDf">Share Classes</p>
          </div>
          <div className="logosDivOneDf logosDivFourDf">
            <FontAwesomeIcon icon={faSearch} className="aMIcon" />
            <h1 className="subtitleBesPoke">250K</h1>
            <p className="paraKfDf">Data Points per ISIN</p>
          </div>
          <div className="logosDivOneDf logosDivFour">
            <FontAwesomeIcon icon={faLeaf} className="aMIcon" />
            <h1 className="subtitleBesPoke">250K</h1>
            <p className="paraKfDf">ISINs with SFDR data</p>
          </div>
        </div>

        <div className="subDivDf">
          <div className="subDivOneDf shadow rounded">
            <img
              src="/images/data-accuracy.png"
              alt="data-feed"
              className="dfFirstImg"
            />
          </div>
          <div className="subDivTwoDf shadow rounded">
            <p className="subPdivTwoDf">
              Ascribing to the belief that the quality of the service supersedes
              the raw amount of data fed into any system, we assiduously work to
              deliver only the highest data quality to our clients. Yet, our
              scope and reach increases at a steady pace, always retaining our
              high quality standards.
            </p>
            <p className="subPdivTwoDf">
              Understanding that each client has different needs and scopes – we
              can tailor our solution to the particular universe that each
              client works with. Any solution we deliver can adapt to your
              needs.
            </p>
            <p className="subPdivTwoDf">
              Our state-of-the-art capabilities enable us to deliver tailored
              solutions for every client.
            </p>
          </div>
        </div>
        <div className="fourthDivDf">
          <div className="fourthSubDivDf shadow rounded">
            <p className="subPdivThreeDf">
              Any custom solution we offer is deliverable to our clients in a
              compatible format of their choosing:
            </p>
            <ul>
              <li className="subPdivThreeDf">Periodical File Transfer</li>
              <li className="subPdivThreeDf">API Connectivity (json, xml, csv, binaries, ...)</li>
              <li className="subPdivThreeDf">Secure Connections (SSH, SFTP)</li>
              <li className="subPdivThreeDf">Tailored Solution</li>
            </ul>
            <p className="subPdivThreeDf">
              By using a distributed microservices architecture, we can deliver
              robust and consistent results for our clients when accessing data
              from our databases.
            </p>
            <p className="subPdivThreeDf">
              This multi-layered architecture provides the necessary flexibility
              when incorporating new services in line with client requirements.
              This architecture is highly scalable and fault tolerant ensuring
              consistent high-quality service even at extraordinary traffic
              levels.
            </p>
          </div>

          <div className="lastDivDf"> <img src="/images/data-architecture.png" alt="data-architecture" className="lastImgDf"/></div>
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

export default DataFeedComponent;
