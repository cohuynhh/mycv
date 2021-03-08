import * as React from 'react'
import ContactSection from './styles'
import SocialLinks from '../../../molecules/SocialLinks'
import HeaderSection from '../../../molecules/HeaderSection'

const Contact: React.FC = () => {
  return(
    <ContactSection id="contact-us" data-wow-offset="40">
      <HeaderSection>CONTACT</HeaderSection>
      <div className="row">
        <div className="col-sm-12">
          <div className="info-content">
            <h3>KEEP IN TOUCHE</h3>
            <div className="address">
              <span className="info-icon"
                ><i className="fa fa-map-marker"></i
              ></span>
              <span className="info-text">Dong Thuan 2 Building, DN10 Street, Tan Hung Thuan Ward, District 12, Ho Chi Minh City, Vietnam
              </span>
            </div>
            <div className="email">
              <span className="info-icon"><i className="fa fa-envelope"></i></span>
              <span className="info-text">co.huynhhuu@outlook.com</span>
            </div>
            <div className="telephone">
              <span className="info-icon"><i className="fa fa-phone"></i></span>
              <span className="info-text">(+84) 39 657 5355</span>
            </div>
            <div className="website">
              <span className="info-icon"><i className="fa fa-link"></i></span>
              <span className="info-text">https://github.com/cohuynhh</span>
            </div>
          </div>
        </div>
      </div>
      {/* <SocialLinks /> */}
    </ContactSection>
  )
}

export default Contact