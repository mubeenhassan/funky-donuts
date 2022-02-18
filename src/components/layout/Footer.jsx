import React, { useState } from "react"
import footerLogo from "../../assets/images/funky-footer-logo.png"
import bars from "../../assets/images/bars.svg"
import close from "../../assets/images/close.svg"
import twitter from "../../assets/images/twitter.svg"
import discord from "../../assets/images/discord.svg"
import "../../assets/css/footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-link-container">
        <div className="footer-logo">
          <img src={footerLogo} alt="funky footer logo" />
        </div>
        <div className="footer-link">
          <ul>
            <li>About</li>
            <li>Explore</li>
            <li>My NFT's</li>
          </ul>
          <hr className="hr-new" />
          <ul>
            <li>Donutville</li>
            <li>Funky Mart</li>
            <li>The Bakery</li>
            <li>Town Hall</li>
            <li>Funky Tavem</li>
          </ul>
          <hr className="hr-new" />
          <ul>
            <li>FAQ</li>
            <li>Stacks</li>
            <li>Hiro Wallet</li>
          </ul>
        </div>
      </div>
      <div className="wallet-container">
        <div className="right-footer">
          <ul className="socials">
            <li>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={discord} alt="discrod" />
              </a>
            </li>
          </ul>
          <button className="connect-wallet">Connect wallet</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
