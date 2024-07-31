import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/images/slide1.webp"
import slide2 from "../assets/images/slide2.webp"
import slide3 from "../assets/images/slide3.webp"
import slide4 from "../assets/images/slide4.webp"


export function ProductBanner() {
    // Carousel Setting
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrow:false,
  };

  return (
    <div className="mt-5 shadow-lg">
       <Slider {...settings}>
       <img src={ slide1} alt=""/>
        <img src={ slide2} alt=""/>
        <img src={ slide4} alt=""/>
        <img src={ slide3} alt=""/>

      
    </Slider>
    </div>
  );
}
