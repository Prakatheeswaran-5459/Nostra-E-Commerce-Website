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


let searchInput = document.querySelector(".navbar-search input");
let checkboxes = document.querySelectorAll(
  ".filter-section input[type='checkbox']"
);

let products = document.querySelectorAll(".product");
function filterProducts() {
  let searchText = searchInput.value.toLowerCase(); 
  let selectedFilters = []; 
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedFilters.push(checkbox.value);
    }
  });


  products.forEach(function (product) {
    let productName = product.querySelector("h1").textContent.toLowerCase(); 
    let productTags = product
      .querySelector("p[style='visibility: hidden;']")
      .textContent.toLowerCase(); 

    
    let matchesSearch = productName.includes(searchText);
    let matchesFilter =
      selectedFilters.length === 0 ||
      selectedFilters.some((tag) => productTags.includes(tag));
    if (matchesSearch && matchesFilter) {
      product.style.display = "block"; 
    } else {
      product.style.display = "none"; 
    }
  });
}


searchInput.addEventListener("keyup", filterProducts);

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", filterProducts);
});

filterProducts();
