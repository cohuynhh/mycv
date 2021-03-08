import * as React from "react"
import AboutSection from "./styles"

const About: React.FC = () => {
  return(
    <AboutSection id="about">
      <div className="profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="photo-profile">
              <img src="https://avatars2.githubusercontent.com/u/2639882?s=400&u=d38189803d754ef1733116373077a468938e6429&v=4" alt="Huỳnh Hữu Có" />
            </div>
            <a href="cv/CV_HuynhHuuCo_20200401_en.pdf" target="cv">
              <div className="download-resume">
                <i className="fa fa-cloud-download" aria-hidden="true"></i>
                <span className="text-download">DOWNLOAD CV</span>
              </div>
            </a>
            <div className="available">
              <i className="fa fa-checked" aria-hidden="true"></i>
              <span className="text-available"> A smooth sea never made skilled sailor</span>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="info-profile">
              <h2><span>HI I'M</span> HUỲNH HỮU CÓ</h2>
              <h3>Senior Software Developer</h3>
              <p>Hello! I’m Huynh Huu Co (just call me Nathan). I have more than 8 years of experience worked in software development environment.</p>
              <p>I’m specializing in Back-end development, experienced with all stages of the software development life cycle (SDLC).</p>
              <p>I’m well-versed in numerous programming languages including C#, PHP, JAVA, JavaScript (ES6) and mark-up language like HTML5, CSS3. 
                I also have experienced with writing SQL query.
              </p>
              <p>I'm a tech-savvy, my passion for programming and I'm fulfilling my GitHub by studying new skills and new programming technologies day by day.</p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Location</span>
                      <span className="info">Ho Chi Minh City, Vietnam
                      </span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Email</span>
                      <span className="info">co.huynhhuu@outlook.com</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Phone</span>
                      <span className="info">(+84) 39 657 5355</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Website</span>
                      <span className="info">https://cohuynhh.github.io</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Nationality</span>
                      <span className="info">Vietnam</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <span className="title-links">Social Links</span>
                  <ul className="ul-social-links">
                    <li className="li-social-links">
                      <a href="https://github.com/cohuynhh" data-tootik="GitHub" data-tootik-conf="square">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="https://www.linkedin.com/in/cohuynhhuu/" data-tootik="Linkedin" data-tootik-conf="square">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="https://www.facebook.com/huynhhuuco" data-tootik="Facebook" data-tootik-conf="square">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="https://twitter.com/hhuuco26" data-tootik="Twitter" data-tootik-conf="square">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  )
}

export default About