function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

let mixerPortfoilo = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView:2,
            
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
      
    },
});

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active")
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active")
        }
    })
}
window.addEventListener('scroll', scrollActive)

// var sections = document.querySelectorAll('section');
// onscroll = function() {
//     var scrollPosition = document.documentElement.scrollTop;
//     sections.forEach((section) => {
//         if (
//             scrollPosition >= section.offsetTop &&
//             scrollPosition < section.offsetTop + section.offsetHeight 
//         ) {
//             var currentId = section.attributes.id.value;
//             removeAllActiveClasses();
//             addActiveClass(currentId);
//         }
//     });
// };
// var removeAllActiveClasses = function () {
//     document.querySelectorAll('.nav__menu a').forEach((el) =>{
//         el.classList.remove("active");
//     });
// };

// var addActiveClass = function(id) {
//     console.log(id);
//     var selector = '.nav__menu a[href="#$[id]"]';
//     document.querySelector(selector).classList.add("active")
// };




const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay:700})
sr.reveal('.home__social, .home__scroll', {delay:900, origin: 'bottom'})

let options = {
    strings: ['Fullstack Developer', 'Web Developer', 'Mobile App Developer', 'Software Developer', 'Freelancer'],
    typeSpeed: 150,
    loop:true
};

let typed = new Typed('.home__education', options);