
const showItems = document.querySelectorAll(".footer-menu-item");

if (window.innerWidth < 1439) {
  showItems.forEach((item) => {
    const title = item.querySelector(".footer-menu-item-title");
    const marker = item.querySelector(".footer-list-icon");
    const content = item.querySelector(".submenu");

    title.addEventListener("click", () => {
      show.forEach((i) => {
        if (i !== item) {
          i.querySelector(".submenu").classList.remove("active");
          i.querySelector(".footer-list-icon").classList.remove("active");
        }
      });

      content.classList.toggle("active");
      marker.classList.toggle("active");
    });
  });
}
