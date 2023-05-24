import Title from "../UI/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-white text-primary flex items-center justify-center text-[30px] rounded-full"
        onClick={onClick}
      >
        <FaArrowCircleRight />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-white text-primary flex items-center justify-center text-[30px] rounded-full mr-2"
        onClick={onClick}
      >
        <FaArrowCircleLeft />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto my-20">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <div>
        <Slider {...settings}>
          <CustomerItem imgSrc="/images/client1.jpg" />
          <CustomerItem imgSrc="/images/client2.jpg" />
          <CustomerItem imgSrc="/images/client1.jpg" />
          <CustomerItem imgSrc="/images/client2.jpg" />
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
