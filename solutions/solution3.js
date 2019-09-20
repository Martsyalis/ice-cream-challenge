const iceCreamUl = document.querySelector(".ice-cream-list");

const flavorElementArray = window.iceCreamFlavors.map(flavor => {
  return `<li class="ice-cream-flavor">${flavor}</li>`;
});

iceCreamUl.innerHTML = flavorElementArray.join("");
