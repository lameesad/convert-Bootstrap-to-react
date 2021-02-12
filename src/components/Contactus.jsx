import React, { Component } from "react";

class Contactus extends Component {
  render() {
    return (
    <div>
        <div class="breadcrumb-area bg-image section-ptb" 
        style={{
            backgroundImage: "url(" + "assets/images/bg/breadcrumb-bg.jpg" + ")",
          }}>
    <div class="container">
        <div class="row breadcrumb">
            <div class="col">
                <h2>Contact Us</h2>
             
                <ul class="breadcrumb-list">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Contact Us</li>
                </ul>
          
            </div>
        </div>
    </div>
</div>

<main class="page-content">
    

    <div class="google-map">
         <div id="googleMap-2" class="embed-responsive-item contact-map" data-lat="40.712776" data-Long="-74.005974"></div>
    </div>
  
    
    <div class="contact-form-area">
        <div class="container">
            <div class="row align-items-center">
                
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="form_wrapper form-style-1">
                        <div class="contact-title">
                           <div class="title-3">
                               <h3>Get In Touch</h3>
                           </div>
                        </div>
                        <div class="form-inner-box-warp">
                           
                            <form id="contact-form" action="assets/php/mail.php"> 
                                <div class="row">
                                    <div class="col-lg-12 mb-30">
                                        <input name="con_name" type="text" placeholder="Name*"/>
                                    </div>
                                    <div class="col-lg-12  mb-30">
                                        <input name="con_email" type="email" placeholder="Email*"/>
                                    </div>
                                    <div class="col-lg-12  mb-30">
                                        <input name="con_subject" type="text" placeholder="Subject*"/>
                                    </div>
                                    <div class="col-lg-12  mb-30">
                                        <textarea name="con_message"  placeholder="Your Message*"></textarea>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="submit" class="submit-btn default-btn">Send</button>
                                        <p class="form-messege"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-5 offset-lg-1 col-md-6">
                    <div class="contact-info-wrapper">
                        <div class="contact-title">
                           <div class="title-3">
                               <h3>Contact Us</h3>
                           </div>
                        </div>
                        
                        <div class="contact-info">
                        <ul>
                            <li>
                                <div class="contact-text d-flex align-items-center">
                                    <i class="fa fa-phone"></i> 
                                    <p>
                                        <a href="#">+012 345 678 102</a>
                                        <a href="#">+012 345 678 102</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="contact-text d-flex align-items-center">
                                    <i class="fa fa-globe"></i> 
                                    <p>
                                        <a href="#"> urname@email.com</a>
                                        <a href="#"> urwebsite@name.com</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="contact-text d-flex align-items-center">
                                    <i class="fa fa-map-marker"></i>
                                    <p>
                                        Address goes here, <br/>street, Crossroad 123.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    
</main>
    </div>
    );
  }
}

export default Contactus;
