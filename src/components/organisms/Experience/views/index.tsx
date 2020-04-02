import * as React from 'react'
import ExperienceSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Experience: React.FC = () => {
  return(
    <ExperienceSection id="experience" data-wow-offset="40">
      <HeaderSection>PROFESSIONAL EXPERIENCE</HeaderSection>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <span className="icon-experience">
            <i className="fa fa-briefcase"></i>
          </span>
          <div className="all-experience">
            <div className="experience-content">
              <span className="period-experience">2018 – present</span>
              <h3 className="specialty-name">SENIOR SOFTWARE ENGINEER/TEAM LEADER </h3>
              <h3 className="company-name">NashTech Limited – Ho Chi Minh City, Vietnam</h3>
              <p className="prg-experience">
              Being a member of the Software Department (line of .NET Technologies), my responsibility includes, but not limited to:
              <ul>
              <li>- Make the detailed designs for assigned tasks</li>
              <li>- Write code based on detailed designs and Functional/Requirement Specifications</li>
              <li>- Perform a full unit test on the assigned tasks</li>
              <li>- Create detail design, code, unit test, code review</li>
              <li>- Incident and bug fixing</li>
              <li>- Priority tasks in detail, support junior Dev to cover come to their issues.</li>
              <li>- Technical use:</li>
              <ul>
                <li>+ C#: .NET Framework 4.5, .NET Core, ASP.NET Core MVC, Identity</li>
                <li>+ NodeJS, ReactJS, Angular 6, ES6, TypeScript</li>
                <li>+ SQL Server, MongoDB</li>
                <li>+ Docker, Kubernetes</li>
                <li>+ Microservices architecture</li>
              </ul>
              </ul>
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">2016 – 2018</span>
              <h3 className="specialty-name">SENIOR SOFTWARE ENGINEER/TEAM LEADER </h3>
              <h3 className="company-name">VienthongA (acquired by VingroupJSC) – Ho Chi Minh City, Vietnam</h3>
              <p className="prg-experience">
              <ul>
              <li>- Assist in development and documentation of several company’s internal systems: POS system, CallCenter system, AdminCP.</li>
              <li>- Develop APIs to connect with various partners and service provider systems (SAMSUNG Knox, GiaoHangNhanh, VNPost, SouthTelecom)</li>
              <li>- Support technical-related issues and maintain the e-commerce website: https://vienthonga.vn/</li>
              <li>- Create detail design, code, unit test, code review</li>
              <li>- Technical use:</li>
              <ul>
                <li>+ C#, .NET Framework, MVC 4.5, WebAPI (RESTFul), EntityFramework 6</li>
                <li>+ NodeJS, Aurelia, ES6, TypeScript </li>
                <li>+ MySQL, SQL Server 2012</li>
              </ul>
              </ul>
              </p>
            </div>
            <div className="experience-content">
            <span className="period-experience">2015 – 2016</span>
              <h3 className="specialty-name">SENIOR SOFTWARE ENGINEER/TEAM LEADER </h3>
              <h3 className="company-name">Amberos LLC – Ho Chi Minh City, Vietnam</h3>
              <p className="prg-experience">
              <ul>
              <li>- Support users in Singapore for technical matters when using ERP system.</li>
              <li>- Fix bugs and implement new requirements for existed ERP projects.</li>
              <li>- Manage team with 3 junior developers.</li>
              <li>- Technical use:</li>
              <ul>
                <li>+ C#, WebAPI (RESTFul), Crystal Report, Entity Framework 6</li>
                <li>+ Xamarin, WindowsApp, Windows Service</li>
                <li>+ SQL Server 2012</li>
              </ul>
              </ul>
              </p>
            </div>
            <div className="experience-content">
            <span className="period-experience">2014 – 2015</span>
              <h3 className="specialty-name">SOFTWARE ENGINEER</h3>
              <h3 className="company-name">Viettel Telecommunications Network Equipment Manufacturer (VTCore) – Hanoi, Vietnam</h3>
              <p className="prg-experience">
              <ul>
              <li>- Work at OCS Department (Online Charging System), develop internal software tools for telecommunication area.</li>
              <li>- Technical use:</li>
              <ul>
                <li>+ Java, Spring, Hibernate, Primefaces </li>
                <li>+ Oracle 11G</li>
              </ul>
              </ul>
              </p>
            </div>
            <div className="experience-content">
            <span className="period-experience">2013 – 2014</span>
              <h3 className="specialty-name">TECHNICAL TRAINING ASSISTANT</h3>
              <h3 className="company-name">Global CyberSoft – Ho Chi Minh City, Vietnam</h3>
              <p className="prg-experience">
              <ul>
              <li>- Work at Training Center, assist Training Program Manager for technical matters in training program (manage project meeting, code review, evaluate intern)</li>
              <li>- Manage intern members team.</li>
              <li>- Instructor for various basic courses: Using SVN & JIRA in Project, Effective email with Thunderbird, Software Development Life Cycle</li>
              <li>- Make e-learning courses for internal use.</li>
              </ul>
              </p>
            </div>
            <div className="experience-content">
            <span className="period-experience">2011 – 2013</span>
              <h3 className="specialty-name">SOFTWARE ENGINEER / TEACHING ASSISTANT </h3>
              <h3 className="company-name">Software Engineering Laboratory, University of Science Ho Chi Minh City (VNU-HCM) – Ho Chi Minh City, Vietnam </h3>
              <p className="prg-experience">
              <ul>
              <li>- Instructor for some practical courses: Web Application Programming 1 (using PHP), Web Application Programming 2 (using ASP.NET, WebForm and MVC 3) and Develop Management Applications (using VB.NET).</li>
              <li>- Assist in development and documentation of various internal and outsourcing projects.</li>
              <li>- Technical use:</li>
              <ul>
                <li>+ PHP, CodeIgniter, Joomla 2.x (develop components and modules)</li>
                <li>+ C#, Entity Framework, JavaScript</li>
                <li>+ SQL Server, MySQL </li>
              </ul>
              </ul>
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">2010 – 2011</span>
              <h3 className="specialty-name">PHP DEVELOPER (INTERN) </h3>
              <h3 className="company-name">VNSON Corp. – Ho Chi Minh City, Vietnam </h3>
              <p className="prg-experience">
                <ul>
                  <li>- Assist in development and documentation of several company’s internal projects.</li>
                  <li>- Implement components and modules for both Front-end & Back-end in CMS Joomla.</li>
                  <li>- Technical use:</li>
                  <ul>
                    <li>+ PHP, Joomla 2.x (develop components and modules)</li>
                    <li>+ MySQL </li>
                  </ul>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ExperienceSection>
  )
}

export default Experience