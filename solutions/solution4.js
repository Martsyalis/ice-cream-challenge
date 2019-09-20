//very similar to 3rd
(function() {
  const iceCreamUl = document.querySelector(".ice-cream-list");

  const flavorElementsString = window.iceCreamFlavors.reduce((acc, flavor) => {
    return acc + `<li class="ice-cream-flavor">${flavor}</li>`;
  }, "");

  iceCreamUl.innerHTML = flavorElementsString;
})();
