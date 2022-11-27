import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import {
  faChartBar,
  faSearch,
  faPlus,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import "../../styles/CompetitiveAnalysisStyles.css";

const CompetitiveAnalysisComponent = () => {
  return (
    <>
      <div className="firstDivCan">
        <h1 className="title titleCan">Competitor Analysis</h1>
        <p className="firstPCan">
          Distributing complex products across many geographies can become an
          arduous undertaking for Asset Managers, as such, each player in the
          industry is positioned uniquely. To get a clearer picture as to where
          each competitor stands, we have developed a powerful interactive
          module that details the competitive strategy each Asset Manager has.
        </p>
        <div className="cadDivCan">
          <div className="cardCanOne shadow rounded">
            <h1 className="cardTitleAce cardTitleAceM">
              Learn more about Competitor Analysis
            </h1>
            <div className="acePlusBtn">
              <a href="#learn-more" className="acePlusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>
        </div>
        <p className="secondPCan">
          This powerful tool can be extremely useful for both Asset Managers –
          when assessing the competitiveness of their products – and Wealth
          Managers – when selecting providers and building client portfolios.
        </p>
      </div>
      <div id="learn-more" className="secondCanDiv">
        <h1 className="title secondTitleCan">
          Providing clarity in a complex landscape
        </h1>
        <p className="secondCanDivP">
          Asset Managers position themselves in unique strategic positions which
          may become difficult to ascertain from an outside perspective. When
          positioning a specific share class, Asset Managers must take a variety
          of factors into account to determine the underlying cost structure for
          each product. This intricate process, combined with the highly
          competitive nature of the industry has resulted in great variety when
          looking at the different products that any single Asset Manager
          offers.
        </p>
        <div className="canFirstImgDiv ">
          <img
            className="canFirstImg shadow rounded"
            src="/images/Competitor_Analysis_Screen.png"
            alt="ace-first"
          ></img>
        </div>
        <p className="secondCanDivP">
          Asset Managers may offer products with excellent returns and a
          competitive cost structure – resulting in competitive Adjusted Cost
          Efficiency (ACE) Scores for these funds. However, the same Asset
          Manager may offer other products where this combination does not hold
          true.
        </p>
        <p className="secondCanDivP">
          In this highly competitive market, it is very unlikely that any single
          house provides the best products across every Asset Class, but this
          dynamic allows for specific managers to thrive in distinct niches.
          Elevated cost structures may be justified by even higher returns and
          identifying which Asset Managers provide the best products in each
          Asset Class can become a formidable task. Identifying the best funds –
          and the optimal share class within these – is the ultimate goal of our
          analysis.
        </p>
        <p className="secondCanDivP">
          Looking to offer some clarity in this incredibly complex competitive
          landscape, we have developed a powerful interactive module that
          provides a clear look at each Asset Manager contained within our
          extensive universe.
        </p>
      </div>
      <div >
        <h1 className="title titleFourCards">Components</h1>

        <div className="subDivCan rounded shadow">
          <div className="subDivOneCan ">
            <h1 className="subTitleCan">Asset Class Fees</h1>
            <p className="subPCan">
              Upon identifying an Asset Manager from the drop down menu, the
              module displays the average fee (OGC or Management Fee) for all
              the products in the market, and how they fare against the selected
              manager’s products.
            </p>
          </div>
          <div className="canSecondImgDiv">
            <img
              className="canSecondImg"
              src="/images/Asset_Class.png"
              alt="can-second"
            ></img>
          </div>
        </div>

        <div className="subDivCan rounded shadow oppositeDivCan">
          <div className="canSecondImgDiv">
            <img
              className="canSecondImg"
              src="/images/Tgt_Mkt.png"
              alt="can-second"
            ></img>
          </div>
          <div className="subDivOneCan subTitleCanOp ">
            <h1 className="subTitleCan">Average Fees by Target Market</h1>
            <p className="subPCan">
              Having selected the Asset Class, a further breakdown by Target
              Market displays how the Asset Manager’s products compare with the
              average fee structure at Retail, Professional, ETF and Eligible
              Counterparty levels.
            </p>
          </div>
        </div>

        <div className="subDivCan rounded shadow">
          <div className="subDivOneCan ">
            <h1 className="subTitleCan">Fee Distribution</h1>
            <p className="subPCan">
              A further Fee breakdown is also displayed, with a histogram
              detailing the fees in greater detail, allowing for a deeper
              analysis of the strategic position each Asset Manager has employed
              in the selected Asset Class.
            </p>
          </div>
          <div className="canSecondImgDiv">
            <img
              className="canSecondImg"
              src="/images/Fee_Dist.png"
              alt="can-second"
            ></img>
          </div>
        </div>

        <div className="subDivCan rounded shadow oppositeDivCan">
          <div className="canSecondImgDiv">
            <img
              className="canSecondImg"
              src="/images/Tgt_Mkt.png"
              alt="can-second"
            ></img>
          </div>
          <div className="subDivOneCan ">
            <h1 className="subTitleCan subTitleCanOp subTitleMbottom">ACE Score Graphic</h1>
            <p className="subPCan">
              The complete competitive landscape of the Asset Class selected is
              displayed in the ACE Score graphic. This interactive snapshot of
              the Asset Class displays the share classes arranged by their
              relative position in terms of performance v cost. This powerful
              visual tool can be used to effortlessly identify which share
              classes are overperforming the mean and have a reasonable cost
              structure – not just one or the other.
            </p>
          </div>
        </div>
      </div>

      <div className="specDiv">
        <h1 className="title spectTitle">Specifics</h1>

        <div className="KfASLogosDivAce rounded shadow KfASLogosDivCan">
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

        <div className="contactEeDiv shadow rounded contactCanDiv">
        <h1 className="title ">Book your Demo</h1>
        <LinkContainer to="/contactus">
        <button className="btn rounded-pill contactBtnEe" type="">Get Started</button>
        </LinkContainer>
      </div>
      </div>
    </>
  );
};

export default CompetitiveAnalysisComponent;
