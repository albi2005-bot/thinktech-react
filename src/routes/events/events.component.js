import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import landmarklogo from "./landmarklogo.png";
import moveologo from "./moveo.png";
import facebook from "./facebook.png";
import youtube from "./youtube.png";
import instagram from "./instagram.png";
import "./events.component.scss";


const Events = () => {
    return (
      <div className="eventsPage">
        <div className="think-tech-events">
          <h1 className="think-tech-events__thinktech">Thinktech 3<sup>rd</sup> edition</h1><br />
          <div className="think-tech-events__timeandlocation">
          <div className="think-tech-events__location">
          <FaLocationDot className="think-tech-events__locationicon"/>
          <h2 className="think-tech-events__locationtext">ArTurbina</h2>
        </div>
        <div className="think-tech-events__time">
          <FaCalendar className="think-tech-events__timeicon"/>
          <h2 className="think-tech-events__timetext">5<sup>th</sup> Feb 2020</h2>
        </div>
          </div>
            <br />
            <div className="think-tech-events__paragraphdiv">
          <p className="think-tech-events__paragraphone">
             On February 5, 2020, was held for the first time in Albania, the conference of technological innovations, christened Think Tech. <br /></p>
            <p className="think-tech-events__paragraphtwo">
            Always trying to bring our innovative ideas, this time we presented the conference that brought together the experiences of local companies and our partners from the most developed European countries, including the Netherlands, Italy, England, etc. <br /></p>
            <p className="think-tech-events__paragraphthree">
            The main goal of Think Tech is to unveil the many opportunities that our country offers, raising awareness of young people to contribute to our country, to make the change we need so much. <br /></p>
            <p className="think-tech-events__paragraphfour">
            Why Think Tech? <br /></p>
            <p className="think-tech-events__paragraphfive">
            Think Tech is not an ordinary conference, on the contrary, it is a unique event which focuses on youth development, partner initiatives, as well as training and professional advice in the local market. <br /></p>
            <p className="think-tech-events__paragraphsix">
            Presented by 10 lecturers, from the fields of technology and entrepreneurship, this conference originally intertwines the visions, success stories and the experiences in the fields of digital development and communication. This meeting also serves as a resource where you can be informed about the professional opportunities offered by Landmark Communications and Technologies and Móveo srl, as well as by our national and international partners.
          </p></div><br />
          <p className="think-tech-events__eventagenda">
            Event Agenda
          </p>
          <br />
          <p className="think-tech-events__eventgathering">
            15:00 Gathering of the invitees  
          </p><br />
          <p className="think-tech-events__eventstart">
            15:30 Start of the event
          </p>

          <div className="think-tech-events__sections">
            <div className="think-tech-events__firstsection">
                <h2 className="think-tech-events__sectionsheader">First section</h2>
                <p className="think-tech-events__sectionsparagraph">15:30 - 16:15</p>
                <p className="think-tech-events__sectionsparagraph">Safe internet and clean network</p>
            </div>
            <div className="think-tech-events__secondsection">
                <h2 className="think-tech-events__sectionsheader">Second section</h2>
                <p className="think-tech-events__sectionsparagraph">15:30 - 16:15</p>
                <p className="think-tech-events__sectionsparagraph">Safe internet and clean network</p>
            </div>
          </div>
          <br />

          <p className="think-tech-events__keyspeakers"> Key Speakers</p><br />
          <div className="think-tech-events__speaker">
           <p className="think-tech-events__speakertext"> Greeting speech by <span>Mr. Erion ISUFI,</span> Founder of Think Tech,<br /> 
            Founder and CEO of Landmark Communications & Technologies. 
            </p>
          </div><br />
          <div className="think-tech-events__speaker">
           <p className="think-tech-events__speakertext"><span>Mr. Elvin GURI,</span> Shareholder of ONE Telecommunications: suggested topic Clean Network and Cyber Security. 
            </p>
          </div><br />
          <div className="think-tech-events__speaker">
           <p className="think-tech-events__speakertext"> <span>Mr. Mario MARTINELLI </span> - CIO of SISAL: suggested topic: International Opportunities in local market 
            </p>
          </div><br />
          <div className="think-tech-events__speaker">
           <p className="think-tech-events__speakertext"> <span>Mr. Mario MARTINELLI </span> - CIO of SISAL: suggested topic: International Opportunities in local market 
            </p>
          </div><br />
          <div className="think-tech-events__speaker">
           <p className="think-tech-events__speakertext"><span> Mr. Lorent GORDI</span> - General Manager of Philip Morris Albania - suggested topic: technology as a better alternative in our life. 
            </p>
          </div>   
        </div>



        <div className="footer1">
      <div className="footer-links1">
        <a href="/about" className="footer-links1__about1">
      About the conference</a> <br />
        <a href="/events" className="footer-links1__about1">
      Events</a> <br />
        <a href="#"  className="footer-links1__about1" >
     Our Partners</a>
     
      <div className="footer-links1__copyright1">
        <p>
        &copy; Copyrights 2024 Thinktech
          </p>
      </div>
      </div>
      <div className="footer-organizer1">
        <h2>Organizer</h2>
        <div className="footer-organizer1__logos1">
        <img src={landmarklogo} alt="landmark" className="footer-organizer1__landmarklogo1"/>
        <img src={moveologo} alt="moveo" className="footer-organizer1__moveologo1" />
        </div>
        <div className="footer-organizer1__paragraphdiv1">
        <p className="footer-organizer1__paragraph1">
        If you want to cooperate with us, become a partner or have another important issue, please contact us using the email below.
        </p></div>
         
        <div onClick={(e) => {window.location.href ='mailto:info@thinktech.al';}} className="footer-organizer1__mail1">info@thinktech.al </div>
      </div>
      <div className="footer-socialicons1">
        <a href="https://www.facebook.com/thinktechalbania">
          <img src={facebook} alt="facebook" className="footer-socialicons1__facebook1" />
        </a>
        <a href="https://www.instagram.com/landmark.al/">
          <img src={youtube} alt="youtube" className="footer-socialicons1__youtube1" />
        </a>
        <a href="https://www.instagram.com/landmark.al/">
          <img src={instagram} alt="instagram" className="footer-socialicons1__instagram1"/>
        </a>
        <div className="footer-socialicons1__Landmark1">
          <p className="footer-socialicons1__paragraph1">Landmark</p>
        </div>
      </div>
      
    </div>
      </div>
    );
  };
  
  export default Events;
  