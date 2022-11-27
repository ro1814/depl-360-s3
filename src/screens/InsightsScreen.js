import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/InsightsScreenStyles.css";

const InsightsScreen = () => {
  const firstNewsLink =
    "https://www.linkedin.com/pulse/finding-fair-value-european-small-caps-funds-ace-score-/?trackingId=A3pdvAoOHi3Oeomj%2BNXYhw%3D%3D";
  const secondNewsLink =
    "https://www.linkedin.com/pulse/corporate-actions-update-360-fund-insight/?trackingId=zMLv6NO%2BNBpjNSqKu4RMMQ%3D%3D";
  const thirdNewsLink =
    "https://www.linkedin.com/pulse/fund-corporate-actions-how-do-you-keep-up-all-changes-/?trackingId=%2BwRKYxSbI2f%2F%2FauV5ybYpA%3D%3D";

  return (
    <>
      <div className="firstDivInsight">
        <h1 className="title titleInsight">Insights</h1>
        <p className="firstPInsight">
          We are always looking to provide valuable information to our clients
          and target audience. In this section, you can find the latest news
          about what we have been doing at 360 Fund Insight – ranging from
          analytical reports on specific fund groups, to general updates about
          the company
        </p>
        <div className="insightNewsFeedDiv">
          <div className="insightCardNew rounded shadow insightCardNewBottom">
            <img className="newsImg" src="/images/fair-values-img.jpeg" alt="chart"></img>

            <a className="newsTitle" href={firstNewsLink} target="_blank" rel="noreferrer">
              Finding Fair Value in European Small Caps Funds – ACE Score
              Analysis
            </a>
          </div>
          <div className="insightCardNew rounded shadow insightCardNewBottom">
            <img className="newsImg" src="/images/cactionsupdate-img.jpeg" alt="chart"></img>
            <br />
            <br />
            <a className="newsTitle" href={secondNewsLink} target="_blank" rel="noreferrer">
              Corporate Actions Update.
            </a>
          </div>
          <div className="insightCardNew rounded shadow">
            <img className="newsImg" src="/images/fundcorporate-img.jpeg" alt="chart"></img>
            <a className="newsTitle" href={thirdNewsLink} target="_blank" rel="noreferrer">
              Fund Corporate Actions – How do you keep up with all the changes
              and communication?
            </a>
          </div>
        </div>
        <div className="contactEeDiv shadow rounded">
          <h1 className="title">Book your Demo</h1>
          <LinkContainer to="/contactus">
            <button className="btn rounded-pill contactBtnEe" type="">
              Get Started
            </button>
          </LinkContainer>
        </div>
      </div>
    </>
  );
};
export default InsightsScreen;
