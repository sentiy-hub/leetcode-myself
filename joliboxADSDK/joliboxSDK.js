'use strict';
(() => {
    var c = (t, o, e) =>
        new Promise((n, i) => {
            var d = a => {
                    try {
                        r(e.next(a));
                    } catch (l) {
                        i(l);
                    }
                },
                s = a => {
                    try {
                        r(e.throw(a));
                    } catch (l) {
                        i(l);
                    }
                },
                r = a => (a.done ? n(a.value) : Promise.resolve(a.value).then(d, s));
            r((e = e.apply(t, o)).next());
        });
    var b = t => {
            var r, a, l;
            let o = t.split('-')[1];
            o && (t = t.replace(`-${o}`, ''));
            let e = t.split('+')[1];
            e && (t = t.replace(`+${e}`, ''));
            let n = t.split('.').slice(0, 3),
                [i, d, s] = [
                    (r = n[0]) != null ? r : '0',
                    (a = n[1]) != null ? a : '0',
                    (l = n[2]) != null ? l : '0',
                ];
            return { major: i, minor: d, patch: s, prerelease: o, build: e };
        },
        p = t => parseInt(b(t).major, 10),
        h = (t, o) => {
            let { major: e, minor: n, patch: i } = b(t),
                { major: d, minor: s, patch: r } = b(o);
            return e !== d
                ? e > d
                    ? 1
                    : -1
                : n !== s
                ? n > s
                    ? 1
                    : -1
                : i !== r
                ? i > r
                    ? 1
                    : -1
                : 0;
        };
    var g = 'jolibox-sdk-loader-metadata',
        f = class {
            constructor({ loaderMetadata: o } = {}) {
                this.computeLoaderMetaData = () => {
                    var i, d;
                    let o = this.currentVersion,
                        e = null;
                    try {
                        if (
                            ((e = JSON.parse((i = localStorage.getItem(g)) != null ? i : 'null')),
                            !e || !e.version)
                        )
                            throw new Error('Invalid loader metadata');
                    } catch (s) {
                        e = this.defaultMetadata;
                    }
                    let n = (d = e == null ? void 0 : e.version) != null ? d : o;
                    return (
                        p(n) !== p(o)
                            ? (e = this.defaultMetadata)
                            : h(n, o) < 0 && (e = this.defaultMetadata),
                        e
                    );
                };
                this.loadScript = () => {
                    if (this.loaderMetadata.syncScriptUrl) {
                        let o = new XMLHttpRequest();
                        o.open('GET', this.loaderMetadata.syncScriptUrl, !1), o.send();
                        let e = document.createElement('script');
                        (e.type = 'text/javascript'),
                            (e.innerHTML = o.responseText),
                            document.head.appendChild(e);
                    }
                    if (this.loaderMetadata.asyncScriptUrl) {
                        let o = document.createElement('script');
                        (o.type = 'text/javascript'),
                            (o.src = this.loaderMetadata.asyncScriptUrl),
                            (o.async = !0),
                            document.head.appendChild(o);
                    }
                };
                this.fetchUpdateLoaderMetadata = (...d) =>
                    c(
                        this,
                        [...d],
                        function* (
                            o = this.currentVersion,
                            e = this.loaderMetadata.version,
                            n = (i => ((i = window.JOLIBOX_ENV) != null ? i : 'WEB'))()
                        ) {
                            var r, a, l;
                            let s = `${
                                (a = (r = window.joliboxenv) == null ? void 0 : r.apiBaseURL) !=
                                null
                                    ? a
                                    : 'https://api.jolibox.com'
                            }/frontend/js-sdk/loader-metadata`;
                            try {
                                let w = yield (yield fetch(s, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        installedSDKVersion: o,
                                        localSDKVersion: e,
                                        env: n,
                                    }),
                                })).json();
                                if (w.code !== 'SUCCESS') throw new Error(w.message);
                                (this.loaderMetadata =
                                    (l = w.data) != null ? l : this.defaultMetadata),
                                    localStorage.setItem(g, JSON.stringify(this.loaderMetadata));
                            } catch (u) {
                                console.warn('Failed to fetch loader metadata: ', u);
                            }
                        }
                    );
                console.log('Loading Jolibox SDK...'),
                    (this.loaderMetadata = o != null ? o : this.computeLoaderMetaData()),
                    this.loadScript(),
                    this.fetchUpdateLoaderMetadata(),
                    console.log('Jolibox SDK loaded.');
            }
            get currentVersion() {
                return window.__JOLIBOX_LOCAL_SDK_VERSION__;
            }
            get defaultMetadata() {
                let o = this.currentVersion,
                    e = p(o);
                return {
                    version: o,
                    syncScriptUrl: `https://cdn.jsdelivr.net/npm/@jolibox/web-sync-sdk@${e}/dist/index.iife.js`,
                    asyncScriptUrl: `https://cdn.jsdelivr.net/npm/@jolibox/web-async-sdk@${e}/dist/index.iife.js`,
                };
            }
        };
    window.JoliboxSDKLoader = f;
    var x = class {
        constructor() {
            this.init = o => {
                window.joliboxsdk._commandPipe.push({ cmd: 'ads.init', params: o });
            };
            this.adConfig = o => {
                window.joliboxsdk._commandPipe.push({ cmd: 'ads.adConfig', params: o });
            };
            this.adBreak = o => {
                window.joliboxsdk._commandPipe.push({ cmd: 'ads.adBreak', params: o });
            };
            this.adUnit = o =>
                c(this, null, function* () {
                    window.joliboxsdk._commandPipe.push({ cmd: 'ads.adUnit', params: o });
                });
        }
    };
    window.JoliboxAds = x;
    var I = class {
        constructor() {
            this.trackEvent = (o, e) => {
                if (typeof o != 'string') throw new Error('eventName must be a string');
                if (e !== null && typeof e != 'object' && e !== void 0)
                    throw new Error('extra must be an object or null or undefined');
                if (e) {
                    for (let n in e)
                        if (typeof e[n] == 'object')
                            throw new Error('extra must not have nested objects');
                }
                window.joliboxsdk._commandPipe.push({
                    cmd: 'analytics.trackEvent',
                    params: [o, e],
                });
            };
        }
    };
    window.JoliboxAnalytics = I;
    var S = (t => (
        (t.LOAD_START = 'JOLIBOX_RUNTIME_LOAD_START'),
        (t.LOAD_FINISHED = 'JOLIBOX_RUNTIME_LOAD_FINISHED'),
        (t.LOAD_PROGRESS = 'JOLIBOX_RUNTIME_LOAD_PROGRESS'),
        t
    ))(S || {});
    window.dispatchEvent(new Event('JOLIBOX_RUNTIME_LOAD_START'));
    var y = class {
        constructor() {
            (this.loadFinished = () => {
                let t = new Event('JOLIBOX_RUNTIME_LOAD_FINISHED');
                window.dispatchEvent(t),
                    window.joliboxsdk._commandPipe.push({
                        cmd: 'analytics.trackSystemEvent',
                        params: ['CallRuntimeLoadFinished'],
                    });
            }),
                (this.notifyLoadProgress = t => {
                    let o = Math.ceil(t),
                        e = new CustomEvent('JOLIBOX_RUNTIME_LOAD_PROGRESS', { detail: o });
                    window.dispatchEvent(e);
                });
        }
    };
    window.JoliboxRuntime = y;
    window.__JOLIBOX_LOCAL_SDK_VERSION__ = '1.0.6';
    var m = class {
        constructor({ useRuntimeSDK: o = !0, loaderConfig: e, testMode: n, apiBaseURL: i } = {}) {
            this.setJoliboxEnv = (o, e) => {
                let i = typeof window < 'u' ? new URLSearchParams(window.location.search) : null,
                    d = (i == null ? void 0 : i.get('testMode')) === 'true',
                    s = o != null ? o : d,
                    r = i == null ? void 0 : i.get('apiBaseURL'),
                    a;
                e
                    ? (a = e)
                    : r
                    ? (a = r)
                    : (a = s ? 'https://test-api.jolibox.com' : 'https://api.jolibox.com'),
                    (window.joliboxenv = { testMode: s, apiBaseURL: a });
            };
            var d, s, r, a;
            this.setJoliboxEnv(n, i),
                o && window.joliboxsdk
                    ? ((this.loader =
                          (d = window.joliboxsdk.loader) != null
                              ? d
                              : new window.JoliboxSDKLoader(e)),
                      (this.ads =
                          (s = window.joliboxsdk.ads) != null ? s : new window.JoliboxAds()),
                      (this.anaytics =
                          (r = window.joliboxsdk.anaytics) != null
                              ? r
                              : new window.JoliboxAnalytics()),
                      (this.runtime =
                          (a = window.joliboxsdk.runtime) != null
                              ? a
                              : new window.JoliboxRuntime()))
                    : (window.joliboxsdk || (window.joliboxsdk = { _commandPipe: [] }),
                      (this.loader = new window.JoliboxSDKLoader(e)),
                      (this.ads = new window.JoliboxAds()),
                      (this.anaytics = new window.JoliboxAnalytics()),
                      (this.runtime = new window.JoliboxRuntime()),
                      (window.joliboxsdk = Object.assign(this, window.joliboxsdk))),
                window.joliboxsdk._commandPipe || (window.joliboxsdk._commandPipe = []);
        }
    };
    window.JoliboxSDK || (window.JoliboxSDK = m);
    var B = m;
})();
//# sourceMappingURL=index.iife.js.map
