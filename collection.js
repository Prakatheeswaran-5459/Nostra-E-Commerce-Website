var offerBar = document.querySelector(".offer-bar");

document.getElementById("offer-close").addEventListener(
  "click",

  function () {
    offerBar.style.display = "none";
  }
);

var sideNavMenu = document.getElementById("side-navbar-activate");
var sidenavbar = document.querySelector(".side-navbar");
sideNavMenu.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
  document.querySelector(".side-navbar").style.marginLeft = "-60%";
});


document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[name='tags']");
  const searchInput = document.querySelector(".navbar-search input");
  const products = document.querySelectorAll(".product");

  function filterProducts() {
      let selectedFilters = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.value);
      
      products.forEach(product => {
          let productTags = product.querySelector("p[style='visibility: hidden']").textContent.split(",");
          let matchesFilter = selectedFilters.length === 0 || selectedFilters.some(tag => productTags.includes(tag));
          
          let searchQuery = searchInput.value.toLowerCase();
          let matchesSearch = product.querySelector("h1").textContent.toLowerCase().includes(searchQuery);
          
          product.style.display = matchesFilter && matchesSearch ? "block" : "none";
      });
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterProducts));
  searchInput.addEventListener("input", filterProducts);
});