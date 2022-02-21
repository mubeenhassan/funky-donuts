import React from 'react'
import Lottie from 'react-lottie'
import image1 from '../../assets/lotties/funky1.json'
import image2 from '../../assets/lotties/funky2.json'
import planeLanding from '../../assets/lotties/funky3.json'
import image4 from '../../assets/lotties/funky4.json'
import image5 from '../../assets/lotties/funky5.json'
import image6 from '../../assets/lotties/funky6.json'
import image7 from '../../assets/lotties/funky7.json'
import image8 from '../../assets/lotties/funky8.json'
import image9 from '../../assets/lotties/funky9.json'
import image10 from '../../assets/lotties/funky10.json'
import DonutSlider from '../layout/Slider'
import header1 from '../../assets/images/header1.png'
import header2 from '../../assets/images/header2.png'

import '../../assets/css/home.css'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const Home = () => {
  const plane_landing = { ...defaultOptions, animationData: planeLanding }
  const home_01 = { ...defaultOptions, animationData: image10 }
  const home_02 = { ...defaultOptions, loop: true, animationData: image4 }
  const home_03 = { ...defaultOptions, loop: true, animationData: image2 }
  const home_04 = { ...defaultOptions, loop: true, animationData: image1 }
  return (
    <div className='home-container'>
      <Lottie
        options={plane_landing}
        height={'calc(100vh - 89px)'}
        width={'100%'}
      />

      <div className='home-welcome'>
        <img className='home-side-image' src={header1} />
        <div className='home-welcome-section'>
          <h1 className='home-welcome-h1'> Welcome to the Donutville!</h1>
          <span className='home-welcome-p'>
            Explore our fun & magical donut village and find out more about our
            tasty Funky Donut NFT’s!
          </span>
        </div>

        <img className='home-side-image' src={header2} />
      </div>
    <div className='bg-blue'>
      <Lottie options={home_02} width={'1000px'} />
      </div>
      <Lottie options={home_02} width={'100%'} />

      <div className='home-about'>
        <div>
          <Lottie options={home_03} width={'100%'} />
        </div>
        <div className='home-about-text'>
          <h1 className='home-welcome-h1'>About</h1>
          <p className='home-welcome-p'>
            Funky Donuts are a collection of 3,000 funky, fun & rather tasty
            donut NFT’s on the Stacks blockchain, secured by Bitcoin! They come
            in a variety of mouth-watering flavours, toppings and 'funky'
            accessories!
          </p>
          <button className='connect-wallet-btn'>Connect wallet</button>
        </div>
      </div>

      <div className='home-about bg-white'>
        <div className='home-about-text'>
          <h1 className='home-welcome-h1'>Funky Mart</h1>
          <p className='home-welcome-p'>
            The Funky Mart is a place where you can buy new accessories for your
            Funky Donuts. Whether you want a special hat, glasses or a rare item
            all of these will be available to buy here using STX or $FUN tokens!
          </p>
          <button className='connect-wallet-btn'>Connect wallet</button>
        </div>
        <div>
          <Lottie options={home_04} width={'100%'} />
        </div>
      </div>
      <DonutSlider />
    </div>
  )
}

export default Home
