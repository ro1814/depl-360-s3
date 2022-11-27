import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "../../styles/ValueForMoneyStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faMoneyBill,
  faLeaf,
  faChartBar,
  faSearch,
  faPlus,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";

const ValueForMoneyComponent = () => {
  return (
    <>
      <div className="firstDivAce">
        <h1 className="title titleAce">Adjusted Cost Efficiency - ACE Score</h1>
        <p className="firstPAce">
          360 Fund Insight’s ACE Score Analysis is an objective quantitative
          analysis that falls in line with both ESMA and FCA guidelines when
          assessing Value for Money in funds.
        </p>
        <p className="secondPAce">
          This powerful tool enables Asset Managers to analyse their
          competitiveness; and Financial Advisers to assess the relative returns
          of their client portfolios taking their cost into account
        </p>

        <div className="threeCardsDiv">
          <div className="cardAceOne shadow rounded">
            <h1 className="cardTitleAce cardTitleAceM">
              What is the ACE Score?
            </h1>
            <div className="acePlusBtn">
              <a href="#whatisace" className="acePlusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>

          <div className="cardAceTwo shadow rounded">
            <h1 className="cardTitleAce cardTitleAceM">How it Works</h1>
            <div className="blPlusBtn2 acePlusBtn2">
              <a href="#hIwS" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>

          <div className="cardAceThree shadow rounded">
            <h1 className="cardTitleAce">Key Features and Specifics</h1>
            <div className="blPlusBtn2">
              <a href="#key-features" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="whatisace" className="secondAceDiv">
        <h1 className="title secondTitleAce">What is the ACE Score?</h1>

        <p className="secondAceDivP">
          Most people are eager to know whether their purchases represent good
          value, no matter what the cost – this same logic can be applied to
          investors. A low-cost passive fund may not represent a sensible
          investment when considering the investment returns, just as an
          actively managed fund may not provide the additional value required to
          justify its higher fee structure.
        </p>
        <p className="secondAceDivP">
          Investing in funds is typically a long-term activity, it then makes
          particular sense for investors to care about underlying costs when
          assessing other aspects of their investment, as small changes in these
          fees can greatly affect the overall performance of their investment in
          the long run.
        </p>

        <div className="aceFirstImgDiv">
          <img
            className="aceFirstImg"
            src="/images/ace-first-image.png"
            alt="ace-first"
          ></img>
        </div>

        <p className="secondAceDivP">
          Analysing this specific aspect is somewhat complicated – in general,
          fees vary substantially due to many factors (asset class, risk, target
          market, geography, currency, etc.) and finding what is a reasonable
          cost structure for any given investment can be very complicated. A
          fund’s absolute and relative performance remain in constant flux but
          incorporating Adjusted Cost Efficiency (ACE) enriches the client
          conversation. We can capture the investors the net of charges
          investment experience whether it is delivered through an active or
          passive fund.
        </p>
        <p className="secondAceDivP">
          360 Fund Insight knows that asset managers can add value across the
          active to passive fund management spectrum, and keeping in line with
          the ESMA and FCA guidelines, we have developed the Adjusted Cost
          Efficiency – ACE – Score.
        </p>

        <p className="secondAceDivP">
          ACE takes Cost, ESG, Performance, and Volatility into account when
          analysing a specific fund, and provides an objective quantitative
          comparison to its neighbouring funds. Our research process,
          proprietary data and analytical tools enable 360 Fund In-sight to
          quickly identify a smaller subset of funds that have demonstrated
          value for money by focusing on cost versus performance and avoiding
          any qualitative judgements
        </p>
      </div>

      <div id="hIwS" className="hIwSDiv">
        <h1 className="title">How it works</h1>
        <div className="hIwSDivTwo">
          <div className="hIwSsubDiv">
            <p className="thirdAceP">
              360 Fund Insight conducts ACE analysis by identifying a defined
              peer group for any given fund to accurately compare the reference
              share class of the selected fund to others similar to it. The aim
              of the ACE analysis is to identify which share classes are
              providing value within their peer group. The complete ACE Analysis
              results with a list of the best share classes for the selected
              criteria, taking independent weightings and preferences into
              account.
            </p>
            <p className="thirdAceP">
              The peer group analysis is conducted through the lens of a normal
              distribution, and scores are assigned to each share class within
              it. Our extensive Structural and Operational Risk Analysis
              assesses idiosyncratic risk when selecting a manager, along with
              addressing potential hidden risks in regulated collective
              vehicles. Always analysing these products at the share class
              level, ensuring the best performance available.
            </p>

            <p className="thirdAceP">
              Our tools can be tailored to fit differing investment criteria, as
              not every investor is focused on the same aspects or investment
              targets. Each query can be designed to fit individual weights for
              any of the four ACE components — Cost, Performance, ESG, and
              Volatility — resulting in a more nuanced analysis of the peer
              group.
            </p>
          </div>

          <div className="hIwSDivThree shadow rounded">
            <h1 className="titleAceSubDiv">
              Our ACE analysis revolves around four key aspects:
            </h1>
            <div className="aceKeyAspectsDiv">
              <div className="aceKeyAspectsSubDiv">
                <div className="performanceCard">
                  <p className="perfomanceIcon">
                    <FontAwesomeIcon icon={faChartBar} className="plusIcon" />
                  </p>
                  <p className="keyAspectsP">PERFOMANCE</p>
                </div>
                <div className="esgCard">
                  <p className="esgIcon">
                    <FontAwesomeIcon icon={faLeaf} className="plusIcon" />
                  </p>
                  <p className="esgP">ESG</p>
                </div>
              </div>
              <div className="aceKeyAspectsSubDiv">
                <div className="costCard">
                  <p className="costIcon">
                    <FontAwesomeIcon icon={faMoneyBill} className="plusIcon" />
                  </p>
                  <p className="costP">COST</p>
                </div>
                <div className="volatilityCard">
                  <p className="volatilityIcon">
                    <FontAwesomeIcon icon={faChartLine} className="plusIcon" />
                  </p>
                  <p className="volatilityP">VOLATILITY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="key-features" className="mainKfDiv">
        <h1 className="title">Key Features and Specifics</h1>

        <div className="KfASLogosDivAce rounded shadow">
          <div className="logosDivOneAce">
            <FontAwesomeIcon icon={faChartBar} className="aMIcon" />
            <h1 className="subtitleKfAS ">400+</h1>
            <p className="paraKfAce">Asset Managers</p>
          </div>
          <div className="logosDivOneAce logosDivTwoAce">
            <FontAwesomeIcon icon={faChartPie} className="aMIcon" />
            <h1 className="subtitleKfAS">30K+</h1>
            <p className="paraKfAce">UCITS Funds</p>
          </div>
          <div className="logosDivOneAce logosDivThreeAce">
            <FontAwesomeIcon icon={faListAlt} className="aMIcon" />
            <h1 className="subtitleKfAS">120k+</h1>
            <p className="paraKfAce">Share Classes</p>
          </div>
          <div className="logosDivOne logosDivFour">
            <FontAwesomeIcon icon={faSearch} className="aMIcon" />
            <h1 className="subtitleKfAS">250k+</h1>
            <p className="paraKfAce">Data Points per ISIN</p>
          </div>
        </div>

        <div className="kFsDiv">
          <div className="targetDivOne rounded shadow">
            <h1 className="fPtitle">Target Market Fee Breakdown 30k+ UCITS Funds</h1>
            <p className="fpP">
              Upon identifying a fund to analyse — and its corresponding peer
              group — this simple graph displays the reference fund’s fees
              compared with the average fees of the same peer group. This is
              done at a Target Market level, as defined by the legal fund
              prospectus.
            </p>
            <img className="firstImageAce" src="/images/ACE_Target_Market.png" alt="Ace target market"></img>
          </div>

          <div className="targetDivTwo rounded shadow">
            <h1 className="fPtitle">Fee and Performance Distribution</h1>
            <p className="fpP">These charts display the fees of the peer group, either Management
              Fee or OGC, as well as the performance of the peer group as a
              whole, identifying the average for each share class, and singling
              out the reference share class analysed.
            </p>
            <div className="kFsImages">
            <img className="secondImageAce" src="/images/ACE_Fee_Dist.png" alt="Ace target some market"></img>
            <img className="secondImageAce" src="/images/ACE_Perf_Dist_full.png" alt="Ace target full market"></img>
            </div>
          </div>
        </div>

        <div className="kFsDiv">
          <div className="targetDivOne rounded shadow">
            <h1 className="fPtitle">ESG Evaluation</h1>
            <p className="fpP fdpBtm">
            The ESG Evaluation graph shows the complete scope of funds within this peer group, displaying their ESG Score plotted against their ongoing charge and performance scores. Included in this representation is the SFDR designation of each fund, clearly distinguishing between Articles 6, 8 &#38; 9 of the regulatory text
            </p>
            <img className="firstImageAce" src="/images/ACE_ESG_Eval.png" alt="Ace target market"></img>
          </div>

          <div className="targetDivTwo rounded shadow">
            <h1 className="fPtitle">ACE Graphic</h1>
            <p className="fpP">This Performance v. Cost graph displays which share classes are outperforming their peers and provide ACE. Cheaper classes may not necessarily provide value, as they are underperforming their peers; the analogous can be true for some share classes that are outperforming the mean, but are too expensive to justify their fees
            </p>
            <img className="firstImageAce" src="/images/ACE_Graphic.png" alt="Ace target market"></img>
          </div>
        </div>

        <div className="kFsDiv">
          <div className="targetDivOne rounded shadow">
            <h1 className="fPtitle">Total ACE Score Ranking</h1>
            <p className="fpP">
            The Total Score Ranking displays the reference share class, along with the share classes with the highest total ACE score for the given peer group, displaying each of the component scores (Cost, ESG, Performance, Volatility), in a simple visual representation. The scores displayed reflect the induvial weights assigned to each of the four ACE components, and rank them accordingly, in order to identify the highest ranking share classes within the peer group
            </p>
          </div>

          <div className="targetDivTwo rounded shadow">
            <h1 className="fPtitle">List of Peers</h1>
            <p className="fpP">The List of Peers displays all the share classes contemplated in the analysis, with all the relevant information for each share class included
            </p>
            <p className="fpP">The customisable table includes all the information of each share class that we gather, ranging from currency, ISIN, and other legal information, to the ACE scores generated by our algorithms.
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

export default ValueForMoneyComponent;
