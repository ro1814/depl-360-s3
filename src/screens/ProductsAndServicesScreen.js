import React from "react";

import { LinkContainer } from "react-router-bootstrap";
import "../styles/ProductsAndServicesScreenStyles.css";

const ProductsAndServicesScreen = () => {
  return (
    <>
      <div className="firstDivPaS">
        <h1 className="title titlePaS">Products and Services: </h1>
        <p className="firstPpAs">
          Wealth Managers and Financial Advisers are obligated to keep track of
          relevant Corporate Actions regarding their client portfolios.
        </p>
        <div className="contentDivPaS rounded shadow">
          <h1 className="titleContentPaS">Data Feed: </h1>
          <p className="pContentPaS">
            360 Fund Insight has built a robust proprietary database and a
            custom governance and analytical tool (FundsFairway™) that underpins
            our research process. We directly receive static and dynamic data
            from almost 400 asset managers. Data goes through our independent
            governance process to ensure the highest levels of accuracy at the
            share class level.
          </p>
        </div>
        <div className="contentBackgroundOne">
          
        <div className="contentDivPaS rounded shadow contentBkEdited">
          <h1 className="titleContentPaS">Eagle Eye:</h1>
          <p className="pContentPaS">
            Our digital fund governance tool to search and filter the cheapest
            most appropriate share class for your business model. Allows for
            efficient governance of fund ranges and buy lists while helping
            reduce the cost of ownership for investors. Proprietary target
            market data empowers Eagle Eye to help prove best execution.
          </p>
        </div>
        <div className="contentDivPaS rounded shadow contentBkEdited">
          <h1 className="titleContentPaS">Corporate Actions:</h1>
          <p className="pContentPaS">
            A digital solution that aggregates corporate actions based on a
            custom fund range and prioritises the corporate actions you wish to
            see in a personalised digital interface. Provides the ability to
            quickly calculate dividends based on the client holdings.
          </p>
        </div>
        </div>

        <div className="contentBackgroundTwo">
          
        <div className="contentDivPaS rounded shadow">
          <h1 className="titleContentPaS">Adjust Cost Efficiency Score (ACE): </h1>
          <p className="pContentPaS">
            A digital solution that aggregates corporate actions based on a
            custom fund range and prioritises the corporate actions you wish to
            see in a personalised calendar. No more sifting through thousands of
            fund corporate actions to find those that are relevant to your fund
            list. Also provides the ability to quickly calculate dividends based
            on the client holdings
          </p>
        </div>
        <div className="contentDivPaS rounded shadow">
          <h1 className="titleContentPaS">Black Litterman Portfolios:</h1>
          <p className="pContentPaS">
            360 Fund Insight assists advisers with asset allocation models. We
            have devised a portfolio optimizer tool combining Black Litterman
            capital asset pricing principles and the Markowitz model to
            calculate optimal weighted portfolios.
          </p>
        </div>
        <div className="contentDivPaS rounded shadow">
          <h1 className="titleContentPaS">Sustainability Reporting: </h1>
          <p className="pContentPaS">
            As ESG is becoming more important to investors – it is essential to
            access well governed sustainability data. We have built a
            well-governed database to accurately access and compare funds ESG
            statistics including SFDR Articles, Sustainability risk scores to
            the long-awaited European ESG Template (EET).
          </p>
        </div>
        <div className="contentDivPaS rounded shadow">
          <h1 className="titleContentPaS">Competitors Analysis:</h1>
          <p className="pContentPaS">
            An interactive module that clearly details the strategic position
            undertaken by each Asset Manager. This powerful tool helps shed a
            light on the complexities of product distribution for both Asset
            Managers and Wealth Managers.
          </p>
        </div>
        <div className="contentDivPaS rounded shadow">
          <h1 className="titleContentPaS">Market Intelligence:</h1>
          <p className="pContentPaS">
            360 Fund Insight has developed a digital solution detailing the
            competitive dynamic of each individual geography – looking into what
            each Asset Manager is most effective at distributing, and who is
            distributing the products in the market.
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

export default ProductsAndServicesScreen;
