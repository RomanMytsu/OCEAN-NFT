import Swiper from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.14,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    
  },
});

