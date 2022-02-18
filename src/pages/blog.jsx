import React from 'react';
import blog1 from '../assets/images/b1.jpg';
import blog2 from '../assets/images/b2.jpg';

export default function Blog() {
  return (
    <>
       <section className="blog_section layout_padding2-top layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Latest From Blog
        </h2>
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
              <h5>
                Look even slightly believable. If you are
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <div className="img-box">
              <img src={blog2} alt="Blog two" />
              <h4 className="blog_date">
                28 <br/>
                June
              </h4>
            </div>
            <div className="detail-box">
              <h5>
                Anything embarrassing hidden in the middle
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
