/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
  function(e, t, n) {
    function r(n) {
      var r = t.console;
      i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }

    function a(t, a, i, o) {
      if (Object.defineProperty) try { return Object.defineProperty(t, a, { configurable: !0, enumerable: !0, get: function() { return r(o), i }, set: function(e) { r(o), i = e } }), n } catch (s) {}
      e._definePropertyBroken = !0, t[a] = i
    }
    var i = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() { i = {}, e.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", { size: 1 }).attr("size") && e.attrFn,
      s = e.attr,
      u = e.attrHooks.value && e.attrHooks.value.get || function() { return null },
      c = e.attrHooks.value && e.attrHooks.value.set || function() { return n },
      l = /^(?:input|button)$/i,
      d = /^[238]$/,
      p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
      var c = a.toLowerCase(),
        g = t && t.nodeType;
      return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = { get: function(t, r) { var a, i = e.prop(t, r); return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n }, set: function(t, n, r) { var a; return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r } }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    }, e.attrHooks.value = {
      get: function(e, t) {
        var n = (e.nodeName || "").toLowerCase();
        return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
      },
      set: function(e, t) {
        var a = (e.nodeName || "").toLowerCase();
        return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
      }
    };
    var g, h, v = e.fn.init,
      m = e.parseJSON,
      y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) { var i; return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments) }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) { return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null) }, e.uaMatch = function(e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
      function t(e, n) { return new t.fn.init(e, n) }
      e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) { return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n) }, t.fn.init.prototype = t.fn;
      var n = t(document);
      return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({ converters: { "text json": e.parseJSON } });
    var b = e.fn.data;
    e.fn.data = function(t) { var a, i, o = this[0]; return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i) };
    var j = /\/(java|ecma)script/i,
      w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() { return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments) }, e.clean || (e.clean = function(t, a, i, o) {
      a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
      var s, u, c, l, d = [];
      if (e.merge(d, e.buildFragment(t, a).childNodes), i)
        for (c = function(e) { return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
      return d
    });
    var Q = e.event.add,
      x = e.event.remove,
      k = e.event.trigger,
      N = e.fn.toggle,
      T = e.fn.live,
      M = e.fn.die,
      S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      C = RegExp("\\b(?:" + S + ")\\b"),
      H = /(?:^|\s)hover(\.\S+|)\b/,
      A = function(t) { return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1")) };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) { e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i) }, e.event.remove = function(e, t, n, r, a) { x.call(this, e, A(t) || "", n, r, a) }, e.fn.error = function() { var e = Array.prototype.slice.call(arguments, 0); return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this) }, e.fn.toggle = function(t, n) {
      if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
      r("jQuery.fn.toggle(handler, handler...) is deprecated");
      var a = arguments,
        i = t.guid || e.guid++,
        o = 0,
        s = function(n) { var r = (e._data(this, "lastToggle" + t.guid) || 0) % o; return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1 };
      for (s.guid = i; a.length > o;) a[o++].guid = i;
      return this.click(s)
    }, e.fn.live = function(t, n, a) {
      return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function(t, n) {
      return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function(e, t, n, a) { return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a) }, e.each(S.split("|"), function(t, n) { e.event.special[n] = { setup: function() { var t = this; return t !== document && (e.event.add(document, n + "." + e.guid, function() { e.event.trigger(n, null, t, !0) }), e._data(this, n, e.guid++)), !1 }, teardown: function() { return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1 } } })
  }(jQuery, window);
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=73a3bb7b03dba2a2e952)
 * Config saved to config.json and https://gist.github.com/73a3bb7b03dba2a2e952
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        s = i.data("bs.alert");
      s || i.data("bs.alert", s = new o(this)), "string" == typeof e && s[e].call(i)
    })
  }
  var i = '[data-dismiss="alert"]',
    o = function(e) {
      t(e).on("click", i, this.close)
    };
  o.VERSION = "3.2.0", o.prototype.close = function(e) {
    function i() {
      n.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
      s = o.attr("data-target");
    s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
    var n = t(s);
    e && e.preventDefault(), n.length || (n = o.hasClass("alert") ? o : o.parent()), n.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i())
  };
  var s = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() { return t.fn.alert = s, this }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.button"),
        n = "object" == typeof e && e;
      s || o.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
    })
  }
  var i = function(e, o) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1 };
  i.VERSION = "3.2.0", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) {
    var i = "disabled",
      o = this.$element,
      s = o.is("input") ? "val" : "html",
      n = o.data();
    e += "Text", null == n.resetText && o.data("resetText", o[s]()), o[s](null == n[e] ? this.options[e] : n[e]), setTimeout(t.proxy(function() {
      "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
    }, this), 0)
  }, i.prototype.toggle = function() {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
    }
    t && this.$element.toggleClass("active")
  };
  var o = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() { return t.fn.button = o, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var o = t(i.target);
    o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.carousel"),
        n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
        r = "string" == typeof e ? e : n.slide;
      s || o.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : r ? s[r]() : n.interval && s.pause().cycle()
    })
  }
  var i = function(e, i) {
    this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.2.0", i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }, i.prototype.keydown = function(t) {
    switch (t.which) {
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        return
    }
    t.preventDefault()
  }, i.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.to = function(e) {
    var i = this,
      o = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { i.to(e) }) : o == e ? this.pause().cycle() : this.slide(e > o ? "next" : "prev", t(this.$items[e]))
  }, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, i.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, i.prototype.slide = function(e, i) {
    var o = this.$element.find(".item.active"),
      s = i || o[e](),
      n = this.interval,
      r = "next" == e ? "left" : "right",
      a = "next" == e ? "first" : "last",
      l = this;
    if (!s.length) {
      if (!this.options.wrap) return;
      s = this.$element.find(".item")[a]()
    }
    if (s.hasClass("active")) return this.sliding = !1;
    var h = s[0],
      p = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r });
    if (this.$element.trigger(p), !p.isDefaultPrevented()) {
      if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var c = t(this.$indicators.children()[this.getItemIndex(s)]);
        c && c.addClass("active")
      }
      var d = t.Event("slid.bs.carousel", { relatedTarget: h, direction: r });
      return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(r), s.addClass(r), o.one("bsTransitionEnd", function() {
        s.removeClass([e, r].join(" ")).addClass("active"), o.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(d) }, 0)
      }).emulateTransitionEnd(1e3 * o.css("transition-duration").slice(0, -1))) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this
    }
  };
  var o = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() { return t.fn.carousel = o, this }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(i) {
    var o, s = t(this),
      n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
    if (n.hasClass("carousel")) {
      var r = t.extend({}, n.data(), s.data()),
        a = s.attr("data-slide-to");
      a && (r.interval = !1), e.call(n, r), a && n.data("bs.carousel").to(a), i.preventDefault()
    }
  }), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    e && 3 === e.which || (t(s).remove(), t(n).each(function() {
      var o = i(t(this)),
        s = { relatedTarget: this };
      o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || o.removeClass("open").trigger("hidden.bs.dropdown", s))
    }))
  }

  function i(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var o = i && t(i);
    return o && o.length ? o : e.parent()
  }

  function o(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.dropdown");
      o || i.data("bs.dropdown", o = new r(this)), "string" == typeof e && o[e].call(i)
    })
  }
  var s = ".dropdown-backdrop",
    n = '[data-toggle="dropdown"]',
    r = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
  r.VERSION = "3.2.0", r.prototype.toggle = function(o) {
    var s = t(this);
    if (!s.is(".disabled, :disabled")) {
      var n = i(s),
        r = n.hasClass("open");
      if (e(), !r) {
        "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
        var a = { relatedTarget: this };
        if (n.trigger(o = t.Event("show.bs.dropdown", a)), o.isDefaultPrevented()) return;
        s.trigger("focus"), n.toggleClass("open").trigger("shown.bs.dropdown", a)
      }
      return !1
    }
  }, r.prototype.keydown = function(e) {
    if (/(38|40|27)/.test(e.keyCode)) {
      var o = t(this);
      if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
        var s = i(o),
          r = s.hasClass("open");
        if (!r || r && 27 == e.keyCode) return 27 == e.which && s.find(n).trigger("focus"), o.trigger("click");
        var a = " li:not(.divider):visible a",
          l = s.find('[role="menu"]' + a + ', [role="listbox"]' + a);
        if (l.length) {
          var h = l.index(l.filter(":focus"));
          38 == e.keyCode && h > 0 && h--, 40 == e.keyCode && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
        }
      }
    }
  };
  var a = t.fn.dropdown;
  t.fn.dropdown = o, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = a, this }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
}(jQuery), + function(t) {
  "use strict";

  function e(e, o) {
    return this.each(function() {
      var s = t(this),
        n = s.data("bs.modal"),
        r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
      n || s.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](o) : r.show && n.show(o)
    })
  }
  var i = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this))
  };
  i.VERSION = "3.2.0", i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) {
    var i = this,
      o = t.Event("show.bs.modal", { relatedTarget: e });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
      var o = t.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
      var s = t.Event("shown.bs.modal", { relatedTarget: e });
      o ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
        i.$element.trigger("focus").trigger(s)
      }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(s)
    }))
  }, i.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }, i.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal") }, i.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() { t.$element.trigger("hidden.bs.modal") })
  }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) {
    var i = this,
      o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var s = t.support.transition && o;
      if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var n = function() { i.removeBackdrop(), e && e() };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n()
    } else e && e()
  }, i.prototype.checkScrollbar = function() { document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()) }, i.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", "") }, i.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var o = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() { return t.fn.modal = o, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var o = t(this),
      s = o.attr("href"),
      n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
      r = n.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(s) && s }, n.data(), o.data());
    o.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) { t.isDefaultPrevented() || n.one("hidden.bs.modal", function() { o.is(":visible") && o.trigger("focus") }) }), e.call(n, r, this)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.tooltip"),
        n = "object" == typeof e && e;
      (s || "destroy" != e) && (s || o.data("bs.tooltip", s = new i(this, n)), "string" == typeof e && s[e]())
    })
  }
  var i = function(t, e) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e) };
  i.VERSION = "3.2.0", i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, o) {
    this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
    for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
      var r = s[n];
      if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
      else if ("manual" != r) {
        var a = "hover" == r ? "mouseenter" : "focusin",
          l = "hover" == r ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
  }, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.getOptions = function(e) { return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() {
    var e = {},
      i = this.getDefaults();
    return this._options && t.each(this._options, function(t, o) { i[t] != o && (e[t] = o) }), e
  }, i.prototype.enter = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()
  }, i.prototype.leave = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide()
  }, i.prototype.show = function() {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var i = t.contains(document.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !i) return;
      var o = this,
        s = this.tip(),
        n = this.getUID(this.type);
      this.setContent(), s.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && s.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
        a = /\s?auto?\s?/i,
        l = a.test(r);
      l && (r = r.replace(a, "") || "top"), s.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
      var h = this.getPosition(),
        p = s[0].offsetWidth,
        c = s[0].offsetHeight;
      if (l) {
        var d = r,
          f = this.$element.parent(),
          u = this.getPosition(f);
        r = "bottom" == r && h.top + h.height + c - u.scroll > u.height ? "top" : "top" == r && h.top - u.scroll - c < 0 ? "bottom" : "right" == r && h.right + p > u.width ? "left" : "left" == r && h.left - p < u.left ? "right" : r, s.removeClass(d).addClass(r)
      }
      var g = this.getCalculatedOffset(r, h, p, c);
      this.applyPlacement(g, r);
      var v = function() { o.$element.trigger("shown.bs." + o.type), o.hoverState = null };
      t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(150) : v()
    }
  }, i.prototype.applyPlacement = function(e, i) {
    var o = this.tip(),
      s = o[0].offsetWidth,
      n = o[0].offsetHeight,
      r = parseInt(o.css("margin-top"), 10),
      a = parseInt(o.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(o[0], t.extend({ using: function(t) { o.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), o.addClass("in");
    var l = o[0].offsetWidth,
      h = o[0].offsetHeight;
    "top" == i && h != n && (e.top = e.top + n - h);
    var p = this.getViewportAdjustedDelta(i, e, l, h);
    p.left ? e.left += p.left : e.top += p.top;
    var c = p.left ? 2 * p.left - s + l : 2 * p.top - n + h,
      d = p.left ? "left" : "top",
      f = p.left ? "offsetWidth" : "offsetHeight";
    o.offset(e), this.replaceArrow(c, o[0][f], d)
  }, i.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
  }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, i.prototype.hide = function() {
    function e() { "in" != i.hoverState && o.detach(), i.$element.trigger("hidden.bs." + i.type) }
    var i = this,
      o = this.tip(),
      s = t.Event("hide.bs." + this.type);
    return this.$element.removeAttr("aria-describedby"), this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
  }, i.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, i.prototype.hasContent = function() { return this.getTitle() }, i.prototype.getPosition = function(e) {
    e = e || this.$element;
    var i = e[0],
      o = "BODY" == i.tagName;
    return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
      scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
      width: o ? t(window).width() : e.outerWidth(),
      height: o ? t(window).height() : e.outerHeight()
    }, o ? { top: 0, left: 0 } : e.offset())
  }, i.prototype.getCalculatedOffset = function(t, e, i, o) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - o / 2, left: e.left - i } : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
    var s = { top: 0, left: 0 };
    if (!this.$viewport) return s;
    var n = this.options.viewport && this.options.viewport.padding || 0,
      r = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var a = e.top - n - r.scroll,
        l = e.top + n - r.scroll + o;
      a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
    } else {
      var h = e.left - n,
        p = e.left + n + i;
      h < r.left ? s.left = r.left - h : p > r.width && (s.left = r.left + r.width - p)
    }
    return s
  }, i.prototype.getTitle = function() {
    var t, e = this.$element,
      i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
  }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t)); return t }, i.prototype.tip = function() { return this.$tip = this.$tip || t(this.options.template) }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, i.prototype.validate = function() { this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null) }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, i.prototype.destroy = function() {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  };
  var o = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = o, this }
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.popover"),
        n = "object" == typeof e && e;
      (s || "destroy" != e) && (s || o.data("bs.popover", s = new i(this, n)), "string" == typeof e && s[e]())
    })
  }
  var i = function(t, e) { this.init("popover", t, e) };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  i.VERSION = "3.2.0", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle(),
      i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, i.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, i.prototype.getContent = function() {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }, i.prototype.tip = function() { return this.$tip || (this.$tip = t(this.options.template)), this.$tip };
  var o = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() { return t.fn.popover = o, this }
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.tab");
      s || o.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
    })
  }
  var i = function(e) { this.element = t(e) };
  i.VERSION = "3.2.0", i.prototype.show = function() {
    var e = this.element,
      i = e.closest("ul:not(.dropdown-menu)"),
      o = e.data("target");
    if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var s = i.find(".active:last a")[0],
        n = t.Event("show.bs.tab", { relatedTarget: s });
      if (e.trigger(n), !n.isDefaultPrevented()) {
        var r = t(o);
        this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() { e.trigger({ type: "shown.bs.tab", relatedTarget: s }) })
      }
    }
  }, i.prototype.activate = function(e, i, o) {
    function s() {
      n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), o && o()
    }
    var n = i.find("> .active"),
      r = o && t.support.transition && n.hasClass("fade");
    r ? n.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s(), n.removeClass("in")
  };
  var o = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() { return t.fn.tab = o, this }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(i) { i.preventDefault(), e.call(t(this), "show") })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.affix"),
        n = "object" == typeof e && e;
      s || o.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
    })
  }
  var i = function(e, o) {
    this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.2.0", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var e = t(document).height(),
        o = this.$target.scrollTop(),
        s = this.$element.offset(),
        n = this.options.offset,
        r = n.top,
        a = n.bottom;
      "object" != typeof n && (a = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof a && (a = n.bottom(this.$element));
      var l = null != this.unpin && o + this.unpin <= s.top ? !1 : null != a && s.top + this.$element.height() >= e - a ? "bottom" : null != r && r >= o ? "top" : !1;
      if (this.affixed !== l) {
        null != this.unpin && this.$element.css("top", "");
        var h = "affix" + (l ? "-" + l : ""),
          p = t.Event(h + ".bs.affix");
        this.$element.trigger(p), p.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(h).trigger(t.Event(h.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({ top: e - this.$element.height() - a }))
      }
    }
  };
  var o = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() { return t.fn.affix = o, this }, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
      var i = t(this),
        o = i.data();
      o.offset = o.offset || {}, o.offsetBottom && (o.offset.bottom = o.offsetBottom), o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.collapse"),
        n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
      !s && n.toggle && "show" == e && (e = !e), s || o.data("bs.collapse", s = new i(this, n)), "string" == typeof e && s[e]()
    })
  }
  var i = function(e, o) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle() };
  i.VERSION = "3.2.0", i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, i.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var i = t.Event("show.bs.collapse");
      if (this.$element.trigger(i), !i.isDefaultPrevented()) {
        var o = this.$parent && this.$parent.find("> .panel > .in");
        if (o && o.length) {
          var s = o.data("bs.collapse");
          if (s && s.transitioning) return;
          e.call(o, "hide"), s || o.data("bs.collapse", null)
        }
        var n = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[n](0), this.transitioning = 1;
        var r = function() {
          this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
        };
        if (!t.support.transition) return r.call(this);
        var a = t.camelCase(["scroll", n].join("-"));
        this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350)[n](this.$element[0][a])
      }
    }
  }, i.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
        var o = function() {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350) : o.call(this)
      }
    }
  }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() };
  var o = t.fn.collapse;
  t.fn.collapse = e, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() { return t.fn.collapse = o, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
    var o, s = t(this),
      n = s.attr("data-target") || i.preventDefault() || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""),
      r = t(n),
      a = r.data("bs.collapse"),
      l = a ? "toggle" : s.data(),
      h = s.attr("data-parent"),
      p = h && t(h);
    a && a.transitioning || (p && p.find('[data-toggle="collapse"][data-parent="' + h + '"]').not(s).addClass("collapsed"), s[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(r, l)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(i, o) {
    var s = t.proxy(this.process, this);
    this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s), this.refresh(), this.process()
  }

  function i(i) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.scrollspy"),
        n = "object" == typeof i && i;
      s || o.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
    })
  }
  e.VERSION = "3.2.0", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
    var e = "offset",
      i = 0;
    t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var o = this;
    this.$body.find(this.selector).map(function() {
      var o = t(this),
        s = o.data("target") || o.attr("href"),
        n = /^#./.test(s) && t(s);
      return n && n.length && n.is(":visible") && [
        [n[e]().top + i, s]
      ] || null
    }).sort(function(t, e) { return t[0] - e[0] }).each(function() { o.offsets.push(this[0]), o.targets.push(this[1]) })
  }, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      o = this.options.offset + i - this.$scrollElement.height(),
      s = this.offsets,
      n = this.targets,
      r = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= o) return r != (t = n[n.length - 1]) && this.activate(t);
    if (r && e <= s[0]) return r != (t = n[0]) && this.activate(t);
    for (t = s.length; t--;) r != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t])
  }, e.prototype.activate = function(e) {
    this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      o = t(i).parents("li").addClass("active");
    o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
  };
  var o = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = o, this }, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
      var e = t(this);
      i.call(e, e.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
      e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
    for (var i in e)
      if (void 0 !== t.style[i]) return { end: e[i] };
    return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
      o = this;
    t(this).one("bsTransitionEnd", function() { i = !0 });
    var s = function() {
      i || t(o).trigger(t.support.transition.end)
    };
    return setTimeout(s, e), this
  }, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function(e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery);
