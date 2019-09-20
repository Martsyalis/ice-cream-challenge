const $iceCreamList = $(".ice-cream-list");

window.iceCreamFlavors.forEach(flavor => {
  const $iceCreamItem = $("<li>")
    .attr("class", "ice-cream-flavor")
    .text(flavor);
  $iceCreamList.append($iceCreamItem);
});
