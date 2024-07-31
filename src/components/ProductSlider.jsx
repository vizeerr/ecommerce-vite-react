import PropTypes from 'prop-types'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import ProductCard from './ProductCard';
import productsCatalog from '../lib/dummyProduct/productsCatalog';

// Custom next arrow component for the slider
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowRoundForward
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#0000001c',
        color: '#000',
        borderRadius: '50px',
        padding: '3px',
        width: '35px',
        height: '35px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

// Prop validation for NextArrow component
NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

// Custom previous arrow component for the slider
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowRoundBack
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#0000001c',
        color: '#000',
        borderRadius: '50px',
        padding: '3px',
        width: '35px',
        height: '35px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

// Prop validation for PrevArrow component
PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function ProductSlider() {
  // Carousel Setting
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-12">
      <div className="inline-flex items-center mb-12 justify-between w-full px-3">
        <h1 className="sm:text-4xl font-medium text-center text-xl">
          | Trending Products
        </h1>
        <p className="sm:text-base text-xs text-blue-700 font-medium">View More</p>
      </div>

      <div className="slider-container w-[80vw] mx-auto sm:w-[90vw] xl:w-[90vw] lg:w-[95vw]">
        <Slider {...settings}>
          {productsCatalog.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSlider;
