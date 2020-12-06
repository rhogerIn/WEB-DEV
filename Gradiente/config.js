const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
// Mostrar o MENU MOBILE ao clielar

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

/************************************************ */

/*Mostrar o HAMBURGERZIN quando estiver descendo a pagina */

const highlighMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#sobre-page');
  const servicesMenu = document.querySelector('#servico-page');

  let scrollPos = window.scrollY;

  //Adicionando aquela linha roxinha embaixo dos items do menu no NAVBAR
  if(window.innerWidth > 960 && scrollPos < 600){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')

    return 
  }else if(window.innerWidth > 960 && scrollPos < 1400){
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
  }
  else if(window.innerWidth > 960 && scrollPos < 2345){
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')

    return
  }

  if(elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
    elem.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highlighMenu)
window.addEventListener('click', highlighMenu)


// Fechar o MENU mobile quando clicar em algum item do MENU

const hideMenuMobi = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 768 && menuBars){
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMenuMobi)
navLogo.addEventListener('click', hideMenuMobi)