/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
;
(function($) {
  "use strict";
  var methods = (function() {
    // private properties and methods go here
    var c = {
        bcClass: 'sf-breadcrumb',
        menuClass: 'sf-js-enabled',
        anchorClass: 'sf-with-ul',
        menuArrowClass: 'sf-arrows'
      },
      ios = (function() {
        var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (ios) {
          // iOS clicks only bubble as far as body children
          $(window).load(function() {
            $('body').children().on('click', $.noop);
          });
        }
        return ios;
      })(),
      wp7 = (function() {
        var style = document.documentElement.style;
        return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
      })(),
      toggleMenuClasses = function($menu, o) {
        var classes = c.menuClass;
        if (o.cssArrows) {
          classes += ' ' + c.menuArrowClass;
        }
        $menu.toggleClass(classes);
      },
      setPathToCurrent = function($menu, o) {
        return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + ' ' + c.bcClass).filter(function() {
          return ($(this).children(o.popUpSelector).hide().show().length);
        }).removeClass(o.pathClass);
      },
      toggleAnchorClass = function($li) {
        $li.children('a').toggleClass(c.anchorClass);
      },
      toggleTouchAction = function($menu) {
        var touchAction = $menu.css('ms-touch-action');
        touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
        $menu.css('ms-touch-action', touchAction);
      },
      applyHandlers = function($menu, o) {
        var targets = 'li:has(' + o.popUpSelector + ')';
        if ($.fn.hoverIntent && !o.disableHI) {
          $menu.hoverIntent(over, out, targets);
        } else {
          $menu.on('mouseenter.superfish', targets, over).on('mouseleave.superfish', targets, out);
        }
        var touchevent = 'MSPointerDown.superfish';
        if (!ios) {
          touchevent += ' touchend.superfish';
        }
        if (wp7) {
          touchevent += ' mousedown.superfish';
        }
        $menu.on('focusin.superfish', 'li', over).on('focusout.superfish', 'li', out).on(touchevent, 'a', o, touchHandler);
      },
      touchHandler = function(e) {
        var $this = $(this),
          $ul = $this.siblings(e.data.popUpSelector);
        if ($ul.length > 0 && $ul.is(':hidden')) {
          $this.one('click.superfish', false);
          if (e.type === 'MSPointerDown') {
            $this.trigger('focus');
          } else {
            $.proxy(over, $this.parent('li'))();
          }
        }
      },
      over = function() {
        var $this = $(this),
          o = getOptions($this);
        clearTimeout(o.sfTimer);
        $this.siblings().superfish('hide').end().superfish('show');
      },
      out = function() {
        var $this = $(this),
          o = getOptions($this);
        if (ios) {
          $.proxy(close, $this, o)();
        } else {
          clearTimeout(o.sfTimer);
          o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
        }
      },
      close = function(o) {
        o.retainPath = ($.inArray(this[0], o.$path) > -1);
        this.superfish('hide');
        if (!this.parents('.' + o.hoverClass).length) {
          o.onIdle.call(getMenu(this));
          if (o.$path.length) {
            $.proxy(over, o.$path)();
          }
        }
      },
      getMenu = function($el) {
        return $el.closest('.' + c.menuClass);
      },
      getOptions = function($el) {
        return getMenu($el).data('sf-options');
      };
    return {
      // public methods
      hide: function(instant) {
        if (this.length) {
          var $this = this,
            o = getOptions($this);
          if (!o) {
            return this;
          }
          var not = (o.retainPath === true) ? o.$path : '',
            $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
            speed = o.speedOut;
          if (instant) {
            $ul.show();
            speed = 0;
          }
          o.retainPath = false;
          o.onBeforeHide.call($ul);
          $ul.stop(true, true).animate(o.animationOut, speed, function() {
            var $this = $(this);
            o.onHide.call($this);
          });
        }
        return this;
      },
      show: function() {
        var o = getOptions(this);
        if (!o) {
          return this;
        }
        var $this = this.addClass(o.hoverClass),
          $ul = $this.children(o.popUpSelector);
        o.onBeforeShow.call($ul);
        $ul.stop(true, true).animate(o.animation, o.speed, function() {
          o.onShow.call($ul);
        });
        return this;
      },
      destroy: function() {
        return this.each(function() {
          var $this = $(this),
            o = $this.data('sf-options'),
            $hasPopUp;
          if (!o) {
            return false;
          }
          $hasPopUp = $this.find(o.popUpSelector).parent('li');
          clearTimeout(o.sfTimer);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          // remove event handlers
          $this.off('.superfish').off('.hoverIntent');
          // clear animation's inline display style
          $hasPopUp.children(o.popUpSelector).attr('style', function(i, style) {
            return style.replace(/display[^;]+;?/g, '');
          });
          // reset 'current' path classes
          o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
          $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
          o.onDestroy.call($this);
          $this.removeData('sf-options');
        });
      },
      init: function(op) {
        return this.each(function() {
          var $this = $(this);
          if ($this.data('sf-options')) {
            return false;
          }
          var o = $.extend({}, $.fn.superfish.defaults, op),
            $hasPopUp = $this.find(o.popUpSelector).parent('li');
          o.$path = setPathToCurrent($this, o);
          $this.data('sf-options', o);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          applyHandlers($this, o);
          $hasPopUp.not('.' + c.bcClass).superfish('hide', true);
          o.onInit.call(this);
        });
      }
    };
  })();
  $.fn.superfish = function(method, args) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
    }
  };
  $.fn.superfish.defaults = {
    popUpSelector: 'ul,.sf-mega', // within menu context
    hoverClass: 'sfHover',
    pathClass: 'overrideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: { opacity: 'show' },
    animationOut: { opacity: 'hide' },
    speed: 'normal',
    speedOut: 'fast',
    cssArrows: false,
    disableHI: false,
    onInit: $.noop,
    onBeforeShow: $.noop,
    onShow: $.noop,
    onBeforeHide: $.noop,
    onHide: $.noop,
    onIdle: $.noop,
    onDestroy: $.noop
  };
  // soon to be deprecated
  $.fn.extend({
    hideSuperfishUl: methods.hide,
    showSuperfishUl: methods.show
  });
})(jQuery);
! function(a, b, c, d) {
  function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Pipe, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }

  function f(a) { if (a.touches !== d) return { x: a.touches[0].pageX, y: a.touches[0].pageY }; if (a.touches === d) { if (a.pageX !== d) return { x: a.pageX, y: a.pageY }; if (a.pageX === d) return { x: a.clientX, y: a.clientY } } }

  function g(a) {
    var b, d, e = c.createElement("div"),
      f = a;
    for (b in f)
      if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
    return [!1]
  }

  function h() { return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

  function i() { return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

  function j() { return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

  function k() { return "ontouchstart" in b || !!navigator.msMaxTouchPoints }

  function l() { return b.navigator.msPointerEnabled }
  var m, n, o;
  m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, n = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Plugins = {}, e.Pipe = [{ filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, {
    filter: ["items", "settings"],
    run: function() {
      var a = this._clones,
        b = this.$stage.children(".cloned");
      (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      var a, b, c = this._clones,
        d = this._items,
        e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
      for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      var a, b, c, d = this.settings.rtl ? 1 : -1,
        e = (this.width() / this.settings.items).toFixed(3),
        f = 0;
      for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      var b, c, d = (this.width() / this.settings.items).toFixed(3),
        e = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
      if (this.$stage.css(e), e = { width: this.settings.autoWidth ? "auto" : d - this.settings.margin }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) { return a > 1 }).length > 0)
        for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
      else this.$stage.children().css(e)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      a.current && this.reset(this.$stage.children().index(a.current))
    }
  }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
    filter: ["width", "position", "items", "settings"],
    run: function() {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f,
        h = g + this.width() * e,
        i = [];
      for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
    }
  }], e.prototype.initialize = function() {
    if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
      var b, c, e;
      if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
    }
    this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
  }, e.prototype.setup = function() {
    var b = this.viewport(),
      c = this.options.responsive,
      d = -1,
      e = null;
    c ? (a.each(c, function(a) { b >= a && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) { return b.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }))
  }, e.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) {
    var c = this.trigger("prepare", { content: b });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data
  }, e.prototype.update = function() {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}
  }, e.prototype.width = function(a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function() {
    if (0 === this._items.length) return !1;
    (new Date).getTime();
    this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
  }, e.prototype.eventsCall = function() { this.e._onDragStart = a.proxy(function(a) { this.onDragStart(a) }, this), this.e._onDragMove = a.proxy(function(a) { this.onDragMove(a) }, this), this.e._onDragEnd = a.proxy(function(a) { this.onDragEnd(a) }, this), this.e._onResize = a.proxy(function(a) { this.onResize(a) }, this), this.e._transitionEnd = a.proxy(function(a) { this.transitionEnd(a) }, this), this.e._preventClick = a.proxy(function(a) { this.preventClick(a) }, this) }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() {
    return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
  }, e.prototype.eventsRouter = function(a) { var b = a.type; "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a) }, e.prototype.internalEvents = function() {
    var c = (k(), l());
    this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
  }, e.prototype.onDragStart = function(d) {
    var e, g, h, i;
    if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
    if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
    else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
    this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) { this.eventsRouter(a) }, this))
  }, e.prototype.onDragMove = function(a) {
    var c, e, g, h, i, j;
    this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
  }, e.prototype.onDragEnd = function(b) {
    var d, e, f;
    if (this.state.isTouch) {
      if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
      this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
    }
  }, e.prototype.removeClick = function(c) {
    this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
      a(c).off("click.preventClick")
    }, 300)
  }, e.prototype.preventClick = function(b) {
    b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
  }, e.prototype.getTransformProperty = function() {
    var a, c;
    return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
  }, e.prototype.closest = function(b) {
    var c = -1,
      d = 30,
      e = this.width(),
      f = this.coordinates();
    return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) { return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
  }, e.prototype.animate = function(b) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: b + "px" }) : this.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, e.prototype.current = function(a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", { property: { name: "position", value: a } });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
    }
    return this._current
  }, e.prototype.invalidate = function(a) { this._invalidated[a] = !0 }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(b, c) { var e = c ? this._items.length : this._items.length + this._clones.length; return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b)) }, e.prototype.relative = function(a) { return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) {
    var b, c, d, e = 0,
      f = this.settings;
    if (a) return this._items.length - 1;
    if (!f.loop && f.center) b = this._items.length - 1;
    else if (f.loop || f.center)
      if (f.loop || f.center) b = this._items.length + f.items;
      else {
        if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
        for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
          (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
      }
    else b = this._items.length - f.items;
    return b
  }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) {
    var c = this._clones.length / 2,
      e = c + this._items.length,
      f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 };
    return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null })
  }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c = null; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c) }, e.prototype.duration = function(a, b, c) { return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(c, d) {
    if (this.settings.loop) {
      var e = c - this.relative(this.current()),
        f = this.current(),
        g = this.current(),
        h = this.current() + e,
        i = 0 > g - h ? !0 : !1,
        j = this._clones.length + this._items.length;
      h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() { this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update() }, this), 30)
    } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
  }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.transitionEnd = function(a) { return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, e.prototype.viewport = function() {
    var d;
    if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
    else if (b.innerWidth) d = b.innerWidth;
    else {
      if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
      d = c.documentElement.clientWidth
    }
    return d
  }, e.prototype.replace = function(b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function(a, b) {
    b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", { content: a, position: b }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: a, position: b })
  }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.addTriggerableEvents = function() {
    var b = a.proxy(function(b, c) { return a.proxy(function(a) { a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c])) }, this) }, this);
    a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, a.proxy(function(a, c) { this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel")) }, this))
  }, e.prototype.watchVisibility = function() {
    function c(a) { return a.offsetWidth > 0 && a.offsetHeight > 0 }

    function d() { c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile)) }
    c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
  }, e.prototype.preloadAutoWidthImages = function(b) {
    var c, d, e, f;
    c = 0, d = this, b.each(function(g, h) { e = a(h), f = new Image, f.onload = function() { c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize()) }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina") })
  }, e.prototype.destroy = function() {
    this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
    for (var d in this._plugins) this._plugins[d].destroy();
    (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
  }, e.prototype.op = function(a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case "<":
        return d ? a > c : c > a;
      case ">":
        return d ? c > a : a > c;
      case ">=":
        return d ? c >= a : a >= c;
      case "<=":
        return d ? a >= c : c >= a
    }
  }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d) {
    var e = { item: { count: this._items.length, index: this.current() } },
      f = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
      g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c));
    return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(g) }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
  }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.browserSupport = function() {
    if (this.support3d = j(), this.support3d) {
      this.transformVendor = i();
      var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
      this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
    }
    this.state.orientation = b.orientation
  }, a.fn.owlCarousel = function(b) {
    return this.each(function() {
      a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
  var c = function(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
          for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) { this.load(b) }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
      }, this)
    }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  c.Defaults = { lazyLoad: !1 }, c.prototype.load = function(c) {
    var d = this._core.$stage.children().eq(c),
      e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, c.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
  var b = function(c) {
    this._core = c, this._handlers = {
      "initialized.owl.carousel": a.proxy(function() { this._core.settings.autoHeight && this.update() }, this),
      "changed.owl.carousel": a.proxy(function(a) { this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this),
      "loaded.owl.lazy": a.proxy(function(a) {
        this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
      }, this)
    }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, b.prototype.update = function() {
    this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
  }, b.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
  var d = function(b) {
    this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
      "resize.owl.carousel": a.proxy(function(a) { this._core.settings.video && !this.isInFullScreen() && a.preventDefault() }, this),
      "refresh.owl.carousel changed.owl.carousel": a.proxy(function() { this._playing && this.stop() }, this),
      "prepared.owl.carousel": a.proxy(function(b) {
        var c = a(b.content).find(".owl-video");
        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
      }, this)
    }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this))
  };
  d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, d.prototype.fetch = function(a, b) {
    var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
      d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight,
      g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
    else {
      if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
      c = "vimeo"
    }
    d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, d.prototype.thumbnail = function(b, c) {
    var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
      h = b.find("img"),
      i = "src",
      j = "",
      k = this._core.settings,
      l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) };
    return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }))
  }, d.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
  }, d.prototype.play = function(b) {
    this._core.trigger("play", null, "video"), this._playing && this.stop();
    var c, d, e = a(b.target || b.srcElement),
      f = e.closest("." + this._core.settings.itemClass),
      g = this._videos[f.attr("data-video")],
      h = g.width || "100%",
      i = g.height || this._core.$stage.height();
    "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
  }, d.prototype.isInFullScreen = function() {
    var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
  }, d.prototype.destroy = function() {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { this.swapping = "translated" == a.type }, this), "translate.owl.carousel": a.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
  e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() {
    if (1 === this.core.settings.items && this.core.support3d) {
      this.core.speed(0);
      var b, c = a.proxy(this.clear, this),
        d = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next),
        f = this.core.settings.animateIn,
        g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
    }
  }, e.prototype.clear = function(b) {
    a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
  }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
  var d = function(b) {
    this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
      "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
        this.autoplay()
      }, this),
      "play.owl.autoplay": a.proxy(function(a, b, c) { this.play(b, c) }, this),
      "stop.owl.autoplay": a.proxy(function() { this.stop() }, this),
      "mouseover.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this),
      "mouseleave.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this)
    }, this.core.$element.on(this.handlers)
  };
  d.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, d.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval) }, d.prototype.play = function() { return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, d.prototype.stop = function() { b.clearInterval(this.interval) }, d.prototype.pause = function() { b.clearInterval(this.interval) }, d.prototype.destroy = function() {
    var a, c;
    b.clearInterval(this.interval);
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
  "use strict";
  var b = function(c) {
    this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function(b) {
        this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this),
      "add.owl.carousel": a.proxy(function(b) {
        this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this),
      "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) { this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this),
      "change.owl.carousel": a.proxy(function(a) {
        if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var b = this._core.current(),
            c = this._core.maximum(),
            d = this._core.minimum();
          a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
        }
      }, this),
      "changed.owl.carousel": a.proxy(function(a) { "position" == a.property.name && this.draw() }, this),
      "refreshed.owl.carousel": a.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this)
    }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function() {
    var b, c, d = this._core.settings;
    d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
      var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(c, d.dotsSpeed)
    }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() { this.prev(d.navSpeed) }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() { this.next(d.navSpeed) }, this));
    for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
  }, b.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, b.prototype.update = function() {
    var a, b, c, d = this._core.settings,
      e = this._core.clones().length / 2,
      f = e + this._core.items().length,
      g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
    if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
      for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
  }, b.prototype.draw = function() {
    var b, c, d = "",
      e = this._core.settings,
      f = (this._core.$stage.children(), this._core.relative(this._core.current()));
    if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
      if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
        for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
        this._controls.$indicators.html(d)
      } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
      this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
    }
    this._controls.$indicators.toggle(e.dots)
  }, b.prototype.onTrigger = function(b) {
    var c = this._core.settings;
    b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) }
  }, b.prototype.current = function() {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, function(a) { return a.start <= b && a.end >= b }).pop()
  }, b.prototype.getPosition = function(b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, b.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, b.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, b.prototype.to = function(b, c, d) {
    var e;
    d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
  "use strict";
  var c = function(d) {
    this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function() {
        "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": a.proxy(function(b) {
        var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
        this._hashes[c] = b.content
      }, this)
    }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
      var a = b.location.hash.substring(1),
        c = this._core.$stage.children(),
        d = this._hashes[a] && c.index(this._hashes[a]) || 0;
      return a ? void this._core.to(d, !1, !0) : !1
    }, this))
  };
  c.Defaults = { URLhashListener: !1 }, c.prototype.destroy = function() {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
// Sticky Plugin
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.
(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;
        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement.css('position', '').css('top', '').removeClass(s.className);
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        } else {
          var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement.css('position', 'fixed').css('top', newTop).addClass(s.className);
            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);
          stickyId = stickyElement.attr('id');
          wrapper = $('<div></div>').attr('id', stickyId + '-sticky-wrapper').addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);
          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className
          });
        });
      },
      update: scroller
    };
  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }
  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);