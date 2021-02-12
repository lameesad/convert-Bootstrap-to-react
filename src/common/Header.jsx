import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import SerciveDetail from "../components/ServiceDetail";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import Blog from "../components/Blog";
import BlogDetail from "../components/BlogDetail";
import Contactus from "../components/Contactus";

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
                      <Link to ="/">
                          <img src="assets/images/logo/logo.png" alt="logo" />
                          </Link>
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
                           <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                             <Link to ="/team"> Team </Link>
                          </li>
                          <li>
                          <Link to ="/blog"> Blog </Link>
                            <ul class="sub-menu">
                             
                              <li>
                              <Link to ="/blogdetail"> Blog Detail </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                          <Link to ="/contactus"> Contact Us </Link>
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
                        <Link to ="/">Home</Link>
                    
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
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                        <Link to ="/team"> Team </Link>
                        </li>
                        <li>
                        <Link to ="/blog"> Blog </Link>
                          <ul>
                            <li>
                            <Link to ="/blogdetail"> Blog Detail </Link>
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
            <Route  path="/team">
              <Team />
            </Route>
            <Route  path="/blog">
              <Blog />
            </Route>
            <Route  path="/blogdetail">
              <BlogDetail />
            </Route>
            <Route  path="/contactus">
              <Contactus/>
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
