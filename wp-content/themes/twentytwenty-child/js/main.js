"use strict";

;

(function () {
  window.onload = function () {
    var lastScrollTop = window.pageYOffset;
    var ballFirst = document.querySelector('.ball--fourth');
    var ballFirstPos = window.getComputedStyle(ballFirst).left;
    var start = false;
    var width = window.innerWidth;
    width = window.innerWidth - 143;
    window.addEventListener('scroll', function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        // console.log('Вниз');
        if (start) {
          // console.log('Видно');
          ballFirstPos = parseInt(ballFirstPos) + 25;

          if (ballFirstPos < width && ballFirstPos > 385) {
            ballFirst.style.left = ballFirstPos + 'px';
          }
        }
      } else {
        // console.log('Вверх');
        if (start) {
          // console.log('Видно');
          ballFirstPos = parseInt(ballFirstPos) - 30;

          if (ballFirstPos > 385 && ballFirstPos < width) {
            ballFirst.style.left = ballFirstPos + 'px';
          }
        }
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting === true) {
          // console.log('Видно');
          start = true;
        } else if (entry.isIntersecting === false) {// console.log('Не видно');
        }
      });
    });
    observer.observe(ballFirst);
  };
})();
// ;(function() {
//     const inputPhone = document.getElementById('modal__input-phone');
//     const inputName = document.getElementById('modal__input-name');
//     const feedback = document.querySelector('.feedback');
//     // const form = document.getElementById('form-call');
//     // const formSubmit = document.getElementById('form-call__submit');
//     inputPhone.addEventListener('input', validatePhone);
//     function validatePhone() {
//         const regEx = /^\+7\ \(?\d{3}\)?\ [-]?\d{3}[-]?\d{2}[-]?\d{2}$/;
//         if(!regEx.test(inputPhone.value)) {
//             feedback.classList.add('feedback--invalid');
//             return false;
//         } else {
//             feedback.classList.remove('feedback--invalid');
//             return true;
//         }
//     }
// })();
"use strict";
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var body = document.getElementsByTagName('body')[0];
  var menuLinks = document.querySelectorAll('.nav__link');
  var menu = document.querySelector('.header-top');
  var headerInner = document.querySelector('.header__inner');
  var screenWidth = window.screen.availWidth;

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    menu.classList.remove('header-top--open');
    headerInner.classList.remove('header__inner--active');
    body.classList.remove('no-scroll');
  }

  function mobileMenuShow() {
    hamburger.classList.add('active');
    menu.classList.add('header-top--open');
    headerInner.classList.add('header__inner--active');
    body.classList.add('no-scroll');
  }

  hamburger.addEventListener('click', mobileMenu);

  function mobileMenuLinkClick() {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenuHide();
      });
    });
  }

  mobileMenuLinkClick();

  function mobileMenu() {
    if (screenWidth >= 1200) {
      mobileMenuHide();
    }

    if (!hamburger.classList.contains('active')) {
      mobileMenuShow();
    } else {
      mobileMenuHide();
    }
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth >= 1200) {
      mobileMenuHide();
    }
  });
})();
"use strict";

;

