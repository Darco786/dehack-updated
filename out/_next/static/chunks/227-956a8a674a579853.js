;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [227],
  {
    2945: function (e, t, i) {
      e.exports = { default: i(6981), __esModule: !0 }
    },
    5861: function (e, t, i) {
      e.exports = { default: i(5627), __esModule: !0 }
    },
    2242: function (e, t, i) {
      e.exports = { default: i(3391), __esModule: !0 }
    },
    5105: function (e, t, i) {
      e.exports = { default: i(381), __esModule: !0 }
    },
    5345: function (e, t, i) {
      e.exports = { default: i(433), __esModule: !0 }
    },
    3516: function (e, t, i) {
      e.exports = { default: i(25), __esModule: !0 }
    },
    4275: function (e, t, i) {
      e.exports = { default: i(7118), __esModule: !0 }
    },
    9663: function (e, t) {
      'use strict'
      ;(t.__esModule = !0),
        (t.default = function (e, t) {
          if (!(e instanceof t))
            throw TypeError('Cannot call a class as a function')
        })
    },
    2600: function (e, t, i) {
      'use strict'
      t.__esModule = !0
      var r,
        n = (r = i(2242)) && r.__esModule ? r : { default: r }
      t.default = (function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              (0, n.default)(e, r.key, r)
          }
        }
        return function (t, i, r) {
          return i && e(t.prototype, i), r && e(t, r), t
        }
      })()
    },
    8239: function (e, t, i) {
      'use strict'
      t.__esModule = !0
      var r,
        n = (r = i(2945)) && r.__esModule ? r : { default: r }
      t.default =
        n.default ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t]
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
          }
          return e
        }
    },
    3196: function (e, t, i) {
      'use strict'
      t.__esModule = !0
      var r = a(i(5345)),
        n = a(i(5861)),
        s = a(i(2444))
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.default = function (e, t) {
        if ('function' != typeof t && null !== t)
          throw TypeError(
            'Super expression must either be null or a function, not ' +
              (void 0 === t ? 'undefined' : (0, s.default)(t))
          )
        ;(e.prototype = (0, n.default)(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t && (r.default ? (0, r.default)(e, t) : (e.__proto__ = t))
      }
    },
    9135: function (e, t, i) {
      'use strict'
      t.__esModule = !0
      var r,
        n = (r = i(2444)) && r.__esModule ? r : { default: r }
      t.default = function (e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return t &&
          ((void 0 === t ? 'undefined' : (0, n.default)(t)) === 'object' ||
            'function' == typeof t)
          ? t
          : e
      }
    },
    2444: function (e, t, i) {
      'use strict'
      t.__esModule = !0
      var r = a(i(4275)),
        n = a(i(3516)),
        s =
          'function' == typeof n.default && 'symbol' == typeof r.default
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof n.default &&
                  e.constructor === n.default &&
                  e !== n.default.prototype
                  ? 'symbol'
                  : typeof e
              }
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.default =
        'function' == typeof n.default && 'symbol' === s(r.default)
          ? function (e) {
              return void 0 === e ? 'undefined' : s(e)
            }
          : function (e) {
              return e &&
                'function' == typeof n.default &&
                e.constructor === n.default &&
                e !== n.default.prototype
                ? 'symbol'
                : void 0 === e
                ? 'undefined'
                : s(e)
            }
    },
    6981: function (e, t, i) {
      i(2699), (e.exports = i(4579).Object.assign)
    },
    5627: function (e, t, i) {
      i(6760)
      var r = i(4579).Object
      e.exports = function (e, t) {
        return r.create(e, t)
      }
    },
    3391: function (e, t, i) {
      i(1477)
      var r = i(4579).Object
      e.exports = function (e, t, i) {
        return r.defineProperty(e, t, i)
      }
    },
    381: function (e, t, i) {
      i(7220), (e.exports = i(4579).Object.getPrototypeOf)
    },
    433: function (e, t, i) {
      i(9349), (e.exports = i(4579).Object.setPrototypeOf)
    },
    25: function (e, t, i) {
      i(6840), i(4058), i(8174), i(6461), (e.exports = i(4579).Symbol)
    },
    7118: function (e, t, i) {
      i(1867), i(3871), (e.exports = i(5103).f('iterator'))
    },
    5663: function (e) {
      e.exports = function (e) {
        if ('function' != typeof e) throw TypeError(e + ' is not a function!')
        return e
      }
    },
    9003: function (e) {
      e.exports = function () {}
    },
    2159: function (e, t, i) {
      var r = i(6727)
      e.exports = function (e) {
        if (!r(e)) throw TypeError(e + ' is not an object!')
        return e
      }
    },
    7428: function (e, t, i) {
      var r = i(7932),
        n = i(8728),
        s = i(6531)
      e.exports = function (e) {
        return function (t, i, a) {
          var l,
            o = r(t),
            d = n(o.length),
            c = s(a, d)
          if (e && i != i) {
            for (; d > c; ) if ((l = o[c++]) != l) return !0
          } else
            for (; d > c; c++)
              if ((e || c in o) && o[c] === i) return e || c || 0
          return !e && -1
        }
      }
    },
    2894: function (e) {
      var t = {}.toString
      e.exports = function (e) {
        return t.call(e).slice(8, -1)
      }
    },
    4579: function (e) {
      var t = (e.exports = { version: '2.6.12' })
      'number' == typeof __e && (__e = t)
    },
    9216: function (e, t, i) {
      var r = i(5663)
      e.exports = function (e, t, i) {
        if ((r(e), void 0 === t)) return e
        switch (i) {
          case 1:
            return function (i) {
              return e.call(t, i)
            }
          case 2:
            return function (i, r) {
              return e.call(t, i, r)
            }
          case 3:
            return function (i, r, n) {
              return e.call(t, i, r, n)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      }
    },
    8333: function (e) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e)
        return e
      }
    },
    9666: function (e, t, i) {
      e.exports = !i(7929)(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      })
    },
    7467: function (e, t, i) {
      var r = i(6727),
        n = i(3938).document,
        s = r(n) && r(n.createElement)
      e.exports = function (e) {
        return s ? n.createElement(e) : {}
      }
    },
    3338: function (e) {
      e.exports =
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ','
        )
    },
    337: function (e, t, i) {
      var r = i(6162),
        n = i(8195),
        s = i(6274)
      e.exports = function (e) {
        var t = r(e),
          i = n.f
        if (i)
          for (var a, l = i(e), o = s.f, d = 0; l.length > d; )
            o.call(e, (a = l[d++])) && t.push(a)
        return t
      }
    },
    3856: function (e, t, i) {
      var r = i(3938),
        n = i(4579),
        s = i(9216),
        a = i(1818),
        l = i(7069),
        o = 'prototype',
        d = function (e, t, i) {
          var c,
            u,
            p,
            f = e & d.F,
            h = e & d.G,
            m = e & d.S,
            v = e & d.P,
            g = e & d.B,
            b = e & d.W,
            y = h ? n : n[t] || (n[t] = {}),
            w = y[o],
            S = h ? r : m ? r[t] : (r[t] || {})[o]
          for (c in (h && (i = t), i))
            !((u = !f && S && void 0 !== S[c]) && l(y, c)) &&
              ((p = u ? S[c] : i[c]),
              (y[c] =
                h && 'function' != typeof S[c]
                  ? i[c]
                  : g && u
                  ? s(p, r)
                  : b && S[c] == p
                  ? (function (e) {
                      var t = function (t, i, r) {
                        if (this instanceof e) {
                          switch (arguments.length) {
                            case 0:
                              return new e()
                            case 1:
                              return new e(t)
                            case 2:
                              return new e(t, i)
                          }
                          return new e(t, i, r)
                        }
                        return e.apply(this, arguments)
                      }
                      return (t[o] = e[o]), t
                    })(p)
                  : v && 'function' == typeof p
                  ? s(Function.call, p)
                  : p),
              v &&
                (((y.virtual || (y.virtual = {}))[c] = p),
                e & d.R && w && !w[c] && a(w, c, p)))
        }
      ;(d.F = 1),
        (d.G = 2),
        (d.S = 4),
        (d.P = 8),
        (d.B = 16),
        (d.W = 32),
        (d.U = 64),
        (d.R = 128),
        (e.exports = d)
    },
    7929: function (e) {
      e.exports = function (e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    3938: function (e) {
      var t = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')())
      'number' == typeof __g && (__g = t)
    },
    7069: function (e) {
      var t = {}.hasOwnProperty
      e.exports = function (e, i) {
        return t.call(e, i)
      }
    },
    1818: function (e, t, i) {
      var r = i(4743),
        n = i(3101)
      e.exports = i(9666)
        ? function (e, t, i) {
            return r.f(e, t, n(1, i))
          }
        : function (e, t, i) {
            return (e[t] = i), e
          }
    },
    4881: function (e, t, i) {
      var r = i(3938).document
      e.exports = r && r.documentElement
    },
    3758: function (e, t, i) {
      e.exports =
        !i(9666) &&
        !i(7929)(function () {
          return (
            7 !=
            Object.defineProperty(i(7467)('div'), 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    799: function (e, t, i) {
      var r = i(2894)
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return 'String' == r(e) ? e.split('') : Object(e)
          }
    },
    1421: function (e, t, i) {
      var r = i(2894)
      e.exports =
        Array.isArray ||
        function (e) {
          return 'Array' == r(e)
        }
    },
    6727: function (e) {
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : 'function' == typeof e
      }
    },
    3945: function (e, t, i) {
      'use strict'
      var r = i(526),
        n = i(3101),
        s = i(5378),
        a = {}
      i(1818)(a, i(2939)('iterator'), function () {
        return this
      }),
        (e.exports = function (e, t, i) {
          ;(e.prototype = r(a, { next: n(1, i) })), s(e, t + ' Iterator')
        })
    },
    5700: function (e, t, i) {
      'use strict'
      var r = i(6227),
        n = i(3856),
        s = i(7470),
        a = i(1818),
        l = i(5449),
        o = i(3945),
        d = i(5378),
        c = i(5089),
        u = i(2939)('iterator'),
        p = !([].keys && 'next' in [].keys()),
        f = 'values',
        h = function () {
          return this
        }
      e.exports = function (e, t, i, m, v, g, b) {
        o(i, t, m)
        var y,
          w,
          S,
          x = function (e) {
            return !p && e in M
              ? M[e]
              : function () {
                  return new i(this, e)
                }
          },
          E = t + ' Iterator',
          T = v == f,
          C = !1,
          M = e.prototype,
          _ = M[u] || M['@@iterator'] || (v && M[v]),
          P = _ || x(v),
          O = v ? (T ? x('entries') : P) : void 0,
          k = ('Array' == t && M.entries) || _
        if (
          (k &&
            (S = c(k.call(new e()))) !== Object.prototype &&
            S.next &&
            (d(S, E, !0), r || 'function' == typeof S[u] || a(S, u, h)),
          T &&
            _ &&
            _.name !== f &&
            ((C = !0),
            (P = function () {
              return _.call(this)
            })),
          (!r || b) && (p || C || !M[u]) && a(M, u, P),
          (l[t] = P),
          (l[E] = h),
          v)
        ) {
          if (
            ((y = {
              values: T ? P : x(f),
              keys: g ? P : x('keys'),
              entries: O,
            }),
            b)
          )
            for (w in y) w in M || s(M, w, y[w])
          else n(n.P + n.F * (p || C), t, y)
        }
        return y
      }
    },
    5084: function (e) {
      e.exports = function (e, t) {
        return { value: t, done: !!e }
      }
    },
    5449: function (e) {
      e.exports = {}
    },
    6227: function (e) {
      e.exports = !0
    },
    7177: function (e, t, i) {
      var r = i(5730)('meta'),
        n = i(6727),
        s = i(7069),
        a = i(4743).f,
        l = 0,
        o =
          Object.isExtensible ||
          function () {
            return !0
          },
        d = !i(7929)(function () {
          return o(Object.preventExtensions({}))
        }),
        c = function (e) {
          a(e, r, { value: { i: 'O' + ++l, w: {} } })
        },
        u = (e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (e, t) {
            if (!n(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e
            if (!s(e, r)) {
              if (!o(e)) return 'F'
              if (!t) return 'E'
              c(e)
            }
            return e[r].i
          },
          getWeak: function (e, t) {
            if (!s(e, r)) {
              if (!o(e)) return !0
              if (!t) return !1
              c(e)
            }
            return e[r].w
          },
          onFreeze: function (e) {
            return d && u.NEED && o(e) && !s(e, r) && c(e), e
          },
        })
    },
    8082: function (e, t, i) {
      'use strict'
      var r = i(9666),
        n = i(6162),
        s = i(8195),
        a = i(6274),
        l = i(6530),
        o = i(799),
        d = Object.assign
      e.exports =
        !d ||
        i(7929)(function () {
          var e = {},
            t = {},
            i = Symbol(),
            r = 'abcdefghijklmnopqrst'
          return (
            (e[i] = 7),
            r.split('').forEach(function (e) {
              t[e] = e
            }),
            7 != d({}, e)[i] || Object.keys(d({}, t)).join('') != r
          )
        })
          ? function (e, t) {
              for (
                var i = l(e), d = arguments.length, c = 1, u = s.f, p = a.f;
                d > c;

              )
                for (
                  var f,
                    h = o(arguments[c++]),
                    m = u ? n(h).concat(u(h)) : n(h),
                    v = m.length,
                    g = 0;
                  v > g;

                )
                  (f = m[g++]), (!r || p.call(h, f)) && (i[f] = h[f])
              return i
            }
          : d
    },
    526: function (e, t, i) {
      var r = i(2159),
        n = i(7856),
        s = i(3338),
        a = i(8989)('IE_PROTO'),
        l = function () {},
        o = 'prototype',
        d = function () {
          var e,
            t = i(7467)('iframe'),
            r = s.length
          for (
            t.style.display = 'none',
              i(4881).appendChild(t),
              t.src = 'javascript:',
              (e = t.contentWindow.document).open(),
              e.write('<script>document.F=Object</script>'),
              e.close(),
              d = e.F;
            r--;

          )
            delete d[o][s[r]]
          return d()
        }
      e.exports =
        Object.create ||
        function (e, t) {
          var i
          return (
            null !== e
              ? ((l[o] = r(e)), (i = new l()), (l[o] = null), (i[a] = e))
              : (i = d()),
            void 0 === t ? i : n(i, t)
          )
        }
    },
    4743: function (e, t, i) {
      var r = i(2159),
        n = i(3758),
        s = i(3206),
        a = Object.defineProperty
      t.f = i(9666)
        ? Object.defineProperty
        : function (e, t, i) {
            if ((r(e), (t = s(t, !0)), r(i), n))
              try {
                return a(e, t, i)
              } catch (e) {}
            if ('get' in i || 'set' in i)
              throw TypeError('Accessors not supported!')
            return 'value' in i && (e[t] = i.value), e
          }
    },
    7856: function (e, t, i) {
      var r = i(4743),
        n = i(2159),
        s = i(6162)
      e.exports = i(9666)
        ? Object.defineProperties
        : function (e, t) {
            n(e)
            for (var i, a = s(t), l = a.length, o = 0; l > o; )
              r.f(e, (i = a[o++]), t[i])
            return e
          }
    },
    6183: function (e, t, i) {
      var r = i(6274),
        n = i(3101),
        s = i(7932),
        a = i(3206),
        l = i(7069),
        o = i(3758),
        d = Object.getOwnPropertyDescriptor
      t.f = i(9666)
        ? d
        : function (e, t) {
            if (((e = s(e)), (t = a(t, !0)), o))
              try {
                return d(e, t)
              } catch (e) {}
            if (l(e, t)) return n(!r.f.call(e, t), e[t])
          }
    },
    4368: function (e, t, i) {
      var r = i(7932),
        n = i(3230).f,
        s = {}.toString,
        a =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        l = function (e) {
          try {
            return n(e)
          } catch (e) {
            return a.slice()
          }
        }
      e.exports.f = function (e) {
        return a && '[object Window]' == s.call(e) ? l(e) : n(r(e))
      }
    },
    3230: function (e, t, i) {
      var r = i(2963),
        n = i(3338).concat('length', 'prototype')
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, n)
        }
    },
    8195: function (e, t) {
      t.f = Object.getOwnPropertySymbols
    },
    5089: function (e, t, i) {
      var r = i(7069),
        n = i(6530),
        s = i(8989)('IE_PROTO'),
        a = Object.prototype
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return r((e = n(e)), s)
            ? e[s]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        }
    },
    2963: function (e, t, i) {
      var r = i(7069),
        n = i(7932),
        s = i(7428)(!1),
        a = i(8989)('IE_PROTO')
      e.exports = function (e, t) {
        var i,
          l = n(e),
          o = 0,
          d = []
        for (i in l) i != a && r(l, i) && d.push(i)
        for (; t.length > o; ) r(l, (i = t[o++])) && (~s(d, i) || d.push(i))
        return d
      }
    },
    6162: function (e, t, i) {
      var r = i(2963),
        n = i(3338)
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, n)
        }
    },
    6274: function (e, t) {
      t.f = {}.propertyIsEnumerable
    },
    2584: function (e, t, i) {
      var r = i(3856),
        n = i(4579),
        s = i(7929)
      e.exports = function (e, t) {
        var i = (n.Object || {})[e] || Object[e],
          a = {}
        ;(a[e] = t(i)),
          r(
            r.S +
              r.F *
                s(function () {
                  i(1)
                }),
            'Object',
            a
          )
      }
    },
    3101: function (e) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        }
      }
    },
    7470: function (e, t, i) {
      e.exports = i(1818)
    },
    2906: function (e, t, i) {
      var r = i(6727),
        n = i(2159),
        s = function (e, t) {
          if ((n(e), !r(t) && null !== t))
            throw TypeError(t + ": can't set as prototype!")
        }
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function (e, t, r) {
                try {
                  ;(r = i(9216)(
                    Function.call,
                    i(6183).f(Object.prototype, '__proto__').set,
                    2
                  ))(e, []),
                    (t = !(e instanceof Array))
                } catch (e) {
                  t = !0
                }
                return function (e, i) {
                  return s(e, i), t ? (e.__proto__ = i) : r(e, i), e
                }
              })({}, !1)
            : void 0),
        check: s,
      }
    },
    5378: function (e, t, i) {
      var r = i(4743).f,
        n = i(7069),
        s = i(2939)('toStringTag')
      e.exports = function (e, t, i) {
        e &&
          !n((e = i ? e : e.prototype), s) &&
          r(e, s, { configurable: !0, value: t })
      }
    },
    8989: function (e, t, i) {
      var r = i(250)('keys'),
        n = i(5730)
      e.exports = function (e) {
        return r[e] || (r[e] = n(e))
      }
    },
    250: function (e, t, i) {
      var r = i(4579),
        n = i(3938),
        s = '__core-js_shared__',
        a = n[s] || (n[s] = {})
      ;(e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: r.version,
        mode: i(6227) ? 'pure' : 'global',
        copyright: '\xa9 2020 Denis Pushkarev (zloirock.ru)',
      })
    },
    510: function (e, t, i) {
      var r = i(1052),
        n = i(8333)
      e.exports = function (e) {
        return function (t, i) {
          var s,
            a,
            l = String(n(t)),
            o = r(i),
            d = l.length
          return o < 0 || o >= d
            ? e
              ? ''
              : void 0
            : (s = l.charCodeAt(o)) < 55296 ||
              s > 56319 ||
              o + 1 === d ||
              (a = l.charCodeAt(o + 1)) < 56320 ||
              a > 57343
            ? e
              ? l.charAt(o)
              : s
            : e
            ? l.slice(o, o + 2)
            : ((s - 55296) << 10) + (a - 56320) + 65536
        }
      }
    },
    6531: function (e, t, i) {
      var r = i(1052),
        n = Math.max,
        s = Math.min
      e.exports = function (e, t) {
        return (e = r(e)) < 0 ? n(e + t, 0) : s(e, t)
      }
    },
    1052: function (e) {
      var t = Math.ceil,
        i = Math.floor
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? i : t)(e)
      }
    },
    7932: function (e, t, i) {
      var r = i(799),
        n = i(8333)
      e.exports = function (e) {
        return r(n(e))
      }
    },
    8728: function (e, t, i) {
      var r = i(1052),
        n = Math.min
      e.exports = function (e) {
        return e > 0 ? n(r(e), 9007199254740991) : 0
      }
    },
    6530: function (e, t, i) {
      var r = i(8333)
      e.exports = function (e) {
        return Object(r(e))
      }
    },
    3206: function (e, t, i) {
      var r = i(6727)
      e.exports = function (e, t) {
        var i, n
        if (!r(e)) return e
        if (
          (t && 'function' == typeof (i = e.toString) && !r((n = i.call(e)))) ||
          ('function' == typeof (i = e.valueOf) && !r((n = i.call(e)))) ||
          (!t && 'function' == typeof (i = e.toString) && !r((n = i.call(e))))
        )
          return n
        throw TypeError("Can't convert object to primitive value")
      }
    },
    5730: function (e) {
      var t = 0,
        i = Math.random()
      e.exports = function (e) {
        return 'Symbol('.concat(
          void 0 === e ? '' : e,
          ')_',
          (++t + i).toString(36)
        )
      }
    },
    6347: function (e, t, i) {
      var r = i(3938),
        n = i(4579),
        s = i(6227),
        a = i(5103),
        l = i(4743).f
      e.exports = function (e) {
        var t = n.Symbol || (n.Symbol = s ? {} : r.Symbol || {})
        '_' == e.charAt(0) || e in t || l(t, e, { value: a.f(e) })
      }
    },
    5103: function (e, t, i) {
      t.f = i(2939)
    },
    2939: function (e, t, i) {
      var r = i(250)('wks'),
        n = i(5730),
        s = i(3938).Symbol,
        a = 'function' == typeof s
      ;(e.exports = function (e) {
        return r[e] || (r[e] = (a && s[e]) || (a ? s : n)('Symbol.' + e))
      }).store = r
    },
    3882: function (e, t, i) {
      'use strict'
      var r = i(9003),
        n = i(5084),
        s = i(5449),
        a = i(7932)
      ;(e.exports = i(5700)(
        Array,
        'Array',
        function (e, t) {
          ;(this._t = a(e)), (this._i = 0), (this._k = t)
        },
        function () {
          var e = this._t,
            t = this._k,
            i = this._i++
          return !e || i >= e.length
            ? ((this._t = void 0), n(1))
            : 'keys' == t
            ? n(0, i)
            : 'values' == t
            ? n(0, e[i])
            : n(0, [i, e[i]])
        },
        'values'
      )),
        (s.Arguments = s.Array),
        r('keys'),
        r('values'),
        r('entries')
    },
    2699: function (e, t, i) {
      var r = i(3856)
      r(r.S + r.F, 'Object', { assign: i(8082) })
    },
    6760: function (e, t, i) {
      var r = i(3856)
      r(r.S, 'Object', { create: i(526) })
    },
    1477: function (e, t, i) {
      var r = i(3856)
      r(r.S + !i(9666) * r.F, 'Object', { defineProperty: i(4743).f })
    },
    7220: function (e, t, i) {
      var r = i(6530),
        n = i(5089)
      i(2584)('getPrototypeOf', function () {
        return function (e) {
          return n(r(e))
        }
      })
    },
    9349: function (e, t, i) {
      var r = i(3856)
      r(r.S, 'Object', { setPrototypeOf: i(2906).set })
    },
    4058: function () {},
    1867: function (e, t, i) {
      'use strict'
      var r = i(510)(!0)
      i(5700)(
        String,
        'String',
        function (e) {
          ;(this._t = String(e)), (this._i = 0)
        },
        function () {
          var e,
            t = this._t,
            i = this._i
          return i >= t.length
            ? { value: void 0, done: !0 }
            : ((e = r(t, i)), (this._i += e.length), { value: e, done: !1 })
        }
      )
    },
    6840: function (e, t, i) {
      'use strict'
      var r = i(3938),
        n = i(7069),
        s = i(9666),
        a = i(3856),
        l = i(7470),
        o = i(7177).KEY,
        d = i(7929),
        c = i(250),
        u = i(5378),
        p = i(5730),
        f = i(2939),
        h = i(5103),
        m = i(6347),
        v = i(337),
        g = i(1421),
        b = i(2159),
        y = i(6727),
        w = i(6530),
        S = i(7932),
        x = i(3206),
        E = i(3101),
        T = i(526),
        C = i(4368),
        M = i(6183),
        _ = i(8195),
        P = i(4743),
        O = i(6162),
        k = M.f,
        L = P.f,
        A = C.f,
        j = r.Symbol,
        I = r.JSON,
        z = I && I.stringify,
        D = 'prototype',
        R = f('_hidden'),
        N = f('toPrimitive'),
        G = {}.propertyIsEnumerable,
        B = c('symbol-registry'),
        $ = c('symbols'),
        F = c('op-symbols'),
        V = Object[D],
        H = 'function' == typeof j && !!_.f,
        W = r.QObject,
        q = !W || !W[D] || !W[D].findChild,
        Y =
          s &&
          d(function () {
            return (
              7 !=
              T(
                L({}, 'a', {
                  get: function () {
                    return L(this, 'a', { value: 7 }).a
                  },
                })
              ).a
            )
          })
            ? function (e, t, i) {
                var r = k(V, t)
                r && delete V[t], L(e, t, i), r && e !== V && L(V, t, r)
              }
            : L,
        X = function (e) {
          var t = ($[e] = T(j[D]))
          return (t._k = e), t
        },
        U =
          H && 'symbol' == typeof j.iterator
            ? function (e) {
                return 'symbol' == typeof e
              }
            : function (e) {
                return e instanceof j
              },
        K = function (e, t, i) {
          return (e === V && K(F, t, i), b(e), (t = x(t, !0)), b(i), n($, t))
            ? (i.enumerable
                ? (n(e, R) && e[R][t] && (e[R][t] = !1),
                  (i = T(i, { enumerable: E(0, !1) })))
                : (n(e, R) || L(e, R, E(1, {})), (e[R][t] = !0)),
              Y(e, t, i))
            : L(e, t, i)
        },
        Z = function (e, t) {
          b(e)
          for (var i, r = v((t = S(t))), n = 0, s = r.length; s > n; )
            K(e, (i = r[n++]), t[i])
          return e
        },
        J = function (e) {
          var t = G.call(this, (e = x(e, !0)))
          return (
            (!(this === V && n($, e)) || !!n(F, e)) &&
            (!(t || !n(this, e) || !n($, e) || (n(this, R) && this[R][e])) || t)
          )
        },
        Q = function (e, t) {
          if (((e = S(e)), (t = x(t, !0)), !(e === V && n($, t)) || n(F, t))) {
            var i = k(e, t)
            return (
              i && n($, t) && !(n(e, R) && e[R][t]) && (i.enumerable = !0), i
            )
          }
        },
        ee = function (e) {
          for (var t, i = A(S(e)), r = [], s = 0; i.length > s; )
            n($, (t = i[s++])) || t == R || t == o || r.push(t)
          return r
        },
        et = function (e) {
          for (
            var t, i = e === V, r = A(i ? F : S(e)), s = [], a = 0;
            r.length > a;

          )
            n($, (t = r[a++])) && (!i || n(V, t)) && s.push($[t])
          return s
        }
      H ||
        (l(
          (j = function () {
            if (this instanceof j)
              throw TypeError('Symbol is not a constructor!')
            var e = p(arguments.length > 0 ? arguments[0] : void 0),
              t = function (i) {
                this === V && t.call(F, i),
                  n(this, R) && n(this[R], e) && (this[R][e] = !1),
                  Y(this, e, E(1, i))
              }
            return s && q && Y(V, e, { configurable: !0, set: t }), X(e)
          })[D],
          'toString',
          function () {
            return this._k
          }
        ),
        (M.f = Q),
        (P.f = K),
        (i(3230).f = C.f = ee),
        (i(6274).f = J),
        (_.f = et),
        s && !i(6227) && l(V, 'propertyIsEnumerable', J, !0),
        (h.f = function (e) {
          return X(f(e))
        })),
        a(a.G + a.W + !H * a.F, { Symbol: j })
      for (
        var ei =
            'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
              ','
            ),
          er = 0;
        ei.length > er;

      )
        f(ei[er++])
      for (var en = O(f.store), es = 0; en.length > es; ) m(en[es++])
      a(a.S + !H * a.F, 'Symbol', {
        for: function (e) {
          return n(B, (e += '')) ? B[e] : (B[e] = j(e))
        },
        keyFor: function (e) {
          if (!U(e)) throw TypeError(e + ' is not a symbol!')
          for (var t in B) if (B[t] === e) return t
        },
        useSetter: function () {
          q = !0
        },
        useSimple: function () {
          q = !1
        },
      }),
        a(a.S + !H * a.F, 'Object', {
          create: function (e, t) {
            return void 0 === t ? T(e) : Z(T(e), t)
          },
          defineProperty: K,
          defineProperties: Z,
          getOwnPropertyDescriptor: Q,
          getOwnPropertyNames: ee,
          getOwnPropertySymbols: et,
        })
      var ea = d(function () {
        _.f(1)
      })
      a(a.S + a.F * ea, 'Object', {
        getOwnPropertySymbols: function (e) {
          return _.f(w(e))
        },
      }),
        I &&
          a(
            a.S +
              a.F *
                (!H ||
                  d(function () {
                    var e = j()
                    return (
                      '[null]' != z([e]) ||
                      '{}' != z({ a: e }) ||
                      '{}' != z(Object(e))
                    )
                  })),
            'JSON',
            {
              stringify: function (e) {
                for (var t, i, r = [e], n = 1; arguments.length > n; )
                  r.push(arguments[n++])
                if (((i = t = r[1]), !((!y(t) && void 0 === e) || U(e))))
                  return (
                    g(t) ||
                      (t = function (e, t) {
                        if (
                          ('function' == typeof i && (t = i.call(this, e, t)),
                          !U(t))
                        )
                          return t
                      }),
                    (r[1] = t),
                    z.apply(I, r)
                  )
              },
            }
          ),
        j[D][N] || i(1818)(j[D], N, j[D].valueOf),
        u(j, 'Symbol'),
        u(Math, 'Math', !0),
        u(r.JSON, 'JSON', !0)
    },
    8174: function (e, t, i) {
      i(6347)('asyncIterator')
    },
    6461: function (e, t, i) {
      i(6347)('observable')
    },
    3871: function (e, t, i) {
      i(3882)
      for (
        var r = i(3938),
          n = i(1818),
          s = i(5449),
          a = i(2939)('toStringTag'),
          l =
            'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
              ','
            ),
          o = 0;
        o < l.length;
        o++
      ) {
        var d = l[o],
          c = r[d],
          u = c && c.prototype
        u && !u[a] && n(u, a, d), (s[d] = s.Array)
      }
    },
    1210: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDomainLocale = function (e, t, i, r) {
          return !1
        }),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    8045: function (e, t, i) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = i(6495).Z,
        n = i(2648).Z,
        s = i(1598).Z,
        a = i(7273).Z,
        l = s(i(7294)),
        o = n(i(5443)),
        d = i(2730),
        c = i(9309),
        u = i(9977)
      i(5086)
      var p = n(i(1479))
      let f = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      }
      function h(e) {
        return void 0 !== e.default
      }
      function m(e) {
        return 'number' == typeof e || void 0 === e
          ? e
          : 'string' == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN
      }
      function v(e, t, i, n, s, a, l) {
        if (!e || e['data-loaded-src'] === t) return
        e['data-loaded-src'] = t
        let o = 'decode' in e ? e.decode() : Promise.resolve()
        o.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (('blur' === i && a(!0), null == n ? void 0 : n.current)) {
              let t = new Event('load')
              Object.defineProperty(t, 'target', { writable: !1, value: e })
              let i = !1,
                s = !1
              n.current(
                r({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => i,
                  isPropagationStopped: () => s,
                  persist: () => {},
                  preventDefault: () => {
                    ;(i = !0), t.preventDefault()
                  },
                  stopPropagation: () => {
                    ;(s = !0), t.stopPropagation()
                  },
                })
              )
            }
            ;(null == s ? void 0 : s.current) && s.current(e)
          }
        })
      }
      let g = l.forwardRef((e, t) => {
          var {
              imgAttributes: i,
              heightInt: n,
              widthInt: s,
              qualityInt: o,
              className: d,
              imgStyle: c,
              blurStyle: u,
              isLazy: p,
              fill: f,
              placeholder: h,
              loading: m,
              srcString: g,
              config: b,
              unoptimized: y,
              loader: w,
              onLoadRef: S,
              onLoadingCompleteRef: x,
              setBlurComplete: E,
              setShowAltText: T,
              onLoad: C,
              onError: M,
            } = e,
            _ = a(e, [
              'imgAttributes',
              'heightInt',
              'widthInt',
              'qualityInt',
              'className',
              'imgStyle',
              'blurStyle',
              'isLazy',
              'fill',
              'placeholder',
              'loading',
              'srcString',
              'config',
              'unoptimized',
              'loader',
              'onLoadRef',
              'onLoadingCompleteRef',
              'setBlurComplete',
              'setShowAltText',
              'onLoad',
              'onError',
            ])
          return (
            (m = p ? 'lazy' : m),
            l.default.createElement(
              l.default.Fragment,
              null,
              l.default.createElement(
                'img',
                Object.assign(
                  {},
                  _,
                  {
                    loading: m,
                    width: s,
                    height: n,
                    decoding: 'async',
                    'data-nimg': f ? 'fill' : '1',
                    className: d,
                    style: r({}, c, u),
                  },
                  i,
                  {
                    ref: l.useCallback(
                      (e) => {
                        t &&
                          ('function' == typeof t
                            ? t(e)
                            : 'object' == typeof t && (t.current = e)),
                          e &&
                            (M && (e.src = e.src),
                            e.complete && v(e, g, h, S, x, E, y))
                      },
                      [g, h, S, x, E, M, y, t]
                    ),
                    onLoad: (e) => {
                      let t = e.currentTarget
                      v(t, g, h, S, x, E, y)
                    },
                    onError: (e) => {
                      T(!0), 'blur' === h && E(!0), M && M(e)
                    },
                  }
                )
              )
            )
          )
        }),
        b = l.forwardRef((e, t) => {
          let i, n
          var s,
            {
              src: v,
              sizes: b,
              unoptimized: y = !1,
              priority: w = !1,
              loading: S,
              className: x,
              quality: E,
              width: T,
              height: C,
              fill: M,
              style: _,
              onLoad: P,
              onLoadingComplete: O,
              placeholder: k = 'empty',
              blurDataURL: L,
              layout: A,
              objectFit: j,
              objectPosition: I,
              lazyBoundary: z,
              lazyRoot: D,
            } = e,
            R = a(e, [
              'src',
              'sizes',
              'unoptimized',
              'priority',
              'loading',
              'className',
              'quality',
              'width',
              'height',
              'fill',
              'style',
              'onLoad',
              'onLoadingComplete',
              'placeholder',
              'blurDataURL',
              'layout',
              'objectFit',
              'objectPosition',
              'lazyBoundary',
              'lazyRoot',
            ])
          let N = l.useContext(u.ImageConfigContext),
            G = l.useMemo(() => {
              let e = f || N || c.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                i = e.deviceSizes.sort((e, t) => e - t)
              return r({}, e, { allSizes: t, deviceSizes: i })
            }, [N]),
            B = R,
            $ = B.loader || p.default
          delete B.loader
          let F = '__next_img_default' in $
          if (F) {
            if ('custom' === G.loader)
              throw Error(
                'Image with src "'.concat(v, '" is missing "loader" prop.') +
                  '\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              )
          } else {
            let e = $
            $ = (t) => {
              let { config: i } = t,
                r = a(t, ['config'])
              return e(r)
            }
          }
          if (A) {
            'fill' === A && (M = !0)
            let e = {
              intrinsic: { maxWidth: '100%', height: 'auto' },
              responsive: { width: '100%', height: 'auto' },
            }[A]
            e && (_ = r({}, _, e))
            let t = { responsive: '100vw', fill: '100vw' }[A]
            t && !b && (b = t)
          }
          let V = '',
            H = m(T),
            W = m(C)
          if ('object' == typeof (s = v) && (h(s) || void 0 !== s.src)) {
            let e = h(v) ? v.default : v
            if (!e.src)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received '.concat(
                  JSON.stringify(e)
                )
              )
            if (!e.height || !e.width)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received '.concat(
                  JSON.stringify(e)
                )
              )
            if (
              ((i = e.blurWidth),
              (n = e.blurHeight),
              (L = L || e.blurDataURL),
              (V = e.src),
              !M)
            ) {
              if (H || W) {
                if (H && !W) {
                  let t = H / e.width
                  W = Math.round(e.height * t)
                } else if (!H && W) {
                  let t = W / e.height
                  H = Math.round(e.width * t)
                }
              } else (H = e.width), (W = e.height)
            }
          }
          let q = !w && ('lazy' === S || void 0 === S)
          ;((v = 'string' == typeof v ? v : V).startsWith('data:') ||
            v.startsWith('blob:')) &&
            ((y = !0), (q = !1)),
            G.unoptimized && (y = !0),
            F && v.endsWith('.svg') && !G.dangerouslyAllowSVG && (y = !0)
          let [Y, X] = l.useState(!1),
            [U, K] = l.useState(!1),
            Z = m(E),
            J = Object.assign(
              M
                ? {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: j,
                    objectPosition: I,
                  }
                : {},
              U ? {} : { color: 'transparent' },
              _
            ),
            Q =
              'blur' === k && L && !Y
                ? {
                    backgroundSize: J.objectFit || 'cover',
                    backgroundPosition: J.objectPosition || '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        d.getImageBlurSvg({
                          widthInt: H,
                          heightInt: W,
                          blurWidth: i,
                          blurHeight: n,
                          blurDataURL: L,
                          objectFit: J.objectFit,
                        }),
                        '")'
                      ),
                  }
                : {},
            ee = (function (e) {
              let {
                config: t,
                src: i,
                unoptimized: r,
                width: n,
                quality: s,
                sizes: a,
                loader: l,
              } = e
              if (r) return { src: i, srcSet: void 0, sizes: void 0 }
              let { widths: o, kind: d } = (function (e, t, i) {
                  let { deviceSizes: r, allSizes: n } = e
                  if (i) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = []
                    for (let r; (r = e.exec(i)); r) t.push(parseInt(r[2]))
                    if (t.length) {
                      let e = 0.01 * Math.min(...t)
                      return {
                        widths: n.filter((t) => t >= r[0] * e),
                        kind: 'w',
                      }
                    }
                    return { widths: n, kind: 'w' }
                  }
                  if ('number' != typeof t) return { widths: r, kind: 'w' }
                  let s = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => n.find((t) => t >= e) || n[n.length - 1]
                      )
                    ),
                  ]
                  return { widths: s, kind: 'x' }
                })(t, n, a),
                c = o.length - 1
              return {
                sizes: a || 'w' !== d ? a : '100vw',
                srcSet: o
                  .map((e, r) =>
                    ''
                      .concat(
                        l({ config: t, src: i, quality: s, width: e }),
                        ' '
                      )
                      .concat('w' === d ? e : r + 1)
                      .concat(d)
                  )
                  .join(', '),
                src: l({ config: t, src: i, quality: s, width: o[c] }),
              }
            })({
              config: G,
              src: v,
              unoptimized: y,
              width: H,
              quality: Z,
              sizes: b,
              loader: $,
            }),
            et = v,
            ei = {
              imageSrcSet: ee.srcSet,
              imageSizes: ee.sizes,
              crossOrigin: B.crossOrigin,
            },
            er = l.useRef(P)
          l.useEffect(() => {
            er.current = P
          }, [P])
          let en = l.useRef(O)
          l.useEffect(() => {
            en.current = O
          }, [O])
          let es = r(
            {
              isLazy: q,
              imgAttributes: ee,
              heightInt: W,
              widthInt: H,
              qualityInt: Z,
              className: x,
              imgStyle: J,
              blurStyle: Q,
              loading: S,
              config: G,
              fill: M,
              unoptimized: y,
              placeholder: k,
              loader: $,
              srcString: et,
              onLoadRef: er,
              onLoadingCompleteRef: en,
              setBlurComplete: X,
              setShowAltText: K,
            },
            B
          )
          return l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(g, Object.assign({}, es, { ref: t })),
            w
              ? l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(
                    'link',
                    Object.assign(
                      {
                        key: '__nimg-' + ee.src + ee.srcSet + ee.sizes,
                        rel: 'preload',
                        as: 'image',
                        href: ee.srcSet ? void 0 : ee.src,
                      },
                      ei
                    )
                  )
                )
              : null
          )
        })
      ;(t.default = b),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    8418: function (e, t, i) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = i(2648).Z,
        n = i(7273).Z,
        s = r(i(7294)),
        a = i(3297),
        l = i(4634),
        o = i(4611),
        d = i(3794),
        c = i(2725),
        u = i(3462),
        p = i(1018),
        f = i(7190),
        h = i(1210),
        m = i(8684)
      let v = new Set()
      function g(e, t, i, r, n) {
        if (n || l.isLocalURL(t)) {
          if (!r.bypassPrefetchedCheck) {
            let n =
                void 0 !== r.locale
                  ? r.locale
                  : 'locale' in e
                  ? e.locale
                  : void 0,
              s = t + '%' + i + '%' + n
            if (v.has(s)) return
            v.add(s)
          }
          Promise.resolve(e.prefetch(t, i, r)).catch((e) => {})
        }
      }
      function b(e) {
        return 'string' == typeof e ? e : o.formatUrl(e)
      }
      let y = s.default.forwardRef(function (e, t) {
        let i, r
        let {
            href: o,
            as: v,
            children: y,
            prefetch: w,
            passHref: S,
            replace: x,
            shallow: E,
            scroll: T,
            locale: C,
            onClick: M,
            onMouseEnter: _,
            onTouchStart: P,
            legacyBehavior: O = !1,
          } = e,
          k = n(e, [
            'href',
            'as',
            'children',
            'prefetch',
            'passHref',
            'replace',
            'shallow',
            'scroll',
            'locale',
            'onClick',
            'onMouseEnter',
            'onTouchStart',
            'legacyBehavior',
          ])
        ;(i = y),
          O &&
            ('string' == typeof i || 'number' == typeof i) &&
            (i = s.default.createElement('a', null, i))
        let L = !1 !== w,
          A = s.default.useContext(u.RouterContext),
          j = s.default.useContext(p.AppRouterContext),
          I = null != A ? A : j,
          z = !A,
          { href: D, as: R } = s.default.useMemo(() => {
            if (!A) {
              let e = b(o)
              return { href: e, as: v ? b(v) : e }
            }
            let [e, t] = a.resolveHref(A, o, !0)
            return { href: e, as: v ? a.resolveHref(A, v) : t || e }
          }, [A, o, v]),
          N = s.default.useRef(D),
          G = s.default.useRef(R)
        O && (r = s.default.Children.only(i))
        let B = O ? r && 'object' == typeof r && r.ref : t,
          [$, F, V] = f.useIntersection({ rootMargin: '200px' }),
          H = s.default.useCallback(
            (e) => {
              ;(G.current !== R || N.current !== D) &&
                (V(), (G.current = R), (N.current = D)),
                $(e),
                B &&
                  ('function' == typeof B
                    ? B(e)
                    : 'object' == typeof B && (B.current = e))
            },
            [R, B, D, V, $]
          )
        s.default.useEffect(() => {
          I && F && L && g(I, D, R, { locale: C }, z)
        }, [R, D, F, C, L, null == A ? void 0 : A.locale, I, z])
        let W = {
          ref: H,
          onClick(e) {
            O || 'function' != typeof M || M(e),
              O &&
                r.props &&
                'function' == typeof r.props.onClick &&
                r.props.onClick(e),
              I &&
                !e.defaultPrevented &&
                (function (e, t, i, r, n, a, o, d, c, u) {
                  let { nodeName: p } = e.currentTarget,
                    f = 'A' === p.toUpperCase()
                  if (
                    f &&
                    ((function (e) {
                      let t = e.currentTarget,
                        i = t.getAttribute('target')
                      return (
                        (i && '_self' !== i) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) ||
                      (!c && !l.isLocalURL(i)))
                  )
                    return
                  e.preventDefault()
                  let h = () => {
                    'beforePopState' in t
                      ? t[n ? 'replace' : 'push'](i, r, {
                          shallow: a,
                          locale: d,
                          scroll: o,
                        })
                      : t[n ? 'replace' : 'push'](r || i, {
                          forceOptimisticNavigation: !u,
                        })
                  }
                  c ? s.default.startTransition(h) : h()
                })(e, I, D, R, x, E, T, C, z, L)
          },
          onMouseEnter(e) {
            O || 'function' != typeof _ || _(e),
              O &&
                r.props &&
                'function' == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              I &&
                (L || !z) &&
                g(
                  I,
                  D,
                  R,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  z
                )
          },
          onTouchStart(e) {
            O || 'function' != typeof P || P(e),
              O &&
                r.props &&
                'function' == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              I &&
                (L || !z) &&
                g(
                  I,
                  D,
                  R,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  z
                )
          },
        }
        if (d.isAbsoluteUrl(R)) W.href = R
        else if (!O || S || ('a' === r.type && !('href' in r.props))) {
          let e = void 0 !== C ? C : null == A ? void 0 : A.locale,
            t =
              (null == A ? void 0 : A.isLocaleDomain) &&
              h.getDomainLocale(
                R,
                e,
                null == A ? void 0 : A.locales,
                null == A ? void 0 : A.domainLocales
              )
          W.href =
            t ||
            m.addBasePath(
              c.addLocale(R, e, null == A ? void 0 : A.defaultLocale)
            )
        }
        return O
          ? s.default.cloneElement(r, W)
          : s.default.createElement('a', Object.assign({}, k, W), i)
      })
      ;(t.default = y),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    7190: function (e, t, i) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: i, disabled: o } = e,
            d = o || !s,
            [c, u] = r.useState(!1),
            p = r.useRef(null),
            f = r.useCallback((e) => {
              p.current = e
            }, [])
          r.useEffect(() => {
            if (s) {
              if (d || c) return
              let e = p.current
              if (e && e.tagName) {
                let r = (function (e, t, i) {
                  let {
                    id: r,
                    observer: n,
                    elements: s,
                  } = (function (e) {
                    let t
                    let i = {
                        root: e.root || null,
                        margin: e.rootMargin || '',
                      },
                      r = l.find(
                        (e) => e.root === i.root && e.margin === i.margin
                      )
                    if (r && (t = a.get(r))) return t
                    let n = new Map(),
                      s = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = n.get(e.target),
                            i = e.isIntersecting || e.intersectionRatio > 0
                          t && i && t(i)
                        })
                      }, e)
                    return (
                      (t = { id: i, observer: s, elements: n }),
                      l.push(i),
                      a.set(i, t),
                      t
                    )
                  })(i)
                  return (
                    s.set(e, t),
                    n.observe(e),
                    function () {
                      if ((s.delete(e), n.unobserve(e), 0 === s.size)) {
                        n.disconnect(), a.delete(r)
                        let e = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        )
                        e > -1 && l.splice(e, 1)
                      }
                    }
                  )
                })(e, (e) => e && u(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: i,
                })
                return r
              }
            } else if (!c) {
              let e = n.requestIdleCallback(() => u(!0))
              return () => n.cancelIdleCallback(e)
            }
          }, [d, i, t, c, p.current])
          let h = r.useCallback(() => {
            u(!1)
          }, [])
          return [f, c, h]
        })
      var r = i(7294),
        n = i(9311)
      let s = 'function' == typeof IntersectionObserver,
        a = new Map(),
        l = []
      ;('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default))
    },
    2730: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: i,
              blurWidth: r,
              blurHeight: n,
              blurDataURL: s,
              objectFit: a,
            } = e,
            l = r || t,
            o = n || i,
            d = s.startsWith('data:image/jpeg')
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : ''
          return l && o
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(l, ' ')
                .concat(
                  o,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(r && n ? '1' : '20', "'/%3E")
                .concat(
                  d,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(s, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
                .concat(
                  'contain' === a
                    ? 'xMidYMid'
                    : 'cover' === a
                    ? 'xMidYMid slice'
                    : 'none',
                  "' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(s, "'/%3E%3C/svg%3E")
        })
    },
    1479: function (e, t) {
      'use strict'
      function i(e) {
        let { config: t, src: i, width: r, quality: n } = e
        return ''
          .concat(t.path, '?url=')
          .concat(encodeURIComponent(i), '&w=')
          .concat(r, '&q=')
          .concat(n || 75)
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (i.__next_img_default = !0),
        (t.default = i)
    },
    9070: function () {},
    3544: function () {},
    6604: function () {},
    995: function () {},
    3825: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__IBM_Plex_Mono_830e4a', '__IBM_Plex_Mono_Fallback_830e4a'",
          fontStyle: 'normal',
        },
        className: '__className_830e4a',
      }
    },
    9008: function (e, t, i) {
      e.exports = i(5443)
    },
    5675: function (e, t, i) {
      e.exports = i(8045)
    },
    1664: function (e, t, i) {
      e.exports = i(8418)
    },
    2703: function (e, t, i) {
      'use strict'
      var r = i(414)
      function n() {}
      function s() {}
      ;(s.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, i, n, s, a) {
            if (a !== r) {
              var l = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var i = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: s,
            resetWarningCache: n,
          }
          return (i.PropTypes = i), i
        })
    },
    5697: function (e, t, i) {
      e.exports = i(2703)()
    },
    414: function (e) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    9464: function (e, t, i) {
      'use strict'
      var r = p(i(8239)),
        n = p(i(5105)),
        s = p(i(9663)),
        a = p(i(2600)),
        l = p(i(9135)),
        o = p(i(3196)),
        d = p(i(7294)),
        c = p(i(5697)),
        u = p(i(1248))
      function p(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var f = (function (e) {
        function t() {
          ;(0, s.default)(this, t)
          for (
            var e, i, r, a = arguments.length, o = Array(a), d = 0;
            d < a;
            d++
          )
            o[d] = arguments[d]
          return (
            (i = r =
              (0, l.default)(
                this,
                (e = t.__proto__ || (0, n.default)(t)).call.apply(
                  e,
                  [this].concat(o)
                )
              )),
            (r.handleClickToPause = function () {
              r.anim.isPaused ? r.anim.play() : r.anim.pause()
            }),
            (0, l.default)(r, i)
          )
        }
        return (
          (0, o.default)(t, e),
          (0, a.default)(t, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props,
                  t = e.options,
                  i = e.eventListeners,
                  n = t.loop,
                  s = t.autoplay,
                  a = t.animationData,
                  l = t.rendererSettings,
                  o = t.segments
                ;(this.options = {
                  container: this.el,
                  renderer: 'svg',
                  loop: !1 !== n,
                  autoplay: !1 !== s,
                  segments: !1 !== o,
                  animationData: a,
                  rendererSettings: l,
                }),
                  (this.options = (0, r.default)({}, this.options, t)),
                  (this.anim = u.default.loadAnimation(this.options)),
                  this.registerEvents(i)
              },
            },
            {
              key: 'componentWillUpdate',
              value: function (e) {
                this.options.animationData !== e.options.animationData &&
                  (this.deRegisterEvents(this.props.eventListeners),
                  this.destroy(),
                  (this.options = (0, r.default)({}, this.options, e.options)),
                  (this.anim = u.default.loadAnimation(this.options)),
                  this.registerEvents(e.eventListeners))
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.props.isStopped
                  ? this.stop()
                  : this.props.segments
                  ? this.playSegments()
                  : this.play(),
                  this.pause(),
                  this.setSpeed(),
                  this.setDirection()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.deRegisterEvents(this.props.eventListeners),
                  this.destroy(),
                  (this.options.animationData = null),
                  (this.anim = null)
              },
            },
            {
              key: 'setSpeed',
              value: function () {
                this.anim.setSpeed(this.props.speed)
              },
            },
            {
              key: 'setDirection',
              value: function () {
                this.anim.setDirection(this.props.direction)
              },
            },
            {
              key: 'play',
              value: function () {
                this.anim.play()
              },
            },
            {
              key: 'playSegments',
              value: function () {
                this.anim.playSegments(this.props.segments)
              },
            },
            {
              key: 'stop',
              value: function () {
                this.anim.stop()
              },
            },
            {
              key: 'pause',
              value: function () {
                this.props.isPaused && !this.anim.isPaused
                  ? this.anim.pause()
                  : !this.props.isPaused &&
                    this.anim.isPaused &&
                    this.anim.pause()
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.anim.destroy()
              },
            },
            {
              key: 'registerEvents',
              value: function (e) {
                var t = this
                e.forEach(function (e) {
                  t.anim.addEventListener(e.eventName, e.callback)
                })
              },
            },
            {
              key: 'deRegisterEvents',
              value: function (e) {
                var t = this
                e.forEach(function (e) {
                  t.anim.removeEventListener(e.eventName, e.callback)
                })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  i = t.width,
                  n = t.height,
                  s = t.ariaRole,
                  a = t.ariaLabel,
                  l = t.isClickToPauseDisabled,
                  o = t.title,
                  c = function (e) {
                    return 'number' == typeof e ? e + 'px' : e || '100%'
                  },
                  u = (0, r.default)(
                    {
                      width: c(i),
                      height: c(n),
                      overflow: 'hidden',
                      margin: '0 auto',
                      outline: 'none',
                    },
                    this.props.style
                  ),
                  p = l
                    ? function () {
                        return null
                      }
                    : this.handleClickToPause
                return d.default.createElement('div', {
                  ref: function (t) {
                    e.el = t
                  },
                  style: u,
                  onClick: p,
                  title: o,
                  role: s,
                  'aria-label': a,
                  tabIndex: '0',
                })
              },
            },
          ]),
          t
        )
      })(d.default.Component)
      ;(t.Z = f),
        (f.propTypes = {
          eventListeners: c.default.arrayOf(c.default.object),
          options: c.default.object.isRequired,
          height: c.default.oneOfType([c.default.string, c.default.number]),
          width: c.default.oneOfType([c.default.string, c.default.number]),
          isStopped: c.default.bool,
          isPaused: c.default.bool,
          speed: c.default.number,
          segments: c.default.arrayOf(c.default.number),
          direction: c.default.number,
          ariaRole: c.default.string,
          ariaLabel: c.default.string,
          isClickToPauseDisabled: c.default.bool,
          title: c.default.string,
        }),
        (f.defaultProps = {
          eventListeners: [],
          isStopped: !1,
          isPaused: !1,
          speed: 1,
          ariaRole: 'button',
          ariaLabel: 'animation',
          isClickToPauseDisabled: !1,
          title: '',
        })
    },
    2546: function (e, t, i) {
      'use strict'
      i.d(t, {
        tq: function () {
          return b
        },
        o5: function () {
          return w
        },
      })
      var r = i(7294),
        n = i(6523)
      function s(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        )
      }
      function a(e, t) {
        let i = ['__proto__', 'constructor', 'prototype']
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : a(e[i], t[i])
              : (e[i] = t[i])
          })
      }
      function l(e = {}) {
        return (
          e.navigation &&
          void 0 === e.navigation.nextEl &&
          void 0 === e.navigation.prevEl
        )
      }
      function o(e = {}) {
        return e.pagination && void 0 === e.pagination.el
      }
      function d(e = {}) {
        return e.scrollbar && void 0 === e.scrollbar.el
      }
      function c(e = '') {
        let t = e
            .split(' ')
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = []
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e)
          }),
          i.join(' ')
        )
      }
      let u = [
        'modules',
        'init',
        '_direction',
        'oneWayMovement',
        'touchEventsTarget',
        'initialSlide',
        '_speed',
        'cssMode',
        'updateOnWindowResize',
        'resizeObserver',
        'nested',
        'focusableElements',
        '_enabled',
        '_width',
        '_height',
        'preventInteractionOnTransition',
        'userAgent',
        'url',
        '_edgeSwipeDetection',
        '_edgeSwipeThreshold',
        '_freeMode',
        '_autoHeight',
        'setWrapperSize',
        'virtualTranslate',
        '_effect',
        'breakpoints',
        '_spaceBetween',
        '_slidesPerView',
        'maxBackfaceHiddenSlides',
        '_grid',
        '_slidesPerGroup',
        '_slidesPerGroupSkip',
        '_slidesPerGroupAuto',
        '_centeredSlides',
        '_centeredSlidesBounds',
        '_slidesOffsetBefore',
        '_slidesOffsetAfter',
        'normalizeSlideIndex',
        '_centerInsufficientSlides',
        '_watchOverflow',
        'roundLengths',
        'touchRatio',
        'touchAngle',
        'simulateTouch',
        '_shortSwipes',
        '_longSwipes',
        'longSwipesRatio',
        'longSwipesMs',
        '_followFinger',
        'allowTouchMove',
        '_threshold',
        'touchMoveStopPropagation',
        'touchStartPreventDefault',
        'touchStartForcePreventDefault',
        'touchReleaseOnEdges',
        'uniqueNavElements',
        '_resistance',
        '_resistanceRatio',
        '_watchSlidesProgress',
        '_grabCursor',
        'preventClicks',
        'preventClicksPropagation',
        '_slideToClickedSlide',
        '_loop',
        'loopedSlides',
        'loopPreventsSliding',
        '_rewind',
        '_allowSlidePrev',
        '_allowSlideNext',
        '_swipeHandler',
        '_noSwiping',
        'noSwipingClass',
        'noSwipingSelector',
        'passiveListeners',
        'containerModifierClass',
        'slideClass',
        'slideActiveClass',
        'slideVisibleClass',
        'slideNextClass',
        'slidePrevClass',
        'wrapperClass',
        'lazyPreloaderClass',
        'runCallbacksOnInit',
        'observer',
        'observeParents',
        'observeSlideChildren',
        'a11y',
        '_autoplay',
        '_controller',
        'coverflowEffect',
        'cubeEffect',
        'fadeEffect',
        'flipEffect',
        'creativeEffect',
        'cardsEffect',
        'hashNavigation',
        'history',
        'keyboard',
        'mousewheel',
        '_navigation',
        '_pagination',
        'parallax',
        '_scrollbar',
        '_thumbs',
        'virtual',
        'zoom',
        'control',
        'injectStyles',
        'injectStylesUrls',
      ]
      function p(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes('SwiperSlide')
        )
      }
      let f = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate())
      }
      function h(e, t) {
        return 'undefined' == typeof window
          ? (0, r.useEffect)(e, t)
          : (0, r.useLayoutEffect)(e, t)
      }
      let m = (0, r.createContext)(null),
        v = (0, r.createContext)(null)
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t]
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
              }
              return e
            }).apply(this, arguments)
      }
      let b = (0, r.forwardRef)(function (e, t) {
        let {
            className: i,
            tag: m = 'div',
            wrapperTag: b = 'div',
            children: y,
            onSwiper: w,
            ...S
          } = void 0 === e ? {} : e,
          x = !1,
          [E, T] = (0, r.useState)('swiper'),
          [C, M] = (0, r.useState)(null),
          [_, P] = (0, r.useState)(!1),
          O = (0, r.useRef)(!1),
          k = (0, r.useRef)(null),
          L = (0, r.useRef)(null),
          A = (0, r.useRef)(null),
          j = (0, r.useRef)(null),
          I = (0, r.useRef)(null),
          z = (0, r.useRef)(null),
          D = (0, r.useRef)(null),
          R = (0, r.useRef)(null),
          {
            params: N,
            passedParams: G,
            rest: B,
            events: $,
          } = (function (e = {}, t = !0) {
            let i = { on: {} },
              r = {},
              l = {}
            a(i, n.ZP.defaults),
              a(i, n.ZP.extendedDefaults),
              (i._emitClasses = !0),
              (i.init = !1)
            let o = {},
              d = u.map((e) => e.replace(/_/, '')),
              c = Object.assign({}, e)
            return (
              Object.keys(c).forEach((n) => {
                void 0 !== e[n] &&
                  (d.indexOf(n) >= 0
                    ? s(e[n])
                      ? ((i[n] = {}), (l[n] = {}), a(i[n], e[n]), a(l[n], e[n]))
                      : ((i[n] = e[n]), (l[n] = e[n]))
                    : 0 === n.search(/on[A-Z]/) && 'function' == typeof e[n]
                    ? t
                      ? (r[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n])
                      : (i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n])
                    : (o[n] = e[n]))
              }),
              ['navigation', 'pagination', 'scrollbar'].forEach((e) => {
                !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
              }),
              { params: i, passedParams: l, rest: o, events: r }
            )
          })(S),
          { slides: F, slots: V } = (function (e) {
            let t = [],
              i = {
                'container-start': [],
                'container-end': [],
                'wrapper-start': [],
                'wrapper-end': [],
              }
            return (
              r.Children.toArray(e).forEach((e) => {
                if (p(e)) t.push(e)
                else if (e.props && e.props.slot && i[e.props.slot])
                  i[e.props.slot].push(e)
                else if (e.props && e.props.children) {
                  let n = (function e(t) {
                    let i = []
                    return (
                      r.Children.toArray(t).forEach((t) => {
                        p(t)
                          ? i.push(t)
                          : t.props &&
                            t.props.children &&
                            e(t.props.children).forEach((e) => i.push(e))
                      }),
                      i
                    )
                  })(e.props.children)
                  n.length > 0
                    ? n.forEach((e) => t.push(e))
                    : i['container-end'].push(e)
                } else i['container-end'].push(e)
              }),
              { slides: t, slots: i }
            )
          })(y),
          H = () => {
            P(!_)
          }
        Object.assign(N.on, {
          _containerClasses(e, t) {
            T(t)
          },
        })
        let W = () => {
          Object.assign(N.on, $), (x = !0)
          let e = { ...N }
          if (
            (delete e.wrapperClass,
            (L.current = new n.ZP(e)),
            L.current.virtual && L.current.params.virtual.enabled)
          ) {
            L.current.virtual.slides = F
            let e = {
              cache: !1,
              slides: F,
              renderExternal: M,
              renderExternalUpdate: !1,
            }
            a(L.current.params.virtual, e),
              a(L.current.originalParams.virtual, e)
          }
        }
        k.current || W(), L.current && L.current.on('_beforeBreakpoint', H)
        let q = () => {
            !x &&
              $ &&
              L.current &&
              Object.keys($).forEach((e) => {
                L.current.on(e, $[e])
              })
          },
          Y = () => {
            $ &&
              L.current &&
              Object.keys($).forEach((e) => {
                L.current.off(e, $[e])
              })
          }
        return (
          (0, r.useEffect)(() => () => {
            L.current && L.current.off('_beforeBreakpoint', H)
          }),
          (0, r.useEffect)(() => {
            !O.current &&
              L.current &&
              (L.current.emitSlidesClasses(), (O.current = !0))
          }),
          h(() => {
            if ((t && (t.current = k.current), k.current))
              return (
                L.current.destroyed && W(),
                (function (
                  {
                    el: e,
                    nextEl: t,
                    prevEl: i,
                    paginationEl: r,
                    scrollbarEl: n,
                    swiper: s,
                  },
                  a
                ) {
                  l(a) &&
                    t &&
                    i &&
                    ((s.params.navigation.nextEl = t),
                    (s.originalParams.navigation.nextEl = t),
                    (s.params.navigation.prevEl = i),
                    (s.originalParams.navigation.prevEl = i)),
                    o(a) &&
                      r &&
                      ((s.params.pagination.el = r),
                      (s.originalParams.pagination.el = r)),
                    d(a) &&
                      n &&
                      ((s.params.scrollbar.el = n),
                      (s.originalParams.scrollbar.el = n)),
                    s.init(e)
                })(
                  {
                    el: k.current,
                    nextEl: I.current,
                    prevEl: z.current,
                    paginationEl: D.current,
                    scrollbarEl: R.current,
                    swiper: L.current,
                  },
                  N
                ),
                w && w(L.current),
                () => {
                  L.current && !L.current.destroyed && L.current.destroy(!0, !1)
                }
              )
          }, []),
          h(() => {
            q()
            let e = (function (e, t, i, r, n) {
              let a = []
              if (!t) return a
              let l = (e) => {
                0 > a.indexOf(e) && a.push(e)
              }
              if (i && r) {
                let e = r.map(n),
                  t = i.map(n)
                e.join('') !== t.join('') && l('children'),
                  r.length !== i.length && l('children')
              }
              let o = u
                .filter((e) => '_' === e[0])
                .map((e) => e.replace(/_/, ''))
              return (
                o.forEach((i) => {
                  if (i in e && i in t) {
                    if (s(e[i]) && s(t[i])) {
                      let r = Object.keys(e[i]),
                        n = Object.keys(t[i])
                      r.length !== n.length
                        ? l(i)
                        : (r.forEach((r) => {
                            e[i][r] !== t[i][r] && l(i)
                          }),
                          n.forEach((r) => {
                            e[i][r] !== t[i][r] && l(i)
                          }))
                    } else e[i] !== t[i] && l(i)
                  }
                }),
                a
              )
            })(G, A.current, F, j.current, (e) => e.key)
            return (
              (A.current = G),
              (j.current = F),
              e.length &&
                L.current &&
                !L.current.destroyed &&
                (function ({
                  swiper: e,
                  slides: t,
                  passedParams: i,
                  changedParams: r,
                  nextEl: n,
                  prevEl: l,
                  scrollbarEl: o,
                  paginationEl: d,
                }) {
                  let c, u, p, f, h, m, v, g
                  let b = r.filter(
                      (e) =>
                        'children' !== e &&
                        'direction' !== e &&
                        'wrapperClass' !== e
                    ),
                    {
                      params: y,
                      pagination: w,
                      navigation: S,
                      scrollbar: x,
                      virtual: E,
                      thumbs: T,
                    } = e
                  r.includes('thumbs') &&
                    i.thumbs &&
                    i.thumbs.swiper &&
                    y.thumbs &&
                    !y.thumbs.swiper &&
                    (c = !0),
                    r.includes('controller') &&
                      i.controller &&
                      i.controller.control &&
                      y.controller &&
                      !y.controller.control &&
                      (u = !0),
                    r.includes('pagination') &&
                      i.pagination &&
                      (i.pagination.el || d) &&
                      (y.pagination || !1 === y.pagination) &&
                      w &&
                      !w.el &&
                      (p = !0),
                    r.includes('scrollbar') &&
                      i.scrollbar &&
                      (i.scrollbar.el || o) &&
                      (y.scrollbar || !1 === y.scrollbar) &&
                      x &&
                      !x.el &&
                      (f = !0),
                    r.includes('navigation') &&
                      i.navigation &&
                      (i.navigation.prevEl || l) &&
                      (i.navigation.nextEl || n) &&
                      (y.navigation || !1 === y.navigation) &&
                      S &&
                      !S.prevEl &&
                      !S.nextEl &&
                      (h = !0)
                  let C = (t) => {
                    e[t] &&
                      (e[t].destroy(),
                      'navigation' === t
                        ? (e.isElement &&
                            (e[t].prevEl.remove(), e[t].nextEl.remove()),
                          (y[t].prevEl = void 0),
                          (y[t].nextEl = void 0),
                          (e[t].prevEl = void 0),
                          (e[t].nextEl = void 0))
                        : (e.isElement && e[t].el.remove(),
                          (y[t].el = void 0),
                          (e[t].el = void 0)))
                  }
                  if (
                    (r.includes('loop') &&
                      e.isElement &&
                      (y.loop && !i.loop
                        ? (m = !0)
                        : !y.loop && i.loop
                        ? (v = !0)
                        : (g = !0)),
                    b.forEach((e) => {
                      if (s(y[e]) && s(i[e])) a(y[e], i[e])
                      else {
                        let t = i[e]
                        ;(!0 === t || !1 === t) &&
                        ('navigation' === e ||
                          'pagination' === e ||
                          'scrollbar' === e)
                          ? !1 === t && C(e)
                          : (y[e] = i[e])
                      }
                    }),
                    b.includes('controller') &&
                      !u &&
                      e.controller &&
                      e.controller.control &&
                      y.controller &&
                      y.controller.control &&
                      (e.controller.control = y.controller.control),
                    r.includes('children') &&
                      t &&
                      E &&
                      y.virtual.enabled &&
                      ((E.slides = t), E.update(!0)),
                    r.includes('children') && t && y.loop && (g = !0),
                    c)
                  ) {
                    let e = T.init()
                    e && T.update(!0)
                  }
                  u && (e.controller.control = y.controller.control),
                    p &&
                      (e.isElement &&
                        (!d || 'string' == typeof d) &&
                        ((d = document.createElement('div')).classList.add(
                          'swiper-pagination'
                        ),
                        e.el.shadowEl.appendChild(d)),
                      d && (y.pagination.el = d),
                      w.init(),
                      w.render(),
                      w.update()),
                    f &&
                      (e.isElement &&
                        (!o || 'string' == typeof o) &&
                        ((o = document.createElement('div')).classList.add(
                          'swiper-scrollbar'
                        ),
                        e.el.shadowEl.appendChild(o)),
                      o && (y.scrollbar.el = o),
                      x.init(),
                      x.updateSize(),
                      x.setTranslate()),
                    h &&
                      (e.isElement &&
                        ((n && 'string' != typeof n) ||
                          ((n = document.createElement('div')).classList.add(
                            'swiper-button-next'
                          ),
                          e.el.shadowEl.appendChild(n)),
                        (l && 'string' != typeof l) ||
                          ((l = document.createElement('div')).classList.add(
                            'swiper-button-prev'
                          ),
                          e.el.shadowEl.appendChild(l))),
                      n && (y.navigation.nextEl = n),
                      l && (y.navigation.prevEl = l),
                      S.init(),
                      S.update()),
                    r.includes('allowSlideNext') &&
                      (e.allowSlideNext = i.allowSlideNext),
                    r.includes('allowSlidePrev') &&
                      (e.allowSlidePrev = i.allowSlidePrev),
                    r.includes('direction') &&
                      e.changeDirection(i.direction, !1),
                    (m || g) && e.loopDestroy(),
                    (v || g) && e.loopCreate(),
                    e.update()
                })({
                  swiper: L.current,
                  slides: F,
                  passedParams: G,
                  changedParams: e,
                  nextEl: I.current,
                  prevEl: z.current,
                  scrollbarEl: R.current,
                  paginationEl: D.current,
                }),
              () => {
                Y()
              }
            )
          }),
          h(() => {
            f(L.current)
          }, [C]),
          r.createElement(
            m,
            g({ ref: k, className: c(`${E}${i ? ` ${i}` : ''}`) }, B),
            r.createElement(
              v.Provider,
              { value: L.current },
              V['container-start'],
              r.createElement(
                b,
                {
                  className: (function (e = '') {
                    return e
                      ? e.includes('swiper-wrapper')
                        ? e
                        : `swiper-wrapper ${e}`
                      : 'swiper-wrapper'
                  })(N.wrapperClass),
                },
                V['wrapper-start'],
                N.virtual
                  ? (function (e, t, i) {
                      if (!i) return null
                      let n = (e) => {
                          let i = e
                          return (
                            e < 0
                              ? (i = t.length + e)
                              : i >= t.length && (i -= t.length),
                            i
                          )
                        },
                        s = e.isHorizontal()
                          ? {
                              [e.rtlTranslate
                                ? 'right'
                                : 'left']: `${i.offset}px`,
                            }
                          : { top: `${i.offset}px` },
                        { from: a, to: l } = i,
                        o = e.params.loop ? -t.length : 0,
                        d = e.params.loop ? 2 * t.length : t.length,
                        c = []
                      for (let e = o; e < d; e += 1)
                        e >= a && e <= l && c.push(t[n(e)])
                      return c.map((t) =>
                        r.cloneElement(t, { swiper: e, style: s })
                      )
                    })(L.current, F, C)
                  : F.map((e, t) =>
                      r.cloneElement(e, {
                        swiper: L.current,
                        swiperSlideIndex: t,
                      })
                    ),
                V['wrapper-end']
              ),
              l(N) &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement('div', {
                    ref: z,
                    className: 'swiper-button-prev',
                  }),
                  r.createElement('div', {
                    ref: I,
                    className: 'swiper-button-next',
                  })
                ),
              d(N) &&
                r.createElement('div', {
                  ref: R,
                  className: 'swiper-scrollbar',
                }),
              o(N) &&
                r.createElement('div', {
                  ref: D,
                  className: 'swiper-pagination',
                }),
              V['container-end']
            )
          )
        )
      })
      function y() {
        return (y = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t]
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
              }
              return e
            }).apply(this, arguments)
      }
      b.displayName = 'Swiper'
      let w = (0, r.forwardRef)(function (e, t) {
        let {
            tag: i = 'div',
            children: n,
            className: s = '',
            swiper: a,
            zoom: l,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: u,
            ...p
          } = void 0 === e ? {} : e,
          f = (0, r.useRef)(null),
          [v, g] = (0, r.useState)('swiper-slide'),
          [b, w] = (0, r.useState)(!1)
        function S(e, t, i) {
          t === f.current && g(i)
        }
        h(() => {
          if (
            (void 0 !== u && (f.current.swiperSlideIndex = u),
            t && (t.current = f.current),
            f.current && a)
          ) {
            if (a.destroyed) {
              'swiper-slide' !== v && g('swiper-slide')
              return
            }
            return (
              a.on('_slideClass', S),
              () => {
                a && a.off('_slideClass', S)
              }
            )
          }
        }),
          h(() => {
            a && f.current && !a.destroyed && g(a.getSlideClasses(f.current))
          }, [a])
        let x = {
            isActive: v.indexOf('swiper-slide-active') >= 0,
            isVisible: v.indexOf('swiper-slide-visible') >= 0,
            isPrev: v.indexOf('swiper-slide-prev') >= 0,
            isNext: v.indexOf('swiper-slide-next') >= 0,
          },
          E = () => ('function' == typeof n ? n(x) : n),
          T = () => {
            w(!0)
          }
        return r.createElement(
          i,
          y(
            {
              ref: f,
              className: c(`${v}${s ? ` ${s}` : ''}`),
              'data-swiper-slide-index': d,
              onLoad: T,
            },
            p
          ),
          l &&
            r.createElement(
              m.Provider,
              { value: x },
              r.createElement(
                'div',
                {
                  className: 'swiper-zoom-container',
                  'data-swiper-zoom': 'number' == typeof l ? l : void 0,
                },
                E(),
                o &&
                  !b &&
                  r.createElement('div', { className: 'swiper-lazy-preloader' })
              )
            ),
          !l &&
            r.createElement(
              m.Provider,
              { value: x },
              E(),
              o &&
                !b &&
                r.createElement('div', { className: 'swiper-lazy-preloader' })
            )
        )
      })
      w.displayName = 'SwiperSlide'
    },
    6523: function (e, t, i) {
      'use strict'
      let r, n, s, a
      function l(e) {
        return (
          null !== e &&
          'object' == typeof e &&
          'constructor' in e &&
          e.constructor === Object
        )
      }
      function o(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : l(t[i]) &&
              l(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              o(e[i], t[i])
        })
      }
      i.d(t, {
        Rv: function () {
          return U
        },
        W_: function () {
          return q
        },
        tl: function () {
          return X
        },
        ZP: function () {
          return H
        },
      })
      let d = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      }
      function c() {
        let e = 'undefined' != typeof document ? document : {}
        return o(e, d), e
      }
      let u = {
        document: d,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          'undefined' != typeof setTimeout && clearTimeout(e)
        },
      }
      function p() {
        let e = 'undefined' != typeof window ? window : {}
        return o(e, u), e
      }
      function f(e, t = 0) {
        return setTimeout(e, t)
      }
      function h() {
        return Date.now()
      }
      function m(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        )
      }
      function v(...e) {
        let t = Object(e[0]),
          i = ['__proto__', 'constructor', 'prototype']
        for (let r = 1; r < e.length; r += 1) {
          let n = e[r]
          if (
            null != n &&
            ('undefined' != typeof window && void 0 !== window.HTMLElement
              ? !(n instanceof HTMLElement)
              : !n || (1 !== n.nodeType && 11 !== n.nodeType))
          ) {
            let e = Object.keys(Object(n)).filter((e) => 0 > i.indexOf(e))
            for (let i = 0, r = e.length; i < r; i += 1) {
              let r = e[i],
                s = Object.getOwnPropertyDescriptor(n, r)
              void 0 !== s &&
                s.enumerable &&
                (m(t[r]) && m(n[r])
                  ? n[r].__swiper__
                    ? (t[r] = n[r])
                    : v(t[r], n[r])
                  : !m(t[r]) && m(n[r])
                  ? ((t[r] = {}),
                    n[r].__swiper__ ? (t[r] = n[r]) : v(t[r], n[r]))
                  : (t[r] = n[r]))
            }
          }
        }
        return t
      }
      function g(e, t, i) {
        e.style.setProperty(t, i)
      }
      function b({ swiper: e, targetPosition: t, side: i }) {
        let r
        let n = p(),
          s = -e.translate,
          a = null,
          l = e.params.speed
        ;(e.wrapperEl.style.scrollSnapType = 'none'),
          n.cancelAnimationFrame(e.cssModeFrameID)
        let o = t > s ? 'next' : 'prev',
          d = (e, t) => ('next' === o && e >= t) || ('prev' === o && e <= t),
          c = () => {
            ;(r = new Date().getTime()), null === a && (a = r)
            let o = Math.max(Math.min((r - a) / l, 1), 0),
              u = s + (0.5 - Math.cos(o * Math.PI) / 2) * (t - s)
            if (
              (d(u, t) && (u = t), e.wrapperEl.scrollTo({ [i]: u }), d(u, t))
            ) {
              ;(e.wrapperEl.style.overflow = 'hidden'),
                (e.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  ;(e.wrapperEl.style.overflow = ''),
                    e.wrapperEl.scrollTo({ [i]: u })
                }),
                n.cancelAnimationFrame(e.cssModeFrameID)
              return
            }
            e.cssModeFrameID = n.requestAnimationFrame(c)
          }
        c()
      }
      function y(e, t = '') {
        return [...e.children].filter((e) => e.matches(t))
      }
      function w(e, t = []) {
        let i = document.createElement(e)
        return i.classList.add(...(Array.isArray(t) ? t : [t])), i
      }
      function S(e, t) {
        let i = p()
        return i.getComputedStyle(e, null).getPropertyValue(t)
      }
      function x(e) {
        let t,
          i = e
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1)
          return t
        }
      }
      function E(e, t) {
        let i = [],
          r = e.parentElement
        for (; r; )
          t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement)
        return i
      }
      function T(e, t) {
        t &&
          e.addEventListener('transitionend', function i(r) {
            r.target === e &&
              (t.call(e, r), e.removeEventListener('transitionend', i))
          })
      }
      function C(e, t, i) {
        let r = p()
        return i
          ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    'width' === t ? 'margin-right' : 'margin-top'
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    'width' === t ? 'margin-left' : 'margin-bottom'
                  )
              )
          : e.offsetWidth
      }
      function M() {
        return (
          r ||
            (r = (function () {
              let e = p(),
                t = c()
              return {
                smoothScroll:
                  t.documentElement &&
                  'scrollBehavior' in t.documentElement.style,
                touch: !!(
                  'ontouchstart' in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              }
            })()),
          r
        )
      }
      function _({ swiper: e, runCallbacks: t, direction: i, step: r }) {
        let { activeIndex: n, previousIndex: s } = e,
          a = i
        if (
          (a || (a = n > s ? 'next' : n < s ? 'prev' : 'reset'),
          e.emit(`transition${r}`),
          t && n !== s)
        ) {
          if ('reset' === a) {
            e.emit(`slideResetTransition${r}`)
            return
          }
          e.emit(`slideChangeTransition${r}`),
            'next' === a
              ? e.emit(`slideNextTransition${r}`)
              : e.emit(`slidePrevTransition${r}`)
        }
      }
      function P(e) {
        let t = this,
          i = c(),
          r = p(),
          n = t.touchEventsData
        n.evCache.push(e)
        let { params: s, touches: a, enabled: l } = t
        if (
          !l ||
          (!s.simulateTouch && 'mouse' === e.pointerType) ||
          (t.animating && s.preventInteractionOnTransition)
        )
          return
        !t.animating && s.cssMode && s.loop && t.loopFix()
        let o = e
        o.originalEvent && (o = o.originalEvent)
        let d = o.target
        if (
          ('wrapper' === s.touchEventsTarget && !t.wrapperEl.contains(d)) ||
          ('which' in o && 3 === o.which) ||
          ('button' in o && o.button > 0) ||
          (n.isTouched && n.isMoved)
        )
          return
        let u = !!s.noSwipingClass && '' !== s.noSwipingClass,
          f = e.composedPath ? e.composedPath() : e.path
        u && o.target && o.target.shadowRoot && f && (d = f[0])
        let m = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          v = !!(o.target && o.target.shadowRoot)
        if (
          s.noSwiping &&
          (v
            ? (function (e, t = this) {
                return (function t(i) {
                  if (!i || i === c() || i === p()) return null
                  i.assignedSlot && (i = i.assignedSlot)
                  let r = i.closest(e)
                  return r || i.getRootNode
                    ? r || t(i.getRootNode().host)
                    : null
                })(t)
              })(m, d)
            : d.closest(m))
        ) {
          t.allowClick = !0
          return
        }
        if (s.swipeHandler && !d.closest(s.swipeHandler)) return
        ;(a.currentX = o.pageX), (a.currentY = o.pageY)
        let g = a.currentX,
          b = a.currentY,
          y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          w = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold
        if (y && (g <= w || g >= r.innerWidth - w)) {
          if ('prevent' !== y) return
          e.preventDefault()
        }
        Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (a.startX = g),
          (a.startY = b),
          (n.touchStartTime = h()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (n.allowThresholdMove = !1)
        let S = !0
        d.matches(n.focusableElements) &&
          ((S = !1), 'SELECT' === d.nodeName && (n.isTouched = !1)),
          i.activeElement &&
            i.activeElement.matches(n.focusableElements) &&
            i.activeElement !== d &&
            i.activeElement.blur()
        let x = S && t.allowTouchMove && s.touchStartPreventDefault
        ;(s.touchStartForcePreventDefault || x) &&
          !d.isContentEditable &&
          o.preventDefault(),
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !s.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit('touchStart', o)
      }
      function O(e) {
        let t
        let i = c(),
          r = this,
          n = r.touchEventsData,
          { params: s, touches: a, rtlTranslate: l, enabled: o } = r
        if (!o || (!s.simulateTouch && 'mouse' === e.pointerType)) return
        let d = e
        if ((d.originalEvent && (d = d.originalEvent), !n.isTouched)) {
          n.startMoving && n.isScrolling && r.emit('touchMoveOpposite', d)
          return
        }
        let u = n.evCache.findIndex((e) => e.pointerId === d.pointerId)
        u >= 0 && (n.evCache[u] = d)
        let p = n.evCache.length > 1 ? n.evCache[0] : d,
          f = p.pageX,
          m = p.pageY
        if (d.preventedByNestedSwiper) {
          ;(a.startX = f), (a.startY = m)
          return
        }
        if (!r.allowTouchMove) {
          d.target.matches(n.focusableElements) || (r.allowClick = !1),
            n.isTouched &&
              (Object.assign(a, {
                startX: f,
                startY: m,
                prevX: r.touches.currentX,
                prevY: r.touches.currentY,
                currentX: f,
                currentY: m,
              }),
              (n.touchStartTime = h()))
          return
        }
        if (s.touchReleaseOnEdges && !s.loop) {
          if (r.isVertical()) {
            if (
              (m < a.startY && r.translate <= r.maxTranslate()) ||
              (m > a.startY && r.translate >= r.minTranslate())
            ) {
              ;(n.isTouched = !1), (n.isMoved = !1)
              return
            }
          } else if (
            (f < a.startX && r.translate <= r.maxTranslate()) ||
            (f > a.startX && r.translate >= r.minTranslate())
          )
            return
        }
        if (
          i.activeElement &&
          d.target === i.activeElement &&
          d.target.matches(n.focusableElements)
        ) {
          ;(n.isMoved = !0), (r.allowClick = !1)
          return
        }
        if (
          (n.allowTouchCallbacks && r.emit('touchMove', d),
          d.targetTouches && d.targetTouches.length > 1)
        )
          return
        ;(a.currentX = f), (a.currentY = m)
        let v = a.currentX - a.startX,
          g = a.currentY - a.startY
        if (
          r.params.threshold &&
          Math.sqrt(v ** 2 + g ** 2) < r.params.threshold
        )
          return
        if (void 0 === n.isScrolling) {
          let e
          ;(r.isHorizontal() && a.currentY === a.startY) ||
          (r.isVertical() && a.currentX === a.startX)
            ? (n.isScrolling = !1)
            : v * v + g * g >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(g), Math.abs(v))) / Math.PI),
              (n.isScrolling = r.isHorizontal()
                ? e > s.touchAngle
                : 90 - e > s.touchAngle))
        }
        if (
          (n.isScrolling && r.emit('touchMoveOpposite', d),
          void 0 === n.startMoving &&
            (a.currentX !== a.startX || a.currentY !== a.startY) &&
            (n.startMoving = !0),
          n.isScrolling ||
            (r.zoom &&
              r.params.zoom &&
              r.params.zoom.enabled &&
              n.evCache.length > 1))
        ) {
          n.isTouched = !1
          return
        }
        if (!n.startMoving) return
        ;(r.allowClick = !1),
          !s.cssMode && d.cancelable && d.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && d.stopPropagation()
        let b = r.isHorizontal() ? v : g,
          y = r.isHorizontal()
            ? a.currentX - a.previousX
            : a.currentY - a.previousY
        s.oneWayMovement &&
          ((b = Math.abs(b) * (l ? 1 : -1)), (y = Math.abs(y) * (l ? 1 : -1))),
          (a.diff = b),
          (b *= s.touchRatio),
          l && ((b = -b), (y = -y))
        let w = r.touchesDirection
        ;(r.swipeDirection = b > 0 ? 'prev' : 'next'),
          (r.touchesDirection = y > 0 ? 'prev' : 'next')
        let S = r.params.loop && !s.cssMode
        if (!n.isMoved) {
          if (
            (S && r.loopFix({ direction: r.swipeDirection }),
            (n.startTranslate = r.getTranslate()),
            r.setTransition(0),
            r.animating)
          ) {
            let e = new window.CustomEvent('transitionend', {
              bubbles: !0,
              cancelable: !0,
            })
            r.wrapperEl.dispatchEvent(e)
          }
          ;(n.allowMomentumBounce = !1),
            s.grabCursor &&
              (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
              r.setGrabCursor(!0),
            r.emit('sliderFirstMove', d)
        }
        n.isMoved &&
          w !== r.touchesDirection &&
          S &&
          Math.abs(b) >= 1 &&
          (r.loopFix({ direction: r.swipeDirection, setTranslate: !0 }),
          (t = !0)),
          r.emit('sliderMove', d),
          (n.isMoved = !0),
          (n.currentTranslate = b + n.startTranslate)
        let x = !0,
          E = s.resistanceRatio
        if (
          (s.touchReleaseOnEdges && (E = 0),
          b > 0
            ? (S &&
                !t &&
                n.currentTranslate >
                  (s.centeredSlides
                    ? r.minTranslate() - r.size / 2
                    : r.minTranslate()) &&
                r.loopFix({
                  direction: 'prev',
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              n.currentTranslate > r.minTranslate() &&
                ((x = !1),
                s.resistance &&
                  (n.currentTranslate =
                    r.minTranslate() -
                    1 +
                    (-r.minTranslate() + n.startTranslate + b) ** E)))
            : b < 0 &&
              (S &&
                !t &&
                n.currentTranslate <
                  (s.centeredSlides
                    ? r.maxTranslate() + r.size / 2
                    : r.maxTranslate()) &&
                r.loopFix({
                  direction: 'next',
                  setTranslate: !0,
                  activeSlideIndex:
                    r.slides.length -
                    ('auto' === s.slidesPerView
                      ? r.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(s.slidesPerView, 10))),
                }),
              n.currentTranslate < r.maxTranslate() &&
                ((x = !1),
                s.resistance &&
                  (n.currentTranslate =
                    r.maxTranslate() +
                    1 -
                    (r.maxTranslate() - n.startTranslate - b) ** E))),
          x && (d.preventedByNestedSwiper = !0),
          !r.allowSlideNext &&
            'next' === r.swipeDirection &&
            n.currentTranslate < n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          !r.allowSlidePrev &&
            'prev' === r.swipeDirection &&
            n.currentTranslate > n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          r.allowSlidePrev ||
            r.allowSlideNext ||
            (n.currentTranslate = n.startTranslate),
          s.threshold > 0)
        ) {
          if (Math.abs(b) > s.threshold || n.allowThresholdMove) {
            if (!n.allowThresholdMove) {
              ;(n.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (n.currentTranslate = n.startTranslate),
                (a.diff = r.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY)
              return
            }
          } else {
            n.currentTranslate = n.startTranslate
            return
          }
        }
        s.followFinger &&
          !s.cssMode &&
          (((s.freeMode && s.freeMode.enabled && r.freeMode) ||
            s.watchSlidesProgress) &&
            (r.updateActiveIndex(), r.updateSlidesClasses()),
          r.params.freeMode &&
            s.freeMode.enabled &&
            r.freeMode &&
            r.freeMode.onTouchMove(),
          r.updateProgress(n.currentTranslate),
          r.setTranslate(n.currentTranslate))
      }
      function k(e) {
        let t
        let i = this,
          r = i.touchEventsData,
          n = r.evCache.findIndex((t) => t.pointerId === e.pointerId)
        if (
          (n >= 0 && r.evCache.splice(n, 1),
          ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type))
        ) {
          let t =
            'pointercancel' === e.type &&
            (i.browser.isSafari || i.browser.isWebView)
          if (!t) return
        }
        let {
          params: s,
          touches: a,
          rtlTranslate: l,
          slidesGrid: o,
          enabled: d,
        } = i
        if (!d || (!s.simulateTouch && 'mouse' === e.pointerType)) return
        let c = e
        if (
          (c.originalEvent && (c = c.originalEvent),
          r.allowTouchCallbacks && i.emit('touchEnd', c),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        ) {
          r.isMoved && s.grabCursor && i.setGrabCursor(!1),
            (r.isMoved = !1),
            (r.startMoving = !1)
          return
        }
        s.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) &&
          i.setGrabCursor(!1)
        let u = h(),
          p = u - r.touchStartTime
        if (i.allowClick) {
          let e = c.path || (c.composedPath && c.composedPath())
          i.updateClickedSlide((e && e[0]) || c.target),
            i.emit('tap click', c),
            p < 300 &&
              u - r.lastClickTime < 300 &&
              i.emit('doubleTap doubleClick', c)
        }
        if (
          ((r.lastClickTime = h()),
          f(() => {
            i.destroyed || (i.allowClick = !0)
          }),
          !r.isTouched ||
            !r.isMoved ||
            !i.swipeDirection ||
            0 === a.diff ||
            r.currentTranslate === r.startTranslate)
        ) {
          ;(r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1)
          return
        }
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (t = s.followFinger
            ? l
              ? i.translate
              : -i.translate
            : -r.currentTranslate),
          s.cssMode)
        )
          return
        if (i.params.freeMode && s.freeMode.enabled) {
          i.freeMode.onTouchEnd({ currentPos: t })
          return
        }
        let m = 0,
          v = i.slidesSizesGrid[0]
        for (
          let e = 0;
          e < o.length;
          e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          let i = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup
          void 0 !== o[e + i]
            ? t >= o[e] && t < o[e + i] && ((m = e), (v = o[e + i] - o[e]))
            : t >= o[e] && ((m = e), (v = o[o.length - 1] - o[o.length - 2]))
        }
        let g = null,
          b = null
        s.rewind &&
          (i.isBeginning
            ? (b =
                i.params.virtual && i.params.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1)
            : i.isEnd && (g = 0))
        let y = (t - o[m]) / v,
          w = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup
        if (p > s.longSwipesMs) {
          if (!s.longSwipes) {
            i.slideTo(i.activeIndex)
            return
          }
          'next' === i.swipeDirection &&
            (y >= s.longSwipesRatio
              ? i.slideTo(s.rewind && i.isEnd ? g : m + w)
              : i.slideTo(m)),
            'prev' === i.swipeDirection &&
              (y > 1 - s.longSwipesRatio
                ? i.slideTo(m + w)
                : null !== b && y < 0 && Math.abs(y) > s.longSwipesRatio
                ? i.slideTo(b)
                : i.slideTo(m))
        } else {
          if (!s.shortSwipes) {
            i.slideTo(i.activeIndex)
            return
          }
          let e =
            i.navigation &&
            (c.target === i.navigation.nextEl ||
              c.target === i.navigation.prevEl)
          e
            ? c.target === i.navigation.nextEl
              ? i.slideTo(m + w)
              : i.slideTo(m)
            : ('next' === i.swipeDirection && i.slideTo(null !== g ? g : m + w),
              'prev' === i.swipeDirection && i.slideTo(null !== b ? b : m))
        }
      }
      function L() {
        let e = this,
          { params: t, el: i } = e
        if (i && 0 === i.offsetWidth) return
        t.breakpoints && e.setBreakpoint()
        let { allowSlideNext: r, allowSlidePrev: n, snapGrid: s } = e,
          l = e.virtual && e.params.virtual.enabled
        ;(e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses()
        let o = l && t.loop
        ;('auto' !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(a),
            (a = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume()
            }, 500))),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = r),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
      }
      function A(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()))
      }
      function j() {
        let e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: r } = e
        if (!r) return
        ;(e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses()
        let n = e.maxTranslate() - e.minTranslate()
        ;(0 === n ? 0 : (e.translate - e.minTranslate()) / n) !== e.progress &&
          e.updateProgress(i ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1)
      }
      let I = (e, t) => {
        if (!e || e.destroyed || !e.params) return
        let i = t.closest(
          e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`
        )
        if (i) {
          let t = i.querySelector(`.${e.params.lazyPreloaderClass}`)
          t && t.remove()
        }
      }
      function z(e) {
        I(this, e.target), this.update()
      }
      let D = !1
      function R() {}
      let N = (e, t) => {
          let i = c(),
            { params: r, el: n, wrapperEl: s, device: a } = e,
            l = !!r.nested,
            o = 'on' === t ? 'addEventListener' : 'removeEventListener'
          n[o]('pointerdown', e.onTouchStart, { passive: !1 }),
            i[o]('pointermove', e.onTouchMove, { passive: !1, capture: l }),
            i[o]('pointerup', e.onTouchEnd, { passive: !0 }),
            i[o]('pointercancel', e.onTouchEnd, { passive: !0 }),
            i[o]('pointerout', e.onTouchEnd, { passive: !0 }),
            i[o]('pointerleave', e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              n[o]('click', e.onClick, !0),
            r.cssMode && s[o]('scroll', e.onScroll),
            r.updateOnWindowResize
              ? e[t](
                  a.ios || a.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  L,
                  !0
                )
              : e[t]('observerUpdate', L, !0),
            n[o]('load', e.onLoad, { capture: !0 })
        },
        G = (e, t) => e.grid && t.grid && t.grid.rows > 1
      var B = {
        init: !0,
        direction: 'horizontal',
        oneWayMovement: !1,
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: 'swiper-',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      }
      let $ = {
          eventsEmitter: {
            on(e, t, i) {
              let r = this
              if (!r.eventsListeners || r.destroyed || 'function' != typeof t)
                return r
              let n = i ? 'unshift' : 'push'
              return (
                e.split(' ').forEach((e) => {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][n](t)
                }),
                r
              )
            },
            once(e, t, i) {
              let r = this
              if (!r.eventsListeners || r.destroyed || 'function' != typeof t)
                return r
              function n(...i) {
                r.off(e, n),
                  n.__emitterProxy && delete n.__emitterProxy,
                  t.apply(r, i)
              }
              return (n.__emitterProxy = t), r.on(e, n, i)
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  'function' != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? 'unshift' : 'push'](e)),
                this
              )
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this
              let t = this.eventsAnyListeners.indexOf(e)
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
            },
            off(e, t) {
              let i = this
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(' ').forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((r, n) => {
                          ;(r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(n, 1)
                        })
                  }),
                i
              )
            },
            emit(...e) {
              let t, i, r
              let n = this
              if (!n.eventsListeners || n.destroyed || !n.eventsListeners)
                return n
              'string' == typeof e[0] || Array.isArray(e[0])
                ? ((t = e[0]), (i = e.slice(1, e.length)), (r = n))
                : ((t = e[0].events), (i = e[0].data), (r = e[0].context || n)),
                i.unshift(r)
              let s = Array.isArray(t) ? t : t.split(' ')
              return (
                s.forEach((e) => {
                  n.eventsAnyListeners &&
                    n.eventsAnyListeners.length &&
                    n.eventsAnyListeners.forEach((t) => {
                      t.apply(r, [e, ...i])
                    }),
                    n.eventsListeners &&
                      n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((e) => {
                        e.apply(r, i)
                      })
                }),
                n
              )
            },
          },
          update: {
            updateSize: function () {
              let e, t
              let i = this.el
              ;(e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(S(i, 'padding-left') || 0, 10) -
                    parseInt(S(i, 'padding-right') || 0, 10)),
                  (t =
                    t -
                    parseInt(S(i, 'padding-top') || 0, 10) -
                    parseInt(S(i, 'padding-bottom') || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }))
            },
            updateSlides: function () {
              let e
              let t = this
              function i(e) {
                return t.isHorizontal()
                  ? e
                  : {
                      width: 'height',
                      'margin-top': 'margin-left',
                      'margin-bottom ': 'margin-right',
                      'margin-left': 'margin-top',
                      'margin-right': 'margin-bottom',
                      'padding-left': 'padding-top',
                      'padding-right': 'padding-bottom',
                      marginRight: 'marginBottom',
                    }[e]
              }
              function r(e, t) {
                return parseFloat(e.getPropertyValue(i(t)) || 0)
              }
              let n = t.params,
                {
                  wrapperEl: s,
                  slidesEl: a,
                  size: l,
                  rtlTranslate: o,
                  wrongRTL: d,
                } = t,
                c = t.virtual && n.virtual.enabled,
                u = c ? t.virtual.slides.length : t.slides.length,
                p = y(a, `.${t.params.slideClass}, swiper-slide`),
                f = c ? t.virtual.slides.length : p.length,
                h = [],
                m = [],
                v = [],
                b = n.slidesOffsetBefore
              'function' == typeof b && (b = n.slidesOffsetBefore.call(t))
              let w = n.slidesOffsetAfter
              'function' == typeof w && (w = n.slidesOffsetAfter.call(t))
              let x = t.snapGrid.length,
                E = t.slidesGrid.length,
                T = n.spaceBetween,
                M = -b,
                _ = 0,
                P = 0
              if (void 0 === l) return
              'string' == typeof T &&
                T.indexOf('%') >= 0 &&
                (T = (parseFloat(T.replace('%', '')) / 100) * l),
                (t.virtualSize = -T),
                p.forEach((e) => {
                  o ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                    (e.style.marginBottom = ''),
                    (e.style.marginTop = '')
                }),
                n.centeredSlides &&
                  n.cssMode &&
                  (g(s, '--swiper-centered-offset-before', ''),
                  g(s, '--swiper-centered-offset-after', ''))
              let O = n.grid && n.grid.rows > 1 && t.grid
              O && t.grid.initSlides(f)
              let k =
                'auto' === n.slidesPerView &&
                n.breakpoints &&
                Object.keys(n.breakpoints).filter(
                  (e) => void 0 !== n.breakpoints[e].slidesPerView
                ).length > 0
              for (let s = 0; s < f; s += 1) {
                let a
                if (
                  ((e = 0),
                  p[s] && (a = p[s]),
                  O && t.grid.updateSlide(s, a, f, i),
                  !p[s] || 'none' !== S(a, 'display'))
                ) {
                  if ('auto' === n.slidesPerView) {
                    k && (p[s].style[i('width')] = '')
                    let l = getComputedStyle(a),
                      o = a.style.transform,
                      d = a.style.webkitTransform
                    if (
                      (o && (a.style.transform = 'none'),
                      d && (a.style.webkitTransform = 'none'),
                      n.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? C(a, 'width', !0)
                        : C(a, 'height', !0)
                    else {
                      let t = r(l, 'width'),
                        i = r(l, 'padding-left'),
                        n = r(l, 'padding-right'),
                        s = r(l, 'margin-left'),
                        o = r(l, 'margin-right'),
                        d = l.getPropertyValue('box-sizing')
                      if (d && 'border-box' === d) e = t + s + o
                      else {
                        let { clientWidth: r, offsetWidth: l } = a
                        e = t + i + n + s + o + (l - r)
                      }
                    }
                    o && (a.style.transform = o),
                      d && (a.style.webkitTransform = d),
                      n.roundLengths && (e = Math.floor(e))
                  } else
                    (e = (l - (n.slidesPerView - 1) * T) / n.slidesPerView),
                      n.roundLengths && (e = Math.floor(e)),
                      p[s] && (p[s].style[i('width')] = `${e}px`)
                  p[s] && (p[s].swiperSlideSize = e),
                    v.push(e),
                    n.centeredSlides
                      ? ((M = M + e / 2 + _ / 2 + T),
                        0 === _ && 0 !== s && (M = M - l / 2 - T),
                        0 === s && (M = M - l / 2 - T),
                        0.001 > Math.abs(M) && (M = 0),
                        n.roundLengths && (M = Math.floor(M)),
                        P % n.slidesPerGroup == 0 && h.push(M),
                        m.push(M))
                      : (n.roundLengths && (M = Math.floor(M)),
                        (P - Math.min(t.params.slidesPerGroupSkip, P)) %
                          t.params.slidesPerGroup ==
                          0 && h.push(M),
                        m.push(M),
                        (M = M + e + T)),
                    (t.virtualSize += e + T),
                    (_ = e),
                    (P += 1)
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, l) + w),
                o &&
                  d &&
                  ('slide' === n.effect || 'coverflow' === n.effect) &&
                  (s.style.width = `${t.virtualSize + n.spaceBetween}px`),
                n.setWrapperSize &&
                  (s.style[i('width')] = `${t.virtualSize + n.spaceBetween}px`),
                O && t.grid.updateWrapperSize(e, h, i),
                !n.centeredSlides)
              ) {
                let e = []
                for (let i = 0; i < h.length; i += 1) {
                  let r = h[i]
                  n.roundLengths && (r = Math.floor(r)),
                    h[i] <= t.virtualSize - l && e.push(r)
                }
                ;(h = e),
                  Math.floor(t.virtualSize - l) - Math.floor(h[h.length - 1]) >
                    1 && h.push(t.virtualSize - l)
              }
              if (c && n.loop) {
                let e = v[0] + T
                if (n.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        n.slidesPerGroup
                    ),
                    r = e * n.slidesPerGroup
                  for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + r)
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === n.slidesPerGroup && h.push(h[h.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e)
              }
              if ((0 === h.length && (h = [0]), 0 !== n.spaceBetween)) {
                let e = t.isHorizontal() && o ? 'marginLeft' : i('marginRight')
                p.filter(
                  (e, t) => !n.cssMode || !!n.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = `${T}px`
                })
              }
              if (n.centeredSlides && n.centeredSlidesBounds) {
                let e = 0
                v.forEach((t) => {
                  e += t + (n.spaceBetween ? n.spaceBetween : 0)
                }),
                  (e -= n.spaceBetween)
                let t = e - l
                h = h.map((e) => (e < 0 ? -b : e > t ? t + w : e))
              }
              if (n.centerInsufficientSlides) {
                let e = 0
                if (
                  (v.forEach((t) => {
                    e += t + (n.spaceBetween ? n.spaceBetween : 0)
                  }),
                  (e -= n.spaceBetween) < l)
                ) {
                  let t = (l - e) / 2
                  h.forEach((e, i) => {
                    h[i] = e - t
                  }),
                    m.forEach((e, i) => {
                      m[i] = e + t
                    })
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: h,
                  slidesGrid: m,
                  slidesSizesGrid: v,
                }),
                n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
              ) {
                g(s, '--swiper-centered-offset-before', `${-h[0]}px`),
                  g(
                    s,
                    '--swiper-centered-offset-after',
                    `${t.size / 2 - v[v.length - 1] / 2}px`
                  )
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0]
                ;(t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i))
              }
              if (
                (f !== u && t.emit('slidesLengthChange'),
                h.length !== x &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit('snapGridLengthChange')),
                m.length !== E && t.emit('slidesGridLengthChange'),
                n.watchSlidesProgress && t.updateSlidesOffset(),
                !c &&
                  !n.cssMode &&
                  ('slide' === n.effect || 'fade' === n.effect))
              ) {
                let e = `${n.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e)
                f <= n.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e)
              }
            },
            updateAutoHeight: function (e) {
              let t
              let i = this,
                r = [],
                n = i.virtual && i.params.virtual.enabled,
                s = 0
              'number' == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed)
              let a = (e) =>
                n
                  ? i.slides.filter(
                      (t) =>
                        parseInt(
                          t.getAttribute('data-swiper-slide-index'),
                          10
                        ) === e
                    )[0]
                  : i.slides[e]
              if (
                'auto' !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    r.push(e)
                  })
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t
                    if (e > i.slides.length && !n) break
                    r.push(a(e))
                  }
              } else r.push(a(i.activeIndex))
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  let e = r[t].offsetHeight
                  s = e > s ? e : s
                }
              ;(s || 0 === s) && (i.wrapperEl.style.height = `${s}px`)
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
              let t = this,
                i = t.params,
                { slides: r, rtlTranslate: n, snapGrid: s } = t
              if (0 === r.length) return
              void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset()
              let a = -e
              n && (a = e),
                r.forEach((e) => {
                  e.classList.remove(i.slideVisibleClass)
                }),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = [])
              for (let e = 0; e < r.length; e += 1) {
                let l = r[e],
                  o = l.swiperSlideOffset
                i.cssMode && i.centeredSlides && (o -= r[0].swiperSlideOffset)
                let d =
                    (a + (i.centeredSlides ? t.minTranslate() : 0) - o) /
                    (l.swiperSlideSize + i.spaceBetween),
                  c =
                    (a - s[0] + (i.centeredSlides ? t.minTranslate() : 0) - o) /
                    (l.swiperSlideSize + i.spaceBetween),
                  u = -(a - o),
                  p = u + t.slidesSizesGrid[e],
                  f =
                    (u >= 0 && u < t.size - 1) ||
                    (p > 1 && p <= t.size) ||
                    (u <= 0 && p >= t.size)
                f &&
                  (t.visibleSlides.push(l),
                  t.visibleSlidesIndexes.push(e),
                  r[e].classList.add(i.slideVisibleClass)),
                  (l.progress = n ? -d : d),
                  (l.originalProgress = n ? -c : c)
              }
            },
            updateProgress: function (e) {
              let t = this
              if (void 0 === e) {
                let i = t.rtlTranslate ? -1 : 1
                e = (t && t.translate && t.translate * i) || 0
              }
              let i = t.params,
                r = t.maxTranslate() - t.minTranslate(),
                { progress: n, isBeginning: s, isEnd: a, progressLoop: l } = t,
                o = s,
                d = a
              if (0 === r) (n = 0), (s = !0), (a = !0)
              else {
                n = (e - t.minTranslate()) / r
                let i = 1 > Math.abs(e - t.minTranslate()),
                  l = 1 > Math.abs(e - t.maxTranslate())
                ;(s = i || n <= 0),
                  (a = l || n >= 1),
                  i && (n = 0),
                  l && (n = 1)
              }
              if (i.loop) {
                let i = t.getSlideIndex(
                    t.slides.filter(
                      (e) => '0' === e.getAttribute('data-swiper-slide-index')
                    )[0]
                  ),
                  r = t.getSlideIndex(
                    t.slides.filter(
                      (e) =>
                        1 * e.getAttribute('data-swiper-slide-index') ==
                        t.slides.length - 1
                    )[0]
                  ),
                  n = t.slidesGrid[i],
                  s = t.slidesGrid[r],
                  a = t.slidesGrid[t.slidesGrid.length - 1],
                  o = Math.abs(e)
                ;(l = o >= n ? (o - n) / a : (o + a - s) / a) > 1 && (l -= 1)
              }
              Object.assign(t, {
                progress: n,
                progressLoop: l,
                isBeginning: s,
                isEnd: a,
              }),
                (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
                  t.updateSlidesProgress(e),
                s && !o && t.emit('reachBeginning toEdge'),
                a && !d && t.emit('reachEnd toEdge'),
                ((o && !s) || (d && !a)) && t.emit('fromEdge'),
                t.emit('progress', n)
            },
            updateSlidesClasses: function () {
              let e
              let { slides: t, params: i, slidesEl: r, activeIndex: n } = this,
                s = this.virtual && i.virtual.enabled,
                a = (e) => y(r, `.${i.slideClass}${e}, swiper-slide${e}`)[0]
              if (
                (t.forEach((e) => {
                  e.classList.remove(
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  )
                }),
                s)
              ) {
                if (i.loop) {
                  let t = n - this.virtual.slidesBefore
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = a(`[data-swiper-slide-index="${t}"]`))
                } else e = a(`[data-swiper-slide-index="${n}"]`)
              } else e = t[n]
              if (e) {
                e.classList.add(i.slideActiveClass)
                let r = (function (e, t) {
                  let i = []
                  for (; e.nextElementSibling; ) {
                    let r = e.nextElementSibling
                    t ? r.matches(t) && i.push(r) : i.push(r), (e = r)
                  }
                  return i
                })(e, `.${i.slideClass}, swiper-slide`)[0]
                i.loop && !r && (r = t[0]),
                  r && r.classList.add(i.slideNextClass)
                let n = (function (e, t) {
                  let i = []
                  for (; e.previousElementSibling; ) {
                    let r = e.previousElementSibling
                    t ? r.matches(t) && i.push(r) : i.push(r), (e = r)
                  }
                  return i
                })(e, `.${i.slideClass}, swiper-slide`)[0]
                i.loop, n && n.classList.add(i.slidePrevClass)
              }
              this.emitSlidesClasses()
            },
            updateActiveIndex: function (e) {
              let t, i
              let r = this,
                n = r.rtlTranslate ? r.translate : -r.translate,
                {
                  snapGrid: s,
                  params: a,
                  activeIndex: l,
                  realIndex: o,
                  snapIndex: d,
                } = r,
                c = e,
                u = (e) => {
                  let t = e - r.virtual.slidesBefore
                  return (
                    t < 0 && (t = r.virtual.slides.length + t),
                    t >= r.virtual.slides.length &&
                      (t -= r.virtual.slides.length),
                    t
                  )
                }
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t
                    let { slidesGrid: i, params: r } = e,
                      n = e.rtlTranslate ? e.translate : -e.translate
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : n >= i[e] && n < i[e + 1] && (t = e + 1)
                        : n >= i[e] && (t = e)
                    return (
                      r.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    )
                  })(r)),
                s.indexOf(n) >= 0)
              )
                t = s.indexOf(n)
              else {
                let e = Math.min(a.slidesPerGroupSkip, c)
                t = e + Math.floor((c - e) / a.slidesPerGroup)
              }
              if ((t >= s.length && (t = s.length - 1), c === l)) {
                t !== d && ((r.snapIndex = t), r.emit('snapIndexChange')),
                  r.params.loop &&
                    r.virtual &&
                    r.params.virtual.enabled &&
                    (r.realIndex = u(c))
                return
              }
              ;(i =
                r.virtual && a.virtual.enabled && a.loop
                  ? u(c)
                  : r.slides[c]
                  ? parseInt(
                      r.slides[c].getAttribute('data-swiper-slide-index') || c,
                      10
                    )
                  : c),
                Object.assign(r, {
                  snapIndex: t,
                  realIndex: i,
                  previousIndex: l,
                  activeIndex: c,
                }),
                r.emit('activeIndexChange'),
                r.emit('snapIndexChange'),
                o !== i && r.emit('realIndexChange'),
                (r.initialized || r.params.runCallbacksOnInit) &&
                  r.emit('slideChange')
            },
            updateClickedSlide: function (e) {
              let t
              let i = this,
                r = i.params,
                n = e.closest(`.${r.slideClass}, swiper-slide`),
                s = !1
              if (n) {
                for (let e = 0; e < i.slides.length; e += 1)
                  if (i.slides[e] === n) {
                    ;(s = !0), (t = e)
                    break
                  }
              }
              if (n && s)
                (i.clickedSlide = n),
                  i.virtual && i.params.virtual.enabled
                    ? (i.clickedIndex = parseInt(
                        n.getAttribute('data-swiper-slide-index'),
                        10
                      ))
                    : (i.clickedIndex = t)
              else {
                ;(i.clickedSlide = void 0), (i.clickedIndex = void 0)
                return
              }
              r.slideToClickedSlide &&
                void 0 !== i.clickedIndex &&
                i.clickedIndex !== i.activeIndex &&
                i.slideToClickedSlide()
            },
          },
          translate: {
            getTranslate: function (e = this.isHorizontal() ? 'x' : 'y') {
              let {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: n,
              } = this
              if (t.virtualTranslate) return i ? -r : r
              if (t.cssMode) return r
              let s = (function (e, t = 'x') {
                let i, r, n
                let s = p(),
                  a = (function (e) {
                    let t
                    let i = p()
                    return (
                      i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                      !t && e.currentStyle && (t = e.currentStyle),
                      t || (t = e.style),
                      t
                    )
                  })(e, null)
                return (
                  s.WebKitCSSMatrix
                    ? ((r = a.transform || a.webkitTransform).split(',')
                        .length > 6 &&
                        (r = r
                          .split(', ')
                          .map((e) => e.replace(',', '.'))
                          .join(', ')),
                      (n = new s.WebKitCSSMatrix('none' === r ? '' : r)))
                    : (i = (n =
                        a.MozTransform ||
                        a.OTransform ||
                        a.MsTransform ||
                        a.msTransform ||
                        a.transform ||
                        a
                          .getPropertyValue('transform')
                          .replace('translate(', 'matrix(1, 0, 0, 1,'))
                        .toString()
                        .split(',')),
                  'x' === t &&
                    (r = s.WebKitCSSMatrix
                      ? n.m41
                      : 16 === i.length
                      ? parseFloat(i[12])
                      : parseFloat(i[4])),
                  'y' === t &&
                    (r = s.WebKitCSSMatrix
                      ? n.m42
                      : 16 === i.length
                      ? parseFloat(i[13])
                      : parseFloat(i[5])),
                  r || 0
                )
              })(n, e)
              return i && (s = -s), s || 0
            },
            setTranslate: function (e, t) {
              let i = this,
                { rtlTranslate: r, params: n, wrapperEl: s, progress: a } = i,
                l = 0,
                o = 0
              i.isHorizontal() ? (l = r ? -e : e) : (o = e),
                n.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
                n.cssMode
                  ? (s[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                      i.isHorizontal() ? -l : -o)
                  : n.virtualTranslate ||
                    (s.style.transform = `translate3d(${l}px, ${o}px, 0px)`),
                (i.previousTranslate = i.translate),
                (i.translate = i.isHorizontal() ? l : o)
              let d = i.maxTranslate() - i.minTranslate()
              ;(0 === d ? 0 : (e - i.minTranslate()) / d) !== a &&
                i.updateProgress(e),
                i.emit('setTranslate', i.translate, t)
            },
            minTranslate: function () {
              return -this.snapGrid[0]
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              i = !0,
              r = !0,
              n
            ) {
              let s
              let a = this,
                { params: l, wrapperEl: o } = a
              if (a.animating && l.preventInteractionOnTransition) return !1
              let d = a.minTranslate(),
                c = a.maxTranslate()
              if (
                ((s = r && e > d ? d : r && e < c ? c : e),
                a.updateProgress(s),
                l.cssMode)
              ) {
                let e = a.isHorizontal()
                if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -s
                else {
                  if (!a.support.smoothScroll)
                    return (
                      b({
                        swiper: a,
                        targetPosition: -s,
                        side: e ? 'left' : 'top',
                      }),
                      !0
                    )
                  o.scrollTo({ [e ? 'left' : 'top']: -s, behavior: 'smooth' })
                }
                return !0
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(s),
                    i &&
                      (a.emit('beforeTransitionStart', t, n),
                      a.emit('transitionEnd')))
                  : (a.setTransition(t),
                    a.setTranslate(s),
                    i &&
                      (a.emit('beforeTransitionStart', t, n),
                      a.emit('transitionStart')),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.wrapperEl.removeEventListener(
                              'transitionend',
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            i && a.emit('transitionEnd'))
                        }),
                      a.wrapperEl.addEventListener(
                        'transitionend',
                        a.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              )
            },
          },
          transition: {
            setTransition: function (e, t) {
              let i = this
              i.params.cssMode ||
                (i.wrapperEl.style.transitionDuration = `${e}ms`),
                i.emit('setTransition', e, t)
            },
            transitionStart: function (e = !0, t) {
              let { params: i } = this
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                _({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: 'Start',
                }))
            },
            transitionEnd: function (e = !0, t) {
              let i = this,
                { params: r } = i
              ;(i.animating = !1),
                r.cssMode ||
                  (i.setTransition(0),
                  _({ swiper: i, runCallbacks: e, direction: t, step: 'End' }))
            },
          },
          slide: {
            slideTo: function (e = 0, t = this.params.speed, i = !0, r, n) {
              let s
              'string' == typeof e && (e = parseInt(e, 10))
              let a = this,
                l = e
              l < 0 && (l = 0)
              let {
                params: o,
                snapGrid: d,
                slidesGrid: c,
                previousIndex: u,
                activeIndex: p,
                rtlTranslate: f,
                wrapperEl: h,
                enabled: m,
              } = a
              if (
                (a.animating && o.preventInteractionOnTransition) ||
                (!m && !r && !n)
              )
                return !1
              let v = Math.min(a.params.slidesPerGroupSkip, l),
                g = v + Math.floor((l - v) / a.params.slidesPerGroup)
              g >= d.length && (g = d.length - 1)
              let y = -d[g]
              if (o.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                  let t = -Math.floor(100 * y),
                    i = Math.floor(100 * c[e]),
                    r = Math.floor(100 * c[e + 1])
                  void 0 !== c[e + 1]
                    ? t >= i && t < r - (r - i) / 2
                      ? (l = e)
                      : t >= i && t < r && (l = e + 1)
                    : t >= i && (l = e)
                }
              if (
                a.initialized &&
                l !== p &&
                ((!a.allowSlideNext &&
                  y < a.translate &&
                  y < a.minTranslate()) ||
                  (!a.allowSlidePrev &&
                    y > a.translate &&
                    y > a.maxTranslate() &&
                    (p || 0) !== l))
              )
                return !1
              if (
                (l !== (u || 0) && i && a.emit('beforeSlideChangeStart'),
                a.updateProgress(y),
                (s = l > p ? 'next' : l < p ? 'prev' : 'reset'),
                (f && -y === a.translate) || (!f && y === a.translate))
              )
                return (
                  a.updateActiveIndex(l),
                  o.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  'slide' !== o.effect && a.setTranslate(y),
                  'reset' !== s &&
                    (a.transitionStart(i, s), a.transitionEnd(i, s)),
                  !1
                )
              if (o.cssMode) {
                let e = a.isHorizontal(),
                  i = f ? y : -y
                if (0 === t) {
                  let t = a.virtual && a.params.virtual.enabled
                  t &&
                    ((a.wrapperEl.style.scrollSnapType = 'none'),
                    (a._immediateVirtual = !0)),
                    t &&
                    !a._cssModeVirtualInitialSet &&
                    a.params.initialSlide > 0
                      ? ((a._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          h[e ? 'scrollLeft' : 'scrollTop'] = i
                        }))
                      : (h[e ? 'scrollLeft' : 'scrollTop'] = i),
                    t &&
                      requestAnimationFrame(() => {
                        ;(a.wrapperEl.style.scrollSnapType = ''),
                          (a._immediateVirtual = !1)
                      })
                } else {
                  if (!a.support.smoothScroll)
                    return (
                      b({
                        swiper: a,
                        targetPosition: i,
                        side: e ? 'left' : 'top',
                      }),
                      !0
                    )
                  h.scrollTo({ [e ? 'left' : 'top']: i, behavior: 'smooth' })
                }
                return !0
              }
              return (
                a.setTransition(t),
                a.setTranslate(y),
                a.updateActiveIndex(l),
                a.updateSlidesClasses(),
                a.emit('beforeTransitionStart', t, r),
                a.transitionStart(i, s),
                0 === t
                  ? a.transitionEnd(i, s)
                  : a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.wrapperEl.removeEventListener(
                            'transitionend',
                            a.onSlideToWrapperTransitionEnd
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(i, s))
                      }),
                    a.wrapperEl.addEventListener(
                      'transitionend',
                      a.onSlideToWrapperTransitionEnd
                    )),
                !0
              )
            },
            slideToLoop: function (e = 0, t = this.params.speed, i = !0, r) {
              if ('string' == typeof e) {
                let t = parseInt(e, 10)
                e = t
              }
              let n = e
              return (
                this.params.loop &&
                  (this.virtual && this.params.virtual.enabled
                    ? (n += this.virtual.slidesBefore)
                    : (n = this.getSlideIndex(
                        this.slides.filter(
                          (e) =>
                            1 * e.getAttribute('data-swiper-slide-index') === n
                        )[0]
                      ))),
                this.slideTo(n, t, i, r)
              )
            },
            slideNext: function (e = this.params.speed, t = !0, i) {
              let r = this,
                { enabled: n, params: s, animating: a } = r
              if (!n) return r
              let l = s.slidesPerGroup
              'auto' === s.slidesPerView &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                (l = Math.max(r.slidesPerViewDynamic('current', !0), 1))
              let o = r.activeIndex < s.slidesPerGroupSkip ? 1 : l,
                d = r.virtual && s.virtual.enabled
              if (s.loop) {
                if (a && !d && s.loopPreventsSliding) return !1
                r.loopFix({ direction: 'next' }),
                  (r._clientLeft = r.wrapperEl.clientLeft)
              }
              return s.rewind && r.isEnd
                ? r.slideTo(0, e, t, i)
                : r.slideTo(r.activeIndex + o, e, t, i)
            },
            slidePrev: function (e = this.params.speed, t = !0, i) {
              let r = this,
                {
                  params: n,
                  snapGrid: s,
                  slidesGrid: a,
                  rtlTranslate: l,
                  enabled: o,
                  animating: d,
                } = r
              if (!o) return r
              let c = r.virtual && n.virtual.enabled
              if (n.loop) {
                if (d && !c && n.loopPreventsSliding) return !1
                r.loopFix({ direction: 'prev' }),
                  (r._clientLeft = r.wrapperEl.clientLeft)
              }
              let u = l ? r.translate : -r.translate
              function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
              }
              let f = p(u),
                h = s.map((e) => p(e)),
                m = s[h.indexOf(f) - 1]
              if (void 0 === m && n.cssMode) {
                let e
                s.forEach((t, i) => {
                  f >= t && (e = i)
                }),
                  void 0 !== e && (m = s[e > 0 ? e - 1 : e])
              }
              let v = 0
              if (
                (void 0 !== m &&
                  ((v = a.indexOf(m)) < 0 && (v = r.activeIndex - 1),
                  'auto' === n.slidesPerView &&
                    1 === n.slidesPerGroup &&
                    n.slidesPerGroupAuto &&
                    (v = Math.max(
                      (v = v - r.slidesPerViewDynamic('previous', !0) + 1),
                      0
                    ))),
                n.rewind && r.isBeginning)
              ) {
                let n =
                  r.params.virtual && r.params.virtual.enabled && r.virtual
                    ? r.virtual.slides.length - 1
                    : r.slides.length - 1
                return r.slideTo(n, e, t, i)
              }
              return r.slideTo(v, e, t, i)
            },
            slideReset: function (e = this.params.speed, t = !0, i) {
              return this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function (
              e = this.params.speed,
              t = !0,
              i,
              r = 0.5
            ) {
              let n = this.activeIndex,
                s = Math.min(this.params.slidesPerGroupSkip, n),
                a = s + Math.floor((n - s) / this.params.slidesPerGroup),
                l = this.rtlTranslate ? this.translate : -this.translate
              if (l >= this.snapGrid[a]) {
                let e = this.snapGrid[a],
                  t = this.snapGrid[a + 1]
                l - e > (t - e) * r && (n += this.params.slidesPerGroup)
              } else {
                let e = this.snapGrid[a - 1],
                  t = this.snapGrid[a]
                l - e <= (t - e) * r && (n -= this.params.slidesPerGroup)
              }
              return (
                (n = Math.min(
                  (n = Math.max(n, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(n, e, t, i)
              )
            },
            slideToClickedSlide: function () {
              let e
              let t = this,
                { params: i, slidesEl: r } = t,
                n =
                  'auto' === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                s = t.clickedIndex,
                a = t.isElement ? 'swiper-slide' : `.${i.slideClass}`
              if (i.loop) {
                if (t.animating) return
                ;(e = parseInt(
                  t.clickedSlide.getAttribute('data-swiper-slide-index'),
                  10
                )),
                  i.centeredSlides
                    ? s < t.loopedSlides - n / 2 ||
                      s > t.slides.length - t.loopedSlides + n / 2
                      ? (t.loopFix(),
                        (s = t.getSlideIndex(
                          y(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        f(() => {
                          t.slideTo(s)
                        }))
                      : t.slideTo(s)
                    : s > t.slides.length - n
                    ? (t.loopFix(),
                      (s = t.getSlideIndex(
                        y(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      f(() => {
                        t.slideTo(s)
                      }))
                    : t.slideTo(s)
              } else t.slideTo(s)
            },
          },
          loop: {
            loopCreate: function (e) {
              let { params: t, slidesEl: i } = this
              if (!t.loop || (this.virtual && this.params.virtual.enabled))
                return
              let r = y(i, `.${t.slideClass}, swiper-slide`)
              r.forEach((e, t) => {
                e.setAttribute('data-swiper-slide-index', t)
              }),
                this.loopFix({
                  slideRealIndex: e,
                  direction: t.centeredSlides ? void 0 : 'next',
                })
            },
            loopFix: function ({
              slideRealIndex: e,
              slideTo: t = !0,
              direction: i,
              setTranslate: r,
              activeSlideIndex: n,
              byController: s,
              byMousewheel: a,
            } = {}) {
              let l = this
              if (!l.params.loop) return
              l.emit('beforeLoopFix')
              let {
                slides: o,
                allowSlidePrev: d,
                allowSlideNext: c,
                slidesEl: u,
                params: p,
              } = l
              if (
                ((l.allowSlidePrev = !0),
                (l.allowSlideNext = !0),
                l.virtual && p.virtual.enabled)
              ) {
                t &&
                  (p.centeredSlides || 0 !== l.snapIndex
                    ? p.centeredSlides && l.snapIndex < p.slidesPerView
                      ? l.slideTo(
                          l.virtual.slides.length + l.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : l.snapIndex === l.snapGrid.length - 1 &&
                        l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                    : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
                  (l.allowSlidePrev = d),
                  (l.allowSlideNext = c),
                  l.emit('loopFix')
                return
              }
              let f =
                  'auto' === p.slidesPerView
                    ? l.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(p.slidesPerView, 10)),
                h = p.loopedSlides || f
              h % p.slidesPerGroup != 0 &&
                (h += p.slidesPerGroup - (h % p.slidesPerGroup)),
                (l.loopedSlides = h)
              let m = [],
                v = [],
                g = l.activeIndex
              void 0 === n
                ? (n = l.getSlideIndex(
                    l.slides.filter((e) =>
                      e.classList.contains('swiper-slide-active')
                    )[0]
                  ))
                : (g = n)
              let b = 'next' === i || !i,
                y = 'prev' === i || !i,
                w = 0,
                S = 0
              if (n < h) {
                w = Math.max(h - n, p.slidesPerGroup)
                for (let e = 0; e < h - n; e += 1) {
                  let t = e - Math.floor(e / o.length) * o.length
                  m.push(o.length - t - 1)
                }
              } else if (n > l.slides.length - 2 * h) {
                S = Math.max(n - (l.slides.length - 2 * h), p.slidesPerGroup)
                for (let e = 0; e < S; e += 1) {
                  let t = e - Math.floor(e / o.length) * o.length
                  v.push(t)
                }
              }
              if (
                (y &&
                  m.forEach((e) => {
                    u.prepend(l.slides[e])
                  }),
                b &&
                  v.forEach((e) => {
                    u.append(l.slides[e])
                  }),
                l.recalcSlides(),
                p.watchSlidesProgress && l.updateSlidesOffset(),
                t)
              ) {
                if (m.length > 0 && y) {
                  if (void 0 === e) {
                    let e = l.slidesGrid[g],
                      t = l.slidesGrid[g + w],
                      i = t - e
                    a
                      ? l.setTranslate(l.translate - i)
                      : (l.slideTo(g + w, 0, !1, !0),
                        r &&
                          (l.touches[l.isHorizontal() ? 'startX' : 'startY'] +=
                            i))
                  } else r && l.slideToLoop(e, 0, !1, !0)
                } else if (v.length > 0 && b) {
                  if (void 0 === e) {
                    let e = l.slidesGrid[g],
                      t = l.slidesGrid[g - S],
                      i = t - e
                    a
                      ? l.setTranslate(l.translate - i)
                      : (l.slideTo(g - S, 0, !1, !0),
                        r &&
                          (l.touches[l.isHorizontal() ? 'startX' : 'startY'] +=
                            i))
                  } else l.slideToLoop(e, 0, !1, !0)
                }
              }
              if (
                ((l.allowSlidePrev = d),
                (l.allowSlideNext = c),
                l.controller && l.controller.control && !s)
              ) {
                let t = {
                  slideRealIndex: e,
                  slideTo: !1,
                  direction: i,
                  setTranslate: r,
                  activeSlideIndex: n,
                  byController: !0,
                }
                Array.isArray(l.controller.control)
                  ? l.controller.control.forEach((e) => {
                      e.params.loop && e.loopFix(t)
                    })
                  : l.controller.control instanceof l.constructor &&
                    l.controller.control.params.loop &&
                    l.controller.control.loopFix(t)
              }
              l.emit('loopFix')
            },
            loopDestroy: function () {
              let { slides: e, params: t, slidesEl: i } = this
              if (!t.loop || (this.virtual && this.params.virtual.enabled))
                return
              this.recalcSlides()
              let r = []
              e.forEach((e) => {
                let t =
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute('data-swiper-slide-index')
                    : e.swiperSlideIndex
                r[t] = e
              }),
                e.forEach((e) => {
                  e.removeAttribute('data-swiper-slide-index')
                }),
                r.forEach((e) => {
                  i.append(e)
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0)
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return
              let i =
                'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = 'move'),
                (i.style.cursor = e ? 'grabbing' : 'grab'),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1
                  })
            },
            unsetGrabCursor: function () {
              let e = this
              ;(e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  'container' === e.params.touchEventsTarget
                    ? 'el'
                    : 'wrapperEl'
                ].style.cursor = ''),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1
                  }))
            },
          },
          events: {
            attachEvents: function () {
              let e = this,
                t = c(),
                { params: i } = e
              ;(e.onTouchStart = P.bind(e)),
                (e.onTouchMove = O.bind(e)),
                (e.onTouchEnd = k.bind(e)),
                i.cssMode && (e.onScroll = j.bind(e)),
                (e.onClick = A.bind(e)),
                (e.onLoad = z.bind(e)),
                D || (t.addEventListener('touchstart', R), (D = !0)),
                N(e, 'on')
            },
            detachEvents: function () {
              N(this, 'off')
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: r, el: n } = e,
                s = r.breakpoints
              if (!s || (s && 0 === Object.keys(s).length)) return
              let a = e.getBreakpoint(s, e.params.breakpointsBase, e.el)
              if (!a || e.currentBreakpoint === a) return
              let l = a in s ? s[a] : void 0,
                o = l || e.originalParams,
                d = G(e, r),
                c = G(e, o),
                u = r.enabled
              d && !c
                ? (n.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (n.classList.add(`${r.containerModifierClass}grid`),
                  ((o.grid.fill && 'column' === o.grid.fill) ||
                    (!o.grid.fill && 'column' === r.grid.fill)) &&
                    n.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
                  let i = r[t] && r[t].enabled,
                    n = o[t] && o[t].enabled
                  i && !n && e[t].disable(), !i && n && e[t].enable()
                })
              let p = o.direction && o.direction !== r.direction,
                f = r.loop && (o.slidesPerView !== r.slidesPerView || p)
              p && i && e.changeDirection(), v(e.params, o)
              let h = e.params.enabled
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                u && !h ? e.disable() : !u && h && e.enable(),
                (e.currentBreakpoint = a),
                e.emit('_beforeBreakpoint', o),
                f && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
                e.emit('breakpoint', o)
            },
            getBreakpoint: function (e, t = 'window', i) {
              if (!e || ('container' === t && !i)) return
              let r = !1,
                n = p(),
                s = 'window' === t ? n.innerHeight : i.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ('string' == typeof e && 0 === e.indexOf('@')) {
                    let t = parseFloat(e.substr(1))
                    return { value: s * t, point: e }
                  }
                  return { value: e, point: e }
                })
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10))
              for (let e = 0; e < a.length; e += 1) {
                let { point: s, value: l } = a[e]
                'window' === t
                  ? n.matchMedia(`(min-width: ${l}px)`).matches && (r = s)
                  : l <= i.clientWidth && (r = s)
              }
              return r || 'max'
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: r } = i
              if (r) {
                let t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r
                e.isLocked = e.size > i
              } else e.isLocked = 1 === e.snapGrid.length
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: r, device: n } = this,
                s = (function (e, t) {
                  let i = []
                  return (
                    e.forEach((e) => {
                      'object' == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && i.push(t + r)
                          })
                        : 'string' == typeof e && i.push(t + e)
                    }),
                    i
                  )
                })(
                  [
                    'initialized',
                    t.direction,
                    { 'free-mode': this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      'grid-column':
                        t.grid && t.grid.rows > 1 && 'column' === t.grid.fill,
                    },
                    { android: n.android },
                    { ios: n.ios },
                    { 'css-mode': t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { 'watch-progress': t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                )
              e.push(...s), r.classList.add(...e), this.emitContainerClasses()
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this
              e.classList.remove(...t), this.emitContainerClasses()
            },
          },
        },
        F = {}
      class V {
        constructor(...e) {
          let t, i
          1 === e.length &&
          e[0].constructor &&
          'Object' === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (i = e[0])
            : ([t, i] = e),
            i || (i = {}),
            (i = v({}, i)),
            t && !i.el && (i.el = t)
          let r = c()
          if (
            i.el &&
            'string' == typeof i.el &&
            r.querySelectorAll(i.el).length > 1
          ) {
            let e = []
            return (
              r.querySelectorAll(i.el).forEach((t) => {
                let r = v({}, i, { el: t })
                e.push(new V(r))
              }),
              e
            )
          }
          let a = this
          ;(a.__swiper__ = !0),
            (a.support = M()),
            (a.device = (function (e = {}) {
              return (
                n ||
                  (n = (function ({ userAgent: e } = {}) {
                    let t = M(),
                      i = p(),
                      r = i.navigator.platform,
                      n = e || i.navigator.userAgent,
                      s = { ios: !1, android: !1 },
                      a = i.screen.width,
                      l = i.screen.height,
                      o = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                      d = n.match(/(iPad).*OS\s([\d_]+)/),
                      c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                      u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      f = 'MacIntel' === r
                    return (
                      !d &&
                        f &&
                        t.touch &&
                        [
                          '1024x1366',
                          '1366x1024',
                          '834x1194',
                          '1194x834',
                          '834x1112',
                          '1112x834',
                          '768x1024',
                          '1024x768',
                          '820x1180',
                          '1180x820',
                          '810x1080',
                          '1080x810',
                        ].indexOf(`${a}x${l}`) >= 0 &&
                        ((d = n.match(/(Version)\/([\d.]+)/)) ||
                          (d = [0, 1, '13_0_0']),
                        (f = !1)),
                      o &&
                        'Win32' !== r &&
                        ((s.os = 'android'), (s.android = !0)),
                      (d || u || c) && ((s.os = 'ios'), (s.ios = !0)),
                      s
                    )
                  })(e)),
                n
              )
            })({ userAgent: i.userAgent })),
            (a.browser =
              (s ||
                (s = (function () {
                  let e = p(),
                    t = !1
                  function i() {
                    let t = e.navigator.userAgent.toLowerCase()
                    return (
                      t.indexOf('safari') >= 0 &&
                      0 > t.indexOf('chrome') &&
                      0 > t.indexOf('android')
                    )
                  }
                  if (i()) {
                    let i = String(e.navigator.userAgent)
                    if (i.includes('Version/')) {
                      let [e, r] = i
                        .split('Version/')[1]
                        .split(' ')[0]
                        .split('.')
                        .map((e) => Number(e))
                      t = e < 16 || (16 === e && r < 2)
                    }
                  }
                  return {
                    isSafari: t || i(),
                    needPerspectiveFix: t,
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        e.navigator.userAgent
                      ),
                  }
                })()),
              s)),
            (a.eventsListeners = {}),
            (a.eventsAnyListeners = []),
            (a.modules = [...a.__modules__]),
            i.modules &&
              Array.isArray(i.modules) &&
              a.modules.push(...i.modules)
          let l = {}
          a.modules.forEach((e) => {
            var t
            e({
              params: i,
              swiper: a,
              extendParams:
                ((t = i),
                function (e = {}) {
                  let i = Object.keys(e)[0],
                    r = e[i]
                  if (
                    'object' != typeof r ||
                    null === r ||
                    (['navigation', 'pagination', 'scrollbar'].indexOf(i) >=
                      0 &&
                      !0 === t[i] &&
                      (t[i] = { auto: !0 }),
                    !(i in t && 'enabled' in r))
                  ) {
                    v(l, e)
                    return
                  }
                  !0 === t[i] && (t[i] = { enabled: !0 }),
                    'object' != typeof t[i] ||
                      'enabled' in t[i] ||
                      (t[i].enabled = !0),
                    t[i] || (t[i] = { enabled: !1 }),
                    v(l, e)
                }),
              on: a.on.bind(a),
              once: a.once.bind(a),
              off: a.off.bind(a),
              emit: a.emit.bind(a),
            })
          })
          let o = v({}, B, l)
          return (
            (a.params = v({}, o, F, i)),
            (a.originalParams = v({}, a.params)),
            (a.passedParams = v({}, i)),
            a.params &&
              a.params.on &&
              Object.keys(a.params.on).forEach((e) => {
                a.on(e, a.params.on[e])
              }),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            Object.assign(a, {
              enabled: a.params.enabled,
              el: t,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === a.params.direction,
              isVertical: () => 'vertical' === a.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: a.params.allowSlideNext,
              allowSlidePrev: a.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: h(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: [],
              },
              allowClick: !0,
              allowTouchMove: a.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            a.emit('_swiper'),
            a.params.init && a.init(),
            a
          )
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            r = y(t, `.${i.slideClass}, swiper-slide`),
            n = x(r[0])
          return x(e) - n
        }
        recalcSlides() {
          let e = this,
            { slidesEl: t, params: i } = e
          e.slides = y(t, `.${i.slideClass}, swiper-slide`)
        }
        enable() {
          let e = this
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit('enable'))
        }
        disable() {
          let e = this
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit('disable'))
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1)
          let i = this.minTranslate(),
            r = this.maxTranslate(),
            n = (r - i) * e + i
          this.translateTo(n, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        }
        emitContainerClasses() {
          let e = this
          if (!e.params._emitClasses || !e.el) return
          let t = e.el.className
            .split(' ')
            .filter(
              (t) =>
                0 === t.indexOf('swiper') ||
                0 === t.indexOf(e.params.containerModifierClass)
            )
          e.emit('_containerClasses', t.join(' '))
        }
        getSlideClasses(e) {
          let t = this
          return t.destroyed
            ? ''
            : e.className
                .split(' ')
                .filter(
                  (e) =>
                    0 === e.indexOf('swiper-slide') ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(' ')
        }
        emitSlidesClasses() {
          let e = this
          if (!e.params._emitClasses || !e.el) return
          let t = []
          e.slides.forEach((i) => {
            let r = e.getSlideClasses(i)
            t.push({ slideEl: i, classNames: r }), e.emit('_slideClass', i, r)
          }),
            e.emit('_slideClasses', t)
        }
        slidesPerViewDynamic(e = 'current', t = !1) {
          let {
              params: i,
              slides: r,
              slidesGrid: n,
              slidesSizesGrid: s,
              size: a,
              activeIndex: l,
            } = this,
            o = 1
          if (i.centeredSlides) {
            let e,
              t = r[l].swiperSlideSize
            for (let i = l + 1; i < r.length; i += 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > a && (e = !0))
            for (let i = l - 1; i >= 0; i -= 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > a && (e = !0))
          } else if ('current' === e)
            for (let e = l + 1; e < r.length; e += 1) {
              let i = t ? n[e] + s[e] - n[l] < a : n[e] - n[l] < a
              i && (o += 1)
            }
          else
            for (let e = l - 1; e >= 0; e -= 1) {
              let t = n[l] - n[e] < a
              t && (o += 1)
            }
          return o
        }
        update() {
          let e = this
          if (!e || e.destroyed) return
          let { snapGrid: t, params: i } = e
          function r() {
            let t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          i.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && I(e, t)
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (r(), e.params.autoHeight && e.updateAutoHeight())
              : (('auto' === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit('update')
        }
        changeDirection(e, t = !0) {
          let i = this,
            r = i.params.direction
          return (
            e || (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
            e === r ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
              i.el.classList.add(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.forEach((t) => {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '')
              }),
              i.emit('changeDirection'),
              t && i.update()),
            i
          )
        }
        changeLanguageDirection(e) {
          let t = this
          ;(!t.rtl || 'rtl' !== e) &&
            (t.rtl || 'ltr' !== e) &&
            ((t.rtl = 'rtl' === e),
            (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = 'rtl'))
              : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = 'ltr')),
            t.update())
        }
        mount(e) {
          let t = this
          if (t.mounted) return !0
          let i = e || t.params.el
          if (('string' == typeof i && (i = document.querySelector(i)), !i))
            return !1
          ;(i.swiper = t), i.shadowEl && (t.isElement = !0)
          let r = () =>
              `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`,
            n = (() => {
              if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                let e = i.shadowRoot.querySelector(r())
                return e
              }
              return y(i, r())[0]
            })()
          return (
            !n &&
              t.params.createElements &&
              ((n = w('div', t.params.wrapperClass)),
              i.append(n),
              y(i, `.${t.params.slideClass}`).forEach((e) => {
                n.append(e)
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: n,
              slidesEl: t.isElement ? i : n,
              mounted: !0,
              rtl: 'rtl' === i.dir.toLowerCase() || 'rtl' === S(i, 'direction'),
              rtlTranslate:
                'horizontal' === t.params.direction &&
                ('rtl' === i.dir.toLowerCase() || 'rtl' === S(i, 'direction')),
              wrongRTL: '-webkit-box' === S(n, 'display'),
            }),
            !0
          )
        }
        init(e) {
          let t = this
          if (t.initialized) return t
          let i = t.mount(e)
          return (
            !1 === i ||
              (t.emit('beforeInit'),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.loop && t.virtual && t.params.virtual.enabled
                ? t.slideTo(
                    t.params.initialSlide + t.virtual.slidesBefore,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.params.loop && t.loopCreate(),
              t.attachEvents(),
              [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                e.complete
                  ? I(t, e)
                  : e.addEventListener('load', (e) => {
                      I(t, e.target)
                    })
              }),
              (t.initialized = !0),
              t.emit('init'),
              t.emit('afterInit')),
            t
          )
        }
        destroy(e = !0, t = !0) {
          let i = this,
            { params: r, el: n, wrapperEl: s, slides: a } = i
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                n.removeAttribute('style'),
                s.removeAttribute('style'),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute('style'),
                      e.removeAttribute('data-swiper-slide-index')
                  })),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e)
              }),
              !1 !== e &&
                ((i.el.swiper = null),
                (function (e) {
                  let t = e
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null
                    } catch (e) {}
                    try {
                      delete t[e]
                    } catch (e) {}
                  })
                })(i)),
              (i.destroyed = !0)),
            null
          )
        }
        static extendDefaults(e) {
          v(F, e)
        }
        static get extendedDefaults() {
          return F
        }
        static get defaults() {
          return B
        }
        static installModule(e) {
          V.prototype.__modules__ || (V.prototype.__modules__ = [])
          let t = V.prototype.__modules__
          'function' == typeof e && 0 > t.indexOf(e) && t.push(e)
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => V.installModule(e)), V)
            : (V.installModule(e), V)
        }
      }
      Object.keys($).forEach((e) => {
        Object.keys($[e]).forEach((t) => {
          V.prototype[t] = $[e][t]
        })
      }),
        V.use([
          function ({ swiper: e, on: t, emit: i }) {
            let r = p(),
              n = null,
              s = null,
              a = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (i('beforeResize'), i('resize'))
              },
              l = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (n = new ResizeObserver((t) => {
                    s = r.requestAnimationFrame(() => {
                      let { width: i, height: r } = e,
                        n = i,
                        s = r
                      t.forEach(
                        ({ contentBoxSize: t, contentRect: i, target: r }) => {
                          ;(r && r !== e.el) ||
                            ((n = i ? i.width : (t[0] || t).inlineSize),
                            (s = i ? i.height : (t[0] || t).blockSize))
                        }
                      ),
                        (n !== i || s !== r) && a()
                    })
                  })).observe(e.el)
              },
              o = () => {
                s && r.cancelAnimationFrame(s),
                  n && n.unobserve && e.el && (n.unobserve(e.el), (n = null))
              },
              d = () => {
                e && !e.destroyed && e.initialized && i('orientationchange')
              }
            t('init', () => {
              if (e.params.resizeObserver && void 0 !== r.ResizeObserver) {
                l()
                return
              }
              r.addEventListener('resize', a),
                r.addEventListener('orientationchange', d)
            }),
              t('destroy', () => {
                o(),
                  r.removeEventListener('resize', a),
                  r.removeEventListener('orientationchange', d)
              })
          },
          function ({ swiper: e, extendParams: t, on: i, emit: r }) {
            let n = [],
              s = p(),
              a = (t, i = {}) => {
                let a = s.MutationObserver || s.WebkitMutationObserver,
                  l = new a((t) => {
                    if (e.__preventObserver__) return
                    if (1 === t.length) {
                      r('observerUpdate', t[0])
                      return
                    }
                    let i = function () {
                      r('observerUpdate', t[0])
                    }
                    s.requestAnimationFrame
                      ? s.requestAnimationFrame(i)
                      : s.setTimeout(i, 0)
                  })
                l.observe(t, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList: void 0 === i.childList || i.childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(l)
              },
              l = () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    let t = E(e.el)
                    for (let e = 0; e < t.length; e += 1) a(t[e])
                  }
                  a(e.el, { childList: e.params.observeSlideChildren }),
                    a(e.wrapperEl, { attributes: !1 })
                }
              },
              o = () => {
                n.forEach((e) => {
                  e.disconnect()
                }),
                  n.splice(0, n.length)
              }
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i('init', l),
              i('destroy', o)
          },
        ])
      var H = V
      function W(e, t, i, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((n) => {
              if (!i[n] && !0 === i.auto) {
                let s = y(e.el, `.${r[n]}`)[0]
                s || (((s = w('div', r[n])).className = r[n]), e.el.append(s)),
                  (i[n] = s),
                  (t[n] = s)
              }
            }),
          i
        )
      }
      function q({ swiper: e, extendParams: t, on: i, emit: r }) {
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled',
          },
        }),
          (e.navigation = { nextEl: null, prevEl: null })
        let n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e)
        function s(t) {
          let i
          return t &&
            'string' == typeof t &&
            e.isElement &&
            (i = e.el.shadowRoot.querySelector(t))
            ? i
            : (t &&
                ('string' == typeof t &&
                  (i = [...document.querySelectorAll(t)]),
                e.params.uniqueNavElements &&
                  'string' == typeof t &&
                  i.length > 1 &&
                  1 === e.el.querySelectorAll(t).length &&
                  (i = e.el.querySelector(t))),
              t && !i)
            ? t
            : i
        }
        function a(t, i) {
          let r = e.params.navigation
          ;(t = n(t)).forEach((t) => {
            t &&
              (t.classList[i ? 'add' : 'remove'](...r.disabledClass.split(' ')),
              'BUTTON' === t.tagName && (t.disabled = i),
              e.params.watchOverflow &&
                e.enabled &&
                t.classList[e.isLocked ? 'add' : 'remove'](r.lockClass))
          })
        }
        function l() {
          let { nextEl: t, prevEl: i } = e.navigation
          if (e.params.loop) {
            a(i, !1), a(t, !1)
            return
          }
          a(i, e.isBeginning && !e.params.rewind),
            a(t, e.isEnd && !e.params.rewind)
        }
        function o(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              (e.slidePrev(), r('navigationPrev'))
        }
        function d(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) &&
              (e.slideNext(), r('navigationNext'))
        }
        function c() {
          let t = e.params.navigation
          if (
            ((e.params.navigation = W(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
            )),
            !(t.nextEl || t.prevEl))
          )
            return
          let i = s(t.nextEl),
            r = s(t.prevEl)
          Object.assign(e.navigation, { nextEl: i, prevEl: r }),
            (i = n(i)),
            (r = n(r))
          let a = (i, r) => {
            i && i.addEventListener('click', 'next' === r ? d : o),
              !e.enabled && i && i.classList.add(...t.lockClass.split(' '))
          }
          i.forEach((e) => a(e, 'next')), r.forEach((e) => a(e, 'prev'))
        }
        function u() {
          let { nextEl: t, prevEl: i } = e.navigation
          ;(t = n(t)), (i = n(i))
          let r = (t, i) => {
            t.removeEventListener('click', 'next' === i ? d : o),
              t.classList.remove(
                ...e.params.navigation.disabledClass.split(' ')
              )
          }
          t.forEach((e) => r(e, 'next')), i.forEach((e) => r(e, 'prev'))
        }
        i('init', () => {
          !1 === e.params.navigation.enabled ? f() : (c(), l())
        }),
          i('toEdge fromEdge lock unlock', () => {
            l()
          }),
          i('destroy', () => {
            u()
          }),
          i('enable disable', () => {
            let { nextEl: t, prevEl: i } = e.navigation
            ;[...(t = n(t)), ...(i = n(i))]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList[e.enabled ? 'remove' : 'add'](
                  e.params.navigation.lockClass
                )
              )
          }),
          i('click', (t, i) => {
            let { nextEl: s, prevEl: a } = e.navigation
            ;(s = n(s)), (a = n(a))
            let l = i.target
            if (
              e.params.navigation.hideOnClick &&
              !a.includes(l) &&
              !s.includes(l)
            ) {
              let t
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === l || e.pagination.el.contains(l))
              )
                return
              s.length
                ? (t = s[0].classList.contains(e.params.navigation.hiddenClass))
                : a.length &&
                  (t = a[0].classList.contains(
                    e.params.navigation.hiddenClass
                  )),
                !0 === t ? r('navigationShow') : r('navigationHide'),
                [...s, ...a]
                  .filter((e) => !!e)
                  .forEach((t) =>
                    t.classList.toggle(e.params.navigation.hiddenClass)
                  )
            }
          })
        let p = () => {
            e.el.classList.remove(
              ...e.params.navigation.navigationDisabledClass.split(' ')
            ),
              c(),
              l()
          },
          f = () => {
            e.el.classList.add(
              ...e.params.navigation.navigationDisabledClass.split(' ')
            ),
              u()
          }
        Object.assign(e.navigation, {
          enable: p,
          disable: f,
          update: l,
          init: c,
          destroy: u,
        })
      }
      function Y(e = '') {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, '\\$1')
          .replace(/ /g, '.')}`
      }
      function X({ swiper: e, extendParams: t, on: i, emit: r }) {
        let n
        let s = 'swiper-pagination'
        t({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
            paginationDisabledClass: `${s}-disabled`,
          },
        }),
          (e.pagination = { el: null, bullets: [] })
        let a = 0,
          l = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e)
        function o() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
          )
        }
        function d(t, i) {
          let { bulletActiveClass: r } = e.params.pagination
          t &&
            (t = t[`${'prev' === i ? 'previous' : 'next'}ElementSibling`]) &&
            (t.classList.add(`${r}-${i}`),
            (t = t[`${'prev' === i ? 'previous' : 'next'}ElementSibling`]) &&
              t.classList.add(`${r}-${i}-${i}`))
        }
        function c(t) {
          let i = t.target.closest(Y(e.params.pagination.bulletClass))
          if (!i) return
          t.preventDefault()
          let r = x(i) * e.params.slidesPerGroup
          if (e.params.loop) {
            if (e.realIndex === r) return
            ;(r < e.loopedSlides || r > e.slides.length - e.loopedSlides) &&
              e.loopFix({
                direction: r < e.loopedSlides ? 'prev' : 'next',
                activeSlideIndex: r,
                slideTo: !1,
              }),
              e.slideToLoop(r)
          } else e.slideTo(r)
        }
        function u() {
          let t
          let i = e.rtl,
            s = e.params.pagination
          if (o()) return
          let c = e.pagination.el
          c = l(c)
          let u =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            p = e.params.loop
              ? Math.ceil(u / e.params.slidesPerGroup)
              : e.snapGrid.length
          if (
            ((t = e.params.loop
              ? e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex
              : void 0 !== e.snapIndex
              ? e.snapIndex
              : e.activeIndex || 0),
            'bullets' === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            let r, l, o
            let u = e.pagination.bullets
            if (
              (s.dynamicBullets &&
                ((n = C(u[0], e.isHorizontal() ? 'width' : 'height', !0)),
                c.forEach((t) => {
                  t.style[e.isHorizontal() ? 'width' : 'height'] = `${
                    n * (s.dynamicMainBullets + 4)
                  }px`
                }),
                s.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((a += t - (e.previousIndex || 0)) > s.dynamicMainBullets - 1
                    ? (a = s.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (o =
                  ((l =
                    (r = Math.max(t - a, 0)) +
                    (Math.min(u.length, s.dynamicMainBullets) - 1)) +
                    r) /
                  2)),
              u.forEach((e) => {
                e.classList.remove(
                  ...[
                    '',
                    '-next',
                    '-next-next',
                    '-prev',
                    '-prev-prev',
                    '-main',
                  ].map((e) => `${s.bulletActiveClass}${e}`)
                )
              }),
              c.length > 1)
            )
              u.forEach((e) => {
                let i = x(e)
                i === t && e.classList.add(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (i >= r &&
                      i <= l &&
                      e.classList.add(`${s.bulletActiveClass}-main`),
                    i === r && d(e, 'prev'),
                    i === l && d(e, 'next'))
              })
            else {
              let e = u[t]
              if (
                (e && e.classList.add(s.bulletActiveClass), s.dynamicBullets)
              ) {
                let e = u[r],
                  t = u[l]
                for (let e = r; e <= l; e += 1)
                  u[e] && u[e].classList.add(`${s.bulletActiveClass}-main`)
                d(e, 'prev'), d(t, 'next')
              }
            }
            if (s.dynamicBullets) {
              let t = Math.min(u.length, s.dynamicMainBullets + 4),
                r = (n * t - n) / 2 - o * n,
                a = i ? 'right' : 'left'
              u.forEach((t) => {
                t.style[e.isHorizontal() ? a : 'top'] = `${r}px`
              })
            }
          }
          c.forEach((i, n) => {
            if (
              ('fraction' === s.type &&
                (i.querySelectorAll(Y(s.currentClass)).forEach((e) => {
                  e.textContent = s.formatFractionCurrent(t + 1)
                }),
                i.querySelectorAll(Y(s.totalClass)).forEach((e) => {
                  e.textContent = s.formatFractionTotal(p)
                })),
              'progressbar' === s.type)
            ) {
              let r
              r = s.progressbarOpposite
                ? e.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : e.isHorizontal()
                ? 'horizontal'
                : 'vertical'
              let n = (t + 1) / p,
                a = 1,
                l = 1
              'horizontal' === r ? (a = n) : (l = n),
                i.querySelectorAll(Y(s.progressbarFillClass)).forEach((t) => {
                  ;(t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${l})`),
                    (t.style.transitionDuration = `${e.params.speed}ms`)
                })
            }
            'custom' === s.type && s.renderCustom
              ? ((i.innerHTML = s.renderCustom(e, t + 1, p)),
                0 === n && r('paginationRender', i))
              : (0 === n && r('paginationRender', i), r('paginationUpdate', i)),
              e.params.watchOverflow &&
                e.enabled &&
                i.classList[e.isLocked ? 'add' : 'remove'](s.lockClass)
          })
        }
        function p() {
          let t = e.params.pagination
          if (o()) return
          let i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            n = e.pagination.el
          n = l(n)
          let s = ''
          if ('bullets' === t.type) {
            let r = e.params.loop
              ? Math.ceil(i / e.params.slidesPerGroup)
              : e.snapGrid.length
            e.params.freeMode && e.params.freeMode.enabled && r > i && (r = i)
            for (let i = 0; i < r; i += 1)
              t.renderBullet
                ? (s += t.renderBullet.call(e, i, t.bulletClass))
                : (s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`)
          }
          'fraction' === t.type &&
            (s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            'progressbar' === t.type &&
              (s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
            n.forEach((i) => {
              'custom' !== t.type && (i.innerHTML = s || ''),
                'bullets' === t.type &&
                  (e.pagination.bullets = [
                    ...i.querySelectorAll(Y(t.bulletClass)),
                  ])
            }),
            'custom' !== t.type && r('paginationRender', n[0])
        }
        function f() {
          let t
          e.params.pagination = W(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: 'swiper-pagination' }
          )
          let i = e.params.pagination
          i.el &&
            ('string' == typeof i.el &&
              e.isElement &&
              (t = e.el.shadowRoot.querySelector(i.el)),
            t ||
              'string' != typeof i.el ||
              (t = [...document.querySelectorAll(i.el)]),
            t || (t = i.el),
            t &&
              0 !== t.length &&
              (e.params.uniqueNavElements &&
                'string' == typeof i.el &&
                Array.isArray(t) &&
                t.length > 1 &&
                (t = [...e.el.querySelectorAll(i.el)]).length > 1 &&
                (t = t.filter((t) => E(t, '.swiper')[0] === e.el)[0]),
              Array.isArray(t) && 1 === t.length && (t = t[0]),
              Object.assign(e.pagination, { el: t }),
              (t = l(t)).forEach((t) => {
                'bullets' === i.type &&
                  i.clickable &&
                  t.classList.add(i.clickableClass),
                  t.classList.add(i.modifierClass + i.type),
                  t.classList.add(
                    e.isHorizontal() ? i.horizontalClass : i.verticalClass
                  ),
                  'bullets' === i.type &&
                    i.dynamicBullets &&
                    (t.classList.add(`${i.modifierClass}${i.type}-dynamic`),
                    (a = 0),
                    i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)),
                  'progressbar' === i.type &&
                    i.progressbarOpposite &&
                    t.classList.add(i.progressbarOppositeClass),
                  i.clickable && t.addEventListener('click', c),
                  e.enabled || t.classList.add(i.lockClass)
              })))
        }
        function h() {
          let t = e.params.pagination
          if (o()) return
          let i = e.pagination.el
          i &&
            (i = l(i)).forEach((i) => {
              i.classList.remove(t.hiddenClass),
                i.classList.remove(t.modifierClass + t.type),
                i.classList.remove(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                t.clickable && i.removeEventListener('click', c)
            }),
            e.pagination.bullets &&
              e.pagination.bullets.forEach((e) =>
                e.classList.remove(t.bulletActiveClass)
              )
        }
        i('init', () => {
          !1 === e.params.pagination.enabled ? v() : (f(), p(), u())
        }),
          i('activeIndexChange', () => {
            void 0 === e.snapIndex && u()
          }),
          i('snapIndexChange', () => {
            u()
          }),
          i('snapGridLengthChange', () => {
            p(), u()
          }),
          i('destroy', () => {
            h()
          }),
          i('enable disable', () => {
            let { el: t } = e.pagination
            t &&
              (t = l(t)).forEach((t) =>
                t.classList[e.enabled ? 'remove' : 'add'](
                  e.params.pagination.lockClass
                )
              )
          }),
          i('lock unlock', () => {
            u()
          }),
          i('click', (t, i) => {
            let n = i.target,
              { el: s } = e.pagination
            if (
              (Array.isArray(s) || (s = [s].filter((e) => !!e)),
              e.params.pagination.el &&
                e.params.pagination.hideOnClick &&
                s &&
                s.length > 0 &&
                !n.classList.contains(e.params.pagination.bulletClass))
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                  (e.navigation.prevEl && n === e.navigation.prevEl))
              )
                return
              let t = s[0].classList.contains(e.params.pagination.hiddenClass)
              !0 === t ? r('paginationShow') : r('paginationHide'),
                s.forEach((t) =>
                  t.classList.toggle(e.params.pagination.hiddenClass)
                )
            }
          })
        let m = () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass)
            let { el: t } = e.pagination
            t &&
              (t = l(t)).forEach((t) =>
                t.classList.remove(e.params.pagination.paginationDisabledClass)
              ),
              f(),
              p(),
              u()
          },
          v = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass)
            let { el: t } = e.pagination
            t &&
              (t = l(t)).forEach((t) =>
                t.classList.add(e.params.pagination.paginationDisabledClass)
              ),
              h()
          }
        Object.assign(e.pagination, {
          enable: m,
          disable: v,
          render: p,
          update: u,
          init: f,
          destroy: h,
        })
      }
      function U({ swiper: e, extendParams: t, emit: i, once: r }) {
        t({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(e, {
            freeMode: {
              onTouchStart: function () {
                let t = e.getTranslate()
                e.setTranslate(t),
                  e.setTransition(0),
                  (e.touchEventsData.velocities.length = 0),
                  e.freeMode.onTouchEnd({
                    currentPos: e.rtl ? e.translate : -e.translate,
                  })
              },
              onTouchMove: function () {
                let { touchEventsData: t, touches: i } = e
                0 === t.velocities.length &&
                  t.velocities.push({
                    position: i[e.isHorizontal() ? 'startX' : 'startY'],
                    time: t.touchStartTime,
                  }),
                  t.velocities.push({
                    position: i[e.isHorizontal() ? 'currentX' : 'currentY'],
                    time: h(),
                  })
              },
              onTouchEnd: function ({ currentPos: t }) {
                let {
                    params: n,
                    wrapperEl: s,
                    rtlTranslate: a,
                    snapGrid: l,
                    touchEventsData: o,
                  } = e,
                  d = h(),
                  c = d - o.touchStartTime
                if (t < -e.minTranslate()) {
                  e.slideTo(e.activeIndex)
                  return
                }
                if (t > -e.maxTranslate()) {
                  e.slides.length < l.length
                    ? e.slideTo(l.length - 1)
                    : e.slideTo(e.slides.length - 1)
                  return
                }
                if (n.freeMode.momentum) {
                  let t, d
                  if (o.velocities.length > 1) {
                    let t = o.velocities.pop(),
                      i = o.velocities.pop(),
                      r = t.position - i.position,
                      s = t.time - i.time
                    ;(e.velocity = r / s),
                      (e.velocity /= 2),
                      Math.abs(e.velocity) < n.freeMode.minimumVelocity &&
                        (e.velocity = 0),
                      (s > 150 || h() - t.time > 300) && (e.velocity = 0)
                  } else e.velocity = 0
                  ;(e.velocity *= n.freeMode.momentumVelocityRatio),
                    (o.velocities.length = 0)
                  let c = 1e3 * n.freeMode.momentumRatio,
                    u = e.velocity * c,
                    p = e.translate + u
                  a && (p = -p)
                  let f = !1,
                    m =
                      20 * Math.abs(e.velocity) * n.freeMode.momentumBounceRatio
                  if (p < e.maxTranslate())
                    n.freeMode.momentumBounce
                      ? (p + e.maxTranslate() < -m &&
                          (p = e.maxTranslate() - m),
                        (t = e.maxTranslate()),
                        (f = !0),
                        (o.allowMomentumBounce = !0))
                      : (p = e.maxTranslate()),
                      n.loop && n.centeredSlides && (d = !0)
                  else if (p > e.minTranslate())
                    n.freeMode.momentumBounce
                      ? (p - e.minTranslate() > m && (p = e.minTranslate() + m),
                        (t = e.minTranslate()),
                        (f = !0),
                        (o.allowMomentumBounce = !0))
                      : (p = e.minTranslate()),
                      n.loop && n.centeredSlides && (d = !0)
                  else if (n.freeMode.sticky) {
                    let t
                    for (let e = 0; e < l.length; e += 1)
                      if (l[e] > -p) {
                        t = e
                        break
                      }
                    p = -(p =
                      Math.abs(l[t] - p) < Math.abs(l[t - 1] - p) ||
                      'next' === e.swipeDirection
                        ? l[t]
                        : l[t - 1])
                  }
                  if (
                    (d &&
                      r('transitionEnd', () => {
                        e.loopFix()
                      }),
                    0 !== e.velocity)
                  ) {
                    if (
                      ((c = a
                        ? Math.abs((-p - e.translate) / e.velocity)
                        : Math.abs((p - e.translate) / e.velocity)),
                      n.freeMode.sticky)
                    ) {
                      let t = Math.abs((a ? -p : p) - e.translate),
                        i = e.slidesSizesGrid[e.activeIndex]
                      c =
                        t < i
                          ? n.speed
                          : t < 2 * i
                          ? 1.5 * n.speed
                          : 2.5 * n.speed
                    }
                  } else if (n.freeMode.sticky) {
                    e.slideToClosest()
                    return
                  }
                  n.freeMode.momentumBounce && f
                    ? (e.updateProgress(t),
                      e.setTransition(c),
                      e.setTranslate(p),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      T(s, () => {
                        e &&
                          !e.destroyed &&
                          o.allowMomentumBounce &&
                          (i('momentumBounce'),
                          e.setTransition(n.speed),
                          setTimeout(() => {
                            e.setTranslate(t),
                              T(s, () => {
                                e && !e.destroyed && e.transitionEnd()
                              })
                          }, 0))
                      }))
                    : e.velocity
                    ? (i('_freeModeNoMomentumRelease'),
                      e.updateProgress(p),
                      e.setTransition(c),
                      e.setTranslate(p),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        T(s, () => {
                          e && !e.destroyed && e.transitionEnd()
                        })))
                    : e.updateProgress(p),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                } else if (n.freeMode.sticky) {
                  e.slideToClosest()
                  return
                } else n.freeMode && i('_freeModeNoMomentumRelease')
                ;(!n.freeMode.momentum || c >= n.longSwipesMs) &&
                  (e.updateProgress(),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses())
              },
            },
          })
      }
    },
  },
])
