import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";


import "../../styles/BlScreenStyles.css";
const BlPortafoliosComponent = () => {
  return (
    <>
      <div className="firstDivBl">
        <h1 className="title titleBL">
          Black-Litterman Model Portfolio Generation
        </h1>
        <p className="firstP">
          Using our cutting edge portfolio generation tool, Advisers and Wealth
          Managers can improve their value proposition for end investors – see
          how:
        </p>
        <div className="twoCardsDiv">
          <div className="cardBlOne shadow rounded">
            <h1 className="cardTitle">
              Black-Litterman Model: Going further than MPT
            </h1>
            <div className="blPlusBtn">
            <a href="#mpt" className="plusAnker">
              <FontAwesomeIcon icon={faPlus} className="plusIcon" />
            </a>
            </div>
            
          </div>

          <div className="cardBlTwo shadow rounded">
            <h1 className="cardTitle">How our Asset Allocation model works</h1>
            <div className="blPlusBtn2">
            <a href="#model" className="plusAnker">
              <FontAwesomeIcon icon={faPlus} className="plusIcon" />
            </a>
          </div>

          </div>
        </div>
      </div>

      <div id="mpt" className="mptMainDiv">
        <h1 className="title titleMpt ">Going further than MPT</h1>
        <div className="mptDiv">
          <div className="mptDivOne">
            <h1 className="mptSubtitle">
              THE CLASSIC BLACK-LITTERMAN ASSET ALLOCATION MODEL
            </h1>
            <p className="mptParagraph">
              Our portfolio generation model is based upon the Black-Litterman
              model, which, in turn, is built upon the classic Markowitz model,
              and takes it one step further:
              <br />
              <br />
              Starting point (MPT) – Market Equilibrium returns, considering
              historical returns, level of risk aversion, and the historical
              correlation between the assets of a given portfolio
              <br />
              <br />
              Incorporating individual expectations about assets, along with
              their corresponding degree of certainty. The inclusion of
              expectations deepens the analysis, especially when the source of
              the expectations is reliable. This contrasts with traditional MPT
              which simply takes historical returns for the portfolio assets
              <br />
              <br />
              The revised portfolio’s asset allocation faithfully reflects the
              subjective views and their degree of certainty, resulting in a
              more nuance, forward- looking position for clients Home
            </p>
          </div>
          <img className="firstImgMptb"src="/images/blm-first-img.png" alt="mptFirst"></img>
        </div>
      </div>

      <div id="model" className="mptSecondDiv">
        <div className="mptTitlePDiv">
          <h1 className="title SecondTitleMpt">
            How our Asset Allocation model works
          </h1>
          <p className="mptSecondP">
            When designing our Asset Allocation model, we decided to incorporate
            even more feature to a Classic Black- Litterman Model. Our model
            allows for more flexibility, by incorporating various view
            providers, as well as Risk On/Off providers. Going even further, we
            understand and embrace the increasing importance of sustainable
            investment, and have incorporated a customisable ESG pondering
            layer, that facilitates a more faithful reflection of investor
            preferences when determining the final asset allocation of client
            portfolios.
          </p>
        </div>

        <div className="fourMptDiv">
          <div className="firstTwoRiskDiv">
            <div className="riskPDiv">
              <h1 className="mptSubtitleH">Risk Profiling &amp; Benchmark</h1>
              <p className="mptParagraphH">
                Investor risk profile determination, indicating the combination
                of Global Equity and Global EUR Fixed Income, and setting a
                Composite Benchmark Index with the combination of 2 global
                indices
              </p>
            </div>

            <div className="viewSDiv">
              <h1 className="mptViewSubtitleH">View Selection</h1>
              <p className="mptParagraphH">
                Provider selection for the market views regarding the
                portfolio’s building blocks: asset class, style, geography,
                performance (relative or absolute), etc.
              </p>
            </div>
          </div>

          <div className="SecondTwoRiskDiv">
            <div className="bBDiv">
              <h1 className="mptbBSubtitleH">Building Blocks</h1>
              <p className="mptParagraphH">
                Asset class selection, or investment categories to be included
                in our final portfolios. These will be the fundamental building
                blocks, and an upper bound of exposure to each block is set
              </p>
            </div>

            <div className="riskODiv">
              <h1 className="riskOSubtitleH">Risk On/Off</h1>
              <p className="mptParagraphH">
                Algorithm that computes hundreds of economic indicators and
                market data to analyse volatility and overall risk appetite that
                helps to increase/decrease confidence on the selected views and
                calculating optimal allocations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mptbOverview shadow rounded">
        <h1 className="title tittleOverview">Overview</h1>
      <img className="secondImgMptb" src="/images/blm-second-img.png" alt="mptFirst"></img>
        
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

export default BlPortafoliosComponent;
