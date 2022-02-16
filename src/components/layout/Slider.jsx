import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import donut1 from "../../assets/images/donuts/donut1.png"
import donut2 from "../../assets/images/donuts/donut2.png"
import donut3 from "../../assets/images/donuts/donut3.png"

const REVIEWS = [
  {
    image: donut1,
  },
  {
    image: donut2,
  },
  {
    image: donut3,
  },
]

const DonutSlider = () => {
  return (
    <div className="review-slider-container">
             <marquee width="60%" direction="left" height="100px">

        {REVIEWS.map((item) => (
        <img src={item.image} />
        ))}     
            </marquee>

    </div>
  )
}
export default DonutSlider
