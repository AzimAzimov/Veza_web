
export const initHeader = () => {

  

  const navSlide = () => {
    const burger = document.querySelector('.header__mobile-menu');
    const nav = document.querySelector('.header__menu');
    const navLinks = document.querySelectorAll('.hader__nav li');
  
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      });
  
      burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => link.addEventListener('click', () => closeMenu()))

    function closeMenu (){
      nav.classList.remove('active')
      burger.classList.remove('toggle')
      body.classList.remove('lock')
    }
  }
  
  navSlide ();


//search 
  const searchBtn = document.querySelector('.header__search-btn');
  const searchBox = document.querySelector('.header__search-box');
  const searchInput = document.querySelector('.header__input');

  searchBtn.addEventListener('click', ()=> {
    searchBox.classList.toggle('active');
    searchInput.classList.toggle('active');
  })
  


  // const body = document.querySelector('body'),
  //        nav = document.querySelector('.header__nav'),
  //       menu = document.querySelector('.header__mobile-menu'),
  //     header = document.querySelector('header'),
  //  menuLinks = document.querySelectorAll('.header__menu>li');

  // menu.addEventListener('click', () => {
  //   nav.classList.toggle('active')
  //   body.classList.toggle('lock')
  // })

  // menuLinks.forEach((link) => link.addEventListener('click', ()=> closeMenu()))

  // function closeMenu (){
  //   nav.classList.remove('active')
  //   body.classList.remove('lock')
  // }

  // window.addEventListener('scroll', () =>{
  //   if(window.pageYOffset > 0){
  //     header.classList.add('scrolled');
  //   }else{
  //     header.classList.remove('scrolled');
  //   }
  // })

}