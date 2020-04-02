import * as React from 'react'
import SkillSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Skill: React.FC = () => {
  return(
    <SkillSection id="skills" data-wow-offset="40">
      <HeaderSection>SKILLS</HeaderSection>
      <div className="row">
        <div className="col-md-5">
          <div className="professional-skills">
            <div className="title-skills">
              <h3>PROFESSIONAL SKILLS</h3>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">C#</span>
                <span className="skill-value">☆☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={80}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">.NET Core, .NET Framework</span>
                <span className="skill-value">☆☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={80}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">HTML5 & CSS3</span>
                <span className="skill-value">☆☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={80}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">RestfulAPI</span>
                <span className="skill-value">☆☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={80}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">NodeJS</span>
                <span className="skill-value">☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={60}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "60%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">ReactJS</span>
                <span className="skill-value">☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={60}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "60%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Angular</span>
                <span className="skill-value">☆☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={80}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">TypeScript</span>
                <span className="skill-value">☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={60}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "60%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">JavaScript (ES6)</span>
                <span className="skill-value">☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={60}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "60%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">SQL Server</span>
                <span className="skill-value">☆☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={80}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Deployment</span>
                <span className="skill-value">☆☆☆☆</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" 
                        aria-valuenow={80}
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="additional-skills">
            <div className="title-skills">
              <h3>ADDITIONAL SKILLS</h3>
            </div>
            <div className="circle-progress">
              <div className="row">
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>80%</span>
                    </div>
                    <div className="chart" data-percent="80">
                    </div>
                    <div className="name-circle">
                      <span>ENGLISH</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>80%</span>
                    </div>
                    <div className="chart" data-percent="80">
                    </div>
                    <div className="name-circle">
                      <span>COMMUNICATION</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>80%</span>
                    </div>
                    <div className="chart" data-percent="80">
                    </div>
                    <div className="name-circle">
                      <span>ORGANIZATION</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>80%</span>
                    </div>
                    <div className="chart" data-percent="80">
                    </div>
                    <div className="name-circle">
                      <span>TEAMWORK</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>80%</span>
                    </div>
                    <div className="chart" data-percent="80">
                    </div>
                    <div className="name-circle">
                      <span>CREATIVITY</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>60%</span>
                    </div>
                    <div className="chart" data-percent="60">
                    </div>
                    <div className="name-circle">
                      <span>SOCIAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkillSection>
  )
}

export default Skill