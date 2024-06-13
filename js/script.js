const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("bg-gray-900");
    nav.classList.remove("bg-none");
  } else {
    nav.classList.add("bg-none");
    nav.classList.remove("bg-gray-900");
  }
});
