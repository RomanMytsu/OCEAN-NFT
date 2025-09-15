import Swiper from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});
