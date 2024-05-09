import React from 'react'
import ErreyonHS from '../assets/images/erreHS.png'
import PlaceholderHS from '../assets/images/ph.png'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import './AboutPage.css'


// const socials = document.querySelector('#socials')
// const scrollFade = () => {
//   if(window.screenY > .5){
//     socials.classList.add('unfaded')
//   } else {
//     socials.classList.remove('unfaded')
//   }
// }

// document.addEventListener('scroll',scrollFade)

const AboutPage = () => {
  return (
    <div id='aboutStructure'>
      <div id="headshotCol1" className=''>
        <div className="teamMember">
          <img src={PlaceholderHS} className=''/>
          <h3>Malik Felix</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
        </div>
        <div className="teamMember">
          <img src={ErreyonHS} className=''/>
          <h3>Erreyon Elders</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
        </div>

        {/* On mobile, the following headshots scroll on the left column*/}

        <div className="teamMember shortList">
          <img src={PlaceholderHS} className=''/>
          <h3>Name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
        </div>
        <div className="teamMember shortList extraMarg">
          <img src={PlaceholderHS} className=''/>
          <h3>Name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
        </div>

        <div className="teamMemberScreen"> </div>
      </div>

      <div id="statementCol" className=''>
        <div id='statementContainer'>
          <div className="statement">
            <h2>Mission</h2>
            <p>Design and develop websites for non-profit organizations to: <br/> 1) serve as a technical partner and streamline their mission <br/> 2) efficiently use web technologies to have an advantage in the digital age <br/> 3) leverage technology to support black professionals in the tech community</p>
          </div>
          <div className="statement">
            <h2>Vision</h2>
            <p>Initializing the premiere network of tech and development resources that enable black professionals in the tech industry to reach their ultimate success.</p>
          </div>
          <div className="statement">
            <h2>Target Audience</h2>
            <p>Tech-focused non-profit organizations and those that offer professional development</p>
          </div>
          <div className="statement">
            <h2>Benefits</h2>
            <p>1) improve brand awareness and credibility, <br/> 2) increase conversion of website visitors to customers, <br/> 3) increase revenue from conversion rates <br/> 4) the increased proliferation of sustainable career paths in the black and eventually larger BIPOC community</p>
          </div>
          <div className="statementScreen"></div>
          <div id='socials' className="socials">
            <a><FaGithub /></a>
            <a><FaTwitter /></a>
            <a><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div id="headshotCol2" className="">
        <div className="teamMember">
          <img src={PlaceholderHS} className=''/>
          <h3>Name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
        </div>
        <div className="teamMember">
          <img src={PlaceholderHS} className=''/>
          <h3>Name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
