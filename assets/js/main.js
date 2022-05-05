/******** SCRIPT DE APERTURA Y CIERRE DE MENU MOBILE******* */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** ContactForm ********** */

((d) => {
  let video = d.querySelector(".video-guid");
  window.addEventListener("scroll", function () {
    let value = 1 + window.scrollY / -600;
    video.style.opacity = value;
  });
})(document);
