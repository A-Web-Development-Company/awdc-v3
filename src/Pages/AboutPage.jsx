import React from 'react'
import ErreyonHS from '../assets/images/erreHS.png'
import MalikHS from '../assets/images/malikHS.png'
import EssoHS from '../assets/images/essoHS.png'
import PlaceholderHS from '../assets/images/ph.png'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import './AboutPage.css'




const AboutPage = () => {
  return (
    <>

      <div id='aboutStructure' className=''>
        <div id="headshotCol1" className='fixed left-0 border-r-zinc-200 w-18 shadow-lg'>
          <div className="teamMember flex flex-col w-16 shadow-sm">
            <img src={MalikHS} className=''/>
            <h3 className='text-red'>Malik Felix</h3>
            <h4 className='text-center mx-auto hidden'>Co-Founder</h4>
            <p className='text-black hidden sm:visible'>My passion lies in Front End Development and UI Design, where I use my expertise to build websites and web applications that look great and function well.</p>
          </div>
          <div className="teamMember w-16 shadow-sm">
            <img src={ErreyonHS} className=''/>
            <h3>Erreyon Elders</h3>
            <h4 className='text-center mx-auto hidden'>Founding Developer</h4>
            <p className='hidden sm:visible'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
          </div>

          {/* On mobile, the following headshots scroll on the left column*/}

          <div className="teamMember shortList w-16 shadow-sm">
            <img src={EssoHS} className=''/>
            <h3>Esso Bodjana</h3>
            <p className='hidden sm:visible'>I was born and raised in NYC and recently moved to San Diego to take advantage of the sunny weather. I bring 10+ years of experience working in the finance, tech, and start up space. Very interested in helping people find their potential.</p>
          </div>
        </div>

        <div id="statementCol" className='overflow-hidden ml-16'>
          <div id='statementContainer' className='overflow-scroll'>
            <div className="statement">
              <h2>Mission</h2>
              <p>Design and develop websites for non-profit organizations to: <br/> - Serve as a technical partner and streamline their mission <br/> - Efficiently use web technologies to have an advantage in the digital age <br/> - Leverage technology to support black professionals in the tech community</p>
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
              <p>- Improve brand awareness and credibility, <br/> - Increase conversion of website visitors to customers, <br/> - Increase revenue from conversion rates <br/> - The increased proliferation of sustainable career paths in the black and eventually larger BIPOC community</p>
            </div>

            <div id='socials' className="socials bg-transparent">
              <a href='' className='shadow-sm'><FaGithub /></a>
              <a href='' className='shadow-sm'><FaTwitter /></a>
              <a href='' className='shadow-sm'><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div id="headshotCol2" className="bg-slate-600">
          <div className="teamMember">
            <img src={EssoHS} className=''/>
            <h3>Esso Bodjana</h3>
            <p>I was born and raised in NYC and recently moved to San Diego to take advantage of the sunny weather. I bring 10+ years of experience working in the finance, tech, and start up space. Very interested in helping people find their potential.</p>
          </div>
          <div className="teamMember">
            <img src={PlaceholderHS} className=''/>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
