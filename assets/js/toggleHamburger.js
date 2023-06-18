// Toggle Hamburger Icon
$(document).ready(function() {
    const ul = $('.header-nav-lists');
    const hamburger = $('.header-hamburger-icon');
  
    hamburger.on('click', () => {
      ul.toggleClass('show');
      hamburger.toggleClass('show');
    });
  });
  