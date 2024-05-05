const exit = document.querySelector(".exit");
const navBtn = document.querySelector(".nav-menu");
const navMenuLists = document.querySelector(".nav-lists");
const navMenuList = document.querySelectorAll(".nav-list");

navBtn.addEventListener("click", () => {
  navBtn.style.display = "none";
  navMenuLists.style.display = "flex";
});
exit.addEventListener("click", () => {
  navBtn.style.display = "flex";
  navMenuLists.style.display = "none";
});

navMenuList.forEach((navList) => {
  navList.addEventListener("click", () => {
    navMenuList.forEach((nav) => {
      nav.classList.remove("active");
    });
    navList.classList.add("active");
  });
});
