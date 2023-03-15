// Hamburger menu
const openMenu = document.querySelector('.open-menu-icon');
const closeMenu = document.querySelector('.close-menu-icon');
const menuItems = document.querySelector('.menu-items');

openMenu.addEventListener('click', () => {
  menuItems.classList.add('display-flex-column');
  document.body.classList.add('no-scroll');
});
closeMenu.addEventListener('click', () => {
  menuItems.classList.remove('display-flex-column');
  document.body.classList.remove('no-scroll');
});

// Speakers
const speakers = [
  {
    imgSrc: '/images/harriet.png',
    name: 'Harriet Onoh',
    position: 'CEO AriesFotos',
    bio: "With a passion for capturing the beauty and diversity of the world. With a keen eye for detail and a love of all things Afro, Harriet's photography celebrates the vibrancy and richness of African culture.",
  },
  {
    imgSrc: '/images/obinna.png',
    name: 'Noble Chinwendu',
    position: 'Transactional Lawyer',
    bio: "A skilled transactional lawyer with a wealth of experience in corporate law. As a passionate foodie, when he's not providing expert legal advice to his clients, he's trying out the latest restaurant or whipping up a meal in his own kitchen.",
  },
  {
    imgSrc: '/images/winifred.png',
    name: 'Ogochukwu W. Edeh',
    position: 'CEO Winafric Clothings',
    bio: 'A talented fashion designer with a deep expertise in Afro textiles. Her designs celebrate the beauty and diversity of African cultures and empower people to express themselves through their clothing.',
  },
  {
    imgSrc: '/images/uzo.png',
    name: 'Uzoamaka Alor',
    position: 'Software Developer',
    bio: 'With a deep understanding of software engineering and a love for innovation, Jennifer is always at the forefront of technology development. Her passion for technology is a reflection of her creativity and her commitment to shaping the future.',
  },
  {
    imgSrc: '/images/peny.png',
    name: 'Chidiebere Ochu',
    position: 'CEO Ngworocks',
    bio: "An experienced tour guide with a love for adventure. With a deep knowledge of local history and a passion for exploration, he leads tours that are both informative and exciting, from taking visitors on a hike through the local wilderness or leading a walking tour of the city's historic landmarks.",
  },
  {
    imgSrc: '/images/harriet.png',
    name: 'Harriet Onoh',
    position: 'CEO AriesFotos',
    bio: 'with  richness of African culture.',
  },
];

const speakerContainer = document.getElementById('speakers-container');
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
      holder += '</span>';
      speakerContainer.innerHTML += holder;
    }
  } else {
    speakerContainer.innerHTML += speakerHtml;
  }
});

// See More, See Less Button
const seeMoreBtn = document.querySelector('.see-more-btn');
const seeMore = document.querySelector('.see-more');

seeMoreBtn.addEventListener('click', () => {
  const btnContent = seeMoreBtn.innerHTML;
  if (btnContent === 'SEE MORE <span> <i class="fa-solid fa-chevron-down"></i></span>' || btnContent === 'SEE MORE <span> <svg class="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-down"></i> Font Awesome fontawesome.com --></span>') {
    seeMore.classList.add('display-flex-column');
    seeMoreBtn.innerHTML = 'SEE LESS <span> <i class="fa-solid fa-chevron-up"></i></span>';
  } else if (btnContent === 'SEE LESS <span> <i class="fa-solid fa-chevron-up"></i></span>' || btnContent === 'SEE LESS <span> <svg class="svg-inline--fa fa-chevron-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg><!-- <i class="fa-solid fa-chevron-up"></i> Font Awesome fontawesome.com --></span>') {
    seeMore.classList.remove('display-flex-column');
    seeMoreBtn.innerHTML = 'SEE MORE <span> <i class="fa-solid fa-chevron-down"></i></span>';
  }
});
