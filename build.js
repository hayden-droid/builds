(() => {
    var sn = Object.create;
    var xe = Object.defineProperty;
    var an = Object.getOwnPropertyDescriptor;
    var ln = Object.getOwnPropertyNames;
    var cn = Object.getPrototypeOf,
        dn = Object.prototype.hasOwnProperty;
    var Ft = e => xe(e, "__esModule", {
        value: !0
    });
    var b = (e, t) => () => (e && (t = e(e = 0)), t);
    var Z = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        H = (e, t) => {
            Ft(e);
            for (var o in t) xe(e, o, {
                get: t[o],
                enumerable: !0
            })
        },
        un = (e, t, o) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let n of ln(t)) !dn.call(e, n) && n !== "default" && xe(e, n, {
                    get: () => t[n],
                    enumerable: !(o = an(t, n)) || o.enumerable
                });
            return e
        },
        zt = e => un(Ft(xe(e != null ? sn(cn(e)) : {}, "default", e && e.__esModule && "default" in e ? {
            get: () => e.default,
            enumerable: !0
        } : {
            value: e,
            enumerable: !0
        })), e);
    var We = b(() => {
        i()
    });
    var Ee, Je = b(() => {
        i();
        Ee = e => {
            if (e ??= Object.keys(window).find(o => o.startsWith("webpackChunk")), !window[e]) return;
            let t;
            return window[e].push([
                [Symbol()], {},
                o => {
                    t = o
                }
            ]), window[e].pop(), [t.c ?? Object.fromEntries(Object.entries(t.m).map(([o]) => [o, {
                id: o,
                loaded: !0,
                exports: t(o)
            }])), t]
        }
    });
    var Ye = b(() => {
        i()
    });
    var Ht = b(() => {
        i();
        We();
        Je();
        Ye()
    });
    var Qe = b(() => {
        i();
        Ht();
        We();
        Je();
        Ye()
    });
    var ee, te, oe, ne, re, Gt, ie, $t, Xe = b(() => {
        i();
        ee = e => t => e.every(o => t[o] !== void 0), te = e => t => t.prototype && e.every(o => t.prototype[o] !== void 0), oe = (e, t = !0) => o => (t ? o.displayName : o.default?.displayName) === e, ne = e => t => e.every(o => Object.keys(t).some(n => n.toLowerCase().includes(o.toLowerCase()))), re = e => t => {
            let o = new RegExp(`(${e}$)|((\\w+\\()+${e}\\))`);
            if (o.test(t.displayName)) return !0;
            if (typeof t.$$typeof == "symbol" && t.Consumer === void 0 && (t.type || t.render)) {
                for (; typeof t.type == "object" || typeof t.render == "object";) t = t.type ?? t.render;
                if (o.test(t.type?.displayName) || o.test(t.render?.displayName)) return !0
            }
        }, Gt = e => typeof e == "object" || typeof e == "function", ie = e => t => Gt(t) && Object.values(t).some(o => Gt(o) && e.some(n => o?.[n] !== void 0)), $t = (e, t) => o => Object.entries(t).filter(([, n]) => n.toString().match(o)).map(([n]) => e[n]?.exports).filter(n => n)
    });
    var hn, gn, Kt, qt = b(() => {
        i();
        Xe();
        hn = (e, t) => {
            let o = [],
                n = a => t.forEach(([s, c], l) => {
                    c && !o[l] && (o[l] = []), s(a) && (c ? o[l].push(a) : o[l] || (o[l] = a))
                });
            for (let a in e) {
                let s = e[a].exports;
                !s || s === window || (s.default && s.__esModule && n(s.default), n(s))
            }
            return o
        }, gn = e => ({
            find: t => e.push([t, !1]),
            findAll: t => e.push([t, !0]),
            findByProps: (...t) => e.push([ee(t), !1]),
            findByPropsAll: (...t) => e.push([ee(t), !0]),
            findByPrototypes: (...t) => e.push([te(t), !1]),
            findByPrototypesAll: (...t) => e.push([te(t), !0]),
            findByNestedProps: (...t) => e.push([ie(t), !1]),
            findByNestedPropsAll: (...t) => e.push([ie(t), !0]),
            findByDisplayName: (t, o) => e.push([oe(t, o), !1]),
            findByDisplayNameAll: (t, o) => e.push([oe(t, o), !0]),
            findByDispNameDeep: t => e.push([re(t), !1]),
            findByDispNameDeepAll: t => e.push([re(t), !0]),
            findByKeyword: (...t) => e.push([ne(t), !1]),
            findByKeywordAll: (...t) => e.push([ne(t), !0])
        }), Kt = e => t => {
            let o = [],
                n = gn(o);
            return t(n), hn(e, o)
        }
    });
    var Vt, ve, et = b(() => {
        i();
        Xe();
        qt();
        Vt = (e, t = !0) => o => {
            let n = [];
            for (let a in e) {
                let s = e[a].exports;
                if (!(!s || s === window)) {
                    if (s.default && s.__esModule && o(s.default)) {
                        if (t) return s.default;
                        n.push(s.default)
                    }
                    if (o(s)) {
                        if (t) return s;
                        n.push(s)
                    }
                }
            }
            if (!t) return n
        }, ve = ([, e, t]) => {
            let o = Vt(e),
                n = Vt(e, !1),
                a = t ? $t(e, t.m) : () => {
                    throw new Error("findByCode does not work with this bundler")
                };
            return {
                batchFind: Kt(e),
                find: o,
                findAll: n,
                findByProps: (...s) => o(ee(s)),
                findByPropsAll: (...s) => n(ee(s)),
                findByPrototypes: (...s) => o(te(s)),
                findByPrototypesAll: (...s) => n(te(s)),
                findByNestedProps: (...s) => o(ie(s)),
                findByNestedPropsAll: (...s) => n(ie(s)),
                findByDisplayName: (s, c) => o(oe(s, c)),
                findByDisplayNameAll: (s, c) => n(oe(s, c)),
                findByDispNameDeep: s => o(re(s)),
                findByDispNameDeepAll: s => n(re(s)),
                findByKeyword: (...s) => o(ne(s)),
                findByKeywordAll: (...s) => n(ne(s)),
                findByCodeAll: a,
                findByCode: s => a(s)[0]
            }
        }
    });
    var tt = b(() => {
        i();
        Qe();
        et();
        Qe();
        et()
    });
    var W, ot = b(() => {
        i();
        tt();
        W = Ee("webpackChunkdiscord_app")[1]
    });
    var U, Zt = b(() => {
        i();
        C();
        U = (e, t) => {
            let o = !1,
                n, [a, s] = T(e, !1);
            return a.then(c => {
                o || (n = t(c))
            }), () => {
                o = !0, s?.(), n?.()
            }
        }
    });
    var nt, I, Ne = b(() => {
        i();
        nt = ["a", "b", "i"], I = new Map
    });

    function Wt(e, t, o, n, a) {
        let s = I.get(t)?.[e];
        if (!s) return a ? Reflect.construct(t[e], o, n) : t[e].apply(n, o);
        for (let d of s.b.values()) {
            let m = d.call(n, o);
            Array.isArray(m) && (o = m)
        }
        let c = (...d) => a ? Reflect.construct(s.o, d, n) : s.o.apply(n, d);
        for (let d of s.i.values()) {
            let m = c;
            c = (...u) => d.call(n, u, m)
        }
        let l = c(...o);
        for (let d of s.a.values()) l = d.call(n, o, l) ?? l;
        return l
    }
    var Jt = b(() => {
        i();
        Ne()
    });

    function rt(e, t, o, n) {
        let a = I.get(e),
            s = a?.[t];
        return s?.[n].has(o) ? (s[n].delete(o), nt.every(c => s[c].size === 0) && (Reflect.defineProperty(e, t, {
            value: s.o,
            writable: !0,
            configurable: !0
        }) || (e[t] = s.o), delete a[t]), Object.keys(a).length == 0 && I.delete(e), !0) : !1
    }

    function _e() {
        for (let [e, t] of I.entries())
            for (let o in t)
                for (let n of nt)
                    for (let a of t[o]?.[n].keys() ?? []) rt(e, o, a, n)
    }
    var it = b(() => {
        i();
        Ne()
    });
    var Pe, Yt = b(() => {
        i();
        Jt();
        Ne();
        it();
        Pe = e => (t, o, n, a = !1) => {
            if (typeof o[t] != "function") throw new Error(`${t} is not a function in ${o.constructor.name}`);
            I.has(o) || I.set(o, {});
            let s = I.get(o);
            if (!s[t]) {
                let d = o[t];
                s[t] = {
                    o: d,
                    b: new Map,
                    i: new Map,
                    a: new Map
                };
                let m = (D, v, N) => {
                        let de = Wt(t, o, v, D, N);
                        return a && l(), de
                    },
                    u = new Proxy(d, {
                        apply: (D, v, N) => m(v, N, !1),
                        construct: (D, v) => m(d, v, !0),
                        get: (D, v, N) => v == "toString" ? d.toString.bind(d) : Reflect.get(D, v, N)
                    });
                Reflect.defineProperty(o, t, {
                    value: u,
                    configurable: !0,
                    writable: !0
                }) || (o[t] = u)
            }
            let c = Symbol(),
                l = () => rt(o, t, c, e);
            return s[t][e].set(c, n), l
        }
    });
    var ue, J, S, Qt = b(() => {
        i();
        Yt();
        it();
        ue = Pe("b"), J = Pe("i"), S = Pe("a")
    });

    function k(e) {
        let t = document.createElement("style");
        return t.className = "MEMEITIZERCORD_INJECTED_CSS", t.textContent = e, document.head.appendChild(t), o => {
            o === void 0 ? t.remove() : t.textContent = o
        }
    }

    function Xt() {
        for (let e of document.getElementsByClassName("MEMEITIZERCORD_INJECTED_CSS")) e.remove()
    }
    var L = b(() => {
        i();
        Zt();
        Qt()
    });

    function T(e, t = !0) {
        let o = e();
        if (o !== void 0) return o = Promise.resolve(o), t ? o : [o, () => {}];
        let n = [];

        function a() {
            for (let c of n) c()
        }
        let s = new Promise(c => {
            n.push(ue("push", window.webpackChunkdiscord_app, ([
                [, l]
            ]) => {
                for (let d in l) n.push(S(d, l, () => {
                    o === void 0 && (o = e(), o !== void 0 && (a(), c(o)))
                }, !0))
            }))
        });
        return t ? s : [s, a]
    }
    var eo = b(() => {
        i();
        L()
    });
    var lt = {};
    H(lt, {
        batchFind: () => fe,
        find: () => at,
        findAll: () => wn,
        findAsync: () => T,
        findByCode: () => bn,
        findByCodeAll: () => Cn,
        findByDispNameDeep: () => xn,
        findByDispNameDeepAll: () => En,
        findByDisplayName: () => h,
        findByDisplayNameAll: () => pe,
        findByKeyword: () => vn,
        findByKeywordAll: () => Nn,
        findByNestedProps: () => _n,
        findByNestedPropsAll: () => Pn,
        findByProps: () => g,
        findByPropsAll: () => Dn,
        findByPrototypes: () => Sn,
        findByPrototypesAll: () => Mn,
        getModule: () => yn,
        modules: () => st,
        wpRequire: () => W
    });
    var st, yn, at, wn, bn, Cn, h, pe, xn, En, vn, Nn, _n, Pn, g, Dn, Sn, Mn, fe, C = b(() => {
        i();
        ot();
        tt();
        eo();
        st = W.c, yn = e => {
            for (let t in st) {
                let o = st[t];
                if (o?.exports === e) return o;
                if (o?.exports?.__esModule && o?.exports?.default === e) return o?.exports
            }
        }, {
            find: at,
            findAll: wn,
            findByCode: bn,
            findByCodeAll: Cn,
            findByDisplayName: h,
            findByDisplayNameAll: pe,
            findByDispNameDeep: xn,
            findByDispNameDeepAll: En,
            findByKeyword: vn,
            findByKeywordAll: Nn,
            findByNestedProps: _n,
            findByNestedPropsAll: Pn,
            findByProps: g,
            findByPropsAll: Dn,
            findByPrototypes: Sn,
            findByPrototypesAll: Mn,
            batchFind: fe
        } = ve([void 0, W.c, W])
    });
    var ut = {};
    H(ut, {
        Flux: () => Ln,
        FluxDispatcher: () => Se,
        React: () => r,
        ReactDOM: () => Le,
        Redux: () => An,
        channels: () => ct,
        constants: () => De,
        highlightjs: () => In,
        i18n: () => Me,
        uuid: () => dt,
        zustand: () => Tn
    });
    var De, ct, Ln, Se, Me, r, Le, An, Tn, In, dt, R = b(() => {
        i();
        C();
        [De, ct, Ln, Se, [, Me], r, Le, An, Tn, In] = fe(({
            findByProps: e,
            findByPropsAll: t,
            find: o
        }) => {
            e("API_HOST"), e("getVoiceChannelId"), e("connectStores"), e("_currentDispatchActionType"), t("_requestedLocale"), e("createElement"), e("hydrate"), e("createStore"), o(n => typeof n == "function" && n.toString().includes("[useStore, api] = create() is deprecated and will be removed in v4")), e("initHighlighting")
        }), dt = {
            v4: g("v1")
        }
    });
    var i = b(() => {
        R()
    });
    var Ae = Z(pt => {
        i();
        "use strict";
        Object.defineProperty(pt, "__esModule", {
            value: !0
        });
        pt.default = Object.freeze({
            GET: "GET",
            SET: "SET",
            DELETE: "DELETE",
            UPDATE: "UPDATE"
        })
    });
    var no = Z(me => {
        i();
        "use strict";
        var kn = me && me.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        var to = kn(Ae()),
            oo = class {
                constructor() {
                    this.listeners = Object.values(to.default).reduce((t, o) => (t[o] = new Set, t), {}), this.on = function(t, o) {
                        if (this.listeners[t].has(o)) throw Error(`This listener on ${t} already exists.`);
                        this.listeners[t].add(o)
                    }, this.once = function(t, o) {
                        let n = (a, s) => {
                            this.off(a, n), o(a, s)
                        };
                        this.on(t, n)
                    }, this.off = function(t, o) {
                        this.listeners[t].delete(o)
                    }, this.emit = function(t, o) {
                        for (let n of this.listeners[t]) n(t, o)
                    };
                    for (let t of Object.values(to.default)) this[t.toLowerCase()] = o => {
                        this.emit(t, o)
                    }
                }
            };
        me.default = oo
    });
    var ro = Z(he => {
        i();
        "use strict";
        var On = he && he.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(he, "__esModule", {
            value: !0
        });
        var Bn = On(no());

        function jn(e = {}, {
            nestArrays: t = !0
        } = {}) {
            let o = new Bn.default;

            function n(a, s, c) {
                return new Proxy(a, {
                    get(l, d) {
                        let m = [...c, d],
                            u = l[d];
                        return u != null ? (o.get({
                            path: m,
                            value: u
                        }), !t && Array.isArray(u) ? u : typeof u == "object" ? n(u, s, m) : u) : n(l[d] = {}, s, m)
                    },
                    set(l, d, m) {
                        return l[d] = m, o.set({
                            path: [...c, d],
                            value: m
                        }), !0
                    },
                    deleteProperty(l, d) {
                        return delete l[d] ? (o.delete({
                            path: [...c, d]
                        }), !0) : !1
                    },
                    has(l, d) {
                        return typeof l[d] == "object" && Object.keys(l[d]).length === 0 ? !1 : d in l
                    }
                })
            }
            return Object.assign({
                store: n(e, e, []),
                ghost: e
            }, o)
        }
        he.default = jn
    });
    var so = Z(G => {
        i();
        "use strict";
        var io = G && G.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(G, "__esModule", {
            value: !0
        });
        G.make = G.Events = void 0;
        var Un = Ae();
        Object.defineProperty(G, "Events", {
            enumerable: !0,
            get: function() {
                return io(Un).default
            }
        });
        var Rn = ro();
        Object.defineProperty(G, "make", {
            enumerable: !0,
            get: function() {
                return io(Rn).default
            }
        })
    });
    var yo = Z((Gs, go) => {
        i();
        ot();
        go.exports = Object.values(W.c).find(e => e.exports?.useState).exports
    });
    var wo = Z(ye => {
        i();
        "use strict";
        var Rr = ye && ye.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var xt = yo(),
            ae = Rr(Ae());

        function Fr(e, t = !1, o = () => !0) {
            let n = (0, xt.useRef)(e.ghost),
                [, a] = (0, xt.useReducer)(s => ~s, 0);
            return (0, xt.useEffect)(() => {
                function s(c, l) {
                    o(c, l) && a()
                }
                return e.on(ae.default.UPDATE, s), t || (e.on(ae.default.SET, s), e.on(ae.default.DELETE, s)), () => {
                    e.off(ae.default.UPDATE, s), t || (e.off(ae.default.SET, s), e.off(ae.default.DELETE, s))
                }
            }, []), e.ghost
        }
        ye.default = Fr
    });
    var bo = Z(le => {
        i();
        "use strict";
        var zr = le && le.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(le, "__esModule", {
            value: !0
        });
        le.useNest = void 0;
        var Hr = wo();
        Object.defineProperty(le, "useNest", {
            enumerable: !0,
            get: function() {
                return zr(Hr).default
            }
        })
    });
    i();
    i();
    i();
    C();
    R();
    var ht = {};
    H(ht, {
        idbKeyval: () => $,
        nests: () => _.default
    });
    i();
    var _ = zt(so());
    var $ = {};
    H($, {
        clear: () => Vn,
        createStore: () => lo,
        del: () => qn,
        entries: () => Jn,
        get: () => zn,
        getMany: () => $n,
        keys: () => Zn,
        promisifyRequest: () => O,
        set: () => Hn,
        setMany: () => Gn,
        update: () => Kn,
        values: () => Wn
    });
    i();
    i();

    function Fn() {
        if (!(!navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent)) || !indexedDB.databases) return Promise.resolve();
        let t;
        return new Promise(o => {
            let n = () => indexedDB.databases().finally(o);
            t = setInterval(n, 100), n()
        }).finally(() => clearInterval(t))
    }
    var ao = Fn;

    function O(e) {
        return new Promise((t, o) => {
            e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => o(e.error)
        })
    }

    function lo(e, t) {
        let o = ao().then(() => {
            let n = indexedDB.open(e);
            return n.onupgradeneeded = () => n.result.createObjectStore(t), O(n)
        });
        return (n, a) => o.then(s => a(s.transaction(t, n).objectStore(t)))
    }
    var ft;

    function B() {
        return ft || (ft = lo("keyval-store", "keyval")), ft
    }

    function zn(e, t = B()) {
        return t("readonly", o => O(o.get(e)))
    }

    function Hn(e, t, o = B()) {
        return o("readwrite", n => (n.put(t, e), O(n.transaction)))
    }

    function Gn(e, t = B()) {
        return t("readwrite", o => (e.forEach(n => o.put(n[1], n[0])), O(o.transaction)))
    }

    function $n(e, t = B()) {
        return t("readonly", o => Promise.all(e.map(n => O(o.get(n)))))
    }

    function Kn(e, t, o = B()) {
        return o("readwrite", n => new Promise((a, s) => {
            n.get(e).onsuccess = function() {
                try {
                    n.put(t(this.result), e), a(O(n.transaction))
                } catch (c) {
                    s(c)
                }
            }
        }))
    }

    function qn(e, t = B()) {
        return t("readwrite", o => (o.delete(e), O(o.transaction)))
    }

    function Vn(e = B()) {
        return e("readwrite", t => (t.clear(), O(t.transaction)))
    }

    function mt(e, t) {
        return e("readonly", o => (o.openCursor().onsuccess = function() {
            !this.result || (t(this.result), this.result.continue())
        }, O(o.transaction)))
    }

    function Zn(e = B()) {
        let t = [];
        return mt(e, o => t.push(o.key)).then(() => t)
    }

    function Wn(e = B()) {
        let t = [];
        return mt(e, o => t.push(o.value)).then(() => t)
    }

    function Jn(e = B()) {
        let t = [];
        return mt(e, o => t.push([o.key, o.value])).then(() => t)
    }
    L();
    i();
    i();
    async function gt(e) {
        let t = await $.get(`${e}_MEMEITIZERCORD_STORE`),
            o = _.default.make(t ?? {}),
            n = () => $.set(`${e}_MEMEITIZERCORD_STORE`, {
                ...o.ghost
            });
        return o.on(_.default.Events.SET, n), o.on(_.default.Events.DELETE, n), o
    }
    i();
    C();
    var bt = {};
    H(bt, {
        ErrorBoundary: () => M
    });
    i();
    i();
    R();
    C();
    i();
    R();
    var Yn = "Plugins",
        Qn = "Search...",
        Xn = "Delete",
        er = "Copied!",
        tr = "Invalid",
        or = "Installed",
        nr = "Install",
        rr = "Cancel",
        ir = "Confirm",
        sr = "{0} by {1}",
        ar = "Copy Link",
        lr = "What is this?",
        cr = "Are you sure?",
        dr = "Add Plugin",
        ur = "Open settings",
        pr = "Toggle updates",
        fr = "Failed to import plugin",
        mr = "https://example.com/plugin",
        hr = "Copied plugin URL to clipboard.",
        gr = "Oops, we had a fucky wucky. (Memeitizer-cord)",
        yr = "Are you sure you want to do that?",
        wr = "Do you want to remove this plugin?",
        br = "All of {}'s data will be deleted and cannot be recovered.",
        Cr = `This is a Memeitizer-cord feature. It allows you to install plugins straight from  chat.
Simply hit the install button on the embed.`,
        xr = "Plugin {} not found",
        Er = "Plugin {} already loaded",
        vr = "Plugin {} isn't loaded",
        Nr = "Plugin manifest not returning 200",
        _r = "Plugin not returning 200",
        Pr = "Plugin manifest cannot be parsed: {}",
        Dr = "Do you want to install this plugin?",
        Sr = "Memeitizer-cord plugins can run code on your computer and can be potentially dangerous. Only click confirm if you trust the plugin from `{}`.",
        Mr = "Plugin `{0}` will be disabled because it errored on eval: {1}",
        Lr = "Plugin `{0}` errored on load: {1}",
        Ar = "Plugin `{0}` errored on unload: {1}",
        yt = {
            PLUGINS: Yn,
            SEARCH: Qn,
            DELETE: Xn,
            COPIED: er,
            INVALID: tr,
            INSTALLED: or,
            INSTALL: nr,
            CANCEL: rr,
            CONFIRM: ir,
            BY: sr,
            COPY_LINK: ar,
            WHAT_IS_THIS: lr,
            ARE_YOU_SURE: cr,
            ADD_PLUGIN: dr,
            OPEN_SETTINGS: ur,
            TOGGLE_UPDATES: pr,
            FAILED_PLUGIN_IMPORT: fr,
            PLUGIN_URL_PLACEHOLDER: mr,
            COPIED_URL: hr,
            ERR_HEADER: gr,
            MODAL_DEFAULT: yr,
            REMOVE_PROMPT: wr,
            DELETE_DISCLAIMER: br,
            EMBEDS_WHATIS: Cr,
            PLUGIN_NOT_FOUND: xr,
            PLUGIN_LOADED: Er,
            PLUGIN_NOT_LOADED: vr,
            NO_MAN_200: Nr,
            NO_200: _r,
            NO_PARSE: Pr,
            INSTALL_PROMPT: Dr,
            CAN_BE_DANGEROUS: Sr,
            PLUGIN_EVAL_ERR: Mr,
            PLUGIN_LOAD_ERR: Lr,
            PLUGIN_UNLOAD_ERR: Ar
        };
    var Tr = "https://raw.githubusercontent.com/hayden-droid/builds/main/i18n/",
        Ir = ["ar", "de", "el", "es", "en-GB", "fr", "he", "hl", "hu", "it", "nl", "pl", "pt-BR", "ru", "tr", "vi"],
        kr = {
            "pt-BR": "pt_BR"
        },
        wt = {},
        co = () => {
            let e = Me._requestedLocale;
            wt[e] || !Ir.includes(e) || fetch(`${Tr}${kr[e]??e}.json`).then(async t => wt[e] = await t.json())
        };
    co();
    var Te = new Proxy(yt, {
            get: (e, t) => (co(), wt[Me._requestedLocale]?.[t] ?? yt[t])
        }),
        p = Te,
        E = (e, ...t) => {
            let o = -1;
            return Te[e].replaceAll(/{(\d+)?}/g, (n, a) => (o++, t[a ?? o]))
        },
        uo = (e, ...t) => {
            let o = [],
                n = "",
                a = 0;
            for (let s = 0; s < Te[e].length; s++) {
                n += Te[e][s];
                let c = n.match(/{(\d+)?}/);
                if (c) {
                    c.index !== 0 && o.push([-1, n.slice(0, c.index)]);
                    let l = parseInt(c[1] ?? a);
                    o.push([l, t[l]]), a++, n = ""
                }
            }
            return o.push([-1, n]), o
        };
    var Ie = g("BorderColors", "Colors"),
        po;
    fetch("https://reactjs.org/page-data/docs/error-decoder.html/page-data.json").then(async e => {
        po = JSON.parse((await e.json()).result.data.errorCodesJson.internal.contentDigest)
    });
    var M = class extends r.Component {
        constructor(t) {
            super(t);
            this.state = {
                hasErr: !1
            }
        }
        static getDerivedStateFromError(t) {
            return {
                hasErr: !0,
                errTxt: M.decodeError(t) ?? t.message
            }
        }
        static decodeError(t) {
            if (t instanceof Error) return po[t.message.match(/Minified React error #(\d+)/)?.[1]]
        }
        render() {
            return this.state.hasErr ? r.createElement("div", {
                className: "memeitizercord-error-handler"
            }, r.createElement("h1", {
                className: "memeitizercord-error-handler-title"
            }, p.ERR_HEADER), r.createElement("code", {
                className: "memeitizercord-error-handler-code"
            }, this.state.errTxt), r.createElement(Ie, {
                color: Ie.Colors.RED,
                size: Ie.Sizes.TINY,
                look: Ie.Looks.OUTLINED,
                onClick: () => this.setState({
                    errTxt: null,
                    hasErr: !1
                })
            }, "Retry")) : this.props.children
        }
    };
    var ke = g("ModalCloseButton"),
        fo = g("Sizes", "Tags"),
        mo = h("Flex"),
        {
            openModal: Or
        } = g("openModal", "openModalLazy"),
        se = (e, t) => Or(o => r.createElement(ke.ModalRoot, {
            transitionState: o.transitionState,
            size: "large",
            className: "memeitizercord-settings-modal"
        }, r.createElement(M, null, r.createElement(ke.ModalHeader, {
            separator: !1
        }, r.createElement(mo.Child, {
            basis: "auto",
            grow: 1,
            shrink: 1,
            wrap: !1
        }, r.createElement(fo, {
            tag: "h2",
            size: fo.Sizes.SIZE_20
        }, e)), r.createElement(mo.Child, {
            basis: "auto",
            grow: 0,
            shrink: 1,
            wrap: !1
        }, r.createElement(ke.ModalCloseButton, {
            onClick: o.onClose
        }))), r.createElement(ke.ModalContent, null, typeof t == "function" ? r.createElement(t) : t))));
    var Et = {};
    H(Et, {
        copyText: () => Y,
        findByDomNode: () => vo,
        findInReactTree: () => ho,
        findInTree: () => ge,
        getOwnerInstance: () => Co,
        getReactInstance: () => Oe,
        logger: () => w,
        sleep: () => xo,
        useFetchModule: () => je,
        useNest: () => A.useNest
    });
    i();
    i();

    function ge(e, t, {
        walkable: o = null,
        ignore: n = [],
        limit: a = 100
    } = {}) {
        let s = 0;

        function c(l, d, {
            walkable: m = null,
            ignore: u = []
        } = {}) {
            if (s += 1, !(s > a)) {
                if (typeof d == "string") {
                    if (l.hasOwnProperty(d)) return l[d]
                } else if (d(l)) return l;
                if (!!l) {
                    if (Array.isArray(l))
                        for (let x of l) {
                            let D = c(x, d, {
                                walkable: m,
                                ignore: u
                            });
                            if (D) return D
                        } else if (typeof l == "object") {
                            for (let x of Object.keys(l))
                                if (!(m != null && !m.includes(x)) && !u.includes(x)) try {
                                    let D = c(l[x], d, {
                                        walkable: m,
                                        ignore: u
                                    });
                                    if (D) return D
                                } catch {}
                        }
                }
            }
        }
        return c(e, t, {
            walkable: o,
            ignore: n
        })
    }
    i();
    var ho = (e, t) => ge(e, t, {
        walkable: ["props", "children", "child", "sibling"]
    });
    var w = {};
    H(w, {
        error: () => Ur,
        log: () => Br,
        warn: () => jr
    });
    i();
    var Ct = (e, t) => (...o) => console[e]("%cMemeitizer-cord%c", `background-color: ${t}; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold`, "", ...o),
        Br = Ct("log", "#7289da"),
        jr = Ct("warn", "#debf18"),
        Ur = Ct("error", "red");
    i();
    var A = zt(bo());
    i();

    function Y(e) {
        if (window.DiscordNative) {
            DiscordNative.clipboard.copy(e);
            return
        }
        navigator.clipboard.writeText(e).catch(() => {
            let t = document.createElement("textarea");
            t.style.visibility = "hidden", t.style.position = "fixed", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), t.focus(), t.select();
            try {
                document.execCommand("copy")
            } catch (o) {
                console.error(o)
            }
            document.body.removeChild(t)
        })
    }
    i();
    var Oe = e => e.__reactFiber$;
    i();
    var Co = e => {
        for (let t = Oe(e); t; t = t.return)
            if (t.stateNode?.forceUpdate) return t.stateNode
    };
    i();
    var xo = e => new Promise(t => setTimeout(t, e));
    i();
    R();
    var Be = {},
        Eo = {
            name: "Invalid module.",
            description: "This module does not exist.",
            author: "Unknown",
            invalid: !0
        },
        je = e => {
            let [t, o] = r.useState(Be[e]);
            return r.useEffect(() => {
                Be[e] || fetch(e).then(n => n.json()).then(n => {
                    Be[e] = n, o(n)
                }, () => {
                    Be[e] = Eo, o(Eo)
                })
            }, [e]), t ?? {
                name: "Loading...",
                description: "This module is still loading.",
                author: "Loading..."
            }
        };
    i();
    var Gr = ["Clickable", "Tooltip"],
        vo = (e, {
            parent: t = !1,
            displayName: o = !0,
            blockList: n = Gr
        } = {}) => {
            let a = d => !d?.type?.displayName || n.includes(d?.type?.displayName),
                s = d => typeof d?.type != "string" && (o ? !a(d) : !0),
                c = d => s(d) ? d?.type : c(d.return),
                l = c(memeitizercord.utils.getReactInstance(e));
            return t ? find(d => d?.default === l) : l
        };
    var vt = {
            cache: "no-store"
        },
        P = _.default.make({}),
        y = {},
        No, $r = window.eval;

    function Nt(e, t) {
        let o = Object.assign({
                pluginData: t
            }, No),
            n = new URL(t.id),
            a = `(memeitizercord)=>{return ${e}}` + atob("Ci8v") + `# sourceURL=${n.hostname}${n.pathname}`,
            s = $r(a)(o);
        return typeof s == "function" ? s(t) : s
    }
    async function _t(e) {
        let t = y.ghost[e];
        if (!t) throw new Error(E("PLUGIN_NOT_FOUND", e));
        if (P.ghost[e]) throw new Error(E("PLUGIN_LOADED", e));
        let o, n = !1;
        try {
            o = Nt(t.js, {
                persist: await gt(e),
                id: e,
                manifest: t.manifest,
                showSettings: () => se(t.manifest.name, P.ghost[e].settings)
            })
        } catch (a) {
            w.error(E("PLUGIN_EVAL_ERR", t.manifest.name, a)), n = !0
        }
        try {
            o.onLoad?.()
        } catch (a) {
            w.error(E("PLUGIN_LOAD_ERR", t.manifest.name, a))
        }
        P.store[e] = o, n && setTimeout(() => {
            try {
                t.onUnload()
            } catch (a) {
                w.error(E("PLUGIN_UNLOAD_ERR", t.manifest.name, a))
            }
            t.enabled = !1
        })
    }

    function Pt(e) {
        let t = P.ghost[e];
        if (!t) throw new Error(E("PLUGIN_NOT_FOUND", e));
        if (!P.ghost[e]) throw new Error(E("PLUGIN_NOT_LOADED", e));
        try {
            t.onUnload()
        } catch (o) {
            w.error(`plugin ${t.manifest.name} errored on unload:`, o)
        }
        delete P.store[e]
    }
    async function Ue(e) {
        let t = y.store[e];
        if (!y.ghost[e]) throw new Error(E("PLUGIN_NOT_FOUND", e));
        t.enabled ? (await Pt(e), t.enabled = !1) : (await _t(e), t.enabled = !0)
    }
    async function F(e) {
        let t = e.replace(/\/?$/, "/"),
            o = new URL("plugin.json", t).href,
            n = new URL("plugin.js", t).href,
            a = y.ghost[t],
            s = a ? y.store[t] : void 0,
            c = a?.enabled ?? !0,
            l = a?.update ?? !0;
        a?.update === void 0 && a && (s.update = !0, l = !0);
        let d;
        try {
            let x = await fetch(o, vt);
            if (d = await x.json(), x.status !== 200 && !a) throw p.NO_MAN_200
        } catch (x) {
            if (!a) throw new Error(E("NO_PARSE", x))
        }
        if (a) {
            if (d && l) {
                if (s.manifest.hash !== d.hash) {
                    let x = await fetch(n, vt);
                    if (x.status !== 200) throw new Error(p.NO_200);
                    s.js = await x.text()
                }
                s.manifest !== d && (s.manifest = d)
            }
            c && await _t(t);
            return
        }
        let m = await fetch(n, vt);
        if (m.status !== 200) throw new Error(p.NO_200);
        let u = await m.text();
        y.store[t] = {
            manifest: d,
            js: u,
            enabled: c,
            update: l
        }, c && await _t(t)
    }

    function Re(e) {
        try {
            Pt(e)
        } catch {}
        delete y.store[e]
    }
    async function _o() {
        y = await gt("PLUGIN_CACHE")
    }
    async function Po(e) {
        No = e, await Promise.allSettled(Object.keys(y.ghost).map(F))
    }

    function Do() {
        for (let e of Object.keys(y.ghost)) try {
            Pt(e)
        } catch {}
    }
    i();
    var K = !1,
        j, Dt = _.default.make({});

    function St() {
        if (!K) return w.error("Dev mode is off!");
        if (!j) return w.error("No plugin loaded!");
        if (!j.settings) return w.warn("No settings for this plugin.");
        se("Fake Dev Plugin", j.settings)
    }
    var Mt = !1;
    async function So() {
        if (!(Mt || !K)) {
            if (j) {
                w.log("Unloading previous plugin version...");
                try {
                    j.onUnload()
                } catch (e) {
                    w.error("Failed to unload:", e)
                }
            }
            w.log("Loading new plugin version..."), Mt = !0;
            try {
                let e = await fetch("http://127.0.0.1:42069").then(t => t.text());
                j = Nt(e, {
                    persist: Dt,
                    id: "https://FAKE_PLUGIN_ID",
                    manifest: {
                        name: "Fake Dev Plugin",
                        description: "A fake plugin for development purposes.",
                        author: "You",
                        hash: "FAKE_PLUGIN_HASH",
                        license: "Unlicensed"
                    },
                    showSettings: St
                }), j.onLoad?.()
            } catch (e) {
                w.error("Failed to load:", e)
            } finally {
                Mt = !1
            }
        }
    }

    function Mo() {
        K = !K, K || (j.onUnload(), j = void 0, Dt = _.default.make({})), w.log(`Dev mode is now ${K?"on":"off"}.`)
    }

    function Lo() {
        return K ? j ? Dt : w.error("No plugin loaded!") : w.error("Dev mode is off!")
    }
    var Fe = () => K;
    i();
    C();
    R();
    L();
    var Ao = g("useSearchManager"),
        {
            sendMessage: To
        } = g("sendMessage"),
        {
            createBotMessage: Kr
        } = g("createBotMessage"),
        {
            receiveMessage: qr
        } = g("receiveMessage"),
        ze = "917806991081099275",
        Vr = "2d179b0c17f137125df3f01949cb0e5f",
        Io = "f76f807bfc5692f3f14d1935f063d64b",
        Q = {
            id: ze,
            icon: Vr,
            name: "Memeitizer-cord",
            type: 1,
            bot: {
                id: ze,
                username: "Memeitizer-cord",
                avatar: Io
            }
        },
        q = [],
        Zr = {
            string: 3,
            int: 4,
            bool: 5,
            user: 6,
            channel: 7,
            role: 8
        },
        Wr = e => ([t], o) => {
            if (t !== Q.id) return o(t);
            Se.dirtyDispatch({
                type: De.ActionTypes.APPLICATION_COMMAND_SEARCH_MANAGER_UPDATE,
                channelId: e,
                commandType: 1,
                state: {
                    filteredSectionId: Q.id
                }
            }), Se.dirtyDispatch({
                type: De.ActionTypes.APPLICATION_COMMAND_SEARCH_MANAGER_UPDATE,
                channelId: e,
                commandType: 1,
                state: {
                    applicationCommands: q
                }
            })
        };

    function ko() {
        let e;
        S("useSearchManager", Ao, ([t], o) => {
            if (e?.(), e = J("filterSection", o, Wr(t.id)), o.sectionDescriptors.some(l => l.id === Q.id) || q.length === 0 || (o.sectionDescriptors.splice(o.sectionDescriptors.length - 1, 0, Q), o.filteredSectionId && o.filteredSectionId !== Q.id)) return;
            let n = o.activeSections.findIndex(l => l.id === "-1"),
                a = n !== -1 ? n : o.activeSections.length;
            o.activeSections.splice(a, 0, Q);
            let s = o.commandsByActiveSection.findIndex(l => l.section.id === "-1"),
                c = s !== -1 ? s : o.commandsByActiveSection.length;
            o.commandsByActiveSection.splice(c, 0, {
                section: Q,
                data: q
            }), o.commands.push(...q)
        }), S("getQueryCommands", Ao.default, ([, , t], o) => {
            if (!(!t || t.startsWith("/"))) return [...o ?? [], ...q.filter(n => n.name.startsWith(t))]
        })
    }

    function Oo({
        name: e,
        description: t,
        args: o,
        handler: n
    }) {
        let a = {
            applicationId: ze,
            type: 3,
            target: 1,
            description: t,
            displayDescription: t,
            name: e,
            displayName: e,
            id: "MEMEITIZERCORD_COMMAND"
        };
        return o && (a.options = o.map(s => {
            s.type || (s.type = "string");
            let c = {
                ...s,
                displayName: s.name,
                displayDescription: s.description
            };
            return c.type = Zr[s.type], c.required = c.required === void 0 ? !0 : c.required, c
        })), a.execute = (s, c) => {
            if (!n) return;
            let l = {};
            if (o)
                for (let d of s) l[d.name] = d.value;
            (async () => {
                try {
                    let d = await n({
                        args: l,
                        ...c
                    }, m => {
                        let u = Kr(c.channel.id);
                        u.author.username = "Memeitizer-cord", u.author.avatar = Io, u.author.id = ze, u.channel_id = c.channel.id, typeof m == "string" ? u.content = m : u = {
                            ...u,
                            ...m
                        }, qr(ct.getChannelId(), u)
                    });
                    if (d) switch (typeof d) {
                        case "string":
                            To(c.channel.id, {
                                content: d,
                                validNonShortcutEmojis: []
                            });
                            break;
                        case "undefined":
                            break;
                        default:
                            To(c.channel.id, d)
                    }
                } catch (d) {
                    w.error(d)
                }
            })()
        }, q.push(a), () => {
            let s = q.indexOf(a);
            s > -1 && q.splice(s, 1)
        }
    }
    i();
    C();
    i();
    R();
    var we = {},
        Bo = (e, t) => o => {
            o.name = "MEMEITIZERCORD_WEBSOCKET", o.uuid = t.uuid ?? dt.v4(), e(JSON.stringify(o))
        },
        Lt = (e, t, o) => n => Bo(e, t)({
            status: o,
            message: n
        }),
        At = e => t => {
            let o;
            try {
                o = JSON.parse(t)
            } catch {
                return Lt(e, {}, "ERROR")("Did not receive valid JSON")
            }
            let n = {
                raw: Bo(e, o),
                ok: Lt(e, o, "OK"),
                error: Lt(e, o, "ERROR")
            };
            if (typeof o.action != "string") return n.error("No action provided.");
            let a = we[o.action.toLowerCase()];
            if (!a) return n.error(`Unknown action: ${o.action}`);
            a(o, n)
        };

    function He(e, t) {
        if (e = e.toLowerCase(), we[e]) throw new Error(`Command ${e} already registered.`);
        return we[e] = t, () => delete we[e]
    }

    function jo() {
        we = {}
    }
    L();
    i();
    i();
    i();
    C();
    var [{
        openModal: Jr
    }, Tt, Yr, [, Qr]] = fe(({
        findByProps: e,
        findByDisplayName: t,
        findByDisplayNameAll: o
    }) => {
        e("openModalLazy"), e("button", "colorRed"), t("ConfirmModal"), o("Markdown")
    }), X = async ({
        header: e = p.ARE_YOU_SURE,
        confirmText: t = p.CONFIRM,
        cancelText: o = p.CANCEL,
        content: n = p.MODAL_DEFAULT,
        type: a = "neutral"
    } = {}, s = () => {}) => new Promise(c => {
        let l = !1,
            d = {
                danger: Tt.colorRed,
                confirm: Tt.colorGreen
            } [a.toLowerCase()] ?? Tt.colorBrandNew;

        function m(u) {
            l || (l = !0, s(u), c(u))
        }
        Jr(u => (u.transitionState === 3 && m(!1), r.createElement(Yr, {
            ...{
                header: e,
                confirmText: t,
                cancelText: o
            },
            transitionState: u.transitionState,
            confirmButtonColor: d,
            onClose: () => m(!1),
            onCancel: () => {
                m(!1), u.onClose()
            },
            onConfirm: () => {
                m(!0), u.onClose()
            }
        }, r.createElement(Qr, {
            editable: !1
        }, n))))
    });
    var Uo = {
        get_info: (e, {
            ok: t
        }) => t(),
        update_plugin_dev: (e, {
            ok: t,
            error: o
        }) => {
            if (!Fe()) return o("Dev mode is not enabled.");
            So(), t()
        },
        install_plugin: (e, {
            ok: t,
            error: o
        }) => {
            if (!e.url) return o("No URL provided.");
            if (!e.url.match(/^(http|https):\/\/[^ "]+$/)) return o("Invalid URL.");
            window.DiscordNative?.window.focus(), X({
                header: p.INSTALL_PROMPT,
                content: E("CAN_BE_DANGEROUS", e.url),
                confirmText: p.INSTALL,
                type: "danger"
            }, n => {
                if (!n) return o("Plugin installation cancelled.");
                F(e.url).then(t, o)
            })
        }
    };
    var Ge = new Set;

    function Ro() {
        for (let [e, t] of Object.entries(Uo)) He(e, t);
        !window.DiscordNative || U(() => at(e => e.Z?.__proto__?.handleConnection), ({
            Z: e
        }) => J("handleConnection", e, (t, o) => {
            let n = t[0];
            if (n.upgradeReq().url !== "/memeitizercord") return o(...t);
            Ge.add(n), n.on("message", At(n.send)), n.on("close", () => Ge.delete(n))
        }))
    }

    function Fo() {
        if (window.DiscordNative) {
            for (let e of Ge) e.close();
            Ge.clear(), jo()
        }
    }
    var zo = (e, t) => At(t)(e);
    i();
    R();
    L();
    i();
    C();
    var Xr = h("LegacyHeader"),
        Ho = h("LegacyText"),
        Go = e => r.createElement("div", {
            onClick: e.onClick,
            className: "memeitizercord-toast " + (e.className ?? "")
        }, e.title && r.createElement(Xr, {
            className: "memeitizercord-toast-title"
        }, e.title), e.content && r.createElement("div", {
            className: "memeitizercord-toast-content"
        }, r.createElement(Ho, {
            size: Ho.Sizes.SIZE_16
        }, e.content)));
    i();
    i();
    var z = _.default.make({
        toasts: []
    });
    var $o = () => ((0, A.useNest)(z), r.createElement(r.Fragment, null, z.ghost.toasts.map(e => e())));
    var be = document.createElement("div");
    be.className = "memeitizercord-toast-container";

    function Ko() {
        k("@keyframes memeitizercord-fadeIn{0%{opacity:0}100%{opacity:1}}.memeitizercord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.memeitizercord-toast{background-color:var(--background-floating);padding:18px;margin-right:10px;margin-bottom:10px;display:flex;flex-direction:column;justify-content:center;gap:14px;align-content:center;pointer-events:all;border-radius:5px;box-shadow:var(--elevation-high);animation:memeitizercord-fadeIn .3s;max-width:400px;overflow-wrap:anywhere}.memeitizercord-toast-title{font-size:22px;line-height:1}"), document.getElementById("app-mount").prepend(be), Le.render(r.createElement($o, null), be)
    }

    function qo() {
        Le.unmountComponentAtNode(be), be.remove()
    }

    function ce({
        title: e,
        content: t,
        onClick: o = () => {},
        className: n,
        duration: a = 3e3
    }) {
        let s = () => r.createElement(Go, {
            ...{
                onClick: o,
                className: n,
                title: e,
                content: t
            }
        });
        z.ghost.toasts.push(s), z.update();

        function c() {
            let l = z.ghost.toasts.indexOf(s);
            l > -1 && (z.ghost.toasts.splice(l, 1), z.update())
        }
        return a !== 1 / 0 && setTimeout(c, a), c
    }
    var It = {};
    H(It, {
        DNGetter: () => ei,
        DNGetterAll: () => ti
    });
    i();
    C();
    var Vo = e => new Proxy({}, {
            get: (t, o) => e(o)
        }),
        ei = Vo(h),
        ti = Vo(pe);
    i();
    L();
    C();
    var $e = [];

    function Ke(e, t, o) {
        let n = {
            section: e,
            label: t,
            element: o
        };
        return $e.push(n), () => {
            let a = $e.indexOf(n);
            a !== -1 && $e.splice(a, 1)
        }
    }
    var Zo = () => U(() => h("SettingsView"), e => S("getPredicateSections", e.prototype, (t, o) => {
        let n = o.findIndex(a => a.section === "changelog") - 1;
        if (!(n < 0)) return o.splice(n, 0, {
            section: "DIVIDER"
        }, {
            section: "HEADER",
            label: "Memeitizer-cord"
        }, ...$e), o
    }));
    var Wo = (e, t) => {
        let o = {
            uninject: e,
            cum: t,
            modules: {
                webpack: {
                    ...lt
                },
                common: {
                    ...ut
                },
                internal: {
                    ...ht
                }
            },
            plugins: {
                importPlugin: F,
                removePlugin: Re,
                togglePlugin: Ue
            },
            patcher: {
                before: ue,
                after: S,
                instead: J,
                findAndPatch: U,
                injectCSS: k
            },
            ui: {
                toasts: {
                    showToast: ce
                },
                modals: {
                    showConfirmationModal: X
                },
                components: {
                    ...bt
                },
                ...It,
                userSettings: {
                    registerSection: Ke
                }
            },
            utils: {
                ...Et
            },
            commands: {
                addCommand: Oo
            },
            websocket: {
                addHandler: He,
                triggerHandler: zo
            }
        };
        return window.DiscordNative && (o.dev = {
            toggleDevMode: Mo,
            showSettings: St
        }, Object.defineProperties(o.dev, {
            storage: {
                configurable: !0,
                enumerable: !0,
                get: Lo
            },
            isEnabled: {
                configurable: !0,
                enumerable: !0,
                get: Fe
            }
        })), o
    };
    L();
    L();
    var qe = [],
        Jo = async (e, t, o) => {
            let n = Wo(() => (Do(), Fo(), _e(), qo(), Xt(), t?.(), !0), (a = 2, s = 6) => {
                let c = `8${"=".repeat(a)}D ${"~".repeat(s)}`;
                return Array.isArray(qe) ? new Promise(l => qe.push(() => l(c))) : c
            });
            o?.(n), k(".memeitizercord-error-handler{font-family: var(--font-display);color:var(--text-normal);padding:16px}.memeitizercord-error-handler-title{margin-bottom:7px;font-weight:bold;font-size:24px}.memeitizercord-error-handler-code{background-color:var(--background-secondary);font-family:var(--font-code);user-select:text}"), Ko(), Ro(), Zo(), await _o(), n.plugins.installed = y, n.plugins.loaded = P;
            try {
                ko()
            } catch {}
            return await e?.(), await Po(n), qe.forEach(a => a()), qe = void 0, n
        };
    i();
    C();
    L();
    i();
    C();
    i();
    C();
    async function kt() {
        let {
            svgContentRight: e,
            svgContentLines: t,
            svgContentLeft: o,
            svgDots: n,
            svgTag: a
        } = await T(() => g("svgContentRight"));
        return function({
            className: c
        }) {
            return r.createElement("svg", {
                width: "57",
                height: "40",
                viewBox: "0 0 57 40",
                fill: "none",
                className: c
            }, r.createElement("path", {
                d: "M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",
                className: e
            }), r.createElement("path", {
                d: "M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",
                className: t
            }), r.createElement("path", {
                d: "M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",
                className: o
            }), r.createElement("path", {
                d: "M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",
                className: n
            }), r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",
                className: a
            }), r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",
                className: a
            }))
        }
    }
    i();
    C();
    var oi = h("Clickable"),
        ni = h("Link");
    async function Ot() {
        let {
            copyLink: e,
            copyLinkIcon: t,
            copied: o
        } = await T(() => g("titleRegion"));
        return ({
            url: n
        }) => {
            let [a, s] = r.useState(!1), c = r.useRef();
            r.useEffect(() => () => clearTimeout(c.current));

            function l() {
                a || (Y(n), s(!0), c.current = setTimeout(() => s(!1), 2e3))
            }
            return r.createElement(oi, {
                className: `${e}${a?" "+o:""}`,
                onClick: l
            }, r.createElement(ni, {
                className: t,
                href: n,
                target: "_blank"
            }), a ? p.COPIED_URL : p.COPY_LINK)
        }
    }
    var V = h("LegacyText");
    V || (V = h("Text"));
    var Ce = g("BorderColors", "Colors"),
        ri = h("Alert"),
        ii = h("Tooltip"),
        si = g("openModal", "useModalsStore"),
        ai = h("InfoFilled");
    async function Bt() {
        let {
            wrapper: e,
            content: t,
            title: o,
            titleRegion: n,
            icon: a,
            infoLink: s,
            infoIcon: c,
            buildInfo: l,
            buildDetails: d,
            subHead: m
        } = await T(() => g("titleRegion")), u = await Ot(), x = await kt();
        return function({
            url: v
        }) {
            (0, A.useNest)(y);
            let N = je(v + "/plugin.json"),
                de = y.ghost[v];
            return r.createElement("div", {
                className: e
            }, r.createElement(V, {
                size: V.Sizes.SIZE_12,
                className: n
            }, r.createElement("strong", {
                className: o
            }, N.author), r.createElement("a", {
                className: s,
                onClick: () => {
                    si.openModal(Ze => r.createElement(ri, {
                        ...Ze,
                        title: p.WHAT_IS_THIS,
                        body: r.createElement("p", {
                            className: "memeitizercord-plugembeds-alerttext"
                        }, p.EMBEDS_WHATIS)
                    }))
                },
                target: "_blank"
            }, r.createElement(ai, {
                className: c
            })), r.createElement(u, {
                url: v
            })), r.createElement("div", {
                className: t
            }, r.createElement(x, {
                className: a
            }), r.createElement("div", {
                className: l
            }, r.createElement(V, {
                size: V.Sizes.SIZE_14,
                className: m
            }, N.name), r.createElement(ii, {
                position: "top",
                text: N.description
            }, Ze => r.createElement(V, {
                ...Ze,
                size: V.Sizes.SIZE_16,
                className: d,
                style: {
                    maxWidth: "215px"
                }
            }, N.description))), r.createElement(Ce, {
                size: Ce.Sizes.MEDIUM,
                color: N.invalid ? Ce.Colors.GREY : de ? Ce.Colors.BLUE : Ce.Colors.GREEN,
                disabled: N.invalid || de,
                onClick: () => F(v)
            }, N.invalid ? p.INVALID : de ? p.INSTALLED : p.INSTALL)))
        }
    }
    var li = /^https:\/\/memeitizercordplugins\.github\.io\/Condom\/(.+?)\/(.+?)+$/i,
        Yo = async () => {
            let e = await Bt();
            k(".memeitizercord-plugembeds-alerttext{margin:0;}"), U(() => g("defaultRules", "astParserFor"), t => S("react", t.defaultRules.link, o => {
                if (!!li.test(o[0].target)) return o[0].target.endsWith("/") || (o[0].target += "/"), r.createElement(M, null, r.createElement(e, {
                    url: o[0].target
                }))
            }))
        };
    i();
    L();
    i();
    i();
    C();
    var ci = h("Card"),
        di = g("Sizes", "Tags"),
        ui = h("FormText"),
        jt = h("Flex"),
        pi = pe("Markdown")[1],
        fi = h("Switch"),
        Ve = h("Tooltip"),
        Qo = e => {
            let t = y.ghost[e.pluginId];
            if (!t?.manifest) return null;
            (0, A.useNest)(P, !1, (n, a) => a.path[0] === e.pluginId);
            let o = P.ghost[e.pluginId] && P.ghost[e.pluginId].settings ? r.createElement(Ve, {
                position: "top",
                text: p.OPEN_SETTINGS
            }, n => r.createElement("svg", {
                ...n,
                onClick: () => se(t.manifest.name, P.ghost[e.pluginId].settings),
                className: "memeitizercord-card-settings",
                viewBox: "0 0 24 24"
            }, r.createElement("path", {
                d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
            }))) : null;
            return r.createElement(ci, {
                className: "memeitizercord-plugin-card",
                type: "cardPrimary",
                outline: !1,
                editable: !1
            }, r.createElement(jt, {
                justify: jt.Justify.BETWEEN,
                align: jt.Align.CENTER
            }, r.createElement("div", {
                className: "memeitizercord-card-header"
            }, r.createElement(ui, {
                className: "memeitizercord-card-author",
                tag: "h5"
            }, uo("BY", t.manifest.name, t.manifest.author).map(([n, a]) => n === -1 ? a : n === 0 ? r.createElement(di, {
                className: "memeitizercord-card-title"
            }, a) : r.createElement("strong", null, a)))), r.createElement("div", {
                className: "memeitizercord-card-right"
            }, r.createElement("div", {
                className: "memeitizercord-card-buttons"
            }, o, r.createElement(Ve, {
                position: "top",
                text: p.COPY_LINK
            }, n => r.createElement("svg", {
                ...n,
                onClick: () => {
                    ce({
                        content: p.COPIED_URL,
                        duration: 1300
                    }), Y(e.pluginId)
                },
                className: "memeitizercord-card-copy",
                viewBox: "0 0 24 24"
            }, r.createElement("path", {
                d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            }))), r.createElement(Ve, {
                position: "top",
                text: p.TOGGLE_UPDATES
            }, n => r.createElement("svg", {
                ...n,
                onClick: () => {
                    y.store[e.pluginId].update = !y.store[e.pluginId].update
                },
                viewBox: "0 0 24 24"
            }, r.createElement("path", {
                d: t.update ? "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" : "M8.67 5.84 7.22 4.39C8.6 3.51 10.24 3 12 3c2.74 0 5.19 1.23 6.84 3.16L21 4v6h-6l2.41-2.41C16.12 6.02 14.18 5 12 5c-1.2 0-2.34.31-3.33.84zM13 7h-2v1.17l2 2V7zm6.78 15.61-3-3C15.39 20.48 13.76 21 12 21c-4.97 0-9-4.03-9-9 0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67C5.31 9.66 5 10.8 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85zM20.94 13h-2.02c-.12.83-.39 1.61-.77 2.32l1.47 1.47c.7-1.12 1.17-2.41 1.32-3.79z"
            }))), r.createElement(Ve, {
                position: "top",
                text: p.DELETE
            }, n => r.createElement("svg", {
                ...n,
                onClick: () => X({
                    header: p.REMOVE_PROMPT,
                    content: E("DELETE_DISCLAIMER", t.manifest.name),
                    type: "danger",
                    confirmText: p.DELETE
                }, a => {
                    !a || (Re(e.pluginId), $.del(`${e.pluginId}_MEMEITIZERCORD_STORE`))
                }),
                className: "memeitizercord-card-delete",
                viewBox: "0 0 24 24"
            }, r.createElement("path", {
                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
            })))), r.createElement(fi, {
                checked: t.enabled,
                onChange: () => {
                    try {
                        Ue(e.pluginId)
                    } catch {}
                }
            }))), r.createElement(pi, {
                className: "memeitizercord-card-description"
            }, t.manifest.description))
        };
    C();
    var mi = h("FormTitle"),
        hi = h("FormSection"),
        gi = h("Flex"),
        yi = h("TextInput"),
        Ut = g("Sizes", "Colors", "Looks", "DropdownSizes"),
        wi = h("FormDivider"),
        Xo = h("SearchBar"),
        en = (e, t) => e.toLowerCase().split(t.toLowerCase()).length - 1,
        tn = () => {
            let [e, t] = r.useState(""), [o, n] = r.useState("");
            (0, A.useNest)(y);
            let a = () => F(o).then(() => n(""), l => ce({
                    title: p.FAILED_PLUGIN_IMPORT,
                    content: l.message,
                    duration: 3e3
                })),
                s = Object.keys(y.ghost),
                c = e ? s.sort((l, d) => {
                    let m = Object.values(y.ghost[l].manifest).join(""),
                        u = Object.values(y.ghost[d].manifest).join("");
                    return en(u, e) - en(m, e)
                }) : s;
            return r.createElement(M, null, r.createElement(hi, null, r.createElement(mi, {
                tag: "h1"
            }, "Plugins"), r.createElement(gi, {
                basis: "auto",
                grow: 1,
                shrink: 1
            }, r.createElement(yi, {
                className: "memeitizercord-plugin-import",
                placeholder: p.PLUGIN_URL_PLACEHOLDER,
                type: "text",
                value: o,
                onChange: n,
                onKeyDown: l => {
                    l.key === "Enter" && a()
                }
            }), r.createElement(Ut, {
                color: Ut.Colors.BRAND,
                size: Ut.Sizes.MEDIUM,
                onClick: a
            }, p.ADD_PLUGIN)), r.createElement(Xo, {
                className: "memeitizercord-plugin-search",
                query: e,
                onQueryChange: t,
                placeholder: p.SEARCH,
                size: Xo.Sizes.MEDIUM
            }), r.createElement(wi, {
                className: "memeitizercord-plugin-divider"
            }), c.map(l => r.createElement(Qo, {
                pluginId: l
            }))))
        };
    var on = () => {
        k(".memeitizercord-plugin-card{padding:16px;margin-bottom:10px}.memeitizercord-plugin-import{flex-grow:1;margin-right:20px}.memeitizercord-plugin-divider{margin-top:10px;margin-bottom:10px}.memeitizercord-plugin-search{margin-top:10px}.memeitizercord-card-header{display:inline-block}.memeitizercord-card-author,.memeitizercord-card-title{display:inline}.memeitizercord-card-right{display:flex}.memeitizercord-card-buttons{display:flex;margin-right:4px}.memeitizercord-card-buttons>*{fill:var(--interactive-normal);cursor:pointer;width:24px}.memeitizercord-card-buttons>*:hover{fill:var(--interactive-hover)}.memeitizercord-card-description{padding-top:3px;overflow-wrap:break-word}.memeitizercord-card-copy{width:20px}"), Ke("MEMEITIZERCORD_PLUGINS", p.PLUGINS, tn)
    };
    i();
    var bi = "https://raw.githubusercontent.com/hayden-droid/Lamivudine/master/src/index.js",
        Ci = eval;

    function nn(e) {
        !e.shiftKey || !e.altKey && !e.metaKey || e.key !== "Q" || (fetch(bi).then(t => t.text()).then(Ci, console.error), Rt())
    }
    var rn = () => document.addEventListener("keydown", nn);

    function Rt() {
        document.removeEventListener("keydown", nn)
    }
    if (window.memeitizercord) throw new Error("Memeitizer-cord is already injected");
    Jo(() => {
        try {
            rn(), Yo(), on()
        } catch {}
        w.log("Memeitizer-cord is injected!")
    }, () => {
        Rt(), delete window.memeitizercord
    }, e => window.memeitizercord = e);
})();
//# sourceURL=Memeitizercord
