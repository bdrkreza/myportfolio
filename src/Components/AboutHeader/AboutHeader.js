import React from "react";
import profile_pic from "../../assets/Image/rk.jpg";
import "./AboutHeader.css";
const AboutHeader = () => {
  return (
    <>
      <section class="about_Header_section">
        <div class="container">
          <div class="row clearfix">
            <div class="content-column col-md-6 col-sm-12 col-xs-12">
              <div class="inner-column">
                <div class="sec-title">
                  <div class="title">About Us</div>
                  <h2>
                    Hi, I am <span>Rezaul Karim</span>
                  </h2>
                  <h4>A web design & developer</h4>
                </div>
                <div class="text">
                  I am from chittagong, Bangladesh. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others. I started
                  coding since I was in high school. Coding is also an art for
                  me. I love it and now I have the opportunity to design along
                  with the coding. I find it really interesting and I enjoyed
                  the process a lot. My vision is to make the world a better
                  place. Now almost everything is becoming better than ever. It
                  is time for us to create more good stuff that helps the world
                  to become a better place.
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1lh-DJtNKmFwVotu1vQBO0vPkU7lAh7gN/view?usp=sharing"
                  class="theme-btn btn-style-three" rel="noreferrer"
                >
                  DownLoad CV
                </a>
              </div>
            </div>

            <div class="image-column col-md-6 col-sm-12 col-xs-12">
              <div
                class="inner-column "
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <img src={profile_pic} alt="" />
                  <div class="overlay-box">
                    <div class="year-box">
                      <span class="number">5</span>Years <br /> Experience{" "}
                      <br /> Working
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
