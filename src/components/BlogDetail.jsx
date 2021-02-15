import React, { Component } from "react";

class BlogDetail extends Component {
  render() {
    return (
      <div>
        <div
          class="breadcrumb-area bg-image section-ptb"
          style={{
            backgroundImage:
              "url(" + "assets/images/bg/breadcrumb-bg.jpg" + ")",
          }}
        >
          <div class="container">
            <div class="row breadcrumb">
              <div class="col">
                <h2>Blog Details</h2>

                <ul class="breadcrumb-list">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <main class="page-content">
          <div class="content-wraper section-pb section-pt-90">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 order-2 order-lg-2">
                  <div class="blog-widget-wrap">
                    <div class="blog-widget mt-30">
                      <h5 class="title">Search</h5>
                      <div class="search-post">
                        <form action="#" class="search-blog">
                          <input type="text" placeholder="Enter Keywords..." />
                          <button class=" btn-search" type="submit">
                            <i class="fa fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>

                    <div class="blog-widget mt-30">
                      <h5 class="title">Categories</h5>
                      <ul>
                        <li>
                          <a href="blog-details.html">
                            Private Security <span>(18)</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Webcam Security <span>(16)</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Motivated Guards <span>(6)</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Self Guards <span>(11)</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="widget-blog blog-widget mt-30">
                      <h5 class="title">Recent POST</h5>

                      <div class="widget-blog-inner">
                        <div class="widget-blog-image">
                          <a href="product-details.html">
                            <img
                              src="assets/images/blog/blog-side-01.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="widget-blog-content text-left">
                          <h6>
                            <a href="blog-details.html">Private Security </a>
                          </h6>
                          <span>1 hour ago</span>
                        </div>
                      </div>

                      <div class="widget-blog-inner">
                        <div class="widget-blog-image">
                          <a href="blog-details.html">
                            <img
                              src="assets/images/blog/blog-side-01.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="widget-blog-content text-left">
                          <h6>
                            <a href="blog-details.html">Webcam Security </a>
                          </h6>
                          <span>1 hour ago</span>
                        </div>
                      </div>

                      <div class="widget-blog-inner">
                        <div class="widget-blog-image">
                          <a href="blog-details.html">
                            <img
                              src="assets/images/blog/blog-side-01.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="widget-blog-content text-left">
                          <h6>
                            <a href="blog-details.html">Motivated Guards</a>
                          </h6>
                          <span>1 hour ago</span>
                        </div>
                      </div>
                    </div>

                    <div class="blog-widget mt-30">
                      <h5 class="title">Archives</h5>
                      <ul>
                        <li>
                          <a href="blog-details.html">
                            December <span>(11)</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            October <span>(13)</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            August <span>(6)</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            January <span>(51)</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="blog-widget mt-30">
                      <h5 class="title">Hot Tags</h5>
                      <div class="widget-tag sidebar-tag">
                        <a href="#">Women</a>
                        <a href="#">Bags</a>
                        <a href="#">Man</a>
                        <a href="#">Hot</a>
                        <a href="#">fashion</a>
                        <a href="#">digital</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-9 order-1 order-lg-1">
                  <div class="blog-details-wrapper mt-30">
                    <div class="blog-details-image">
                      <img src="assets/images/blog/blog-details.jpg" alt="" />
                    </div>
                    <div class="postinfo-wrapper">
                      <div class="post-info">
                        <div class="meta-body">
                          <ul class="d-flex">
                            <li>
                              By: <a href="#">Mark Hari</a>
                            </li>
                            <li>10-09-2018</li>
                          </ul>
                        </div>
                        <h3>Webcam Security</h3>
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Cras pretium arcu ex. Aenean posuere libero eu augue
                          condimentum rhoncus. Praesent ornare tortor ac ante
                          egestas hendrerit. Aliquam et metus pharetra, bibendum
                          massa nec, fermentum odio. Nunc id leo ultrices,
                          mollis ligula in, finibus tortor. Mauris eu dui ut
                          lectus fermentum eleifend. Pellentesque faucibus sem
                          ante, non malesuada odio varius nec. Suspendisse
                          potenti.{" "}
                        </p>
                        <blockquote class="blockquote-inner">
                          <p>
                            Quisque semper nunc vitae erat pellentesque, ac
                            placerat arcu consectetur. In venenatis elit ac
                            ultrices convallis. Duis est nisi, tincidunt ac urna
                            sed, cursus blandit lectus. In ullamcorper sit amet
                            ligula ut eleifend. Proin dictum tempor ligula, ac
                            feugiat metus. Sed finibus tortor eu scelerisque
                            scelerisque.
                          </p>
                        </blockquote>
                        <p>
                          Aenean et tempor eros, vitae sollicitudin velit. Etiam
                          varius enim nec quam tempor, sed efficitur ex
                          ultrices. Phasellus pretium est vel dui vestibulum
                          condimentum. Aenean nec suscipit nibh. Phasellus nec
                          lacus id arcu facilisis elementum. Curabitur lobortis,
                          elit ut elementum congue, erat ex bibendum odio, nec
                          iaculis lacus sem non lorem. Duis suscipit metus ante,
                          sed convallis quam posuere quis. Ut tincidunt eleifend
                          odio, ac fringilla mi vehicula nec. Nunc vitae lacus
                          eget lectus imperdiet tempus sed in dui. Nam molestie
                          magna at risus consectetur, placerat suscipit justo
                          dignissim. Sed vitae fringilla enim, nec ullamcorper
                          arcu.
                        </p>
                        <p>
                          Suspendisse turpis ipsum, tempus in nulla eu, posuere
                          pharetra nibh. In dignissim vitae lorem non mollis.
                          Praesent pretium tellus in tortor viverra condimentum.
                          Nullam dignissim facilisis nisl, accumsan placerat
                          justo ultricies vel. Vivamus finibus mi a neque
                          pretium, ut convallis dui lacinia. Morbi a rutrum
                          velit. Curabitur sagittis quam quis consectetur
                          mattis. Aenean sit amet quam vel turpis interdum
                          sagittis et eget neque. Nunc ante quam, luctus et
                          neque a, interdum iaculis metus. Aliquam vel ante
                          mattis, placerat orci id, vehicula quam. Suspendisse
                          quis eros cursus, viverra urna sed, commodo mauris.
                          Cras diam arcu, fringilla a sem condimentum, viverra
                          facilisis nunc. Curabitur vitae orci id nulla maximus
                          maximus. Nunc pulvinar sollicitudin molestie.
                        </p>
                        <div class="post-commet">
                          <a class="blog-comment" href="#">
                            0 COMMENT
                          </a>
                          <ul class="social-icons">
                            <li>
                              <a href="#">
                                <i class="bi bi-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="bi bi-youtube"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="bi bi-twitter-bird"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="review_address_inner">
                        <div class="pro_review">
                          <div class="review_thumb">
                            <img
                              alt="review images"
                              src="assets/images/review/comment-1.jpg"
                            />
                          </div>
                          <div class="review_details">
                            <div class="review_info">
                              <h5>
                                <a href="#">Dj Sonika</a>
                              </h5>
                              <div class="rating_send">
                                <a href="#">
                                  <i class="fa fa-reply"></i>
                                </a>
                              </div>
                            </div>
                            <div class="review_date">
                              <span>27 Jun, 2018 at 3:30pm</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer accumsan egestas elese ifend.
                              Phasellus a felis at estei to bibendum feugiat ut
                              eget eni Praesent et messages in con sectetur
                              posuere dolor non.
                            </p>
                          </div>
                        </div>

                        <div class="pro_review ans">
                          <div class="review_thumb">
                            <img
                              alt="review images"
                              src="assets/images/review/comment-2.jpg"
                            />
                          </div>
                          <div class="review_details">
                            <div class="review_info">
                              <h5>
                                <a href="#">Gerald joni</a>
                              </h5>
                              <div class="rating_send">
                                <a href="#">
                                  <i class="fa fa-reply"></i>
                                </a>
                              </div>
                            </div>
                            <div class="review_date">
                              <span>27 Jun, 2018 at 4:32pm</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer accumsan egestas elese ifend.
                              Phasellus a felis at estei to bibendum feugiat ut
                              eget eni Praesent et messages in con sectetur
                              posuere dolor non.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="comments-area comments-reply-area">
                        <div class="row">
                          <div class="col-lg-12">
                            <h4 class="comment-reply-title">Leave a Reply</h4>
                            <form action="#" class="comment-form-area">
                              <p class="comment-notes">
                                <span id="email-notes">
                                  Your email address will not be published.
                                </span>{" "}
                                Required fields are marked{" "}
                                <span class="required">*</span>
                              </p>
                              <p class="comment-form-comment">
                                <label>Comment</label>
                                <textarea
                                  class="comment-notes"
                                  required="required"
                                ></textarea>
                              </p>
                              <div class="comment-input">
                                <p class="comment-form-author">
                                  <label>
                                    Name <span class="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required="required"
                                    name="Name"
                                  />
                                </p>
                                <p class="comment-form-email">
                                  <label>
                                    Email <span class="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required="required"
                                    name="email"
                                  />
                                </p>
                                <p class="comment-form-url">
                                  <label>Website</label>
                                  <input type="text" name="url" />
                                </p>
                              </div>
                              <div class="comment-form-submit">
                                <input
                                  type="submit"
                                  value="Post Comment"
                                  class="comment-submit"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
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

export default BlogDetail;
