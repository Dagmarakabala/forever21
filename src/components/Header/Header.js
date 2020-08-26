import $ from 'jquery';

  var hamburger = {
    navToggle: document.querySelector('.header__toggle'),
    nav: document.querySelector('.menuMobile'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
 