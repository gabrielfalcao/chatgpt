(function (sttc) {
  var window = this;
  if (window.googletag && googletag.evalScripts) {
    googletag.evalScripts();
  }
  if (window.googletag && googletag._loaded_) return;
  var q,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    da = ca(this),
    ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
    u = {},
    fa = {},
    w = function (a, b, c) {
      if (!c || a != null) {
        c = fa[b];
        if (c == null) return a[b];
        c = a[c];
        return c !== void 0 ? c : a[b];
      }
    },
    x = function (a, b, c) {
      if (b)
        a: {
          var d = a.split(".");
          a = d.length === 1;
          var e = d[0],
            f;
          !a && e in u ? (f = u) : (f = da);
          for (e = 0; e < d.length - 1; e++) {
            var g = d[e];
            if (!(g in f)) break a;
            f = f[g];
          }
          d = d[d.length - 1];
          c = ea && c === "es6" ? f[d] : null;
          b = b(c);
          b != null &&
            (a
              ? ba(u, d, { configurable: !0, writable: !0, value: b })
              : b !== c &&
                (fa[d] === void 0 &&
                  ((a = (Math.random() * 1e9) >>> 0),
                  (fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d)),
                ba(f, fa[d], { configurable: !0, writable: !0, value: b })));
        }
    };
  x(
    "Symbol",
    function (a) {
      if (a) return a;
      var b = function (f, g) {
        this.g = f;
        ba(this, "description", { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.g;
      };
      var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
        d = 0,
        e = function (f) {
          if (this instanceof e)
            throw new TypeError("Symbol is not a constructor");
          return new b(c + (f || "") + "_" + d++, f);
        };
      return e;
    },
    "es6",
  );
  x(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = (0, u.Symbol)("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " ",
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = da[b[c]];
        typeof d === "function" &&
          typeof d.prototype[a] != "function" &&
          ba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ha(aa(this));
            },
          });
      }
      return a;
    },
    "es6",
  );
  var ha = function (a) {
      a = { next: a };
      a[w(u.Symbol, "iterator")] = function () {
        return this;
      };
      return a;
    },
    ia =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ja;
  if (ea && typeof Object.setPrototypeOf == "function")
    ja = Object.setPrototypeOf;
  else {
    var ka;
    a: {
      var la = { a: !0 },
        ma = {};
      try {
        ma.__proto__ = la;
        ka = ma.a;
        break a;
      } catch (a) {}
      ka = !1;
    }
    ja = ka
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var na = ja,
    y = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (na) na(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Lb = b.prototype;
    },
    A = function (a) {
      var b =
        typeof u.Symbol != "undefined" &&
        w(u.Symbol, "iterator") &&
        a[w(u.Symbol, "iterator")];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    oa = function (a) {
      if (!(a instanceof Array)) {
        a = A(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    qa = function (a) {
      return pa(a, a);
    },
    pa = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    ra = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    sa =
      ea && typeof w(Object, "assign") == "function"
        ? w(Object, "assign")
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) ra(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  x(
    "Object.assign",
    function (a) {
      return a || sa;
    },
    "es6",
  );
  var ua = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  };
  x(
    "globalThis",
    function (a) {
      return a || da;
    },
    "es_2020",
  );
  x(
    "Array.prototype.find",
    function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    },
    "es6",
  );
  x(
    "WeakMap",
    function (a) {
      function b() {}
      function c(g) {
        var h = typeof g;
        return (h === "object" && g !== null) || h === "function";
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              l = new a([
                [g, 2],
                [h, 3],
              ]);
            if (l.get(g) != 2 || l.get(h) != 3) return !1;
            l.delete(g);
            l.set(h, 4);
            return !l.has(g) && l.get(h) == 4;
          } catch (k) {
            return !1;
          }
        })()
      )
        return a;
      var d = "$jscomp_hidden_" + Math.random(),
        e = 0,
        f = function (g) {
          this.g = (e += Math.random() + 1).toString();
          if (g) {
            g = A(g);
            for (var h; !(h = g.next()).done; )
              (h = h.value), this.set(h[0], h[1]);
          }
        };
      f.prototype.set = function (g, h) {
        if (!c(g)) throw Error("Invalid WeakMap key");
        if (!ra(g, d)) {
          var l = new b();
          ba(g, d, { value: l });
        }
        if (!ra(g, d)) throw Error("WeakMap key fail: " + g);
        g[d][this.g] = h;
        return this;
      };
      f.prototype.get = function (g) {
        return c(g) && ra(g, d) ? g[d][this.g] : void 0;
      };
      f.prototype.has = function (g) {
        return c(g) && ra(g, d) && ra(g[d], this.g);
      };
      f.prototype.delete = function (g) {
        return c(g) && ra(g, d) && ra(g[d], this.g) ? delete g[d][this.g] : !1;
      };
      return f;
    },
    "es6",
  );
  x(
    "Map",
    function (a) {
      if (
        (function () {
          if (
            !a ||
            typeof a != "function" ||
            !w(a.prototype, "entries") ||
            typeof Object.seal != "function"
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              l = new a(A([[h, "s"]]));
            if (
              l.get(h) != "s" ||
              l.size != 1 ||
              l.get({ x: 4 }) ||
              l.set({ x: 4 }, "t") != l ||
              l.size != 2
            )
              return !1;
            var k = w(l, "entries").call(l),
              p = k.next();
            if (p.done || p.value[0] != h || p.value[1] != "s") return !1;
            p = k.next();
            return p.done ||
              p.value[0].x != 4 ||
              p.value[1] != "t" ||
              !k.next().done
              ? !1
              : !0;
          } catch (m) {
            return !1;
          }
        })()
      )
        return a;
      var b = new u.WeakMap(),
        c = function (h) {
          this[0] = {};
          this[1] = f();
          this.size = 0;
          if (h) {
            h = A(h);
            for (var l; !(l = h.next()).done; )
              (l = l.value), this.set(l[0], l[1]);
          }
        };
      c.prototype.set = function (h, l) {
        h = h === 0 ? 0 : h;
        var k = d(this, h);
        k.list || (k.list = this[0][k.id] = []);
        k.u
          ? (k.u.value = l)
          : ((k.u = {
              next: this[1],
              G: this[1].G,
              head: this[1],
              key: h,
              value: l,
            }),
            k.list.push(k.u),
            (this[1].G.next = k.u),
            (this[1].G = k.u),
            this.size++);
        return this;
      };
      c.prototype.delete = function (h) {
        h = d(this, h);
        return h.u && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            (h.u.G.next = h.u.next),
            (h.u.next.G = h.u.G),
            (h.u.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this[0] = {};
        this[1] = this[1].G = f();
        this.size = 0;
      };
      c.prototype.has = function (h) {
        return !!d(this, h).u;
      };
      c.prototype.get = function (h) {
        return (h = d(this, h).u) && h.value;
      };
      c.prototype.entries = function () {
        return e(this, function (h) {
          return [h.key, h.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (h) {
          return h.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (h) {
          return h.value;
        });
      };
      c.prototype.forEach = function (h, l) {
        for (var k = w(this, "entries").call(this), p; !(p = k.next()).done; )
          (p = p.value), h.call(l, p[1], p[0], this);
      };
      c.prototype[w(u.Symbol, "iterator")] = w(c.prototype, "entries");
      var d = function (h, l) {
          var k = l && typeof l;
          k == "object" || k == "function"
            ? b.has(l)
              ? (k = b.get(l))
              : ((k = "" + ++g), b.set(l, k))
            : (k = "p_" + l);
          var p = h[0][k];
          if (p && ra(h[0], k))
            for (h = 0; h < p.length; h++) {
              var m = p[h];
              if ((l !== l && m.key !== m.key) || l === m.key)
                return { id: k, list: p, index: h, u: m };
            }
          return { id: k, list: p, index: -1, u: void 0 };
        },
        e = function (h, l) {
          var k = h[1];
          return ha(function () {
            if (k) {
              for (; k.head != h[1]; ) k = k.G;
              for (; k.next != k.head; )
                return (k = k.next), { done: !1, value: l(k) };
              k = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var h = {};
          return (h.G = h.next = h.head = h);
        },
        g = 0;
      return c;
    },
    "es6",
  );
  x(
    "Set",
    function (a) {
      if (
        (function () {
          if (
            !a ||
            typeof a != "function" ||
            !w(a.prototype, "entries") ||
            typeof Object.seal != "function"
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(A([c]));
            if (
              !d.has(c) ||
              d.size != 1 ||
              d.add(c) != d ||
              d.size != 1 ||
              d.add({ x: 4 }) != d ||
              d.size != 2
            )
              return !1;
            var e = w(d, "entries").call(d),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              f.value[0].x != 4 ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      var b = function (c) {
        this.g = new u.Map();
        if (c) {
          c = A(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.g.size;
      };
      b.prototype.add = function (c) {
        c = c === 0 ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c;
      };
      b.prototype.clear = function () {
        this.g.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.g.has(c);
      };
      b.prototype.entries = function () {
        return w(this.g, "entries").call(this.g);
      };
      b.prototype.values = function () {
        return w(this.g, "values").call(this.g);
      };
      b.prototype.keys = w(b.prototype, "values");
      b.prototype[w(u.Symbol, "iterator")] = w(b.prototype, "values");
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.g.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    "es6",
  );
  x(
    "Object.values",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) ra(b, d) && c.push(b[d]);
            return c;
          };
    },
    "es8",
  );
  x(
    "Object.is",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
          };
    },
    "es6",
  );
  x(
    "Array.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || w(Object, "is").call(Object, f, b)) return !0;
            }
            return !1;
          };
    },
    "es7",
  );
  var va = function (a, b, c) {
    if (a == null)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined",
      );
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression",
      );
    return a + "";
  };
  x(
    "String.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return va(this, b, "includes").indexOf(b, c || 0) !== -1;
          };
    },
    "es6",
  );
  x(
    "Array.from",
    function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              c != null
                ? c
                : function (h) {
                    return h;
                  };
            var e = [],
              f =
                typeof u.Symbol != "undefined" &&
                w(u.Symbol, "iterator") &&
                b[w(u.Symbol, "iterator")];
            if (typeof f == "function") {
              b = f.call(b);
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++));
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e;
          };
    },
    "es6",
  );
  x(
    "Object.entries",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) ra(b, d) && c.push([d, b[d]]);
            return c;
          };
    },
    "es8",
  );
  x(
    "Number.isFinite",
    function (a) {
      return a
        ? a
        : function (b) {
            return typeof b !== "number"
              ? !1
              : !isNaN(b) && b !== Infinity && b !== -Infinity;
          };
    },
    "es6",
  );
  x(
    "Number.MAX_SAFE_INTEGER",
    function () {
      return 9007199254740991;
    },
    "es6",
  );
  x(
    "Number.MIN_SAFE_INTEGER",
    function () {
      return -9007199254740991;
    },
    "es6",
  );
  x(
    "Number.isInteger",
    function (a) {
      return a
        ? a
        : function (b) {
            return w(Number, "isFinite").call(Number, b)
              ? b === Math.floor(b)
              : !1;
          };
    },
    "es6",
  );
  x(
    "Number.isSafeInteger",
    function (a) {
      return a
        ? a
        : function (b) {
            return (
              w(Number, "isInteger").call(Number, b) &&
              Math.abs(b) <= w(Number, "MAX_SAFE_INTEGER")
            );
          };
    },
    "es6",
  );
  x(
    "String.prototype.startsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = va(this, b, "startsWith"),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    },
    "es6",
  );
  var wa = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[w(u.Symbol, "iterator")] = function () {
      return e;
    };
    return e;
  };
  x(
    "Array.prototype.entries",
    function (a) {
      return a
        ? a
        : function () {
            return wa(this, function (b, c) {
              return [b, c];
            });
          };
    },
    "es6",
  );
  x(
    "Math.trunc",
    function (a) {
      return a
        ? a
        : function (b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
              return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c;
          };
    },
    "es6",
  );
  x(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return wa(this, function (b) {
              return b;
            });
          };
    },
    "es6",
  );
  x(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return wa(this, function (b, c) {
              return c;
            });
          };
    },
    "es8",
  );
  x(
    "String.prototype.repeat",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = va(this, null, "repeat");
            if (b < 0 || b > 1342177279)
              throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
            return d;
          };
    },
    "es6",
  );
  x(
    "String.prototype.padStart",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = va(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (
              (b > 0 && c
                ? w(c, "repeat")
                    .call(c, Math.ceil(b / c.length))
                    .substring(0, b)
                : "") + d
            );
          };
    },
    "es8",
  ); /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var B = this || self,
    xa = function (a) {
      a = a.split(".");
      for (var b = B, c = 0; c < a.length; c++)
        if (((b = b[a[c]]), b == null)) return null;
      return b;
    },
    ya = function (a) {
      var b = typeof a;
      return b != "object" ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    za = function (a, b, c) {
      a = a.split(".");
      c = c || B;
      for (var d; a.length && (d = a.shift()); )
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    },
    Aa = function (a) {
      return a;
    };
  function Ba(a) {
    B.setTimeout(function () {
      throw a;
    }, 0);
  }
  var Ca = function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  function Da(a, b) {
    var c = 0;
    a = Ca(String(a)).split(".");
    b = Ca(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (f[0].length == 0 && g[0].length == 0) break;
        c =
          Ea(
            f[1].length == 0 ? 0 : parseInt(f[1], 10),
            g[1].length == 0 ? 0 : parseInt(g[1], 10),
          ) ||
          Ea(f[2].length == 0, g[2].length == 0) ||
          Ea(f[2], g[2]);
        f = f[3];
        g = g[3];
      } while (c == 0);
    }
    return c;
  }
  function Ea(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var Fa,
    Ga = xa("CLOSURE_FLAGS"),
    Ha = Ga && Ga[610401301];
  Fa = Ha != null ? Ha : !1;
  var Ia,
    Ja = B.navigator;
  Ia = Ja ? Ja.userAgentData || null : null;
  function Ka(a) {
    return Fa
      ? Ia
        ? Ia.brands.some(function (b) {
            return (b = b.brand) && b.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function C(a) {
    var b;
    a: {
      if ((b = B.navigator)) if ((b = b.userAgent)) break a;
      b = "";
    }
    return b.indexOf(a) != -1;
  }
  function La() {
    return Fa ? !!Ia && Ia.brands.length > 0 : !1;
  }
  function Ma() {
    return La() ? !1 : C("Opera");
  }
  function Na() {
    return La() ? !1 : C("Trident") || C("MSIE");
  }
  function Oa() {
    return C("Firefox") || C("FxiOS");
  }
  function Pa() {
    return (
      C("Safari") &&
      !(
        Qa() ||
        (La() ? 0 : C("Coast")) ||
        Ma() ||
        (La() ? 0 : C("Edge")) ||
        (La() ? Ka("Microsoft Edge") : C("Edg/")) ||
        (La() ? Ka("Opera") : C("OPR")) ||
        Oa() ||
        C("Silk") ||
        C("Android")
      )
    );
  }
  function Qa() {
    return La()
      ? Ka("Chromium")
      : ((C("Chrome") || C("CriOS")) && !(La() ? 0 : C("Edge"))) || C("Silk");
  }
  function Ra() {
    return C("Android") && !(Qa() || Oa() || Ma() || C("Silk"));
  }
  var Sa = function (a, b) {
    return Array.prototype.map.call(a, b, void 0);
  };
  function Ta(a, b) {
    a: {
      for (
        var c = typeof a === "string" ? a.split("") : a, d = a.length - 1;
        d >= 0;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) {
          b = d;
          break a;
        }
      b = -1;
    }
    return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b];
  }
  var Ua = function (a) {
    Ua[" "](a);
    return a;
  };
  Ua[" "] = function () {};
  var Va = Na();
  Ra();
  Qa();
  Pa();
  var Wa = {},
    Xa = null,
    Za = function (a) {
      var b = [];
      Ya(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Ya = function (a, b) {
      function c(l) {
        for (; d < a.length; ) {
          var k = a.charAt(d++),
            p = Xa[k];
          if (p != null) return p;
          if (!/^[\s\xa0]*$/.test(k))
            throw Error("Unknown base64 encoding at char: " + k);
        }
        return l;
      }
      $a();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (h === 64 && e === -1) break;
        b((e << 2) | (f >> 4));
        g != 64 &&
          (b(((f << 4) & 240) | (g >> 2)), h != 64 && b(((g << 6) & 192) | h));
      }
    },
    $a = function () {
      if (!Xa) {
        Xa = {};
        for (
          var a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                "",
              ),
            b = ["+/=", "+/", "-_=", "-_.", "-_"],
            c = 0;
          c < 5;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          Wa[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            Xa[f] === void 0 && (Xa[f] = e);
          }
        }
      }
    };
  var ab = typeof Uint8Array !== "undefined",
    bb = !Va && typeof btoa === "function";
  function cb(a) {
    return ab && a != null && a instanceof Uint8Array;
  }
  function db(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  var eb = void 0,
    fb;
  function gb(a) {
    if (fb) throw Error("");
    fb = function (b) {
      B.setTimeout(function () {
        a(b);
      }, 0);
    };
  }
  function hb(a) {
    if (fb)
      try {
        fb(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
  }
  function ib(a) {
    a = Error(a);
    db(a, "warning");
    hb(a);
    return a;
  }
  function jb(a) {
    if (a != null) {
      var b;
      var c = (b = eb) != null ? b : (eb = {});
      b = c[a] || 0;
      b >= 5 ||
        ((c[a] = b + 1), (a = Error()), db(a, "incident"), fb ? hb(a) : Ba(a));
    }
  }
  var kb =
    typeof u.Symbol === "function" && typeof (0, u.Symbol)() === "symbol";
  function lb(a, b, c) {
    return typeof u.Symbol === "function" && typeof (0, u.Symbol)() === "symbol"
      ? (c === void 0 ? 0 : c) && u.Symbol.for && a
        ? u.Symbol.for(a)
        : a != null
          ? (0, u.Symbol)(a)
          : (0, u.Symbol)()
      : b;
  }
  var mb = lb("jas", void 0, !0),
    nb = lb(void 0, "0di"),
    ob = lb(void 0, "1oa"),
    pb = lb(void 0, (0, u.Symbol)()),
    qb = lb(void 0, "0actk"),
    rb = lb(void 0, "8utk");
  var D = kb ? mb : "eb",
    tb = { eb: { value: 0, configurable: !0, writable: !0, enumerable: !1 } },
    ub = Object.defineProperties;
  function vb(a, b) {
    kb || D in a || ub(a, tb);
    a[D] |= b;
  }
  function E(a, b) {
    kb || D in a || ub(a, tb);
    a[D] = b;
  }
  function wb(a) {
    if (4 & a) return 2048 & a ? 2048 : 4096 & a ? 4096 : 0;
  }
  function xb(a) {
    vb(a, 32);
    return a;
  }
  function yb() {
    return typeof BigInt === "function";
  }
  function zb(a) {
    return Array.prototype.slice.call(a);
  }
  var Ab = {};
  function Bb(a) {
    return (
      a !== null &&
      typeof a === "object" &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var Cb,
    Db = [];
  E(Db, 55);
  Cb = Object.freeze(Db);
  function Eb(a) {
    if (a & 2) throw Error();
  }
  function Fb(a, b) {
    if (typeof b !== "number" || b < 0 || b >= a.length) throw Error();
  }
  var Gb = Object.freeze({});
  function Hb(a) {
    var b = Ib;
    if (!a) throw Error((typeof b === "function" ? b() : b) || String(a));
  }
  function Jb(a) {
    a.Ib = !0;
    return a;
  }
  var Ib = void 0;
  var Kb = Jb(function (a) {
      return typeof a === "number";
    }),
    Lb = Jb(function (a) {
      return typeof a === "string";
    }),
    Mb = Jb(function (a) {
      return typeof a === "boolean";
    });
  var Nb = typeof B.BigInt === "function" && typeof B.BigInt(0) === "bigint";
  function Ob(a) {
    var b = a;
    if (Lb(b)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
    } else if (Kb(b) && !w(Number, "isSafeInteger").call(Number, b))
      throw Error(String(b));
    return Nb
      ? BigInt(a)
      : (a = Mb(a) ? (a ? "1" : "0") : Lb(a) ? a.trim() || "0" : String(a));
  }
  var Ub = Jb(function (a) {
      return Nb ? a >= Pb && a <= Qb : a[0] === "-" ? Rb(a, Sb) : Rb(a, Tb);
    }),
    Sb = w(Number, "MIN_SAFE_INTEGER").toString(),
    Pb = Nb ? BigInt(w(Number, "MIN_SAFE_INTEGER")) : void 0,
    Tb = w(Number, "MAX_SAFE_INTEGER").toString(),
    Qb = Nb ? BigInt(w(Number, "MAX_SAFE_INTEGER")) : void 0;
  function Rb(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = b[c];
      if (d > e) return !1;
      if (d < e) return !0;
    }
  }
  var F = 0,
    G = 0;
  function Vb(a) {
    var b = a >>> 0;
    F = b;
    G = ((a - b) / 4294967296) >>> 0;
  }
  function Wb(a) {
    if (a < 0) {
      Vb(-a);
      var b = A(Xb(F, G));
      a = b.next().value;
      b = b.next().value;
      F = a >>> 0;
      G = b >>> 0;
    } else Vb(a);
  }
  function Yb(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else
      yb()
        ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + c * 6777216 + b * 6710656),
          (c += b * 8147497),
          (b *= 2),
          a >= 1e7 && ((c += (a / 1e7) >>> 0), (a %= 1e7)),
          c >= 1e7 && ((b += (c / 1e7) >>> 0), (c %= 1e7)),
          (c = b + Zb(c) + Zb(a)));
    return c;
  }
  function Zb(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function $b() {
    var a = F,
      b = G;
    b & 2147483648
      ? yb()
        ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
        : ((b = A(Xb(a, b))),
          (a = b.next().value),
          (b = b.next().value),
          (a = "-" + Yb(a, b)))
      : (a = Yb(a, b));
    return a;
  }
  function Xb(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  function ac(a, b) {
    throw Error(b === void 0 ? "unexpected value " + a + "!" : b);
  }
  var bc = typeof BigInt === "function" ? BigInt.asIntN : void 0,
    cc = w(Number, "isSafeInteger"),
    dc = w(Number, "isFinite"),
    ec = w(Math, "trunc");
  function fc(a) {
    if (typeof a !== "boolean")
      throw Error("Expected boolean but got " + ya(a) + ": " + a);
    return a;
  }
  var gc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function hc(a) {
    switch (typeof a) {
      case "bigint":
        return !0;
      case "number":
        return dc(a);
      case "string":
        return gc.test(a);
      default:
        return !1;
    }
  }
  function H(a) {
    if (a != null) {
      if (!dc(a)) throw ib("enum");
      a |= 0;
    }
    return a;
  }
  function ic(a) {
    return a == null ? a : dc(a) ? a | 0 : void 0;
  }
  function jc(a) {
    if (typeof a !== "number") throw ib("int32");
    if (!dc(a)) throw ib("int32");
    return a | 0;
  }
  function kc(a) {
    return a == null ? a : jc(a);
  }
  function lc(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return dc(a) ? a | 0 : void 0;
  }
  function mc(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return dc(a) ? a >>> 0 : void 0;
  }
  function nc(a) {
    var b = 0;
    b = b === void 0 ? 0 : b;
    if (!hc(a)) throw ib("int64");
    var c = typeof a;
    switch (b) {
      case 2048:
        switch (c) {
          case "string":
            return oc(a);
          case "bigint":
            return String(bc(64, a));
          default:
            return pc(a);
        }
      case 4096:
        switch (c) {
          case "string":
            return qc(a);
          case "bigint":
            return Ob(bc(64, a));
          default:
            return rc(a);
        }
      case 0:
        switch (c) {
          case "string":
            return oc(a);
          case "bigint":
            return Ob(bc(64, a));
          default:
            return sc(a);
        }
      default:
        return ac(b, "Unknown format requested type for int64");
    }
  }
  function tc(a) {
    return a == null ? a : nc(a);
  }
  function uc(a) {
    var b = a.length;
    return a[0] === "-"
      ? b < 20
        ? !0
        : b === 20 && Number(a.substring(0, 7)) > -922337
      : b < 19
        ? !0
        : b === 19 && Number(a.substring(0, 6)) < 922337;
  }
  function vc(a) {
    if (uc(a)) return a;
    if (a.length < 16) Wb(Number(a));
    else if (yb())
      (a = BigInt(a)),
        (F = Number(a & BigInt(4294967295)) >>> 0),
        (G = Number((a >> BigInt(32)) & BigInt(4294967295)));
    else {
      var b = +(a[0] === "-");
      G = F = 0;
      for (
        var c = a.length, d = b, e = ((c - b) % 6) + b;
        e <= c;
        d = e, e += 6
      )
        (d = Number(a.slice(d, e))),
          (G *= 1e6),
          (F = F * 1e6 + d),
          F >= 4294967296 &&
            ((G += w(Math, "trunc").call(Math, F / 4294967296)),
            (G >>>= 0),
            (F >>>= 0));
      b &&
        ((b = A(Xb(F, G))),
        (a = b.next().value),
        (b = b.next().value),
        (F = a),
        (G = b));
    }
    return $b();
  }
  function sc(a) {
    a = ec(a);
    if (!cc(a)) {
      Wb(a);
      var b = F,
        c = G;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), b == 0 && (c = (c + 1) >>> 0);
      var d = c * 4294967296 + (b >>> 0);
      b = w(Number, "isSafeInteger").call(Number, d) ? d : Yb(b, c);
      a = typeof b === "number" ? (a ? -b : b) : a ? "-" + b : b;
    }
    return a;
  }
  function pc(a) {
    a = ec(a);
    if (cc(a)) a = String(a);
    else {
      var b = String(a);
      uc(b) ? (a = b) : (Wb(a), (a = $b()));
    }
    return a;
  }
  function oc(a) {
    var b = ec(Number(a));
    if (cc(b)) return String(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    return vc(a);
  }
  function qc(a) {
    var b = ec(Number(a));
    if (cc(b)) return Ob(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    return yb() ? Ob(bc(64, BigInt(a))) : Ob(vc(a));
  }
  function rc(a) {
    return cc(a) ? Ob(sc(a)) : Ob(pc(a));
  }
  function wc(a) {
    if (typeof a !== "string") throw Error();
    return a;
  }
  function xc(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a;
  }
  function I(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  function yc(a, b, c, d) {
    if (a != null && typeof a === "object" && a.na === Ab) return a;
    if (!Array.isArray(a))
      return (
        c
          ? d & 2
            ? ((a = b[nb]) || ((a = new b()), vb(a.i, 34), (a = b[nb] = a)),
              (b = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    var e = (c = a[D] | 0);
    e === 0 && (e |= d & 32);
    e |= d & 2;
    e !== c && E(a, e);
    return new b(a);
  }
  function zc(a) {
    return a;
  }
  function Ac(a, b, c, d) {
    if (Array.isArray(a)) {
      var e = a[D] | 0;
      if (a.length === 0 && e & 1) return;
      if (d && e & 2) return a;
      var f;
      if ((f = d && c)) f = e === 0 || (!!(e & 32) && !(e & 64 || !(e & 16)));
      return f
        ? (vb(a, 34), e & 4 && Object.freeze(a), a)
        : Bc(a, e, b, c !== void 0, d);
    }
    return b(a);
  }
  function Bc(a, b, c, d, e) {
    var f = d ? !!(b & 32) : void 0;
    d = [];
    var g = a.length,
      h = !1;
    if (b & 64) {
      if (b & 256) {
        g--;
        var l = a[g];
        var k = g;
      } else (k = 4294967295), (l = void 0);
      if (!(e || b & 512)) {
        h = !0;
        var p;
        var m = ((p = Cc) != null ? p : zc)(
          l ? k - -1 : (b >> 14) & 1023 || 536870912,
          -1,
          a,
          l,
        );
        k = m + -1;
      }
    } else
      (k = 4294967295),
        b & 1 ||
          ((l = g && a[g - 1]), Bb(l) ? (g--, (k = g), (m = 0)) : (l = void 0));
    p = void 0;
    for (var n = 0; n < g; n++) {
      var r = a[n];
      if (r != null && (r = Ac(r, c, f, e)) != null)
        if (n >= k) {
          var t = void 0;
          ((t = p) != null ? t : (p = {}))[n - -1] = r;
        } else d[n] = r;
    }
    if (l)
      for (var z in l)
        Object.prototype.hasOwnProperty.call(l, z) &&
          ((g = l[z]),
          g != null &&
            (g = Ac(g, c, f, e)) != null &&
            ((n = +z),
            n < m
              ? (d[n + -1] = g)
              : ((n = void 0), (((n = p) != null ? n : (p = {}))[z] = g))));
    p && (h ? d.push(p) : (d[k] = p));
    if (e) {
      var v;
      c =
        b & 64 ? ((v = m) != null ? v : (b >> 14) & 1023 || 536870912) : void 0;
      v = 34;
      p != null && (v |= 256);
      c !== void 0 && (v = (v & -16760833) | ((c & 1023) << 14));
      E(d, (b & 577) | v);
      (a = (b = Aa(pb)) ? a[b] : void 0) && (d[pb] = zb(a));
    }
    return d;
  }
  function Dc(a) {
    switch (typeof a) {
      case "number":
        return w(Number, "isFinite").call(Number, a) ? a : "" + a;
      case "bigint":
        return Ub(a) ? Number(a) : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a.na === Ab) return Ec(a);
        if (cb(a)) {
          cb(a) && jb(rb);
          if (bb) {
            for (var b = "", c = 0, d = a.length - 10240; c < d; )
              b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
            a = btoa(b);
          } else {
            b === void 0 && (b = 0);
            $a();
            b = Wa[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (var e = 0, f = 0; e < a.length - 2; e += 3) {
              var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
              g = b[((g & 3) << 4) | (h >> 4)];
              h = b[((h & 15) << 2) | (l >> 6)];
              l = b[l & 63];
              c[f++] = k + g + h + l;
            }
            k = 0;
            l = d;
            switch (a.length - e) {
              case 2:
                (k = a[e + 1]), (l = b[(k & 15) << 2] || d);
              case 1:
                (a = a[e]),
                  (c[f] = b[a >> 2] + b[((a & 3) << 4) | (k >> 4)] + l + d);
            }
            a = c.join("");
          }
          return a;
        }
        return;
    }
    return a;
  }
  var Fc =
      typeof structuredClone != "undefined"
        ? structuredClone
        : function (a) {
            return Bc(a, 0, Dc, void 0, !1);
          },
    Cc;
  function J(a) {
    try {
      return Ec(a);
    } finally {
      Cc = void 0;
    }
  }
  function Ec(a) {
    a = a.i;
    return Bc(a, a[D] | 0, Dc, void 0, !1);
  }
  function K(a, b, c) {
    if (a == null) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -16760833) | ((b & 1023) << 14));
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      d = a[D] | 0;
      8192 & d || !(64 & d) || 2 & d || Gc();
      if (d & 1024) throw Error("farr");
      if (d & 64) return a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error("mid");
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1,
            g = c[f];
          if (Bb(g)) {
            d |= 256;
            b = d & 512 ? 0 : -1;
            f -= b;
            if (f >= 1024) throw Error("pvtlmt");
            for (var h in g)
              Object.prototype.hasOwnProperty.call(g, h) &&
                ((e = +h), e < f && ((c[e + b] = g[h]), delete g[h]));
            d = (d & -16760833) | ((f & 1023) << 14);
            break a;
          }
        }
        if (b) {
          h = Math.max(b, e - (d & 512 ? 0 : -1));
          if (h > 1024) throw Error("spvt");
          d = (d & -16760833) | ((h & 1023) << 14);
        }
      }
    }
    E(a, d);
    return a;
  }
  function Gc() {
    jb(qb);
  }
  function Hc(a) {
    if (typeof a !== "object" || a === null) return a;
    if (a.na === Ab) {
      var b = a.i,
        c = b[D] | 0;
      return c & 2 ? a : Bc(b, c, Hc, !0, !0);
    }
    if (cb(a)) return cb(a) && jb(rb), new Uint8Array(a);
  }
  function Ic(a) {
    var b = a.i;
    if (!((b[D] | 0) & 2)) return a;
    a = new a.constructor(Bc(b, b[D] | 0, Hc, !0, !0));
    b = a.i;
    b[D] &= -3;
    return a;
  }
  function Jc(a) {
    var b = a.i,
      c = b[D] | 0;
    return c & 2 ? a : new a.constructor(Bc(b, c, Hc, !0, !0));
  }
  var Kc = Ob(0),
    L = function (a, b) {
      a = a.i;
      return Lc(a, a[D] | 0, b);
    },
    Lc = function (a, b, c) {
      if (c === -1) return null;
      var d = c + (b & 512 ? 0 : -1),
        e = a.length - 1;
      if (d >= e && b & 256) return a[e][c];
      if (d <= e) return a[d];
    },
    N = function (a, b, c) {
      var d = a.i,
        e = d[D] | 0;
      Eb(e);
      M(d, e, b, c);
      return a;
    };
  function M(a, b, c, d) {
    var e = b & 512 ? 0 : -1,
      f = c + e,
      g = a.length - 1;
    if (f >= g && b & 256) return (a[g][c] = d), b;
    if (f <= g) return (a[f] = d), b;
    d !== void 0 &&
      ((g = (b >> 14) & 1023 || 536870912),
      c >= g
        ? d != null &&
          ((f = {}), (a[g + e] = ((f[c] = d), f)), (b |= 256), E(a, b))
        : (a[f] = d));
    return b;
  }
  var O = function (a) {
    return a === Gb ? 2 : 4;
  };
  function Mc(a, b, c, d, e) {
    var f = a.i;
    a = f[D] | 0;
    var g = 2 & a ? 1 : d;
    e = !!e;
    d = Nc(f, a, b);
    var h = d[D] | 0;
    if (!(4 & h)) {
      4 & h && ((d = zb(d)), (h = Oc(h, a)), (a = M(f, a, b, d)));
      for (var l = 0, k = 0; l < d.length; l++) {
        var p = c(d[l]);
        p != null && (d[k++] = p);
      }
      k < l && (d.length = k);
      h = Pc(h, a);
      c = (h | 20) & -2049;
      h = c &= -4097;
      E(d, h);
      2 & h && Object.freeze(d);
    }
    g === 1 || (g === 4 && 32 & h)
      ? Qc(h) || ((e = h), (h |= 2), h !== e && E(d, h), Object.freeze(d))
      : (g === 2 &&
          Qc(h) &&
          ((d = zb(d)),
          (h = Oc(h, a)),
          (h = Rc(h, a, e)),
          E(d, h),
          (a = M(f, a, b, d))),
        Qc(h) || ((b = h), (h = Rc(h, a, e)), h !== b && E(d, h)));
    return d;
  }
  function Nc(a, b, c) {
    a = Lc(a, b, c);
    return Array.isArray(a) ? a : Cb;
  }
  function Pc(a, b) {
    a === 0 && (a = Oc(a, b));
    return a | 1;
  }
  function Qc(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(1024 & a);
  }
  function Sc(a, b, c, d) {
    var e = a.i,
      f = e[D] | 0;
    Eb(f);
    if (c == null) return M(e, f, b), a;
    var g = c[D] | 0,
      h = g,
      l = Qc(g),
      k = l || Object.isFrozen(c);
    l || (g = 0);
    k || ((c = zb(c)), (h = 0), (g = Oc(g, f)), (g = Rc(g, f, !0)), (k = !1));
    g |= 21;
    var p;
    l = (p = wb(g)) != null ? p : 0;
    for (p = 0; p < c.length; p++) {
      var m = c[p],
        n = d(m, l);
      w(Object, "is").call(Object, m, n) ||
        (k &&
          ((c = zb(c)), (h = 0), (g = Oc(g, f)), (g = Rc(g, f, !0)), (k = !1)),
        (c[p] = n));
    }
    g !== h &&
      (k && ((c = zb(c)), (g = Oc(g, f)), (g = Rc(g, f, !0))), E(c, g));
    M(e, f, b, c);
    return a;
  }
  function P(a, b, c, d) {
    var e = a.i,
      f = e[D] | 0;
    Eb(f);
    M(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
    return a;
  }
  var Q = function (a, b, c, d) {
      var e = a.i,
        f = e[D] | 0;
      Eb(f);
      if (d == null) {
        var g = Tc(e);
        if (Uc(g, e, f, c) === b) g.set(c, 0);
        else return a;
      } else f = Vc(e, f, c, b);
      M(e, f, b, d);
      return a;
    },
    Xc = function (a, b, c) {
      return Wc(a, b) === c ? c : -1;
    },
    Wc = function (a, b) {
      a = a.i;
      return Uc(Tc(a), a, a[D] | 0, b);
    };
  function Tc(a) {
    if (kb) {
      var b;
      return (b = a[ob]) != null ? b : (a[ob] = new u.Map());
    }
    if (ob in a) return a[ob];
    b = new u.Map();
    Object.defineProperty(a, ob, { value: b });
    return b;
  }
  function Vc(a, b, c, d) {
    var e = Tc(a),
      f = Uc(e, a, b, c);
    f !== d && (f && (b = M(a, b, f)), e.set(c, d));
    return b;
  }
  function Uc(a, b, c, d) {
    var e = a.get(d);
    if (e != null) return e;
    for (var f = (e = 0); f < d.length; f++) {
      var g = d[f];
      Lc(b, c, g) != null && (e !== 0 && (c = M(b, c, e)), (e = g));
    }
    a.set(d, e);
    return e;
  }
  var Yc = function (a, b, c) {
    a = a.i;
    var d = a[D] | 0;
    Eb(d);
    var e = Lc(a, d, c);
    b = Ic(yc(e, b, !0, d));
    e !== b && M(a, d, c, b);
    return b;
  };
  function Zc(a, b, c) {
    a = a.i;
    var d = a[D] | 0,
      e = Lc(a, d, c);
    b = yc(e, b, !1, d);
    b !== e && b != null && M(a, d, c, b);
    return b;
  }
  var $c = function (a, b, c) {
      (a = Zc(a, b, c)) ||
        (a = b[nb]) ||
        ((a = new b()), vb(a.i, 34), (a = b[nb] = a));
      return a;
    },
    R = function (a, b, c) {
      b = Zc(a, b, c);
      if (b == null) return b;
      a = a.i;
      var d = a[D] | 0;
      if (!(d & 2)) {
        var e = Ic(b);
        e !== b && ((b = e), M(a, d, c, b));
      }
      return b;
    };
  function ad(a, b, c, d, e, f, g) {
    a = a.i;
    var h = !!(2 & b),
      l = h ? 1 : e;
    f = !!f;
    g && (g = !h);
    e = Nc(a, b, d);
    var k = e[D] | 0;
    h = !!(4 & k);
    if (!h) {
      k = Pc(k, b);
      var p = e,
        m = b,
        n = !!(2 & k);
      n && (m |= 2);
      for (var r = !n, t = !0, z = 0, v = 0; z < p.length; z++) {
        var ta = yc(p[z], c, !1, m);
        if (ta instanceof c) {
          if (!n) {
            var sb = !!((ta.i[D] | 0) & 2);
            r && (r = !sb);
            t && (t = sb);
          }
          p[v++] = ta;
        }
      }
      v < z && (p.length = v);
      k |= 4;
      k = t ? k | 16 : k & -17;
      k = r ? k | 8 : k & -9;
      E(p, k);
      n && Object.freeze(p);
    }
    if (g && !(8 & k || (!e.length && (l === 1 || (l === 4 && 32 & k))))) {
      Qc(k) && ((e = zb(e)), (k = Oc(k, b)), (b = M(a, b, d, e)));
      c = e;
      g = k;
      for (p = 0; p < c.length; p++)
        (k = c[p]), (m = Ic(k)), k !== m && (c[p] = m);
      g |= 8;
      g = c.length ? g & -17 : g | 16;
      E(c, g);
      k = g;
    }
    l === 1 || (l === 4 && 32 & k)
      ? Qc(k) ||
        ((b = k),
        (k |= !e.length || (16 & k && (!h || 32 & k)) ? 2 : 1024),
        k !== b && E(e, k),
        Object.freeze(e))
      : (l === 2 &&
          Qc(k) &&
          ((e = zb(e)),
          (k = Oc(k, b)),
          (k = Rc(k, b, f)),
          E(e, k),
          (b = M(a, b, d, e))),
        Qc(k) || ((d = k), (k = Rc(k, b, f)), k !== d && E(e, k)));
    return e;
  }
  var S = function (a, b, c, d) {
      var e = a.i[D] | 0;
      return ad(a, e, b, c, d, !1, !(2 & e));
    },
    bd = function (a, b, c) {
      c == null && (c = void 0);
      return N(a, b, c);
    },
    cd = function (a, b, c, d) {
      d == null && (d = void 0);
      return Q(a, b, c, d);
    },
    dd = function (a, b, c) {
      var d = a.i,
        e = d[D] | 0;
      Eb(e);
      if (c == null) return M(d, e, b), a;
      for (
        var f = c[D] | 0,
          g = f,
          h = Qc(f),
          l = h || Object.isFrozen(c),
          k = !0,
          p = !0,
          m = 0;
        m < c.length;
        m++
      ) {
        var n = c[m];
        h || ((n = !!((n.i[D] | 0) & 2)), k && (k = !n), p && (p = n));
      }
      h || ((f = k ? 13 : 5), (f = p ? f | 16 : f & -17));
      (l && f === g) ||
        ((c = zb(c)), (g = 0), (f = Oc(f, e)), (f = Rc(f, e, !0)));
      f !== g && E(c, f);
      M(d, e, b, c);
      return a;
    };
  function Oc(a, b) {
    a = (2 & b ? a | 2 : a & -3) | 32;
    return (a &= -1025);
  }
  function Rc(a, b, c) {
    (32 & b && c) || (a &= -33);
    return a;
  }
  function ed(a, b) {
    Eb(a.i[D] | 0);
    a = Mc(a, 4, I, 2, !0);
    var c,
      d = (c = wb(a[D] | 0)) != null ? c : 0;
    if (Array.isArray(b)) {
      c = b.length;
      for (var e = 0; e < c; e++) a.push(wc(b[e], d));
    } else
      for (b = A(b), c = b.next(); !c.done; c = b.next())
        a.push(wc(c.value, d));
  }
  var fd = function (a, b) {
      a = L(a, b);
      a =
        a == null || typeof a === "boolean"
          ? a
          : typeof a === "number"
            ? !!a
            : void 0;
      return a != null ? a : !1;
    },
    gd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      var d;
      return (d = lc(L(a, b))) != null ? d : c;
    },
    hd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      var d;
      return (d = mc(L(a, b))) != null ? d : c;
    },
    id = function (a, b) {
      var c = c === void 0 ? 0 : c;
      a = L(a, b);
      a != null &&
        (typeof a === "bigint"
          ? Ub(a)
            ? (a = Number(a))
            : ((a = bc(64, a)), (a = Ub(a) ? Number(a) : String(a)))
          : (a = hc(a) ? (typeof a === "number" ? sc(a) : oc(a)) : void 0));
      return a != null ? a : c;
    },
    jd = function (a, b) {
      var c = c === void 0 ? Kc : c;
      a = L(a, b);
      b = typeof a;
      a =
        a == null
          ? a
          : b === "bigint"
            ? Ob(bc(64, a))
            : hc(a)
              ? b === "string"
                ? qc(a)
                : rc(a)
              : void 0;
      return a != null ? a : c;
    },
    kd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      a = a.i;
      var d = a[D] | 0,
        e = Lc(a, d, b);
      var f =
        e == null || typeof e === "number"
          ? e
          : e === "NaN" || e === "Infinity" || e === "-Infinity"
            ? Number(e)
            : void 0;
      f != null && f !== e && M(a, d, b, f);
      return f != null ? f : c;
    },
    T = function (a, b) {
      var c;
      return (c = I(L(a, b))) != null ? c : "";
    },
    U = function (a, b) {
      var c = c === void 0 ? 0 : c;
      var d;
      return (d = ic(L(a, b))) != null ? d : c;
    },
    ld = function (a, b, c) {
      a = Mc(a, b, lc, 3, !0);
      Fb(a, c);
      return a[c];
    },
    md = function (a, b, c) {
      return U(a, Xc(a, c, b));
    },
    nd = function (a, b, c) {
      return P(a, b, tc(c), "0");
    },
    od = function (a, b, c) {
      return P(a, b, xc(c), "");
    };
  var V = function (a, b, c) {
    this.i = K(a, b, c);
  };
  V.prototype.toJSON = function () {
    return J(this);
  };
  V.prototype.na = Ab;
  function pd(a, b) {
    if (b == null) return new a();
    if (!Array.isArray(b)) throw Error("must be an array");
    if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
      throw Error("arrays passed to jspb constructors must be mutable");
    vb(b, 128);
    return new a(xb(b));
  }
  function qd(a) {
    return function (b) {
      if (b == null || b == "") b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("dnarr");
        b = new a(xb(b));
      }
      return b;
    };
  }
  var rd = function (a) {
    this.i = K(a);
  };
  y(rd, V);
  var sd = function (a) {
    this.i = K(a);
  };
  y(sd, V);
  var td = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  var ud = function () {
    return Fa && Ia
      ? !Ia.mobile && (C("iPad") || C("Android") || C("Silk"))
      : C("iPad") || (C("Android") && !C("Mobile")) || C("Silk");
  };
  function vd(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  } /* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
  var wd;
  function xd() {
    wd === void 0 && (wd = null);
    return wd;
  }
  var yd = function (a) {
    this.g = a;
  };
  yd.prototype.toString = function () {
    return this.g + "";
  };
  function zd(a) {
    var b = xd();
    return new yd(b ? b.createScriptURL(a) : a);
  }
  function Ad(a) {
    if (a instanceof yd) return a.g;
    throw Error("");
  }
  var Cd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  var Dd = function (a) {
    this.g = a;
  };
  Dd.prototype.toString = function () {
    return this.g + "";
  };
  function Ed(a) {
    a = a === void 0 ? document : a;
    var b, c;
    a =
      (c = (b = a).querySelector) == null ? void 0 : c.call(b, "script[nonce]");
    return a == null ? "" : a.nonce || a.getAttribute("nonce") || "";
  }
  function Fd(a, b) {
    a.src = Ad(b);
    (b = Ed(a.ownerDocument)) && a.setAttribute("nonce", b);
  }
  var Gd =
    "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
      " ",
    );
  function Hd(a, b) {
    var c = a.write;
    if (b instanceof Dd) b = b.g;
    else throw Error("");
    c.call(a, b);
  }
  var Id = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
    ),
    Jd = function (a) {
      return a ? decodeURI(a) : a;
    },
    Kd = /#|$/,
    Ld = function (a, b) {
      var c = a.search(Kd);
      a: {
        var d = 0;
        for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (f == 38 || f == 63)
            if (
              ((f = a.charCodeAt(d + e)), !f || f == 61 || f == 38 || f == 35)
            )
              break a;
          d += e + 1;
        }
        d = -1;
      }
      if (d < 0) return null;
      e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "),
      );
    };
  function Md(a, b) {
    a = Ad(a).toString();
    a = '<script src="' + Nd(a) + '"';
    if (b == null ? 0 : b.async) a += " async";
    (b == null ? void 0 : b.attributionSrc) !== void 0 &&
      (a += ' attributionsrc="' + Nd(b.attributionSrc) + '"');
    if (b == null ? 0 : b.Va) a += ' custom-element="' + Nd(b.Va) + '"';
    if (b == null ? 0 : b.defer) a += " defer";
    if (b == null ? 0 : b.id) a += ' id="' + Nd(b.id) + '"';
    if (b == null ? 0 : b.nonce) a += ' nonce="' + Nd(b.nonce) + '"';
    if (b == null ? 0 : b.type) a += ' type="' + Nd(b.type) + '"';
    if (b == null ? 0 : b.Fa) a += ' crossorigin="' + Nd(b.Fa) + '"';
    b = a + ">\x3c/script>";
    a = xd();
    return new Dd(a ? a.createHTML(b) : b);
  }
  function Nd(a) {
    return a
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
  function Od(a) {
    var b = ua.apply(1, arguments);
    if (b.length === 0) return zd(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return zd(c);
  }
  function Pd(a, b) {
    a = Ad(a).toString();
    var c = a.split(/[?#]/),
      d = /[?]/.test(a) ? "?" + c[1] : "";
    return Qd(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b);
  }
  function Qd(a, b, c, d) {
    function e(g, h) {
      g != null &&
        (Array.isArray(g)
          ? g.forEach(function (l) {
              return e(l, h);
            })
          : ((b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g)),
            (f = "&")));
    }
    var f = b.length ? "&" : "?";
    d.constructor === Object && (d = w(Object, "entries").call(Object, d));
    Array.isArray(d)
      ? d.forEach(function (g) {
          return e(g[1], g[0]);
        })
      : d.forEach(e);
    return zd(a + b + c);
  }
  var Rd = function (a) {
      var b = b === void 0 ? !1 : b;
      var c = c === void 0 ? B : c;
      for (var d = 0; c && d++ < 40; ) {
        var e;
        if (!(e = b))
          try {
            var f;
            if ((f = !!c && c.location.href != null))
              b: {
                try {
                  Ua(c.foo);
                  f = !0;
                  break b;
                } catch (h) {}
                f = !1;
              }
            e = f;
          } catch (h) {
            e = !1;
          }
        if (e && a(c)) break;
        a: {
          try {
            var g = c.parent;
            if (g && g != c) {
              c = g;
              break a;
            }
          } catch (h) {}
          c = null;
        }
      }
    },
    Sd = function (a) {
      var b = a;
      Rd(function (c) {
        b = c;
        return !1;
      });
      return b;
    },
    Td = function () {
      if (!u.globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        u.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    Ud = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Vd = function (a) {
      var b = a.length;
      if (b == 0) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return c > 0 ? c : 4294967296 + c;
    },
    Wd = td(function () {
      return (
        Fa && Ia
          ? Ia.mobile
          : !ud() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
      )
        ? 2
        : ud()
          ? 1
          : 0;
    });
  function Xd(a, b) {
    if (a.length && b.head) {
      a = A(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = Yd("META");
          b.head.appendChild(d);
          d.httpEquiv = "origin-trial";
          d.content = c;
        }
    }
  }
  var Zd = function (a) {
      if (typeof a.goog_pvsid !== "number")
        try {
          var b = Object,
            c = b.defineProperty,
            d = void 0;
          d = d === void 0 ? Math.random : d;
          var e = Math.floor(d() * 4503599627370496);
          c.call(b, a, "goog_pvsid", { value: e, configurable: !1 });
        } catch (f) {}
      return Number(a.goog_pvsid) || -1;
    },
    Yd = function (a, b) {
      b = b === void 0 ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var $d = {
    Db: 0,
    Cb: 1,
    zb: 2,
    ub: 3,
    Ab: 4,
    vb: 5,
    Bb: 6,
    xb: 7,
    yb: 8,
    tb: 9,
    wb: 10,
    Eb: 11,
  };
  var ae = { Gb: 0, Hb: 1, Fb: 2 };
  var be = function (a) {
    this.i = K(a);
  };
  y(be, V);
  be.prototype.getVersion = function () {
    return gd(this, 2);
  };
  function ce(a) {
    return Za(a.length % 4 !== 0 ? a + "A" : a)
      .map(function (b) {
        return ((q = b.toString(2)), w(q, "padStart")).call(q, 8, "0");
      })
      .join("");
  }
  function de(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error("Invalid input [" + a + "] not a bit string.");
    return parseInt(a, 2);
  }
  function ee(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error("Invalid input [" + a + "] not a bit string.");
    for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
      b.length <= d && b.push(b[d - 1] + b[d - 2]),
        (c += parseInt(a[d], 2) * b[d]);
    return c;
  }
  function fe(a) {
    var b = ce(a),
      c = de(b.slice(0, 6));
    a = de(b.slice(6, 12));
    var d = new be();
    c = P(d, 1, kc(c), 0);
    a = P(c, 2, kc(a), 0);
    b = b.slice(12);
    c = de(b.slice(0, 12));
    d = [];
    for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
      if (e.length === 0)
        throw Error(
          "Found " +
            f +
            " of " +
            c +
            " sections [" +
            d +
            "] but reached end of input [" +
            b +
            "]",
        );
      var g = de(e[0]) === 0;
      e = e.slice(1);
      var h = ge(e, b),
        l = d.length === 0 ? 0 : d[d.length - 1];
      l = ee(h) + l;
      e = e.slice(h.length);
      if (g) d.push(l);
      else {
        g = ge(e, b);
        h = ee(g);
        for (var k = 0; k <= h; k++) d.push(l + k);
        e = e.slice(g.length);
      }
    }
    if (e.length > 0)
      throw Error(
        "Found " +
          c +
          " sections [" +
          d +
          "] but has remaining input [" +
          e +
          "], entire input [" +
          b +
          "]",
      );
    return Sc(a, 3, d, jc);
  }
  function ge(a, b) {
    var c = a.indexOf("11");
    if (c === -1)
      throw Error(
        "Expected section bitstring but not found in [" +
          a +
          "] part of [" +
          b +
          "]",
      );
    return a.slice(0, c + 2);
  }
  var he = "a".charCodeAt(),
    ie = vd($d),
    je = vd(ae);
  var ke = function (a) {
    this.i = K(a);
  };
  y(ke, V);
  var le = function () {
      var a = new ke();
      return nd(a, 1, 0);
    },
    me = function (a) {
      var b = Number;
      var c = c === void 0 ? "0" : c;
      var d = L(a, 1);
      var e = !0;
      e = e === void 0 ? !1 : e;
      var f = typeof d;
      d =
        d == null
          ? d
          : f === "bigint"
            ? String(bc(64, d))
            : hc(d)
              ? f === "string"
                ? oc(d)
                : e
                  ? pc(d)
                  : sc(d)
              : void 0;
      b = b(d != null ? d : c);
      a = gd(a, 2);
      return new Date(b * 1e3 + a / 1e6);
    };
  var ne = function (a) {
      if (/[^01]/.test(a))
        throw Error("Input bitstring " + a + " is malformed!");
      this.j = a;
      this.g = 0;
    },
    qe = function (a) {
      var b = W(a, 16);
      return !!W(a, 1) === !0
        ? ((a = oe(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error("ID " + c + " is past MaxVendorId " + b + "!");
          }),
          a)
        : pe(a, b);
    },
    oe = function (a) {
      for (var b = W(a, 12), c = []; b--; ) {
        var d = !!W(a, 1) === !0,
          e = W(a, 16);
        if (d) for (d = W(a, 16); e <= d; e++) c.push(e);
        else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    pe = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++)
        if (W(a, 1)) {
          var f = e + 1;
          if (c && c.indexOf(f) === -1)
            throw Error("ID: " + f + " is outside of allowed values!");
          d.push(f);
        }
      return d;
    },
    W = function (a, b) {
      if (a.g + b > a.j.length)
        throw Error("Requested length " + b + " is past end of string.");
      var c = a.j.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2);
    };
  ne.prototype.skip = function (a) {
    this.g += a;
  };
  var se = function (a) {
      try {
        var b = Za(a.split(".")[0])
            .map(function (d) {
              return ((q = d.toString(2)), w(q, "padStart")).call(q, 8, "0");
            })
            .join(""),
          c = new ne(b);
        b = {};
        b.tcString = a;
        b.gdprApplies = !0;
        c.skip(78);
        b.cmpId = W(c, 12);
        b.cmpVersion = W(c, 12);
        c.skip(30);
        b.tcfPolicyVersion = W(c, 6);
        b.isServiceSpecific = !!W(c, 1);
        b.useNonStandardStacks = !!W(c, 1);
        b.specialFeatureOptins = re(pe(c, 12, je), je);
        b.purpose = {
          consents: re(pe(c, 24, ie), ie),
          legitimateInterests: re(pe(c, 24, ie), ie),
        };
        b.purposeOneTreatment = !!W(c, 1);
        b.publisherCC =
          String.fromCharCode(he + W(c, 6)) + String.fromCharCode(he + W(c, 6));
        b.vendor = {
          consents: re(qe(c), null),
          legitimateInterests: re(qe(c), null),
        };
        return b;
      } catch (d) {
        return null;
      }
    },
    re = function (a, b) {
      var c = {};
      if (Array.isArray(b) && b.length !== 0) {
        b = A(b);
        for (var d = b.next(); !d.done; d = b.next())
          (d = d.value), (c[d] = a.indexOf(d) !== -1);
      } else
        for (a = A(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
      delete c[0];
      return c;
    };
  var te = function (a) {
    this.i = K(a);
  };
  y(te, V);
  var ue = function (a, b) {
    var c = c === void 0 ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  };
  function ve(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Yd("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Array.prototype.indexOf.call(g, e, void 0);
          h >= 0 && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      e.addEventListener && e.addEventListener("load", f, !1);
      e.addEventListener && e.addEventListener("error", f, !1);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var xe = function (a) {
      var b = b === void 0 ? !1 : b;
      var c =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
      Ud(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      we(c, b);
    },
    we = function (a, b) {
      var c = window;
      b = b === void 0 ? !1 : b;
      var d = d === void 0 ? !1 : d;
      c.fetch
        ? ((b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          }),
          d &&
            ((b.mode = "cors"),
            "setAttributionReporting" in XMLHttpRequest.prototype
              ? (b.attributionReporting = {
                  eventSourceEligible: "true",
                  triggerEligible: "false",
                })
              : (b.headers = {
                  "Attribution-Reporting-Eligible": "event-source",
                })),
          c.fetch(a, b))
        : ve(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  function ye(a, b) {
    try {
      var c = function (d) {
        var e = {};
        return [((e[d.Z] = d.W), e)];
      };
      return JSON.stringify([
        a
          .filter(function (d) {
            return d.M;
          })
          .map(c),
        J(b),
        a
          .filter(function (d) {
            return !d.M;
          })
          .map(c),
      ]);
    } catch (d) {
      return ze(d, b), "";
    }
  }
  function ze(a, b) {
    try {
      var c = a instanceof Error ? a : Error(String(a)),
        d = c.toString();
      c.name && d.indexOf(c.name) == -1 && (d += ": " + c.name);
      c.message && d.indexOf(c.message) == -1 && (d += ": " + c.message);
      if (c.stack)
        a: {
          var e = c.stack;
          a = d;
          try {
            e.indexOf(a) == -1 && (e = a + "\n" + e);
            for (var f; e != f; )
              (f = e),
                (e = e.replace(
                  RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
                  "$1",
                ));
            d = e.replace(RegExp("\n *", "g"), "\n");
            break a;
          } catch (g) {
            d = a;
            break a;
          }
          d = void 0;
        }
      xe({ m: d, b: U(b, 1) || null, v: T(b, 2) || null });
    } catch (g) {}
  }
  var Ae = function (a, b) {
    var c = new te();
    a = P(c, 1, H(a), 0);
    b = od(a, 2, b);
    this.o = Jc(b);
  };
  var Be = function (a) {
    this.i = K(a);
  };
  y(Be, V);
  var De = function (a, b) {
      return Q(a, 3, Ce, b == null ? b : fc(b));
    },
    Ce = [1, 2, 3];
  var Ee = function (a) {
    this.i = K(a);
  };
  y(Ee, V);
  var Ge = function (a, b) {
      return Q(a, 2, Fe, tc(b));
    },
    Fe = [2, 4];
  var He = function (a) {
    this.i = K(a);
  };
  y(He, V);
  var Ie = function (a) {
      var b = new He();
      return od(b, 1, a);
    },
    Je = function (a, b) {
      return bd(a, 3, b);
    },
    Ke = function (a, b) {
      var c = a.i[D] | 0;
      Eb(c);
      c = ad(a, c, Be, 4, 2, !0);
      b = b != null ? b : new Be();
      c.push(b);
      c[D] = (b.i[D] | 0) & 2 ? c[D] & -9 : c[D] & -17;
      return a;
    };
  var Le = function (a) {
    this.i = K(a);
  };
  y(Le, V);
  var Me = function (a) {
    this.i = K(a);
  };
  y(Me, V);
  var Ne = function (a, b) {
      return P(a, 1, H(b), 0);
    },
    Oe = function (a, b) {
      return P(a, 2, H(b), 0);
    };
  var Pe = function (a) {
    this.i = K(a);
  };
  y(Pe, V);
  var Qe = [1, 2];
  var Re = function (a) {
    this.i = K(a);
  };
  y(Re, V);
  var Se = function (a, b) {
      return bd(a, 1, b);
    },
    Te = function (a, b) {
      return dd(a, 2, b);
    },
    Ue = function (a, b) {
      return Sc(a, 4, b, jc);
    },
    Ve = function (a, b) {
      return dd(a, 5, b);
    },
    We = function (a, b) {
      return P(a, 6, H(b), 0);
    };
  var Xe = function (a) {
    this.i = K(a);
  };
  y(Xe, V);
  var Ye = [1, 2, 3, 4, 6];
  var Ze = function (a) {
    this.i = K(a);
  };
  y(Ze, V);
  var $e = function (a) {
    this.i = K(a);
  };
  y($e, V);
  var af = [2, 3, 4];
  var bf = function (a) {
    this.i = K(a);
  };
  y(bf, V);
  var cf = [3, 4, 5],
    df = [6, 7];
  var ef = function (a) {
    this.i = K(a);
  };
  y(ef, V);
  var ff = [4, 5];
  var gf = function (a) {
    this.i = K(a);
  };
  y(gf, V);
  gf.prototype.getTagSessionCorrelator = function () {
    return jd(this, 2);
  };
  var jf = function (a) {
      var b = new gf();
      return cd(b, 4, hf, a);
    },
    hf = [4, 5, 7, 8, 9];
  var kf = function (a) {
    this.i = K(a);
  };
  y(kf, V);
  var lf = function (a) {
    this.i = K(a);
  };
  y(lf, V);
  var mf = [1, 2, 4, 5, 6, 8, 9, 10];
  var nf = function (a) {
    this.i = K(a);
  };
  y(nf, V);
  nf.prototype.getTagSessionCorrelator = function () {
    return jd(this, 2);
  };
  nf.prototype.ba = function (a) {
    return ld(this, 4, a);
  };
  var of = function (a) {
    this.i = K(a);
  };
  y(of, V);
  of.prototype.ab = function () {
    return gd(this, 2);
  };
  of.prototype.Za = function (a) {
    var b = Mc(this, 3, I, 3, !0);
    Fb(b, a);
    return b[a];
  };
  var pf = function (a) {
    this.i = K(a);
  };
  y(pf, V);
  var qf = function (a) {
    this.i = K(a);
  };
  y(qf, V);
  qf.prototype.getTagSessionCorrelator = function () {
    return jd(this, 1);
  };
  qf.prototype.ba = function (a) {
    return ld(this, 2, a);
  };
  var rf = function (a) {
    this.i = K(a);
  };
  y(rf, V);
  var sf = [1, 7],
    tf = [4, 6, 8];
  var vf = function (a) {
      this.g = a;
      this.Ra = new uf(this.g);
    },
    uf = function (a) {
      this.g = a;
      this.Ha = new wf(this.g);
    },
    wf = function (a) {
      this.g = a;
      this.outstream = new xf();
      this.request = new yf();
      this.threadYield = new zf();
      this.cb = new Af(this.g);
      this.gb = new Bf(this.g);
      this.nb = new Cf(this.g);
    },
    Af = function (a) {
      this.g = a;
    };
  Af.prototype.V = function (a) {
    this.g.C(
      Je(
        Ke(Ke(Ie("JwITQ"), De(new Be(), a.ka)), De(new Be(), a.ma)),
        Ge(new Ee(), Math.round(a.Y)),
      ),
    );
  };
  var Bf = function (a) {
    this.g = a;
  };
  Bf.prototype.V = function (a) {
    this.g.C(
      Je(
        Ke(Ke(Ie("Pn3Upd"), De(new Be(), a.ka)), De(new Be(), a.ma)),
        Ge(new Ee(), Math.round(a.Y)),
      ),
    );
  };
  var Cf = function (a) {
    this.g = a;
  };
  Cf.prototype.V = function (a) {
    var b = this.g,
      c = b.C,
      d = Ie("rkgGzc");
    var e = new Be();
    e = Q(e, 2, Ce, tc(a.source));
    d = Ke(d, e);
    e = new Be();
    e = Q(e, 2, Ce, tc(a.Ua));
    c.call(b, Je(Ke(d, e), Ge(new Ee(), Math.round(a.Y))));
  };
  var xf = function () {},
    yf = function () {},
    zf = function () {},
    Df = function () {
      Ae.apply(this, arguments);
      this.Ka = new vf(this);
    };
  y(Df, Ae);
  var Ef = function () {
    Df.apply(this, arguments);
  };
  y(Ef, Df);
  Ef.prototype.rb = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { M: !0, Z: 2, W: J(a) };
        }),
      ),
    );
  };
  Ef.prototype.qb = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { M: !0, Z: 29, W: J(a) };
        }),
      ),
    );
  };
  Ef.prototype.da = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { M: !0, Z: 4, W: J(a) };
        }),
      ),
    );
  };
  Ef.prototype.sb = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { M: !0, Z: 15, W: J(a) };
        }),
      ),
    );
  };
  Ef.prototype.C = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { M: !1, Z: 1, W: J(a) };
        }),
      ),
    );
  };
  var Ff = function (a, b) {
    if (u.globalThis.fetch)
      u.globalThis
        .fetch(a, {
          method: "POST",
          body: b,
          keepalive: b.length < 65536,
          credentials: "omit",
          mode: "no-cors",
          redirect: "follow",
        })
        .catch(function () {});
    else {
      var c = new XMLHttpRequest();
      c.open("POST", a, !0);
      c.send(b);
    }
  };
  var Gf = function (a, b, c, d, e, f, g, h) {
    Ef.call(this, a, b);
    this.S = c;
    this.R = d;
    this.T = e;
    this.O = f;
    this.P = g;
    this.H = h;
    this.g = [];
    this.j = null;
    this.J = !1;
  };
  y(Gf, Ef);
  var Hf = function (a) {
    a.j !== null && (clearTimeout(a.j), (a.j = null));
    if (a.g.length) {
      var b = ye(a.g, a.o);
      a.R(a.S + "?e=1", b);
      a.g = [];
    }
  };
  Gf.prototype.l = function () {
    var a = ua.apply(0, arguments),
      b = this;
    try {
      this.P && ye(this.g.concat(a), this.o).length >= 65536 && Hf(this),
        this.H &&
          !this.J &&
          ((this.J = !0),
          this.H.g(function () {
            Hf(b);
          })),
        this.g.push.apply(this.g, oa(a)),
        this.g.length >= this.O && Hf(this),
        this.g.length &&
          this.j === null &&
          (this.j = setTimeout(function () {
            Hf(b);
          }, this.T));
    } catch (c) {
      ze(c, this.o);
    }
  };
  var If = function (a, b, c, d, e, f) {
    Gf.call(
      this,
      a,
      b,
      "https://pagead2.googlesyndication.com/pagead/ping",
      Ff,
      c === void 0 ? 1e3 : c,
      d === void 0 ? 100 : d,
      (e === void 0 ? !1 : e) && !!u.globalThis.fetch,
      f,
    );
  };
  y(If, Gf);
  var Jf = function (a) {
      this.g = a;
      this.defaultValue = !1;
    },
    Kf = function (a, b) {
      this.g = a;
      this.defaultValue = b === void 0 ? 0 : b;
    };
  var Lf = new Jf(501898423),
    Mf = new Kf(695925491, 20),
    Nf = new Jf(45624259),
    Of = new Kf(635239304, 100),
    Pf = new Jf(662101539),
    Qf = new Kf(682056200, 100),
    Rf = new Kf(24),
    Sf = new (function (a, b) {
      b = b === void 0 ? [] : b;
      this.g = a;
      this.defaultValue = b;
    })(1934, [
      "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
    ]);
  var Tf = function (a) {
    this.i = K(a);
  };
  y(Tf, V);
  var Uf = function (a) {
    this.i = K(a);
  };
  y(Uf, V);
  var Vf = function (a) {
    this.i = K(a);
  };
  y(Vf, V);
  var Wf = function (a) {
    this.i = K(a);
  };
  y(Wf, V);
  var Xf = qd(Wf);
  var Yf = function (a) {
    this.g = a || { cookie: "" };
  };
  Yf.prototype.set = function (a, b, c) {
    var d = !1;
    if (typeof c === "object") {
      var e = c.Jb;
      d = c.Kb || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.ib;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    h === void 0 && (h = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (g ? ";path=" + g : "") +
      (h < 0
        ? ""
        : h == 0
          ? ";expires=" + new Date(1970, 1, 1).toUTCString()
          : ";expires=" + new Date(Date.now() + h * 1e3).toUTCString()) +
      (d ? ";secure" : "") +
      (e != null ? ";samesite=" + e : "");
  };
  Yf.prototype.get = function (a, b) {
    for (
      var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Ca(d[e]);
      if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  Yf.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  Yf.prototype.clear = function () {
    for (
      var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = Ca(a[f])),
        (d = e.indexOf("=")),
        d == -1
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--)
      (c = b[a]),
        this.get(c),
        this.set(c, "", { ib: 0, path: void 0, domain: void 0 });
  };
  function Zf(a) {
    a = $f(a);
    try {
      var b = a ? Xf(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? R(b, Vf, 4) || null : null;
  }
  function $f(a) {
    a = new Yf(a).get("FCCDCF", "");
    if (a)
      if (w(a, "startsWith").call(a, "%"))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      else b = a;
    else b = null;
    return b;
  }
  vd($d).map(function (a) {
    return Number(a);
  });
  vd(ae).map(function (a) {
    return Number(a);
  });
  var ag = function (a) {
      this.g = a;
    },
    cg = function (a) {
      a.__tcfapiPostMessageReady || bg(new ag(a));
    },
    bg = function (a) {
      a.j = function (b) {
        var c = typeof b.data === "string";
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__tcfapiCall;
        e &&
          (e.command === "ping" ||
            e.command === "addEventListener" ||
            e.command === "removeEventListener") &&
          (0, a.g.__tcfapi)(
            e.command,
            e.version,
            function (f, g) {
              var h = {};
              h.__tcfapiReturn =
                e.command === "removeEventListener"
                  ? { success: f, callId: e.callId }
                  : { returnValue: f, success: g, callId: e.callId };
              f = c ? JSON.stringify(h) : h;
              b.source &&
                typeof b.source.postMessage === "function" &&
                b.source.postMessage(f, b.origin);
              return f;
            },
            e.parameter,
          );
      };
      a.g.addEventListener("message", a.j);
      a.g.__tcfapiPostMessageReady = !0;
    };
  var dg = function (a) {
      this.g = a;
      this.j = null;
    },
    fg = function (a) {
      a.__uspapiPostMessageReady || eg(new dg(a));
    },
    eg = function (a) {
      a.j = function (b) {
        var c = typeof b.data === "string";
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__uspapiCall;
        e &&
          e.command === "getUSPData" &&
          a.g.__uspapi(e.command, e.version, function (f, g) {
            var h = {};
            h.__uspapiReturn = { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              typeof b.source.postMessage === "function" &&
              b.source.postMessage(f, b.origin);
            return f;
          });
      };
      a.g.addEventListener("message", a.j);
      a.g.__uspapiPostMessageReady = !0;
    };
  var gg = function (a) {
    this.i = K(a);
  };
  y(gg, V);
  var hg = function (a) {
    this.i = K(a);
  };
  y(hg, V);
  var ig = qd(hg);
  function jg(a, b) {
    function c(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 4));
      n = l(n);
      m = h(m.slice(6, 10));
      m = k(m);
      return "1" + n + m + "N";
    }
    function d(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 6));
      n = l(n);
      m = h(m.slice(6, 10));
      m = k(m);
      return "1" + n + m + "N";
    }
    function e(m) {
      if (m.length < 12) return null;
      var n = h(m.slice(0, 6));
      n = l(n);
      m = h(m.slice(8, 12));
      m = k(m);
      return "1" + n + m + "N";
    }
    function f(m) {
      if (m.length < 18) return null;
      var n = h(m.slice(0, 8));
      n = l(n);
      m = h(m.slice(12, 18));
      m = k(m);
      return "1" + n + m + "N";
    }
    function g(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 6));
      n = l(n);
      m = h(m.slice(6, 10));
      m = k(m);
      return "1" + n + m + "N";
    }
    function h(m) {
      for (var n = [], r = 0, t = 0; t < m.length / 2; t++)
        n.push(de(m.slice(r, r + 2))), (r += 2);
      return n;
    }
    function l(m) {
      return m.every(function (n) {
        return n === 1;
      })
        ? "Y"
        : "N";
    }
    function k(m) {
      return m.some(function (n) {
        return n === 1;
      })
        ? "Y"
        : "N";
    }
    if (a.length === 0) return null;
    a = a.split(".");
    if (a.length > 2) return null;
    a = ce(a[0]);
    var p = de(a.slice(0, 6));
    a = a.slice(6);
    if (p !== 1) return null;
    switch (b) {
      case 8:
        return c(a);
      case 10:
      case 12:
      case 9:
        return d(a);
      case 11:
        return e(a);
      case 7:
        return f(a);
      case 13:
        return g(a);
      default:
        return null;
    }
  }
  function kg(a, b) {
    var c = a.document,
      d = function () {
        if (!a.frames[b])
          if (c.body) {
            var e = Yd("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  }
  function lg(a) {
    return Ub(a) ? Number(a) : String(a);
  }
  var og = function (a) {
      this.g = a;
      var b = $f(this.g.document);
      try {
        var c = b ? Xf(b) : null;
      } catch (e) {
        c = null;
      }
      (b = c)
        ? ((c = R(b, Uf, 5) || null),
          (b = S(b, Tf, 7, O())),
          (b = mg(b != null ? b : [])),
          (c = { Da: c, Ga: b }))
        : (c = { Da: null, Ga: null });
      b = c;
      c = ng(b.Ga);
      b = b.Da;
      if (b != null && I(L(b, 2)) != null && T(b, 2).length !== 0) {
        var d = Zc(b, ke, 1) !== void 0 ? R(b, ke, 1) : le();
        b = { uspString: T(b, 2), ha: me(d) };
      } else b = null;
      this.l =
        b && c
          ? c.ha > b.ha
            ? c.uspString
            : b.uspString
          : b
            ? b.uspString
            : c
              ? c.uspString
              : null;
      this.tcString =
        (c = Zf(a.document)) && I(L(c, 1)) != null ? T(c, 1) : null;
      this.j = (a = Zf(a.document)) && I(L(a, 2)) != null ? T(a, 2) : null;
    },
    rg = function (a) {
      a !== a.top ||
        a.__uspapi ||
        a.frames.__uspapiLocator ||
        ((a = new og(a)), pg(a), qg(a));
    },
    pg = function (a) {
      !a.l ||
        a.g.__uspapi ||
        a.g.frames.__uspapiLocator ||
        ((a.g.__uspapiManager = "fc"),
        kg(a.g, "__uspapiLocator"),
        za(
          "__uspapi",
          function (b, c, d) {
            typeof d === "function" &&
              b === "getUSPData" &&
              d({ version: 1, uspString: a.l }, !0);
          },
          a.g,
        ),
        fg(a.g));
    },
    mg = function (a) {
      a = w(a, "find").call(a, function (b) {
        return b && U(b, 1) === 13;
      });
      if (a == null ? 0 : I(L(a, 2)) != null)
        try {
          return ig(T(a, 2));
        } catch (b) {}
      return null;
    },
    ng = function (a) {
      if (
        a == null ||
        I(L(a, 1)) == null ||
        T(a, 1).length === 0 ||
        S(a, gg, 2, O()).length === 0
      )
        return null;
      var b = T(a, 1);
      try {
        var c = fe(b.split("~")[0]);
        var d = w(b, "includes").call(b, "~") ? b.split("~").slice(1) : [];
      } catch (e) {
        return null;
      }
      a = S(a, gg, 2, O()).reduce(function (e, f) {
        return lg(jd(sg(e), 1)) > lg(jd(sg(f), 1)) ? e : f;
      });
      c = Mc(c, 3, lc, O()).indexOf(gd(a, 1));
      return c === -1 || c >= d.length
        ? null
        : { uspString: jg(d[c], gd(a, 1)), ha: me(sg(a)) };
    },
    sg = function (a) {
      return Zc(a, ke, 2) !== void 0 ? R(a, ke, 2) : le();
    },
    qg = function (a) {
      !a.tcString ||
        a.g.__tcfapi ||
        a.g.frames.__tcfapiLocator ||
        ((a.g.__tcfapiManager = "fc"),
        kg(a.g, "__tcfapiLocator"),
        (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
        za(
          "__tcfapi",
          function (b, c, d, e) {
            if (typeof d === "function")
              if (c && (c > 2.2 || c <= 1)) d(null, !1);
              else
                switch (((c = a.g.__tcfapiEventListeners), b)) {
                  case "ping":
                    d({
                      gdprApplies: !0,
                      cmpLoaded: !0,
                      cmpStatus: "loaded",
                      displayStatus: "disabled",
                      apiVersion: "2.2",
                      cmpVersion: 2,
                      cmpId: 300,
                    });
                    break;
                  case "addEventListener":
                    b = c.push(d) - 1;
                    a.tcString
                      ? ((e = se(a.tcString)),
                        (e.addtlConsent = a.j != null ? a.j : void 0),
                        (e.cmpStatus = "loaded"),
                        (e.eventStatus = "tcloaded"),
                        b != null && (e.listenerId = b),
                        (b = e))
                      : (b = null);
                    d(b, !0);
                    break;
                  case "removeEventListener":
                    e !== void 0 && c[e] ? ((c[e] = null), d(!0)) : d(!1);
                    break;
                  case "getInAppTCData":
                  case "getVendorList":
                    d(null, !1);
                    break;
                  case "getTCData":
                    d(null, !1);
                }
          },
          a.g,
        ),
        cg(a.g));
    };
  var tg = qa([
      "https://pagead2.googlesyndication.com/pagead/managed/dict/",
      "/",
      "",
    ]),
    ug = qa([
      "https://securepubads.g.doubleclick.net/pagead/managed/dict/",
      "/",
      "",
    ]);
  function vg(a, b, c, d) {
    try {
      if (Qa() && c.length) {
        var e = a.createElement("link"),
          f;
        if ((f = e.relList) != null && f.supports("compression-dictionary")) {
          var g = b ? Od(tg, c, "gpt") : Od(ug, c, "gpt");
          if (g instanceof yd)
            (e.href = Ad(g).toString()), (e.rel = "compression-dictionary");
          else {
            if (Gd.indexOf("compression-dictionary") === -1)
              throw Error(
                'TrustedResourceUrl href attribute required with rel="compression-dictionary"',
              );
            var h = Cd.test(g) ? g : void 0;
            h !== void 0 && ((e.href = h), (e.rel = "compression-dictionary"));
          }
          a.head.appendChild(e);
        }
      }
    } catch (l) {
      wg(d, { methodName: 1296, K: l });
    }
  }
  var xg = null;
  function yg(a, b) {
    var c = S(a, bf, 2, O());
    if (!c.length) return zg(a, b);
    a = U(a, 1);
    if (a === 1) {
      var d = yg(c[0], b);
      return d.success ? { success: !0, value: !d.value } : d;
    }
    c = Sa(c, function (h) {
      return yg(h, b);
    });
    switch (a) {
      case 2:
        var e;
        return (e =
          (d = w(c, "find").call(c, function (h) {
            return h.success && !h.value;
          })) != null
            ? d
            : w(c, "find").call(c, function (h) {
                return !h.success;
              })) != null
          ? e
          : { success: !0, value: !0 };
      case 3:
        var f, g;
        return (g =
          (f = w(c, "find").call(c, function (h) {
            return h.success && h.value;
          })) != null
            ? f
            : w(c, "find").call(c, function (h) {
                return !h.success;
              })) != null
          ? g
          : { success: !0, value: !1 };
      default:
        return { success: !1, errorType: 3 };
    }
  }
  function zg(a, b) {
    var c = Wc(a, cf);
    a: {
      switch (c) {
        case 3:
          var d = md(a, 3, cf);
          break a;
        case 4:
          d = md(a, 4, cf);
          break a;
        case 5:
          d = md(a, 5, cf);
          break a;
      }
      d = void 0;
    }
    if (!d) return { success: !1, errorType: 2 };
    b = (b = b[c]) && b[d];
    if (!b) return { success: !1, N: d, X: c, errorType: 1 };
    try {
      var e = b.apply;
      var f = Mc(a, 8, I, O());
      var g = e.call(b, null, oa(f));
    } catch (h) {
      return { success: !1, N: d, X: c, errorType: 2 };
    }
    e = U(a, 1);
    if (e === 4) return { success: !0, value: !!g };
    if (e === 5) return { success: !0, value: g != null };
    if (e === 12) a = T(a, Xc(a, df, 7));
    else
      a: {
        switch (c) {
          case 4:
            a = kd(a, Xc(a, df, 6));
            break a;
          case 5:
            a = T(a, Xc(a, df, 7));
            break a;
        }
        a = void 0;
      }
    if (a == null) return { success: !1, N: d, X: c, errorType: 3 };
    if (e === 6) return { success: !0, value: g === a };
    if (e === 9)
      return { success: !0, value: g != null && Da(String(g), a) === 0 };
    if (g == null) return { success: !1, N: d, X: c, errorType: 4 };
    switch (e) {
      case 7:
        c = g < a;
        break;
      case 8:
        c = g > a;
        break;
      case 12:
        c = Lb(a) && Lb(g) && new RegExp(a).test(g);
        break;
      case 10:
        c = g != null && Da(String(g), a) === -1;
        break;
      case 11:
        c = g != null && Da(String(g), a) === 1;
        break;
      default:
        return { success: !1, errorType: 3 };
    }
    return { success: !0, value: c };
  }
  function Ag(a, b) {
    return a
      ? b
        ? yg(a, b)
        : { success: !1, errorType: 1 }
      : { success: !0, value: !0 };
  }
  var Bg = function (a) {
    this.i = K(a);
  };
  y(Bg, V);
  var Cg = function (a) {
    this.i = K(a);
  };
  y(Cg, V);
  Cg.prototype.getValue = function () {
    return R(this, Bg, 2);
  };
  var Dg = function (a) {
    this.i = K(a);
  };
  y(Dg, V);
  var Eg = qd(Dg),
    Fg = [1, 2, 3, 6, 7, 8];
  var Gg = function (a, b, c) {
      var d = d === void 0 ? new If(6, "unknown", b) : d;
      this.C = a;
      this.o = c;
      this.j = d;
      this.g = [];
      this.l = a > 0 && Td() < 1 / a;
    },
    Ig = function (a, b, c, d, e, f) {
      if (a.l) {
        var g = Oe(Ne(new Me(), b), c);
        b = We(Te(Se(Ve(Ue(new Re(), d), e), g), a.g.slice()), f);
        b = jf(b);
        a.j.da(Hg(a, b));
        if (
          f === 1 ||
          f === 3 ||
          (f === 4 &&
            !a.g.some(function (h) {
              return U(h, 1) === U(g, 1) && U(h, 2) === c;
            }))
        )
          a.g.push(g), a.g.length > 100 && a.g.shift();
      }
    },
    Jg = function (a, b, c, d) {
      if (a.l) {
        var e = new Le();
        b = N(e, 1, kc(b));
        c = N(b, 2, kc(c));
        d = N(c, 3, H(d));
        c = new gf();
        d = cd(c, 8, hf, d);
        a.j.da(Hg(a, d));
      }
    },
    Kg = function (a, b, c, d, e) {
      if (a.l) {
        var f = new ef();
        b = bd(f, 1, b);
        c = N(b, 2, H(c));
        d = N(c, 3, kc(d));
        if (e.X === void 0) Q(d, 4, ff, H(e.errorType));
        else
          switch (e.X) {
            case 3:
              c = new $e();
              c = Q(c, 2, af, H(e.N));
              e = N(c, 1, H(e.errorType));
              cd(d, 5, ff, e);
              break;
            case 4:
              c = new $e();
              c = Q(c, 3, af, H(e.N));
              e = N(c, 1, H(e.errorType));
              cd(d, 5, ff, e);
              break;
            case 5:
              (c = new $e()),
                (c = Q(c, 4, af, H(e.N))),
                (e = N(c, 1, H(e.errorType))),
                cd(d, 5, ff, e);
          }
        e = new gf();
        e = cd(e, 9, hf, d);
        a.j.da(Hg(a, e));
      }
    },
    Hg = function (a, b) {
      var c = Date.now();
      c = w(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
      b = nd(b, 1, c);
      c = Zd(window);
      b = nd(b, 2, c);
      return nd(b, 6, a.C);
    };
  var X = function (a) {
    var b = "ja";
    if (a.ja && a.hasOwnProperty(b)) return a.ja;
    b = new a();
    return (a.ja = b);
  };
  var Lg = function () {
    var a = {};
    this.B = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
  };
  var Mg = /^true$/.test("false");
  function Ng(a, b) {
    switch (b) {
      case 1:
        return md(a, 1, Fg);
      case 2:
        return md(a, 2, Fg);
      case 3:
        return md(a, 3, Fg);
      case 6:
        return md(a, 6, Fg);
      case 8:
        return md(a, 8, Fg);
      default:
        return null;
    }
  }
  function Og(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return fd(a, 1);
      case 7:
        return T(a, 3);
      case 2:
        return kd(a, 2);
      case 3:
        return T(a, 3);
      case 6:
        return Mc(a, 4, I, O());
      case 8:
        return Mc(a, 4, I, O());
      default:
        return null;
    }
  }
  var Pg = td(function () {
    if (!Mg) return {};
    try {
      var a = a === void 0 ? window : a;
      try {
        var b = a.sessionStorage.getItem("GGDFSSK");
      } catch (c) {
        b = null;
      }
      if (b) return JSON.parse(b);
    } catch (c) {}
    return {};
  });
  function Qg(a, b, c, d) {
    var e = (d = d === void 0 ? 0 : d),
      f,
      g;
    X(Rg).l[e] =
      (g = (f = X(Rg).l[e]) == null ? void 0 : f.add(b)) != null
        ? g
        : new u.Set().add(b);
    e = Pg();
    if (e[b] != null) return e[b];
    b = Sg(d)[b];
    if (!b) return c;
    b = Eg(JSON.stringify(b));
    b = Tg(b);
    a = Og(b, a);
    return a != null ? a : c;
  }
  function Tg(a) {
    var b = X(Lg).B;
    if (b && Wc(a, Fg) !== 8) {
      var c = Ta(S(a, Cg, 5, O()), function (f) {
        f = Ag(R(f, bf, 1), b);
        return f.success && f.value;
      });
      if (c) {
        var d;
        return (d = c.getValue()) != null ? d : null;
      }
    }
    var e;
    return (e = R(a, Bg, 4)) != null ? e : null;
  }
  var Rg = function () {
    this.j = {};
    this.o = [];
    this.l = {};
    this.g = new u.Map();
  };
  function Ug(a, b, c) {
    return !!Qg(1, a, b === void 0 ? !1 : b, c);
  }
  function Vg(a, b, c) {
    b = b === void 0 ? 0 : b;
    a = Number(Qg(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function Wg(a, b, c) {
    b = b === void 0 ? "" : b;
    a = Qg(3, a, b, c);
    return typeof a === "string" ? a : b;
  }
  function Xg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Qg(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Yg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Qg(8, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Sg(a) {
    return X(Rg).j[a] || (X(Rg).j[a] = {});
  }
  function Zg(a, b) {
    var c = Sg(b);
    Ud(a, function (d, e) {
      if (c[e]) {
        d = Eg(JSON.stringify(d));
        var f = Xc(d, Fg, 8);
        if (ic(L(d, f)) != null) {
          var g = Eg(JSON.stringify(c[e]));
          f = Yc(d, Bg, 4);
          g = $c(g, Bg, 4);
          g = Mc(g, 4, I, O());
          ed(f, g);
        }
        c[e] = J(d);
      } else c[e] = d;
    });
  }
  function $g(a, b, c, d, e) {
    e = e === void 0 ? !1 : e;
    var f = [],
      g = [];
    b = A(b);
    for (var h = b.next(); !h.done; h = b.next()) {
      h = h.value;
      for (var l = Sg(h), k = A(a), p = k.next(); !p.done; p = k.next()) {
        p = p.value;
        var m = Wc(p, Fg),
          n = Ng(p, m);
        if (n) {
          var r = void 0,
            t = void 0,
            z = void 0;
          var v =
            (r =
              (z = X(Rg).g.get(h)) == null
                ? void 0
                : (t = z.get(n)) == null
                  ? void 0
                  : t.slice(0)) != null
              ? r
              : [];
          a: {
            r = n;
            t = m;
            z = new Xe();
            switch (t) {
              case 1:
                Q(z, 1, Ye, H(r));
                break;
              case 2:
                Q(z, 2, Ye, H(r));
                break;
              case 3:
                Q(z, 3, Ye, H(r));
                break;
              case 6:
                Q(z, 4, Ye, H(r));
                break;
              case 8:
                Q(z, 6, Ye, H(r));
                break;
              default:
                v = void 0;
                break a;
            }
            Sc(z, 5, v, jc);
            v = z;
          }
          if ((r = v))
            (t = void 0), (r = !((t = X(Rg).l[h]) == null || !t.has(n)));
          r && f.push(v);
          if (m === 8 && l[n])
            (v = Eg(JSON.stringify(l[n]))),
              (m = Yc(p, Bg, 4)),
              (v = $c(v, Bg, 4)),
              (v = Mc(v, 4, I, O())),
              ed(m, v);
          else {
            if ((m = v))
              (r = void 0), (m = !((r = X(Rg).g.get(h)) == null || !r.has(n)));
            m && g.push(v);
          }
          e ||
            ((m = n),
            (v = h),
            (r = d),
            (t = X(Rg)),
            t.g.has(v) || t.g.set(v, new u.Map()),
            t.g.get(v).has(m) || t.g.get(v).set(m, []),
            r && t.g.get(v).get(m).push(r));
          l[n] = J(p);
        }
      }
    }
    if (f.length || g.length)
      (a = d != null ? d : void 0),
        c.l &&
          c.o &&
          ((d = new Ze()),
          (f = dd(d, 2, f)),
          (g = dd(f, 3, g)),
          a && P(g, 1, kc(a), 0),
          (f = new gf()),
          (g = cd(f, 7, hf, g)),
          c.j.da(Hg(c, g)));
  }
  function ah(a, b) {
    b = Sg(b);
    a = A(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      var d = Eg(JSON.stringify(c)),
        e = Wc(d, Fg);
      (d = Ng(d, e)) && (b[d] || (b[d] = c));
    }
  }
  function bh() {
    return w(Object, "keys")
      .call(Object, X(Rg).j)
      .map(function (a) {
        return Number(a);
      });
  }
  function ch(a) {
    ((q = X(Rg).o), w(q, "includes")).call(q, a) || Zg(Sg(4), a);
  }
  function Y(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function Z(a, b, c) {
    return b[a] || c;
  }
  function dh(a) {
    Y(5, Ug, a);
    Y(6, Vg, a);
    Y(7, Wg, a);
    Y(8, Xg, a);
    Y(17, Yg, a);
    Y(13, ah, a);
    Y(15, ch, a);
  }
  function eh(a) {
    Y(
      4,
      function (b) {
        X(Lg).B = b;
      },
      a,
    );
    Y(
      9,
      function (b, c) {
        var d = X(Lg);
        d.B[3][b] == null && (d.B[3][b] = c);
      },
      a,
    );
    Y(
      10,
      function (b, c) {
        var d = X(Lg);
        d.B[4][b] == null && (d.B[4][b] = c);
      },
      a,
    );
    Y(
      11,
      function (b, c) {
        var d = X(Lg);
        d.B[5][b] == null && (d.B[5][b] = c);
      },
      a,
    );
    Y(
      14,
      function (b) {
        for (
          var c = X(Lg), d = A([3, 4, 5]), e = d.next();
          !e.done;
          e = d.next()
        )
          (e = e.value), w(Object, "assign").call(Object, c.B[e], b[e]);
      },
      a,
    );
  }
  function fh(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  var gh = function () {};
  gh.prototype.g = function () {};
  gh.prototype.j = function () {};
  gh.prototype.l = function () {
    return [];
  };
  var hh = function (a, b, c) {
    a.j = function (d, e) {
      Z(2, b, function () {
        return [];
      })(d, c, e);
    };
    a.l = function () {
      return Z(3, b, function () {
        return [];
      })(c);
    };
    a.g = function (d) {
      Z(16, b, function () {})(d, c);
    };
  };
  function ih(a) {
    X(gh).g(a);
  }
  function jh() {
    return X(gh).l();
  }
  function kh(a, b) {
    try {
      var c = a.split(".");
      a = B;
      for (var d = 0, e; a != null && d < c.length; d++)
        (e = a), (a = a[c[d]]), typeof a === "function" && (a = e[c[d]]());
      var f = a;
      if (typeof f === b) return f;
    } catch (g) {}
  }
  var lh = {},
    mh = {},
    nh = {},
    oh = {},
    ph =
      ((oh[3] =
        ((lh[8] = function (a) {
          try {
            return xa(a) != null;
          } catch (b) {}
        }),
        (lh[9] = function (a) {
          try {
            var b = xa(a);
          } catch (c) {
            return;
          }
          if ((a = typeof b === "function"))
            (b = b && b.toString && b.toString()),
              (a = typeof b === "string" && b.indexOf("[native code]") != -1);
          return a;
        }),
        (lh[10] = function () {
          return window === window.top;
        }),
        (lh[6] = function (a) {
          var b = jh();
          return Array.prototype.indexOf.call(b, Number(a), void 0) >= 0;
        }),
        (lh[27] = function (a) {
          a = kh(a, "boolean");
          return a !== void 0 ? a : void 0;
        }),
        (lh[60] = function (a) {
          try {
            return !!B.document.querySelector(a);
          } catch (b) {}
        }),
        (lh[80] = function (a) {
          try {
            return !!B.matchMedia(a).matches;
          } catch (b) {}
        }),
        (lh[69] = function (a) {
          var b = B.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((q = c.features()), w(q, "includes")).call(q, a)
          );
        }),
        (lh[70] = function (a) {
          var b = B.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((q = c.allowedFeatures()), w(q, "includes")).call(q, a)
          );
        }),
        (lh[79] = function (a) {
          var b = B.navigator;
          b = b === void 0 ? navigator : b;
          try {
            var c, d;
            var e = !!((c = b.protectedAudience) == null
              ? 0
              : (d = c.queryFeatureSupport) == null
                ? 0
                : d.call(c, a));
          } catch (f) {
            e = !1;
          }
          return e;
        }),
        lh)),
      (oh[4] =
        ((mh[3] = function () {
          return Wd();
        }),
        (mh[6] = function (a) {
          a = kh(a, "number");
          return a !== void 0 ? a : void 0;
        }),
        mh)),
      (oh[5] =
        ((nh[2] = function () {
          return window.location.href;
        }),
        (nh[3] = function () {
          try {
            return window.top.location.hash;
          } catch (a) {
            return "";
          }
        }),
        (nh[4] = function (a) {
          a = kh(a, "string");
          return a !== void 0 ? a : void 0;
        }),
        (nh[12] = function (a) {
          try {
            var b = kh(a, "string");
            if (b !== void 0) return atob(b);
          } catch (c) {}
        }),
        nh)),
      oh);
  function qh() {
    var a = a === void 0 ? B : a;
    return a.ggeac || (a.ggeac = {});
  }
  var rh = function (a) {
    this.i = K(a);
  };
  y(rh, V);
  rh.prototype.getId = function () {
    return gd(this, 1);
  };
  var sh = function (a) {
    this.i = K(a);
  };
  y(sh, V);
  var th = function (a) {
    return S(a, rh, 2, O());
  };
  var uh = function (a) {
    this.i = K(a);
  };
  y(uh, V);
  var vh = function (a) {
    this.i = K(a);
  };
  y(vh, V);
  var wh = function (a) {
    this.i = K(a);
  };
  y(wh, V);
  function xh(a) {
    var b = {};
    return yh(
      ((b[0] = new u.Map()), (b[1] = new u.Map()), (b[2] = new u.Map()), b),
      a,
    );
  }
  function yh(a, b) {
    for (
      var c = new u.Map(), d = A(w(a[1], "entries").call(a[1])), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = A(e.value);
      e = f.next().value;
      f = f.next().value;
      f = f[f.length - 1];
      c.set(e, f.Qa + f.La * f.Ma);
    }
    b = A(b);
    for (d = b.next(); !d.done; d = b.next())
      for (
        d = d.value, e = S(d, sh, 2, O()), e = A(e), f = e.next();
        !f.done;
        f = e.next()
      )
        if (((f = f.value), th(f).length !== 0)) {
          var g = hd(f, 8);
          if (U(f, 4) && !U(f, 13) && !U(f, 14)) {
            var h = void 0;
            g = (h = c.get(U(f, 4))) != null ? h : 0;
            h = hd(f, 1) * th(f).length;
            c.set(U(f, 4), g + h);
          }
          h = [];
          for (var l = 0; l < th(f).length; l++) {
            var k = {
              Qa: g,
              La: hd(f, 1),
              Ma: th(f).length,
              jb: l,
              aa: U(d, 1),
              ea: f,
              F: th(f)[l],
            };
            h.push(k);
          }
          zh(a[2], U(f, 10), h) ||
            zh(a[1], U(f, 4), h) ||
            zh(a[0], th(f)[0].getId(), h);
        }
    return a;
  }
  function zh(a, b, c) {
    if (!b) return !1;
    a.has(b) || a.set(b, []);
    var d;
    (d = a.get(b)).push.apply(d, oa(c));
    return !0;
  }
  function Ah() {
    var a = Zd(window);
    a = a === void 0 ? Td() : a;
    return function (b) {
      return Vd(b + " + " + a) % 1e3;
    };
  }
  var Bh = [12, 13, 20],
    Ch = function (a, b, c, d) {
      d = d === void 0 ? {} : d;
      var e = d.ia === void 0 ? !1 : d.ia;
      d = d.pb === void 0 ? [] : d.pb;
      this.L = a;
      this.A = c;
      this.o = {};
      this.ia = e;
      a = {};
      this.g = ((a[b] = []), (a[4] = []), a);
      this.j = {};
      this.l = {};
      var f = f === void 0 ? window : f;
      if (xg === null) {
        xg = "";
        try {
          b = "";
          try {
            b = f.top.location.hash;
          } catch (h) {
            b = f.location.hash;
          }
          if (b) {
            var g = b.match(/\bdeid=([\d,]+)/);
            xg = g ? g[1] : "";
          }
        } catch (h) {}
      }
      if ((f = xg))
        for (f = A(f.split(",") || []), g = f.next(); !g.done; g = f.next())
          (g = Number(g.value)) && (this.j[g] = !0);
      d = A(d);
      for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0;
    },
    Fh = function (a, b, c, d) {
      var e = [],
        f;
      if ((f = b !== 9)) a.o[b] ? (f = !0) : ((a.o[b] = !0), (f = !1));
      if (f) return Ig(a.A, b, c, e, [], 4), e;
      f = w(Bh, "includes").call(Bh, b);
      for (
        var g = [], h = [], l = A([0, 1, 2]), k = l.next();
        !k.done;
        k = l.next()
      ) {
        k = k.value;
        for (
          var p = A(w(a.L[k], "entries").call(a.L[k])), m = p.next();
          !m.done;
          m = p.next()
        ) {
          var n = A(m.value);
          m = n.next().value;
          n = n.next().value;
          var r = m,
            t = n;
          m = new Pe();
          n = t.filter(function (Bd) {
            return Bd.aa === b && a.j[Bd.F.getId()] && Dh(a, Bd);
          });
          if (n.length)
            for (m = A(n), n = m.next(); !n.done; n = m.next())
              h.push(n.value.F);
          else if (!a.ia) {
            n = void 0;
            k === 2 ? ((n = d[1]), Q(m, 2, Qe, H(r))) : (n = d[0]);
            var z = void 0,
              v = void 0;
            n =
              (v = (z = n) == null ? void 0 : z(String(r))) != null
                ? v
                : k === 2 && U(t[0].ea, 11) === 1
                  ? void 0
                  : d[0](String(r));
            if (n !== void 0) {
              r = A(t);
              for (t = r.next(); !t.done; t = r.next())
                if (((t = t.value), t.aa === b)) {
                  z = n - t.Qa;
                  var ta = t;
                  v = ta.La;
                  var sb = ta.Ma;
                  ta = ta.jb;
                  z < 0 ||
                    z >= v * sb ||
                    z % sb !== ta ||
                    !Dh(a, t) ||
                    ((z = U(t.ea, 13)),
                    z !== 0 &&
                      z !== void 0 &&
                      ((v = a.l[String(z)]),
                      v !== void 0 && v !== t.F.getId()
                        ? Jg(a.A, a.l[String(z)], t.F.getId(), z)
                        : (a.l[String(z)] = t.F.getId())),
                    h.push(t.F));
                }
              Wc(m, Qe) !== 0 && (P(m, 3, kc(n), 0), g.push(m));
            }
          }
        }
      }
      d = A(h);
      for (h = d.next(); !h.done; h = d.next())
        (h = h.value),
          (l = h.getId()),
          e.push(l),
          Eh(a, l, f ? 4 : c),
          $g(S(h, Dg, 2, O()), f ? bh() : [c], a.A, l);
      Ig(a.A, b, c, e, g, 1);
      return e;
    },
    Eh = function (a, b, c) {
      a.g[c] || (a.g[c] = []);
      a = a.g[c];
      w(a, "includes").call(a, b) || a.push(b);
    },
    Dh = function (a, b) {
      var c = X(Lg).B,
        d = Ag(R(b.ea, bf, 3), c);
      if (!d.success) return Kg(a.A, R(b.ea, bf, 3), b.aa, b.F.getId(), d), !1;
      if (!d.value) return !1;
      c = Ag(R(b.F, bf, 3), c);
      return c.success
        ? c.value
          ? !0
          : !1
        : (Kg(a.A, R(b.F, bf, 3), b.aa, b.F.getId(), c), !1);
    },
    Gh = function (a, b) {
      b = b
        .map(function (c) {
          return new uh(c);
        })
        .filter(function (c) {
          return !w(Bh, "includes").call(Bh, U(c, 1));
        });
      a.L = yh(a.L, b);
    },
    Hh = function (a, b) {
      Y(
        1,
        function (c) {
          a.j[c] = !0;
        },
        b,
      );
      Y(
        2,
        function (c, d, e) {
          return Fh(a, c, d, e);
        },
        b,
      );
      Y(
        3,
        function (c) {
          return (a.g[c] || []).concat(a.g[4]);
        },
        b,
      );
      Y(
        12,
        function (c) {
          return void Gh(a, c);
        },
        b,
      );
      Y(
        16,
        function (c, d) {
          return void Eh(a, c, d);
        },
        b,
      );
    };
  var Ih = function () {
    var a = {};
    this.g = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.j = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.H = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.l = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.C = function (b, c) {
      return a[b] != null ? c.concat(a[b]) : c;
    };
    this.o = function () {};
  };
  function Jh(a) {
    return X(Ih).g(a.g, a.defaultValue);
  }
  function Kh(a) {
    return X(Ih).j(a.g, a.defaultValue);
  }
  var Lh = function () {
      this.g = function () {};
    },
    Mh = function (a, b) {
      a.g = Z(14, b, function () {});
    };
  function Nh(a) {
    X(Lh).g(a);
  }
  var Oh, Ph, Qh, Rh, Sh, Th;
  function Uh(a) {
    var b = a.Ya;
    var c = a.B;
    var d = a.config;
    var e = a.Ta === void 0 ? qh() : a.Ta;
    var f = a.Ca === void 0 ? 0 : a.Ca;
    var g =
      a.A === void 0
        ? new Gg(
            (Rh = (Oh = R(b, vh, 5)) == null ? void 0 : id(Oh, 2)) != null
              ? Rh
              : 0,
            (Sh = (Ph = R(b, vh, 5)) == null ? void 0 : id(Ph, 4)) != null
              ? Sh
              : 0,
            (Th = (Qh = R(b, vh, 5)) == null ? void 0 : fd(Qh, 3)) != null
              ? Th
              : !1,
          )
        : a.A;
    a = a.L === void 0 ? xh(S(b, uh, 2, O(Gb))) : a.L;
    e.hasOwnProperty("init-done")
      ? (Z(12, e, function () {})(
          S(b, uh, 2, O()).map(function (h) {
            return J(h);
          }),
        ),
        Z(13, e, function () {})(
          S(b, Dg, 1, O()).map(function (h) {
            return J(h);
          }),
          f,
        ),
        c && Z(14, e, function () {})(c),
        Vh(f, e))
      : (Hh(new Ch(a, f, g, d), e),
        dh(e),
        eh(e),
        fh(e),
        Vh(f, e),
        $g(S(b, Dg, 1, O(Gb)), [f], g, void 0, !0),
        (Mg = Mg || !(!d || !d.la)),
        Nh(ph),
        c && Nh(c));
  }
  function Vh(a, b) {
    var c = (b = b === void 0 ? qh() : b);
    hh(X(gh), c, a);
    Wh(b, a);
    a = b;
    Mh(X(Lh), a);
    X(Ih).o();
  }
  function Wh(a, b) {
    var c = X(Ih);
    c.g = function (d, e) {
      return Z(5, a, function () {
        return !1;
      })(d, e, b);
    };
    c.j = function (d, e) {
      return Z(6, a, function () {
        return 0;
      })(d, e, b);
    };
    c.H = function (d, e) {
      return Z(7, a, function () {
        return "";
      })(d, e, b);
    };
    c.l = function (d, e) {
      return Z(8, a, function () {
        return [];
      })(d, e, b);
    };
    c.C = function (d, e) {
      return Z(17, a, function () {
        return [];
      })(d, e, b);
    };
    c.o = function () {
      Z(15, a, function () {})(b);
    };
  }
  var Xh = qa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    Yh = function () {
      var a = a === void 0 ? "jserror" : a;
      var b = b === void 0 ? 0.01 : b;
      var c = c === void 0 ? Od(Xh) : c;
      this.g = a;
      this.l = b;
      this.j = c;
    };
  var Zh,
    $h = 64;
  function ai() {
    try {
      return (
        Zh != null || (Zh = new Uint32Array(64)),
        $h >= 64 && (crypto.getRandomValues(Zh), ($h = 0)),
        Zh[$h++]
      );
    } catch (a) {
      return Math.floor(Math.random() * 4294967296);
    }
  }
  var bi = function () {
    var a;
    this.U = a =
      a === void 0
        ? {
            kb: ai() + (ai() & 2097151) * 4294967296,
            Wa: w(Number, "MAX_SAFE_INTEGER"),
          }
        : a;
  };
  function ci(a, b) {
    return b > 0 && a.kb * b <= a.Wa;
  }
  var di = function (a) {
    this.i = K(a);
  };
  y(di, V);
  function ei(a) {
    a = a === void 0 ? B : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function fi(a, b) {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    b.length < 2048 && b.push(a);
  }
  function gi(a, b) {
    var c = ei(b);
    c && fi({ label: a, type: 9, value: c }, b);
  }
  function hi(a, b, c) {
    var d = !1;
    d = d === void 0 ? !1 : d;
    var e = window,
      f = typeof queueMicrotask !== "undefined";
    return function () {
      var g = ua.apply(0, arguments);
      d &&
        f &&
        queueMicrotask(function () {
          e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
          e.google_rum_task_id_counter += 1;
        });
      var h = ei(),
        l = 3;
      try {
        var k = b.apply(this, g);
      } catch (p) {
        l = 13;
        if (!c) throw p;
        c(a, p);
      } finally {
        e.google_measure_js_timing &&
          h &&
          fi(
            w(Object, "assign").call(
              Object,
              {},
              {
                label: a.toString(),
                value: h,
                duration: (ei() || 0) - h,
                type: l,
              },
              d &&
                f && {
                  taskId: (e.google_rum_task_id_counter =
                    e.google_rum_task_id_counter || 1),
                },
            ),
            e,
          );
      }
      return k;
    };
  }
  function ii(a, b) {
    return hi(a, b, function (c, d) {
      var e = new Yh();
      var f = f === void 0 ? e.l : f;
      var g = g === void 0 ? e.g : g;
      Math.random() > f ||
        ((d.error && d.meta && d.id) || (d = new ue(d, { context: c, id: g })),
        (B.google_js_errors = B.google_js_errors || []),
        B.google_js_errors.push(d),
        B.error_rep_loaded ||
          ((f = B.document),
          (c = Yd("SCRIPT", f)),
          Fd(c, e.j),
          (e = f.getElementsByTagName("script")[0]) &&
            e.parentNode &&
            e.parentNode.insertBefore(c, e),
          (B.error_rep_loaded = !0)));
    });
  }
  function ji(a, b) {
    return b == null ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
  }
  function ki(a, b) {
    return "&" + a + "=" + b.toFixed(3);
  }
  function li() {
    var a = new u.Set();
    var b = window.googletag;
    b = (b == null ? 0 : b.apiReady) ? b : void 0;
    try {
      if (!b) return a;
      for (
        var c = b.pubads(), d = A(c.getSlots()), e = d.next();
        !e.done;
        e = d.next()
      )
        a.add(e.value.getSlotId().getDomId());
    } catch (f) {}
    return a;
  }
  function mi(a) {
    a = a.id;
    return (
      a != null &&
      (li().has(a) ||
        w(a, "startsWith").call(a, "google_ads_iframe_") ||
        w(a, "startsWith").call(a, "aswift"))
    );
  }
  function ni(a, b, c) {
    if (!a.sources) return !1;
    switch (oi(a)) {
      case 2:
        var d = pi(a);
        if (d)
          return c.some(function (f) {
            return qi(d, f);
          });
        break;
      case 1:
        var e = ri(a);
        if (e)
          return b.some(function (f) {
            return qi(e, f);
          });
    }
    return !1;
  }
  function oi(a) {
    if (!a.sources) return 0;
    a = a.sources.filter(function (b) {
      return b.previousRect && b.currentRect;
    });
    if (a.length >= 1) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function ri(a) {
    return si(a, function (b) {
      return b.currentRect;
    });
  }
  function pi(a) {
    return si(a, function (b) {
      return b.previousRect;
    });
  }
  function si(a, b) {
    return a.sources.reduce(function (c, d) {
      d = b(d);
      return c
        ? d && d.width * d.height !== 0
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function qi(a, b) {
    var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return c <= 0 || a <= 0
      ? !1
      : (c * a * 100) / ((b.right - b.left) * (b.bottom - b.top)) >= 50;
  }
  var ti = function () {
      var a = { Ea: !0 };
      a = a === void 0 ? { Ea: !1 } : a;
      this.l = this.j = this.T = this.R = this.J = 0;
      this.ya = this.va = Number.NEGATIVE_INFINITY;
      this.g = [];
      this.O = {};
      this.sa = 0;
      this.S = Infinity;
      this.qa =
        this.ta =
        this.ua =
        this.wa =
        this.Ba =
        this.C =
        this.Aa =
        this.ga =
        this.o =
          0;
      this.ra = !1;
      this.fa = this.P = this.H = 0;
      this.A = null;
      this.xa = !1;
      this.pa = function () {};
      var b = document.querySelector("[data-google-query-id]");
      this.za = b ? b.getAttribute("data-google-query-id") : null;
      this.Sa = a;
    },
    ui,
    vi,
    yi = function () {
      var a = new ti();
      if (Jh(Pf)) {
        var b = window;
        if (!b.google_plmetrics && window.PerformanceObserver) {
          b.google_plmetrics = !0;
          b = [
            "layout-shift",
            "largest-contentful-paint",
            "first-input",
            "longtask",
          ];
          a.Sa.Ea && b.push("event");
          b = A(b);
          for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = { type: c, buffered: !0 };
            c === "event" && (d.durationThreshold = 40);
            wi(a).observe(d);
          }
          xi(a);
        }
      }
    },
    wi = function (a) {
      a.A ||
        (a.A = new PerformanceObserver(
          ii(640, function (b) {
            zi(a, b);
          }),
        ));
      return a.A;
    },
    xi = function (a) {
      var b = ii(641, function () {
          var d = document;
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) === 2 && Ai(a);
        }),
        c = ii(641, function () {
          return void Ai(a);
        });
      document.addEventListener("visibilitychange", b);
      document.addEventListener("pagehide", c);
      a.pa = function () {
        document.removeEventListener("visibilitychange", b);
        document.removeEventListener("pagehide", c);
        wi(a).disconnect();
      };
    },
    Ai = function (a) {
      if (!a.xa) {
        a.xa = !0;
        wi(a).takeRecords();
        var b =
          "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
        window.LayoutShift &&
          ((b += ki("cls", a.J)),
          (b += ki("mls", a.R)),
          (b += ji("nls", a.T)),
          window.LayoutShiftAttribution &&
            ((b += ki("cas", a.C)),
            (b += ji("nas", a.wa)),
            (b += ki("was", a.Ba))),
          (b += ki("wls", a.ga)),
          (b += ki("tls", a.Aa)));
        window.LargestContentfulPaint &&
          ((b += ji("lcp", a.ua)), (b += ji("lcps", a.ta)));
        window.PerformanceEventTiming && a.ra && (b += ji("fid", a.qa));
        window.PerformanceLongTaskTiming &&
          ((b += ji("cbt", a.H)),
          (b += ji("mbt", a.P)),
          (b += ji("nlt", a.fa)));
        for (
          var c = 0,
            d = A(document.getElementsByTagName("iframe")),
            e = d.next();
          !e.done;
          e = d.next()
        )
          mi(e.value) && c++;
        b += ji("nif", c);
        c = window.google_unique_id;
        b += ji("ifi", typeof c === "number" ? c : 0);
        c = jh();
        b += "&eid=" + encodeURIComponent(c.join());
        b += "&top=" + (B === B.top ? 1 : 0);
        b += a.za ? "&qqid=" + encodeURIComponent(a.za) : ji("pvsid", Zd(B));
        window.googletag && (b += "&gpt=1");
        c = Math.min(
          a.g.length - 1,
          Math.floor((a.A ? a.sa : performance.interactionCount || 0) / 50),
        );
        c >= 0 && ((c = a.g[c].latency), c >= 0 && (b += ji("inp", c)));
        window.fetch(b, {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        });
        a.pa();
      }
    },
    Bi = function (a, b, c, d) {
      if (!b.hadRecentInput) {
        a.J += Number(b.value);
        Number(b.value) > a.R && (a.R = Number(b.value));
        a.T += 1;
        if ((c = ni(b, c, d))) (a.C += b.value), a.wa++;
        if (b.startTime - a.va > 5e3 || b.startTime - a.ya > 1e3)
          (a.va = b.startTime), (a.j = 0), (a.l = 0);
        a.ya = b.startTime;
        a.j += b.value;
        c && (a.l += b.value);
        a.j > a.ga &&
          ((a.ga = a.j), (a.Ba = a.l), (a.Aa = b.startTime + b.duration));
      }
    },
    zi = function (a, b) {
      var c = ui !== window.scrollX || vi !== window.scrollY ? [] : Ci,
        d = Di();
      b = A(b.getEntries());
      for (var e = b.next(), f = {}; !e.done; f = { D: void 0 }, e = b.next())
        switch (((f.D = e.value), (e = f.D.entryType), e)) {
          case "layout-shift":
            Bi(a, f.D, c, d);
            break;
          case "largest-contentful-paint":
            f = f.D;
            a.ua = Math.floor(f.renderTime || f.loadTime);
            a.ta = f.size;
            break;
          case "first-input":
            e = f.D;
            a.qa = Number((e.processingStart - e.startTime).toFixed(3));
            a.ra = !0;
            a.g.some(
              (function (g) {
                return function (h) {
                  return w(h, "entries").some(function (l) {
                    return (
                      g.D.duration === l.duration &&
                      g.D.startTime === l.startTime
                    );
                  });
                };
              })(f),
            ) || Ei(a, f.D);
            break;
          case "longtask":
            f = Math.max(0, f.D.duration - 50);
            a.H += f;
            a.P = Math.max(a.P, f);
            a.fa += 1;
            break;
          case "event":
            Ei(a, f.D);
            break;
          default:
            ac(e);
        }
    },
    Ei = function (a, b) {
      Fi(a, b);
      var c = a.g[a.g.length - 1],
        d = a.O[b.interactionId];
      if (d || a.g.length < 10 || b.duration > c.latency)
        d
          ? (w(d, "entries").push(b),
            (d.latency = Math.max(d.latency, b.duration)))
          : ((b = { id: b.interactionId, latency: b.duration, entries: [b] }),
            (a.O[b.id] = b),
            a.g.push(b)),
          a.g.sort(function (e, f) {
            return f.latency - e.latency;
          }),
          a.g.splice(10).forEach(function (e) {
            delete a.O[e.id];
          });
    },
    Fi = function (a, b) {
      b.interactionId &&
        ((a.S = Math.min(a.S, b.interactionId)),
        (a.o = Math.max(a.o, b.interactionId)),
        (a.sa = a.o ? (a.o - a.S) / 7 + 1 : 0));
    },
    Di = function () {
      var a = w(Array, "from")
          .call(Array, document.getElementsByTagName("iframe"))
          .filter(mi),
        b = []
          .concat(oa(li()))
          .map(function (c) {
            return document.getElementById(c);
          })
          .filter(function (c) {
            return c !== null;
          });
      ui = window.scrollX;
      vi = window.scrollY;
      return (Ci = [].concat(oa(a), oa(b)).map(function (c) {
        return c.getBoundingClientRect();
      }));
    },
    Ci = [];
  var Gi = function (a) {
    this.i = K(a);
  };
  y(Gi, V);
  Gi.prototype.getVersion = function () {
    return T(this, 2);
  };
  var Hi = function (a) {
    this.i = K(a);
  };
  y(Hi, V);
  var Ii = function (a, b) {
      return N(a, 2, xc(b));
    },
    Ji = function (a, b) {
      return N(a, 3, xc(b));
    },
    Ki = function (a, b) {
      return N(a, 4, xc(b));
    },
    Li = function (a, b) {
      return N(a, 5, xc(b));
    },
    Mi = function (a, b) {
      return N(a, 9, xc(b));
    },
    Ni = function (a, b) {
      return dd(a, 10, b);
    },
    Oi = function (a, b) {
      return N(a, 11, b == null ? b : fc(b));
    },
    Pi = function (a, b) {
      return N(a, 1, xc(b));
    },
    Qi = function (a, b) {
      return N(a, 7, b == null ? b : fc(b));
    };
  var Ri =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " ",
    );
  function Si(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Ti(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
          ? void 0
          : c.getHighEntropyValues) === "function"
    );
  }
  function Ui(a) {
    if (!Ti(a)) return null;
    var b = Si(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(Ri).then(function (c) {
      b.uach != null || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function Vi(a) {
    var b;
    return Oi(
      Ni(
        Li(
          Ii(
            Pi(
              Ki(
                Qi(
                  Mi(Ji(new Hi(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1,
                ),
                a.model || "",
              ),
              a.platform || "",
            ),
            a.platformVersion || "",
          ),
          a.uaFullVersion || "",
        ),
        ((b = a.fullVersionList) == null
          ? void 0
          : b.map(function (c) {
              var d = new Gi();
              d = N(d, 1, xc(c.brand));
              return N(d, 2, xc(c.version));
            })) || [],
      ),
      a.wow64 || !1,
    );
  }
  function Wi(a) {
    var b, c;
    return (c =
      (b = Ui(a)) == null
        ? void 0
        : b.then(function (d) {
            return Vi(d);
          })) != null
      ? c
      : null;
  }
  var Xi = function (a) {
    this.i = K(a);
  };
  y(Xi, V);
  var Yi = function (a) {
    this.i = K(a);
  };
  y(Yi, V);
  var Zi = function (a) {
    var b = new Yi();
    return bd(b, 1, a);
  };
  function $i(a, b, c) {
    try {
      Hb(!b._b_);
      var d = { d: J(a.data), p: a.lb };
      b._b_ = d;
    } catch (e) {
      wg(c, { methodName: 1298, K: e });
    }
  }
  var aj = function (a, b, c) {
      this.g = a;
      this.I = b;
      this.j = c;
    },
    wg = function (a, b) {
      var c = ci(a.I.U, 1e3),
        d = Kh(Mf),
        e = ci(a.I.U, d);
      if (c || e) {
        var f = a.j,
          g = f.Oa,
          h = f.Na,
          l = f.Ia,
          k = f.ba,
          p = f.ab;
        f = f.Za;
        k = k();
        var m = b.K;
        try {
          var n = Lb(m == null ? void 0 : m.name) ? m.name : "Unknown error";
        } catch (v) {
          n = "e.name threw";
        }
        try {
          var r = Lb(m == null ? void 0 : m.message)
            ? m.message
            : "Caught " + m;
        } catch (v) {
          r = "e.message threw";
        }
        try {
          var t = Lb(m == null ? void 0 : m.stack) ? m.stack : Error().stack;
          var z = t ? t.split(/\n\s*/) : [];
        } catch (v) {
          z = ["e.stack threw"];
        }
        t = z;
        z = new rf();
        z = nd(z, 5, 1e3);
        m = new pf();
        b = P(m, 1, H(b.methodName), 0);
        b = od(b, 2, n);
        b = od(b, 3, r);
        b = Sc(b, 4, t, wc);
        b = Jc(b);
        b = cd(z, 1, sf, b);
        n = new qf();
        g = nd(n, 1, g);
        g = Sc(g, 2, k, jc);
        h = od(g, 3, h);
        h = Jc(h);
        h = bd(b, 2, h);
        h = Ic(Jc(h));
        g = new of();
        l = od(g, 1, l);
        p = p == null ? void 0 : p();
        p = P(l, 2, kc(p), 0);
        f = f == null ? void 0 : f();
        f = Sc(p, 3, f, wc);
        f = Jc(f);
        f = cd(h, 4, tf, f);
        c && a.g.rb(f);
        e &&
          (nd(f, 5, d),
          (c = f.i),
          Vc(c, c[D] | 0, sf, 1),
          (c = Yc(f, pf, 1)),
          c != null && N(c, 4),
          a.g.qb(f));
      }
    };
  function bj(a) {
    var b = {};
    b = ((b[0] = Ah()), b);
    X(gh).j(a, b);
  }
  var cj = {},
    dj =
      ((cj[253] = !1),
      (cj[246] = []),
      (cj[150] = ""),
      (cj[263] = !1),
      (cj[36] = /^true$/.test("false")),
      (cj[264] = !1),
      (cj[172] = null),
      (cj[260] = void 0),
      (cj[251] = null),
      cj),
    ej = function () {
      this.g = !1;
    };
  function fj(a) {
    X(ej).g = !0;
    return dj[a];
  }
  function gj(a, b) {
    X(ej).g = !0;
    dj[a] = b;
  }
  var hj =
    /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
  function ij(a) {
    var b = a.Ja;
    var c = a.hb;
    var d = a.Pa;
    var e = a.fb;
    var f = a.Xa;
    var g = a.bb;
    var h = b ? !hj.test(b.src) : !0;
    a = {};
    b = {};
    var l = {};
    return (
      (l[3] =
        ((a[3] = function () {
          return !h;
        }),
        (a[59] = function () {
          var k = ua.apply(0, arguments),
            p = w(k, "includes"),
            m = String,
            n;
          var r = r === void 0 ? window : r;
          var t;
          r =
            (t =
              (n = Jd(r.location.href.match(Id)[3] || null)) == null
                ? void 0
                : n.split(".")) != null
              ? t
              : [];
          r.length < 2
            ? (n = null)
            : ((n = r[r.length - 1]),
              (n =
                n === "uk" || n === "br" || n === "nz"
                  ? r.length < 3
                    ? null
                    : Vd(r.splice(r.length - 3).join("."))
                  : Vd(r.splice(r.length - 2).join("."))));
          return p.call(k, m(n));
        }),
        (a[74] = function () {
          return w(ua.apply(0, arguments), "includes").call(
            ua.apply(0, arguments),
            String(Vd(window.location.href)),
          );
        }),
        (a[61] = function () {
          return e;
        }),
        (a[63] = function () {
          return e || g === ".google.ch";
        }),
        (a[73] = function (k) {
          return w(d, "includes").call(d, Number(k));
        }),
        a)),
      (l[4] =
        ((b[1] = function () {
          return f;
        }),
        (b[13] = function () {
          return c || 0;
        }),
        b)),
      (l[5] = {}),
      l
    );
  }
  function jj(a, b) {
    var c = fj(246);
    c = Fc(c);
    c = pd(wh, c);
    if (!S(c, Dg, 1, O()).length && S(a, Dg, 1, O()).length) {
      var d = S(a, Dg, 1, O());
      dd(c, 1, d);
    }
    !S(c, uh, 2, O()).length &&
      S(a, uh, 2, O()).length &&
      ((d = S(a, uh, 2, O())), dd(c, 2, d));
    Zc(c, vh, 5) === void 0 &&
      Zc(a, vh, 5) !== void 0 &&
      ((a = R(a, vh, 5)), bd(c, 5, a));
    gj(246, J(c));
    Uh({ Ya: c, B: ij(b), Ca: 2, config: { la: b.la } });
    b.Pa.forEach(ih);
  }
  var kj = function (a, b, c) {
    aj.call(this, a, b, c);
    this.j = c;
  };
  y(kj, aj);
  var lj = qa(["https://pagead2.googlesyndication.com/pagead/ppub_config"]),
    mj = qa(["https://securepubads.g.doubleclick.net/pagead/ppub_config"]);
  function nj(a, b, c, d, e) {
    a = a.location.host;
    var f = Ld(b.src, "domain");
    b = Ld(b.src, "network-code");
    if (a || f || b) {
      var g = new u.Map();
      a && g.set("ippd", a);
      f && g.set("pppd", f);
      b && g.set("pppnc", b);
      a = g;
    } else a = void 0;
    a
      ? ((c = c ? Od(lj) : Od(mj)), (c = Pd(c, a)), oj(c, d, e))
      : e(new u.globalThis.Error("no provided or inferred data"));
  }
  function oj(a, b, c) {
    var d = new u.globalThis.XMLHttpRequest();
    d.open("GET", a.toString(), !0);
    d.withCredentials = !1;
    d.onload = function () {
      d.status < 300
        ? (gi("13", window), b(d.status === 204 ? "" : d.responseText))
        : c(new u.globalThis.Error("resp:" + d.status));
    };
    d.onerror = function () {
      return void c(
        new u.globalThis.Error("s:" + d.status + " rs:" + d.readyState),
      );
    };
    d.send();
  }
  var pj = function (a, b, c) {
      this.I = a;
      this.oa = b;
      this.ca = c;
      this.g = [];
    },
    tj = function (a, b, c, d, e) {
      var f = e == null ? void 0 : T($c(e, rd, 1), 1);
      (f == null ? 0 : f.length) &&
      w(b.location.hostname, "includes").call(b.location.hostname, f)
        ? (qj(a), rj(a, { mb: e }))
        : ((q = ["http:", "https:"]), w(q, "includes")).call(
              q,
              b.location.protocol,
            )
          ? c
            ? (qj(a),
              nj(
                Sd(b),
                c,
                d,
                function (g) {
                  return void rj(a, { ob: g });
                },
                function (g) {
                  rj(a, { error: g });
                },
              ))
            : sj(a, 5)
          : sj(a, 4);
    },
    qj = function (a) {
      fj(260);
      gj(260, function (b) {
        a.j !== void 0 || a.l ? b(a.j, a.l) : a.g.push(b);
      });
    },
    rj = function (a, b) {
      var c = b.ob;
      var d = b.mb;
      b = b.error;
      a.j = c != null ? c : d == null ? void 0 : JSON.stringify(J(d));
      a.l = b;
      d = A(a.g);
      for (var e = d.next(); !e.done; e = d.next()) (e = e.value), e(a.j, a.l);
      a.g.length = 0;
      sj(a, b ? 6 : c ? 3 : 2);
    },
    sj = function (a, b) {
      var c = Kh(Qf);
      ci(a.I.U, c) &&
        a.oa.Ka.Ra.Ha.nb.V({
          Y: c,
          source: b,
          Ua: Ra()
            ? 1
            : Qa()
              ? 2
              : (La() ? 0 : C("Edge"))
                ? 3
                : Oa()
                  ? 4
                  : Na()
                    ? 5
                    : (!C("iPad") && !C("iPhone")) ||
                        Pa() ||
                        Qa() ||
                        (La() ? 0 : C("Coast")) ||
                        Oa() ||
                        !C("AppleWebKit")
                      ? Ma()
                        ? 6
                        : Pa()
                          ? 7
                          : C("Silk")
                            ? 8
                            : 0
                      : 9,
        });
      a = a.ca;
      var d = Kh(Qf);
      if (ci(a.I.U, d)) {
        var e = a.j,
          f = e.Ia,
          g = e.ba;
        c = e.Na;
        e = e.Oa;
        var h = new nf();
        e = nd(h, 2, e);
        f = od(e, 3, f);
        e = Math;
        h = e.trunc;
        a: {
          if (u.globalThis.performance) {
            var l = performance.timeOrigin + performance.now();
            if (w(Number, "isFinite").call(Number, l) && l > 0) break a;
          }
          l = Date.now();
          l = w(Number, "isFinite").call(Number, l) && l > 0 ? l : 0;
        }
        f = nd(f, 1, h.call(e, l));
        g = g();
        g = Sc(f, 4, g, jc);
        d = nd(g, 5, d);
        c = od(d, 6, c);
        d = new lf();
        g = new kf();
        b = N(g, 1, H(b));
        b = Jc(b);
        b = cd(d, 10, mf, b);
        b = Jc(b);
        b = bd(c, 7, b);
        b = Jc(b);
        a.g.sb(b);
      }
    };
  var uj = (function (a) {
      return function (b) {
        b = JSON.parse(b);
        if (!Array.isArray(b))
          throw Error(
            "Expected jspb data to be an array, got " + ya(b) + ": " + b,
          );
        vb(b, 34);
        return new a(b);
      };
    })(Xi),
    vj = (function (a) {
      return function () {
        var b;
        (b = a[nb]) || ((b = new a()), vb(b.i, 34), (b = a[nb] = b));
        return b;
      };
    })(Xi);
  function wj(a, b) {
    try {
      var c = Ib;
      if (!Lb(a)) {
        var d,
          e,
          f =
            (e =
              (d = typeof c === "function" ? c() : c) == null
                ? void 0
                : d.concat("\n")) != null
              ? e
              : "";
        throw Error(f + String(a));
      }
      return uj(a);
    } catch (g) {
      return wg(b, { methodName: 838, K: g }), vj();
    }
  }
  function xj() {
    var a;
    return (a = B.googletag) != null ? a : (B.googletag = { cmd: [] });
  }
  function yj(a, b) {
    var c = xj();
    c.hasOwnProperty(a) || (c[a] = b);
  }
  var zj = qa([
      "https://pagead2.googlesyndication.com/pagead/managed/js/gpt/",
      "/pubads_impl.js",
    ]),
    Aj = qa([
      "https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/",
      "/pubads_impl.js",
    ]);
  function Bj() {
    var a = sttc,
      b = Cj(),
      c = b.I,
      d = b.oa,
      e = b.ca;
    gb(function (v) {
      wg(e, { methodName: 1189, K: v });
    });
    b = xj();
    a = wj(a, e);
    Hb(!X(ej).g);
    w(Object, "assign").call(Object, dj, b._vars_);
    b._vars_ = dj;
    a &&
      (fd(a, 3) && gj(36, !0),
      T(a, 6) && gj(150, T(a, 6)),
      fd(a, 12) && gj(263, !0));
    var f = $c(a, wh, 1),
      g = {
        fb: fd(a, 5),
        hb: gd(a, 2),
        Pa: Mc(a, 10, lc, O()),
        Xa: gd(a, 7),
        bb: T(a, 6),
        la: fd(a, 4),
      },
      h = R(a, sd, 9),
      l = window,
      k = l.document;
    yj("_loaded_", !0);
    yj("cmd", []);
    var p,
      m = (p = Dj(k)) != null ? p : Ej(k);
    Fj(f, l, w(Object, "assign").call(Object, {}, { Ja: m }, g));
    try {
      yi();
    } catch (v) {}
    gi("1", l);
    p = Gj(m);
    f = (m == null ? void 0 : m.crossOrigin) === "anonymous";
    g = Kh(Of);
    if (ci(c.U, g)) {
      var n = d.Ka.Ra.Ha;
      n.gb.V({
        Y: g,
        ka: (m == null ? void 0 : m.crossOrigin) === "anonymous",
        ma: Hj(m),
      });
      n.cb.V({
        Y: g,
        ka: f,
        ma:
          Jd(p.toString().match(Id)[3] || null) ===
          "pagead2.googlesyndication.com",
      });
    }
    var r = !1;
    $i(
      {
        data: Jc(Zi(a)),
        lb: function () {
          return r;
        },
      },
      b,
      e,
    );
    g = !1;
    if (!Ij(k)) {
      n = "gpt-impl-" + Math.random();
      try {
        Hd(
          k,
          Md(p, { id: n, nonce: Ed(document), Fa: f ? "anonymous" : void 0 }),
        );
      } catch (v) {}
      k.getElementById(n) && (Jh(Lf) ? (g = !0) : (b._loadStarted_ = !0));
    }
    if (Jh(Lf) ? !g : !b._loadStarted_) {
      g = Yd("SCRIPT");
      Fd(g, p);
      g.async = !0;
      f && (g.crossOrigin = "anonymous");
      p = k.body;
      f = k.documentElement;
      var t, z;
      ((z = (t = k.head) != null ? t : p) != null ? z : f).appendChild(g);
      Jh(Lf) || (b._loadStarted_ = !0);
    }
    if (l === l.top)
      try {
        rg(l, $c(a, di, 13));
      } catch (v) {
        wg(e, { methodName: 1209, K: v });
      }
    tj(new pj(c, d, e), l, m, Hj(m), h);
    Jh(Nf) &&
      Jj(l, function () {
        r = !0;
      });
    vg(l.document, Hj(m), T(a, 14), e);
  }
  function Jj(a, b) {
    var c = function (d) {
      (d.data != null && d.data !== "") ||
        d.origin.indexOf("android-app://") !== 0 ||
        (b(), a.removeEventListener("message", c));
    };
    a.addEventListener("message", c);
  }
  function Cj() {
    var a = Zd(window),
      b = new bi(),
      c = new If(11, "m202503050101", 1e3);
    return {
      oa: c,
      I: b,
      ca: new kj(c, b, {
        Oa: a,
        Na: window.document.URL,
        Ia: "m202503050101",
        ba: jh,
      }),
    };
  }
  function Dj(a) {
    return (a = a.currentScript) ? a : null;
  }
  function Ej(a) {
    var b;
    a = A((b = a.scripts) != null ? b : []);
    for (b = a.next(); !b.done; b = a.next())
      if (((b = b.value), w(b.src, "includes").call(b.src, "/tag/js/gpt")))
        return b;
    return null;
  }
  function Gj(a) {
    a = Hj(a) ? Od(zj, "m202503050101") : Od(Aj, "m202503050101");
    var b = Kh(Rf);
    return b ? Pd(a, new u.Map([["cb", b]])) : a;
  }
  function Fj(a, b, c) {
    gj(172, c.Ja);
    jj(a, c);
    bj(12);
    bj(5);
    (a = Wi(b)) &&
      a.then(function (d) {
        return void gj(251, JSON.stringify(J(d)));
      });
    Xd(X(Ih).l(Sf.g, Sf.defaultValue), b.document);
  }
  function Ij(a) {
    var b = Dj(a);
    return (
      a.readyState === "complete" ||
      a.readyState === "loaded" ||
      !(b == null || !b.async)
    );
  }
  function Hj(a) {
    return (
      !(a == null || !a.src) &&
      Jd(a.src.match(Id)[3] || null) === "pagead2.googlesyndication.com"
    );
  }
  try {
    Bj();
  } catch (a) {
    try {
      wg(Cj().ca, { methodName: 420, K: a });
    } catch (b) {}
  }
}).call(
  this,
  '[[[[null,7,null,[null,0.1]],[null,null,null,[],[[[4,null,83],[null,null,null,["1 bidderRequests.bids bidder userIdAsEids.source","2 bidderRequests.bids.userIdAsEids source provider","3 bidderRequests.bids bidder ortb2Imp.ext.tid?","5 bidderRequests.bids bidder mediaTypes.banner","6 bidderRequests.bids bidder mediaTypes.native?","7 bidderRequests.bids bidder mediaTypes.video","8 bidderRequests.bids bidder ortb2Imp.ext.gpid?","9 bidderRequests.bids bidder ortb2.site.content.data.ext.segment?","10 bidderRequests.bids bidder ortb2.site.page","11 bidderRequests.bids bidder ortb2.user.data.segment?","12 bidderRequests.bids bidder ortb2.user.data.ext.segtax?","13 bidsReceived adId creativeId","14 bidderRequests.bids.userIdAsEids source uids.ext.provider","15 bidderRequests.bids.userIdAsEids source uids.atype","16 bidderRequests.bids.userIdAsEids source uids.length","17 bidsReceived adId ttl","18 bidsReceived adId meta.primaryCatId","19 bidsReceived adId meta.secondaryCatIds"]]]],657770675],[null,659575329,null,null,[[[4,null,83],[null,1]]]],[null,612427114,null,null,[[[4,null,83],[null,100]]]],[null,663827948,null,[null,-1]],[null,659579380,null,[null,-1],[[[4,null,83],[null,5000]]]],[null,659579379,null,[null,-1],[[[4,null,83],[null,60000]]]],[null,null,null,[null,null,null,["1 dbm\/(ad|clkk)"]],[[[4,null,83],[null,null,null,["1 dbm\/(ad|clkk)","2 (adsrvr|adserver)\\\\.org\/bid\/","3 criteo.com\/(delivery|[a-z]+\/auction)","4 yahoo.com\/bw\/[a-z]+\/imp\/","5 (adnxs|adnxs-simple).com\/it","6 amazon-adsystem.com\/[a-z\/]+\/impb"]]]],655300591],[null,643045660,null,null,[[[4,null,83],[null,1]]]],[null,612427113,null,null,[[[4,null,83],[null,100]]]],[null,699982590,null,null,[[[4,null,83],[null,100]]]],[45681222,null,null,[]],[null,578655462,null,[null,1000]],[698519058,null,null,[1]],[667794963,null,null,[]],[691188989,null,null,[1]],[704442313,null,null,[1]],[null,632270607,null,[null,1000]],[null,680683506,null,[null,1000]],[null,625028672,null,[null,100]],[null,629733890,null,[null,1000]],[null,695925491,null,[null,20]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[715376897,null,null,[1]],[null,684553008,null,[null,100]],[45624259,null,null,[]],[45627954,null,null,[1]],[45646888,null,null,[]],[45622305,null,null,[1]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[null,716359135,null,[null,10]],[null,716359138,null,[null,50]],[null,716359132,null,[null,100]],[null,716359134,null,[null,1000]],[null,716359137,null,[null,0.25]],[null,716359136,null,[null,10]],[null,716359133,null,[null,5]],[629201869,null,null,[1]],[null,729624435,null,[null,10000]],[null,729624436,null,[null,500]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,["22814497764"]],[4,null,15,null,null,null,null,["6581"]],[4,null,15,null,null,null,null,["18190176"]],[4,null,15,null,null,null,null,["21881754602"]],[4,null,15,null,null,null,null,["6782"]],[4,null,15,null,null,null,null,["309565630"]],[4,null,15,null,null,null,null,["22306534072"]],[4,null,15,null,null,null,null,["7229"]],[4,null,15,null,null,null,null,["28253241"]],[4,null,15,null,null,null,null,["1254144"]],[4,null,15,null,null,null,null,["21732118914"]],[4,null,15,null,null,null,null,["5441"]],[4,null,15,null,null,null,null,["162717810"]],[4,null,15,null,null,null,null,["51912183"]],[4,null,15,null,null,null,null,["23202586"]],[4,null,15,null,null,null,null,["44520695"]],[4,null,15,null,null,null,null,["1030006"]],[4,null,15,null,null,null,null,["21830601346"]],[4,null,15,null,null,null,null,["23081961"]],[4,null,15,null,null,null,null,["21880406607"]],[4,null,15,null,null,null,null,["93656639"]],[4,null,15,null,null,null,null,["1020351"]],[4,null,15,null,null,null,null,["5931321"]],[4,null,15,null,null,null,null,["3355436"]],[4,null,15,null,null,null,null,["22106840220"]],[4,null,15,null,null,null,null,["22875833199"]],[4,null,15,null,null,null,null,["32866417"]],[4,null,15,null,null,null,null,["8095840"]],[4,null,15,null,null,null,null,["71161633"]],[4,null,15,null,null,null,null,["22668755367"]],[4,null,15,null,null,null,null,["6177"]],[4,null,15,null,null,null,null,["147246189"]],[4,null,15,null,null,null,null,["22152718"]],[4,null,15,null,null,null,null,["21751243814"]],[4,null,15,null,null,null,null,["22013536576"]],[4,null,15,null,null,null,null,["4444"]],[4,null,15,null,null,null,null,["44890869"]],[4,null,15,null,null,null,null,["248415179"]],[4,null,15,null,null,null,null,["5293"]],[4,null,15,null,null,null,null,["21675937462"]],[4,null,15,null,null,null,null,["21726375739"]],[4,null,15,null,null,null,null,["1002212"]],[4,null,15,null,null,null,null,["6718395"]]]],[null,500]]]],[null,575880738,null,[null,10]],[null,586681283,null,[null,100]],[null,45679761,null,[null,30000]],[null,635239304,null,[null,100]],[null,618260805,null,[null,10]],[696192462,null,null,[1]],[null,532520346,null,[null,30]],[730538449,null,null,[1]],[null,630428304,null,[null,100]],[null,624264750,null,[null,-1]],[607106222,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,682056200,null,[null,100]],[null,376149757,null,[null,0.0025]],[570764855,null,null,[1]],[null,null,579921177,[null,null,"control_1\\\\.\\\\d"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[729130736,null,null,[1]],[684149381,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,"1-0-41"]],[null,626653285,null,[null,1000]],[null,626653286,null,[null,2]],[null,642407444,null,[null,10]],[686634849,null,null,[1]],[715057423,null,null,[1]],[724381445,null,null,[1]],[710747632,null,null,[1]],[723109738,null,null,[1]],[null,506394061,null,[null,100]],[null,733365673,null,[null,2],[[[4,null,59,null,null,null,null,["1282204929"]],[null,1]]]],[null,null,null,[null,null,null,["95335247"]],null,631604025],[null,694630217,null,[null,670]],[null,null,null,[],null,489],[715133891,null,null,[1]],[392065905,null,null,null,[[[3,[[4,null,68],[4,null,83]]],[1]]]],[680005527,null,null,[1]],[null,360245595,null,[null,500]],[null,715129739,null,[null,30]],[null,681088477,null,[null,100]],[676934885,null,null,[1],[[[4,null,59,null,null,null,null,["4214592683","3186860772","2930824068","4127372480","3985777170","2998550476","1946945953","2901923877","1931583037","733037847","287365726","396735883","2445204049"]],[]]]],[703552063,null,null,[1]],[703102329,null,null,[1]],[703102335,null,null,[1]],[703102334,null,null,[1]],[703102333,null,null,[1]],[703102330,null,null,[1]],[703102332,null,null,[1]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,["browsing-topics"]],[1,[[4,null,27,null,null,null,null,["isSecureContext"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,638742197,null,[null,500]],[null,514795754,null,[null,2]],[null,null,null,[null,null,null,["679602798","965728666","3786422334","4071951799"]],null,603422363],[590730356,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[716778109,null,null,[1]],[564724551,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[703571918,null,null,[1]],[647262744,null,null,[1]],[616896918,null,null,[1]],[638632925,null,null,[1]],[647331452,null,null,[1]],[647331451,null,null,[1]],[null,null,null,[null,null,null,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[12,null,null,null,4,null,"FLEDGE_GAM_EXTERNAL_TESTER",["navigator.userAgent"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,["1585821863","3976716532"]],59],[1,[[31080344],[31090560,[[null,514795754,null,[null,4]],[null,null,null,[null,null,null,["https:\/\/td.doubleclick.net","https:\/\/f.creativecdn.com"]],null,663711111],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95347233],[95348047,[[null,514795754,null,[null,4]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[10,[[31088080],[31088081]]],[50,[[31088251],[31088252]],null,122,null,null,null,null,null,null,null,null,null,4],[3,[[31089135],[31089136,[[null,607730666,null,[null,1]]]],[31089137,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[1,[[31089990],[31089992,[[null,514795754,null,[null,4]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[null,[[31090146,[[null,null,null,[null,null,null,["v","1-0-41"]],null,1]]],[31090147,[[null,null,2,[null,null,"1-0-41"]]]]]],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[1,[[4,null,63]]]]],59],[480,[[83321072],[83321073,[[null,612427113,null,[null,100]]]]],null,136],[10,[[83321253,[[null,612427113,null,[null,100]]]],[83321254,[[null,612427113,null,[null,100]]]]],null,136],[10,[[83321266,[[null,612427113,null,[null,100]]]],[83321267]],null,136],[null,[[95331143],[95331207]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[10,[[95332149],[95332150,[[616896918,null,null,[]]]]],null,59],[null,[[95335986],[95345212,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95346223,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95353416,[[null,514795754,null,[null,4]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[10,[[95347484],[95347486,[[null,682021787,null,[null,5]]]],[95347487],[95347488,[[null,682021787,null,[null,2]]]],[95347489,[[null,682021787,null,[null,5]]]],[95347490,[[null,682021787,null,[null,10]]]]],null,116],[1000,[[95347588,null,[2,[[12,null,null,null,12,null,".*318515657.*",["window.gmaSdk.as.eid"]],[1,[[12,null,null,null,12,null,".*318515661.*",["window.gmaSdk.as.eid"]]]]]]]],null,137,null,null,null,null,null,null,null,null,31],[1000,[[95347589,null,[2,[[12,null,null,null,12,null,".*318515661.*",["window.gmaSdk.as.eid"]],[1,[[12,null,null,null,12,null,".*318515657.*",["window.gmaSdk.as.eid"]]]]]]]],null,137,null,null,null,null,null,null,null,null,31],[50,[[95355140],[95355141,[[45646888,null,null,[1]]]]]],[null,[[676982960],[676982998]]]]],[12,[[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,59],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[1000,[[31084129,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31084130,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[50,[[31085776],[31085777,[[45624259,null,null,[1]]]]],null,114],[50,[[31085778,[[45624259,null,null,[1]]]]],[4,null,74,null,null,null,null,["1361264289","592241938","3780447416","2287011948","1020463802"]],114],[100,[[31086814],[31086815,[[null,665058368,null,[null,1]]]]]],[1,[[31087707]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[1,[[31087708]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[null,[[31087882],[31087883],[31087884]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[1,[[31089417],[31089418,[[662648078,null,null,[1]]]]],null,139,null,null,null,998,null,null,null,null,null,8],[1,[[31089419],[31089420]],[4,null,61],139,null,null,null,998,null,null,null,null,null,8],[50,[[31089438],[31089439,[[608664189,null,null,[1]]]]]],[10,[[31089588],[31089589,[[null,707091695,null,[null,1]]]],[31089590,[[null,707155067,null,[null,1]],[null,707091695,null,[null,1]]]]]],[1,[[31089681],[31089682,[[710738456,null,null,[1]]]]]],[10,[[31090021],[31090022,[[697841467,null,null,[1]]]]]],[10,[[31090345],[31090346,[[682414837,null,null,[1]]]]]],[10,[[31090457]],[2,[[1,[[4,null,6,null,null,null,null,["83321218"]]]],[1,[[4,null,6,null,null,null,null,["83321219"]]]]]],140,null,null,null,null,null,null,null,null,32],[10,[[31090458,[[700790209,null,null,[1]]]]],[2,[[1,[[4,null,6,null,null,null,null,["83321218"]]]],[1,[[4,null,6,null,null,null,null,["83321219"]]]]]],140,null,null,null,10,null,null,null,null,32],[100,[[31090591],[31090592,[[726064440,null,null,[1]]]]]],[100,[[31090593],[31090594,[[726064441,null,null,[1]]]]]],[1000,[[31090795,[[null,24,null,[null,31090795]]],[6,null,null,13,null,31090795]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31090796,[[null,24,null,[null,31090796]]],[6,null,null,13,null,31090796]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[10,[[31090811],[31090812,[[null,532520346,null,[null,120]]]]]],[1000,[[31090829,[[null,24,null,[null,31090829]]],[6,null,null,13,null,31090829]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31090830,[[null,24,null,[null,31090830]]],[6,null,null,13,null,31090830]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[100,[[31090847],[31090848,[[731413439,null,null,[1]]]]]],[100,[[31090849],[31090850,[[null,704895900,null,[null,1000]]]]]],[100,[[31090851],[31090852,[[731049851,null,null,[1]]]]]],[100,[[31090853],[31090854,[[730602489,null,null,[1]]]]]],[100,[[31090855],[31090856,[[null,732179314,null,[null,10]]]]]],[100,[[31090857],[31090858,[[730433099,null,null,[1]]]]]],[100,[[31090859],[31090860,[[732257404,null,null,[1]]]]]],[5,[[83321242],[83321243]]],[10,[[95347779],[95347780,[[676934885,null,null,[1]]]]]],[50,[[95352074],[95352075,[[713290237,null,null,[1]]]]]],[50,[[95353384],[95353385,[[667794963,null,null,[1]]]]]]]],[9,[[1000,[[31083577]],[4,null,13,null,null,null,null,["cxbbhbxm"]]]]],[2,[[10,[[31084489],[31084490]],null,null,null,null,32,null,null,142,1],[null,[[31084528],[31084529]],null,null,null,null,36,900,null,166,1],[1000,[[31084739,[[null,612427114,null,[null,100]]]]],[4,null,6,null,null,null,null,["31065645"]]],[10,[[31084865],[31084866]],null,null,null,null,35,null,null,166,1],[1000,[[31087377,null,[2,[[4,null,86],[4,null,6,null,null,null,null,["31065644"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087378,null,[2,[[4,null,86],[4,null,6,null,null,null,null,["31065645"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087490,null,[2,[[1,[[4,null,86]]],[4,null,6,null,null,null,null,["31065644"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087491,null,[2,[[1,[[4,null,86]]],[4,null,6,null,null,null,null,["31065645"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1,[[31090361,null,[12,null,null,null,13,null,".*userId.*",["installedModules"]]]]],[50,[[31090599],[31090600,[[null,null,null,null,[[[4,null,83],[null,null,null,["1 bidderRequests.bids bidder userIdAsEids.source","2 bidderRequests.bids.userIdAsEids source provider","3 bidderRequests.bids bidder ortb2Imp.ext.tid?","5 bidderRequests.bids bidder mediaTypes.banner","6 bidderRequests.bids bidder mediaTypes.native?","7 bidderRequests.bids bidder mediaTypes.video","8 bidderRequests.bids bidder ortb2Imp.ext.gpid?","9 bidderRequests.bids bidder ortb2.site.content.data.ext.segment?","10 bidderRequests.bids bidder ortb2.site.page","11 bidderRequests.bids bidder ortb2.user.data.segment?","12 bidderRequests.bids bidder ortb2.user.data.ext.segtax?","13 bidsReceived adId creativeId","14 bidderRequests.bids.userIdAsEids source uids.ext.provider","15 bidderRequests.bids.userIdAsEids source uids.atype","16 bidderRequests.bids.userIdAsEids source uids.length","17 bidsReceived adId ttl","18 bidsReceived adId meta.primaryCatId","19 bidsReceived adId meta.secondaryCatIds","20 adUnits adUnitId ortb2Imp.ext.data.adserver","21 adUnits adUnitId ortb2Imp.ext.data.pbadslot"]]]],657770675]]]],[4,null,83],129],[10,[[31090843],[31090844,[[725693774,null,null,[1]]]]],null,null,null,null,null,null,null,198,1],[1000,[[83321217]],[2,[[4,null,6,null,null,null,null,["83321217"]],[1,[[4,null,6,null,null,null,null,["31090458"]]]],[1,[[4,null,6,null,null,null,null,["31090457"]]]]]],140,null,null,null,null,null,null,null,null,32],[1000,[[83321218,[[700790209,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["83321218"]],[1,[[4,null,6,null,null,null,null,["31090458"]]]],[1,[[4,null,6,null,null,null,null,["31090457"]]]]]],140,null,null,null,null,null,null,null,null,32],[1000,[[83321219,[[700790209,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["83321219"]],[1,[[4,null,6,null,null,null,null,["31090458"]]]],[1,[[4,null,6,null,null,null,null,["31090457"]]]]]],140,null,null,null,null,null,null,null,null,32],[10,[[95342027],[95342028]],[4,null,83],129],[50,[[95349880],[95349881,[[null,null,null,null,[[[4,null,83],[null,null,null,["1 dbm\/(ad|clkk)","2 (adsrvr|adserver)\\\\.org\/bid\/","3 criteo.com\/(delivery|[a-z]+\/auction)","4 yahoo.com\/bw\/[a-z]+\/imp\/","5 (adnxs|adnxs-simple).com\/it","6 amazon-adsystem.com\/[a-z\/]+\/impb","7 temu.com\/api\/[a-z0-9]+\/ads","8 temu.com\/[a-z0-9]+\/impr"]]]],655300591]]]],[4,null,83],129],[50,[[95351361],[95351362,[[null,null,null,null,[[[4,null,83],[]]],655300591]]]],[4,null,83],129],[50,[[95351363],[95351364,[[null,null,null,null,[[[4,null,83],[]]],657770675]]]],[4,null,83],129]]],[27,[[50,[[31090502,null,[2,[[4,null,59,null,null,null,null,["1282204929","2762681000"]],[8,null,null,17,null,0]]]],[31090503,[[728394046,null,null,[1]]],[2,[[4,null,59,null,null,null,null,["1282204929","2762681000"]],[8,null,null,17,null,0]]]]]]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],31090829,null,null,null,".google.com.br",331,null,null,null,null,null,[0,0,0],"m202503060101"]',
);
