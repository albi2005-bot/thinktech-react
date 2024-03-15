import { Outlet } from "react-router-dom";
import "./home.style.scss";
import "./location_icon.svg";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import balfin from "./partnersimg/Balfin_logo.png";
import moveo from "./partnersimg/moveo-logo.png";
import one from "./partnersimg/one-logo.png";
import sisal from "./partnersimg/sisal-log.png";
import innovation from "./partnersimg/Innovation partners logo 2.png";
import mycicero from "./partnersimg/mycicero-logo.png";
import landmarklogo from "./partnersimg/landmarklogo.png";
import moveologo from "./partnersimg/moveo.png";
import facebook from "./partnersimg/facebook.png";
import youtube from "./partnersimg/youtube.png";
import instagram from "./partnersimg/instagram.png";
import Model from 'react-modal';
import { useState} from 'react';
import {faCheck} from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  const [visible,setvisible]=useState(false)
  return (
    <div>
      <div className="home-container">
        <div className="home-title">
          <h1>Save the date</h1>
        </div>
        <div className="home-clock">
          <h1>54 : 26 : 26</h1>
          <div className="home-clock__timer">
          <p>Days</p>
          <p>Hours</p>
          <p>Minutes</p>
          </div>
        </div>
        <div className="home-youtube">
       
          <div className="home-youtube__icondiv">
          <a href="https://www.youtube.com/@LandmarkAlbania">
             <FaYoutube className="home-youtube__icon" />
             </a>
             </div>
             <a href="https://www.youtube.com/@LandmarkAlbania">
          <h1>WATCH NOW ON YOUTUBE</h1>
          </a>
        </div>
        <div className="home-small-tittle">
          <h1>Thinktech 6th edition</h1>
        </div>
        <div className="home-info ">
          <FaLocationDot className="home-info__location"/>
          <h2>Location: Cosenza</h2>
        </div>
        <div className="home-info custom-padding">
        <FaCalendar className="home-info__time"/>
          <h2>When: 27th October 2022</h2>
        </div>
        <div>
        <button onClick={()=>setvisible(true)}>Register</button>
        <Model isOpen={visible} onRequestClose={()=>setvisible(false)} id="model">
          <div className="popup">
            <div className="popup__header">
              <div className="popup__headerh2">
                <h2> Conference Registration</h2> <br />
                <p className="popup__headerp">Thank you for your interest in attending the conference! Please fill out all required information. See you there!</p>
              </div>
              <div className="popup__headerclosebtn">
              <button onClick={()=>setvisible(false)} type="button" className="popup__headerclose" data-bs-dismiss="modal" aria-label="Close" ><IoMdClose /></button>
              </div>
            </div>
            <div className="popup__form">
              <form className="form">
                <div className="form__first">
                  <div className="form__nameandsurname">
                    <div className="form__name">
                    <label for="name" class="name" className="form__label">Full Name</label><br />
                      <input type="text" id="name" placeholder="First Name" className="form__input"></input>
                    </div>
                    <div className="form__surname"><br />
                      <input type="text" id="name" placeholder="Last Name" className="form__input"></input>
                    </div>
                  </div>
                  <div className="form__email">
                    <br />
                        <label for="e-mail" class="e-mail" className="form__label">E-mail</label><br />
                        <input type="email" id="email" placeholder="example@hotmail.com" className="form__inputemail" ></input>
                        </div>
                       <div className="form__phonenumber"><br />
                        <label for="phonenumber" class="phonenumber" className="form__label">Phone number</label><br /> 
                        <input type="text" id="number" placeholder="000-000-000" className="form__inputnumber"></input>
                        </div><br />
                  <div className="popup__select">
                    <div className="popup__gender">
                      <p  className="popup__paragraph">Gender</p><br />
                      <div className="popup__malediv">
                    

                      <input type="checkbox" name="gender" id="male" value="male" className="popup__male" />
                      <label for="male" className="popup__malename"> Male</label></div>
                      <div className="popup__femalediv">
                      

                      <input type="checkbox" name="gender" id="female" value="female" className="popup__female" />
                      <label for="female" className="popup__femalename"> Female</label></div>
                    </div>
                    <div className="popup__type">
                      <p className="popup__paragraph">You are</p> <br />
                      <div className="popup__teacherandotherdiv">
                      <div className="popup__teacherdiv">
                      

                      <input type="checkbox" name="profession" value="teacher" className="popup__teacher" />
                      <label for="teacher" className="popup__teachername" >Teacher</label></div>
                      <div className="popup__otherdiv">
                      
                      <input type="checkbox" name="profession" id="other" value="other" className="popup__other" />
                      <label for="other" className="popup__othername"> Other</label></div>
                      </div>
                      <div className="popup__studentdiv">

                      <input type="checkbox" name="profession" id="student" value="student" className="popup__student" />
                      <label for="student" className="popup__studentname"> Student</label></div>
                      
                    </div>
                    </div>
                    <div className="popup__registerbutton">
                    <button onClick={()=>setvisible(true)}  className="formbutton">Register</button>
                    </div>    
                </div>
              </form>
            </div>
          </div>
        </Model>
        </div>
        <div className="row-container">
          <div className="row-container-element">
            <h1>
              Thinktech<br></br>1st editon
            </h1>
          </div>
          <div className="row-container-element">
            <h1>
              Thinktech<br></br>2nd editon
            </h1>
          </div>
          <div>
            <h1>
              Thinktech<br></br>3rd editon
            </h1>
          </div>
        </div>
      </div>
      <div className="home-about" id="h_about">
        <br />
        <div className="home-about__about">
        <h1>ABOUT</h1></div><br />
        <div className="home-about__Thinktech">
        <h2>THINK TECH CONFERENCE WHICH FOCUSES COMPLETELY ON TECHNOLOGY AS THE FIELD OF THE FUTURE</h2></div><br />
        <div className="home-about__paragraph">
        <p>For the first time, Landmark Communications and Technologies introduced a conference which focuses entirely on technology as the field of the future. We have tried to bring an activity different from events or conferences that address the same topic, serving new areas and opportunities in the field of technology. Whether this will be innovative, attractive and useful is up to the public and the participants to decide.</p></div><br />
        <div className="home-about__more">
        <p className="home-about__moretext">More information about the 
        conference and the organizer 
        </p><Link  to="/about">
        <BsArrowRightCircle  className="home-about__arrow"/>
        </Link>
        </div><br />

        <div className="home-events" id="h_events">
          <div className="home-events__names">
            <p className="home-events__namesp">Events</p>
            <br />
            <h2 className="home-events__namesh2text">Thinktech</h2>
            <h2 className="home-events__namesh2">Hackathon</h2>
            <h2 className="home-events__namesh2">Meetups</h2>
          </div>
          <div className="home-events__container">
          <div className="home-events__container__boxes">
            <h2 className="home-events__container__h2">Thinktech 1<sup>st</sup> edition</h2>
            <p className="home-events__container__text">For the first time, Landmark Communications and Technologies introduced a conference which focuses entirely on technology as the field of the future. </p>
            <div className="home-events__container__boxes__location">
            <FaLocationDot className="home-events__container__boxes__locationicon"/>
              <p className="home-events__container__boxes__locationtext">ArTurbina</p>
              </div>
              <div className="home-events__container__boxes__time">
            <FaCalendar className="home-events__container__boxes__timeicon"/>
              <p className="home-events__container__boxes__timetext">5<sup>th</sup> Feb 2020</p>
            </div>
            <div className="home-events__container__boxes__about">
            <p className="home-events__container__boxes__seemore">see more <br /> about this edition</p>
            <a href="/about">
            <BsArrowRightCircle  className="home-events__container__boxes__arrow"/>
            </a>
            </div>
          </div>
          <div className="home-events__container__boxes">
            <h2 className="home-events__container__h2">Thinktech 2<sup>nd</sup> edition</h2>
            <p className="home-events__container__text">On September 30, 2021, was held for the second time in Albania, the conference of technological innovations, christened Think Tech. </p>
            <div className="home-events__container__boxes__location">
            <FaLocationDot className="home-events__container__boxes__locationicon"/>
              <p className="home-events__container__boxes__locationtext">Cultural Center of Orthodox Church</p>
            </div>
            <div className="home-events__container__boxes__time">
            <FaCalendar className="home-events__container__boxes__timeicon"/>
              <p className="home-events__container__boxes__timetext">30<sup>th</sup>  Sep 2021</p>
            </div>
            <div className="home-events__container__boxes__about">
            <p className="home-events__container__boxes__seemore">see more <br /> about this edition</p>
            <a href="/about">
            <BsArrowRightCircle  className="home-events__container__boxes__arrow"/></a>
            </div>
          </div>
          <div className="home-events__container__boxes">
            <h2 className="home-events__container__h2">Thinktech 3<sup>rd</sup> edition</h2>
            <p className="home-events__container__text">It has become already a tradition to hold ThinkTech conference, which is focused entirely on technology and innovation. Our goal remains the same... </p>
            <div className="home-events__container__boxes__location">
            <FaLocationDot className="home-events__container__boxes__locationicon"/>
              <p className="home-events__container__boxes__locationtext">“Jordan Misja” Artistic Lyceum, Tirana</p>
            </div>
            <div className="home-events__container__boxes__time">
            <FaCalendar className="home-events__container__boxes__timeicon"/>
              <p className="home-events__container__boxes__timetext">31<sup>st</sup> March 2022</p>
            </div>
            <div className="home-events__container__boxes__about">
            <p className="home-events__container__boxes__seemore">see more <br /> about this edition</p>
            <a href="/about">
            <BsArrowRightCircle  className="home-events__container__boxes__arrow"/></a>
            </div>
          </div>
          </div>

        </div>

        



      </div>
      
      <div className="partners" id="partners">
        <div className="partners__p">
        <p>Partners</p></div>
        <div className="partners__logo">
        <img src={moveo} alt="moveo"  />
        <img src={one} alt="one"  className="partners__img"/>
        <img src={sisal} alt="Sisal"  className="partners__img"/>
        <img src={balfin} alt="balfin"  className="partners__img"/>
        <img src={innovation} alt="innovation"  className="partners__img"/>
        <img src={mycicero} alt="mycicero"  className="partners__img"/>
        </div>
      </div>
      <br />
      <div className="footer">
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

export default Home;
