const sellersItems = document.querySelectorAll(".sellers-item");

const showItems = () => {
  sellersItems.forEach(
    (item) =>
      (item.style.display =
        window.innerWidth < 1440 && !item.classList.contains("show-mob")
          ? "none"
          : "flex")
  );
};

sellersItems.forEach((item) => {
  if (!item.querySelector(".item-number")) {
    const p = document.createElement("p");
    p.className = "item-number";
    item.prepend(p);
  }
});

const items = document.querySelectorAll(".sellers-item .item-number");
const updateNumbers = () => {
  if (window.innerWidth < 1440) {
    let count = 0;
    items.forEach(
      (el) =>
        (el.textContent = el.parentElement.classList.contains("show-mob")
          ? (count += 1)
          : "")
    );
  } else {
    items.forEach((el, i) => (el.textContent = i + 1));
  }
};

showItems();
updateNumbers();

window.addEventListener("resize", showItems);
window.addEventListener("resize", updateNumbers);
