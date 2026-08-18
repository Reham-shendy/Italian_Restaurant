const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  const height = window.innerHeight;
  if (window.scrollY >= height - 70) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const gallary = document.querySelector(".gallary");

leftBtn.addEventListener("click", () => {
  gallary.scrollLeft -= 600;
});
rightBtn.addEventListener("click", () => {
  gallary.scrollLeft += 600;
});

const menuRight = document.querySelector(".menu-right-btn");
const menuLeft = document.querySelector(".menu-left-btn");
const menuCards = document.querySelector(".menu-cards");

menuRight.addEventListener("click", () => {
  menuCards.scrollLeft += 500;
});
menuLeft.addEventListener("click", () => {
  menuCards.scrollLeft -= 500;
});

// ==========================================

const categoryButtons = document.querySelectorAll(".category");
const itemsContainer = document.querySelector(".menu-cards");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".category.active")?.classList.remove("active");

    button.classList.add("active");

    const category = button.dataset.category;

    const firstItem = document.querySelector(
      `.card[data-category="${category}"]`,
    );

    itemsContainer.scrollTo({
      left: firstItem.offsetLeft,
      behavior: "smooth",
    });
  });
});

// scrolling across drinks
const drinkCards = document.querySelectorAll(".drink-card");
const drinkTypes = document.querySelectorAll(".drink-types p");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

function updateDrinkCard() {
  drinkCards.forEach((card) => {
    card.classList.remove("show");
  });
  drinkTypes.forEach((type) => {
    type.classList.remove("active");
  });

  drinkCards[currentIndex].classList.add("show");
  drinkTypes[currentIndex].classList.add("active");
}

rightArrow.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= drinkCards.length) currentIndex = 0;
  updateDrinkCard();
});
leftArrow.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = drinkCards.length - 1;
  updateDrinkCard();
});

updateDrinkCard();
