import React from "react";

import "../styles/NavbarStyles.css";
import { Logo, NavLink } from "../styles/NavbarStyles";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDatabase,
  faChartLine,
  faChartPie,
  faEye,
  faCalendarDay,
  faLeaf,
  faChartBar,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="xl" variant="light">
        <Container className="containerCustomedStyle">
          <Navbar.Brand className="navBarLogoLinkStyle ">
            <LinkContainer to="/">
              <Logo src="/logo-header360.svg" />
            </LinkContainer>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navLinkCustomed "
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navLinkCustomed "
          >
            <Nav className="me-auto navLinkCustomed">
              <NavLink className="navLinkHomeStyle">
                <LinkContainer to="/" className="navLinkCustomed">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </NavLink>

              <NavLink className="navLinkProductsStyle">
                <NavDropdown
                  title="Products"
                  id="collasible-nav-dropdown"
                  className="navLinkCustomed"
                >
                  <div>
                    <div className="dataCard">
                      <LinkContainer to="/product/data-feed">
                        <NavDropdown.Item>
                          <FontAwesomeIcon
                            icon={faDatabase}
                            className="dbIcon"
                          />{" "}
                          <label className="labelStyle"> Data Feed </label>
                          <p className="productDescription">
                            {" "}
                            Governed proprietary database
                          </p>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </div>

                    <div className="dataCard">
                      <LinkContainer to="/product/value-for-money">
                        <NavDropdown.Item>
                          <FontAwesomeIcon
                            icon={faChartLine}
                            className="vfmIcon"
                          />{" "}
                          <label className="labelStyle">ACE</label>
                          <p className="productDescription">
                            {" "}
                            Value for Money Fund Analysis
                          </p>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </div>

                    <div className="dataCard">
                      <LinkContainer to="/product/bl-portafolios">
                        <NavDropdown.Item>
                          <FontAwesomeIcon
                            icon={faChartPie}
                            className="blpIcon"
                          />{" "}
                          <label className="labelStyle">BL portfolios</label>
                          <p className="productDescription">
                            {" "}
                            Optimised Asset Allocation
                          </p>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </div>

                    <div className="dataCard">
                      <LinkContainer to="/product/market-intelligence">
                        <NavDropdown.Item>
                          <FontAwesomeIcon
                            icon={faLightbulb}
                            className="miIcon"
                          />{" "}
                          <label className="labelStyle">
                            Market Intelligence
                          </label>
                          <p className="productDescription">
                            {" "}
                            Regional Fund Flow Data
                          </p>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </div>
                  </div>

                  <div>
                    <div className="dataCard">
                      <LinkContainer to="/product/eagle-eye">
                        <NavDropdown.Item>
                          <FontAwesomeIcon icon={faEye} className="eeIcon" />{" "}
                          <label className="labelStyle">Eagle Eye</label>
                          <p className="productDescription">
                            {" "}
                            Guide to best execution
                          </p>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </div>

                    <div className="dataCard">
                      <LinkContainer to="/product/corporate-actions">
                        <NavDropdown.Item>
                          <FontAwesomeIcon
                            icon={faCalendarDay}
                            className="caIcon"
                          />{" "}
                          <label className="labelStyle">
                            Corporate Actions
                          </label>
                          <p className="productDescription">
                            {" "}
                            Personalised fund corporate
                          </p>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </div>

                    {/* <div className="dataCard">
                    <LinkContainer to="/product/black-litterman">
                      <NavDropdown.Item>Black Litterman</NavDropdown.Item>
                    </LinkContainer>
                  </div> */}
                    <div className="col">
                      <div className="dataCard">
                        <LinkContainer to="/product/esg-sfdr-reporting">
                          <NavDropdown.Item>
                            <FontAwesomeIcon
                              icon={faLeaf}
                              className="esrIcon"
                            />{" "}
                            <label className="labelStyle">
                              ESG - SFDR Reporting
                            </label>
                            <p className="productDescription">
                              {" "}
                              Robust Fund Sustainability Data
                            </p>
                          </NavDropdown.Item>
                        </LinkContainer>
                      </div>

                      <div className="dataCard">
                        <LinkContainer to="/product/competitive-analysis">
                          <NavDropdown.Item>
                            <FontAwesomeIcon
                              icon={faChartBar}
                              className="canIcon"
                            />{" "}
                            <label className="labelStyle">
                              Competitive Analysis
                            </label>
                            <p className="productDescription">Competitiveness of your fund range</p>
                          </NavDropdown.Item>
                        </LinkContainer>
                      </div>

                      
                    </div>
                    <div className="seeAll">
                        <LinkContainer to="/products" className="seeAllLink">
                          <NavDropdown.Item>
                            <p className="labelStyleSeeAll">
                              see all {""}
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="seeAllIcon"
                              />
                            </p>
                          </NavDropdown.Item>
                        </LinkContainer>
                      </div>
                  </div>
                </NavDropdown>
              </NavLink>

              <NavLink className="navLinkInsightsStyle">
                <LinkContainer to="/insights" className="navLinkCustomed">
                  <Nav.Link>Insights</Nav.Link>
                </LinkContainer>
              </NavLink>
              <NavLink className="navLinkMeetStyle">
                <LinkContainer to="/meetus" className="navLinkCustomed">
                  <Nav.Link>Meet the Team</Nav.Link>
                </LinkContainer>
              </NavLink>
              <NavLink className="navLinkLoginStyle">
                <LinkContainer to="/login" className="navLinkCustomed">
                  <Nav.Link>Register/Login</Nav.Link>
                </LinkContainer>
              </NavLink>

              <NavLink className="navLinkContactStyle">
                <LinkContainer
                  to="/contactus"
                  className="badge rounded-pill navLinkCustomedContact"
                >
                  <Nav.Link>
                    Get in touch{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowRightStyle"
                    />
                  </Nav.Link>
                </LinkContainer>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
