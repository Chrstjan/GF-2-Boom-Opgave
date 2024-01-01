const burgerBtn = document.getElementById("hamburger");
const burgerMenu = document.querySelectorAll(".main-list li");
let isOpen = false;

burgerBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  burgerMenu.forEach((li) => {
    li.classList.toggle("burger-content");
  });
});
