const leftButton = document.querySelector(".carousel-controler-left");
const rightButton = document.querySelector(".carousel-controler-right");
const carousel = document.querySelector(".carousel");

leftButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: -1000,
    behavior: "smooth",
  });
});

rightButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: 1000,
    behavior: "smooth",
  });
});

carousel.addEventListener("scroll", (e) => {
  console.log(e);
});
