(function() {
  const iceCreamUl = document.querySelector(".ice-cream-list");

  for (flavor of window.iceCreamFlavors) {
    const iceCreamLi = document.createElement("li");
    iceCreamLi.classList.add("ice-cream-flavor");
    iceCreamLi.innerText = flavor;
    iceCreamUl.appendChild(iceCreamLi);
  }
})();
