document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("billing-toggle");
  const monthlyLabel = document.querySelector(".toggle-label.monthly");
  const yearlyLabel = document.querySelector(".toggle-label.yearly");
  const monthlyPrices = document.querySelectorAll(".monthly-price");
  const yearlyPrices = document.querySelectorAll(".yearly-price");
  const discountBadge = document.querySelector(".discount-badge");

  toggle.addEventListener("change", function () {
    if (this.checked) {
      // Switch to yearly
      monthlyLabel.classList.remove("active");
      yearlyLabel.classList.add("active");
      discountBadge.style.display = "block";

      monthlyPrices.forEach((price) => price.classList.add("hidden"));
      yearlyPrices.forEach((price) => price.classList.remove("hidden"));
    } else {
      // Switch to monthly
      yearlyLabel.classList.remove("active");
      monthlyLabel.classList.add("active");
      discountBadge.style.display = "none";

      yearlyPrices.forEach((price) => price.classList.add("hidden"));
      monthlyPrices.forEach((price) => price.classList.remove("hidden"));
    }
  });

  // Initialize with monthly pricing showing
  yearlyPrices.forEach((price) => price.classList.add("hidden"));
  discountBadge.style.display = "none";
});

// Mobile Nav Menu

const hamburger = document.querySelector(".hamburger");
const navLinksBox = document.querySelector(".mobile-links-box");
const openOutput = document.querySelector(".open-menu");
const closeOutput = document.querySelector(".close-menu");

openOutput.addEventListener("click", () => {
  navLinksBox.style.display = "block";
  navLinksBox.style.right = "0";
  openOutput.style.display = "none";
  closeOutput.style.display = "inline-block";
});

closeOutput.addEventListener("click", () => {
  navLinksBox.style.display = "none";
  navLinksBox.style.right = "-100%";
  closeOutput.style.display = "none";
  openOutput.style.display = "inline-block";
});

// Pop up

const openPopup = document.getElementById("open-pop-up");
const closePopup = document.getElementById("pop-up-close");
const popupOutput = document.querySelector(".pop-up");

openPopup.addEventListener("click", () => {
  popupOutput.style.display = "block";
});

closePopup.addEventListener("click", () => {
  popupOutput.style.display = "none";
});
