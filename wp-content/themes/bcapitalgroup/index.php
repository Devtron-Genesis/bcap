<?php
/**
* The main template file
*
* This is the most generic template file in a WordPress theme
* and one of the two required files for a theme (the other being style.css).
* It is used to display a page when nothing more specific matches a query.
* e.g., it puts together the home page when no home.php file exists.
*
* Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
*
* @package WordPress
* @subpackage B Capital Group
* @since B Capital Group
*/

get_header();


?>
<div class="banner">
  <ul>
    <li>
      <video  autoplay loop="loop" id="video">
        <source src="<?php echo get_template_directory_uri(); ?>/assets/video/1080p.mp4" type="video/mp4">
          <source src="<?php echo get_template_directory_uri(); ?>/assets/video/1080p.ogg" type="video/ogg">
          </video>
          <div class="caption fadeInUp wow" data-wow-duration="2s" data-wow-delay="1s">
            <article>
              <h1>
                INNOVATION WITHOUT BORDERS
              </h1>
              <h3>
                TRANSFORMING INDUSTRIES AND IMPROVING LIVES
              </h3>
            </article>
          </div>
        </li>
      </ul><a class="scroll_prompt fa fa-angle-down fa-3x" href="#sec-start"></a>
    </div>
    <div class="sec" id="sec-start">
      <div class="container">
        <div class="mission_wrap">
          <h5>
            OUR VISION
          </h5>
          <p>
            B Capital provides a launch pad for the world’s most pioneering entrepreneurs on which they can develop world-changing B2B and B2B2C technology that will transform industries and improve lives across the globe
          </p>
        </div>
      </div>
      <div class="services_thumb_wrap">
        <div class="row">
          <div class="col-sm-6">
            <a class="inner" href="javasript:;">
              <figure>
                <img class="img-responsive" src="assets/images/services_thumb_1.jpg">
                <h3>
                  WE THINK, OPERATE & INVEST GLOBALLY
                </h3>
              </figure>
              <div class="overlay">
                <h3>
                  WE THINK, OPERATE & INVEST GLOBALLY
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                </p>
              </div></a>
            </div>
            <div class="col-sm-6">
              <a class="inner" href="javasript:;">
                <figure>
                  <img class="img-responsive" src="assets/images/services_thumb_2.jpg">
                  <h3>
                    WE’RE MORE THAN JUST INVESTORS
                  </h3>
                </figure>
                <div class="overlay">
                  <h3>
                    WE’RE MORE THAN JUST INVESTORS
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                  </p>
                </div></a>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <a class="inner" href="javasript:;">
                  <figure>
                    <img class="img-responsive" src="assets/images/services_thumb_3.jpg">
                    <h3>
                      WE ARE BETTER TOGETHER
                    </h3>
                  </figure>
                  <div class="overlay">
                    <h3>
                      WE ARE BETTER TOGETHER
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                  </div></a>
                </div>
                <div class="col-sm-6">
                  <a class="inner" href="javasript:;">
                    <figure>
                      <img class="img-responsive" src="assets/images/services_thumb_4.jpg">
                      <h3>
                        BRIDGING THE GAP
                      </h3>
                    </figure>
                    <div class="overlay">
                      <h3>
                        BRIDGING THE GAP
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                      </p>
                    </div></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="sec sec2-mob visible-xs visible-sm">
              <div class="container">
                <div class="values_wrap">
                  <div class="mobile-slider">
                    <div class="inner">
                      <h5>
                        OUR VALUES
                      </h5>
                      <h3>Truth</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                      </p>
                    </div>
                    <div class="inner">
                      <h5>
                        OUR VALUES
                      </h5>
                      <h3>Trust</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                      </p>
                    </div>
                    <div class="inner">
                      <h5>
                        OUR VALUES
                      </h5>
                      <h3>Together</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                      </p>
                    </div>
                    <div class="inner">
                      <h5>
                        OUR VALUES
                      </h5>
                      <h3>Humble</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                      </p>
                    </div>
                    <div class="inner">
                      <h5>
                        OUR VALUES
                      </h5>
                      <h3>Responsible</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                      </p>
                    </div>
                    <div class="inner">
                      <h5>
                        OUR VALUES
                      </h5>
                      <h3>Bold</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                      </p>
                    </div>
                    <div class="inner">
                      <h5>
                        OUR VALUES
                      </h5>
                      <h3>Tempor</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sec sec2 visible-md visible-lg">
              <div class="container">
                <div class="values_wrap">
                  <h5>
                    OUR VALUES
                  </h5>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="inner_nav">
                        <ul>
                          <li class="active">
                            <a data-toggle="tab" href="#tab_1" role="tab">Truth</a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab_2" role="tab">Trust</a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab_3" role="tab">Together</a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab_4" role="tab">Humble</a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab_5" role="tab">Responsible</a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab_6" role="tab">Bold</a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab_7" role="tab">Tempor</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="inner_details">
                        <div class="tab-content">
                          <div class="tab-pane fade in active" id="tab_1" role="tabpanel">
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                            </p>
                          </div>
                          <div class="tab-pane fade" id="tab_2" role="tabpanel">
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                            </p>
                          </div>
                          <div class="tab-pane fade" id="tab_3" role="tabpanel">
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                            </p>
                          </div>
                          <div class="tab-pane fade" id="tab_4" role="tabpanel">
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                            </p>
                          </div>
                          <div class="tab-pane fade" id="tab_5" role="tabpanel">
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                            </p>
                          </div>
                          <div class="tab-pane fade" id="tab_6" role="tabpanel">
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                            </p>
                          </div>
                          <div class="tab-pane fade" id="tab_7" role="tabpanel">
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <?php //echo do_shortcode('[carousel-horizontal-posts-content-slider]'); ?>
            <?php get_footer(); ?>
