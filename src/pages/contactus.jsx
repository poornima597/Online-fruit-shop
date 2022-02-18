import React from "react";
import locmap from '../assets/images/loc.png';

export default function Contact() {
  return (
    <>
      <section class="contact_section layout_padding2-top layout_padding-bottom">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Get In <span>Touch</span>
            </h2>
          </div>
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="form_container">
                <form action="">
                  <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  {/* <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div> */}
                  <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="text"
                        class="message-box form-control"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div class="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 px-0">               
              <img src={locmap} alt="Contact Us" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
