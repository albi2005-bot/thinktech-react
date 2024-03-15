import React from "react";
import landmarklogo from "./landmarklogo.png";
import moveologo from "./moveo.png";
import facebook from "./facebook.png";
import youtube from "./youtube.png";
import instagram from "./instagram.png";
import "./about.component.scss"; // Ensure the path to the SCSS file is correct

const About = () => {
  return (
    <div className="aboutPage">
      <div className="think-tech-about">
        <h1 className="think-tech-about__about">ABOUT</h1><br />
        <h1 className="think-tech-about__title">Think Tech Conference which focuses completely on technology as the field of the future</h1><br />
        <p className="think-tech-about__paragraph">
          For the first time, Landmark Communications and Technologies
          introduced a conference which focuses entirely on technology as the
          field of the future. We have tried to bring an activity different from
          events or conferences that address the same topic, serving new areas
          and opportunities in the field of technology. Whether this will be
          innovative, attractive and useful is up to the public and the
          participants to decide.
        </p><br />
        <p className="think-tech-about__paragraph">
          The “Think Tech” conference is focused on young people and the main
          goal is to convey a simple message, which I believe is very current.
          In summary, the call of “Think Tech” is: “Do not leave Albania,
          because even in the absence of initiatives of relevant institutions,
          our country still offers many opportunities in the field of
          technology.“
        </p><br />
        <p className="think-tech-about__paragraph">
        The first relates to domestic and foreign enterprises. Domestic businesses, which play a key role as technology promoters, will offer their innovations in the digital field. This serves to acquaint young people with the many opportunities and different programs that these businesses or corporations have. Part of the conference are discussions on the opportunities that Albania offers, the reasons why our partners have chosen Albania for software and web development, as well as the positive and negative sides of distance management of a business, using the Outsource model. Another prism is what our job market offers and how much we compete with international corporations. This competition shows how capable we really are. The second part of the meeting focuses on studies, training, advice and assistance that international organizations that operate in our market, offer to Albanian youth. Due to the lack of information, both by young people and organizations, we thought to dedicate an important part to recognizing the programs, initiatives and innovations that foreign companies serve in the Albanian market. Primary for us is for young people to consider the opportunities that Albania offers. I am very much in favor of professional development abroad, as I gain an experience that serves you very well, based on my personal experience as a student and employee in one of the most developed countries in the world, namely in the Netherlands, but I stand by the view that looking for a new experience differs greatly from the mass exodus which is savagely attacking our country. Therefore, it is very important for me as an entrepreneur and for Albania to have talented young people who contribute in their country, in the field of the future.
        </p><br />
        {/* ... additional paragraphs as needed */}
        <h2 className="think-tech-about__Erion">Erion Isufi</h2>
        <p className="think-tech-about__quote">
         CEO & Founder, Landmark Communication and Technologies
        </p>
        <p className="think-tech-about__quote">
        CEO Co-Founder Moveo Albania Technology
        </p>
      </div>
      <div className="footer2">
      <div className="footer-links">
        <a href="/about" className="footer-links__about">
      About the conference</a> <br />
        <a href="/events" className="footer-links__about">
      Events</a> <br />
        <a href="#"  className="footer-links__about" >
     Our Partners</a>
     
      <div className="footer-links__copyright">
        <p>
        &copy; Copyrights 2024 Thinktech
          </p>
      </div>
      </div>
      <div className="footer-organizer">
        <h2>Organizer</h2>
        <div className="footer-organizer__logos">
        <img src={landmarklogo} alt="landmark" className="footer-organizer__landmarklogo"/>
        <img src={moveologo} alt="moveo" className="footer-organizer__moveologo" />
        </div>
        <div className="footer-organizer__paragraphdiv">
        <p className="footer-organizer__paragraph">
        If you want to cooperate with us, become a partner or have another important issue, please contact us using the email below.
        </p></div>
         
        <div onClick={(e) => {window.location.href ='mailto:info@thinktech.al';}} className="footer-organizer__mail">info@thinktech.al </div>
      </div>
      <div className="footer-socialicons">
        <a href="https://www.facebook.com/thinktechalbania">
          <img src={facebook} alt="facebook" className="footer-socialicons__facebook" />
        </a>
        <a href="https://www.instagram.com/landmark.al/">
          <img src={youtube} alt="youtube" className="footer-socialicons__youtube" />
        </a>
        <a href="https://www.instagram.com/landmark.al/">
          <img src={instagram} alt="instagram" className="footer-socialicons__instagram"/>
        </a>
        <div className="footer-socialicons__Landmark">
          <p className="footer-socialicons__paragraph">Landmark</p>
        </div>
      </div>
      
    </div>

    </div>
  );
};

export default About;
