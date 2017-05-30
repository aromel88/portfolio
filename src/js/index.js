
import '../css/styles.scss';

let nav;

const navSlide = () => {
  TweenLite.to(window, 0.8, {scrollTo: {y: '#toolbelt' }});
};

const init = () => {
  nav = document.querySelector('.nav-hover');
  nav.addEventListener('click', navSlide);
};

window.addEventListener('load', init);
