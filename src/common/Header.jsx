import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/service";
import SerciveDetail from "../components/serviceDetail";
import Gallery from "../components/gallery";

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <header class="header">
            <div class="header-top d-none d-lg-block">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <p>Have any question ? +215 2145 2154</p>
                  </div>
                  <div class="col-lg-6  col-md-6">
                    <ul class="socail-top">
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-vimeo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-bottom-area">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-3 col-md-6 col-6">
                    <div class="cuscol">
                      <div class="logo">
                        <a href="index.html">
                          <img src="assets/images/logo/logo.png" alt="logo" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-9 d-none d-lg-block">
                    <div class="menu-area d-flex align-items-center justify-content-end">
                      <nav class="main-menu text-center">
                        <ul>
                          <li class="has-dropdown">
                            <Link to ="/">Home</Link>
            
                          </li>
                          <li>
                            <Link to ="/about">About </Link>
                          </li>
                          <li>
                          <Link to ="/service">Services </Link>
                           
                            <ul class="sub-menu">
                              <li>
                              <Link to ="/servicedetail">Service Details Page </Link>
                                  
                             
                              </li>
                            </ul>
                          </li>
                          <li>
                           <Link to="/gallery">GALLERY</Link>
                          </li>
                          <li>
                            <a href="team.html">TEAM</a>
                          </li>
                          <li>
                            <a href="#">BLOG</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="blog.html">Blog page</a>
                              </li>
                              <li>
                                <a href="blog-details.html">
                                  Blog Details Page
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact-us.html">CONTACT</a>
                          </li>
                        </ul>
                      </nav>
                      <div class="header-btn text-right">
                        <a class="btn-circle btn-transparent btn" href="#">
                          appointment
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="clickable-menu clickable-mainmenu-active d-block d-lg-none  col-md-6 col-6">
                    <a href="#">
                      <i class="zmdi zmdi-menu"></i>
                    </a>
                  </div>
                  <div class="clickable-mainmenu">
                    <div class="clickable-mainmenu-icon">
                      <button class="clickable-mainmenu-close">
                        <span class="zmdi zmdi-close"></span>
                      </button>
                    </div>

                    <div id="menu" class="text-left clickable-menu-style">
                      <ul>
                        <li>
                          <a href="index.html">HOME</a>
                          <ul>
                            <li>
                            <Link to ="/">Home</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                           <Link to ="/about">About </Link>
                        </li>
                        <li>
                           <Link to ="/service">Services </Link>
                          <ul>
                            <li>
                            <Link to ="/servicedetail">Service Details Page </Link>
                                Service Details Page
                           </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/gallery">GALLERY</Link>
                        </li>
                        <li>
                          <a href="team.html">TEAM</a>
                        </li>
                        <li>
                          <a href="#">BLOG</a>
                          <ul>
                            <li>
                              <a href="blog.html">Blog page</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details Page</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div class="mobile-more-info">
                      <p>Have any question ? +215 2145 2154</p>
                      <ul class="socail-top">
                        <li>
                          <a href="#">
                            <i class="zmdi zmdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="zmdi zmdi-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="zmdi zmdi-vimeo"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="zmdi zmdi-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="header-btn text-center">
                      <a class="btn-circle btn-transparent btn" href="#">
                        Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/about">
              <About />
            </Route>
            <Route  path="/service">
              <Service />
            </Route>
            <Route  path="/servicedetail">
              <SerciveDetail />
            </Route>
            <Route  path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
