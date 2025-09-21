import Swiper from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.13,
  spaceBetween: 24.56,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});