(function () {
  var btnsCall = document.querySelectorAll('.btn--call');
  var btnApplication = document.querySelector('.btn--application');
  var btnBrief = document.querySelector('.btn--brief');
  var body = document.getElementsByTagName('body')[0];
  var html = body.parentNode;
  var overlay = document.querySelector('.overlay');
  var modal = document.querySelector('.modal');
  var modalThanks = document.querySelector('.modal--thanks');
  var modalClose = document.querySelector('.modal__close');
  var modalTitle = document.querySelector('.form__title');
  var modalSubtitle = document.querySelector('.form__subtitle');

  function modalShow() {
    overlay.classList.add('overlay--active');
    modal.classList.add('modal--active');
    body.classList.add('no-scroll');
    html.classList.add('html-overflow');
  }

  function modalHide() {
    overlay.classList.remove('overlay--active');
    modal.classList.remove('modal--active');
    body.classList.remove('no-scroll');
    html.classList.remove('html-overflow');
  }

  btnsCall.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modalTitle.textContent = 'Перезвонить вам?';
      modalSubtitle.textContent = 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время';
      modalShow();
    });
  });
  modalClose.addEventListener('click', modalHide);
  btnApplication.addEventListener('click', function () {
    modalTitle.textContent = 'Отправьте заявку';
    modalSubtitle.textContent = 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время';
    modalShow();
  });
  btnBrief.addEventListener('click', function () {
    modalTitle.textContent = 'Отправьте заявку';
    modalSubtitle.textContent = 'Оставьте свои контактные данные и мы пришлём вам бриф в ближайшее время';
    modalShow();
  });
})();
// ;(function() {
// //Задаем инпут
// const input = document.getElementById('modal__input-phone');
// //Функция маски инпута
//     function setMask(event) {
// //Задаем в переменную нажатую клавишу
//         let pressedKey;
// //Условие, проверяющее нажатую клавишу
//         event.keyCode && (pressedKey === event.keyCode);
// //Задаем в переменную позицию в инпуте, с которой будет доступен ввод цифр
//         let numberPos = this.selectionStart;
// //Устанавливаем возможность ввода цифр с третьей позиции       
//         if (numberPos < 3) {
//             event.preventDefault();
//         } 
// //Задаем внешний вид маски инпута
//         let maskType = '+7 (___) ___-__-__',
//             i = 0,
// //Проверка и замена value инпута по буквенно
//             replaceValue = maskType.replace(/\D/g, ''),
//             prevValue = this.value.replace(/\D/g, ''),
//             currentValue = maskType.replace(/[_\d]/g, (a) => {
//                 return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
//             });
// //Защита от стирания первых двух цифр (+7)            
//         i = currentValue.indexOf('_');
//         if (i != -1) {
//             i < 5 && (i = 3);
//             currentValue = currentValue.slice(0, i);
//         }
// //Регулярное выражение для проверки value инпута        
//         let reg = maskType.substr(0, this.value.length).replace(/_+/g,
//             function(a) {
//                 return '\\d{1,' + a.length + '}';
//             }).replace(/[+()]/g, '\\$&');
//         reg = new RegExp('^' + reg + '$');
// //Проверка содержимого инпута на регулярное выражение, длинну и нажимаемые клавиши
//         if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
//             this.value = currentValue;
//         } else if (event.type === 'blur' && this.value.length < 5) {
//             this.value = '';
//         }
// // Устанавливаем курсор в конец строки в инпуте, если при нажатии кнопки он стоит не в конце
//         input.setSelectionRange(input.value.length, input.value.length);
//     }
// //Запуск функции setMask через обработчик событий
// input.addEventListener('input', setMask, false);
// input.addEventListener('focus', setMask, false);
// input.addEventListener('blur', setMask, false);
// input.addEventListener('keydown', setMask, false);
// })();
"use strict";
// ;(function() {
//     const range = document.getElementById('range-slider');
//     const cardsList = document.querySelector('.cards-list');
//     let screenWidth = window.innerWidth;
//     range.addEventListener('input', rangeChange);
//     function rangeChange() {
//         cardsList.style.transform = `translateX(${-range.value}rem)`;
//     }
//     function screenWidthCalc(elem) {
//         let item;
//         if (screenWidth < 414) {
//             elem.setAttribute('max', 64);
//             item = elem.max;
//         } else if (screenWidth >= 414 && screenWidth < 560) {
//             elem.setAttribute('max', 85);
//             item = elem.max;
//         } else if (screenWidth >= 560 && screenWidth < 768) {
//             elem.setAttribute('max', 72);
//             item = elem.max;
//         } else if (screenWidth >= 768 && screenWidth < 1024) {
//             elem.setAttribute('max', 152);
//             item = elem.max;
//         } else if (screenWidth >= 1024 && screenWidth < 1200) {
//             elem.setAttribute('max', 126);
//             item = elem.max;
//         } else if (screenWidth >= 1200 && screenWidth < 1440) {
//             elem.setAttribute('max', 111);
//             item = elem.max;
//         } else if (screenWidth >= 1440 && screenWidth < 1920) {
//             elem.setAttribute('max', 83);
//             item = elem.max;
//         } else if (screenWidth >= 1920) {
//             elem.setAttribute('max', 60);
//             item = elem.max;
//         }
//     }
//     screenWidthCalc(range);
//     window.addEventListener('resize', () => {
//         screenWidth = window.innerWidth;
//         screenWidthCalc(range);
//     });
// })();
"use strict";
"use strict";

;

(function () {
  // var swiper = new Swiper('.swiper-container', {
  //     spaceBetween: 10,
  //     loop: true,
  //     centeredSlides: true,
  //     slidesPerView:'auto',
  //     loopedSlides: 1,
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //       hide: true,
  //     },
  //   });
  if (document.querySelector('.gallery-top')) {
    var mobileSlider = function mobileSlider() {
      if (window.innerWidth < 1200 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
          spaceBetween: 10,
          loop: true,
          // centeredSlides: true,
          slidesPerView: 1,
          loopedSlides: 1,
          // loopAdditionalSlides: 2,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              loopedSlides: 1,
              loop: true // loopAdditionalSlides: 2,

            },
            768: {
              slidesPerView: 2,
              loopedSlides: 1,
              loop: true,
              loopAdditionalSlides: 2
            }
          }
        });
        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth >= 1200) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          mySwiper.destroy();
        }
      }
    };

    var slider = document.querySelector('.swiper-container');
    var mySwiper;
    mobileSlider();
    window.addEventListener('resize', function () {
      mobileSlider();
    });
  }
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();