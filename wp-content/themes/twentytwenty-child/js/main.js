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
"use strict";

;

(function () {
  window.onload = function () {
    if (document.querySelector('.ball--fourth')) {
      var ballLeftPointSet = function ballLeftPointSet(obj, screenWidth) {
        for (var key in obj) {
          if (screenWidth >= +key) {
            ballLeftMovePoint = obj[key];
          }
        }
      };

      var moveBallRange = function moveBallRange(obj, screenWidth) {
        for (var key in obj) {
          if (screenWidth >= +key) {
            ballMoveWidth = obj[key];
          }
        }
      };

      var ballSpeed = function ballSpeed(obj, screenWidth) {
        for (var key in obj) {
          if (screenWidth >= +key) {
            ballMoveSpeed = obj[key];
          }
        }
      };

      var ballFirst = document.querySelector('.ball--fourth');
      var lastScrollTop = window.pageYOffset;
      var ballPosition = parseInt(window.getComputedStyle(ballFirst).left);
      var start = false;
      var ballLeftMovePoint;
      var ballMoveWidth;
      var ballMoveSpeed;
      var currentScreenWidth = window.innerWidth;
      var ballPositions = {
        '0': 5,
        '414': 41,
        '768': 30,
        '1440': 180
      };
      var moveBallWidth = {
        '320': 260,
        '414': 350,
        '768': 680,
        '1024': 920,
        '1440': 1300,
        '1920': 1550
      };
      var ballSpeedData = {
        '320': 5,
        '414': 10,
        '768': 15,
        '1024': 20,
        '1440': 25
      };
      ballLeftPointSet(ballPositions, currentScreenWidth);
      moveBallRange(moveBallWidth, currentScreenWidth);
      ballSpeed(ballSpeedData, currentScreenWidth);
      window.addEventListener('scroll', function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop && start) {
          ballPosition = ballPosition + ballMoveSpeed;
          console.log(ballPosition);

          if (ballPosition >= ballLeftMovePoint && ballPosition <= ballMoveWidth) {
            ballFirst.style.left = ballPosition + 'px';
          }
        }

        if (st < lastScrollTop && start) {
          ballPosition = ballPosition - ballMoveSpeed;
          console.log(ballPosition);

          if (ballPosition >= ballLeftMovePoint && ballPosition <= ballMoveWidth) {
            ballFirst.style.left = ballPosition + 'px';
          }
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      }, false);
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting === true) {
            start = true;
          } else if (entry.isIntersecting === false) {
            start = false;
          }
        });
      });
      observer.observe(ballFirst); // window.addEventListener('resize', () => {
      //     ballLeftPointSet(ballPositions, currentScreenWidth);
      //     moveBallRange(moveBallWidth, currentScreenWidth);
      //     ballSpeed(ballSpeedData, currentScreenWidth);
      // });
    }
  };
})();
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var body = document.getElementsByTagName('body')[0];
  var menuLinks = document.querySelectorAll('.nav__link');
  var menu = document.querySelector('.header-top');
  var header = document.querySelector('.header');
  var socialList = document.querySelector('.social-list');
  var html = body.parentNode;
  var screenWidth = screen.width;

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    header.classList.remove('header--open');
    socialList.classList.remove('social-list--mobile');
    menu.classList.remove('header-top--open');
    body.classList.remove('no-scroll');
    html.classList.remove('no-scroll');
  }

  function mobileMenuShow() {
    hamburger.classList.add('active');
    header.classList.add('header--open');
    socialList.classList.add('social-list--mobile');
    body.appendChild(menu);
    body.classList.add('no-scroll');
    html.classList.add('no-scroll');
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
    screenWidth = screen.width;

    if (screenWidth >= 1200) {
      mobileMenuHide();
    }
  });
})();
"use strict";

;

