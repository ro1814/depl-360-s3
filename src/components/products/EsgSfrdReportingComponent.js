import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {} from "../../styles/EsgSfrdReportingStyles.css";

const EsgSfrdReportingComponent = () => {
  return (
    <>
      <div className="firstDivEsg">
        <h1 className="title titleEsg">ESG – SFDR Reporting</h1>
        <p className="esgP">
          The demand for transparency on sustainable and socially responsible
          practices is on the rise. Environmental, Social and Governance (ESG)
          analysis and reporting can provide valuable insights and help create
          long-term value for stakeholders. It can significantly impact the
          financial metrics of a company and better inform investment decisions.
        </p>
        <p className="esgP esgPTwo">
          Build sustainability into your investment strategy with our
          comprehensive ESG fund data. As regulations and disclosures are
          rapidly changing in this area, we offer transparent and comprehensive
          data governance solutions for analysis at fund level and aggregated
          portfolio level.
        </p>
      </div>

      <div className="container">
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time">November 2021</div>
            <div className="timeline-content timeline-dot-green timeline-background-green">
              <p className="timeline-content-p">
                UK SUSTAINABILITY REGIME: FCA PROPOSALS FOR SUSTAINABILITY
                DISCLOSURE REQUIREMENTS AND INVESTMENT PRODUCT LABELS
              </p>
              <p className="timeline-content-p">
                UK Sustainability Regime: FCA published <a href="/sustainability-disclousure-21-4.pdf" target="_blank" rel="noreferrer" className="aEsg"> discussion paper
                (DP21/4)</a> on Sustainability Disclosure Requirements and
                investment product labels.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">January 2022</div>
            <div className="timeline-content timeline-dot-blue timeline-background-blue">
              <h1 className="subTitle">SFDR</h1>
              <p className="timeline-content-p">
                Disclosure Regulation (EU) 2019/2088 – Key applicable dates for
                sustainability-related disclosures in the financial sector
                ("SFDR"): <br /> -Periodic disclosure reporting requirements
                begin to apply.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">January 2022</div>
            <div className="timeline-content timeline-dot-green timeline-background-green">
              <p className="timeline-content-p">
                EU Taxonomy Regulation reporting requirements on climate change
                mitigation and adaption to apply; additional reporting may apply
                for Arts 8 or 9 SFDR products
              </p>
              <p className="timeline-content-p">
                EU Taxonomy Regulation – applicable date for the establishment
                of a framework to facilitate sustainable investment: delegated
                acts on climate change mitigation and adaption to apply.
                Additional reporting requirements may apply for Art 8 or 9 SFDR
                products.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">January 2022</div>
            <div className="timeline-content timeline-dot-blue timeline-background-blue">
              <p className="timeline-content-p">
                UK TCFD disclosure requirements in force for larger asset
                managers and asset owners
              </p>
              <p className="timeline-content-p">
                In scope: Largest UK-authorised asset managers and asset owners.
              </p>
              <p className="timeline-content-p">
                Qualifying condition: Balance sheet or assets: Asset managers
                with AuM &gt;£50bn; Asset owners with in- scope assets of £25bn
                or more.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">2022</div>
            <div className="timeline-content timeline-dot-green timeline-background-green">
              <h1 className="subTitle">EUROPEAN ESG TEMPLATE</h1>

              <p className="timeline-content-p">
                The European ESG Template (EET) is a report issued by FinDatEx
                that serves distributors and intermediaries to comply with their
                own requirements under SFDR and MiFID II (sustainability
                preferences of the end client). It also allows manufacturers to
                meet their reporting requirements under SFDR at product and
                entity level (PAIs) when they use underlying funds or financial
                products.
              </p>
              <p className="timeline-content-p">
                The report began to be used in June 2022 and will be adapted as
                the SFDR requirements come into force according to schedule, in
                a way that more datapoints will be considered as mandatory to be
                fulfilled.
              </p>
              <p className="timeline-content-p">
                While SDFR Level 2 requirements have been postponed to January
                2023, the use of a light version of the EET is needed to provide
                data to consider sustainability preferences as per MiFID II as
                of August 2022:
              </p>
              <ol type="i" className="romainList">
                <li>Minimum % of Taxonomy alignment</li>
                <li>Minimum % sustainable investment</li>
                <li>PAI consideration.</li>
              </ol>
            </div>
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

export default EsgSfrdReportingComponent;
