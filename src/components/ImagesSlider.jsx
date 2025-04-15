import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS

const ProjectSlider = ({ images }) => {
  // Settings for react-slick
  const settings = {
    // dots: true, 
    infinite: true,
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    pauseOnHover: true, 
    arrows: false, 
    adaptiveHeight: true, 
    responsive: [
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <h3 className="text-lg font-bold mb-2">Screenshots</h3>
      <Slider {...settings}>
        {images.map((img, imgIndex) => (
          <div className="mx-4" key={imgIndex}>
            <img
              src={img}
              alt={`screenshot ${imgIndex + 1}`}
              className="w-full md:w-[90%] h-full object-cover rounded-md hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};



export default ProjectSlider;