(function () {
  window.addEventListener('click', function (e) {
    if (e.target.parentNode.classList.contains('modal--thanks--active')) {
      e.target.parentNode.classList.remove('modal--thanks--active');
      document.querySelector('.overlay').classList.remove('overlay--active');
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
    modal_call_title: 'Обратная связь',
    modal_call_subtitle: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время',
    modal_form_id: 'form-call',
    phone_input_id: 'modal__input-phone'
  }];
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains(options[0].modal_call_btn)) {
      modalShow(options[0].modal_form_id, options[0].modal_call_title, options[0].modal_call_subtitle, options[0].phone_input_id);
    }
  });

  function modalShow(formID, modalTitle, modalSubtitle, phoneInputID) {
    modal += "\n            <div class=\"overlay overlay--active\">\n                <div class=\"modal\">\n                    <div class=\"modal__close\"></div>\n                        <form class=\"form-call\" id=\"".concat(formID, "\" method=\"post\" action=\"#\">\n                        <div class=\"form__title\">").concat(modalTitle, "</div>\n                        <div class=\"form__subtitle\">").concat(modalSubtitle, "</div>\n                        <input class=\"form__input-name\" type=\"text\" id=\"modal__input-name\" name=\"user-name\" placeholder=\"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F\">\n                        <span class=\"name-warning-message\">\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435!</span>\n                        <input class=\"form__input-phone\" type=\"text\" id=\"").concat(phoneInputID, "\" name=\"user-phone\" placeholder=\"+7 (___) ___-__-__\">\n                        <span class=\"phone-warning-message\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D!</span>\n                        <input class=\"form__input-email\" type=\"email\" name=\"user-email\" placeholder=\"\u0412\u0430\u0448 email\">\n                        <span class=\"email-warning-message\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B!</span>\n                        <textarea class=\"form__input-message\" id=\"modal__message\" placeholder=\"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438\"></textarea>\n                        <span class=\"comment-warning-message\">\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435!</span>\n                        <button class=\"btn btn-send\" type=\"submit\" id=\"form-call__submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button>\n                        <div class=\"form__policy\">\n                            <input class=\"form__checkbox\" type=\"checkbox\" id=\"modal__checkbox\" checked>\n                            <label class=\"form__policy-text\" for=\"modal__checkbox\">\u0412\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 &#160;<a class=\"form__policy-link\" href=\"#!\" target=\"_blank\">\u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a></label>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        ");
    div.innerHTML = modal;
    wrap.appendChild(div);
    body.classList.add('no-scroll');
    html.classList.add('html-overflow');
    document.querySelector('.modal').classList.remove('modal--close');
    document.querySelector('.modal').classList.add('modal--open');
    inputMask(document.getElementById(phoneInputID));
    document.querySelector('.form__input-name').addEventListener('input', function () {
      validName();
    });
    document.querySelector('.form__input-phone').addEventListener('input', function () {
      validPhone();
    });
    document.querySelector('.form__input-email').addEventListener('input', function () {
      validMail();
    });
    document.querySelector('.form__input-message').addEventListener('input', function () {
      validMessage();
    });
    document.querySelector('.btn-send').addEventListener('click', function () {
      formSend();
    });
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

  function validName() {
    var output = document.querySelector('.name-warning-message');
    var name = document.querySelector('.form__input-name').value;
    var valid;

    if (name == '') {
      output.classList.add('email-warning-message--invalid');
      document.querySelector('.btn-send').disabled = true;
      valid = false;
    } else {
      output.classList.remove('email-warning-message--invalid');
      document.querySelector('.btn-send').disabled = false;
      valid = true;
    }

    return valid;
  }

  function validMail() {
    var regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var output = document.querySelector('.email-warning-message');
    var mail = document.querySelector('.form__input-email').value;
    var valid = regExp.test(mail);

    if (!valid || mail == '') {
      output.classList.add('email-warning-message--invalid');
      document.querySelector('.btn-send').disabled = true;
    } else {
      output.classList.remove('email-warning-message--invalid');
      document.querySelector('.btn-send').disabled = false;
    }

    return valid;
  }

  function validPhone() {
    var regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    var output = document.querySelector('.phone-warning-message');
    var phone = document.querySelector('.form__input-phone').value;
    var valid = regExp.test(phone);

    if (!valid || phone == '') {
      output.classList.add('phone-warning-message--invalid');
      document.querySelector('.btn-send').disabled = true;
    } else {
      output.classList.remove('phone-warning-message--invalid');
      document.querySelector('.btn-send').disabled = false;
    }

    return valid;
  }

  function validMessage() {
    var output = document.querySelector('.comment-warning-message');
    var message = document.querySelector('.form__input-message').value;
    var valid;

    if (message == '') {
      output.classList.add('comment-warning-message--invalid');
      document.querySelector('.btn-send').disabled = true;
      valid = false;
      console.log(message);
      console.log(valid);
    } else {
      output.classList.remove('comment-warning-message--invalid');
      document.querySelector('.btn-send').disabled = false;
      valid = true;
      console.log(message);
      console.log(valid);
    }

    return valid;
  }

  function formSend() {
    var btnSend = document.querySelector('.btn-send');

    if (!validName() || !validPhone() || !validMail() || !validMessage()) {
      btnSend.disabled = true;
    } else {
      setTimeout(function () {
        modalThanks();
      }, 1000);
    }
  }

  var thanksModal = document.querySelector('.modal--thanks');
  var overlay = document.createElement('div'); // Открытие модалки благодарности

  function modalThanksOpen() {
    overlay.classList.add('overlay--thanks', 'overlay--thanks--active');
    thanksModal.classList.add('modal--thanks-active');
    wrap.appendChild(overlay);
    body.classList.add('no-scroll');
    html.classList.add('html-overflow');
  } // Закрытие модалки благодарности


  function modalThanksClose() {
    overlay.classList.remove('overlay--thanks', 'overlay--thanks--active');
    thanksModal.classList.remove('modal--thanks-active');

    if (document.querySelector('overlay--thanks')) {
      wrap.removeChild(overlay);
    }

    body.classList.remove('no-scroll');
    html.classList.remove('html-overflow');
  }

  window.addEventListener('click', function (e) {
    if (e.target.closest('.modal') && !e.target.closest('.modal__close')) {
      e.stopPropagation();
    } else if (e.target.closest('.overlay')) {
      document.querySelector('.modal').classList.add('modal--close');
      document.querySelector('.modal').classList.remove('modal--open');
      setTimeout(function () {
        modalHide();
      }, 400);
    }
  });
  window.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      if (document.querySelector('.modal--thanks')) {
        setTimeout(function () {
          modalThanksClose();
        }, 400);
      }

      if (document.querySelector('.modal')) {
        setTimeout(function () {
          modalHide();
        }, 400);
      }
    }
  });
  window.addEventListener('click', function (e) {
    if (e.target.closest('.modal--thanks') && !e.target.closest('.modal__close-thanks')) {
      e.stopPropagation();
    } else if (e.target.closest('.overlay--thanks')) {
      document.querySelector('.modal--thanks').classList.add('modal--close');
      document.querySelector('.modal--thanks').classList.remove('modal--open');
      setTimeout(function () {
        modalThanksClose();
      }, 400);
    }
  });
  document.querySelector('.modal__close-thanks').addEventListener('click', function () {
    setTimeout(function () {
      modalThanksClose();
    }, 400);
  });
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