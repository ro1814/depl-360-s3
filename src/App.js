import React from "react";
import "./App.css";
import CookieConsent from "react-cookie-consent";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { HomeScreen } from "./screens/HomeScreen";

import Header from "./components/Header";

import ScrollToTop from "./hooks/ScrollToTopHook";

import ProductsAndServicesScreen from "./screens/ProductsAndServicesScreen";
import InsightsScreen from "./screens/InsightsScreen";
import MeetTheTeamScreen from "./screens/MeetTheTeamScreen";
import LoginRegisterScreen from "./screens/LoginRegisterScreen";
import ContactUsScreen from "./screens/ContactUsScreen";

import DataFeedComponent from "./components/products/DataFeedComponent";
import EagleEyeComponent from "./components/products/EagleEyeComponent";
import CorporateActionsComponent from "./components/products/CorporateActionsComponent";
import ValueForMoneyComponent from "./components/products/ValueForMoneyComponent";

import BlPortafoliosComponent from "./components/products/BlPortafoliosComponent";
import MarketIntelligenceComponent from "./components/products/MarketIntelligenceComponent";

import EsgSfrdReportingComponent from "./components/products/EsgSfrdReportingComponent";
import CompetitiveAnalysisComponent from "./components/products/CompetitiveAnalysisComponent";

function App() {
  const pApPdf = "/Privacy_Policy.pdf";
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <CookieConsent
          style={{ background: "#004E77", textAlign: "center" }}
          buttonStyle={{ background: "#cbeac0", fontWeight: "bolder" }}
          enableDeclineButton={true}
          buttonText="I accept"
          flipButtons={true}
          expires={30}
        >
          This site uses cookies. See our{" "}
          <a
            href={pApPdf}
            target="_blank"
            rel="noreferrer"
            className="linkToDocsCookies"
          >
            privacy policy of 360fundinsight.com.
          </a>{" "}
          for more information.
        </CookieConsent>
        <Route exact path="/" component={HomeScreen} />

        <Route path="/products" component={ProductsAndServicesScreen} />

        {/* Routes for each product chosen from the navbar */}
        <Route path="/product/data-feed" component={DataFeedComponent} />
        <Route path="/product/eagle-eye" component={EagleEyeComponent} />
        <Route
          path="/product/corporate-actions"
          component={CorporateActionsComponent}
        />
        <Route
          path="/product/value-for-money"
          component={ValueForMoneyComponent}
        />
        <Route
          path="/product/market-intelligence"
          component={MarketIntelligenceComponent}
        />
        <Route
          path="/product/bl-portafolios"
          component={BlPortafoliosComponent}
        />
        <Route
          path="/product/esg-sfdr-reporting"
          component={EsgSfrdReportingComponent}
        />
        <Route
          path="/product/competitive-analysis"
          component={CompetitiveAnalysisComponent}
        />

        <Route path="/insights" component={InsightsScreen} />
        <Route path="/meetus" component={MeetTheTeamScreen} />
        <Route path="/contactus" component={ContactUsScreen} />
        <Route path="/login" component={LoginRegisterScreen} />

        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
