import React from 'react'
import Lottie from 'react-lottie';
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
import DonutSlider from "../layout/Slider";

import "../../assets/css/home.css"

const defaultOptions = {
 loop: true,
 autoplay: true, 
 rendererSettings: {
   preserveAspectRatio: 'xMidYMid slice'
 }
}
const Home = () => {
 const plane_landing={...defaultOptions, animationData:planeLanding}
  return (
    <div className='home-container'>
      {/* <Lottie options={plane_landing}
              height={'calc(100vh - 89px)'}
              width={'100%'}/> */}
      <DonutSlider />
    </div>
  )
}

export default Home
