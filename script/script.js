// Hamburger menu
const openMenu = document.querySelector(".open-menu-icon");
const closeMenu = document.querySelector(".close-menu-icon");
const menuItems = document.querySelector(".menu-items");
const navItems = document.querySelectorAll(".nav-item");

//Open Menu
openMenu.addEventListener("click", () => {
  menuItems.classList.add("display-flex-column");
  document.body.classList.add("no-scroll");
});

//Close menu
closeMenu.addEventListener("click", () => {
  menuItems.classList.remove("display-flex-column");
  document.body.classList.remove("no-scroll");
});

//Close menu when any link on the menu list is clicked
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    menuItems.classList.remove("display-flex-column");
    document.body.classList.remove("no-scroll");
  });
});

// Speakers
const speakers = [
  {
    imgSrc: "images/harriet.png",
    name: "Echezona Onoh",
    position: "CEO AriesFotos",
    bio: "With a passion for capturing the beauty and diversity of the world. With a keen eye for detail and a love of all things Afro, Harriet's photography celebrates the vibrancy and richness of African culture.",
  },
  {
    imgSrc: "images/obinna.png",
    name: "Noble Chinwendu",
    position: "Transactional Lawyer",
    bio: "A skilled transactional lawyer with a wealth of experience in corporate law. As a passionate foodie, when he's not providing expert legal advice to his clients, he's trying out the latest restaurant or whipping up a meal in his own kitchen.",
  },
  {
    imgSrc: "images/winifred.png",
    name: "Ogochukwu W. Edeh",
    position: "CEO Winafric Clothings",
    bio: "A talented fashion designer with a deep expertise in Afro textiles. Her designs celebrate the beauty and diversity of African cultures and empower people to express themselves through their clothing.",
  },
  {
    imgSrc: "images/uzo.png",
    name: "Uzoamaka Alor",
    position: "Software Developer",
    bio: "With a deep understanding of software engineering and a love for innovation, Uzoamaka is always at the forefront of technology development. Her passion for technology is a reflection of her creativity and her commitment to shaping the future.",
  },
  {
    imgSrc: "images/peny.png",
    name: "Chidiebere Ochu",
    position: "CEO Ngworocks",
    bio: "An experienced tour guide with a love for adventure. With a deep knowledge of local history and a passion for exploration, he leads tours that are both informative and exciting, from taking visitors on a hike through the local wilderness or leading a walking tour of the city's historic landmarks.",
  },
  {
    imgSrc: "images/ibrahim.png",
    name: "Ibrahim Ezeani",
    position: "Medical Lab Scientist",
    bio: "Enjoys exploring new destinations and cultures while incorporating his knowledge of health and wellness into his travels. Ibrahim is passionate about sharing his health tips and knowledge with others, hoping to inspire them to lead healthier and happier lives.",
  },
];

const speakerContainer = document.getElementById("speakers-container");
let holder = '<span class="see-more">';
speakers.forEach((speaker, index) => {
  const speakerHtml = `
    <div class="speaker">
      <div>
        <div class="speaker-image-container">
          <img src="${speaker.imgSrc}" alt="${speaker.name}">
        </div>
      </div>
      <div class="speaker-info-container">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="positions">${speaker.position}</p> <hr>
        <p class="speaker-about">${speaker.bio}</p>
      </div>
    </div>
  `;
  if (index > 1) {
    holder += speakerHtml;
    if (index === 5) {
      holder += "</span>";
      speakerContainer.innerHTML += holder;
    }
  } else {
    speakerContainer.innerHTML += speakerHtml;
  }
});

// See More, See Less Button
const seeMoreBtn = document.querySelector(".see-more-btn");
const seeMore = document.querySelector(".see-more");

seeMoreBtn.addEventListener("click", () => {
  if (!seeMore.classList.contains("display-flex-column")) {
    seeMore.classList.add("display-flex-column");
    seeMoreBtn.innerHTML =
      'SEE LESS <span> <i class="fa-solid fa-chevron-up"></i></span>';
  } else if (seeMore.classList.contains("display-flex-column")) {
    seeMore.classList.remove("display-flex-column");
    seeMoreBtn.innerHTML =
      'SEE MORE <span> <i class="fa-solid fa-chevron-down"></i></span>';
  }
});
