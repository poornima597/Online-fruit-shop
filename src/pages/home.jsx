import React from "react";
import {Link} from 'react-router-dom';
import slider from '../assets/images/slider-img.png';
import img1 from '../assets/images/o1.jpg';
import img2 from '../assets/images/o2.jpg';
import img3 from '../assets/images/o3.jpg';
import fruit1 from '../assets/images/p1.png';
import fruit2 from '../assets/images/p2.png';
import fruit3 from '../assets/images/p3.png';
import fruit4 from '../assets/images/p4.png';
import fruit5 from '../assets/images/p5.png';
import fruit6 from '../assets/images/p6.png';
import aboutus from '../assets/images/about-img.png';
import blog1 from '../assets/images/b1.jpg';
import blog2 from '../assets/images/b2.jpg';
import testimonial from '../assets/images/client.jpg';
import locmap from '../assets/images/loc.png';

export default function Home() {
  return (
    <>
      <section className="slider_section ">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <div className="detail-box">
                      <h1>
                        We Sell The <br />
                        Best Fruits
                      </h1>
                      <p>
                        Anything embarrassing hidden in the middle of text. All
                        the Lorem Ipsuanything embarrassing hidden in the middle
                        of text. All the Lorem Ipsumm{" "}
                      </p>
                      <div className="btn-box">
                        <Link to="fruits" className="btn-1">
                          Read More
                        </Link>
                        <Link to="contact" className="btn-2">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <div className="img-box">
                      <img src={slider} alt="Slider one" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <div className="detail-box">
                      <h1>
                        We Sell The <br />
                        Best Fruits
                      </h1>
                      <p>
                        Anything embarrassing hidden in the middle of text. All
                        the Lorem Ipsuanything embarrassing hidden in the middle
                        of text. All the Lorem Ipsumm{" "}
                      </p>
                      <div className="btn-box">
                        <Link to="fruits" className="btn-1">
                          Read More
                        </Link>
                        <Link to="contact" className="btn-2">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <div className="img-box">
                      <img src={slider} alt="Slider two" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <div className="detail-box">
                      <h1>
                        We Sell The <br />
                        Best Fruits
                      </h1>
                      <p>
                        Anything embarrassing hidden in the middle of text. All
                        the Lorem Ipsuanything embarrassing hidden in the middle
                        of text. All the Lorem Ipsumm{" "}
                      </p>
                      <div className="btn-box">
                        <Link to="fruits" className="btn-1">
                          Read More
                        </Link>
                        <Link to="contact" className="btn-2">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <div className="img-box">
                      <img src={slider} alt="Slider three" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </section>

      <section className="offer_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 px-0">
              <div className="box offer-box1">
                <img src={img1} alt="Image one" />
                <div className="detail-box">
                  <h2>Upto 20% Off</h2>
                  <Link to="fruits">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 px-0">
              <div className="box offer-box2">
                <img src={img2} alt="Image two" />
                <div className="detail-box">
                  <h2>Upto 10% Off</h2>
                  <Link to="fruits">Shop Now</Link>
                </div>
              </div>
              <div className="box offer-box3">
                <img src={img3} alt="Image three" />
                <div className="detail-box">
                  <h2>Upto 15% Off</h2>
                  <Link to="fruits">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Fruits</h2>
            <p>
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't an
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={fruit1} alt="Fruit one" />
                </div>
                <div className="detail-box">
                  <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  </span>
                  <Link to="fruits">Orange</Link>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 10.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={fruit2} alt="Fruit two" />
                </div>
                <div className="detail-box">
                  <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  </span>
                  <Link to="fruits">Durian</Link>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 10.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={fruit3} alt="Fruit three" />
                </div>
                <div className="detail-box">
                  <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  </span>
                  <Link to="fruits">Kiwi</Link>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 10.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={fruit4} alt="Fruit four" />
                </div>
                <div className="detail-box">
                  <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  </span>
                  <Link to="fruits">Mango</Link>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 10.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={fruit5} alt="Fruit five" />
                </div>
                <div className="detail-box">
                  <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  </span>
                  <Link to="fruits">Banana</Link>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 10.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={fruit6} alt="Fruit six" />
                </div>
                <div className="detail-box">
                  <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  </span>
                  <Link to="fruits">Apple</Link>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 10.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <Link to="fruits">Show more</Link>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src={aboutus} alt="aboutus" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks{" "}
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Latest From Blog</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src={blog1} alt="Blog one" />
                  <h4 className="blog_date">
                    29 <br />
                    June
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>Look even slightly believable. If you are</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src={blog2} alt="Blog two" />
                  <h4 className="blog_date">
                    28 <br />
                    June
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>Anything embarrassing hidden in the middle</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client_section ">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Testimonial</h2>
            <p>
              Even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to
            </p>
          </div>
        </div>
        <div className="container px-0">
          <div
            id="customCarousel2"
            className="carousel  slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src={testimonial} alt="Testimonial" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Clary Kenton</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src={testimonial} alt="Testimonial" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Clary Kenton</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src={testimonial} alt="Testimonial" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Clary Kenton</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box">
              <a
                className="carousel-control-prev"
                href="#customCarousel2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Get In <span>Touch</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="form_container">
                <form action="">
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="message-box form-control"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMaps">
                    <img scr={locmap} alt="Contact Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
