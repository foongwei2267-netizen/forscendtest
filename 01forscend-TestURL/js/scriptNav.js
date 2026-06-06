const companyFullName = 'Forscend LLP';
const companyName01 = 'FORCEND LLP';
const companyBrand01 = 'Forcend';
const companyEmail = 'forscend@outlook.com';
const companyPhone = '+65 8074 4548';
// const companyFax = '';
// const companyAddress1 = '';
// const companyAddress2 = '';
// const companyAddress3 = '';
// const companyCity = '';
// const companyState = '';
// const companyPostCode = '';
// const companyCountry = '';
// const companyRegId = '';
// const companyTaxId = '';



// Navigation Bar Sticky
const navBar01 = document.querySelector('.navbar01');
const hamBar = document.querySelectorAll('.ham_bar');
const logo = document.querySelector('.nav_logo');
const subMenu = document.querySelectorAll('.sub_menu');

if (navBar01) {
  window.addEventListener('scroll', () => {
    const isSticky = window.scrollY > navBar01.offsetHeight;

    navBar01.classList.toggle('sticky', isSticky);

    hamBar.forEach(hamBar => {
      hamBar.classList.toggle('sticky', isSticky);
    });

    if (logo) {
      logo.src = isSticky
        ? 'logo/f30_logo_cwl.png'
        : 'logo/f60_logo_wwl.png';
    }

    navItem.forEach(navItem => {
      navItem.classList.toggle('sticky', isSticky);
    })

    subMenu.forEach(subMenu => {
      subMenu.classList.toggle('sticky', isSticky);
    })

  });
}

// Manburger Menu
const hamMenu = document.querySelector('.ham_menu');
const navMenu = document.querySelector('.nav_menu');
const offMenu = document.querySelector('.off_menu');
const navItem = document.querySelectorAll('.nav_item');
//const offMenu = document.querySelectorAll('');

if (hamMenu && navMenu && offMenu) {
  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    offMenu.classList.toggle('active');
    navItem.forEach(navItem => {
      navItem.classList.toggle('active');
    }) 
  });
}


//const hamMenu = document.querySelector('.ham_menu');

//const navMenu = document.querySelector('.nav_menu');

//const offMenu = document.querySelector('.off_menu');

//hamMenu.addEventListener('click', () => {
//  hamMenu.classList.toggle('active');
//  offMenu.classList.toggle('active');
//  navMenu.classList.toggle('active');
//})


// Manburger Menu Closed - Click Outside
offMenu.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    navMenu.classList.remove('active');
    offMenu.classList.remove('active');

    navItem.forEach(item => {
      item.classList.remove('active');
    });
  });


  // flip card
  document.querySelectorAll('.flipcard').forEach(card => {
    card.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            card.classList.toggle('flipped');
        }
    });
});