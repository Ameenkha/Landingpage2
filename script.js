const main = document.getElementById("main");
const hiddenImages = document.getElementById("hidden-images");

main.addEventListener("mouseover", () => {
  hiddenImages.style.display = "block";
});

main.addEventListener("mouseout", () => {
  hiddenImages.style.display = "none";
});
