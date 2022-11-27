import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faPlus,
  faChartPie,
  faEuroSign,
  faLandmark
} from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

import "../../styles/MarketIntelligenceStyles.css";

const MarketIntelligenceComponent = () => {
  return (
    <>
      <div className="firstDivMi">
        <h1 className="title titleMi">Market Intelligence</h1>
        <p className="firstPMi">
          The Asset Management industry is a highly competitive and finding an
          upper hand can be difficlit. For Asset Managers operating in each
          individual geographic markets, it is an edge to know{" "}
          <u> what types of products are being sold</u>, as well as{" "}
          <u>who is buying them</u>.
        </p>
        <div className="twoCardsDivMi">
          <div className="cardBlOneMi shadow rounded">
            <h1 className="cardTitleMi">
              Learn More about Market Intelligence
            </h1>
            <div className="blPlusBtnMi">
              <a href="#whatismi" className="plusAnkerMi">
                <FontAwesomeIcon icon={faPlus} className="plusIconMi" />
              </a>
            </div>
          </div>

          <div className="cardBlTwoMi shadow rounded">
            <h1 className="cardTitleMi">Scope and Relevant Figures</h1>
            <div className="blPlusBtn2Mi">
              <a href="#relevant" className="plusAnkerMi">
                <FontAwesomeIcon icon={faPlus} className="plusIconMi" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="whatismi" className="secondDivMi">
        <h1 className="title titleMiTwo">What is Market Intelligence?</h1>
        <p className="secondPMi">
          Regliators worldwide have strived to standardise the practice and
          documentation across legal jurisdictions to help simplify the
          distribution of products, increase transparency, and protect final
          investors. Despite these efforts, each geographical market has its own
          quirks and established players, which, from an outside perspective,
          might be hard to determine.
        </p>
        <p className="secondPMi">
          Looking to shed a light in this competitive dynamic, we have developed
          the Market Intelligence modlie, which goes into each individual
          geography and highlights what investors are buying and which Asset
          Managers are being most effective at distributing their products in
          each market.
        </p>
        <p className="secondPMi secondPMiLast">
          Currently, we have a complete snapshot of the Spanish market and are
          working to include all relevant geographies in the European market. By
          gathering and processing data from the regliators, we are able to
          display the complete competitive landscape from an Asset Manager and
          distributor point of view. A powerfli tool such as this can be used to
          better understand the individual markets, and improve competitive
          strategies.
        </p>
      </div>
      <div className="thirdDivMi">
        <h1 className="title thirdTitleMi">Main Components</h1>
        <div className="thirdDivMitwo shadow rounded">
          <div className="thirdDivMiThree">
            <h1 className="subtitleMi">Overview</h1>
            <p className="subPMi">
              The Overview offers the relevant information of the selected
              market and highlights the relevant figures and players allowing
              for a deeper understanding of what the investors are currently
              holding.
            </p>
            <p className="subPMi">
              The market overview displays all of the relevant market
              information, focusing on the top Asset Managers and distributors.
              We also include other relevant information, such as:
            </p>
            <ul className="ulMi">
              <li>Currency breakdown</li>
              <li>AUM Flows</li>
              <li>General Risk Tolerance overview</li>
              <li>Target Market</li>
              <li>Geography</li>
              <li>Top Selling Funds</li>
            </ul>
            <p className="subPMi">
              All of the data is displayed according to the AUM invested in the
              market.
            </p>
          </div>
          <div className="fourthDivMi">
            <img
              className="secondImageMi"
              src="/images/market-intelligence-second.png"
              alt="market intelligence second"
            />
          </div>
        </div>

        <div className="thirdDivMitwo shadow rounded">
          <div className="fourthDivMi">
            <img
              className="thirdImageMi"
              src="/images/market-intelligence-two.png"
              alt="market intelligence second"
            />
          </div>
          <div className="thirdDivMiFourth">
            <h1 className="subtitleMiTwo">Asset Managers</h1>
            <p className="subPMi">
              Further analysis can be made from the Asset Manager perspective,
              breaking down what type of products each distributor is selling in
              the market.
            </p>
            <p className="subPMi">
              This module firstly displays the total AUM that the Asset Manager
              has within the market, as well as the number of funds and holders
              which make up this figure.
            </p>

            <p className="subPMi">
              A further analysis is made, displaying the most representative
              holders for the distributor within the market.
            </p>
            <p className="subPMi">
              Other relevant data that is displayed is the AUM flows, comparing
              the amount to the average flows of competing Asset Managers, as
              well as an Asset Class and Target Market breakdown.
            </p>
            <p className="subPMi">
              The module includes a list of all the funds offered by the Asset
              Manager, with corresponding Cost, Performance, Volatility and ACE
              Scores.
            </p>
            <p className="subPMi">
              All of the data is displayed according to the AUM invested in the
              Asset Manager’s products.
            </p>
          </div>
        </div>

        <div className="thirdDivMitwo shadow rounded">
          <div className="thirdDivMiThree">
            <h1 className="subtitleMi">Holders</h1>
            <p className="subPMi">
              In this component, we apply the same analysis from the distributor
              perspective.
            </p>
            <p className="subPMi">
              In this component, we can clearly identify which Asset Managers
              have larger wallet shares and how diversified (in terms of
              different Asset Managers) the selected holder is.
            </p>
            <p className="subPMi">
              A further breakdown by Asset Class and Target Market is also made,
              and a display of the AUM Flows is also included.
            </p>
            <p className="subPMi">
              All of the data is displayed according to the AUM invested.
            </p>
          </div>
          <div className="fourthDivMi">
            <img
              className="secondImageMi"
              src="/images/market-intelligence-third.png"
              alt="market intelligence second"
            />
          </div>
        </div>
      </div>
      <div id="relevant" className="fifthDivMi">
        <h1 className="title fifthTitle">Scope and Relevant Figures</h1>
        <h1 className="subTitleMiThree">Spanish Universe</h1>

        <div className="KfASLogosDivAce rounded shadow fourthCardB">
          <div className="logosDivOneAce firstCardIconsMi">
            <FontAwesomeIcon icon={faChartBar} className="aMIcon" />
            <h1 className="subtitleKfAS ">200+</h1>
            <p className="paraKfAce">Asset Managers</p>
          </div>
          <div className="logosDivOneAce logosDivTwoAce firstCardIconsMi">
            <FontAwesomeIcon icon={faChartPie} className="aMIcon" />
            <h1 className="subtitleKfAS">2,5+</h1>
            <p className="paraKfAce">Funds</p>
          </div>
          <div className="logosDivOneAce logosDivThreeAce firstCardIconsMi">
            <FontAwesomeIcon icon={faEuroSign} className="aMIcon" />
            <h1 className="subtitleKfAS">120Bn+</h1>
            <p className="paraKfAce">AUM</p>
          </div>
          <div className="logosDivOne logosDivFour">
            <FontAwesomeIcon icon={faLandmark} className="aMIcon" />
            <h1 className="subtitleKfAS">~100</h1>
            <p className="paraKfAce">Holder</p>
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

export default MarketIntelligenceComponent;
