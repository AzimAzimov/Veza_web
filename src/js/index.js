
import { initHeader } from './_header';
import { initAbout } from './_about';
// import { initSlick } from './libs/slick';
// import { initPopup } from './_popup'
// import { initForms } from './_forms'

(function () {
  if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  try {
    initHeader();
    initAbout();
    // initForms();
    // initSlick();
  } catch (err) {
    console.log(err);
  }
  
})();