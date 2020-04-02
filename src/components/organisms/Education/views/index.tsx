import * as React from 'react'
import EducationSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Education: React.FC = () => {
  return(
    <EducationSection id="education" data-wow-offset="40">
      <HeaderSection>EDUCATION</HeaderSection>
      <div className="row">
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>2011 - 2013</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">MASTER OF SCIENCE (M.Sc.) in Computer Information Systems </span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">University of Science Ho Chi Minh City (VNU-HCM)</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>2007 - 2011</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">BACHELOR OF SCIENCE (B.Sc.) in Computer Information Systems </span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">University of Science Ho Chi Minh City (VNU-HCM)</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </EducationSection>
  )
}

export default Education