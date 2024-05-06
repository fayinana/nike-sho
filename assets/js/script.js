const exit = document.querySelector(".exit");
const navBtn = document.querySelector(".nav-menu");
const navMenuLists = document.querySelector(".nav-lists");
const navMenuList = document.querySelectorAll(".nav-list");

const selectedImg = document.querySelector(".select-images");
const yearVertical = document.querySelector(".vertival-year");
const date = new Date();
yearVertical.innerHTML = date.getFullYear();
innerHtml = "";
htmlGenerator();
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

function htmlGenerator() {
  Shoes.forEach((shoe) => {
    innerHtml += `
	  <div class="select-image" data-type = "${shoe.type}">
		<div class="inner">
			<img src=${shoe.imgPath} alt="">
		</div>
	  </div>`;
  });
  selectedImg.innerHTML = innerHtml;
  changeImage(selectedImg);
}

function changeImage(selectedImg) {
  const images = selectedImg.querySelectorAll(".select-image");
  addBcColor(images[0]);
  images.forEach((image) => {
    image.addEventListener("click", () => {
      images.forEach((img) => {
        img.style.background = "white";
      });
      let type = image.dataset.type;
      addBcColor(image, type);
    });
  });
}

function addBcColor(image, type = "1") {
  Shoes.forEach((shoe) => {
    if (type == shoe.type) {
      bannerImg = document.querySelector(".banner-image img");
      image.style.background = shoe.color;
      bannerImg.src = `${shoe.imgPath}`;
    }
  });
}
