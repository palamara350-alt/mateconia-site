// MateConIA — comportamento del menu di navigazione
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Su schermi piccoli il hover non esiste: apriamo/chiudiamo i sottomenu al tocco.
  function isMobile() {
    return window.matchMedia("(max-width: 780px)").matches;
  }

  document.querySelectorAll(".nav-menu li.has-children > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (!isMobile()) return;
      var parentLi = link.parentElement;
      var submenu = parentLi.querySelector(":scope > .submenu");
      if (!submenu) return;
      e.preventDefault();
      var isOpen = submenu.style.display === "block";
      parentLi.parentElement.querySelectorAll(":scope > li > .submenu").forEach(function (s) {
        s.style.display = "none";
      });
      submenu.style.display = isOpen ? "none" : "block";
    });
  });
});
