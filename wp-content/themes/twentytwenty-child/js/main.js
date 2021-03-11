"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function (e, n, A) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _typeof(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);
// ;(function() {
//     window.onload = () => {
//         let lastScrollTop = window.pageYOffset;
//         const ballFirst = document.querySelector('.ball--fourth');
//         let ballFirstPos = window.getComputedStyle(ballFirst).left;
//         let start = false;
//         let width = window.innerWidth - parseInt(getComputedStyle(ballFirst).width); 
//         console.log(width);
//             window.addEventListener('scroll', () => { 
//                 let st = window.pageYOffset || document.documentElement.scrollTop; 
//                 if (st > lastScrollTop && start) {
//                     // console.log('Вниз');
//                     ballFirstPos = parseInt(ballFirstPos) + 10;
//                     if (ballFirstPos < width && ballFirstPos >= 180) {
//                         ballFirst.style.left = ballFirstPos + 'px';
//                         console.log(ballFirstPos);
//                     } 
//                 }
//                 if (st < lastScrollTop && start) {
//                     // console.log('Вверх');
//                     ballFirstPos = parseInt(ballFirstPos) - 10;
//                     if (ballFirstPos >= 180 && ballFirstPos < width) {
//                         ballFirst.style.left = ballFirstPos + 'px';
//                         console.log(ballFirstPos); 
//                     } 
//                 }
//                 lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//             }, false);
//         let observer = new IntersectionObserver(function (entries) {
//             entries.forEach(function (entry) {
//                 if (entry.isIntersecting === true) {
//                     // console.log('Видно');
//                     start = true;
//                 } else if (entry.isIntersecting === false) {
//                     // console.log('Не видно');
//                 }
//             });
//         });
//         observer.observe(ballFirst);
//     }
// })();
//     let animation;
//     window.addEventListener('scroll', () => { 
//         let st = window.pageYOffset || document.documentElement.scrollTop; 
//         if (st > lastScrollTop) {
//             console.log('Вниз');
//             if (start) {
//                 console.log('Видно');
//                 ballFirstPos = parseInt(ballFirstPos) + 20;
//                 if (ballFirstPos < width && ballFirstPos > 180) {
//                     animation = anime({
//                         targets: '.ball--fourth',
//                         translateX: ballFirstPos + 'px'
//                     });
//                 } 
//             } 
//         } else if (st < lastScrollTop) {
//             console.log('Вверх');
//             if (start) {
//                 console.log('Видно');
//                 ballFirstPos = parseInt(ballFirstPos) - 20;
//                 if (ballFirstPos > 180 && ballFirstPos < width) {
//                     animation = anime({
//                         targets: '.ball--fourth',
//                         translateX: ballFirstPos + 'px' 
//                     });
//                 } 
//             }
//         }
//         lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//     }, false);
"use strict";
// ;(function() {
//     // Проверяем, можно ли использовать Webp формат
//     function canUseWebp() {
//         // Создаем элемент canvas
//         let elem = document.createElement('canvas');
//         // Приводим элемент к булеву типу
//         if (!!(elem.getContext && elem.getContext('2d'))) {
//             // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
//             return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
//         }
//         // Иначе Webp не используем
//         return false;
//     }
//     window.onload = function () {
//         // Получаем все элементы с дата-атрибутом data-bg
//         let images = document.querySelectorAll('[data-bg]');
//         // Проходимся по каждому
//         for (let i = 0; i < images.length; i++) {
//             // Получаем значение каждого дата-атрибута
//             let image = images[i].getAttribute('data-bg');
//             // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
//             images[i].style.backgroundImage = 'url(' + image + ')';
//         }
//         // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
//         let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
//         let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;
//         // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
//         if (canUseWebp() || firefoxVer >= 65) {
//             // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
//             let imagesWebp = document.querySelectorAll('[data-bg-webp]');
//             for (let i = 0; i < imagesWebp.length; i++) {
//                 let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
//                 imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
//             }
//         }
//     };
// })();
"use strict";
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var body = document.getElementsByTagName('body')[0];
  var menuLinks = document.querySelectorAll('.nav__link');
  var menu = document.querySelector('.header-top');
  var header = document.querySelector('.header');
  var screenWidth = window.screen.availWidth;

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    header.classList.remove('header--open');
    menu.classList.remove('header-top--open');
    body.classList.remove('no-scroll');
  }

  function mobileMenuShow() {
    hamburger.classList.add('active');
    header.classList.add('header--open');
    body.appendChild(menu);
    body.classList.add('no-scroll');
    setTimeout(function () {
      menu.classList.add('header-top--open');
    }, 500);
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
  var body = document.getElementsByTagName('body')[0];
  var html = body.parentNode;
  var wrap = document.querySelector('.wrap-feedback');
  var modal = '';
  var div = document.createElement('div');
  div.classList.add('current-modal');
  var options = [{
    modal_call_btn: 'btn--call',
    modal_call_title: 'Перезвонить вам?',
    modal_call_subtitle: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время',
    modal_form_id: 'form-call',
    phone_input_id: 'modal__input-phone'
  }, {
    modal_brief_btn: 'btn--brief',
    modal_brief_title: 'Отправьте заявку',
    modal_brief_subtitle: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время',
    modal_form_id: 'form-brief',
    phone_input_id: 'modal__input-phone'
  }];
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains(options[0].modal_call_btn)) {
      modalShow(options[0].modal_form_id, options[0].modal_call_title, options[0].modal_call_subtitle, options[0].phone_input_id);
    }

    if (e.target.classList.contains(options[1].modal_brief_btn)) {
      modalShow(options[1].modal_form_id, options[1].modal_brief_title, options[1].modal_brief_subtitle, options[1].phone_input_id);
    }

    if (e.target.classList.contains('modal__close')) {
      modalHide();
    }
  });

  function modalShow(formID, modalTitle, modalSubtitle, phoneInputID) {
    modal += "\n            <div class=\"overlay overlay--active\">\n                <div class=\"modal\">\n                    <div class=\"modal__close\"></div>\n                        <form class=\"form-call\" id=\"".concat(formID, "\" method=\"post\" action=\"#\">\n                        <div class=\"form__title\">").concat(modalTitle, "</div>\n                        <div class=\"form__subtitle\">").concat(modalSubtitle, "</div>\n                        <input class=\"form__input-name\" type=\"text\" id=\"modal__input-name\" name=\"user-name\" placeholder=\"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F\">\n                        <input class=\"form__input-phone\" type=\"text\" id=\"").concat(phoneInputID, "\" name=\"user-phone\" placeholder=\"+7 (___) ___-__-__\">\n                        <div class=\"feedback\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</div>\n                        <input class=\"btn form-call__submit\" type=\"submit\" id=\"form-call__submit\" value=\"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443\">\n                        <div class=\"form__policy\">\n                            <input class=\"form__checkbox\" type=\"checkbox\" id=\"modal__checkbox\" checked>\n                            <label class=\"form__policy-text\" for=\"modal__checkbox\">\u0412\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 &#160;<a class=\"form__policy-link\" href=\"#!\" target=\"_blank\">\u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a></label>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        ");
    div.innerHTML = modal;
    wrap.appendChild(div);
    body.classList.add('no-scroll');
    html.classList.add('html-overflow');
    inputMask(document.getElementById(phoneInputID));
  }

  function modalHide() {
    modal = '';
    wrap.removeChild(div);
    body.classList.remove('no-scroll');
    html.classList.remove('html-overflow');
  }

  function inputMask(input) {
    function setMask(event) {
      var pressedKey;
      event.keyCode && pressedKey === event.keyCode;
      input.setSelectionRange(input.value.length, input.value.length);
      var maskType = '+7 (___) ___-__-__',
          i = 0,
          replaceValue = maskType.replace(/\D/g, ''),
          prevValue = this.value.replace(/\D/g, ''),
          currentValue = maskType.replace(/[_\d]/g, function (a) {
        return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
      });
      i = currentValue.indexOf('_');

      if (i != -1) {
        i < 5 && (i = 3);
        currentValue = currentValue.slice(0, i);
      }

      var reg = maskType.substr(0, this.value.length).replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');

      if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
        this.value = currentValue;
      } else if (event.type === 'blur' && this.value.length < 5) {
        this.value = '';
      }

      input.setSelectionRange(input.value.length, input.value.length);
    }

    input.addEventListener('input', setMask, false);
    input.addEventListener('focus', setMask, false);
    input.addEventListener('blur', setMask, false);
    input.addEventListener('keydown', setMask, false);
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.gallery-top')) {
    var mobileSlider = function mobileSlider() {
      if (window.innerWidth < 1200 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
          spaceBetween: 10,
          slidesPerView: 1,
          loopedSlides: 1,
          initialSlide: -1,
          loop: true,
          breakpoints: {
            320: {
              spaceBetween: 10,
              slidesPerView: 1,
              loopedSlides: 1,
              initialSlide: -1,
              loop: true,
              scrollbar: {
                el: '.swiper-scrollbar',
                hide: false
              }
            },
            768: {
              slidesPerView: 2,
              loopedSlides: 1,
              initialSlide: -1,
              loop: true,
              scrollbar: {
                el: '.swiper-scrollbar',
                hide: false
              }
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