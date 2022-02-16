import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import bars from '../../assets/images/bars.svg'
import close from '../../assets/images/close.svg'
import twitter from '../../assets/images/twitter.svg'
import discord from '../../assets/images/discord.svg'
import '../../assets/css/navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='menu-container'>
      <div className='logo-container'>
        <img src={logo} alt='' />
      </div>
      <div className={`left-nav-container ${isOpen ? 'show' : ''}`}>
        <label
          htmlFor='check'
          className='checkbtn'
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={isOpen ? close : bars} alt='bars' />
        </label>
        <div className='menu-link'>
          <ul>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>explore</a>
            </li>
            <li>
              <a href='#'>donutville</a>
            </li>
            <li>
              <a className='nft-color' href='#'>
                My NFT’s
              </a>
            </li>
          </ul>

          <div className='wallet-container'>
            <ul className='socials'>
              <li>
                <a href='#'>
                  <img src={twitter} alt='twitter' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={discord} alt='discrod' />
                </a>
              </li>
            </ul>
            <button className='connect-wallet'>Connect wallet</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
