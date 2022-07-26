const loader = document.querySelector("#preloader");
const main = document.querySelector(".greetings-span");
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "inline-block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3200);
}
init();
