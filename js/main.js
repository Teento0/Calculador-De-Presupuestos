!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = e.length,
      n = ie.type(e);
    return (
      "function" !== n &&
      !ie.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t, n) {
    if (ie.isFunction(t))
      return ie.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return ie.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (fe.test(t)) return ie.filter(t, e, n);
      t = ie.filter(t, e);
    }
    return ie.grep(e, function (e) {
      return ie.inArray(e, t) >= 0 !== n;
    });
  }
  function i(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function o(e) {
    var t = (be[e] = {});
    return (
      ie.each(e.match(ye) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function a() {
    he.addEventListener
      ? (he.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1))
      : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s));
  }
  function s() {
    (he.addEventListener ||
      "load" === event.type ||
      "complete" === he.readyState) &&
      (a(), ie.ready());
  }
  function l(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(Ne, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : Ce.test(n)
                ? ie.parseJSON(n)
                : n));
        } catch (e) {}
        ie.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function u(e) {
    var t;
    for (t in e)
      if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function c(e, t, n, r) {
    if (ie.acceptData(e)) {
      var i,
        o,
        a = ie.expando,
        s = e.nodeType,
        l = s ? ie.cache : e,
        u = s ? e[a] : e[a] && a;
      if (
        (u && l[u] && (r || l[u].data)) ||
        void 0 !== n ||
        "string" != typeof t
      )
        return (
          u || (u = s ? (e[a] = J.pop() || ie.guid++) : a),
          l[u] ||
            (l[u] = s
              ? {}
              : {
                  toJSON: ie.noop,
                }),
          ("object" == typeof t || "function" == typeof t) &&
            (r
              ? (l[u] = ie.extend(l[u], t))
              : (l[u].data = ie.extend(l[u].data, t))),
          (o = l[u]),
          r || (o.data || (o.data = {}), (o = o.data)),
          void 0 !== n && (o[ie.camelCase(t)] = n),
          "string" == typeof t
            ? null == (i = o[t]) && (i = o[ie.camelCase(t)])
            : (i = o),
          i
        );
    }
  }
  function d(e, t, n) {
    if (ie.acceptData(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? ie.cache : e,
        s = o ? e[ie.expando] : ie.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          ie.isArray(t)
            ? (t = t.concat(ie.map(t, ie.camelCase)))
            : t in r
            ? (t = [t])
            : ((t = ie.camelCase(t)), (t = t in r ? [t] : t.split(" "))),
            (i = t.length);
          for (; i--; ) delete r[t[i]];
          if (n ? !u(r) : !ie.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, u(a[s]))) &&
          (o
            ? ie.cleanData([e], !0)
            : ne.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = null));
      }
    }
  }
  function f() {
    return !0;
  }
  function p() {
    return !1;
  }
  function h() {
    try {
      return he.activeElement;
    } catch (e) {}
  }
  function m(e) {
    var t = Me.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function g(e, t) {
    var n,
      r,
      i = 0,
      o =
        typeof e.getElementsByTagName !== Te
          ? e.getElementsByTagName(t || "*")
          : typeof e.querySelectorAll !== Te
          ? e.querySelectorAll(t || "*")
          : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
    return void 0 === t || (t && ie.nodeName(e, t)) ? ie.merge([e], o) : o;
  }
  function v(e) {
    De.test(e.type) && (e.defaultChecked = e.checked);
  }
  function y(e, t) {
    return ie.nodeName(e, "table") &&
      ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function b(e) {
    return (e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type), e;
  }
  function x(e) {
    var t = Ue.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function w(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"));
  }
  function T(e, t) {
    if (1 === t.nodeType && ie.hasData(e)) {
      var n,
        r,
        i,
        o = ie._data(e),
        a = ie._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, (a.events = {});
        for (n in s)
          for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = ie.extend({}, a.data));
    }
  }
  function C(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !ne.noCloneEvent && t[ie.expando])) {
        i = ie._data(t);
        for (r in i.events) ie.removeEvent(t, r, i.handle);
        t.removeAttribute(ie.expando);
      }
      "script" === n && t.text !== e.text
        ? ((b(t).text = e.text), x(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          ne.html5Clone &&
            e.innerHTML &&
            !ie.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && De.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  function N(t, n) {
    var r,
      i = ie(n.createElement(t)).appendTo(n.body),
      o =
        e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0]))
          ? r.display
          : ie.css(i[0], "display");
    return i.detach(), o;
  }
  function E(e) {
    var t = he,
      n = Ke[e];
    return (
      n ||
        ((n = N(e, t)),
        ("none" !== n && n) ||
          ((Qe = (
            Qe || ie("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement)),
          (t = (Qe[0].contentWindow || Qe[0].contentDocument).document),
          t.write(),
          t.close(),
          (n = N(e, t)),
          Qe.detach()),
        (Ke[e] = n)),
      n
    );
  }
  function k(e, t) {
    return {
      get: function () {
        var n = e();
        if (null != n)
          return n
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
      },
    };
  }
  function S(e, t) {
    if (t in e) return t;
    for (
      var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = dt.length;
      i--;

    )
      if ((t = dt[i] + n) in e) return t;
    return r;
  }
  function A(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
      (r = e[a]),
        r.style &&
          ((o[a] = ie._data(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (o[a] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                Se(r) &&
                (o[a] = ie._data(r, "olddisplay", E(r.nodeName))))
            : ((i = Se(r)),
              ((n && "none" !== n) || !i) &&
                ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
    for (a = 0; s > a; a++)
      (r = e[a]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function D(e, t, n) {
    var r = st.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function j(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      4 > o;
      o += 2
    )
      "margin" === n && (a += ie.css(e, n + ke[o], !0, i)),
        r
          ? ("content" === n && (a -= ie.css(e, "padding" + ke[o], !0, i)),
            "margin" !== n &&
              (a -= ie.css(e, "border" + ke[o] + "Width", !0, i)))
          : ((a += ie.css(e, "padding" + ke[o], !0, i)),
            "padding" !== n &&
              (a += ie.css(e, "border" + ke[o] + "Width", !0, i)));
    return a;
  }
  function L(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Ze(e),
      a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (
        ((i = et(e, t, o)),
        (0 > i || null == i) && (i = e.style[t]),
        nt.test(i))
      )
        return i;
      (r = a && (ne.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function H(e, t, n, r, i) {
    return new H.prototype.init(e, t, n, r, i);
  }
  function q() {
    return (
      setTimeout(function () {
        ft = void 0;
      }),
      (ft = ie.now())
    );
  }
  function _(e, t) {
    var n,
      r = {
        height: e,
      },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      (n = ke[i]), (r["margin" + n] = r["padding" + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  function M(e, t, n) {
    for (
      var r, i = (yt[t] || []).concat(yt["*"]), o = 0, a = i.length;
      a > o;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function F(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      l,
      u,
      c = this,
      d = {},
      f = e.style,
      p = e.nodeType && Se(e),
      h = ie._data(e, "fxshow");
    n.queue ||
      ((s = ie._queueHooks(e, "fx")),
      null == s.unqueued &&
        ((s.unqueued = 0),
        (l = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || l();
        })),
      s.unqueued++,
      c.always(function () {
        c.always(function () {
          s.unqueued--, ie.queue(e, "fx").length || s.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
        (u = ie.css(e, "display")),
        "inline" ===
          ("none" === u ? ie._data(e, "olddisplay") || E(e.nodeName) : u) &&
          "none" === ie.css(e, "float") &&
          (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName)
            ? (f.zoom = 1)
            : (f.display = "inline-block"))),
      n.overflow &&
        ((f.overflow = "hidden"),
        ne.shrinkWrapBlocks() ||
          c.always(function () {
            (f.overflow = n.overflow[0]),
              (f.overflowX = n.overflow[1]),
              (f.overflowY = n.overflow[2]);
          }));
    for (r in t)
      if (((i = t[r]), ht.exec(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (p ? "hide" : "show"))
        ) {
          if ("show" !== i || !h || void 0 === h[r]) continue;
          p = !0;
        }
        d[r] = (h && h[r]) || ie.style(e, r);
      } else u = void 0;
    if (ie.isEmptyObject(d))
      "inline" === ("none" === u ? E(e.nodeName) : u) && (f.display = u);
    else {
      h ? "hidden" in h && (p = h.hidden) : (h = ie._data(e, "fxshow", {})),
        o && (h.hidden = !p),
        p
          ? ie(e).show()
          : c.done(function () {
              ie(e).hide();
            }),
        c.done(function () {
          var t;
          ie._removeData(e, "fxshow");
          for (t in d) ie.style(e, t, d[t]);
        });
      for (r in d)
        (a = M(p ? h[r] : 0, r, c)),
          r in h ||
            ((h[r] = a.start),
            p &&
              ((a.end = a.start),
              (a.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function O(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = ie.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        ie.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = ie.cssHooks[r]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function B(e, t, n) {
    var r,
      i,
      o = 0,
      a = vt.length,
      s = ie.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (i) return !1;
        for (
          var t = ft || q(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = n / u.duration || 0,
            o = 1 - r,
            a = 0,
            l = u.tweens.length;
          l > a;
          a++
        )
          u.tweens[a].run(o);
        return (
          s.notifyWith(e, [u, o, n]),
          1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: ie.extend({}, t),
        opts: ie.extend(
          !0,
          {
            specialEasing: {},
          },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: ft || q(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = ie.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) u.tweens[n].run(1);
          return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
        },
      }),
      c = u.props;
    for (O(c, u.opts.specialEasing); a > o; o++)
      if ((r = vt[o].call(u, e, c, u.opts))) return r;
    return (
      ie.map(c, M, u),
      ie.isFunction(u.opts.start) && u.opts.start.call(e, u),
      ie.fx.timer(
        ie.extend(l, {
          elem: e,
          anim: u,
          queue: u.opts.queue,
        })
      ),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function P(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(ye) || [];
      if (ie.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r.charAt(0)
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function R(e, t, n, r) {
    function i(s) {
      var l;
      return (
        (o[s] = !0),
        ie.each(e[s] || [], function (e, s) {
          var u = s(t, n, r);
          return "string" != typeof u || a || o[u]
            ? a
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), i(u), !1);
        }),
        l
      );
    }
    var o = {},
      a = e === $t;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function W(e, t) {
    var n,
      r,
      i = ie.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && ie.extend(!0, e, n), e;
  }
  function $(e, t, n) {
    for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (a in s)
        if (s[a] && s[a].test(i)) {
          l.unshift(a);
          break;
        }
    if (l[0] in n) o = l[0];
    else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          o = a;
          break;
        }
        r || (r = a);
      }
      o = o || r;
    }
    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
  }
  function z(e, t, n, r) {
    var i,
      o,
      a,
      s,
      l,
      u = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = o),
        (o = c.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (!(a = u[l + " " + o] || u["* " + o]))
            for (i in u)
              if (
                ((s = i.split(" ")),
                s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]]))
              ) {
                !0 === a
                  ? (a = u[i])
                  : !0 !== u[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + l + " to " + o,
                };
              }
        }
    return {
      state: "success",
      data: t,
    };
  }
  function I(e, t, n, r) {
    var i;
    if (ie.isArray(t))
      ie.each(t, function (t, i) {
        n || Xt.test(e)
          ? r(e, i)
          : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== ie.type(t)) r(e, t);
    else for (i in t) I(e + "[" + i + "]", t[i], n, r);
  }
  function X() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function U() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function V(e) {
    return ie.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var J = [],
    Y = J.slice,
    G = J.concat,
    Q = J.push,
    K = J.indexOf,
    Z = {},
    ee = Z.toString,
    te = Z.hasOwnProperty,
    ne = {},
    re = "1.11.2",
    ie = function (e, t) {
      return new ie.fn.init(e, t);
    },
    oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ae = /^-ms-/,
    se = /-([\da-z])/gi,
    le = function (e, t) {
      return t.toUpperCase();
    };
  (ie.fn = ie.prototype =
    {
      jquery: re,
      constructor: ie,
      selector: "",
      length: 0,
      toArray: function () {
        return Y.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : Y.call(this);
      },
      pushStack: function (e) {
        var t = ie.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return ie.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          ie.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(Y.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: Q,
      sort: J.sort,
      splice: J.splice,
    }),
    (ie.extend = ie.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || ie.isFunction(a) || (a = {}),
            s === l && ((a = this), s--);
          l > s;
          s++
        )
          if (null != (i = arguments[s]))
            for (r in i)
              (e = a[r]),
                (n = i[r]),
                a !== n &&
                  (u && n && (ie.isPlainObject(n) || (t = ie.isArray(n)))
                    ? (t
                        ? ((t = !1), (o = e && ie.isArray(e) ? e : []))
                        : (o = e && ie.isPlainObject(e) ? e : {}),
                      (a[r] = ie.extend(u, o, n)))
                    : void 0 !== n && (a[r] = n));
        return a;
      }),
    ie.extend({
      expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === ie.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === ie.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !te.call(e, "constructor") &&
            !te.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        if (ne.ownLast) for (t in e) return te.call(e, t);
        for (t in e);
        return void 0 === t || te.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? Z[ee.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          ie.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(ae, "ms-").replace(se, le);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, r) {
        var i = 0,
          o = e.length,
          a = n(e);
        if (r) {
          if (a) for (; o > i && !1 !== t.apply(e[i], r); i++);
          else for (i in e) if (!1 === t.apply(e[i], r)) break;
        } else if (a) for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(oe, "");
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? ie.merge(r, "string" == typeof e ? [e] : e)
              : Q.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (K) return K.call(t, e, n);
          for (
            r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
            r > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
        if (n !== n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; o > i; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, r) {
        var i,
          o = 0,
          a = e.length,
          s = n(e),
          l = [];
        if (s) for (; a > o; o++) null != (i = t(e[o], o, r)) && l.push(i);
        else for (o in e) null != (i = t(e[o], o, r)) && l.push(i);
        return G.apply([], l);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          "string" == typeof t && ((i = e[t]), (t = e), (e = i)),
          ie.isFunction(e)
            ? ((n = Y.call(arguments, 2)),
              (r = function () {
                return e.apply(t || this, n.concat(Y.call(arguments)));
              }),
              (r.guid = e.guid = e.guid || ie.guid++),
              r)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: ne,
    }),
    ie.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var ue = (function (e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, d, f, p, h, m;
      if (
        ((t ? t.ownerDocument || t : B) !== j && D(t),
        (t = t || j),
        (n = n || []),
        (s = t.nodeType),
        "string" != typeof e || !e || (1 !== s && 9 !== s && 11 !== s))
      )
        return n;
      if (!r && H) {
        if (11 !== s && (i = ge.exec(e)))
          if ((a = i[1])) {
            if (9 === s) {
              if (!(o = t.getElementById(a)) || !o.parentNode) return n;
              if (o.id === a) return n.push(o), n;
            } else if (
              t.ownerDocument &&
              (o = t.ownerDocument.getElementById(a)) &&
              F(t, o) &&
              o.id === a
            )
              return n.push(o), n;
          } else {
            if (i[2]) return G.apply(n, t.getElementsByTagName(e)), n;
            if ((a = i[3]) && b.getElementsByClassName)
              return G.apply(n, t.getElementsByClassName(a)), n;
          }
        if (b.qsa && (!q || !q.test(e))) {
          if (
            ((p = f = O),
            (h = t),
            (m = 1 !== s && e),
            1 === s && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              d = C(e),
                (f = t.getAttribute("id"))
                  ? (p = f.replace(ye, "\\$&"))
                  : t.setAttribute("id", p),
                p = "[id='" + p + "'] ",
                u = d.length;
              u--;

            )
              d[u] = p + c(d[u]);
            (h = (ve.test(e) && l(t.parentNode)) || t), (m = d.join(","));
          }
          if (m)
            try {
              return G.apply(n, h.querySelectorAll(m)), n;
            } catch (e) {
            } finally {
              f || t.removeAttribute("id");
            }
        }
      }
      return E(e.replace(ae, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + " ") > x.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[O] = !0), e;
    }
    function i(e) {
      var t = j.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--; ) x.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || X) - (~e.sourceIndex || X);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function l(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function u() {}
    function c(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r;
    }
    function d(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = R++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, a) {
            var s,
              l,
              u = [P, o];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    ((l = t[O] || (t[O] = {})),
                    (s = l[r]) && s[0] === P && s[1] === o)
                  )
                    return (u[2] = s[2]);
                  if (((l[r] = u), (u[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function f(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function p(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r;
    }
    function h(e, t, n, r, i) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      return a;
    }
    function m(e, t, n, i, o, a) {
      return (
        i && !i[O] && (i = m(i)),
        o && !o[O] && (o = m(o, a)),
        r(function (r, a, s, l) {
          var u,
            c,
            d,
            f = [],
            m = [],
            g = a.length,
            v = r || p(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!r && t) ? v : h(v, f, e, s, l),
            b = n ? (o || (r ? e : g || i) ? [] : a) : y;
          if ((n && n(y, b, s, l), i))
            for (u = h(b, m), i(u, [], s, l), c = u.length; c--; )
              (d = u[c]) && (b[m[c]] = !(y[m[c]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (u = [], c = b.length; c--; )
                  (d = b[c]) && u.push((y[c] = d));
                o(null, (b = []), u, l);
              }
              for (c = b.length; c--; )
                (d = b[c]) &&
                  (u = o ? K(r, d) : f[c]) > -1 &&
                  (r[u] = !(a[u] = d));
            }
          } else (b = h(b === a ? b.splice(g, b.length) : b)), o ? o(null, a, b, l) : G.apply(a, b);
        })
      );
    }
    function g(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = x.relative[e[0].type],
          a = o || x.relative[" "],
          s = o ? 1 : 0,
          l = d(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          u = d(
            function (e) {
              return K(t, e) > -1;
            },
            a,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== k)) ||
                ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
              return (t = null), i;
            },
          ];
        i > s;
        s++
      )
        if ((n = x.relative[e[s].type])) p = [d(f(p), n)];
        else {
          if (((n = x.filter[e[s].type].apply(null, e[s].matches)), n[O])) {
            for (r = ++s; i > r && !x.relative[e[r].type]; r++);
            return m(
              s > 1 && f(p),
              s > 1 &&
                c(
                  e.slice(0, s - 1).concat({
                    value: " " === e[s - 2].type ? "*" : "",
                  })
                ).replace(ae, "$1"),
              n,
              r > s && g(e.slice(s, r)),
              i > r && g((e = e.slice(r))),
              i > r && c(e)
            );
          }
          p.push(n);
        }
      return f(p);
    }
    function v(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function (r, a, s, l, u) {
          var c,
            d,
            f,
            p = 0,
            m = "0",
            g = r && [],
            v = [],
            y = k,
            b = r || (o && x.find.TAG("*", u)),
            w = (P += null == y ? 1 : Math.random() || 0.1),
            T = b.length;
          for (u && (k = a !== j && a); m !== T && null != (c = b[m]); m++) {
            if (o && c) {
              for (d = 0; (f = e[d++]); )
                if (f(c, a, s)) {
                  l.push(c);
                  break;
                }
              u && (P = w);
            }
            i && ((c = !f && c) && p--, r && g.push(c));
          }
          if (((p += m), i && m !== p)) {
            for (d = 0; (f = n[d++]); ) f(g, v, a, s);
            if (r) {
              if (p > 0) for (; m--; ) g[m] || v[m] || (v[m] = J.call(l));
              v = h(v);
            }
            G.apply(l, v),
              u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l);
          }
          return u && ((P = w), (k = y)), g;
        };
      return i ? r(a) : a;
    }
    var y,
      b,
      x,
      w,
      T,
      C,
      N,
      E,
      k,
      S,
      A,
      D,
      j,
      L,
      H,
      q,
      _,
      M,
      F,
      O = "sizzle" + 1 * new Date(),
      B = e.document,
      P = 0,
      R = 0,
      W = n(),
      $ = n(),
      z = n(),
      I = function (e, t) {
        return e === t && (A = !0), 0;
      },
      X = 1 << 31,
      U = {}.hasOwnProperty,
      V = [],
      J = V.pop,
      Y = V.push,
      G = V.push,
      Q = V.slice,
      K = function (e, t) {
        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
        return -1;
      },
      Z =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ne = te.replace("w", "w#"),
      re =
        "\\[" +
        ee +
        "*(" +
        te +
        ")(?:" +
        ee +
        "*([*^$|!~]?=)" +
        ee +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ne +
        "))|)" +
        ee +
        "*\\]",
      ie =
        ":(" +
        te +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        re +
        ")*)|.*)\\)|)",
      oe = new RegExp(ee + "+", "g"),
      ae = new RegExp(
        "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
        "g"
      ),
      se = new RegExp("^" + ee + "*," + ee + "*"),
      le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      ce = new RegExp(ie),
      de = new RegExp("^" + ne + "$"),
      fe = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + re),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ee +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ee +
            "*(?:([+-]|)" +
            ee +
            "*(\\d+)|))" +
            ee +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ee +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ee +
            "*((?:-\\d)?\\d*)" +
            ee +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      pe = /^(?:input|select|textarea|button)$/i,
      he = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      ye = /'|\\/g,
      be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      xe = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : 0 > r
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      we = function () {
        D();
      };
    try {
      G.apply((V = Q.call(B.childNodes)), B.childNodes),
        V[B.childNodes.length].nodeType;
    } catch (e) {
      G = {
        apply: V.length
          ? function (e, t) {
              Y.apply(e, Q.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    (b = t.support = {}),
      (T = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (D = t.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : B;
          return r !== j && 9 === r.nodeType && r.documentElement
            ? ((j = r),
              (L = r.documentElement),
              (n = r.defaultView),
              n &&
                n !== n.top &&
                (n.addEventListener
                  ? n.addEventListener("unload", we, !1)
                  : n.attachEvent && n.attachEvent("onunload", we)),
              (H = !T(r)),
              (b.attributes = i(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (b.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(r.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (b.getElementsByClassName = me.test(r.getElementsByClassName)),
              (b.getById = i(function (e) {
                return (
                  (L.appendChild(e).id = O),
                  !r.getElementsByName || !r.getElementsByName(O).length
                );
              })),
              b.getById
                ? ((x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && H) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (x.filter.ID = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete x.find.ID,
                  (x.filter.ID = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (x.find.TAG = b.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : b.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (x.find.CLASS =
                b.getElementsByClassName &&
                function (e, t) {
                  return H ? t.getElementsByClassName(e) : void 0;
                }),
              (_ = []),
              (q = []),
              (b.qsa = me.test(r.querySelectorAll)) &&
                (i(function (e) {
                  (L.appendChild(e).innerHTML =
                    "<a id='" +
                    O +
                    "'></a><select id='" +
                    O +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      q.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + O + "-]").length ||
                      q.push("~="),
                    e.querySelectorAll(":checked").length || q.push(":checked"),
                    e.querySelectorAll("a#" + O + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                i(function (e) {
                  var t = r.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      q.push("name" + ee + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (b.matchesSelector = me.test(
                (M =
                  L.matches ||
                  L.webkitMatchesSelector ||
                  L.mozMatchesSelector ||
                  L.oMatchesSelector ||
                  L.msMatchesSelector)
              )) &&
                i(function (e) {
                  (b.disconnectedMatch = M.call(e, "div")),
                    M.call(e, "[s!='']:x"),
                    _.push("!=", ie);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (_ = _.length && new RegExp(_.join("|"))),
              (t = me.test(L.compareDocumentPosition)),
              (F =
                t || me.test(L.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (I = t
                ? function (e, t) {
                    if (e === t) return (A = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      ((n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1),
                      1 & n ||
                      (!b.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === r || (e.ownerDocument === B && F(B, e))
                          ? -1
                          : t === r || (t.ownerDocument === B && F(B, t))
                          ? 1
                          : S
                          ? K(S, e) - K(S, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (A = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      s = t.parentNode,
                      l = [e],
                      u = [t];
                    if (!o || !s)
                      return e === r
                        ? -1
                        : t === r
                        ? 1
                        : o
                        ? -1
                        : s
                        ? 1
                        : S
                        ? K(S, e) - K(S, t)
                        : 0;
                    if (o === s) return a(e, t);
                    for (n = e; (n = n.parentNode); ) l.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; l[i] === u[i]; ) i++;
                    return i
                      ? a(l[i], u[i])
                      : l[i] === B
                      ? -1
                      : u[i] === B
                      ? 1
                      : 0;
                  }),
              r)
            : j;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== j && D(e),
          (n = n.replace(ue, "='$1']")),
          !(!b.matchesSelector || !H || (_ && _.test(n)) || (q && q.test(n))))
        )
          try {
            var r = M.call(e, n);
            if (
              r ||
              b.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return t(n, j, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== j && D(e), F(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== j && D(e);
        var n = x.attrHandle[t.toLowerCase()],
          r = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
        return void 0 !== r
          ? r
          : b.attributes || !H
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((A = !b.detectDuplicates),
          (S = !b.sortStable && e.slice(0)),
          e.sort(I),
          A)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (S = null), e;
      }),
      (w = t.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += w(t);
          return n;
        }),
      (x = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0,
            },
            " ": {
              dir: "parentNode",
            },
            "+": {
              dir: "previousSibling",
              first: !0,
            },
            "~": {
              dir: "previousSibling",
            },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(be, xe)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return fe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      ce.test(n) &&
                      (t = C(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(be, xe).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = W[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                  W(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === r
                        : "!=" === n
                        ? o !== r
                        : "^=" === n
                        ? r && 0 === o.indexOf(r)
                        : "*=" === n
                        ? r && o.indexOf(r) > -1
                        : "$=" === n
                        ? r && o.slice(-r.length) === r
                        : "~=" === n
                        ? (" " + o.replace(oe, " ") + " ").indexOf(r) > -1
                        : "|=" === n &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var u,
                      c,
                      d,
                      f,
                      p,
                      h,
                      m = o !== a ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      y = !l && !s;
                    if (g) {
                      if (o) {
                        for (; m; ) {
                          for (d = t; (d = d[m]); )
                            if (
                              s
                                ? d.nodeName.toLowerCase() === v
                                : 1 === d.nodeType
                            )
                              return !1;
                          h = m = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                        for (
                          c = g[O] || (g[O] = {}),
                            u = c[e] || [],
                            p = u[0] === P && u[1],
                            f = u[0] === P && u[2],
                            d = p && g.childNodes[p];
                          (d = (++p && d && d[m]) || (f = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++f && d === t) {
                            c[e] = [P, p, f];
                            break;
                          }
                      } else if (
                        y &&
                        (u = (t[O] || (t[O] = {}))[e]) &&
                        u[0] === P
                      )
                        f = u[1];
                      else
                        for (
                          ;
                          (d = (++p && d && d[m]) || (f = p = 0) || h.pop()) &&
                          ((s
                            ? d.nodeName.toLowerCase() !== v
                            : 1 !== d.nodeType) ||
                            !++f ||
                            (y && ((d[O] || (d[O] = {}))[e] = [P, f]),
                            d !== t));

                        );
                      return (f -= i) === r || (f % r == 0 && f / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  x.pseudos[e] ||
                  x.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[O]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, "", n]),
                  x.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                          (r = K(e, i[a])), (e[r] = !(t[r] = i[a]));
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = N(e.replace(ae, "$1"));
              return i[O]
                ? r(function (e, t, n, r) {
                    for (var o, a = i(e, null, r, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(be, xe)),
                function (t) {
                  return (t.textContent || t.innerText || w(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                de.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(be, xe).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = H
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === L;
            },
            focus: function (e) {
              return (
                e === j.activeElement &&
                (!j.hasFocus || j.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !x.pseudos.empty(e);
            },
            header: function (e) {
              return he.test(e.nodeName);
            },
            input: function (e) {
              return pe.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: s(function () {
              return [0];
            }),
            last: s(function (e, t) {
              return [t - 1];
            }),
            eq: s(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: s(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: s(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: s(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: s(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }),
      (x.pseudos.nth = x.pseudos.eq);
    for (y in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    })
      x.pseudos[y] = (function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      })(y);
    for (y in {
      submit: !0,
      reset: !0,
    })
      x.pseudos[y] = (function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      })(y);
    return (
      (u.prototype = x.filters = x.pseudos),
      (x.setFilters = new u()),
      (C = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = $[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (s = e, l = [], u = x.preFilter; s; ) {
            (!r || (i = se.exec(s))) &&
              (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
              (r = !1),
              (i = le.exec(s)) &&
                ((r = i.shift()),
                o.push({
                  value: r,
                  type: i[0].replace(ae, " "),
                }),
                (s = s.slice(r.length)));
            for (a in x.filter)
              !(i = fe[a].exec(s)) ||
                (u[a] && !(i = u[a](i))) ||
                ((r = i.shift()),
                o.push({
                  value: r,
                  type: a,
                  matches: i,
                }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return n ? s.length : s ? t.error(e) : $(e, l).slice(0);
        }),
      (N = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = z[e + " "];
          if (!o) {
            for (t || (t = C(e)), n = t.length; n--; )
              (o = g(t[n])), o[O] ? r.push(o) : i.push(o);
            (o = z(e, v(i, r))), (o.selector = e);
          }
          return o;
        }),
      (E = t.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            d = "function" == typeof e && e,
            f = !r && C((e = d.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              ((o = f[0] = f[0].slice(0)),
              o.length > 2 &&
                "ID" === (a = o[0]).type &&
                b.getById &&
                9 === t.nodeType &&
                H &&
                x.relative[o[1].type])
            ) {
              if (!(t = (x.find.ID(a.matches[0].replace(be, xe), t) || [])[0]))
                return n;
              d && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = fe.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !x.relative[(s = a.type)]);

            )
              if (
                (u = x.find[s]) &&
                (r = u(
                  a.matches[0].replace(be, xe),
                  (ve.test(o[0].type) && l(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && c(o))))
                  return G.apply(n, r), n;
                break;
              }
          }
          return (
            (d || N(e, f))(r, t, !H, n, (ve.test(e) && l(t.parentNode)) || t), n
          );
        }),
      (b.sortStable = O.split("").sort(I).join("") === O),
      (b.detectDuplicates = !!A),
      D(),
      (b.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(j.createElement("div"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (b.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(Z, function (e, t, n) {
          var r;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      t
    );
  })(e);
  (ie.find = ue),
    (ie.expr = ue.selectors),
    (ie.expr[":"] = ie.expr.pseudos),
    (ie.unique = ue.uniqueSort),
    (ie.text = ue.getText),
    (ie.isXMLDoc = ue.isXML),
    (ie.contains = ue.contains);
  var ce = ie.expr.match.needsContext,
    de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    fe = /^.[^:#\[\.,]*$/;
  (ie.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ie.find.matchesSelector(r, e)
          ? [r]
          : []
        : ie.find.matches(
            e,
            ie.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ie.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ("string" != typeof e)
          return this.pushStack(
            ie(e).filter(function () {
              for (t = 0; i > t; t++) if (ie.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; i > t; t++) ie.find(e, r[t], n);
        return (
          (n = this.pushStack(i > 1 ? ie.unique(n) : n)),
          (n.selector = this.selector ? this.selector + " " + e : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(
          this,
          "string" == typeof e && ce.test(e) ? ie(e) : e || [],
          !1
        ).length;
      },
    });
  var pe,
    he = e.document,
    me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((ie.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if ("string" == typeof e) {
      if (
        !(n =
          "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
            ? [null, e, null]
            : me.exec(e)) ||
        (!n[1] && t)
      )
        return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (
          ((t = t instanceof ie ? t[0] : t),
          ie.merge(
            this,
            ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)
          ),
          de.test(n[1]) && ie.isPlainObject(t))
        )
          for (n in t)
            ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      if ((r = he.getElementById(n[2])) && r.parentNode) {
        if (r.id !== n[2]) return pe.find(e);
        (this.length = 1), (this[0] = r);
      }
      return (this.context = he), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : ie.isFunction(e)
      ? void 0 !== pe.ready
        ? pe.ready(e)
        : e(ie)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        ie.makeArray(e, this));
  }).prototype = ie.fn),
    (pe = ie(he));
  var ge = /^(?:parents|prev(?:Until|All))/,
    ve = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  ie.extend({
    dir: function (e, t, n) {
      for (
        var r = [], i = e[t];
        i &&
        9 !== i.nodeType &&
        (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));

      )
        1 === i.nodeType && r.push(i), (i = i[t]);
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    ie.fn.extend({
      has: function (e) {
        var t,
          n = ie(e, this),
          r = n.length;
        return this.filter(function () {
          for (t = 0; r > t; t++) if (ie.contains(this, n[t])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            o = [],
            a =
              ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0;
          i > r;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && ie.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(o.length > 1 ? ie.unique(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? ie.inArray(this[0], ie(e))
            : ie.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    ie.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ie.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ie.dir(e, "parentNode", n);
        },
        next: function (e) {
          return i(e, "nextSibling");
        },
        prev: function (e) {
          return i(e, "previousSibling");
        },
        nextAll: function (e) {
          return ie.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return ie.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ie.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ie.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ie.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ie.sibling(e.firstChild);
        },
        contents: function (e) {
          return ie.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : ie.merge([], e.childNodes);
        },
      },
      function (e, t) {
        ie.fn[e] = function (n, r) {
          var i = ie.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = ie.filter(r, i)),
            this.length > 1 &&
              (ve[e] || (i = ie.unique(i)), ge.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      }
    );
  var ye = /\S+/g,
    be = {};
  (ie.Callbacks = function (e) {
    e = "string" == typeof e ? be[e] || o(e) : ie.extend({}, e);
    var t,
      n,
      r,
      i,
      a,
      s,
      l = [],
      u = !e.once && [],
      c = function (o) {
        for (
          n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0;
          l && i > a;
          a++
        )
          if (!1 === l[a].apply(o[0], o[1]) && e.stopOnFalse) {
            n = !1;
            break;
          }
        (t = !1),
          l && (u ? u.length && c(u.shift()) : n ? (l = []) : d.disable());
      },
      d = {
        add: function () {
          if (l) {
            var r = l.length;
            !(function t(n) {
              ie.each(n, function (n, r) {
                var i = ie.type(r);
                "function" === i
                  ? (e.unique && d.has(r)) || l.push(r)
                  : r && r.length && "string" !== i && t(r);
              });
            })(arguments),
              t ? (i = l.length) : n && ((s = r), c(n));
          }
          return this;
        },
        remove: function () {
          return (
            l &&
              ie.each(arguments, function (e, n) {
                for (var r; (r = ie.inArray(n, l, r)) > -1; )
                  l.splice(r, 1), t && (i >= r && i--, a >= r && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? ie.inArray(e, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (i = 0), this;
        },
        disable: function () {
          return (l = u = n = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (u = void 0), n || d.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, n) {
          return (
            !l ||
              (r && !u) ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              t ? u.push(n) : c(n)),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return d;
  }),
    ie.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ie.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return ie
                .Deferred(function (n) {
                  ie.each(t, function (t, o) {
                    var a = ie.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                      var e = a && a.apply(this, arguments);
                      e && ie.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[o[0] + "With"](
                            this === r ? n.promise() : this,
                            a ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ie.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          ie.each(t, function (e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = Y.call(arguments),
          a = o.length,
          s = 1 !== a || (e && ie.isFunction(e.promise)) ? a : 0,
          l = 1 === s ? e : ie.Deferred(),
          u = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? Y.call(arguments) : i),
                r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
            };
          };
        if (a > 1)
          for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)
            o[i] && ie.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .done(u(i, r, o))
                  .fail(l.reject)
                  .progress(u(i, n, t))
              : --s;
        return s || l.resolveWith(r, o), l.promise();
      },
    });
  var xe;
  (ie.fn.ready = function (e) {
    return ie.ready.promise().done(e), this;
  }),
    ie.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? ie.readyWait++ : ie.ready(!0);
      },
      ready: function (e) {
        if (!0 === e ? !--ie.readyWait : !ie.isReady) {
          if (!he.body) return setTimeout(ie.ready);
          (ie.isReady = !0),
            (!0 !== e && --ie.readyWait > 0) ||
              (xe.resolveWith(he, [ie]),
              ie.fn.triggerHandler &&
                (ie(he).triggerHandler("ready"), ie(he).off("ready")));
        }
      },
    }),
    (ie.ready.promise = function (t) {
      if (!xe)
        if (((xe = ie.Deferred()), "complete" === he.readyState))
          setTimeout(ie.ready);
        else if (he.addEventListener)
          he.addEventListener("DOMContentLoaded", s, !1),
            e.addEventListener("load", s, !1);
        else {
          he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
          var n = !1;
          try {
            n = null == e.frameElement && he.documentElement;
          } catch (e) {}
          n &&
            n.doScroll &&
            (function e() {
              if (!ie.isReady) {
                try {
                  n.doScroll("left");
                } catch (t) {
                  return setTimeout(e, 50);
                }
                a(), ie.ready();
              }
            })();
        }
      return xe.promise(t);
    });
  var we,
    Te = "undefined";
  for (we in ie(ne)) break;
  (ne.ownLast = "0" !== we),
    (ne.inlineBlockNeedsLayout = !1),
    ie(function () {
      var e, t, n, r;
      (n = he.getElementsByTagName("body")[0]) &&
        n.style &&
        ((t = he.createElement("div")),
        (r = he.createElement("div")),
        (r.style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(r).appendChild(t),
        typeof t.style.zoom !== Te &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
          e && (n.style.zoom = 1)),
        n.removeChild(r));
    }),
    (function () {
      var e = he.createElement("div");
      if (null == ne.deleteExpando) {
        ne.deleteExpando = !0;
        try {
          delete e.test;
        } catch (e) {
          ne.deleteExpando = !1;
        }
      }
      e = null;
    })(),
    (ie.acceptData = function (e) {
      var t = ie.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    });
  var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ne = /([A-Z])/g;
  ie.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando]) && !u(e)
      );
    },
    data: function (e, t, n) {
      return c(e, t, n);
    },
    removeData: function (e, t) {
      return d(e, t);
    },
    _data: function (e, t, n) {
      return c(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return d(e, t, !0);
    },
  }),
    ie.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = ie.data(o)), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                ((r = a[n].name),
                0 === r.indexOf("data-") &&
                  ((r = ie.camelCase(r.slice(5))), l(o, r, i[r])));
            ie._data(o, "parsedAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              ie.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              ie.data(this, e, t);
            })
          : o
          ? l(o, e, ie.data(o, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          ie.removeData(this, e);
        });
      },
    }),
    ie.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = ie._data(e, t)),
            n &&
              (!r || ie.isArray(n)
                ? (r = ie._data(e, t, ie.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ie.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ie._queueHooks(e, t),
          a = function () {
            ie.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ie._data(e, n) ||
          ie._data(e, n, {
            empty: ie.Callbacks("once memory").add(function () {
              ie._removeData(e, t + "queue"), ie._removeData(e, n);
            }),
          })
        );
      },
    }),
    ie.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? ie.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ie.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ie.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = ie._data(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ke = ["Top", "Right", "Bottom", "Left"],
    Se = function (e, t) {
      return (
        (e = t || e),
        "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
      );
    },
    Ae = (ie.access = function (e, t, n, r, i, o, a) {
      var s = 0,
        l = e.length,
        u = null == n;
      if ("object" === ie.type(n)) {
        i = !0;
        for (s in n) ie.access(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        ie.isFunction(r) || (a = !0),
        u &&
          (a
            ? (t.call(e, r), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(ie(e), n);
              }))),
        t)
      )
        for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }),
    De = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = he.createElement("input"),
      t = he.createElement("div"),
      n = he.createDocumentFragment();
    if (
      ((t.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (ne.leadingWhitespace = 3 === t.firstChild.nodeType),
      (ne.tbody = !t.getElementsByTagName("tbody").length),
      (ne.htmlSerialize = !!t.getElementsByTagName("link").length),
      (ne.html5Clone =
        "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML),
      (e.type = "checkbox"),
      (e.checked = !0),
      n.appendChild(e),
      (ne.appendChecked = e.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
      n.appendChild(t),
      (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ne.noCloneEvent = !0),
      t.attachEvent &&
        (t.attachEvent("onclick", function () {
          ne.noCloneEvent = !1;
        }),
        t.cloneNode(!0).click()),
      null == ne.deleteExpando)
    ) {
      ne.deleteExpando = !0;
      try {
        delete t.test;
      } catch (e) {
        ne.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var t,
        n,
        r = he.createElement("div");
      for (t in {
        submit: !0,
        change: !0,
        focusin: !0,
      })
        (n = "on" + t),
          (ne[t + "Bubbles"] = n in e) ||
            (r.setAttribute(n, "t"),
            (ne[t + "Bubbles"] = !1 === r.attributes[n].expando));
      r = null;
    })();
  var je = /^(?:input|select|textarea)$/i,
    Le = /^key/,
    He = /^(?:mouse|pointer|contextmenu)|click/,
    qe = /^(?:focusinfocus|focusoutblur)$/,
    _e = /^([^.]*)(?:\.(.+)|)$/;
  (ie.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        g = ie._data(e);
      if (g) {
        for (
          n.handler && ((l = n), (n = l.handler), (i = l.selector)),
            n.guid || (n.guid = ie.guid++),
            (a = g.events) || (a = g.events = {}),
            (c = g.handle) ||
              ((c = g.handle =
                function (e) {
                  return typeof ie === Te ||
                    (e && ie.event.triggered === e.type)
                    ? void 0
                    : ie.event.dispatch.apply(c.elem, arguments);
                }),
              (c.elem = e)),
            t = (t || "").match(ye) || [""],
            s = t.length;
          s--;

        )
          (o = _e.exec(t[s]) || []),
            (p = m = o[1]),
            (h = (o[2] || "").split(".").sort()),
            p &&
              ((u = ie.event.special[p] || {}),
              (p = (i ? u.delegateType : u.bindType) || p),
              (u = ie.event.special[p] || {}),
              (d = ie.extend(
                {
                  type: p,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ie.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                l
              )),
              (f = a[p]) ||
                ((f = a[p] = []),
                (f.delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, r, h, c)) ||
                  (e.addEventListener
                    ? e.addEventListener(p, c, !1)
                    : e.attachEvent && e.attachEvent("on" + p, c))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
              (ie.event.global[p] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        g = ie.hasData(e) && ie._data(e);
      if (g && (c = g.events)) {
        for (t = (t || "").match(ye) || [""], u = t.length; u--; )
          if (
            ((s = _e.exec(t[u]) || []),
            (p = m = s[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              d = ie.event.special[p] || {},
                p = (r ? d.delegateType : d.bindType) || p,
                f = c[p] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = o = f.length;
              o--;

            )
              (a = f[o]),
                (!i && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (f.splice(o, 1),
                  a.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, a));
            l &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                ie.removeEvent(e, p, g.handle),
              delete c[p]);
          } else for (p in c) ie.event.remove(e, p + t[u], n, r, !0);
        ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"));
      }
    },
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f = [r || he],
        p = te.call(t, "type") ? t.type : t,
        h = te.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = c = r = r || he),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !qe.test(p + ie.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((h = p.split(".")), (p = h.shift()), h.sort()),
          (a = p.indexOf(":") < 0 && "on" + p),
          (t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.namespace_re = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : ie.makeArray(n, [t])),
          (u = ie.event.special[p] || {}),
          i || !u.trigger || !1 !== u.trigger.apply(r, n)))
      ) {
        if (!i && !u.noBubble && !ie.isWindow(r)) {
          for (
            l = u.delegateType || p, qe.test(l + p) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (c = s);
          c === (r.ownerDocument || he) &&
            f.push(c.defaultView || c.parentWindow || e);
        }
        for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
          (t.type = d > 1 ? l : u.bindType || p),
            (o =
              (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle")),
            o && o.apply(s, n),
            (o = a && s[a]) &&
              o.apply &&
              ie.acceptData(s) &&
              ((t.result = o.apply(s, n)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = p),
          !i &&
            !t.isDefaultPrevented() &&
            (!u._default || !1 === u._default.apply(f.pop(), n)) &&
            ie.acceptData(r) &&
            a &&
            r[p] &&
            !ie.isWindow(r))
        ) {
          (c = r[a]), c && (r[a] = null), (ie.event.triggered = p);
          try {
            r[p]();
          } catch (e) {}
          (ie.event.triggered = void 0), c && (r[a] = c);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = ie.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        a = [],
        s = Y.call(arguments),
        l = (ie._data(this, "events") || {})[e.type] || [],
        u = ie.event.special[e.type] || {};
      if (
        ((s[0] = e),
        (e.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, e))
      ) {
        for (
          a = ie.event.handlers.call(this, e, l), t = 0;
          (i = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, o = 0;
            (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
              ((e.handleObj = r),
              (e.data = r.data),
              void 0 !==
                (n = (
                  (ie.event.special[r.origType] || {}).handle || r.handler
                ).apply(i.elem, s)) &&
                !1 === (e.result = n) &&
                (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        l = e.target;
      if (s && l.nodeType && (!e.button || "click" !== e.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (i = [], o = 0; s > o; o++)
              (r = t[o]),
                (n = r.selector + " "),
                void 0 === i[n] &&
                  (i[n] = r.needsContext
                    ? ie(n, this).index(l) >= 0
                    : ie.find(n, this, null, [l]).length),
                i[n] && i.push(r);
            i.length &&
              a.push({
                elem: l,
                handlers: i,
              });
          }
      return (
        s < t.length &&
          a.push({
            elem: this,
            handlers: t.slice(s),
          }),
        a
      );
    },
    fix: function (e) {
      if (e[ie.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (
        a ||
          (this.fixHooks[i] = a =
            He.test(i) ? this.mouseHooks : Le.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new ie.Event(o),
          t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = o.srcElement || he),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, o) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = e.target.ownerDocument || he),
            (i = r.documentElement),
            (n = r.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
              ((i && i.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: {
        noBubble: !0,
      },
      focus: {
        trigger: function () {
          if (this !== h() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === h() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return ie.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return ie.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = ie.extend(new ie.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (ie.removeEvent = he.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (typeof e[r] === Te && (e[r] = null), e.detachEvent(r, n));
        }),
    (ie.Event = function (e, t) {
      return this instanceof ie.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? f
                  : p))
            : (this.type = e),
          t && ie.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || ie.now()),
          void (this[ie.expando] = !0))
        : new ie.Event(e, t);
    }),
    (ie.Event.prototype = {
      isDefaultPrevented: p,
      isPropagationStopped: p,
      isImmediatePropagationStopped: p,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = f),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = f),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = f),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ie.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        ie.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (!i || (i !== r && !ie.contains(r, i))) &&
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    ne.submitBubbles ||
      (ie.event.special.submit = {
        setup: function () {
          return (
            !ie.nodeName(this, "form") &&
            void ie.event.add(
              this,
              "click._submit keypress._submit",
              function (e) {
                var t = e.target,
                  n =
                    ie.nodeName(t, "input") || ie.nodeName(t, "button")
                      ? t.form
                      : void 0;
                n &&
                  !ie._data(n, "submitBubbles") &&
                  (ie.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0;
                  }),
                  ie._data(n, "submitBubbles", !0));
              }
            )
          );
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              ie.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return (
            !ie.nodeName(this, "form") && void ie.event.remove(this, "._submit")
          );
        },
      }),
    ne.changeBubbles ||
      (ie.event.special.change = {
        setup: function () {
          return je.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (ie.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                ie.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    ie.event.simulate("change", this, e, !0);
                })),
              !1)
            : void ie.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                je.test(t.nodeName) &&
                  !ie._data(t, "changeBubbles") &&
                  (ie.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      ie.event.simulate("change", this.parentNode, e, !0);
                  }),
                  ie._data(t, "changeBubbles", !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          return this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
            ? e.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return ie.event.remove(this, "._change"), !je.test(this.nodeName);
        },
      }),
    ne.focusinBubbles ||
      ie.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (e, t) {
          var n = function (e) {
            ie.event.simulate(t, e.target, ie.event.fix(e), !0);
          };
          ie.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this,
                i = ie._data(r, t);
              i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this,
                i = ie._data(r, t) - 1;
              i
                ? ie._data(r, t, i)
                : (r.removeEventListener(e, n, !0), ie._removeData(r, t));
            },
          };
        }
      ),
    ie.fn.extend({
      on: function (e, t, n, r, i) {
        var o, a;
        if ("object" == typeof e) {
          "string" != typeof t && ((n = n || t), (t = void 0));
          for (o in e) this.on(o, t, n, e[o], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          !1 === r)
        )
          r = p;
        else if (!r) return this;
        return (
          1 === i &&
            ((a = r),
            (r = function (e) {
              return ie().off(e), a.apply(this, arguments);
            }),
            (r.guid = a.guid || (a.guid = ie.guid++))),
          this.each(function () {
            ie.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ie(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = p),
          this.each(function () {
            ie.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          ie.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? ie.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var Me =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Fe = / jQuery\d+="(?:null|\d+)"/g,
    Oe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
    Be = /^\s+/,
    Pe =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Re = /<([\w:]+)/,
    We = /<tbody/i,
    $e = /<|&#?\w+;/,
    ze = /<(?:script|style|link)/i,
    Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Xe = /^$|\/(?:java|ecma)script/i,
    Ue = /^true\/(.*)/,
    Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Je = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    Ye = m(he),
    Ge = Ye.appendChild(he.createElement("div"));
  (Je.optgroup = Je.option),
    (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead),
    (Je.th = Je.td),
    ie.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l = ie.contains(e.ownerDocument, e);
        if (
          (ne.html5Clone || ie.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">")
            ? (o = e.cloneNode(!0))
            : ((Ge.innerHTML = e.outerHTML),
              Ge.removeChild((o = Ge.firstChild))),
          !(
            (ne.noCloneEvent && ne.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ie.isXMLDoc(e)
          ))
        )
          for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a)
            r[a] && C(i, r[a]);
        if (t)
          if (n)
            for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++)
              T(i, r[a]);
          else T(e, o);
        return (
          (r = g(o, "script")),
          r.length > 0 && w(r, !l && g(e, "script")),
          (r = s = i = null),
          o
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i, o, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0;
          d > h;
          h++
        )
          if ((o = e[h]) || 0 === o)
            if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
            else if ($e.test(o)) {
              for (
                s = s || f.appendChild(t.createElement("div")),
                  l = (Re.exec(o) || ["", ""])[1].toLowerCase(),
                  c = Je[l] || Je._default,
                  s.innerHTML = c[1] + o.replace(Pe, "<$1></$2>") + c[2],
                  i = c[0];
                i--;

              )
                s = s.lastChild;
              if (
                (!ne.leadingWhitespace &&
                  Be.test(o) &&
                  p.push(t.createTextNode(Be.exec(o)[0])),
                !ne.tbody)
              )
                for (
                  o =
                    "table" !== l || We.test(o)
                      ? "<table>" !== c[1] || We.test(o)
                        ? 0
                        : s
                      : s.firstChild,
                    i = o && o.childNodes.length;
                  i--;

                )
                  ie.nodeName((u = o.childNodes[i]), "tbody") &&
                    !u.childNodes.length &&
                    o.removeChild(u);
              for (
                ie.merge(p, s.childNodes), s.textContent = "";
                s.firstChild;

              )
                s.removeChild(s.firstChild);
              s = f.lastChild;
            } else p.push(t.createTextNode(o));
        for (
          s && f.removeChild(s),
            ne.appendChecked || ie.grep(g(p, "input"), v),
            h = 0;
          (o = p[h++]);

        )
          if (
            (!r || -1 === ie.inArray(o, r)) &&
            ((a = ie.contains(o.ownerDocument, o)),
            (s = g(f.appendChild(o), "script")),
            a && w(s),
            n)
          )
            for (i = 0; (o = s[i++]); ) Xe.test(o.type || "") && n.push(o);
        return (s = null), f;
      },
      cleanData: function (e, t) {
        for (
          var n,
            r,
            i,
            o,
            a = 0,
            s = ie.expando,
            l = ie.cache,
            u = ne.deleteExpando,
            c = ie.event.special;
          null != (n = e[a]);
          a++
        )
          if ((t || ie.acceptData(n)) && ((i = n[s]), (o = i && l[i]))) {
            if (o.events)
              for (r in o.events)
                c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
            l[i] &&
              (delete l[i],
              u
                ? delete n[s]
                : typeof n.removeAttribute !== Te
                ? n.removeAttribute(s)
                : (n[s] = null),
              J.push(i));
          }
      },
    }),
    ie.fn.extend({
      text: function (e) {
        return Ae(
          this,
          function (e) {
            return void 0 === e
              ? ie.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || he).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            y(this, e).appendChild(e);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = y(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? ie.filter(e, this) : this, i = 0;
          null != (n = r[i]);
          i++
        )
          t || 1 !== n.nodeType || ie.cleanData(g(n)),
            n.parentNode &&
              (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && ie.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ie.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Ae(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e)
              return 1 === t.nodeType ? t.innerHTML.replace(Fe, "") : void 0;
            if (
              !(
                "string" != typeof e ||
                ze.test(e) ||
                (!ne.htmlSerialize && Oe.test(e)) ||
                (!ne.leadingWhitespace && Be.test(e)) ||
                Je[(Re.exec(e) || ["", ""])[1].toLowerCase()]
              )
            ) {
              e = e.replace(Pe, "<$1></$2>");
              try {
                for (; r > n; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (ie.cleanData(g(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode),
              ie.cleanData(g(this)),
              e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = G.apply([], e);
        var n,
          r,
          i,
          o,
          a,
          s,
          l = 0,
          u = this.length,
          c = this,
          d = u - 1,
          f = e[0],
          p = ie.isFunction(f);
        if (
          p ||
          (u > 1 && "string" == typeof f && !ne.checkClone && Ie.test(f))
        )
          return this.each(function (n) {
            var r = c.eq(n);
            p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t);
          });
        if (
          u &&
          ((s = ie.buildFragment(e, this[0].ownerDocument, !1, this)),
          (n = s.firstChild),
          1 === s.childNodes.length && (s = n),
          n)
        ) {
          for (o = ie.map(g(s, "script"), b), i = o.length; u > l; l++)
            (r = s),
              l !== d &&
                ((r = ie.clone(r, !0, !0)), i && ie.merge(o, g(r, "script"))),
              t.call(this[l], r, l);
          if (i)
            for (
              a = o[o.length - 1].ownerDocument, ie.map(o, x), l = 0;
              i > l;
              l++
            )
              (r = o[l]),
                Xe.test(r.type || "") &&
                  !ie._data(r, "globalEval") &&
                  ie.contains(a, r) &&
                  (r.src
                    ? ie._evalUrl && ie._evalUrl(r.src)
                    : ie.globalEval(
                        (r.text || r.textContent || r.innerHTML || "").replace(
                          Ve,
                          ""
                        )
                      ));
          s = n = null;
        }
        return this;
      },
    }),
    ie.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        ie.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++)
            (n = r === a ? this : this.clone(!0)),
              ie(o[r])[t](n),
              Q.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Qe,
    Ke = {};
  !(function () {
    var e;
    ne.shrinkWrapBlocks = function () {
      if (null != e) return e;
      e = !1;
      var t, n, r;
      return (
        (n = he.getElementsByTagName("body")[0]),
        n && n.style
          ? ((t = he.createElement("div")),
            (r = he.createElement("div")),
            (r.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            n.appendChild(r).appendChild(t),
            typeof t.style.zoom !== Te &&
              ((t.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (t.appendChild(he.createElement("div")).style.width = "5px"),
              (e = 3 !== t.offsetWidth)),
            n.removeChild(r),
            e)
          : void 0
      );
    };
  })();
  var Ze,
    et,
    tt = /^margin/,
    nt = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
    rt = /^(top|right|bottom|left)$/;
  e.getComputedStyle
    ? ((Ze = function (t) {
        return t.ownerDocument.defaultView.opener
          ? t.ownerDocument.defaultView.getComputedStyle(t, null)
          : e.getComputedStyle(t, null);
      }),
      (et = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || Ze(e)),
          (a = n ? n.getPropertyValue(t) || n[t] : void 0),
          n &&
            ("" !== a ||
              ie.contains(e.ownerDocument, e) ||
              (a = ie.style(e, t)),
            nt.test(a) &&
              tt.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 === a ? a : a + ""
        );
      }))
    : he.documentElement.currentStyle &&
      ((Ze = function (e) {
        return e.currentStyle;
      }),
      (et = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || Ze(e)),
          (a = n ? n[t] : void 0),
          null == a && s && s[t] && (a = s[t]),
          nt.test(a) &&
            !rt.test(t) &&
            ((r = s.left),
            (i = e.runtimeStyle),
            (o = i && i.left),
            o && (i.left = e.currentStyle.left),
            (s.left = "fontSize" === t ? "1em" : a),
            (a = s.pixelLeft + "px"),
            (s.left = r),
            o && (i.left = o)),
          void 0 === a ? a : a + "" || "auto"
        );
      })),
    !(function () {
      function t() {
        var t, n, r, i;
        (n = he.getElementsByTagName("body")[0]) &&
          n.style &&
          ((t = he.createElement("div")),
          (r = he.createElement("div")),
          (r.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          n.appendChild(r).appendChild(t),
          (t.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (o = a = !1),
          (l = !0),
          e.getComputedStyle &&
            ((o = "1%" !== (e.getComputedStyle(t, null) || {}).top),
            (a =
              "4px" ===
              (
                e.getComputedStyle(t, null) || {
                  width: "4px",
                }
              ).width),
            (i = t.appendChild(he.createElement("div"))),
            (i.style.cssText = t.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (i.style.marginRight = i.style.width = "0"),
            (t.style.width = "1px"),
            (l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)),
            t.removeChild(i)),
          (t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (i = t.getElementsByTagName("td")),
          (i[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
          (s = 0 === i[0].offsetHeight),
          s &&
            ((i[0].style.display = ""),
            (i[1].style.display = "none"),
            (s = 0 === i[0].offsetHeight)),
          n.removeChild(r));
      }
      var n, r, i, o, a, s, l;
      (n = he.createElement("div")),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (i = n.getElementsByTagName("a")[0]),
        (r = i && i.style) &&
          ((r.cssText = "float:left;opacity:.5"),
          (ne.opacity = "0.5" === r.opacity),
          (ne.cssFloat = !!r.cssFloat),
          (n.style.backgroundClip = "content-box"),
          (n.cloneNode(!0).style.backgroundClip = ""),
          (ne.clearCloneStyle = "content-box" === n.style.backgroundClip),
          (ne.boxSizing =
            "" === r.boxSizing ||
            "" === r.MozBoxSizing ||
            "" === r.WebkitBoxSizing),
          ie.extend(ne, {
            reliableHiddenOffsets: function () {
              return null == s && t(), s;
            },
            boxSizingReliable: function () {
              return null == a && t(), a;
            },
            pixelPosition: function () {
              return null == o && t(), o;
            },
            reliableMarginRight: function () {
              return null == l && t(), l;
            },
          }));
    })(),
    (ie.swap = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    });
  var it = /alpha\([^)]*\)/i,
    ot = /opacity\s*=\s*([^)]*)/,
    at = /^(none|table(?!-c[ea]).+)/,
    st = new RegExp("^(" + Ee + ")(.*)$", "i"),
    lt = new RegExp("^([+-])=(" + Ee + ")", "i"),
    ut = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    ct = {
      letterSpacing: "0",
      fontWeight: "400",
    },
    dt = ["Webkit", "O", "Moz", "ms"];
  ie.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = et(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {
      float: ne.cssFloat ? "cssFloat" : "styleFloat",
    },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = ie.camelCase(t),
          l = e.style;
        if (
          ((t = ie.cssProps[s] || (ie.cssProps[s] = S(l, s))),
          (a = ie.cssHooks[t] || ie.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        if (
          ((o = typeof n),
          "string" === o &&
            (i = lt.exec(n)) &&
            ((n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t))),
            (o = "number")),
          null != n &&
            n === n &&
            ("number" !== o || ie.cssNumber[s] || (n += "px"),
            ne.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
        )
          try {
            l[t] = n;
          } catch (e) {}
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = ie.camelCase(t);
      return (
        (t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s))),
        (a = ie.cssHooks[t] || ie.cssHooks[s]),
        a && "get" in a && (o = a.get(e, !0, n)),
        void 0 === o && (o = et(e, t, r)),
        "normal" === o && t in ct && (o = ct[t]),
        "" === n || n
          ? ((i = parseFloat(o)), !0 === n || ie.isNumeric(i) ? i || 0 : o)
          : o
      );
    },
  }),
    ie.each(["height", "width"], function (e, t) {
      ie.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? at.test(ie.css(e, "display")) && 0 === e.offsetWidth
              ? ie.swap(e, ut, function () {
                  return L(e, t, r);
                })
              : L(e, t, r)
            : void 0;
        },
        set: function (e, n, r) {
          var i = r && Ze(e);
          return D(
            e,
            n,
            r
              ? j(
                  e,
                  t,
                  r,
                  ne.boxSizing &&
                    "border-box" === ie.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    ne.opacity ||
      (ie.cssHooks.opacity = {
        get: function (e, t) {
          return ot.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === ie.trim(o.replace(it, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = it.test(o) ? o.replace(it, i) : o + " " + i);
        },
      }),
    (ie.cssHooks.marginRight = k(ne.reliableMarginRight, function (e, t) {
      return t
        ? ie.swap(
            e,
            {
              display: "inline-block",
            },
            et,
            [e, "marginRight"]
          )
        : void 0;
    })),
    ie.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (e, t) {
        (ie.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
              4 > r;
              r++
            )
              i[e + ke[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          tt.test(e) || (ie.cssHooks[e + t].set = D);
      }
    ),
    ie.fn.extend({
      css: function (e, t) {
        return Ae(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (ie.isArray(t)) {
              for (r = Ze(e), i = t.length; i > a; a++)
                o[t[a]] = ie.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return A(this, !0);
      },
      hide: function () {
        return A(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Se(this) ? ie(this).show() : ie(this).hide();
            });
      },
    }),
    (ie.Tween = H),
    (H.prototype = {
      constructor: H,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ie.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = H.propHooks[this.prop];
        return e && e.get ? e.get(this) : H.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = H.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? ie.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : H.propHooks._default.set(this),
          this
        );
      },
    }),
    (H.prototype.init.prototype = H.prototype),
    (H.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = ie.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          ie.fx.step[e.prop]
            ? ie.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop])
            ? ie.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (H.propHooks.scrollTop = H.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ie.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (ie.fx = H.prototype.init),
    (ie.fx.step = {});
  var ft,
    pt,
    ht = /^(?:toggle|show|hide)$/,
    mt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
    gt = /queueHooks$/,
    vt = [F],
    yt = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = mt.exec(t),
            o = (i && i[3]) || (ie.cssNumber[e] ? "" : "px"),
            a =
              (ie.cssNumber[e] || ("px" !== o && +r)) &&
              mt.exec(ie.css(n.elem, e)),
            s = 1,
            l = 20;
          if (a && a[3] !== o) {
            (o = o || a[3]), (i = i || []), (a = +r || 1);
            do {
              (s = s || ".5"), (a /= s), ie.style(n.elem, e, a + o);
            } while (s !== (s = n.cur() / r) && 1 !== s && --l);
          }
          return (
            i &&
              ((a = n.start = +a || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        },
      ],
    };
  (ie.Animation = ie.extend(B, {
    tweener: function (e, t) {
      ie.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]), (yt[n] = yt[n] || []), yt[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? vt.unshift(e) : vt.push(e);
    },
  })),
    (ie.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ie.extend({}, e)
          : {
              complete: n || (!n && t) || (ie.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !ie.isFunction(t) && t),
            };
      return (
        (r.duration = ie.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in ie.fx.speeds
          ? ie.fx.speeds[r.duration]
          : ie.fx.speeds._default),
        (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          ie.isFunction(r.old) && r.old.call(this),
            r.queue && ie.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ie.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Se).css("opacity", 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          r
        );
      },
      animate: function (e, t, n, r) {
        var i = ie.isEmptyObject(e),
          o = ie.speed(t, n, r),
          a = function () {
            var t = B(this, ie.extend({}, e), o);
            (i || ie._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = ie.timers,
              a = ie._data(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && gt.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (t || !n) && ie.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = ie._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = ie.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                ie.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    ie.each(["toggle", "show", "hide"], function (e, t) {
      var n = ie.fn[t];
      ie.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(_(t, !0), e, r, i);
      };
    }),
    ie.each(
      {
        slideDown: _("show"),
        slideUp: _("hide"),
        slideToggle: _("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (e, t) {
        ie.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (ie.timers = []),
    (ie.fx.tick = function () {
      var e,
        t = ie.timers,
        n = 0;
      for (ft = ie.now(); n < t.length; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || ie.fx.stop(), (ft = void 0);
    }),
    (ie.fx.timer = function (e) {
      ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop();
    }),
    (ie.fx.interval = 13),
    (ie.fx.start = function () {
      pt || (pt = setInterval(ie.fx.tick, ie.fx.interval));
    }),
    (ie.fx.stop = function () {
      clearInterval(pt), (pt = null);
    }),
    (ie.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (ie.fn.delay = function (e, t) {
      return (
        (e = ie.fx ? ie.fx.speeds[e] || e : e),
        (t = t || "fx"),
        this.queue(t, function (t, n) {
          var r = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e, t, n, r, i;
      (t = he.createElement("div")),
        t.setAttribute("className", "t"),
        (t.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (r = t.getElementsByTagName("a")[0]),
        (n = he.createElement("select")),
        (i = n.appendChild(he.createElement("option"))),
        (e = t.getElementsByTagName("input")[0]),
        (r.style.cssText = "top:1px"),
        (ne.getSetAttribute = "t" !== t.className),
        (ne.style = /top/.test(r.getAttribute("style"))),
        (ne.hrefNormalized = "/a" === r.getAttribute("href")),
        (ne.checkOn = !!e.value),
        (ne.optSelected = i.selected),
        (ne.enctype = !!he.createElement("form").enctype),
        (n.disabled = !0),
        (ne.optDisabled = !i.disabled),
        (e = he.createElement("input")),
        e.setAttribute("value", ""),
        (ne.input = "" === e.getAttribute("value")),
        (e.value = "t"),
        e.setAttribute("type", "radio"),
        (ne.radioValue = "t" === e.value);
    })();
  var bt = /\r/g;
  ie.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = ie.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              ((i = r ? e.call(this, n, ie(this).val()) : e),
              null == i
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : ie.isArray(i) &&
                  (i = ie.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                ie.valHooks[this.type] ||
                ie.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? ((t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()]),
          t && "get" in t && void 0 !== (n = t.get(i, "value"))
            ? n
            : ((n = i.value),
              "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n))
        : void 0;
    },
  }),
    ie.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ie.find.attr(e, "value");
            return null != t ? t : ie.trim(ie.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || 0 > i,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                l = 0 > i ? s : o ? i : 0;
              s > l;
              l++
            )
              if (
                ((n = r[l]),
                !(
                  (!n.selected && l !== i) ||
                  (ne.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    ie.nodeName(n.parentNode, "optgroup"))
                ))
              ) {
                if (((t = ie(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = ie.makeArray(t), a = i.length;
              a--;

            )
              if (((r = i[a]), ie.inArray(ie.valHooks.option.get(r), o) >= 0))
                try {
                  r.selected = n = !0;
                } catch (e) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    ie.each(["radio", "checkbox"], function () {
      (ie.valHooks[this] = {
        set: function (e, t) {
          return ie.isArray(t)
            ? (e.checked = ie.inArray(ie(e).val(), t) >= 0)
            : void 0;
        },
      }),
        ne.checkOn ||
          (ie.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var xt,
    wt,
    Tt = ie.expr.attrHandle,
    Ct = /^(?:checked|selected)$/i,
    Nt = ne.getSetAttribute,
    Et = ne.input;
  ie.fn.extend({
    attr: function (e, t) {
      return Ae(this, ie.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ie.removeAttr(this, e);
      });
    },
  }),
    ie.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return typeof e.getAttribute === Te
            ? ie.prop(e, t, n)
            : ((1 === o && ie.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r =
                  ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? wt : xt))),
              void 0 === n
                ? r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = ie.find.attr(e, t)), null == i ? void 0 : i)
                : null !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : void ie.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(ye);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = ie.propFix[n] || n),
              ie.expr.match.bool.test(n)
                ? (Et && Nt) || !Ct.test(n)
                  ? (e[r] = !1)
                  : (e[ie.camelCase("default-" + n)] = e[r] = !1)
                : ie.attr(e, n, ""),
              e.removeAttribute(Nt ? n : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (wt = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? ie.removeAttr(e, n)
            : (Et && Nt) || !Ct.test(n)
            ? e.setAttribute((!Nt && ie.propFix[n]) || n, n)
            : (e[ie.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Tt[t] || ie.find.attr;
      Tt[t] =
        (Et && Nt) || !Ct.test(t)
          ? function (e, t, r) {
              var i, o;
              return (
                r ||
                  ((o = Tt[t]),
                  (Tt[t] = i),
                  (i = null != n(e, t, r) ? t.toLowerCase() : null),
                  (Tt[t] = o)),
                i
              );
            }
          : function (e, t, n) {
              return n
                ? void 0
                : e[ie.camelCase("default-" + t)]
                ? t.toLowerCase()
                : null;
            };
    }),
    (Et && Nt) ||
      (ie.attrHooks.value = {
        set: function (e, t, n) {
          return ie.nodeName(e, "input")
            ? void (e.defaultValue = t)
            : xt && xt.set(e, t, n);
        },
      }),
    Nt ||
      ((xt = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          return (
            r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ""),
            "value" === n || t === e.getAttribute(n) ? t : void 0
          );
        },
      }),
      (Tt.id =
        Tt.name =
        Tt.coords =
          function (e, t, n) {
            var r;
            return n
              ? void 0
              : (r = e.getAttributeNode(t)) && "" !== r.value
              ? r.value
              : null;
          }),
      (ie.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          return n && n.specified ? n.value : void 0;
        },
        set: xt.set,
      }),
      (ie.attrHooks.contenteditable = {
        set: function (e, t, n) {
          xt.set(e, "" !== t && t, n);
        },
      }),
      ie.each(["width", "height"], function (e, t) {
        ie.attrHooks[t] = {
          set: function (e, n) {
            return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
          },
        };
      })),
    ne.style ||
      (ie.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var kt = /^(?:input|select|textarea|button|object)$/i,
    St = /^(?:a|area)$/i;
  ie.fn.extend({
    prop: function (e, t) {
      return Ae(this, ie.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = ie.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (e) {}
        })
      );
    },
  }),
    ie.extend({
      propFix: {
        for: "htmlFor",
        class: "className",
      },
      prop: function (e, t, n) {
        var r,
          i,
          o,
          a = e.nodeType;
        if (e && 3 !== a && 8 !== a && 2 !== a)
          return (
            (o = 1 !== a || !ie.isXMLDoc(e)),
            o && ((t = ie.propFix[t] || t), (i = ie.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ie.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : kt.test(e.nodeName) || (St.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    ne.hrefNormalized ||
      ie.each(["href", "src"], function (e, t) {
        ie.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    ne.optSelected ||
      (ie.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      }),
    ie.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ie.propFix[this.toLowerCase()] = this;
      }
    ),
    ne.enctype || (ie.propFix.enctype = "encoding");
  var At = /[\t\r\n\f]/g;
  ie.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = 0,
        l = this.length,
        u = "string" == typeof e && e;
      if (ie.isFunction(e))
        return this.each(function (t) {
          ie(this).addClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || "").match(ye) || []; l > s; s++)
          if (
            ((n = this[s]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(At, " ") : " ")))
          ) {
            for (o = 0; (i = t[o++]); )
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            (a = ie.trim(r)), n.className !== a && (n.className = a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = 0,
        l = this.length,
        u = 0 === arguments.length || ("string" == typeof e && e);
      if (ie.isFunction(e))
        return this.each(function (t) {
          ie(this).removeClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || "").match(ye) || []; l > s; s++)
          if (
            ((n = this[s]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(At, " ") : "")))
          ) {
            for (o = 0; (i = t[o++]); )
              for (; r.indexOf(" " + i + " ") >= 0; )
                r = r.replace(" " + i + " ", " ");
            (a = e ? ie.trim(r) : ""), n.className !== a && (n.className = a);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : this.each(
            ie.isFunction(e)
              ? function (n) {
                  ie(this).toggleClass(e.call(this, n, this.className, t), t);
                }
              : function () {
                  if ("string" === n)
                    for (
                      var t, r = 0, i = ie(this), o = e.match(ye) || [];
                      (t = o[r++]);

                    )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (n === Te || "boolean" === n) &&
                      (this.className &&
                        ie._data(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === e
                          ? ""
                          : ie._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
  }),
    ie.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        ie.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    ie.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var Dt = ie.now(),
    jt = /\?/,
    Lt =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (ie.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      r = null,
      i = ie.trim(t + "");
    return i &&
      !ie.trim(
        i.replace(Lt, function (e, t, i, o) {
          return (
            n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), "")
          );
        })
      )
      ? Function("return " + i)()
      : ie.error("Invalid JSON: " + t);
  }),
    (ie.parseXML = function (t) {
      var n, r;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser
          ? ((r = new DOMParser()), (n = r.parseFromString(t, "text/xml")))
          : ((n = new ActiveXObject("Microsoft.XMLDOM")),
            (n.async = "false"),
            n.loadXML(t));
      } catch (e) {
        n = void 0;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName("parsererror").length) ||
          ie.error("Invalid XML: " + t),
        n
      );
    });
  var Ht,
    qt,
    _t = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    Ft = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Bt = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Wt = {},
    $t = {},
    zt = "*/".concat("*");
  try {
    qt = location.href;
  } catch (e) {
    (qt = he.createElement("a")), (qt.href = ""), (qt = qt.href);
  }
  (Ht = Rt.exec(qt.toLowerCase()) || []),
    ie.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: qt,
        type: "GET",
        isLocal: Ot.test(Ht[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ie.parseJSON,
          "text xml": ie.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (e, t) {
        return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e);
      },
      ajaxPrefilter: P(Wt),
      ajaxTransport: P($t),
      ajax: function (e, t) {
        function n(e, t, n, r) {
          var i,
            c,
            v,
            y,
            x,
            T = t;
          2 !== b &&
            ((b = 2),
            s && clearTimeout(s),
            (u = void 0),
            (a = r || ""),
            (w.readyState = e > 0 ? 4 : 0),
            (i = (e >= 200 && 300 > e) || 304 === e),
            n && (y = $(d, w, n)),
            (y = z(d, y, w, i)),
            i
              ? (d.ifModified &&
                  ((x = w.getResponseHeader("Last-Modified")),
                  x && (ie.lastModified[o] = x),
                  (x = w.getResponseHeader("etag")) && (ie.etag[o] = x)),
                204 === e || "HEAD" === d.type
                  ? (T = "nocontent")
                  : 304 === e
                  ? (T = "notmodified")
                  : ((T = y.state), (c = y.data), (v = y.error), (i = !v)))
              : ((v = T), (e || !T) && ((T = "error"), 0 > e && (e = 0))),
            (w.status = e),
            (w.statusText = (t || T) + ""),
            i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]),
            w.statusCode(g),
            (g = void 0),
            l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]),
            m.fireWith(f, [w, T]),
            l &&
              (p.trigger("ajaxComplete", [w, d]),
              --ie.active || ie.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          d = ie.ajaxSetup({}, t),
          f = d.context || d,
          p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
          h = ie.Deferred(),
          m = ie.Callbacks("once memory"),
          g = d.statusCode || {},
          v = {},
          y = {},
          b = 0,
          x = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === b) {
                if (!c)
                  for (c = {}; (t = Ft.exec(a)); ) c[t[1].toLowerCase()] = t[2];
                t = c[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? a : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return b || ((e = y[n] = y[n] || e), (v[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return b || (d.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || x;
              return u && u.abort(t), n(0, t), this;
            },
          };
        if (
          ((h.promise(w).complete = m.add),
          (w.success = w.done),
          (w.error = w.fail),
          (d.url = ((e || d.url || qt) + "")
            .replace(_t, "")
            .replace(Pt, Ht[1] + "//")),
          (d.type = t.method || t.type || d.method || d.type),
          (d.dataTypes = ie
            .trim(d.dataType || "*")
            .toLowerCase()
            .match(ye) || [""]),
          null == d.crossDomain &&
            ((r = Rt.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !r ||
              (r[1] === Ht[1] &&
                r[2] === Ht[2] &&
                (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                  (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))
            ))),
          d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = ie.param(d.data, d.traditional)),
          R(Wt, d, t, w),
          2 === b)
        )
          return w;
        (l = ie.event && d.global),
          l && 0 == ie.active++ && ie.event.trigger("ajaxStart"),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !Bt.test(d.type)),
          (o = d.url),
          d.hasContent ||
            (d.data &&
              ((o = d.url += (jt.test(o) ? "&" : "?") + d.data), delete d.data),
            !1 === d.cache &&
              (d.url = Mt.test(o)
                ? o.replace(Mt, "$1_=" + Dt++)
                : o + (jt.test(o) ? "&" : "?") + "_=" + Dt++)),
          d.ifModified &&
            (ie.lastModified[o] &&
              w.setRequestHeader("If-Modified-Since", ie.lastModified[o]),
            ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])),
          ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) &&
            w.setRequestHeader("Content-Type", d.contentType),
          w.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
              : d.accepts["*"]
          );
        for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
        if (d.beforeSend && (!1 === d.beforeSend.call(f, w, d) || 2 === b))
          return w.abort();
        x = "abort";
        for (i in {
          success: 1,
          error: 1,
          complete: 1,
        })
          w[i](d[i]);
        if ((u = R($t, d, t, w))) {
          (w.readyState = 1),
            l && p.trigger("ajaxSend", [w, d]),
            d.async &&
              d.timeout > 0 &&
              (s = setTimeout(function () {
                w.abort("timeout");
              }, d.timeout));
          try {
            (b = 1), u.send(v, n);
          } catch (e) {
            if (!(2 > b)) throw e;
            n(-1, e);
          }
        } else n(-1, "No Transport");
        return w;
      },
      getJSON: function (e, t, n) {
        return ie.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ie.get(e, void 0, t, "script");
      },
    }),
    ie.each(["get", "post"], function (e, t) {
      ie[t] = function (e, n, r, i) {
        return (
          ie.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          ie.ajax({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r,
          })
        );
      };
    }),
    (ie._evalUrl = function (e) {
      return ie.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    ie.fn.extend({
      wrapAll: function (e) {
        if (ie.isFunction(e))
          return this.each(function (t) {
            ie(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return this.each(
          ie.isFunction(e)
            ? function (t) {
                ie(this).wrapInner(e.call(this, t));
              }
            : function () {
                var t = ie(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              }
        );
      },
      wrap: function (e) {
        var t = ie.isFunction(e);
        return this.each(function (n) {
          ie(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (ie.expr.filters.hidden = function (e) {
      return (
        (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
        (!ne.reliableHiddenOffsets() &&
          "none" === ((e.style && e.style.display) || ie.css(e, "display")))
      );
    }),
    (ie.expr.filters.visible = function (e) {
      return !ie.expr.filters.hidden(e);
    });
  var It = /%20/g,
    Xt = /\[\]$/,
    Ut = /\r?\n/g,
    Vt = /^(?:submit|button|image|reset|file)$/i,
    Jt = /^(?:input|select|textarea|keygen)/i;
  (ie.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = ie.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional),
      ie.isArray(e) || (e.jquery && !ie.isPlainObject(e)))
    )
      ie.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) I(n, e[n], t, i);
    return r.join("&").replace(It, "+");
  }),
    ie.fn.extend({
      serialize: function () {
        return ie.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ie.prop(this, "elements");
          return e ? ie.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ie(this).is(":disabled") &&
              Jt.test(this.nodeName) &&
              !Vt.test(e) &&
              (this.checked || !De.test(e))
            );
          })
          .map(function (e, t) {
            var n = ie(this).val();
            return null == n
              ? null
              : ie.isArray(n)
              ? ie.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(Ut, "\r\n"),
                  };
                })
              : {
                  name: t.name,
                  value: n.replace(Ut, "\r\n"),
                };
          })
          .get();
      },
    }),
    (ie.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                X()) ||
              U()
            );
          }
        : X);
  var Yt = 0,
    Gt = {},
    Qt = ie.ajaxSettings.xhr();
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in Gt) Gt[e](void 0, !0);
    }),
    (ne.cors = !!Qt && "withCredentials" in Qt),
    (Qt = ne.ajax = !!Qt) &&
      ie.ajaxTransport(function (e) {
        if (!e.crossDomain || ne.cors) {
          var t;
          return {
            send: function (n, r) {
              var i,
                o = e.xhr(),
                a = ++Yt;
              if (
                (o.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (i in e.xhrFields) o[i] = e.xhrFields[i];
              e.mimeType &&
                o.overrideMimeType &&
                o.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  n["X-Requested-With"] ||
                  (n["X-Requested-With"] = "XMLHttpRequest");
              for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
              o.send((e.hasContent && e.data) || null),
                (t = function (n, i) {
                  var s, l, u;
                  if (t && (i || 4 === o.readyState))
                    if (
                      (delete Gt[a],
                      (t = void 0),
                      (o.onreadystatechange = ie.noop),
                      i)
                    )
                      4 !== o.readyState && o.abort();
                    else {
                      (u = {}),
                        (s = o.status),
                        "string" == typeof o.responseText &&
                          (u.text = o.responseText);
                      try {
                        l = o.statusText;
                      } catch (e) {
                        l = "";
                      }
                      s || !e.isLocal || e.crossDomain
                        ? 1223 === s && (s = 204)
                        : (s = u.text ? 200 : 404);
                    }
                  u && r(s, l, u, o.getAllResponseHeaders());
                }),
                e.async
                  ? 4 === o.readyState
                    ? setTimeout(t)
                    : (o.onreadystatechange = Gt[a] = t)
                  : t();
            },
            abort: function () {
              t && t(void 0, !0);
            },
          };
        }
      }),
    ie.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /(?:java|ecma)script/,
      },
      converters: {
        "text script": function (e) {
          return ie.globalEval(e), e;
        },
      },
    }),
    ie.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    ie.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          n = he.head || ie("head")[0] || he.documentElement;
        return {
          send: function (r, i) {
            (t = he.createElement("script")),
              (t.async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || i(200, "success"));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          },
        };
      }
    });
  var Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ie.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ie.expando + "_" + Dt++;
      return (this[e] = !0), e;
    },
  }),
    ie.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Zt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Zt.test(t.data) &&
              "data");
      return s || "jsonp" === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            ie.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Zt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || ie.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Kt.push(i)),
              a && ie.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (ie.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || he);
      var r = de.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = ie.buildFragment([e], t, i)),
          i && i.length && ie(i).remove(),
          ie.merge([], r.childNodes));
    });
  var en = ie.fn.load;
  (ie.fn.load = function (e, t, n) {
    if ("string" != typeof e && en) return en.apply(this, arguments);
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return (
      s >= 0 && ((r = ie.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
      ie.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (o = "POST"),
      a.length > 0 &&
        ie
          .ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t,
          })
          .done(function (e) {
            (i = arguments),
              a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                a.each(n, i || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    ie.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ie.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (ie.expr.filters.animated = function (e) {
      return ie.grep(ie.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var tn = e.document.documentElement;
  (ie.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c = ie.css(e, "position"),
        d = ie(e),
        f = {};
      "static" === c && (e.style.position = "relative"),
        (s = d.offset()),
        (o = ie.css(e, "top")),
        (l = ie.css(e, "left")),
        (u =
          ("absolute" === c || "fixed" === c) &&
          ie.inArray("auto", [o, l]) > -1),
        u
          ? ((r = d.position()), (a = r.top), (i = r.left))
          : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
        ie.isFunction(t) && (t = t.call(e, n, s)),
        null != t.top && (f.top = t.top - s.top + a),
        null != t.left && (f.left = t.left - s.left + i),
        "using" in t ? t.using.call(e, f) : d.css(f);
    },
  }),
    ie.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                ie.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = {
            top: 0,
            left: 0,
          },
          i = this[0],
          o = i && i.ownerDocument;
        return o
          ? ((t = o.documentElement),
            ie.contains(t, i)
              ? (typeof i.getBoundingClientRect !== Te &&
                  (r = i.getBoundingClientRect()),
                (n = V(o)),
                {
                  top:
                    r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    r.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : r)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = {
              top: 0,
              left: 0,
            },
            r = this[0];
          return (
            "fixed" === ie.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                ie.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += ie.css(e[0], "borderTopWidth", !0)),
                (n.left += ie.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - ie.css(r, "marginTop", !0),
              left: t.left - n.left - ie.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || tn;
            e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");

          )
            e = e.offsetParent;
          return e || tn;
        });
      },
    }),
    ie.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function (r) {
          return Ae(
            this,
            function (e, r, i) {
              var o = V(e);
              return void 0 === i
                ? o
                  ? t in o
                    ? o[t]
                    : o.document.documentElement[r]
                  : e[r]
                : void (o
                    ? o.scrollTo(
                        n ? ie(o).scrollLeft() : i,
                        n ? i : ie(o).scrollTop()
                      )
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    ie.each(["top", "left"], function (e, t) {
      ie.cssHooks[t] = k(ne.pixelPosition, function (e, n) {
        return n
          ? ((n = et(e, t)), nt.test(n) ? ie(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    ie.each(
      {
        Height: "height",
        Width: "width",
      },
      function (e, t) {
        ie.each(
          {
            padding: "inner" + e,
            content: t,
            "": "outer" + e,
          },
          function (n, r) {
            ie.fn[r] = function (r, i) {
              var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (!0 === r || !0 === i ? "margin" : "border");
              return Ae(
                this,
                function (t, n, r) {
                  var i;
                  return ie.isWindow(t)
                    ? t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((i = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        i["scroll" + e],
                        t.body["offset" + e],
                        i["offset" + e],
                        i["client" + e]
                      ))
                    : void 0 === r
                    ? ie.css(t, n, a)
                    : ie.style(t, n, r, a);
                },
                t,
                o ? r : void 0,
                o,
                null
              );
            };
          }
        );
      }
    ),
    (ie.fn.size = function () {
      return this.length;
    }),
    (ie.fn.andSelf = ie.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ie;
      });
  var nn = e.jQuery,
    rn = e.$;
  return (
    (ie.noConflict = function (t) {
      return (
        e.$ === ie && (e.$ = rn), t && e.jQuery === ie && (e.jQuery = nn), ie
      );
    }),
    typeof t === Te && (e.jQuery = e.$ = ie),
    ie
  );
});
!(function (a) {
  a.fn.animatedModal = function (n) {
    function o() {
      m.css({
        "z-index": e.zIndexOut,
      }),
        e.afterClose();
    }
    function t() {
      e.afterOpen();
    }
    var i = a(this),
      e = a.extend(
        {
          modalTarget: "animatedModal",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0px",
          left: "0px",
          zIndexIn: "9999",
          zIndexOut: "-9999",
          color: "#39BEB9",
          opacityIn: "1",
          opacityOut: "0",
          animatedIn: "zoomIn",
          animatedOut: "zoomOut",
          animationDuration: ".6s",
          overflow: "auto",
          beforeOpen: function () {},
          afterOpen: function () {},
          beforeClose: function () {},
          afterClose: function () {},
        },
        n
      ),
      d = a(".close-" + e.modalTarget),
      s = a(i).attr("href"),
      m = a("body").find("#" + e.modalTarget),
      l = "#" + m.attr("id");
    m.addClass("animated"), m.addClass(e.modalTarget + "-off");
    var r = {
      position: e.position,
      width: e.width,
      height: e.height,
      top: e.top,
      left: e.left,
      "background-color": e.color,
      "overflow-y": e.overflow,
      "z-index": e.zIndexOut,
      opacity: e.opacityOut,
      "-webkit-animation-duration": e.animationDuration,
      "-moz-animation-duration": e.animationDuration,
      "-ms-animation-duration": e.animationDuration,
      "animation-duration": e.animationDuration,
    };
    m.css(r),
      i.click(function (n) {
        n.preventDefault(),
          a("body, html").css({
            overflow: "hidden",
          }),
          s == l &&
            (m.hasClass(e.modalTarget + "-off") &&
              (m.removeClass(e.animatedOut),
              m.removeClass(e.modalTarget + "-off"),
              m.addClass(e.modalTarget + "-on")),
            m.hasClass(e.modalTarget + "-on") &&
              (e.beforeOpen(),
              m.css({
                opacity: e.opacityIn,
                "z-index": e.zIndexIn,
              }),
              m.addClass(e.animatedIn),
              m.one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                t
              )));
      }),
      d.click(function (n) {
        n.preventDefault(),
          a("body, html").css({
            overflow: "auto",
          }),
          e.beforeClose(),
          m.hasClass(e.modalTarget + "-on") &&
            (m.removeClass(e.modalTarget + "-on"),
            m.addClass(e.modalTarget + "-off")),
          m.hasClass(e.modalTarget + "-off") &&
            (m.removeClass(e.animatedIn),
            m.addClass(e.animatedOut),
            m.one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              o
            ));
      });
  };
})(jQuery);
!(function (n, r) {
  function e(n) {
    return !!("" === n || (n && n.charCodeAt && n.substr));
  }
  function t(n) {
    return p ? p(n) : "[object Array]" === l.call(n);
  }
  function o(n) {
    return n && "[object Object]" === l.call(n);
  }
  function a(n, r) {
    var e;
    (n = n || {}), (r = r || {});
    for (e in r) r.hasOwnProperty(e) && null == n[e] && (n[e] = r[e]);
    return n;
  }
  function i(n, r, e) {
    var t,
      o,
      a = [];
    if (!n) return a;
    if (f && n.map === f) return n.map(r, e);
    for (t = 0, o = n.length; t < o; t++) a[t] = r.call(e, n[t], t, n);
    return a;
  }
  function u(n, r) {
    return (n = Math.round(Math.abs(n))), isNaN(n) ? r : n;
  }
  function c(n) {
    var r = s.settings.currency.format;
    return (
      "function" == typeof n && (n = n()),
      e(n) && n.match("%v")
        ? {
            pos: n,
            neg: n.replace("-", "").replace("%v", "-%v"),
            zero: n,
          }
        : n && n.pos && n.pos.match("%v")
        ? n
        : e(r)
        ? (s.settings.currency.format = {
            pos: r,
            neg: r.replace("%v", "-%v"),
            zero: r,
          })
        : r
    );
  }
  var s = {};
  (s.version = "0.4.1"),
    (s.settings = {
      currency: {
        symbol: "$",
        format: "%s%v",
        decimal: ".",
        thousand: ",",
        precision: 2,
        grouping: 3,
      },
      number: {
        precision: 0,
        grouping: 3,
        thousand: ",",
        decimal: ".",
      },
    });
  var f = Array.prototype.map,
    p = Array.isArray,
    l = Object.prototype.toString,
    m =
      (s.unformat =
      s.parse =
        function (n, r) {
          if (t(n))
            return i(n, function (n) {
              return m(n, r);
            });
          if ("number" == typeof (n = n || 0)) return n;
          r = r || s.settings.number.decimal;
          var e = new RegExp("[^0-9-" + r + "]", ["g"]),
            o = parseFloat(
              ("" + n)
                .replace(/\((.*)\)/, "-$1")
                .replace(e, "")
                .replace(r, ".")
            );
          return isNaN(o) ? 0 : o;
        }),
    d = (s.toFixed = function (n, r) {
      r = u(r, s.settings.number.precision);
      var e = Math.pow(10, r);
      return (Math.round(s.unformat(n) * e) / e).toFixed(r);
    }),
    g =
      (s.formatNumber =
      s.format =
        function (n, r, e, c) {
          if (t(n))
            return i(n, function (n) {
              return g(n, r, e, c);
            });
          n = m(n);
          var f = a(
              o(r)
                ? r
                : {
                    precision: r,
                    thousand: e,
                    decimal: c,
                  },
              s.settings.number
            ),
            p = u(f.precision),
            l = n < 0 ? "-" : "",
            h = parseInt(d(Math.abs(n || 0), p), 10) + "",
            y = h.length > 3 ? h.length % 3 : 0;
          return (
            l +
            (y ? h.substr(0, y) + f.thousand : "") +
            h.substr(y).replace(/(\d{3})(?=\d)/g, "$1" + f.thousand) +
            (p ? f.decimal + d(Math.abs(n), p).split(".")[1] : "")
          );
        }),
    h = (s.formatMoney = function (n, r, e, f, p, l) {
      if (t(n))
        return i(n, function (n) {
          return h(n, r, e, f, p, l);
        });
      n = m(n);
      var d = a(
          o(r)
            ? r
            : {
                symbol: r,
                precision: e,
                thousand: f,
                decimal: p,
                format: l,
              },
          s.settings.currency
        ),
        y = c(d.format);
      return (n > 0 ? y.pos : n < 0 ? y.neg : y.zero)
        .replace("%s", d.symbol)
        .replace("%v", g(Math.abs(n), u(d.precision), d.thousand, d.decimal));
    });
  (s.formatColumn = function (n, r, f, p, l, d) {
    if (!n) return [];
    var h = a(
        o(r)
          ? r
          : {
              symbol: r,
              precision: f,
              thousand: p,
              decimal: l,
              format: d,
            },
        s.settings.currency
      ),
      y = c(h.format),
      b = y.pos.indexOf("%s") < y.pos.indexOf("%v"),
      v = 0;
    return i(
      i(n, function (n, r) {
        if (t(n)) return s.formatColumn(n, h);
        n = m(n);
        var e = n > 0 ? y.pos : n < 0 ? y.neg : y.zero,
          o = e
            .replace("%s", h.symbol)
            .replace(
              "%v",
              g(Math.abs(n), u(h.precision), h.thousand, h.decimal)
            );
        return o.length > v && (v = o.length), o;
      }),
      function (n, r) {
        return e(n) && n.length < v
          ? b
            ? n.replace(
                h.symbol,
                h.symbol + new Array(v - n.length + 1).join(" ")
              )
            : new Array(v - n.length + 1).join(" ") + n
          : n;
      }
    );
  }),
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = s),
        (exports.accounting = s))
      : "function" == typeof define && define.amd
      ? define([], function () {
          return s;
        })
      : ((s.noConflict = (function (r) {
          return function () {
            return (n.accounting = r), (s.noConflict = void 0), s;
          };
        })(n.accounting)),
        (n.accounting = s));
})(this);
("use strict");
$(document).on("ready", function () {
  var a = $("#share"),
    e = [
      {
        share: "facebook",
        label: a.data("facebook"),
      },
      {
        share: "linkedin",
        label: a.data("linkedIn"),
      },
      {
        share: "googleplus",
        label: a.data("google"),
      },
      {
        share: "twitter",
        label: a.data("twitter"),
        text: a.data("twitter_text"),
      },
    ];
  a.jsSocials({
    url: a.data("url"),
    showCount: !1,
    shareIn: "popup",
    shares: e,
  });
});
("use strict");
function init() {
  for (
    var e = document.getElementsByClassName("js--answer-image"), t = 0;
    t < e.length;
    t++
  )
    e[t].getAttribute("data-src") &&
      (e[t].setAttribute("src", e[t].getAttribute("data-src")),
      e[t].removeAttribute("data-src"));
}
$(document).on("ready", function () {
  function e() {
    function e() {
      return !0 === x;
    }
    function t() {
      for (var e = c.useMultipliers, t = e ? 1 : 0, n = 0; n < b.length; n++)
        e
          ? (t *= b[n].answerWeight)
          : (t += b[n].answerWeight * c.pricePerHour);
      return e ? t : t * c.currency.exchangeRate;
    }
    function n() {
      var e = t();
      (e = e > 1 ? accounting.formatMoney(e) : ""),
        $(".js--price-progress").text(e);
    }
    function a() {
      l.more_info.hide();
    }
    function o() {
      l.more_info.fadeIn(600);
    }
    function i() {
      l.all.hide(), a();
    }
    function r() {
      i(),
        ga("multidomain.set", "page", "/ccm-" + c.appType),
        ga("multidomain.send", "pageview"),
        l.initial.fadeIn(600),
        o();
    }
    function s() {
      i(),
        l.results.fadeIn(600),
        o(),
        ga("multidomain.set", "page", "/ccm-" + c.appType + "/result"),
        ga("multidomain.send", "pageview"),
        $(".js--form-questions").val(t()),
        $(".js--form-estimate").val(t());
    }
    function u() {
      $(".main").scrollTop(0);
    }
    function d(e) {
      i(),
        n(),
        ga("multidomain.set", "page", "/ccm-" + c.appType + "/step" + e),
        ga("multidomain.send", "pageview"),
        l.questions.filter('[data-question-id="' + e + '"]').fadeIn(600),
        o();
    }
    function m() {
      for (var e = b.length - 1; e >= 0; e--) {
        var n = b[e],
          a = n.answerId,
          o = n.answerText.trim(),
          i = n.questionId,
          r = l.results
            .find(".js--result")
            .filter('[data-question-id="' + i + '"]');
        r.find(".js--result-answer").text(o),
          r.find(".js--result-image").attr({
            src: "../img/" + c.appType + "/answer-" + i + "-" + a + ".png",
            alt: o,
          });
      }
      var s = t();
      l.results.find(".js--total-price").text(accounting.formatMoney(s));
    }
    function f(e, t) {
      (x = void 0 !== t && t), i(), d(e), u();
    }
    function g() {
      m(), s();
    }
    function p() {
      f(1);
    }
    function v() {
      l.questions.find(".answer").removeClass("selected"),
        (b = []),
        (x = !1),
        r();
    }
    function h(e) {
      b.push(e);
    }
    function q() {
      b.pop(), n();
    }
    function w(e) {
      for (var t = b.length - 1; t >= 0; t--)
        b[t].questionId === e.questionId && (b[t] = e);
    }
    function T(e) {
      for (var t = b.length - 1; t >= 0; t--)
        if (b[t].questionId === e.questionId) return !1;
      return !0;
    }
    function y(e, t) {
      var n = {
        questionId: e.data("question-id"),
        questionText: e.find(".question-title").text().trim(),
        answerId: t.data("answer-id"),
        answerText: t.text().trim(),
        answerWeight: t.data("answer-weight"),
      };
      return (
        e.data("pph") &&
          ((c.pricePerHour = n.answerWeight), (n.answerWeight = 0)),
        n
      );
    }
    function j(t, n) {
      var a = l.questions.filter('[data-question-id="' + n + '"]'),
        o = a.find(".answer").filter('[data-answer-id="' + t + '"]'),
        i = y(a, o);
      a.find(".answer").removeClass("selected"),
        o.addClass("selected"),
        e() || !T(i.questionId) ? w(i) : h(i);
      var r = a.next().hasClass("results");
      setTimeout(function () {
        e() || r ? g() : f(n + 1);
      }, c.nextScreenDelay);
    }
    function M() {
      for (
        var e = $("#quoteForm"),
          t = e.find('[name="description"]').val(),
          n = e.find('[name="email"]').val(),
          a = e.find('[name="phone"]').val(),
          o = e.find('[name="name"]').val(),
          i = "",
          r = 0;
        r < b.length;
        r++
      ) {
        var s = b[r];
        (i += "<li>"),
          (i += "<span>" + s.questionId + " - " + s.questionText + ": </span>"),
          (i += "<b>" + s.answerText + "</b>"),
          (i += "</li>");
      }
      (i = "<ul>" + i + "</ul>"), e.find('input[name="questions"]').val(i);
      var u = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        l = u.test(n),
        c = !0;
      (l && "" !== t && "" !== a && "" !== o) || (c = !1),
        c &&
          $.post("mailer.php", e.serialize(), function () {
            e.hide(), $(".form-sent-icon").fadeIn("fast");
          });
    }
    function I() {
      l.questions.each(function (e, t) {
        var n = $(t);
        h(y(n, n.find(".answer").eq(0)));
      }),
        g();
    }
    var b = [],
      x = !1;
    return {
      start: p,
      restart: v,
      jumpToEnd: I,
      goToQuestion: f,
      selectAnswer: j,
      sendQuoteForm: M,
      removeLastAnswer: q,
    };
  }
  function t() {
    ga("multidomain.send", "event", "GUI", "Button_Click", "start"), d.start();
  }
  function n(e) {
    var t = $(e.currentTarget),
      n = t.data("answer-id"),
      a = t.closest(".question").data("question-id");
    d.selectAnswer(n, a);
  }
  function a(e) {
    var t = $(e.currentTarget).closest(".result").data("question-id");
    d.goToQuestion(t, !0);
  }
  function o(e) {
    var t = $(e.currentTarget).closest(".question").data("question-id");
    t > 1 && d.goToQuestion(t - 1, !1), d.removeLastAnswer();
  }
  function i() {
    d.restart();
  }
  function r(e) {
    e.preventDefault(), $(".js--results-summary").slideToggle();
  }
  function s() {
    ga("multidomain.send", "event", "GUI", "Button_Click", "publish_project");
  }
  function u(e) {
    e.preventDefault(), d.sendQuoteForm();
  }
  var l = {
      all: $(".section"),
      initial: $(".initial"),
      results: $(".results"),
      questions: $(".question"),
      more_info: $(".more"),
    },
    c = (function () {
      var e = $("#config"),
        t = {
          appType: e.data("type"),
          appLang: e.data("lang"),
          pricePerHour: e.data("pph"),
          useMultipliers: e.data("multi") || !1,
          currency: {
            symbol: e.data("curr-symbol"),
            symbolBefore: e.data("curr-symbol-before"),
            thousand: e.data("curr-thousands"),
            decimal: e.data("curr-decimal"),
            exchangeRate: e.data("curr-exchange"),
          },
          nextScreenDelay: 1e3,
        };
      return (
        (accounting.settings.currency = {
          symbol: t.currency.symbol || "€",
          decimal: t.currency.decimal || ",",
          thousand: t.currency.thousand || ".",
          precision: 0,
          format: t.currency.symbolBefore ? "%s %v" : "%v %s",
        }),
        e.remove(),
        t
      );
    })(),
    d = new e();
  l.initial.on("click", ".js--start", t),
    l.questions.on("click", ".js--answer", n),
    l.questions.on("click", ".js--previous", o),
    l.results.on("click", ".js--change", a),
    l.results.on("click", ".js--restart", i),
    l.results.on("click", ".js--toggle-results", r),
    l.results.on("click", ".js--start-project", s),
    $("#quoteForm").on("click", ".js--form-send", u),
    (function () {
      var e = l.questions.eq(0).find(".question-title"),
        t = e.html().split(" ");
      (t[1] = "<span>" + t[1] + "</span>"),
        e.html(t.join(" ")),
        e.on("click", "span", function () {
          var e = new Date().getTime(),
            t = $(this).data("lastTouch") || e + 1,
            n = e - t;
          n > 0 && n < 500 && d.jumpToEnd(), $(this).data("lastTouch", e);
        });
    })();
  var m = {
    color: $("body").data("theme-color"),
  };
  $("#legalModalTrigger").animatedModal({
    modalTarget: "legalModal",
    color: m.color,
  }),
    $("#findUsModalTrigger").animatedModal({
      modalTarget: "findUsModal",
      color: m.color,
    }),
    $("#aboutModalTrigger").animatedModal({
      modalTarget: "aboutModal",
      color: m.color,
    }),
    $("#quoteModalTrigger").animatedModal({
      modalTarget: "quoteModal",
      color: m.color,
    }),
    $("#moreInfoModalModalTrigger").animatedModal({
      modalTarget: "moreInfoModal",
      color: m.color,
    }),
    $("#moreInfoModalModalTrigger").on("click", function () {
      $(".modal-more-info").show();
    });
}),
  (window.onload = init);
!(function () {
  "use strict";
  function t(t) {
    f.push(t), 1 == f.length && d();
  }
  function e() {
    for (; f.length; ) f[0](), f.shift();
  }
  function n(t) {
    (this.a = u), (this.b = void 0), (this.f = []);
    var e = this;
    try {
      t(
        function (t) {
          a(e, t);
        },
        function (t) {
          s(e, t);
        }
      );
    } catch (t) {
      s(e, t);
    }
  }
  function o(t) {
    return new n(function (e, n) {
      n(t);
    });
  }
  function i(t) {
    return new n(function (e) {
      e(t);
    });
  }
  function a(t, e) {
    if (t.a == u) {
      if (e == t) throw new TypeError();
      var n = !1;
      try {
        var o = e && e.then;
        if (null != e && "object" == typeof e && "function" == typeof o)
          return void o.call(
            e,
            function (e) {
              n || a(t, e), (n = !0);
            },
            function (e) {
              n || s(t, e), (n = !0);
            }
          );
      } catch (e) {
        return void (n || s(t, e));
      }
      (t.a = 0), (t.b = e), r(t);
    }
  }
  function s(t, e) {
    if (t.a == u) {
      if (e == t) throw new TypeError();
      (t.a = 1), (t.b = e), r(t);
    }
  }
  function r(e) {
    t(function () {
      if (e.a != u)
        for (; e.f.length; ) {
          var t = e.f.shift(),
            n = t[0],
            o = t[1],
            i = t[2],
            t = t[3];
          try {
            0 == e.a
              ? i("function" == typeof n ? n.call(void 0, e.b) : e.b)
              : 1 == e.a &&
                ("function" == typeof o ? i(o.call(void 0, e.b)) : t(e.b));
          } catch (e) {
            t(e);
          }
        }
    });
  }
  function c(t) {
    return new n(function (e, n) {
      var o = 0,
        a = [];
      0 == t.length && e(a);
      for (var s = 0; s < t.length; s += 1)
        i(t[s]).c(
          (function (n) {
            return function (i) {
              (a[n] = i), (o += 1) == t.length && e(a);
            };
          })(s),
          n
        );
    });
  }
  function l(t) {
    return new n(function (e, n) {
      for (var o = 0; o < t.length; o += 1) i(t[o]).c(e, n);
    });
  }
  var d,
    f = [];
  d = function () {
    setTimeout(e);
  };
  var u = 2;
  (n.prototype.g = function (t) {
    return this.c(void 0, t);
  }),
    (n.prototype.c = function (t, e) {
      var o = this;
      return new n(function (n, i) {
        o.f.push([t, e, n, i]), r(o);
      });
    }),
    window.Promise ||
      ((window.Promise = n),
      (window.Promise.resolve = i),
      (window.Promise.reject = o),
      (window.Promise.race = l),
      (window.Promise.all = c),
      (window.Promise.prototype.then = n.prototype.c),
      (window.Promise.prototype.catch = n.prototype.g));
})(),
  (function () {
    function t(t, e) {
      document.addEventListener
        ? t.addEventListener("scroll", e, !1)
        : t.attachEvent("scroll", e);
    }
    function e(t) {
      document.body
        ? t()
        : document.addEventListener
        ? document.addEventListener("DOMContentLoaded", function e() {
            document.removeEventListener("DOMContentLoaded", e), t();
          })
        : document.attachEvent("onreadystatechange", function e() {
            ("interactive" != document.readyState &&
              "complete" != document.readyState) ||
              (document.detachEvent("onreadystatechange", e), t());
          });
    }
    function n(t) {
      (this.a = document.createElement("div")),
        this.a.setAttribute("aria-hidden", "true"),
        this.a.appendChild(document.createTextNode(t)),
        (this.b = document.createElement("span")),
        (this.c = document.createElement("span")),
        (this.h = document.createElement("span")),
        (this.f = document.createElement("span")),
        (this.g = -1),
        (this.b.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.c.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.f.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.h.style.cssText =
          "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
        this.b.appendChild(this.h),
        this.c.appendChild(this.f),
        this.a.appendChild(this.b),
        this.a.appendChild(this.c);
    }
    function o(t, e) {
      t.a.style.cssText =
        "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
        e +
        ";";
    }
    function i(t) {
      var e = t.a.offsetWidth,
        n = e + 100;
      return (
        (t.f.style.width = n + "px"),
        (t.c.scrollLeft = n),
        (t.b.scrollLeft = t.b.scrollWidth + 100),
        t.g !== e && ((t.g = e), !0)
      );
    }
    function a(e, n) {
      function o() {
        var t = a;
        i(t) && t.a.parentNode && n(t.g);
      }
      var a = e;
      t(e.b, o), t(e.c, o), i(e);
    }
    function s(t, e) {
      var n = e || {};
      (this.family = t),
        (this.style = n.style || "normal"),
        (this.weight = n.weight || "normal"),
        (this.stretch = n.stretch || "normal");
    }
    function r() {
      if (null === u)
        if (c() && /Apple/.test(window.navigator.vendor)) {
          var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
            window.navigator.userAgent
          );
          u = !!t && 603 > parseInt(t[1], 10);
        } else u = !1;
      return u;
    }
    function c() {
      return null === m && (m = !!document.fonts), m;
    }
    function l() {
      if (null === h) {
        var t = document.createElement("div");
        try {
          t.style.font = "condensed 100px sans-serif";
        } catch (t) {}
        h = "" !== t.style.font;
      }
      return h;
    }
    function d(t, e) {
      return [t.style, t.weight, l() ? t.stretch : "", "100px", e].join(" ");
    }
    var f = null,
      u = null,
      h = null,
      m = null;
    (s.prototype.load = function (t, i) {
      var s = this,
        l = t || "BESbswy",
        u = 0,
        h = i || 3e3,
        m = new Date().getTime();
      return new Promise(function (t, i) {
        if (c() && !r()) {
          var p = new Promise(function (t, e) {
              function n() {
                new Date().getTime() - m >= h
                  ? e()
                  : document.fonts.load(d(s, '"' + s.family + '"'), l).then(
                      function (e) {
                        1 <= e.length ? t() : setTimeout(n, 25);
                      },
                      function () {
                        e();
                      }
                    );
              }
              n();
            }),
            w = new Promise(function (t, e) {
              u = setTimeout(e, h);
            });
          Promise.race([w, p]).then(
            function () {
              clearTimeout(u), t(s);
            },
            function () {
              i(s);
            }
          );
        } else
          e(function () {
            function e() {
              var e;
              (e =
                (-1 != v && -1 != y) ||
                (-1 != v && -1 != g) ||
                (-1 != y && -1 != g)) &&
                ((e = v != y && v != g && y != g) ||
                  (null === f &&
                    ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )),
                    (f =
                      !!e &&
                      (536 > parseInt(e[1], 10) ||
                        (536 === parseInt(e[1], 10) &&
                          11 >= parseInt(e[2], 10))))),
                  (e =
                    f &&
                    ((v == b && y == b && g == b) ||
                      (v == E && y == E && g == E) ||
                      (v == x && y == x && g == x)))),
                (e = !e)),
                e &&
                  (N.parentNode && N.parentNode.removeChild(N),
                  clearTimeout(u),
                  t(s));
            }
            function r() {
              if (new Date().getTime() - m >= h)
                N.parentNode && N.parentNode.removeChild(N), i(s);
              else {
                var t = document.hidden;
                (!0 !== t && void 0 !== t) ||
                  ((v = c.a.offsetWidth),
                  (y = p.a.offsetWidth),
                  (g = w.a.offsetWidth),
                  e()),
                  (u = setTimeout(r, 50));
              }
            }
            var c = new n(l),
              p = new n(l),
              w = new n(l),
              v = -1,
              y = -1,
              g = -1,
              b = -1,
              E = -1,
              x = -1,
              N = document.createElement("div");
            (N.dir = "ltr"),
              o(c, d(s, "sans-serif")),
              o(p, d(s, "serif")),
              o(w, d(s, "monospace")),
              N.appendChild(c.a),
              N.appendChild(p.a),
              N.appendChild(w.a),
              document.body.appendChild(N),
              (b = c.a.offsetWidth),
              (E = p.a.offsetWidth),
              (x = w.a.offsetWidth),
              r(),
              a(c, function (t) {
                (v = t), e();
              }),
              o(c, d(s, '"' + s.family + '",sans-serif')),
              a(p, function (t) {
                (y = t), e();
              }),
              o(p, d(s, '"' + s.family + '",serif')),
              a(w, function (t) {
                (g = t), e();
              }),
              o(w, d(s, '"' + s.family + '",monospace'));
          });
      });
    }),
      "object" == typeof module
        ? (module.exports = s)
        : ((window.FontFaceObserver = s),
          (window.FontFaceObserver.prototype.load = s.prototype.load));
  })();
var fontNormal = new FontFaceObserver("Gotham Rounded", {
    weight: 300,
  }),
  fontBold = new FontFaceObserver("Gotham Rounded", {
    weight: 700,
  });
Promise.all([fontNormal.load(), fontBold.load()]).then(function () {
  document.documentElement.className += "fonts-loaded";
  var t = document.getElementsByTagName("h1");
  for (i = 0; i < t.length; i++) t[i].className += " fonts-loaded";
  var e = document.getElementsByTagName("h2");
  for (i = 0; i < e.length; i++) e[i].className += " fonts-loaded";
  var n = document.getElementsByTagName("h3");
  for (i = 0; i < n.length; i++) n[i].className += " fonts-loaded";
  var o = document.getElementsByClassName("button");
  for (i = 0; i < o.length; i++) o[i].className += " fonts-loaded";
  var a = document.getElementsByClassName("subtitle");
  for (i = 0; i < a.length; i++) a[i].className += " fonts-loaded";
  var s = document.getElementsByTagName("label");
  for (i = 0; i < s.length; i++) s[i].className += " fonts-loaded";
});
/*! jssocials - v1.5.0 - 2017-04-30
 * http://js-socials.com
 * Copyright (c) 2017 Artem Tabalin; Licensed MIT */
(function (window, $, undefined) {
  var JSSOCIALS = "JSSocials",
    JSSOCIALS_DATA_KEY = JSSOCIALS;

  var getOrApply = function (value, context) {
    if ($.isFunction(value)) {
      return value.apply(context, $.makeArray(arguments).slice(2));
    }
    return value;
  };

  var IMG_SRC_REGEX =
    /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i;
  var URL_PARAMS_REGEX = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g;

  var MEASURES = {
    G: 1000000000,
    M: 1000000,
    K: 1000,
  };

  var shares = {};

  function Socials(element, config) {
    var $element = $(element);

    $element.data(JSSOCIALS_DATA_KEY, this);

    this._$element = $element;

    this.shares = [];

    this._init(config);
    this._render();
  }

  Socials.prototype = {
    url: "",
    text: "",
    shareIn: "blank",

    showLabel: function (screenWidth) {
      return this.showCount === false
        ? screenWidth > this.smallScreenWidth
        : screenWidth >= this.largeScreenWidth;
    },

    showCount: function (screenWidth) {
      return screenWidth <= this.smallScreenWidth ? "inside" : true;
    },

    smallScreenWidth: 640,
    largeScreenWidth: 1024,

    resizeTimeout: 200,

    elementClass: "jssocials",
    sharesClass: "jssocials-shares",
    shareClass: "jssocials-share",
    shareButtonClass: "jssocials-share-button",
    shareLinkClass: "jssocials-share-link",
    shareLogoClass: "jssocials-share-logo",
    shareLabelClass: "jssocials-share-label",
    shareLinkCountClass: "jssocials-share-link-count",
    shareCountBoxClass: "jssocials-share-count-box",
    shareCountClass: "jssocials-share-count",
    shareZeroCountClass: "jssocials-share-no-count",

    _init: function (config) {
      this._initDefaults();
      $.extend(this, config);
      this._initShares();
      this._attachWindowResizeCallback();
    },

    _initDefaults: function () {
      this.url = window.location.href;
      this.text = $.trim(
        $("meta[name=description]").attr("content") || $("title").text()
      );
    },

    _initShares: function () {
      this.shares = $.map(
        this.shares,
        $.proxy(function (shareConfig) {
          if (typeof shareConfig === "string") {
            shareConfig = {
              share: shareConfig,
            };
          }

          var share = shareConfig.share && shares[shareConfig.share];

          if (!share && !shareConfig.renderer) {
            throw Error("Share '" + shareConfig.share + "' is not found");
          }

          return $.extend(
            {
              url: this.url,
              text: this.text,
            },
            share,
            shareConfig
          );
        }, this)
      );
    },

    _attachWindowResizeCallback: function () {
      $(window).on("resize", $.proxy(this._windowResizeHandler, this));
    },

    _detachWindowResizeCallback: function () {
      $(window).off("resize", this._windowResizeHandler);
    },

    _windowResizeHandler: function () {
      if ($.isFunction(this.showLabel) || $.isFunction(this.showCount)) {
        window.clearTimeout(this._resizeTimer);
        this._resizeTimer = setTimeout(
          $.proxy(this.refresh, this),
          this.resizeTimeout
        );
      }
    },

    _render: function () {
      this._clear();

      this._defineOptionsByScreen();

      this._$element.addClass(this.elementClass);

      this._$shares = $("<div>")
        .addClass(this.sharesClass)
        .appendTo(this._$element);

      this._renderShares();
    },

    _defineOptionsByScreen: function () {
      this._screenWidth = $(window).width();
      this._showLabel = getOrApply(this.showLabel, this, this._screenWidth);
      this._showCount = getOrApply(this.showCount, this, this._screenWidth);
    },

    _renderShares: function () {
      $.each(
        this.shares,
        $.proxy(function (_, share) {
          this._renderShare(share);
        }, this)
      );
    },

    _renderShare: function (share) {
      var $share;

      if ($.isFunction(share.renderer)) {
        $share = $(share.renderer());
      } else {
        $share = this._createShare(share);
      }

      $share
        .addClass(this.shareClass)
        .addClass(share.share ? "jssocials-share-" + share.share : "")
        .addClass(share.css)
        .appendTo(this._$shares);
    },

    _createShare: function (share) {
      var $result = $("<div>");
      var $shareLink = this._createShareLink(share).appendTo($result);

      if (this._showCount) {
        var isInsideCount = this._showCount === "inside";
        var $countContainer = isInsideCount
          ? $shareLink
          : $("<div>").addClass(this.shareCountBoxClass).appendTo($result);
        $countContainer.addClass(
          isInsideCount ? this.shareLinkCountClass : this.shareCountBoxClass
        );
        this._renderShareCount(share, $countContainer);
      }

      return $result;
    },

    _createShareLink: function (share) {
      var shareStrategy = this._getShareStrategy(share);

      var $result = shareStrategy.call(share, {
        shareUrl: this._getShareUrl(share),
      });

      $result
        .addClass(this.shareLinkClass)
        .append(this._createShareLogo(share));

      if (this._showLabel) {
        $result.append(this._createShareLabel(share));
      }

      $.each(this.on || {}, function (event, handler) {
        if ($.isFunction(handler)) {
          $result.on(event, $.proxy(handler, share));
        }
      });

      return $result;
    },

    _getShareStrategy: function (share) {
      var result = shareStrategies[share.shareIn || this.shareIn];

      if (!result)
        throw Error("Share strategy '" + this.shareIn + "' not found");

      return result;
    },

    _getShareUrl: function (share) {
      var shareUrl = getOrApply(share.shareUrl, share);
      return this._formatShareUrl(shareUrl, share);
    },

    _createShareLogo: function (share) {
      var logo = share.logo;

      var $result = IMG_SRC_REGEX.test(logo)
        ? $("<img>").attr("src", share.logo)
        : $("<i>").addClass(logo);

      $result.addClass(this.shareLogoClass);

      return $result;
    },

    _createShareLabel: function (share) {
      return $("<span>").addClass(this.shareLabelClass).text(share.label);
    },

    _renderShareCount: function (share, $container) {
      var $count = $("<span>").addClass(this.shareCountClass);

      $container.addClass(this.shareZeroCountClass).append($count);

      this._loadCount(share).done(
        $.proxy(function (count) {
          if (count) {
            $container.removeClass(this.shareZeroCountClass);
            $count.text(count);
          }
        }, this)
      );
    },

    _loadCount: function (share) {
      var deferred = $.Deferred();
      var countUrl = this._getCountUrl(share);

      if (!countUrl) {
        return deferred.resolve(0).promise();
      }

      var handleSuccess = $.proxy(function (response) {
        deferred.resolve(this._getCountValue(response, share));
      }, this);

      $.getJSON(countUrl)
        .done(handleSuccess)
        .fail(function () {
          $.get(countUrl)
            .done(handleSuccess)
            .fail(function () {
              deferred.resolve(0);
            });
        });

      return deferred.promise();
    },

    _getCountUrl: function (share) {
      var countUrl = getOrApply(share.countUrl, share);
      return this._formatShareUrl(countUrl, share);
    },

    _getCountValue: function (response, share) {
      var count =
        ($.isFunction(share.getCount) ? share.getCount(response) : response) ||
        0;
      return typeof count === "string" ? count : this._formatNumber(count);
    },

    _formatNumber: function (number) {
      $.each(MEASURES, function (letter, value) {
        if (number >= value) {
          number = parseFloat((number / value).toFixed(2)) + letter;
          return false;
        }
      });

      return number;
    },

    _formatShareUrl: function (url, share) {
      return url.replace(URL_PARAMS_REGEX, function (match, key, field) {
        var value = share[field] || "";
        return value ? (key || "") + window.encodeURIComponent(value) : "";
      });
    },

    _clear: function () {
      window.clearTimeout(this._resizeTimer);
      this._$element.empty();
    },

    _passOptionToShares: function (key, value) {
      var shares = this.shares;

      $.each(["url", "text"], function (_, optionName) {
        if (optionName !== key) return;

        $.each(shares, function (_, share) {
          share[key] = value;
        });
      });
    },

    _normalizeShare: function (share) {
      if ($.isNumeric(share)) {
        return this.shares[share];
      }

      if (typeof share === "string") {
        return $.grep(this.shares, function (s) {
          return s.share === share;
        })[0];
      }

      return share;
    },

    refresh: function () {
      this._render();
    },

    destroy: function () {
      this._clear();
      this._detachWindowResizeCallback();

      this._$element
        .removeClass(this.elementClass)
        .removeData(JSSOCIALS_DATA_KEY);
    },

    option: function (key, value) {
      if (arguments.length === 1) {
        return this[key];
      }

      this[key] = value;

      this._passOptionToShares(key, value);

      this.refresh();
    },

    shareOption: function (share, key, value) {
      share = this._normalizeShare(share);

      if (arguments.length === 2) {
        return share[key];
      }

      share[key] = value;
      this.refresh();
    },
  };

  $.fn.jsSocials = function (config) {
    var args = $.makeArray(arguments),
      methodArgs = args.slice(1),
      result = this;

    this.each(function () {
      var $element = $(this),
        instance = $element.data(JSSOCIALS_DATA_KEY),
        methodResult;

      if (instance) {
        if (typeof config === "string") {
          methodResult = instance[config].apply(instance, methodArgs);
          if (methodResult !== undefined && methodResult !== instance) {
            result = methodResult;
            return false;
          }
        } else {
          instance._detachWindowResizeCallback();
          instance._init(config);
          instance._render();
        }
      } else {
        new Socials($element, config);
      }
    });

    return result;
  };

  var setDefaults = function (config) {
    var component;

    if ($.isPlainObject(config)) {
      component = Socials.prototype;
    } else {
      component = shares[config];
      config = arguments[1] || {};
    }

    $.extend(component, config);
  };

  var shareStrategies = {
    popup: function (args) {
      return $("<a>")
        .attr("href", "#")
        .on("click", function () {
          window.open(
            args.shareUrl,
            null,
            "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"
          );
          return false;
        });
    },

    blank: function (args) {
      return $("<a>").attr({
        target: "_blank",
        href: args.shareUrl,
      });
    },

    self: function (args) {
      return $("<a>").attr({
        target: "_self",
        href: args.shareUrl,
      });
    },
  };

  window.jsSocials = {
    Socials: Socials,
    shares: shares,
    shareStrategies: shareStrategies,
    setDefaults: setDefaults,
  };
})(window, jQuery);

(function (window, $, jsSocials, undefined) {
  $.extend(jsSocials.shares, {
    email: {
      label: "E-mail",
      logo: "fa fa-at",
      shareUrl: "mailto:{to}?subject={text}&body={url}",
      countUrl: "",
      shareIn: "self",
    },

    twitter: {
      label: "Tweet",
      logo: "fa fa-twitter",
      shareUrl:
        "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
      countUrl: "",
    },

    facebook: {
      label: "Like",
      logo: "fa fa-facebook",
      shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
      countUrl: "https://graph.facebook.com/?id={url}",
      getCount: function (data) {
        return (data.share && data.share.share_count) || 0;
      },
    },

    vkontakte: {
      label: "Like",
      logo: "fa fa-vk",
      shareUrl:
        "https://vk.com/share.php?url={url}&title={title}&description={text}",
      countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
      getCount: function (data) {
        return parseInt(data.slice(15, -2).split(", ")[1]);
      },
    },

    googleplus: {
      label: "+1",
      logo: "fa fa-google",
      shareUrl: "https://plus.google.com/share?url={url}",
      countUrl: "",
    },

    linkedin: {
      label: "Share",
      logo: "fa fa-linkedin",
      shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
      countUrl:
        "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
      getCount: function (data) {
        return data.count;
      },
    },

    pinterest: {
      label: "Pin it",
      logo: "fa fa-pinterest",
      shareUrl:
        "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
      countUrl:
        "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
      getCount: function (data) {
        return data.count;
      },
    },

    stumbleupon: {
      label: "Share",
      logo: "fa fa-stumbleupon",
      shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
      countUrl:
        "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
      getCount: function (data) {
        return data.result && data.result.views;
      },
    },

    telegram: {
      label: "Telegram",
      logo: "fa fa-telegram",
      shareUrl: "tg://msg?text={url} {text}",
      countUrl: "",
      shareIn: "self",
    },

    whatsapp: {
      label: "WhatsApp",
      logo: "fa fa-whatsapp",
      shareUrl: "whatsapp://send?text={url} {text}",
      countUrl: "",
      shareIn: "self",
    },

    line: {
      label: "LINE",
      logo: "fa fa-comment",
      shareUrl: "http://line.me/R/msg/text/?{text} {url}",
      countUrl: "",
    },

    viber: {
      label: "Viber",
      logo: "fa fa-volume-control-phone",
      shareUrl: "viber://forward?text={url} {text}",
      countUrl: "",
      shareIn: "self",
    },

    pocket: {
      label: "Pocket",
      logo: "fa fa-get-pocket",
      shareUrl: "https://getpocket.com/save?url={url}&title={title}",
      countUrl: "",
    },

    messenger: {
      label: "Share",
      logo: "fa fa-commenting",
      shareUrl: "fb-messenger://share?link={url}",
      countUrl: "",
      shareIn: "self",
    },
    rss: {
      label: "RSS",
      logo: "fa fa-rss",
      shareUrl: "/feeds/",
      countUrl: "",
      shareIn: "blank",
    },
  });
})(window, jQuery, window.jsSocials);
