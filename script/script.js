// Hamburger menu 
const openMenu = document.querySelector(".open-menu-icon");
const closeMenu = document.querySelector(".close-menu-icon");
const menuItems = document.querySelector(".menu-items");

openMenu.addEventListener("click", () => {
  menuItems.classList.add("display-flex-column");
});
closeMenu.addEventListener("click", () => {
  menuItems.classList.remove("display-flex-column");
});


// Speakers
const seeMoreBtn = document.querySelector(".see-more-btn");
const seeMore = document.querySelector(".see-more");

seeMoreBtn.addEventListener("click", () => {
  const btnContent = seeMoreBtn.innerHTML;
  console.log(btnContent);
  if (btnContent === `SEE MORE <span> <i class="fa-solid fa-chevron-down"></i></span>` || btnContent === `SEE MORE <span> <svg class="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-down"></i> Font Awesome fontawesome.com --></span>`) {
    seeMore.classList.add('display-flex-column');
    seeMoreBtn.innerHTML = `SEE LESS <span> <i class="fa-solid fa-chevron-up"></i></span>`;
  } else if (btnContent === `SEE LESS <span> <i class="fa-solid fa-chevron-up"></i></span>` || btnContent === `SEE LESS <span> <svg class="svg-inline--fa fa-chevron-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg><!-- <i class="fa-solid fa-chevron-up"></i> Font Awesome fontawesome.com --></span>`){
    seeMore.classList.remove('display-flex-column');
    seeMoreBtn.innerHTML = `SEE MORE <span> <i class="fa-solid fa-chevron-down"></i></span>`;
  }
});


