// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7fIXz":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6bb7dff9293c461d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"dDe6p":[function(require,module,exports,__globalThis) {
var _racingBars = require("racing-bars");
const MAX_COINS = 15;
const coinsData = new Map();
let selectedCoins = new Set();
let selectedCoinsRows = [];
// Function to load coin data from network
async function loadCoinData(coinId) {
    try {
        return (await fetch(`data/history/${coinId}.csv`, {
            headers: {
                'Content-Type': 'text/csv',
                'Accept': 'text/csv'
            }
        })).text();
    } catch (error) {
        console.error(`Error loading data for coin ${coinId}:`, error);
        return null;
    }
}
// Function to parse CSV data into chart objects
function parseCSVData(csvData, coinId, coinImageDict) {
    if (!csvData) return [];
    return csvData.split('\n').slice(1) // Skip header
    .map((row)=>{
        const [dateStr, value] = row.split(',');
        return {
            date: new Date(dateStr),
            name: coinId,
            value: parseFloat(value),
            icon: `/icons/${coinImageDict[coinId]}`
        };
    }).filter((obj)=>!isNaN(obj.value) && obj.date);
}
// Function to update selectedCoinsRows from coinsData
function updateSelectedCoinsRows() {
    selectedCoinsRows = Array.from(selectedCoins).flatMap((coinId)=>coinsData.get(coinId) || []);
}
const init = async ()=>{
    const [top_coins_history, coin_markets] = await Promise.all([
        fetch('data/top_coins_history.csv').then((r)=>r.text()),
        fetch('data/coin_markets.json').then((r)=>r.json())
    ]);
    //get the first coins by marketcapath, and the first ones by marketcapAth, then unite them
    function topCoins(coins, nCoins, property) {
        return coins.sort((a, b)=>b[property] - a[property]).slice(0, nCoins).map((c)=>({
                id: c.id,
                name: c.name,
                symbol: c.symbol,
                marketCapAth: c.marketCapAth,
                marketCap: c.marketCap,
                imageName: c.imageName
            }));
    }
    const top_coins_ath = topCoins(coin_markets, 10, 'marketCapAth');
    const top_coins = topCoins(coin_markets, 10, 'marketCap');
    const all_coins = top_coins_ath.concat(top_coins);
    const coins = all_coins.filter((coin, index, self)=>index === self.findIndex((t)=>t.id === coin.id));
    //save a dictionary between the coin id and the image name
    const coinImageDict = coin_markets.reduce((acc, coin)=>{
        acc[coin.id] = coin.imageName;
        return acc;
    }, {});
    // Parse the initial combined history data into the coinsData map
    const rows = top_coins_history.split('\n').slice(1);
    for (const row of rows){
        const [dateStr, coinId, value] = row.split(',');
        if (!coinsData.has(coinId)) coinsData.set(coinId, []);
        const dataPoint = {
            date: new Date(dateStr),
            name: coinId,
            value: parseFloat(value),
            icon: `/icons/${coinImageDict[coinId]}`
        };
        if (dataPoint.date && !isNaN(dataPoint.value)) coinsData.get(coinId).push(dataPoint);
    }
    const options = {
        labelsPosition: 'outside',
        showIcons: true,
        mouseControls: "all",
        tickDuration: 150,
        theme: 'dark'
    };
    // Function to calculate chart height based on number of coins
    function calculateChartHeight(numCoins) {
        return Math.max(300, 50 + numCoins * 25) + 'px';
    }
    // Function to update chart height
    function updateChartHeight(numCoins) {
        const raceChart = document.getElementById('race');
        raceChart.style.height = calculateChartHeight(numCoins);
    }
    // Create initial selection and update rows
    selectedCoins = new Set(coins.map((coin)=>coin.id));
    updateSelectedCoinsRows();
    // Function to check if current selection matches initial selection
    function isInitialSelection() {
        if (selectedCoins.size !== coins.length) return false;
        return Array.from(selectedCoins).every((coinId)=>coins.some((coin)=>coin.id === coinId));
    }
    // Function to update refresh button state
    function updateRefreshButtonState() {
        const refreshButton = document.querySelector('.refresh-coins');
        if (isInitialSelection()) refreshButton.classList.add('disabled');
        else refreshButton.classList.remove('disabled');
    }
    // Function to create coin element
    function createCoinElement(coin, isAvailable = false) {
        const coinDiv = document.createElement('div');
        coinDiv.className = isAvailable ? 'available-coin-item' : 'coin-item';
        const img = document.createElement('img');
        img.src = `/icons/${coinImageDict[coin.id]}`;
        img.alt = coin.name;
        const name = document.createTextNode(coin.name);
        coinDiv.appendChild(img);
        coinDiv.appendChild(name);
        const button = document.createElement('button');
        button.className = isAvailable ? 'add-coin' : 'remove-coin';
        button.innerHTML = isAvailable ? '+' : "\xd7";
        button.setAttribute('aria-label', isAvailable ? `Add ${coin.name}` : `Remove ${coin.name}`);
        if (isAvailable && selectedCoins.size >= MAX_COINS) {
            button.disabled = true;
            coinDiv.classList.add('disabled');
        }
        coinDiv.appendChild(button);
        if (isAvailable) {
            const handleClick = async ()=>{
                if (!selectedCoins.has(coin.id) && selectedCoins.size < MAX_COINS) {
                    // Load coin data if not already loaded
                    if (!coinsData.has(coin.id)) {
                        const csvData = await loadCoinData(coin.id);
                        const parsedData = parseCSVData(csvData, coin.id, coinImageDict);
                        coinsData.set(coin.id, parsedData);
                    }
                    selectedCoins.add(coin.id);
                    const selectedCoinElement = createCoinElement(coin);
                    document.getElementById('coin-selector').appendChild(selectedCoinElement);
                    handleCoinSelection();
                    updateRefreshButtonState();
                    // Update the view of selected coins
                    updateSelectedCoinsRows();
                    // Update chart height and redraw
                    document.getElementById('race').innerHTML = '';
                    updateChartHeight(selectedCoins.size);
                    (0, _racingBars.race)(selectedCoinsRows, '#race', options);
                }
            };
            button.addEventListener('click', handleClick);
            if (selectedCoins.size < MAX_COINS) coinDiv.addEventListener('click', handleClick);
        } else {
            const handleRemove = ()=>{
                const coinId = coin.id;
                selectedCoins.delete(coinId);
                coinDiv.remove();
                updateAvailableCoins(searchInput.value.trim());
                updateRefreshButtonState();
                // Update the view of selected coins
                updateSelectedCoinsRows();
                // Update chart height and redraw
                document.getElementById('race').innerHTML = '';
                updateChartHeight(selectedCoins.size);
                (0, _racingBars.race)(selectedCoinsRows, '#race', options);
            };
            button.addEventListener('click', handleRemove);
            coinDiv.addEventListener('click', handleRemove);
            coinDiv.style.cursor = 'pointer';
        }
        return coinDiv;
    }
    // Function to update available coins
    function updateAvailableCoins(searchTerm = '') {
        const availableCoinsDiv = document.getElementById('available-coins');
        availableCoinsDiv.innerHTML = '';
        const searchLower = searchTerm.toLowerCase();
        coin_markets.forEach((coin)=>{
            if (!selectedCoins.has(coin.id) && (searchTerm === '' || coin.name.toLowerCase().includes(searchLower) || coin.symbol.toLowerCase().includes(searchLower))) {
                const coinElement = createCoinElement(coin, true);
                availableCoinsDiv.appendChild(coinElement);
            }
        });
    }
    // Function to reset to initial selection
    function resetToInitialSelection() {
        if (isInitialSelection()) return;
        // Clear current selection
        coinSelector.innerHTML = '';
        selectedCoins = new Set(coins.map((coin)=>coin.id));
        // Repopulate with initial coins
        coin_markets.forEach((coin)=>{
            if (selectedCoins.has(coin.id)) {
                const coinElement = createCoinElement(coin);
                coinSelector.appendChild(coinElement);
            }
        });
        // Update available coins and selection state
        updateAvailableCoins();
        updateRefreshButtonState();
        updateSelectedCoinsRows();
        // Update chart height and redraw
        document.getElementById('race').innerHTML = '';
        updateChartHeight(selectedCoins.size);
        (0, _racingBars.race)(selectedCoinsRows, '#race', options);
    }
    // Setup refresh button functionality
    const refreshButton = document.querySelector('.refresh-coins');
    refreshButton.addEventListener('click', resetToInitialSelection);
    // Setup search functionality
    const searchInput = document.getElementById('coin-search');
    searchInput.addEventListener('input', (e)=>{
        updateAvailableCoins(e.target.value.trim());
    });
    // Add coin selection handler to clear search
    const handleCoinSelection = ()=>{
        searchInput.value = '';
        updateAvailableCoins();
    };
    // Populate the coin selector with initially selected coins
    const coinSelector = document.getElementById('coin-selector');
    coin_markets.forEach((coin)=>{
        if (selectedCoins.has(coin.id)) {
            const coinElement = createCoinElement(coin);
            coinSelector.appendChild(coinElement);
        }
    });
    // Initialize available coins and refresh button state
    updateAvailableCoins();
    updateRefreshButtonState();
    // Initial chart rendering with selected coins
    updateChartHeight(selectedCoins.size);
    (0, _racingBars.race)(selectedCoinsRows, '#race', options);
};
init().catch(console.error);

},{"racing-bars":"kB7Ff"}],"kB7Ff":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOptions", ()=>dr);
parcelHelpers.export(exports, "generateId", ()=>Ft);
parcelHelpers.export(exports, "loadData", ()=>lr);
parcelHelpers.export(exports, "race", ()=>na);
var aa = Object.defineProperty;
var ye = (t, e)=>{
    for(var r in e)aa(t, r, {
        get: e[r],
        enumerable: !0
    });
};
var xn = {};
ye(xn, {
    actionTypes: ()=>Lt,
    changeOptions: ()=>ua,
    defaultOptions: ()=>dr,
    loadOptions: ()=>sa,
    optionsReducer: ()=>vn,
    validateOptions: ()=>gr
});
var Lt = {
    loadOptions: "options/load",
    changeOptions: "options/change"
}, sa = (t)=>({
        type: Lt.loadOptions,
        payload: t
    }), ua = (t)=>({
        type: Lt.changeOptions,
        payload: t
    });
var Dr = {};
ye(Dr, {
    actionTypes: ()=>xe,
    containerReducer: ()=>br,
    setContainer: ()=>la
});
var xe = {
    setContainer: "container/set"
}, la = (t)=>({
        type: xe.setContainer,
        payload: t.element
    });
var ca = {
    element: document.body
}, br = (t = ca, e)=>{
    switch(e.type){
        case xe.setContainer:
            return {
                ...t,
                element: e.payload
            };
        default:
            return t;
    }
};
var Ar = {};
ye(Ar, {
    actionTypes: ()=>F,
    addDateSlice: ()=>_a,
    addFilter: ()=>pa,
    addSelection: ()=>ya,
    allExceptFilter: ()=>ga,
    clearDateSlices: ()=>ba,
    dataLoaded: ()=>fa,
    dataReducer: ()=>Sr,
    removeFilter: ()=>ha,
    removeSelection: ()=>xa,
    resetFilters: ()=>da,
    resetSelections: ()=>wa,
    toggleFilter: ()=>ma,
    toggleSelection: ()=>va
});
var F = {
    dataLoaded: "data/loaded",
    addFilter: "data/addFilter",
    removeFilter: "data/removeFilter",
    toggleFilter: "data/toggleFilter",
    resetFilters: "data/resetFilters",
    allExceptFilter: "data/allExceptFilter",
    addSelection: "data/addSelection",
    removeSelection: "data/removeSelection",
    toggleSelection: "data/toggleSelection",
    resetSelections: "data/resetSelections",
    addDateSlice: "data/addDateSlice",
    clearDateSlices: "data/clearDateSlices"
}, fa = (t)=>({
        type: F.dataLoaded,
        payload: t
    }), pa = (t)=>({
        type: F.addFilter,
        payload: t
    }), ha = (t)=>({
        type: F.removeFilter,
        payload: t
    }), ma = (t)=>({
        type: F.toggleFilter,
        payload: t
    }), da = ()=>({
        type: F.resetFilters
    }), ga = (t)=>({
        type: F.allExceptFilter,
        payload: t
    }), ya = (t)=>({
        type: F.addSelection,
        payload: t
    }), xa = (t)=>({
        type: F.removeSelection,
        payload: t
    }), va = (t)=>({
        type: F.toggleSelection,
        payload: t
    }), wa = ()=>({
        type: F.resetSelections
    }), _a = (t, e)=>{
    let r = {};
    return r[t] = e, {
        type: F.addDateSlice,
        payload: r,
        triggerRender: !1
    };
}, ba = ()=>({
        type: F.clearDateSlices
    });
var Da = {
    names: [],
    groups: [],
    datesCache: [],
    groupFilter: [],
    selected: [],
    dateSlices: {}
}, Sr = (t = Da, e)=>{
    switch(e.type){
        case F.dataLoaded:
            return {
                ...t,
                names: [
                    ...e.payload.names
                ],
                groups: [
                    ...e.payload.groups
                ],
                datesCache: [
                    ...e.payload.datesCache
                ]
            };
        case F.addFilter:
            return {
                ...t,
                groupFilter: kr(t.groupFilter, e.payload)
            };
        case F.removeFilter:
            return {
                ...t,
                groupFilter: ve(t.groupFilter, e.payload)
            };
        case F.toggleFilter:
            return {
                ...t,
                groupFilter: Sn(t.groupFilter, e.payload)
            };
        case F.resetFilters:
            return {
                ...t,
                groupFilter: []
            };
        case F.allExceptFilter:
            return {
                ...t,
                groupFilter: ve(t.groups, e.payload)
            };
        case F.addSelection:
            return {
                ...t,
                selected: kr(t.selected, e.payload)
            };
        case F.removeSelection:
            return {
                ...t,
                selected: ve(t.selected, e.payload)
            };
        case F.toggleSelection:
            return {
                ...t,
                selected: Sn(t.selected, e.payload)
            };
        case F.resetSelections:
            return {
                ...t,
                selected: []
            };
        case F.addDateSlice:
            return {
                ...t,
                dateSlices: {
                    ...t.dateSlices,
                    ...e.payload
                }
            };
        case F.clearDateSlices:
            return {
                ...t,
                dateSlices: {}
            };
        default:
            return t;
    }
};
function kr(t, e) {
    let r = [
        ...t
    ];
    return r.includes(e) || r.push(e), r;
}
function ve(t, e) {
    return t.filter((r)=>r !== e);
}
function Sn(t, e) {
    return t.includes(e) ? ve(t, e) : kr(t, e);
}
var yn = {};
ye(yn, {
    actionTypes: ()=>U,
    changeDates: ()=>Sa,
    createTicker: ()=>gn,
    dec: ()=>Na,
    inc: ()=>Ca,
    initialize: ()=>ka,
    setFirst: ()=>Ma,
    setLast: ()=>Ea,
    setRunning: ()=>Ta,
    tickerReducer: ()=>Tr,
    updateDate: ()=>Aa
});
var U = {
    initialize: "ticker/initialize",
    changeDates: "ticker/changeDates",
    updateDate: "ticker/updateDate",
    setRunning: "ticker/setRunning",
    setFirst: "ticker/setFirst",
    setLast: "ticker/setLast",
    inc: "ticker/inc",
    dec: "ticker/dec"
}, ka = (t)=>({
        type: U.initialize,
        payload: t
    }), Sa = (t)=>({
        type: U.changeDates,
        payload: t
    }), Aa = (t)=>({
        type: U.updateDate,
        payload: t
    }), Ta = (t)=>({
        type: U.setRunning,
        payload: t
    }), Ma = ()=>({
        type: U.setFirst
    }), Ea = ()=>({
        type: U.setLast
    }), Ca = (t = 1)=>({
        type: U.inc,
        payload: t
    }), Na = (t = 1)=>({
        type: U.dec,
        payload: t
    });
var Ra = {
    isRunning: !1,
    currentDate: "",
    isFirstDate: !0,
    isLastDate: !1,
    dates: []
}, Tr = (t = Ra, e)=>{
    switch(e.type){
        case U.initialize:
            {
                let r = e.payload;
                return {
                    ...t,
                    isRunning: !1,
                    currentDate: r[0],
                    isFirstDate: !0,
                    isLastDate: !1,
                    dates: r
                };
            }
        case U.changeDates:
            {
                let r = e.payload, n = r.indexOf(t.currentDate) !== -1 ? t.currentDate : t.currentDate < r[0] ? r[0] : t.currentDate > r[r.length - 1] ? r[r.length - 1] : r[[
                    ...r,
                    t.currentDate
                ].sort().indexOf(t.currentDate)];
                return {
                    ...t,
                    currentDate: n,
                    isFirstDate: n === r[0],
                    isLastDate: n === r[r.length - 1],
                    dates: r
                };
            }
        case U.updateDate:
            {
                let r = e.payload;
                return t.dates.indexOf(r) === -1 ? {
                    ...t
                } : {
                    ...t,
                    currentDate: r,
                    isFirstDate: r === t.dates[0],
                    isLastDate: r === t.dates[t.dates.length - 1]
                };
            }
        case U.setRunning:
            return {
                ...t,
                isRunning: e.payload
            };
        case U.setFirst:
            return {
                ...t,
                currentDate: t.dates[0],
                isFirstDate: !0,
                isLastDate: !1
            };
        case U.setLast:
            return {
                ...t,
                currentDate: t.dates[t.dates.length - 1],
                isFirstDate: !1,
                isLastDate: !0
            };
        case U.inc:
            {
                let r = t.dates.indexOf(t.currentDate), n = t.dates.length - 1, o = e.payload, i = r + o > n ? t.dates[n] : t.dates[r + o];
                return {
                    ...t,
                    currentDate: i,
                    isFirstDate: i === t.dates[0],
                    isLastDate: i === t.dates[n]
                };
            }
        case U.dec:
            {
                let r = t.dates.indexOf(t.currentDate), n = e.payload, o = r - n < 0 ? t.dates[0] : t.dates[r - n];
                return {
                    ...t,
                    currentDate: o,
                    isFirstDate: o === t.dates[0],
                    isLastDate: o === t.dates[t.dates.length - 1]
                };
            }
        default:
            return t;
    }
};
function vt(t, e) {
    return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Mr(t, e) {
    return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function we(t) {
    let e, r, n;
    t.length !== 2 ? (e = vt, r = (s, l)=>vt(t(s), l), n = (s, l)=>t(s) - l) : (e = t === vt || t === Mr ? t : Fa, r = t, n = t);
    function o(s, l, u = 0, c = s.length) {
        if (u < c) {
            if (e(l, l) !== 0) return c;
            do {
                let f = u + c >>> 1;
                r(s[f], l) < 0 ? u = f + 1 : c = f;
            }while (u < c);
        }
        return u;
    }
    function i(s, l, u = 0, c = s.length) {
        if (u < c) {
            if (e(l, l) !== 0) return c;
            do {
                let f = u + c >>> 1;
                r(s[f], l) <= 0 ? u = f + 1 : c = f;
            }while (u < c);
        }
        return u;
    }
    function a(s, l, u = 0, c = s.length) {
        let f = o(s, l, u, c - 1);
        return f > u && n(s[f - 1], l) > -n(s[f], l) ? f - 1 : f;
    }
    return {
        left: o,
        center: a,
        right: i
    };
}
function Fa() {
    return 0;
}
function Er(t) {
    return t === null ? NaN : +t;
}
var An = we(vt), Tn = An.right, Oa = An.left, Ia = we(Er).center, Cr = Tn;
var La = Math.sqrt(50), Pa = Math.sqrt(10), za = Math.sqrt(2);
function _e(t, e, r) {
    let n = (e - t) / Math.max(0, r), o = Math.floor(Math.log10(n)), i = n / Math.pow(10, o), a = i >= La ? 10 : i >= Pa ? 5 : i >= za ? 2 : 1, s, l, u;
    return o < 0 ? (u = Math.pow(10, -o) / a, s = Math.round(t * u), l = Math.round(e * u), s / u < t && ++s, l / u > e && --l, u = -u) : (u = Math.pow(10, o) * a, s = Math.round(t / u), l = Math.round(e / u), s * u < t && ++s, l * u > e && --l), l < s && .5 <= r && r < 2 ? _e(t, e, r * 2) : [
        s,
        l,
        u
    ];
}
function be(t, e, r) {
    if (e = +e, t = +t, r = +r, !(r > 0)) return [];
    if (t === e) return [
        t
    ];
    let n = e < t, [o, i, a] = n ? _e(e, t, r) : _e(t, e, r);
    if (!(i >= o)) return [];
    let s = i - o + 1, l = new Array(s);
    if (n) {
        if (a < 0) for(let u = 0; u < s; ++u)l[u] = (i - u) / -a;
        else for(let u = 0; u < s; ++u)l[u] = (i - u) * a;
    } else if (a < 0) for(let u = 0; u < s; ++u)l[u] = (o + u) / -a;
    else for(let u = 0; u < s; ++u)l[u] = (o + u) * a;
    return l;
}
function Kt(t, e, r) {
    return e = +e, t = +t, r = +r, _e(t, e, r)[2];
}
function Nr(t, e, r) {
    e = +e, t = +t, r = +r;
    let n = e < t, o = n ? Kt(e, t, r) : Kt(t, e, r);
    return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function wt(t, e) {
    let r;
    if (e === void 0) for (let n of t)n != null && (r < n || r === void 0 && n >= n) && (r = n);
    else {
        let n = -1;
        for (let o of t)(o = e(o, ++n, t)) != null && (r < o || r === void 0 && o >= o) && (r = o);
    }
    return r;
}
function Mn(t) {
    return t;
}
var ke = 1, Rr = 2, En = 3, De = 4, Cn = 1e-6;
function Ha(t) {
    return "translate(" + t + ",0)";
}
function $a(t) {
    return "translate(0," + t + ")";
}
function Ba(t) {
    return (e)=>+t(e);
}
function Va(t, e) {
    return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (r)=>+t(r) + e;
}
function Ya() {
    return !this.__axis;
}
function Ua(t, e) {
    var r = [], n = null, o = null, i = 6, a = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, u = t === ke || t === De ? -1 : 1, c = t === De || t === Rr ? "x" : "y", f = t === ke || t === En ? Ha : $a;
    function p(h) {
        var m = n ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()), g = o ?? (e.tickFormat ? e.tickFormat.apply(e, r) : Mn), x = Math.max(i, 0) + s, b = e.range(), D = +b[0] + l, k = +b[b.length - 1] + l, S = (e.bandwidth ? Va : Ba)(e.copy(), l), d = h.selection ? h.selection() : h, w = d.selectAll(".domain").data([
            null
        ]), E = d.selectAll(".tick").data(m, e).order(), R = E.exit(), I = E.enter().append("g").attr("class", "tick"), H = E.select("line"), _ = E.select("text");
        w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(I), H = H.merge(I.append("line").attr("stroke", "currentColor").attr(c + "2", u * i)), _ = _.merge(I.append("text").attr("fill", "currentColor").attr(c, u * x).attr("dy", t === ke ? "0em" : t === En ? "0.71em" : "0.32em")), h !== d && (w = w.transition(h), E = E.transition(h), H = H.transition(h), _ = _.transition(h), R = R.transition(h).attr("opacity", Cn).attr("transform", function(C) {
            return isFinite(C = S(C)) ? f(C + l) : this.getAttribute("transform");
        }), I.attr("opacity", Cn).attr("transform", function(C) {
            var A = this.parentNode.__axis;
            return f((A && isFinite(A = A(C)) ? A : S(C)) + l);
        })), R.remove(), w.attr("d", t === De || t === Rr ? a ? "M" + u * a + "," + D + "H" + l + "V" + k + "H" + u * a : "M" + l + "," + D + "V" + k : a ? "M" + D + "," + u * a + "V" + l + "H" + k + "V" + u * a : "M" + D + "," + l + "H" + k), E.attr("opacity", 1).attr("transform", function(C) {
            return f(S(C) + l);
        }), H.attr(c + "2", u * i), _.attr(c, u * x).text(g), d.filter(Ya).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Rr ? "start" : t === De ? "end" : "middle"), d.each(function() {
            this.__axis = S;
        });
    }
    return p.scale = function(h) {
        return arguments.length ? (e = h, p) : e;
    }, p.ticks = function() {
        return r = Array.from(arguments), p;
    }, p.tickArguments = function(h) {
        return arguments.length ? (r = h == null ? [] : Array.from(h), p) : r.slice();
    }, p.tickValues = function(h) {
        return arguments.length ? (n = h == null ? null : Array.from(h), p) : n && n.slice();
    }, p.tickFormat = function(h) {
        return arguments.length ? (o = h, p) : o;
    }, p.tickSize = function(h) {
        return arguments.length ? (i = a = +h, p) : i;
    }, p.tickSizeInner = function(h) {
        return arguments.length ? (i = +h, p) : i;
    }, p.tickSizeOuter = function(h) {
        return arguments.length ? (a = +h, p) : a;
    }, p.tickPadding = function(h) {
        return arguments.length ? (s = +h, p) : s;
    }, p.offset = function(h) {
        return arguments.length ? (l = +h, p) : l;
    }, p;
}
function Se(t) {
    return Ua(ke, t);
}
var qa = {
    value: ()=>{}
};
function Rn() {
    for(var t = 0, e = arguments.length, r = {}, n; t < e; ++t){
        if (!(n = arguments[t] + "") || n in r || /[\s.]/.test(n)) throw new Error("illegal type: " + n);
        r[n] = [];
    }
    return new Ae(r);
}
function Ae(t) {
    this._ = t;
}
function Wa(t, e) {
    return t.trim().split(/^|\s+/).map(function(r) {
        var n = "", o = r.indexOf(".");
        if (o >= 0 && (n = r.slice(o + 1), r = r.slice(0, o)), r && !e.hasOwnProperty(r)) throw new Error("unknown type: " + r);
        return {
            type: r,
            name: n
        };
    });
}
Ae.prototype = Rn.prototype = {
    constructor: Ae,
    on: function(t, e) {
        var r = this._, n = Wa(t + "", r), o, i = -1, a = n.length;
        if (arguments.length < 2) {
            for(; ++i < a;)if ((o = (t = n[i]).type) && (o = Xa(r[o], t.name))) return o;
            return;
        }
        if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
        for(; ++i < a;)if (o = (t = n[i]).type) r[o] = Nn(r[o], t.name, e);
        else if (e == null) for(o in r)r[o] = Nn(r[o], t.name, null);
        return this;
    },
    copy: function() {
        var t = {}, e = this._;
        for(var r in e)t[r] = e[r].slice();
        return new Ae(t);
    },
    call: function(t, e) {
        if ((o = arguments.length - 2) > 0) for(var r = new Array(o), n = 0, o, i; n < o; ++n)r[n] = arguments[n + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(i = this._[t], n = 0, o = i.length; n < o; ++n)i[n].value.apply(e, r);
    },
    apply: function(t, e, r) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(var n = this._[t], o = 0, i = n.length; o < i; ++o)n[o].value.apply(e, r);
    }
};
function Xa(t, e) {
    for(var r = 0, n = t.length, o; r < n; ++r)if ((o = t[r]).name === e) return o.value;
}
function Nn(t, e, r) {
    for(var n = 0, o = t.length; n < o; ++n)if (t[n].name === e) {
        t[n] = qa, t = t.slice(0, n).concat(t.slice(n + 1));
        break;
    }
    return r != null && t.push({
        name: e,
        value: r
    }), t;
}
var Fr = Rn;
var Te = "http://www.w3.org/1999/xhtml", Or = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Te,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function ct(t) {
    var e = t += "", r = e.indexOf(":");
    return r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)), Or.hasOwnProperty(e) ? {
        space: Or[e],
        local: t
    } : t;
}
function ja(t) {
    return function() {
        var e = this.ownerDocument, r = this.namespaceURI;
        return r === Te && e.documentElement.namespaceURI === Te ? e.createElement(t) : e.createElementNS(r, t);
    };
}
function Ga(t) {
    return function() {
        return this.ownerDocument.createElementNS(t.space, t.local);
    };
}
function Me(t) {
    var e = ct(t);
    return (e.local ? Ga : ja)(e);
}
function Ka() {}
function _t(t) {
    return t == null ? Ka : function() {
        return this.querySelector(t);
    };
}
function Fn(t) {
    typeof t != "function" && (t = _t(t));
    for(var e = this._groups, r = e.length, n = new Array(r), o = 0; o < r; ++o)for(var i = e[o], a = i.length, s = n[o] = new Array(a), l, u, c = 0; c < a; ++c)(l = i[c]) && (u = t.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
    return new P(n, this._parents);
}
function Ir(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Za() {
    return [];
}
function Zt(t) {
    return t == null ? Za : function() {
        return this.querySelectorAll(t);
    };
}
function Qa(t) {
    return function() {
        return Ir(t.apply(this, arguments));
    };
}
function On(t) {
    typeof t == "function" ? t = Qa(t) : t = Zt(t);
    for(var e = this._groups, r = e.length, n = [], o = [], i = 0; i < r; ++i)for(var a = e[i], s = a.length, l, u = 0; u < s; ++u)(l = a[u]) && (n.push(t.call(l, l.__data__, u, a)), o.push(l));
    return new P(n, o);
}
function Qt(t) {
    return function() {
        return this.matches(t);
    };
}
function Ee(t) {
    return function(e) {
        return e.matches(t);
    };
}
var Ja = Array.prototype.find;
function ts(t) {
    return function() {
        return Ja.call(this.children, t);
    };
}
function es() {
    return this.firstElementChild;
}
function In(t) {
    return this.select(t == null ? es : ts(typeof t == "function" ? t : Ee(t)));
}
var rs = Array.prototype.filter;
function ns() {
    return Array.from(this.children);
}
function os(t) {
    return function() {
        return rs.call(this.children, t);
    };
}
function Ln(t) {
    return this.selectAll(t == null ? ns : os(typeof t == "function" ? t : Ee(t)));
}
function Pn(t) {
    typeof t != "function" && (t = Qt(t));
    for(var e = this._groups, r = e.length, n = new Array(r), o = 0; o < r; ++o)for(var i = e[o], a = i.length, s = n[o] = [], l, u = 0; u < a; ++u)(l = i[u]) && t.call(l, l.__data__, u, i) && s.push(l);
    return new P(n, this._parents);
}
function Ce(t) {
    return new Array(t.length);
}
function zn() {
    return new P(this._enter || this._groups.map(Ce), this._parents);
}
function Jt(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Jt.prototype = {
    constructor: Jt,
    appendChild: function(t) {
        return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function(t, e) {
        return this._parent.insertBefore(t, e);
    },
    querySelector: function(t) {
        return this._parent.querySelector(t);
    },
    querySelectorAll: function(t) {
        return this._parent.querySelectorAll(t);
    }
};
function Hn(t) {
    return function() {
        return t;
    };
}
function is(t, e, r, n, o, i) {
    for(var a = 0, s, l = e.length, u = i.length; a < u; ++a)(s = e[a]) ? (s.__data__ = i[a], n[a] = s) : r[a] = new Jt(t, i[a]);
    for(; a < l; ++a)(s = e[a]) && (o[a] = s);
}
function as(t, e, r, n, o, i, a) {
    var s, l, u = new Map, c = e.length, f = i.length, p = new Array(c), h;
    for(s = 0; s < c; ++s)(l = e[s]) && (p[s] = h = a.call(l, l.__data__, s, e) + "", u.has(h) ? o[s] = l : u.set(h, l));
    for(s = 0; s < f; ++s)h = a.call(t, i[s], s, i) + "", (l = u.get(h)) ? (n[s] = l, l.__data__ = i[s], u.delete(h)) : r[s] = new Jt(t, i[s]);
    for(s = 0; s < c; ++s)(l = e[s]) && u.get(p[s]) === l && (o[s] = l);
}
function ss(t) {
    return t.__data__;
}
function $n(t, e) {
    if (!arguments.length) return Array.from(this, ss);
    var r = e ? as : is, n = this._parents, o = this._groups;
    typeof t != "function" && (t = Hn(t));
    for(var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u){
        var c = n[u], f = o[u], p = f.length, h = us(t.call(c, c && c.__data__, u, n)), m = h.length, g = s[u] = new Array(m), x = a[u] = new Array(m), b = l[u] = new Array(p);
        r(c, f, g, x, b, h, e);
        for(var D = 0, k = 0, S, d; D < m; ++D)if (S = g[D]) {
            for(D >= k && (k = D + 1); !(d = x[k]) && ++k < m;);
            S._next = d || null;
        }
    }
    return a = new P(a, n), a._enter = s, a._exit = l, a;
}
function us(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Bn() {
    return new P(this._exit || this._groups.map(Ce), this._parents);
}
function Vn(t, e, r) {
    var n = this.enter(), o = this, i = this.exit();
    return typeof t == "function" ? (n = t(n), n && (n = n.selection())) : n = n.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), r == null ? i.remove() : r(i), n && o ? n.merge(o).order() : o;
}
function Yn(t) {
    for(var e = t.selection ? t.selection() : t, r = this._groups, n = e._groups, o = r.length, i = n.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)for(var u = r[l], c = n[l], f = u.length, p = s[l] = new Array(f), h, m = 0; m < f; ++m)(h = u[m] || c[m]) && (p[m] = h);
    for(; l < o; ++l)s[l] = r[l];
    return new P(s, this._parents);
}
function Un() {
    for(var t = this._groups, e = -1, r = t.length; ++e < r;)for(var n = t[e], o = n.length - 1, i = n[o], a; --o >= 0;)(a = n[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
    return this;
}
function qn(t) {
    t || (t = ls);
    function e(f, p) {
        return f && p ? t(f.__data__, p.__data__) : !f - !p;
    }
    for(var r = this._groups, n = r.length, o = new Array(n), i = 0; i < n; ++i){
        for(var a = r[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)(u = a[c]) && (l[c] = u);
        l.sort(e);
    }
    return new P(o, this._parents).order();
}
function ls(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wn() {
    var t = arguments[0];
    return arguments[0] = this, t.apply(null, arguments), this;
}
function Xn() {
    return Array.from(this);
}
function jn() {
    for(var t = this._groups, e = 0, r = t.length; e < r; ++e)for(var n = t[e], o = 0, i = n.length; o < i; ++o){
        var a = n[o];
        if (a) return a;
    }
    return null;
}
function Gn() {
    let t = 0;
    for (let e of this)++t;
    return t;
}
function Kn() {
    return !this.node();
}
function Zn(t) {
    for(var e = this._groups, r = 0, n = e.length; r < n; ++r)for(var o = e[r], i = 0, a = o.length, s; i < a; ++i)(s = o[i]) && t.call(s, s.__data__, i, o);
    return this;
}
function cs(t) {
    return function() {
        this.removeAttribute(t);
    };
}
function fs(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
function ps(t, e) {
    return function() {
        this.setAttribute(t, e);
    };
}
function hs(t, e) {
    return function() {
        this.setAttributeNS(t.space, t.local, e);
    };
}
function ms(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
    };
}
function ds(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
    };
}
function Qn(t, e) {
    var r = ct(t);
    if (arguments.length < 2) {
        var n = this.node();
        return r.local ? n.getAttributeNS(r.space, r.local) : n.getAttribute(r);
    }
    return this.each((e == null ? r.local ? fs : cs : typeof e == "function" ? r.local ? ds : ms : r.local ? hs : ps)(r, e));
}
function Ne(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function gs(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
function ys(t, e, r) {
    return function() {
        this.style.setProperty(t, e, r);
    };
}
function xs(t, e, r) {
    return function() {
        var n = e.apply(this, arguments);
        n == null ? this.style.removeProperty(t) : this.style.setProperty(t, n, r);
    };
}
function Jn(t, e, r) {
    return arguments.length > 1 ? this.each((e == null ? gs : typeof e == "function" ? xs : ys)(t, e, r ?? "")) : ht(this.node(), t);
}
function ht(t, e) {
    return t.style.getPropertyValue(e) || Ne(t).getComputedStyle(t, null).getPropertyValue(e);
}
function vs(t) {
    return function() {
        delete this[t];
    };
}
function ws(t, e) {
    return function() {
        this[t] = e;
    };
}
function _s(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        r == null ? delete this[t] : this[t] = r;
    };
}
function to(t, e) {
    return arguments.length > 1 ? this.each((e == null ? vs : typeof e == "function" ? _s : ws)(t, e)) : this.node()[t];
}
function eo(t) {
    return t.trim().split(/^|\s+/);
}
function Lr(t) {
    return t.classList || new ro(t);
}
function ro(t) {
    this._node = t, this._names = eo(t.getAttribute("class") || "");
}
ro.prototype = {
    add: function(t) {
        var e = this._names.indexOf(t);
        e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function(t) {
        var e = this._names.indexOf(t);
        e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function(t) {
        return this._names.indexOf(t) >= 0;
    }
};
function no(t, e) {
    for(var r = Lr(t), n = -1, o = e.length; ++n < o;)r.add(e[n]);
}
function oo(t, e) {
    for(var r = Lr(t), n = -1, o = e.length; ++n < o;)r.remove(e[n]);
}
function bs(t) {
    return function() {
        no(this, t);
    };
}
function Ds(t) {
    return function() {
        oo(this, t);
    };
}
function ks(t, e) {
    return function() {
        (e.apply(this, arguments) ? no : oo)(this, t);
    };
}
function io(t, e) {
    var r = eo(t + "");
    if (arguments.length < 2) {
        for(var n = Lr(this.node()), o = -1, i = r.length; ++o < i;)if (!n.contains(r[o])) return !1;
        return !0;
    }
    return this.each((typeof e == "function" ? ks : e ? bs : Ds)(r, e));
}
function Ss() {
    this.textContent = "";
}
function As(t) {
    return function() {
        this.textContent = t;
    };
}
function Ts(t) {
    return function() {
        var e = t.apply(this, arguments);
        this.textContent = e ?? "";
    };
}
function ao(t) {
    return arguments.length ? this.each(t == null ? Ss : (typeof t == "function" ? Ts : As)(t)) : this.node().textContent;
}
function Ms() {
    this.innerHTML = "";
}
function Es(t) {
    return function() {
        this.innerHTML = t;
    };
}
function Cs(t) {
    return function() {
        var e = t.apply(this, arguments);
        this.innerHTML = e ?? "";
    };
}
function so(t) {
    return arguments.length ? this.each(t == null ? Ms : (typeof t == "function" ? Cs : Es)(t)) : this.node().innerHTML;
}
function Ns() {
    this.nextSibling && this.parentNode.appendChild(this);
}
function uo() {
    return this.each(Ns);
}
function Rs() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lo() {
    return this.each(Rs);
}
function co(t) {
    var e = typeof t == "function" ? t : Me(t);
    return this.select(function() {
        return this.appendChild(e.apply(this, arguments));
    });
}
function Fs() {
    return null;
}
function fo(t, e) {
    var r = typeof t == "function" ? t : Me(t), n = e == null ? Fs : typeof e == "function" ? e : _t(e);
    return this.select(function() {
        return this.insertBefore(r.apply(this, arguments), n.apply(this, arguments) || null);
    });
}
function Os() {
    var t = this.parentNode;
    t && t.removeChild(this);
}
function po() {
    return this.each(Os);
}
function Is() {
    var t = this.cloneNode(!1), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ls() {
    var t = this.cloneNode(!0), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ho(t) {
    return this.select(t ? Ls : Is);
}
function mo(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ps(t) {
    return function(e) {
        t.call(this, e, this.__data__);
    };
}
function zs(t) {
    return t.trim().split(/^|\s+/).map(function(e) {
        var r = "", n = e.indexOf(".");
        return n >= 0 && (r = e.slice(n + 1), e = e.slice(0, n)), {
            type: e,
            name: r
        };
    });
}
function Hs(t) {
    return function() {
        var e = this.__on;
        if (e) {
            for(var r = 0, n = -1, o = e.length, i; r < o; ++r)i = e[r], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++n] = i;
            ++n ? e.length = n : delete this.__on;
        }
    };
}
function $s(t, e, r) {
    return function() {
        var n = this.__on, o, i = Ps(e);
        if (n) {
            for(var a = 0, s = n.length; a < s; ++a)if ((o = n[a]).type === t.type && o.name === t.name) {
                this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = r), o.value = e;
                return;
            }
        }
        this.addEventListener(t.type, i, r), o = {
            type: t.type,
            name: t.name,
            value: e,
            listener: i,
            options: r
        }, n ? n.push(o) : this.__on = [
            o
        ];
    };
}
function go(t, e, r) {
    var n = zs(t + ""), o, i = n.length, a;
    if (arguments.length < 2) {
        var s = this.node().__on;
        if (s) {
            for(var l = 0, u = s.length, c; l < u; ++l)for(o = 0, c = s[l]; o < i; ++o)if ((a = n[o]).type === c.type && a.name === c.name) return c.value;
        }
        return;
    }
    for(s = e ? $s : Hs, o = 0; o < i; ++o)this.each(s(n[o], e, r));
    return this;
}
function yo(t, e, r) {
    var n = Ne(t), o = n.CustomEvent;
    typeof o == "function" ? o = new o(e, r) : (o = n.document.createEvent("Event"), r ? (o.initEvent(e, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function Bs(t, e) {
    return function() {
        return yo(this, t, e);
    };
}
function Vs(t, e) {
    return function() {
        return yo(this, t, e.apply(this, arguments));
    };
}
function xo(t, e) {
    return this.each((typeof e == "function" ? Vs : Bs)(t, e));
}
function* vo() {
    for(var t = this._groups, e = 0, r = t.length; e < r; ++e)for(var n = t[e], o = 0, i = n.length, a; o < i; ++o)(a = n[o]) && (yield a);
}
var Pr = [
    null
];
function P(t, e) {
    this._groups = t, this._parents = e;
}
function wo() {
    return new P([
        [
            document.documentElement
        ]
    ], Pr);
}
function Ys() {
    return this;
}
P.prototype = wo.prototype = {
    constructor: P,
    select: Fn,
    selectAll: On,
    selectChild: In,
    selectChildren: Ln,
    filter: Pn,
    data: $n,
    enter: zn,
    exit: Bn,
    join: Vn,
    merge: Yn,
    selection: Ys,
    order: Un,
    sort: qn,
    call: Wn,
    nodes: Xn,
    node: jn,
    size: Gn,
    empty: Kn,
    each: Zn,
    attr: Qn,
    style: Jn,
    property: to,
    classed: io,
    text: ao,
    html: so,
    raise: uo,
    lower: lo,
    append: co,
    insert: fo,
    remove: po,
    clone: ho,
    datum: mo,
    on: go,
    dispatch: xo,
    [Symbol.iterator]: vo
};
var ft = wo;
function j(t) {
    return typeof t == "string" ? new P([
        [
            document.querySelector(t)
        ]
    ], [
        document.documentElement
    ]) : new P([
        [
            t
        ]
    ], Pr);
}
function Re(t, e, r) {
    t.prototype = e.prototype = r, r.constructor = t;
}
function zr(t, e) {
    var r = Object.create(t.prototype);
    for(var n in e)r[n] = e[n];
    return r;
}
function re() {}
var te = .7, Ie = 1 / te, Pt = "\\s*([+-]?\\d+)\\s*", ee = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", at = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Us = /^#([0-9a-f]{3,8})$/, qs = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), Ws = new RegExp(`^rgb\\(${at},${at},${at}\\)$`), Xs = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${ee}\\)$`), js = new RegExp(`^rgba\\(${at},${at},${at},${ee}\\)$`), Gs = new RegExp(`^hsl\\(${ee},${at},${at}\\)$`), Ks = new RegExp(`^hsla\\(${ee},${at},${at},${ee}\\)$`), _o = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
Re(re, rt, {
    copy (t) {
        return Object.assign(new this.constructor, this, t);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: bo,
    formatHex: bo,
    formatHex8: Zs,
    formatHsl: Qs,
    formatRgb: Do,
    toString: Do
});
function bo() {
    return this.rgb().formatHex();
}
function Zs() {
    return this.rgb().formatHex8();
}
function Qs() {
    return Eo(this).formatHsl();
}
function Do() {
    return this.rgb().formatRgb();
}
function rt(t) {
    var e, r;
    return t = (t + "").trim().toLowerCase(), (e = Us.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? ko(e) : r === 3 ? new Z(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? Fe(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? Fe(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = qs.exec(t)) ? new Z(e[1], e[2], e[3], 1) : (e = Ws.exec(t)) ? new Z(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Xs.exec(t)) ? Fe(e[1], e[2], e[3], e[4]) : (e = js.exec(t)) ? Fe(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Gs.exec(t)) ? To(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ks.exec(t)) ? To(e[1], e[2] / 100, e[3] / 100, e[4]) : _o.hasOwnProperty(t) ? ko(_o[t]) : t === "transparent" ? new Z(NaN, NaN, NaN, 0) : null;
}
function ko(t) {
    return new Z(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Fe(t, e, r, n) {
    return n <= 0 && (t = e = r = NaN), new Z(t, e, r, n);
}
function Js(t) {
    return t instanceof re || (t = rt(t)), t ? (t = t.rgb(), new Z(t.r, t.g, t.b, t.opacity)) : new Z;
}
function zt(t, e, r, n) {
    return arguments.length === 1 ? Js(t) : new Z(t, e, r, n ?? 1);
}
function Z(t, e, r, n) {
    this.r = +t, this.g = +e, this.b = +r, this.opacity = +n;
}
Re(Z, zt, zr(re, {
    brighter (t) {
        return t = t == null ? Ie : Math.pow(Ie, t), new Z(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? te : Math.pow(te, t), new Z(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Z(Dt(this.r), Dt(this.g), Dt(this.b), Le(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: So,
    formatHex: So,
    formatHex8: tu,
    formatRgb: Ao,
    toString: Ao
}));
function So() {
    return `#${bt(this.r)}${bt(this.g)}${bt(this.b)}`;
}
function tu() {
    return `#${bt(this.r)}${bt(this.g)}${bt(this.b)}${bt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ao() {
    let t = Le(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${Dt(this.r)}, ${Dt(this.g)}, ${Dt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Le(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Dt(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function bt(t) {
    return t = Dt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function To(t, e, r, n) {
    return n <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new et(t, e, r, n);
}
function Eo(t) {
    if (t instanceof et) return new et(t.h, t.s, t.l, t.opacity);
    if (t instanceof re || (t = rt(t)), !t) return new et;
    if (t instanceof et) return t;
    t = t.rgb();
    var e = t.r / 255, r = t.g / 255, n = t.b / 255, o = Math.min(e, r, n), i = Math.max(e, r, n), a = NaN, s = i - o, l = (i + o) / 2;
    return s ? (e === i ? a = (r - n) / s + (r < n) * 6 : r === i ? a = (n - e) / s + 2 : a = (e - r) / s + 4, s /= l < .5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new et(a, s, l, t.opacity);
}
function ne(t, e, r, n) {
    return arguments.length === 1 ? Eo(t) : new et(t, e, r, n ?? 1);
}
function et(t, e, r, n) {
    this.h = +t, this.s = +e, this.l = +r, this.opacity = +n;
}
Re(et, ne, zr(re, {
    brighter (t) {
        return t = t == null ? Ie : Math.pow(Ie, t), new et(this.h, this.s, this.l * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? te : Math.pow(te, t), new et(this.h, this.s, this.l * t, this.opacity);
    },
    rgb () {
        var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < .5 ? r : 1 - r) * e, o = 2 * r - n;
        return new Z(Hr(t >= 240 ? t - 240 : t + 120, o, n), Hr(t, o, n), Hr(t < 120 ? t + 240 : t - 120, o, n), this.opacity);
    },
    clamp () {
        return new et(Mo(this.h), Oe(this.s), Oe(this.l), Le(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        let t = Le(this.opacity);
        return `${t === 1 ? "hsl(" : "hsla("}${Mo(this.h)}, ${Oe(this.s) * 100}%, ${Oe(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    }
}));
function Mo(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Oe(t) {
    return Math.max(0, Math.min(1, t || 0));
}
function Hr(t, e, r) {
    return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255;
}
function $r(t, e, r, n, o) {
    var i = t * t, a = i * t;
    return ((1 - 3 * t + 3 * i - a) * e + (4 - 6 * i + 3 * a) * r + (1 + 3 * t + 3 * i - 3 * a) * n + a * o) / 6;
}
function Co(t) {
    var e = t.length - 1;
    return function(r) {
        var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, e - 1) : Math.floor(r * e), o = t[n], i = t[n + 1], a = n > 0 ? t[n - 1] : 2 * o - i, s = n < e - 1 ? t[n + 2] : 2 * i - o;
        return $r((r - n / e) * e, a, o, i, s);
    };
}
function No(t) {
    var e = t.length;
    return function(r) {
        var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e), o = t[(n + e - 1) % e], i = t[n % e], a = t[(n + 1) % e], s = t[(n + 2) % e];
        return $r((r - n / e) * e, o, i, a, s);
    };
}
var oe = (t)=>()=>t;
function eu(t, e) {
    return function(r) {
        return t + r * e;
    };
}
function ru(t, e, r) {
    return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(n) {
        return Math.pow(t + n * e, r);
    };
}
function Ro(t) {
    return (t = +t) == 1 ? Pe : function(e, r) {
        return r - e ? ru(e, r, t) : oe(isNaN(e) ? r : e);
    };
}
function Pe(t, e) {
    var r = e - t;
    return r ? eu(t, r) : oe(isNaN(t) ? e : t);
}
var kt = function t(e) {
    var r = Ro(e);
    function n(o, i) {
        var a = r((o = zt(o)).r, (i = zt(i)).r), s = r(o.g, i.g), l = r(o.b, i.b), u = Pe(o.opacity, i.opacity);
        return function(c) {
            return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
        };
    }
    return n.gamma = t, n;
}(1);
function Fo(t) {
    return function(e) {
        var r = e.length, n = new Array(r), o = new Array(r), i = new Array(r), a, s;
        for(a = 0; a < r; ++a)s = zt(e[a]), n[a] = s.r || 0, o[a] = s.g || 0, i[a] = s.b || 0;
        return n = t(n), o = t(o), i = t(i), s.opacity = 1, function(l) {
            return s.r = n(l), s.g = o(l), s.b = i(l), s + "";
        };
    };
}
var nu = Fo(Co), ou = Fo(No);
function Oo(t, e) {
    e || (e = []);
    var r = t ? Math.min(e.length, t.length) : 0, n = e.slice(), o;
    return function(i) {
        for(o = 0; o < r; ++o)n[o] = t[o] * (1 - i) + e[o] * i;
        return n;
    };
}
function Io(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Lo(t, e) {
    var r = e ? e.length : 0, n = t ? Math.min(r, t.length) : 0, o = new Array(n), i = new Array(r), a;
    for(a = 0; a < n; ++a)o[a] = st(t[a], e[a]);
    for(; a < r; ++a)i[a] = e[a];
    return function(s) {
        for(a = 0; a < n; ++a)i[a] = o[a](s);
        return i;
    };
}
function Po(t, e) {
    var r = new Date;
    return t = +t, e = +e, function(n) {
        return r.setTime(t * (1 - n) + e * n), r;
    };
}
function q(t, e) {
    return t = +t, e = +e, function(r) {
        return t * (1 - r) + e * r;
    };
}
function zo(t, e) {
    var r = {}, n = {}, o;
    (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
    for(o in e)o in t ? r[o] = st(t[o], e[o]) : n[o] = e[o];
    return function(i) {
        for(o in r)n[o] = r[o](i);
        return n;
    };
}
var Vr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Br = new RegExp(Vr.source, "g");
function iu(t) {
    return function() {
        return t;
    };
}
function au(t) {
    return function(e) {
        return t(e) + "";
    };
}
function ie(t, e) {
    var r = Vr.lastIndex = Br.lastIndex = 0, n, o, i, a = -1, s = [], l = [];
    for(t = t + "", e = e + ""; (n = Vr.exec(t)) && (o = Br.exec(e));)(i = o.index) > r && (i = e.slice(r, i), s[a] ? s[a] += i : s[++a] = i), (n = n[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({
        i: a,
        x: q(n, o)
    })), r = Br.lastIndex;
    return r < e.length && (i = e.slice(r), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? au(l[0].x) : iu(e) : (e = l.length, function(u) {
        for(var c = 0, f; c < e; ++c)s[(f = l[c]).i] = f.x(u);
        return s.join("");
    });
}
function st(t, e) {
    var r = typeof e, n;
    return e == null || r === "boolean" ? oe(e) : (r === "number" ? q : r === "string" ? (n = rt(e)) ? (e = n, kt) : ie : e instanceof rt ? kt : e instanceof Date ? Po : Io(e) ? Oo : Array.isArray(e) ? Lo : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? zo : q)(t, e);
}
function ze(t, e) {
    return t = +t, e = +e, function(r) {
        return Math.round(t * (1 - r) + e * r);
    };
}
var Ho = 180 / Math.PI, He = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function Yr(t, e, r, n, o, i) {
    var a, s, l;
    return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * r + e * n) && (r -= t * l, n -= e * l), (s = Math.sqrt(r * r + n * n)) && (r /= s, n /= s, l /= s), t * n < e * r && (t = -t, e = -e, l = -l, a = -a), {
        translateX: o,
        translateY: i,
        rotate: Math.atan2(e, t) * Ho,
        skewX: Math.atan(l) * Ho,
        scaleX: a,
        scaleY: s
    };
}
var $e;
function $o(t) {
    let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? He : Yr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Bo(t) {
    return t == null ? He : ($e || ($e = document.createElementNS("http://www.w3.org/2000/svg", "g")), $e.setAttribute("transform", t), (t = $e.transform.baseVal.consolidate()) ? (t = t.matrix, Yr(t.a, t.b, t.c, t.d, t.e, t.f)) : He);
}
function Vo(t, e, r, n) {
    function o(u) {
        return u.length ? u.pop() + " " : "";
    }
    function i(u, c, f, p, h, m) {
        if (u !== f || c !== p) {
            var g = h.push("translate(", null, e, null, r);
            m.push({
                i: g - 4,
                x: q(u, f)
            }, {
                i: g - 2,
                x: q(c, p)
            });
        } else (f || p) && h.push("translate(" + f + e + p + r);
    }
    function a(u, c, f, p) {
        u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), p.push({
            i: f.push(o(f) + "rotate(", null, n) - 2,
            x: q(u, c)
        })) : c && f.push(o(f) + "rotate(" + c + n);
    }
    function s(u, c, f, p) {
        u !== c ? p.push({
            i: f.push(o(f) + "skewX(", null, n) - 2,
            x: q(u, c)
        }) : c && f.push(o(f) + "skewX(" + c + n);
    }
    function l(u, c, f, p, h, m) {
        if (u !== f || c !== p) {
            var g = h.push(o(h) + "scale(", null, ",", null, ")");
            m.push({
                i: g - 4,
                x: q(u, f)
            }, {
                i: g - 2,
                x: q(c, p)
            });
        } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
    }
    return function(u, c) {
        var f = [], p = [];
        return u = t(u), c = t(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, p), a(u.rotate, c.rotate, f, p), s(u.skewX, c.skewX, f, p), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, p), u = c = null, function(h) {
            for(var m = -1, g = p.length, x; ++m < g;)f[(x = p[m]).i] = x.x(h);
            return f.join("");
        };
    };
}
var Ur = Vo($o, "px, ", "px)", "deg)"), qr = Vo(Bo, ", ", ")", ")");
var Ht = 0, se = 0, ae = 0, Uo = 1e3, Be, ue, Ve = 0, St = 0, Ye = 0, le = typeof performance == "object" && performance.now ? performance : Date, qo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
    setTimeout(t, 17);
};
function Tt() {
    return St || (qo(su), St = le.now() + Ye);
}
function su() {
    St = 0;
}
function At() {
    this._call = this._time = this._next = null;
}
At.prototype = Ue.prototype = {
    constructor: At,
    restart: function(t, e, r) {
        if (typeof t != "function") throw new TypeError("callback is not a function");
        r = (r == null ? Tt() : +r) + (e == null ? 0 : +e), !this._next && ue !== this && (ue ? ue._next = this : Be = this, ue = this), this._call = t, this._time = r, Wr();
    },
    stop: function() {
        this._call && (this._call = null, this._time = 1 / 0, Wr());
    }
};
function Ue(t, e, r) {
    var n = new At;
    return n.restart(t, e, r), n;
}
function Wo() {
    Tt(), ++Ht;
    for(var t = Be, e; t;)(e = St - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
    --Ht;
}
function Yo() {
    St = (Ve = le.now()) + Ye, Ht = se = 0;
    try {
        Wo();
    } finally{
        Ht = 0, lu(), St = 0;
    }
}
function uu() {
    var t = le.now(), e = t - Ve;
    e > Uo && (Ye -= e, Ve = t);
}
function lu() {
    for(var t, e = Be, r, n = 1 / 0; e;)e._call ? (n > e._time && (n = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : Be = r);
    ue = t, Wr(n);
}
function Wr(t) {
    if (!Ht) {
        se && (se = clearTimeout(se));
        var e = t - St;
        e > 24 ? (t < 1 / 0 && (se = setTimeout(Yo, t - le.now() - Ye)), ae && (ae = clearInterval(ae))) : (ae || (Ve = le.now(), ae = setInterval(uu, Uo)), Ht = 1, qo(Yo));
    }
}
function qe(t, e, r) {
    var n = new At;
    return e = e == null ? 0 : +e, n.restart((o)=>{
        n.stop(), t(o + e);
    }, e, r), n;
}
function We(t, e, r) {
    var n = new At, o = e;
    return e == null ? (n.restart(t, e, r), n) : (n._restart = n.restart, n.restart = function(i, a, s) {
        a = +a, s = s == null ? Tt() : +s, n._restart(function l(u) {
            u += o, n._restart(l, o += a, s), i(u);
        }, a, s);
    }, n.restart(t, e, r), n);
}
var cu = Fr("start", "end", "cancel", "interrupt"), fu = [], Go = 0, Xo = 1, je = 2, Xe = 3, jo = 4, Ge = 5, ce = 6;
function mt(t, e, r, n, o, i) {
    var a = t.__transition;
    if (!a) t.__transition = {};
    else if (r in a) return;
    pu(t, r, {
        name: e,
        index: n,
        group: o,
        on: cu,
        tween: fu,
        time: i.time,
        delay: i.delay,
        duration: i.duration,
        ease: i.ease,
        timer: null,
        state: Go
    });
}
function fe(t, e) {
    var r = V(t, e);
    if (r.state > Go) throw new Error("too late; already scheduled");
    return r;
}
function W(t, e) {
    var r = V(t, e);
    if (r.state > Xe) throw new Error("too late; already running");
    return r;
}
function V(t, e) {
    var r = t.__transition;
    if (!r || !(r = r[e])) throw new Error("transition not found");
    return r;
}
function pu(t, e, r) {
    var n = t.__transition, o;
    n[e] = r, r.timer = Ue(i, 0, r.time);
    function i(u) {
        r.state = Xo, r.timer.restart(a, r.delay, r.time), r.delay <= u && a(u - r.delay);
    }
    function a(u) {
        var c, f, p, h;
        if (r.state !== Xo) return l();
        for(c in n)if (h = n[c], h.name === r.name) {
            if (h.state === Xe) return qe(a);
            h.state === jo ? (h.state = ce, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete n[c]) : +c < e && (h.state = ce, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete n[c]);
        }
        if (qe(function() {
            r.state === Xe && (r.state = jo, r.timer.restart(s, r.delay, r.time), s(u));
        }), r.state = je, r.on.call("start", t, t.__data__, r.index, r.group), r.state === je) {
            for(r.state = Xe, o = new Array(p = r.tween.length), c = 0, f = -1; c < p; ++c)(h = r.tween[c].value.call(t, t.__data__, r.index, r.group)) && (o[++f] = h);
            o.length = f + 1;
        }
    }
    function s(u) {
        for(var c = u < r.duration ? r.ease.call(null, u / r.duration) : (r.timer.restart(l), r.state = Ge, 1), f = -1, p = o.length; ++f < p;)o[f].call(t, c);
        r.state === Ge && (r.on.call("end", t, t.__data__, r.index, r.group), l());
    }
    function l() {
        r.state = ce, r.timer.stop(), delete n[e];
        for(var u in n)return;
        delete t.__transition;
    }
}
function Ke(t, e) {
    var r = t.__transition, n, o, i = !0, a;
    if (r) {
        e = e == null ? null : e + "";
        for(a in r){
            if ((n = r[a]).name !== e) {
                i = !1;
                continue;
            }
            o = n.state > je && n.state < Ge, n.state = ce, n.timer.stop(), n.on.call(o ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete r[a];
        }
        i && delete t.__transition;
    }
}
function Ko(t) {
    return this.each(function() {
        Ke(this, t);
    });
}
function hu(t, e) {
    var r, n;
    return function() {
        var o = W(this, t), i = o.tween;
        if (i !== r) {
            n = r = i;
            for(var a = 0, s = n.length; a < s; ++a)if (n[a].name === e) {
                n = n.slice(), n.splice(a, 1);
                break;
            }
        }
        o.tween = n;
    };
}
function mu(t, e, r) {
    var n, o;
    if (typeof r != "function") throw new Error;
    return function() {
        var i = W(this, t), a = i.tween;
        if (a !== n) {
            o = (n = a).slice();
            for(var s = {
                name: e,
                value: r
            }, l = 0, u = o.length; l < u; ++l)if (o[l].name === e) {
                o[l] = s;
                break;
            }
            l === u && o.push(s);
        }
        i.tween = o;
    };
}
function Zo(t, e) {
    var r = this._id;
    if (t += "", arguments.length < 2) {
        for(var n = V(this.node(), r).tween, o = 0, i = n.length, a; o < i; ++o)if ((a = n[o]).name === t) return a.value;
        return null;
    }
    return this.each((e == null ? hu : mu)(r, t, e));
}
function $t(t, e, r) {
    var n = t._id;
    return t.each(function() {
        var o = W(this, n);
        (o.value || (o.value = {}))[e] = r.apply(this, arguments);
    }), function(o) {
        return V(o, n).value[e];
    };
}
function Ze(t, e) {
    var r;
    return (typeof e == "number" ? q : e instanceof rt ? kt : (r = rt(e)) ? (e = r, kt) : ie)(t, e);
}
function du(t) {
    return function() {
        this.removeAttribute(t);
    };
}
function gu(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
function yu(t, e, r) {
    var n, o = r + "", i;
    return function() {
        var a = this.getAttribute(t);
        return a === o ? null : a === n ? i : i = e(n = a, r);
    };
}
function xu(t, e, r) {
    var n, o = r + "", i;
    return function() {
        var a = this.getAttributeNS(t.space, t.local);
        return a === o ? null : a === n ? i : i = e(n = a, r);
    };
}
function vu(t, e, r) {
    var n, o, i;
    return function() {
        var a, s = r(this), l;
        return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === n && l === o ? i : (o = l, i = e(n = a, s)));
    };
}
function wu(t, e, r) {
    var n, o, i;
    return function() {
        var a, s = r(this), l;
        return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === n && l === o ? i : (o = l, i = e(n = a, s)));
    };
}
function Qo(t, e) {
    var r = ct(t), n = r === "transform" ? qr : Ze;
    return this.attrTween(t, typeof e == "function" ? (r.local ? wu : vu)(r, n, $t(this, "attr." + t, e)) : e == null ? (r.local ? gu : du)(r) : (r.local ? xu : yu)(r, n, e));
}
function _u(t, e) {
    return function(r) {
        this.setAttribute(t, e.call(this, r));
    };
}
function bu(t, e) {
    return function(r) {
        this.setAttributeNS(t.space, t.local, e.call(this, r));
    };
}
function Du(t, e) {
    var r, n;
    function o() {
        var i = e.apply(this, arguments);
        return i !== n && (r = (n = i) && bu(t, i)), r;
    }
    return o._value = e, o;
}
function ku(t, e) {
    var r, n;
    function o() {
        var i = e.apply(this, arguments);
        return i !== n && (r = (n = i) && _u(t, i)), r;
    }
    return o._value = e, o;
}
function Jo(t, e) {
    var r = "attr." + t;
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error;
    var n = ct(t);
    return this.tween(r, (n.local ? Du : ku)(n, e));
}
function Su(t, e) {
    return function() {
        fe(this, t).delay = +e.apply(this, arguments);
    };
}
function Au(t, e) {
    return e = +e, function() {
        fe(this, t).delay = e;
    };
}
function ti(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? Su : Au)(e, t)) : V(this.node(), e).delay;
}
function Tu(t, e) {
    return function() {
        W(this, t).duration = +e.apply(this, arguments);
    };
}
function Mu(t, e) {
    return e = +e, function() {
        W(this, t).duration = e;
    };
}
function ei(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? Tu : Mu)(e, t)) : V(this.node(), e).duration;
}
function Eu(t, e) {
    if (typeof e != "function") throw new Error;
    return function() {
        W(this, t).ease = e;
    };
}
function ri(t) {
    var e = this._id;
    return arguments.length ? this.each(Eu(e, t)) : V(this.node(), e).ease;
}
function Cu(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        if (typeof r != "function") throw new Error;
        W(this, t).ease = r;
    };
}
function ni(t) {
    if (typeof t != "function") throw new Error;
    return this.each(Cu(this._id, t));
}
function oi(t) {
    typeof t != "function" && (t = Qt(t));
    for(var e = this._groups, r = e.length, n = new Array(r), o = 0; o < r; ++o)for(var i = e[o], a = i.length, s = n[o] = [], l, u = 0; u < a; ++u)(l = i[u]) && t.call(l, l.__data__, u, i) && s.push(l);
    return new K(n, this._parents, this._name, this._id);
}
function ii(t) {
    if (t._id !== this._id) throw new Error;
    for(var e = this._groups, r = t._groups, n = e.length, o = r.length, i = Math.min(n, o), a = new Array(n), s = 0; s < i; ++s)for(var l = e[s], u = r[s], c = l.length, f = a[s] = new Array(c), p, h = 0; h < c; ++h)(p = l[h] || u[h]) && (f[h] = p);
    for(; s < n; ++s)a[s] = e[s];
    return new K(a, this._parents, this._name, this._id);
}
function Nu(t) {
    return (t + "").trim().split(/^|\s+/).every(function(e) {
        var r = e.indexOf(".");
        return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
    });
}
function Ru(t, e, r) {
    var n, o, i = Nu(e) ? fe : W;
    return function() {
        var a = i(this, t), s = a.on;
        s !== n && (o = (n = s).copy()).on(e, r), a.on = o;
    };
}
function ai(t, e) {
    var r = this._id;
    return arguments.length < 2 ? V(this.node(), r).on.on(t) : this.each(Ru(r, t, e));
}
function Fu(t) {
    return function() {
        var e = this.parentNode;
        for(var r in this.__transition)if (+r !== t) return;
        e && e.removeChild(this);
    };
}
function si() {
    return this.on("end.remove", Fu(this._id));
}
function ui(t) {
    var e = this._name, r = this._id;
    typeof t != "function" && (t = _t(t));
    for(var n = this._groups, o = n.length, i = new Array(o), a = 0; a < o; ++a)for(var s = n[a], l = s.length, u = i[a] = new Array(l), c, f, p = 0; p < l; ++p)(c = s[p]) && (f = t.call(c, c.__data__, p, s)) && ("__data__" in c && (f.__data__ = c.__data__), u[p] = f, mt(u[p], e, r, p, u, V(c, r)));
    return new K(i, this._parents, e, r);
}
function li(t) {
    var e = this._name, r = this._id;
    typeof t != "function" && (t = Zt(t));
    for(var n = this._groups, o = n.length, i = [], a = [], s = 0; s < o; ++s)for(var l = n[s], u = l.length, c, f = 0; f < u; ++f)if (c = l[f]) {
        for(var p = t.call(c, c.__data__, f, l), h, m = V(c, r), g = 0, x = p.length; g < x; ++g)(h = p[g]) && mt(h, e, r, g, p, m);
        i.push(p), a.push(c);
    }
    return new K(i, a, e, r);
}
var Ou = ft.prototype.constructor;
function ci() {
    return new Ou(this._groups, this._parents);
}
function Iu(t, e) {
    var r, n, o;
    return function() {
        var i = ht(this, t), a = (this.style.removeProperty(t), ht(this, t));
        return i === a ? null : i === r && a === n ? o : o = e(r = i, n = a);
    };
}
function fi(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
function Lu(t, e, r) {
    var n, o = r + "", i;
    return function() {
        var a = ht(this, t);
        return a === o ? null : a === n ? i : i = e(n = a, r);
    };
}
function Pu(t, e, r) {
    var n, o, i;
    return function() {
        var a = ht(this, t), s = r(this), l = s + "";
        return s == null && (l = s = (this.style.removeProperty(t), ht(this, t))), a === l ? null : a === n && l === o ? i : (o = l, i = e(n = a, s));
    };
}
function zu(t, e) {
    var r, n, o, i = "style." + e, a = "end." + i, s;
    return function() {
        var l = W(this, t), u = l.on, c = l.value[i] == null ? s || (s = fi(e)) : void 0;
        (u !== r || o !== c) && (n = (r = u).copy()).on(a, o = c), l.on = n;
    };
}
function pi(t, e, r) {
    var n = (t += "") == "transform" ? Ur : Ze;
    return e == null ? this.styleTween(t, Iu(t, n)).on("end.style." + t, fi(t)) : typeof e == "function" ? this.styleTween(t, Pu(t, n, $t(this, "style." + t, e))).each(zu(this._id, t)) : this.styleTween(t, Lu(t, n, e), r).on("end.style." + t, null);
}
function Hu(t, e, r) {
    return function(n) {
        this.style.setProperty(t, e.call(this, n), r);
    };
}
function $u(t, e, r) {
    var n, o;
    function i() {
        var a = e.apply(this, arguments);
        return a !== o && (n = (o = a) && Hu(t, a, r)), n;
    }
    return i._value = e, i;
}
function hi(t, e, r) {
    var n = "style." + (t += "");
    if (arguments.length < 2) return (n = this.tween(n)) && n._value;
    if (e == null) return this.tween(n, null);
    if (typeof e != "function") throw new Error;
    return this.tween(n, $u(t, e, r ?? ""));
}
function Bu(t) {
    return function() {
        this.textContent = t;
    };
}
function Vu(t) {
    return function() {
        var e = t(this);
        this.textContent = e ?? "";
    };
}
function mi(t) {
    return this.tween("text", typeof t == "function" ? Vu($t(this, "text", t)) : Bu(t == null ? "" : t + ""));
}
function Yu(t) {
    return function(e) {
        this.textContent = t.call(this, e);
    };
}
function Uu(t) {
    var e, r;
    function n() {
        var o = t.apply(this, arguments);
        return o !== r && (e = (r = o) && Yu(o)), e;
    }
    return n._value = t, n;
}
function di(t) {
    var e = "text";
    if (arguments.length < 1) return (e = this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != "function") throw new Error;
    return this.tween(e, Uu(t));
}
function gi() {
    for(var t = this._name, e = this._id, r = Qe(), n = this._groups, o = n.length, i = 0; i < o; ++i)for(var a = n[i], s = a.length, l, u = 0; u < s; ++u)if (l = a[u]) {
        var c = V(l, e);
        mt(l, t, r, u, a, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease
        });
    }
    return new K(n, this._parents, t, r);
}
function yi() {
    var t, e, r = this, n = r._id, o = r.size();
    return new Promise(function(i, a) {
        var s = {
            value: a
        }, l = {
            value: function() {
                --o === 0 && i();
            }
        };
        r.each(function() {
            var u = W(this, n), c = u.on;
            c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), u.on = e;
        }), o === 0 && i();
    });
}
var qu = 0;
function K(t, e, r, n) {
    this._groups = t, this._parents = e, this._name = r, this._id = n;
}
function xi(t) {
    return ft().transition(t);
}
function Qe() {
    return ++qu;
}
var pt = ft.prototype;
K.prototype = xi.prototype = {
    constructor: K,
    select: ui,
    selectAll: li,
    selectChild: pt.selectChild,
    selectChildren: pt.selectChildren,
    filter: oi,
    merge: ii,
    selection: ci,
    transition: gi,
    call: pt.call,
    nodes: pt.nodes,
    node: pt.node,
    size: pt.size,
    empty: pt.empty,
    each: pt.each,
    on: ai,
    attr: Qo,
    attrTween: Jo,
    style: pi,
    styleTween: hi,
    text: mi,
    textTween: di,
    remove: si,
    tween: Zo,
    delay: ti,
    duration: ei,
    ease: ri,
    easeVarying: ni,
    end: yi,
    [Symbol.iterator]: pt[Symbol.iterator]
};
var X = (t)=>+t;
function Je(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Wu = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Je
};
function Xu(t, e) {
    for(var r; !(r = t.__transition) || !(r = r[e]);)if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
    return r;
}
function vi(t) {
    var e, r;
    t instanceof K ? (e = t._id, t = t._name) : (e = Qe(), (r = Wu).time = Tt(), t = t == null ? null : t + "");
    for(var n = this._groups, o = n.length, i = 0; i < o; ++i)for(var a = n[i], s = a.length, l, u = 0; u < s; ++u)(l = a[u]) && mt(l, t, e, u, a, r || Xu(l, e));
    return new K(n, this._parents, t, e);
}
ft.prototype.interrupt = Ko;
ft.prototype.transition = vi;
var { abs: Jd, max: tg, min: eg } = Math;
function wi(t) {
    return [
        +t[0],
        +t[1]
    ];
}
function ju(t) {
    return [
        wi(t[0]),
        wi(t[1])
    ];
}
var rg = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map(Xr),
    input: function(t, e) {
        return t == null ? null : [
            [
                +t[0],
                e[0][1]
            ],
            [
                +t[1],
                e[1][1]
            ]
        ];
    },
    output: function(t) {
        return t && [
            t[0][0],
            t[1][0]
        ];
    }
}, ng = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map(Xr),
    input: function(t, e) {
        return t == null ? null : [
            [
                e[0][0],
                +t[0]
            ],
            [
                e[1][0],
                +t[1]
            ]
        ];
    },
    output: function(t) {
        return t && [
            t[0][1],
            t[1][1]
        ];
    }
}, og = {
    name: "xy",
    handles: [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map(Xr),
    input: function(t) {
        return t == null ? null : ju(t);
    },
    output: function(t) {
        return t;
    }
};
function Xr(t) {
    return {
        type: t
    };
}
var _i = {}, jr = {}, Gr = 34, pe = 10, Kr = 13;
function Di(t) {
    return new Function("d", "return {" + t.map(function(e, r) {
        return JSON.stringify(e) + ": d[" + r + '] || ""';
    }).join(",") + "}");
}
function Gu(t, e) {
    var r = Di(t);
    return function(n, o) {
        return e(r(n), o, t);
    };
}
function bi(t) {
    var e = Object.create(null), r = [];
    return t.forEach(function(n) {
        for(var o in n)o in e || r.push(e[o] = o);
    }), r;
}
function Q(t, e) {
    var r = t + "", n = r.length;
    return n < e ? new Array(e - n + 1).join(0) + r : r;
}
function Ku(t) {
    return t < 0 ? "-" + Q(-t, 6) : t > 9999 ? "+" + Q(t, 6) : Q(t, 4);
}
function Zu(t) {
    var e = t.getUTCHours(), r = t.getUTCMinutes(), n = t.getUTCSeconds(), o = t.getUTCMilliseconds();
    return isNaN(t) ? "Invalid Date" : Ku(t.getUTCFullYear(), 4) + "-" + Q(t.getUTCMonth() + 1, 2) + "-" + Q(t.getUTCDate(), 2) + (o ? "T" + Q(e, 2) + ":" + Q(r, 2) + ":" + Q(n, 2) + "." + Q(o, 3) + "Z" : n ? "T" + Q(e, 2) + ":" + Q(r, 2) + ":" + Q(n, 2) + "Z" : r || e ? "T" + Q(e, 2) + ":" + Q(r, 2) + "Z" : "");
}
function he(t) {
    var e = new RegExp('["' + t + `
\r]`), r = t.charCodeAt(0);
    function n(f, p) {
        var h, m, g = o(f, function(x, b) {
            if (h) return h(x, b - 1);
            m = x, h = p ? Gu(x, p) : Di(x);
        });
        return g.columns = m || [], g;
    }
    function o(f, p) {
        var h = [], m = f.length, g = 0, x = 0, b, D = m <= 0, k = !1;
        f.charCodeAt(m - 1) === pe && --m, f.charCodeAt(m - 1) === Kr && --m;
        function S() {
            if (D) return jr;
            if (k) return k = !1, _i;
            var w, E = g, R;
            if (f.charCodeAt(E) === Gr) {
                for(; g++ < m && f.charCodeAt(g) !== Gr || f.charCodeAt(++g) === Gr;);
                return (w = g) >= m ? D = !0 : (R = f.charCodeAt(g++)) === pe ? k = !0 : R === Kr && (k = !0, f.charCodeAt(g) === pe && ++g), f.slice(E + 1, w - 1).replace(/""/g, '"');
            }
            for(; g < m;){
                if ((R = f.charCodeAt(w = g++)) === pe) k = !0;
                else if (R === Kr) k = !0, f.charCodeAt(g) === pe && ++g;
                else if (R !== r) continue;
                return f.slice(E, w);
            }
            return D = !0, f.slice(E, m);
        }
        for(; (b = S()) !== jr;){
            for(var d = []; b !== _i && b !== jr;)d.push(b), b = S();
            p && (d = p(d, x++)) == null || h.push(d);
        }
        return h;
    }
    function i(f, p) {
        return f.map(function(h) {
            return p.map(function(m) {
                return c(h[m]);
            }).join(t);
        });
    }
    function a(f, p) {
        return p == null && (p = bi(f)), [
            p.map(c).join(t)
        ].concat(i(f, p)).join(`
`);
    }
    function s(f, p) {
        return p == null && (p = bi(f)), i(f, p).join(`
`);
    }
    function l(f) {
        return f.map(u).join(`
`);
    }
    function u(f) {
        return f.map(c).join(t);
    }
    function c(f) {
        return f == null ? "" : f instanceof Date ? Zu(f) : e.test(f += "") ? '"' + f.replace(/"/g, '""') + '"' : f;
    }
    return {
        parse: n,
        parseRows: o,
        format: a,
        formatBody: s,
        formatRows: l,
        formatRow: u,
        formatValue: c
    };
}
var Mt = he(","), Zr = Mt.parse, Qu = Mt.parseRows, Ju = Mt.format, tl = Mt.formatBody, el = Mt.formatRows, rl = Mt.formatRow, nl = Mt.formatValue;
var Et = he("	"), Qr = Et.parse, ol = Et.parseRows, il = Et.format, al = Et.formatBody, sl = Et.formatRows, ul = Et.formatRow, ll = Et.formatValue;
function cl(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.text();
}
function tr(t, e) {
    return fetch(t, e).then(cl);
}
function ki(t) {
    return function(e, r, n) {
        return arguments.length === 2 && typeof r == "function" && (n = r, r = void 0), tr(e, r).then(function(o) {
            return t(o, n);
        });
    };
}
var er = ki(Zr), rr = ki(Qr);
function fl(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    if (!(t.status === 204 || t.status === 205)) return t.json();
}
function nr(t, e) {
    return fetch(t, e).then(fl);
}
function Jr(t) {
    return (e, r)=>tr(e, r).then((n)=>new DOMParser().parseFromString(n, t));
}
var or = Jr("application/xml"), pl = Jr("text/html"), hl = Jr("image/svg+xml");
function Si(t) {
    return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ct(t, e) {
    if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var r, n = t.slice(0, r);
    return [
        n.length > 1 ? n[0] + n.slice(2) : n,
        +t.slice(r + 1)
    ];
}
function ut(t) {
    return t = Ct(Math.abs(t)), t ? t[1] : NaN;
}
function Ai(t, e) {
    return function(r, n) {
        for(var o = r.length, i = [], a = 0, s = t[0], l = 0; o > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), i.push(r.substring(o -= s, o + s)), !((l += s + 1) > n));)s = t[a = (a + 1) % t.length];
        return i.reverse().join(e);
    };
}
function Ti(t) {
    return function(e) {
        return e.replace(/[0-9]/g, function(r) {
            return t[+r];
        });
    };
}
var ml = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function dt(t) {
    if (!(e = ml.exec(t))) throw new Error("invalid format: " + t);
    var e;
    return new ir({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10]
    });
}
dt.prototype = ir.prototype;
function ir(t) {
    this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ir.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Mi(t) {
    t: for(var e = t.length, r = 1, n = -1, o; r < e; ++r)switch(t[r]){
        case ".":
            n = o = r;
            break;
        case "0":
            n === 0 && (n = r), o = r;
            break;
        default:
            if (!+t[r]) break t;
            n > 0 && (n = 0);
            break;
    }
    return n > 0 ? t.slice(0, n) + t.slice(o + 1) : t;
}
var tn;
function Ei(t, e) {
    var r = Ct(t, e);
    if (!r) return t + "";
    var n = r[0], o = r[1], i = o - (tn = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, a = n.length;
    return i === a ? n : i > a ? n + new Array(i - a + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Ct(t, Math.max(0, e + i - 1))[0];
}
function en(t, e) {
    var r = Ct(t, e);
    if (!r) return t + "";
    var n = r[0], o = r[1];
    return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0");
}
var rn = {
    "%": (t, e)=>(t * 100).toFixed(e),
    b: (t)=>Math.round(t).toString(2),
    c: (t)=>t + "",
    d: Si,
    e: (t, e)=>t.toExponential(e),
    f: (t, e)=>t.toFixed(e),
    g: (t, e)=>t.toPrecision(e),
    o: (t)=>Math.round(t).toString(8),
    p: (t, e)=>en(t * 100, e),
    r: en,
    s: Ei,
    X: (t)=>Math.round(t).toString(16).toUpperCase(),
    x: (t)=>Math.round(t).toString(16)
};
function nn(t) {
    return t;
}
var Ci = Array.prototype.map, Ni = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function Ri(t) {
    var e = t.grouping === void 0 || t.thousands === void 0 ? nn : Ai(Ci.call(t.grouping, Number), t.thousands + ""), r = t.currency === void 0 ? "" : t.currency[0] + "", n = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", i = t.numerals === void 0 ? nn : Ti(Ci.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "\u2212" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
    function u(f) {
        f = dt(f);
        var p = f.fill, h = f.align, m = f.sign, g = f.symbol, x = f.zero, b = f.width, D = f.comma, k = f.precision, S = f.trim, d = f.type;
        d === "n" ? (D = !0, d = "g") : rn[d] || (k === void 0 && (k = 12), S = !0, d = "g"), (x || p === "0" && h === "=") && (x = !0, p = "0", h = "=");
        var w = g === "$" ? r : g === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", E = g === "$" ? n : /[%p]/.test(d) ? a : "", R = rn[d], I = /[defgprs%]/.test(d);
        k = k === void 0 ? 6 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, k)) : Math.max(0, Math.min(20, k));
        function H(_) {
            var C = w, A = E, L, O, z;
            if (d === "c") A = R(_) + A, _ = "";
            else {
                _ = +_;
                var $ = _ < 0 || 1 / _ < 0;
                if (_ = isNaN(_) ? l : R(Math.abs(_), k), S && (_ = Mi(_)), $ && +_ == 0 && m !== "+" && ($ = !1), C = ($ ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + C, A = (d === "s" ? Ni[8 + tn / 3] : "") + A + ($ && m === "(" ? ")" : ""), I) {
                    for(L = -1, O = _.length; ++L < O;)if (z = _.charCodeAt(L), 48 > z || z > 57) {
                        A = (z === 46 ? o + _.slice(L + 1) : _.slice(L)) + A, _ = _.slice(0, L);
                        break;
                    }
                }
            }
            D && !x && (_ = e(_, 1 / 0));
            var G = C.length + _.length + A.length, y = G < b ? new Array(b - G + 1).join(p) : "";
            switch(D && x && (_ = e(y + _, y.length ? b - A.length : 1 / 0), y = ""), h){
                case "<":
                    _ = C + _ + A + y;
                    break;
                case "=":
                    _ = C + y + _ + A;
                    break;
                case "^":
                    _ = y.slice(0, G = y.length >> 1) + C + _ + A + y.slice(G);
                    break;
                default:
                    _ = y + C + _ + A;
                    break;
            }
            return i(_);
        }
        return H.toString = function() {
            return f + "";
        }, H;
    }
    function c(f, p) {
        var h = u((f = dt(f), f.type = "f", f)), m = Math.max(-8, Math.min(8, Math.floor(ut(p) / 3))) * 3, g = Math.pow(10, -m), x = Ni[8 + m / 3];
        return function(b) {
            return h(g * b) + x;
        };
    }
    return {
        format: u,
        formatPrefix: c
    };
}
var ar, nt, sr;
on({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function on(t) {
    return ar = Ri(t), nt = ar.format, sr = ar.formatPrefix, ar;
}
function an(t) {
    return Math.max(0, -ut(Math.abs(t)));
}
function sn(t, e) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ut(e) / 3))) * 3 - ut(Math.abs(t)));
}
function un(t, e) {
    return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ut(e) - ut(t)) + 1;
}
function Fi(t, e) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(t);
            break;
        default:
            this.range(e).domain(t);
            break;
    }
    return this;
}
function ln(t) {
    return function() {
        return t;
    };
}
function cn(t) {
    return +t;
}
var Oi = [
    0,
    1
];
function Bt(t) {
    return t;
}
function fn(t, e) {
    return (e -= t = +t) ? function(r) {
        return (r - t) / e;
    } : ln(isNaN(e) ? NaN : .5);
}
function dl(t, e) {
    var r;
    return t > e && (r = t, t = e, e = r), function(n) {
        return Math.max(t, Math.min(e, n));
    };
}
function gl(t, e, r) {
    var n = t[0], o = t[1], i = e[0], a = e[1];
    return o < n ? (n = fn(o, n), i = r(a, i)) : (n = fn(n, o), i = r(i, a)), function(s) {
        return i(n(s));
    };
}
function yl(t, e, r) {
    var n = Math.min(t.length, e.length) - 1, o = new Array(n), i = new Array(n), a = -1;
    for(t[n] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < n;)o[a] = fn(t[a], t[a + 1]), i[a] = r(e[a], e[a + 1]);
    return function(s) {
        var l = Cr(t, s, 1, n) - 1;
        return i[l](o[l](s));
    };
}
function Ii(t, e) {
    return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function xl() {
    var t = Oi, e = Oi, r = st, n, o, i, a = Bt, s, l, u;
    function c() {
        var p = Math.min(t.length, e.length);
        return a !== Bt && (a = dl(t[0], t[p - 1])), s = p > 2 ? yl : gl, l = u = null, f;
    }
    function f(p) {
        return p == null || isNaN(p = +p) ? i : (l || (l = s(t.map(n), e, r)))(n(a(p)));
    }
    return f.invert = function(p) {
        return a(o((u || (u = s(e, t.map(n), q)))(p)));
    }, f.domain = function(p) {
        return arguments.length ? (t = Array.from(p, cn), c()) : t.slice();
    }, f.range = function(p) {
        return arguments.length ? (e = Array.from(p), c()) : e.slice();
    }, f.rangeRound = function(p) {
        return e = Array.from(p), r = ze, c();
    }, f.clamp = function(p) {
        return arguments.length ? (a = p ? !0 : Bt, c()) : a !== Bt;
    }, f.interpolate = function(p) {
        return arguments.length ? (r = p, c()) : r;
    }, f.unknown = function(p) {
        return arguments.length ? (i = p, f) : i;
    }, function(p, h) {
        return n = p, o = h, c();
    };
}
function pn() {
    return xl()(Bt, Bt);
}
function hn(t, e, r, n) {
    var o = Nr(t, e, r), i;
    switch(n = dt(n ?? ",f"), n.type){
        case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return n.precision == null && !isNaN(i = sn(o, a)) && (n.precision = i), sr(n, a);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            n.precision == null && !isNaN(i = un(o, Math.max(Math.abs(t), Math.abs(e)))) && (n.precision = i - (n.type === "e"));
            break;
        case "f":
        case "%":
            n.precision == null && !isNaN(i = an(o)) && (n.precision = i - (n.type === "%") * 2);
            break;
    }
    return nt(n);
}
function vl(t) {
    var e = t.domain;
    return t.ticks = function(r) {
        var n = e();
        return be(n[0], n[n.length - 1], r ?? 10);
    }, t.tickFormat = function(r, n) {
        var o = e();
        return hn(o[0], o[o.length - 1], r ?? 10, n);
    }, t.nice = function(r) {
        r == null && (r = 10);
        var n = e(), o = 0, i = n.length - 1, a = n[o], s = n[i], l, u, c = 10;
        for(s < a && (u = a, a = s, s = u, u = o, o = i, i = u); c-- > 0;){
            if (u = Kt(a, s, r), u === l) return n[o] = a, n[i] = s, e(n);
            if (u > 0) a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
            else if (u < 0) a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
            else break;
            l = u;
        }
        return t;
    }, t;
}
function Nt() {
    var t = pn();
    return t.copy = function() {
        return Ii(t, Nt());
    }, Fi.apply(t, arguments), vl(t);
}
function gt(t, e, r) {
    this.k = t, this.x = e, this.y = r;
}
gt.prototype = {
    constructor: gt,
    scale: function(t) {
        return t === 1 ? this : new gt(this.k * t, this.x, this.y);
    },
    translate: function(t, e) {
        return t === 0 & e === 0 ? this : new gt(this.k, this.x + this.k * t, this.y + this.k * e);
    },
    apply: function(t) {
        return [
            t[0] * this.k + this.x,
            t[1] * this.k + this.y
        ];
    },
    applyX: function(t) {
        return t * this.k + this.x;
    },
    applyY: function(t) {
        return t * this.k + this.y;
    },
    invert: function(t) {
        return [
            (t[0] - this.x) / this.k,
            (t[1] - this.y) / this.k
        ];
    },
    invertX: function(t) {
        return (t - this.x) / this.k;
    },
    invertY: function(t) {
        return (t - this.y) / this.k;
    },
    rescaleX: function(t) {
        return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function(t) {
        return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var mn = new gt(1, 0, 0);
dn.prototype = gt.prototype;
function dn(t) {
    for(; !t.__zoom;)if (!(t = t.parentNode)) return mn;
    return t.__zoom;
}
function gn(t) {
    let e;
    function r() {
        let u = !0;
        e = We(c, t.getState().options.tickDuration), t.dispatch(T.ticker.setRunning(!0));
        function c(f) {
            t.getState().ticker.isLastDate ? t.getState().options.loop || u ? i() : n() : t.dispatch(T.ticker.inc()), u = !1;
        }
    }
    function n() {
        e && e.stop(), t.dispatch(T.ticker.setRunning(!1));
    }
    function o() {
        n(), t.dispatch(T.ticker.setFirst());
    }
    function i() {
        t.dispatch(T.ticker.setFirst());
    }
    function a() {
        n(), t.dispatch(T.ticker.setLast()), t.dispatch(T.ticker.setLast());
    }
    function s() {
        t.getState().ticker.isLastDate ? (o(), r()) : t.getState().ticker.isRunning ? n() : r();
    }
    function l(u) {
        t.dispatch(T.ticker.updateDate(u));
    }
    return {
        start: r,
        stop: n,
        skipBack: o,
        loop: i,
        skipForward: a,
        toggle: s,
        goToDate: l
    };
}
var T = {
    container: Dr,
    data: Ar,
    options: xn,
    ticker: yn
};
var ur = (t, e)=>({
        container: br(t.container, e),
        data: Sr(t.data, e),
        options: vn(t.options, e),
        ticker: Tr(t.ticker, e),
        triggerRender: e.triggerRender ?? !0
    });
function Li(t = ur, e) {
    let r = {};
    e && (r = e);
    function n(u) {
        return r = t(r, u), s(), u;
    }
    function o() {
        return r;
    }
    let i = [];
    function a(u) {
        return i.push(u), {
            unsubscribe: ()=>{
                i.splice(i.indexOf(u), 1);
            }
        };
    }
    function s() {
        i.forEach((u)=>{
            u();
        });
    }
    function l() {
        i.length = 0;
    }
    return {
        getState: o,
        dispatch: n,
        subscribe: a,
        unsubscribeAll: l
    };
}
function lr(t, e = "auto") {
    let r = [
        "json",
        "csv",
        "tsv",
        "xml"
    ], n = (a)=>r.includes(a), o = ()=>{
        let a = e.toLowerCase();
        if (n(a)) return a;
        let s = t.split(".").pop()?.toLowerCase() || "";
        return n(s) ? s : "json";
    }, i = ()=>{
        throw new Error(`Failed to load data as ${e.toUpperCase()} from ${t}`);
    };
    switch(o()){
        case "json":
            return nr(t).catch(i);
        case "csv":
            return er(t).catch(i);
        case "tsv":
            return rr(t).catch(i);
        case "xml":
            return or(t).catch(i);
        default:
            throw new Error(`Unsupported data type: ${e}`);
    }
}
var Pi = '"use strict";(()=>{var Sn={value:()=>{}};function Ae(){for(var t=0,e=arguments.length,r={},n;t<e;++t){if(!(n=arguments[t]+"")||n in r||/[\\s.]/.test(n))throw new Error("illegal type: "+n);r[n]=[]}return new bt(r)}function bt(t){this._=t}function kn(t,e){return t.trim().split(/^|\\s+/).map(function(r){var n="",o=r.indexOf(".");if(o>=0&&(n=r.slice(o+1),r=r.slice(0,o)),r&&!e.hasOwnProperty(r))throw new Error("unknown type: "+r);return{type:r,name:n}})}bt.prototype=Ae.prototype={constructor:bt,on:function(t,e){var r=this._,n=kn(t+"",r),o,i=-1,a=n.length;if(arguments.length<2){for(;++i<a;)if((o=(t=n[i]).type)&&(o=Nn(r[o],t.name)))return o;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++i<a;)if(o=(t=n[i]).type)r[o]=Ee(r[o],t.name,e);else if(e==null)for(o in r)r[o]=Ee(r[o],t.name,null);return this},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new bt(t)},call:function(t,e){if((o=arguments.length-2)>0)for(var r=new Array(o),n=0,o,i;n<o;++n)r[n]=arguments[n+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=this._[t],n=0,o=i.length;n<o;++n)i[n].value.apply(e,r)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],o=0,i=n.length;o<i;++o)n[o].value.apply(e,r)}};function Nn(t,e){for(var r=0,n=t.length,o;r<n;++r)if((o=t[r]).name===e)return o.value}function Ee(t,e,r){for(var n=0,o=t.length;n<o;++n)if(t[n].name===e){t[n]=Sn,t=t.slice(0,n).concat(t.slice(n+1));break}return r!=null&&t.push({name:e,value:r}),t}var te=Ae;var Dt="http://www.w3.org/1999/xhtml",ee={svg:"http://www.w3.org/2000/svg",xhtml:Dt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function I(t){var e=t+="",r=e.indexOf(":");return r>=0&&(e=t.slice(0,r))!=="xmlns"&&(t=t.slice(r+1)),ee.hasOwnProperty(e)?{space:ee[e],local:t}:t}function In(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===Dt&&e.documentElement.namespaceURI===Dt?e.createElement(t):e.createElementNS(r,t)}}function On(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Tt(t){var e=I(t);return(e.local?On:In)(e)}function Fn(){}function $(t){return t==null?Fn:function(){return this.querySelector(t)}}function Se(t){typeof t!="function"&&(t=$(t));for(var e=this._groups,r=e.length,n=new Array(r),o=0;o<r;++o)for(var i=e[o],a=i.length,s=n[o]=new Array(a),u,f,l=0;l<a;++l)(u=i[l])&&(f=t.call(u,u.__data__,l,i))&&("__data__"in u&&(f.__data__=u.__data__),s[l]=f);return new g(n,this._parents)}function re(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Rn(){return[]}function tt(t){return t==null?Rn:function(){return this.querySelectorAll(t)}}function zn(t){return function(){return re(t.apply(this,arguments))}}function ke(t){typeof t=="function"?t=zn(t):t=tt(t);for(var e=this._groups,r=e.length,n=[],o=[],i=0;i<r;++i)for(var a=e[i],s=a.length,u,f=0;f<s;++f)(u=a[f])&&(n.push(t.call(u,u.__data__,f,a)),o.push(u));return new g(n,o)}function et(t){return function(){return this.matches(t)}}function Mt(t){return function(e){return e.matches(t)}}var Yn=Array.prototype.find;function Pn(t){return function(){return Yn.call(this.children,t)}}function Un(){return this.firstElementChild}function Ne(t){return this.select(t==null?Un:Pn(typeof t=="function"?t:Mt(t)))}var $n=Array.prototype.filter;function Hn(){return Array.from(this.children)}function Ln(t){return function(){return $n.call(this.children,t)}}function Ie(t){return this.selectAll(t==null?Hn:Ln(typeof t=="function"?t:Mt(t)))}function Oe(t){typeof t!="function"&&(t=et(t));for(var e=this._groups,r=e.length,n=new Array(r),o=0;o<r;++o)for(var i=e[o],a=i.length,s=n[o]=[],u,f=0;f<a;++f)(u=i[f])&&t.call(u,u.__data__,f,i)&&s.push(u);return new g(n,this._parents)}function Ct(t){return new Array(t.length)}function Fe(){return new g(this._enter||this._groups.map(Ct),this._parents)}function rt(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}rt.prototype={constructor:rt,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Re(t){return function(){return t}}function Bn(t,e,r,n,o,i){for(var a=0,s,u=e.length,f=i.length;a<f;++a)(s=e[a])?(s.__data__=i[a],n[a]=s):r[a]=new rt(t,i[a]);for(;a<u;++a)(s=e[a])&&(o[a]=s)}function Wn(t,e,r,n,o,i,a){var s,u,f=new Map,l=e.length,c=i.length,h=new Array(l),p;for(s=0;s<l;++s)(u=e[s])&&(h[s]=p=a.call(u,u.__data__,s,e)+"",f.has(p)?o[s]=u:f.set(p,u));for(s=0;s<c;++s)p=a.call(t,i[s],s,i)+"",(u=f.get(p))?(n[s]=u,u.__data__=i[s],f.delete(p)):r[s]=new rt(t,i[s]);for(s=0;s<l;++s)(u=e[s])&&f.get(h[s])===u&&(o[s]=u)}function Vn(t){return t.__data__}function ze(t,e){if(!arguments.length)return Array.from(this,Vn);var r=e?Wn:Bn,n=this._parents,o=this._groups;typeof t!="function"&&(t=Re(t));for(var i=o.length,a=new Array(i),s=new Array(i),u=new Array(i),f=0;f<i;++f){var l=n[f],c=o[f],h=c.length,p=Xn(t.call(l,l&&l.__data__,f,n)),m=p.length,d=s[f]=new Array(m),v=a[f]=new Array(m),T=u[f]=new Array(h);r(l,c,d,v,T,p,e);for(var E=0,M=0,Q,U;E<m;++E)if(Q=d[E]){for(E>=M&&(M=E+1);!(U=v[M])&&++M<m;);Q._next=U||null}}return a=new g(a,n),a._enter=s,a._exit=u,a}function Xn(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Ye(){return new g(this._exit||this._groups.map(Ct),this._parents)}function Pe(t,e,r){var n=this.enter(),o=this,i=this.exit();return typeof t=="function"?(n=t(n),n&&(n=n.selection())):n=n.append(t+""),e!=null&&(o=e(o),o&&(o=o.selection())),r==null?i.remove():r(i),n&&o?n.merge(o).order():o}function Ue(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,o=r.length,i=n.length,a=Math.min(o,i),s=new Array(o),u=0;u<a;++u)for(var f=r[u],l=n[u],c=f.length,h=s[u]=new Array(c),p,m=0;m<c;++m)(p=f[m]||l[m])&&(h[m]=p);for(;u<o;++u)s[u]=r[u];return new g(s,this._parents)}function $e(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n=t[e],o=n.length-1,i=n[o],a;--o>=0;)(a=n[o])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function He(t){t||(t=qn);function e(c,h){return c&&h?t(c.__data__,h.__data__):!c-!h}for(var r=this._groups,n=r.length,o=new Array(n),i=0;i<n;++i){for(var a=r[i],s=a.length,u=o[i]=new Array(s),f,l=0;l<s;++l)(f=a[l])&&(u[l]=f);u.sort(e)}return new g(o,this._parents).order()}function qn(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function Le(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Be(){return Array.from(this)}function We(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],o=0,i=n.length;o<i;++o){var a=n[o];if(a)return a}return null}function Ve(){let t=0;for(let e of this)++t;return t}function Xe(){return!this.node()}function qe(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var o=e[r],i=0,a=o.length,s;i<a;++i)(s=o[i])&&t.call(s,s.__data__,i,o);return this}function Gn(t){return function(){this.removeAttribute(t)}}function Kn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Zn(t,e){return function(){this.setAttribute(t,e)}}function Jn(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function Qn(t,e){return function(){var r=e.apply(this,arguments);r==null?this.removeAttribute(t):this.setAttribute(t,r)}}function jn(t,e){return function(){var r=e.apply(this,arguments);r==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function Ge(t,e){var r=I(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((e==null?r.local?Kn:Gn:typeof e=="function"?r.local?jn:Qn:r.local?Jn:Zn)(r,e))}function Et(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function to(t){return function(){this.style.removeProperty(t)}}function eo(t,e,r){return function(){this.style.setProperty(t,e,r)}}function ro(t,e,r){return function(){var n=e.apply(this,arguments);n==null?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function Ke(t,e,r){return arguments.length>1?this.each((e==null?to:typeof e=="function"?ro:eo)(t,e,r??"")):R(this.node(),t)}function R(t,e){return t.style.getPropertyValue(e)||Et(t).getComputedStyle(t,null).getPropertyValue(e)}function no(t){return function(){delete this[t]}}function oo(t,e){return function(){this[t]=e}}function io(t,e){return function(){var r=e.apply(this,arguments);r==null?delete this[t]:this[t]=r}}function Ze(t,e){return arguments.length>1?this.each((e==null?no:typeof e=="function"?io:oo)(t,e)):this.node()[t]}function Je(t){return t.trim().split(/^|\\s+/)}function ne(t){return t.classList||new Qe(t)}function Qe(t){this._node=t,this._names=Je(t.getAttribute("class")||"")}Qe.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function je(t,e){for(var r=ne(t),n=-1,o=e.length;++n<o;)r.add(e[n])}function tr(t,e){for(var r=ne(t),n=-1,o=e.length;++n<o;)r.remove(e[n])}function ao(t){return function(){je(this,t)}}function so(t){return function(){tr(this,t)}}function uo(t,e){return function(){(e.apply(this,arguments)?je:tr)(this,t)}}function er(t,e){var r=Je(t+"");if(arguments.length<2){for(var n=ne(this.node()),o=-1,i=r.length;++o<i;)if(!n.contains(r[o]))return!1;return!0}return this.each((typeof e=="function"?uo:e?ao:so)(r,e))}function fo(){this.textContent=""}function lo(t){return function(){this.textContent=t}}function co(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function rr(t){return arguments.length?this.each(t==null?fo:(typeof t=="function"?co:lo)(t)):this.node().textContent}function ho(){this.innerHTML=""}function po(t){return function(){this.innerHTML=t}}function mo(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function nr(t){return arguments.length?this.each(t==null?ho:(typeof t=="function"?mo:po)(t)):this.node().innerHTML}function go(){this.nextSibling&&this.parentNode.appendChild(this)}function or(){return this.each(go)}function xo(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ir(){return this.each(xo)}function ar(t){var e=typeof t=="function"?t:Tt(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function yo(){return null}function sr(t,e){var r=typeof t=="function"?t:Tt(t),n=e==null?yo:typeof e=="function"?e:$(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)})}function vo(){var t=this.parentNode;t&&t.removeChild(this)}function ur(){return this.each(vo)}function wo(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function _o(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function fr(t){return this.select(t?_o:wo)}function lr(t){return arguments.length?this.property("__data__",t):this.node().__data__}function bo(t){return function(e){t.call(this,e,this.__data__)}}function Do(t){return t.trim().split(/^|\\s+/).map(function(e){var r="",n=e.indexOf(".");return n>=0&&(r=e.slice(n+1),e=e.slice(0,n)),{type:e,name:r}})}function To(t){return function(){var e=this.__on;if(e){for(var r=0,n=-1,o=e.length,i;r<o;++r)i=e[r],(!t.type||i.type===t.type)&&i.name===t.name?this.removeEventListener(i.type,i.listener,i.options):e[++n]=i;++n?e.length=n:delete this.__on}}}function Mo(t,e,r){return function(){var n=this.__on,o,i=bo(e);if(n){for(var a=0,s=n.length;a<s;++a)if((o=n[a]).type===t.type&&o.name===t.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=i,o.options=r),o.value=e;return}}this.addEventListener(t.type,i,r),o={type:t.type,name:t.name,value:e,listener:i,options:r},n?n.push(o):this.__on=[o]}}function cr(t,e,r){var n=Do(t+""),o,i=n.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var u=0,f=s.length,l;u<f;++u)for(o=0,l=s[u];o<i;++o)if((a=n[o]).type===l.type&&a.name===l.name)return l.value}return}for(s=e?Mo:To,o=0;o<i;++o)this.each(s(n[o],e,r));return this}function hr(t,e,r){var n=Et(t),o=n.CustomEvent;typeof o=="function"?o=new o(e,r):(o=n.document.createEvent("Event"),r?(o.initEvent(e,r.bubbles,r.cancelable),o.detail=r.detail):o.initEvent(e,!1,!1)),t.dispatchEvent(o)}function Co(t,e){return function(){return hr(this,t,e)}}function Eo(t,e){return function(){return hr(this,t,e.apply(this,arguments))}}function pr(t,e){return this.each((typeof e=="function"?Eo:Co)(t,e))}function*mr(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],o=0,i=n.length,a;o<i;++o)(a=n[o])&&(yield a)}var Ao=[null];function g(t,e){this._groups=t,this._parents=e}function dr(){return new g([[document.documentElement]],Ao)}function So(){return this}g.prototype=dr.prototype={constructor:g,select:Se,selectAll:ke,selectChild:Ne,selectChildren:Ie,filter:Oe,data:ze,enter:Fe,exit:Ye,join:Pe,merge:Ue,selection:So,order:$e,sort:He,call:Le,nodes:Be,node:We,size:Ve,empty:Xe,each:qe,attr:Ge,style:Ke,property:Ze,classed:er,text:rr,html:nr,raise:or,lower:ir,append:ar,insert:sr,remove:ur,clone:fr,datum:lr,on:cr,dispatch:pr,[Symbol.iterator]:mr};var O=dr;function At(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function oe(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function it(){}var nt=.7,Nt=1/nt,q="\\\\s*([+-]?\\\\d+)\\\\s*",ot="\\\\s*([+-]?(?:\\\\d*\\\\.)?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*",k="\\\\s*([+-]?(?:\\\\d*\\\\.)?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*",ko=/^#([0-9a-f]{3,8})$/,No=new RegExp(`^rgb\\\\(${q},${q},${q}\\\\)$`),Io=new RegExp(`^rgb\\\\(${k},${k},${k}\\\\)$`),Oo=new RegExp(`^rgba\\\\(${q},${q},${q},${ot}\\\\)$`),Fo=new RegExp(`^rgba\\\\(${k},${k},${k},${ot}\\\\)$`),Ro=new RegExp(`^hsl\\\\(${ot},${k},${k}\\\\)$`),zo=new RegExp(`^hsla\\\\(${ot},${k},${k},${ot}\\\\)$`),gr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};At(it,S,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:xr,formatHex:xr,formatHex8:Yo,formatHsl:Po,formatRgb:yr,toString:yr});function xr(){return this.rgb().formatHex()}function Yo(){return this.rgb().formatHex8()}function Po(){return Tr(this).formatHsl()}function yr(){return this.rgb().formatRgb()}function S(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=ko.exec(t))?(r=e[1].length,e=parseInt(e[1],16),r===6?vr(e):r===3?new b(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):r===8?St(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):r===4?St(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=No.exec(t))?new b(e[1],e[2],e[3],1):(e=Io.exec(t))?new b(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Oo.exec(t))?St(e[1],e[2],e[3],e[4]):(e=Fo.exec(t))?St(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Ro.exec(t))?br(e[1],e[2]/100,e[3]/100,1):(e=zo.exec(t))?br(e[1],e[2]/100,e[3]/100,e[4]):gr.hasOwnProperty(t)?vr(gr[t]):t==="transparent"?new b(NaN,NaN,NaN,0):null}function vr(t){return new b(t>>16&255,t>>8&255,t&255,1)}function St(t,e,r,n){return n<=0&&(t=e=r=NaN),new b(t,e,r,n)}function Uo(t){return t instanceof it||(t=S(t)),t?(t=t.rgb(),new b(t.r,t.g,t.b,t.opacity)):new b}function G(t,e,r,n){return arguments.length===1?Uo(t):new b(t,e,r,n??1)}function b(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}At(b,G,oe(it,{brighter(t){return t=t==null?Nt:Math.pow(Nt,t),new b(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?nt:Math.pow(nt,t),new b(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new b(L(this.r),L(this.g),L(this.b),It(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:wr,formatHex:wr,formatHex8:$o,formatRgb:_r,toString:_r}));function wr(){return`#${H(this.r)}${H(this.g)}${H(this.b)}`}function $o(){return`#${H(this.r)}${H(this.g)}${H(this.b)}${H((isNaN(this.opacity)?1:this.opacity)*255)}`}function _r(){let t=It(this.opacity);return`${t===1?"rgb(":"rgba("}${L(this.r)}, ${L(this.g)}, ${L(this.b)}${t===1?")":`, ${t})`}`}function It(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function L(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function H(t){return t=L(t),(t<16?"0":"")+t.toString(16)}function br(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new A(t,e,r,n)}function Tr(t){if(t instanceof A)return new A(t.h,t.s,t.l,t.opacity);if(t instanceof it||(t=S(t)),!t)return new A;if(t instanceof A)return t;t=t.rgb();var e=t.r/255,r=t.g/255,n=t.b/255,o=Math.min(e,r,n),i=Math.max(e,r,n),a=NaN,s=i-o,u=(i+o)/2;return s?(e===i?a=(r-n)/s+(r<n)*6:r===i?a=(n-e)/s+2:a=(e-r)/s+4,s/=u<.5?i+o:2-i-o,a*=60):s=u>0&&u<1?0:a,new A(a,s,u,t.opacity)}function Ot(t,e,r,n){return arguments.length===1?Tr(t):new A(t,e,r,n??1)}function A(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}At(A,Ot,oe(it,{brighter(t){return t=t==null?Nt:Math.pow(Nt,t),new A(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?nt:Math.pow(nt,t),new A(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,o=2*r-n;return new b(ie(t>=240?t-240:t+120,o,n),ie(t,o,n),ie(t<120?t+240:t-120,o,n),this.opacity)},clamp(){return new A(Dr(this.h),kt(this.s),kt(this.l),It(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=It(this.opacity);return`${t===1?"hsl(":"hsla("}${Dr(this.h)}, ${kt(this.s)*100}%, ${kt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Dr(t){return t=(t||0)%360,t<0?t+360:t}function kt(t){return Math.max(0,Math.min(1,t||0))}function ie(t,e,r){return(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)*255}function ae(t,e,r,n,o){var i=t*t,a=i*t;return((1-3*t+3*i-a)*e+(4-6*i+3*a)*r+(1+3*t+3*i-3*a)*n+a*o)/6}function Mr(t){var e=t.length-1;return function(r){var n=r<=0?r=0:r>=1?(r=1,e-1):Math.floor(r*e),o=t[n],i=t[n+1],a=n>0?t[n-1]:2*o-i,s=n<e-1?t[n+2]:2*i-o;return ae((r-n/e)*e,a,o,i,s)}}function Cr(t){var e=t.length;return function(r){var n=Math.floor(((r%=1)<0?++r:r)*e),o=t[(n+e-1)%e],i=t[n%e],a=t[(n+1)%e],s=t[(n+2)%e];return ae((r-n/e)*e,o,i,a,s)}}var at=t=>()=>t;function Ho(t,e){return function(r){return t+r*e}}function Lo(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}function Er(t){return(t=+t)==1?Ft:function(e,r){return r-e?Lo(e,r,t):at(isNaN(e)?r:e)}}function Ft(t,e){var r=e-t;return r?Ho(t,r):at(isNaN(t)?e:t)}var B=function t(e){var r=Er(e);function n(o,i){var a=r((o=G(o)).r,(i=G(i)).r),s=r(o.g,i.g),u=r(o.b,i.b),f=Ft(o.opacity,i.opacity);return function(l){return o.r=a(l),o.g=s(l),o.b=u(l),o.opacity=f(l),o+""}}return n.gamma=t,n}(1);function Ar(t){return function(e){var r=e.length,n=new Array(r),o=new Array(r),i=new Array(r),a,s;for(a=0;a<r;++a)s=G(e[a]),n[a]=s.r||0,o[a]=s.g||0,i[a]=s.b||0;return n=t(n),o=t(o),i=t(i),s.opacity=1,function(u){return s.r=n(u),s.g=o(u),s.b=i(u),s+""}}}var Bo=Ar(Mr),Wo=Ar(Cr);function Sr(t,e){e||(e=[]);var r=t?Math.min(e.length,t.length):0,n=e.slice(),o;return function(i){for(o=0;o<r;++o)n[o]=t[o]*(1-i)+e[o]*i;return n}}function kr(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Nr(t,e){var r=e?e.length:0,n=t?Math.min(r,t.length):0,o=new Array(n),i=new Array(r),a;for(a=0;a<n;++a)o[a]=z(t[a],e[a]);for(;a<r;++a)i[a]=e[a];return function(s){for(a=0;a<n;++a)i[a]=o[a](s);return i}}function Ir(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function w(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function Or(t,e){var r={},n={},o;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in t?r[o]=z(t[o],e[o]):n[o]=e[o];return function(i){for(o in r)n[o]=r[o](i);return n}}var ue=/[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g,se=new RegExp(ue.source,"g");function Vo(t){return function(){return t}}function Xo(t){return function(e){return t(e)+""}}function st(t,e){var r=ue.lastIndex=se.lastIndex=0,n,o,i,a=-1,s=[],u=[];for(t=t+"",e=e+"";(n=ue.exec(t))&&(o=se.exec(e));)(i=o.index)>r&&(i=e.slice(r,i),s[a]?s[a]+=i:s[++a]=i),(n=n[0])===(o=o[0])?s[a]?s[a]+=o:s[++a]=o:(s[++a]=null,u.push({i:a,x:w(n,o)})),r=se.lastIndex;return r<e.length&&(i=e.slice(r),s[a]?s[a]+=i:s[++a]=i),s.length<2?u[0]?Xo(u[0].x):Vo(e):(e=u.length,function(f){for(var l=0,c;l<e;++l)s[(c=u[l]).i]=c.x(f);return s.join("")})}function z(t,e){var r=typeof e,n;return e==null||r==="boolean"?at(e):(r==="number"?w:r==="string"?(n=S(e))?(e=n,B):st:e instanceof S?B:e instanceof Date?Ir:kr(e)?Sr:Array.isArray(e)?Nr:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Or:w)(t,e)}var Fr=180/Math.PI,Rt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function fe(t,e,r,n,o,i){var a,s,u;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(u=t*r+e*n)&&(r-=t*u,n-=e*u),(s=Math.sqrt(r*r+n*n))&&(r/=s,n/=s,u/=s),t*n<e*r&&(t=-t,e=-e,u=-u,a=-a),{translateX:o,translateY:i,rotate:Math.atan2(e,t)*Fr,skewX:Math.atan(u)*Fr,scaleX:a,scaleY:s}}var zt;function Rr(t){let e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Rt:fe(e.a,e.b,e.c,e.d,e.e,e.f)}function zr(t){return t==null?Rt:(zt||(zt=document.createElementNS("http://www.w3.org/2000/svg","g")),zt.setAttribute("transform",t),(t=zt.transform.baseVal.consolidate())?(t=t.matrix,fe(t.a,t.b,t.c,t.d,t.e,t.f)):Rt)}function Yr(t,e,r,n){function o(f){return f.length?f.pop()+" ":""}function i(f,l,c,h,p,m){if(f!==c||l!==h){var d=p.push("translate(",null,e,null,r);m.push({i:d-4,x:w(f,c)},{i:d-2,x:w(l,h)})}else(c||h)&&p.push("translate("+c+e+h+r)}function a(f,l,c,h){f!==l?(f-l>180?l+=360:l-f>180&&(f+=360),h.push({i:c.push(o(c)+"rotate(",null,n)-2,x:w(f,l)})):l&&c.push(o(c)+"rotate("+l+n)}function s(f,l,c,h){f!==l?h.push({i:c.push(o(c)+"skewX(",null,n)-2,x:w(f,l)}):l&&c.push(o(c)+"skewX("+l+n)}function u(f,l,c,h,p,m){if(f!==c||l!==h){var d=p.push(o(p)+"scale(",null,",",null,")");m.push({i:d-4,x:w(f,c)},{i:d-2,x:w(l,h)})}else(c!==1||h!==1)&&p.push(o(p)+"scale("+c+","+h+")")}return function(f,l){var c=[],h=[];return f=t(f),l=t(l),i(f.translateX,f.translateY,l.translateX,l.translateY,c,h),a(f.rotate,l.rotate,c,h),s(f.skewX,l.skewX,c,h),u(f.scaleX,f.scaleY,l.scaleX,l.scaleY,c,h),f=l=null,function(p){for(var m=-1,d=h.length,v;++m<d;)c[(v=h[m]).i]=v.x(p);return c.join("")}}}var le=Yr(Rr,"px, ","px)","deg)"),ce=Yr(zr,", ",")",")");var K=0,ft=0,ut=0,Ur=1e3,Yt,lt,Pt=0,W=0,Ut=0,ct=typeof performance=="object"&&performance.now?performance:Date,$r=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function pt(){return W||($r(qo),W=ct.now()+Ut)}function qo(){W=0}function ht(){this._call=this._time=this._next=null}ht.prototype=$t.prototype={constructor:ht,restart:function(t,e,r){if(typeof t!="function")throw new TypeError("callback is not a function");r=(r==null?pt():+r)+(e==null?0:+e),!this._next&&lt!==this&&(lt?lt._next=this:Yt=this,lt=this),this._call=t,this._time=r,he()},stop:function(){this._call&&(this._call=null,this._time=1/0,he())}};function $t(t,e,r){var n=new ht;return n.restart(t,e,r),n}function Hr(){pt(),++K;for(var t=Yt,e;t;)(e=W-t._time)>=0&&t._call.call(void 0,e),t=t._next;--K}function Pr(){W=(Pt=ct.now())+Ut,K=ft=0;try{Hr()}finally{K=0,Ko(),W=0}}function Go(){var t=ct.now(),e=t-Pt;e>Ur&&(Ut-=e,Pt=t)}function Ko(){for(var t,e=Yt,r,n=1/0;e;)e._call?(n>e._time&&(n=e._time),t=e,e=e._next):(r=e._next,e._next=null,e=t?t._next=r:Yt=r);lt=t,he(n)}function he(t){if(!K){ft&&(ft=clearTimeout(ft));var e=t-W;e>24?(t<1/0&&(ft=setTimeout(Pr,t-ct.now()-Ut)),ut&&(ut=clearInterval(ut))):(ut||(Pt=ct.now(),ut=setInterval(Go,Ur)),K=1,$r(Pr))}}function Ht(t,e,r){var n=new ht;return e=e==null?0:+e,n.restart(o=>{n.stop(),t(o+e)},e,r),n}var Zo=te("start","end","cancel","interrupt"),Jo=[],Wr=0,Lr=1,Bt=2,Lt=3,Br=4,Wt=5,mt=6;function Y(t,e,r,n,o,i){var a=t.__transition;if(!a)t.__transition={};else if(r in a)return;Qo(t,r,{name:e,index:n,group:o,on:Zo,tween:Jo,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Wr})}function dt(t,e){var r=x(t,e);if(r.state>Wr)throw new Error("too late; already scheduled");return r}function y(t,e){var r=x(t,e);if(r.state>Lt)throw new Error("too late; already running");return r}function x(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function Qo(t,e,r){var n=t.__transition,o;n[e]=r,r.timer=$t(i,0,r.time);function i(f){r.state=Lr,r.timer.restart(a,r.delay,r.time),r.delay<=f&&a(f-r.delay)}function a(f){var l,c,h,p;if(r.state!==Lr)return u();for(l in n)if(p=n[l],p.name===r.name){if(p.state===Lt)return Ht(a);p.state===Br?(p.state=mt,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete n[l]):+l<e&&(p.state=mt,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete n[l])}if(Ht(function(){r.state===Lt&&(r.state=Br,r.timer.restart(s,r.delay,r.time),s(f))}),r.state=Bt,r.on.call("start",t,t.__data__,r.index,r.group),r.state===Bt){for(r.state=Lt,o=new Array(h=r.tween.length),l=0,c=-1;l<h;++l)(p=r.tween[l].value.call(t,t.__data__,r.index,r.group))&&(o[++c]=p);o.length=c+1}}function s(f){for(var l=f<r.duration?r.ease.call(null,f/r.duration):(r.timer.restart(u),r.state=Wt,1),c=-1,h=o.length;++c<h;)o[c].call(t,l);r.state===Wt&&(r.on.call("end",t,t.__data__,r.index,r.group),u())}function u(){r.state=mt,r.timer.stop(),delete n[e];for(var f in n)return;delete t.__transition}}function Vt(t,e){var r=t.__transition,n,o,i=!0,a;if(r){e=e==null?null:e+"";for(a in r){if((n=r[a]).name!==e){i=!1;continue}o=n.state>Bt&&n.state<Wt,n.state=mt,n.timer.stop(),n.on.call(o?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete r[a]}i&&delete t.__transition}}function Vr(t){return this.each(function(){Vt(this,t)})}function jo(t,e){var r,n;return function(){var o=y(this,t),i=o.tween;if(i!==r){n=r=i;for(var a=0,s=n.length;a<s;++a)if(n[a].name===e){n=n.slice(),n.splice(a,1);break}}o.tween=n}}function ti(t,e,r){var n,o;if(typeof r!="function")throw new Error;return function(){var i=y(this,t),a=i.tween;if(a!==n){o=(n=a).slice();for(var s={name:e,value:r},u=0,f=o.length;u<f;++u)if(o[u].name===e){o[u]=s;break}u===f&&o.push(s)}i.tween=o}}function Xr(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n=x(this.node(),r).tween,o=0,i=n.length,a;o<i;++o)if((a=n[o]).name===t)return a.value;return null}return this.each((e==null?jo:ti)(r,t,e))}function Z(t,e,r){var n=t._id;return t.each(function(){var o=y(this,n);(o.value||(o.value={}))[e]=r.apply(this,arguments)}),function(o){return x(o,n).value[e]}}function Xt(t,e){var r;return(typeof e=="number"?w:e instanceof S?B:(r=S(e))?(e=r,B):st)(t,e)}function ei(t){return function(){this.removeAttribute(t)}}function ri(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ni(t,e,r){var n,o=r+"",i;return function(){var a=this.getAttribute(t);return a===o?null:a===n?i:i=e(n=a,r)}}function oi(t,e,r){var n,o=r+"",i;return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===n?i:i=e(n=a,r)}}function ii(t,e,r){var n,o,i;return function(){var a,s=r(this),u;return s==null?void this.removeAttribute(t):(a=this.getAttribute(t),u=s+"",a===u?null:a===n&&u===o?i:(o=u,i=e(n=a,s)))}}function ai(t,e,r){var n,o,i;return function(){var a,s=r(this),u;return s==null?void this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local),u=s+"",a===u?null:a===n&&u===o?i:(o=u,i=e(n=a,s)))}}function qr(t,e){var r=I(t),n=r==="transform"?ce:Xt;return this.attrTween(t,typeof e=="function"?(r.local?ai:ii)(r,n,Z(this,"attr."+t,e)):e==null?(r.local?ri:ei)(r):(r.local?oi:ni)(r,n,e))}function si(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}function ui(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}function fi(t,e){var r,n;function o(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&ui(t,i)),r}return o._value=e,o}function li(t,e){var r,n;function o(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&si(t,i)),r}return o._value=e,o}function Gr(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;var n=I(t);return this.tween(r,(n.local?fi:li)(n,e))}function ci(t,e){return function(){dt(this,t).delay=+e.apply(this,arguments)}}function hi(t,e){return e=+e,function(){dt(this,t).delay=e}}function Kr(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?ci:hi)(e,t)):x(this.node(),e).delay}function pi(t,e){return function(){y(this,t).duration=+e.apply(this,arguments)}}function mi(t,e){return e=+e,function(){y(this,t).duration=e}}function Zr(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?pi:mi)(e,t)):x(this.node(),e).duration}function di(t,e){if(typeof e!="function")throw new Error;return function(){y(this,t).ease=e}}function Jr(t){var e=this._id;return arguments.length?this.each(di(e,t)):x(this.node(),e).ease}function gi(t,e){return function(){var r=e.apply(this,arguments);if(typeof r!="function")throw new Error;y(this,t).ease=r}}function Qr(t){if(typeof t!="function")throw new Error;return this.each(gi(this._id,t))}function jr(t){typeof t!="function"&&(t=et(t));for(var e=this._groups,r=e.length,n=new Array(r),o=0;o<r;++o)for(var i=e[o],a=i.length,s=n[o]=[],u,f=0;f<a;++f)(u=i[f])&&t.call(u,u.__data__,f,i)&&s.push(u);return new _(n,this._parents,this._name,this._id)}function tn(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,o=r.length,i=Math.min(n,o),a=new Array(n),s=0;s<i;++s)for(var u=e[s],f=r[s],l=u.length,c=a[s]=new Array(l),h,p=0;p<l;++p)(h=u[p]||f[p])&&(c[p]=h);for(;s<n;++s)a[s]=e[s];return new _(a,this._parents,this._name,this._id)}function xi(t){return(t+"").trim().split(/^|\\s+/).every(function(e){var r=e.indexOf(".");return r>=0&&(e=e.slice(0,r)),!e||e==="start"})}function yi(t,e,r){var n,o,i=xi(e)?dt:y;return function(){var a=i(this,t),s=a.on;s!==n&&(o=(n=s).copy()).on(e,r),a.on=o}}function en(t,e){var r=this._id;return arguments.length<2?x(this.node(),r).on.on(t):this.each(yi(r,t,e))}function vi(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}function rn(){return this.on("end.remove",vi(this._id))}function nn(t){var e=this._name,r=this._id;typeof t!="function"&&(t=$(t));for(var n=this._groups,o=n.length,i=new Array(o),a=0;a<o;++a)for(var s=n[a],u=s.length,f=i[a]=new Array(u),l,c,h=0;h<u;++h)(l=s[h])&&(c=t.call(l,l.__data__,h,s))&&("__data__"in l&&(c.__data__=l.__data__),f[h]=c,Y(f[h],e,r,h,f,x(l,r)));return new _(i,this._parents,e,r)}function on(t){var e=this._name,r=this._id;typeof t!="function"&&(t=tt(t));for(var n=this._groups,o=n.length,i=[],a=[],s=0;s<o;++s)for(var u=n[s],f=u.length,l,c=0;c<f;++c)if(l=u[c]){for(var h=t.call(l,l.__data__,c,u),p,m=x(l,r),d=0,v=h.length;d<v;++d)(p=h[d])&&Y(p,e,r,d,h,m);i.push(h),a.push(l)}return new _(i,a,e,r)}var wi=O.prototype.constructor;function an(){return new wi(this._groups,this._parents)}function _i(t,e){var r,n,o;return function(){var i=R(this,t),a=(this.style.removeProperty(t),R(this,t));return i===a?null:i===r&&a===n?o:o=e(r=i,n=a)}}function sn(t){return function(){this.style.removeProperty(t)}}function bi(t,e,r){var n,o=r+"",i;return function(){var a=R(this,t);return a===o?null:a===n?i:i=e(n=a,r)}}function Di(t,e,r){var n,o,i;return function(){var a=R(this,t),s=r(this),u=s+"";return s==null&&(u=s=(this.style.removeProperty(t),R(this,t))),a===u?null:a===n&&u===o?i:(o=u,i=e(n=a,s))}}function Ti(t,e){var r,n,o,i="style."+e,a="end."+i,s;return function(){var u=y(this,t),f=u.on,l=u.value[i]==null?s||(s=sn(e)):void 0;(f!==r||o!==l)&&(n=(r=f).copy()).on(a,o=l),u.on=n}}function un(t,e,r){var n=(t+="")=="transform"?le:Xt;return e==null?this.styleTween(t,_i(t,n)).on("end.style."+t,sn(t)):typeof e=="function"?this.styleTween(t,Di(t,n,Z(this,"style."+t,e))).each(Ti(this._id,t)):this.styleTween(t,bi(t,n,e),r).on("end.style."+t,null)}function Mi(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}function Ci(t,e,r){var n,o;function i(){var a=e.apply(this,arguments);return a!==o&&(n=(o=a)&&Mi(t,a,r)),n}return i._value=e,i}function fn(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,Ci(t,e,r??""))}function Ei(t){return function(){this.textContent=t}}function Ai(t){return function(){var e=t(this);this.textContent=e??""}}function ln(t){return this.tween("text",typeof t=="function"?Ai(Z(this,"text",t)):Ei(t==null?"":t+""))}function Si(t){return function(e){this.textContent=t.call(this,e)}}function ki(t){var e,r;function n(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&Si(o)),e}return n._value=t,n}function cn(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,ki(t))}function hn(){for(var t=this._name,e=this._id,r=qt(),n=this._groups,o=n.length,i=0;i<o;++i)for(var a=n[i],s=a.length,u,f=0;f<s;++f)if(u=a[f]){var l=x(u,e);Y(u,t,r,f,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new _(n,this._parents,t,r)}function pn(){var t,e,r=this,n=r._id,o=r.size();return new Promise(function(i,a){var s={value:a},u={value:function(){--o===0&&i()}};r.each(function(){var f=y(this,n),l=f.on;l!==t&&(e=(t=l).copy(),e._.cancel.push(s),e._.interrupt.push(s),e._.end.push(u)),f.on=e}),o===0&&i()})}var Ni=0;function _(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function mn(t){return O().transition(t)}function qt(){return++Ni}var F=O.prototype;_.prototype=mn.prototype={constructor:_,select:nn,selectAll:on,selectChild:F.selectChild,selectChildren:F.selectChildren,filter:jr,merge:tn,selection:an,transition:hn,call:F.call,nodes:F.nodes,node:F.node,size:F.size,empty:F.empty,each:F.each,on:en,attr:qr,attrTween:Gr,style:un,styleTween:fn,text:ln,textTween:cn,remove:rn,tween:Xr,delay:Kr,duration:Zr,ease:Jr,easeVarying:Qr,end:pn,[Symbol.iterator]:F[Symbol.iterator]};function Gt(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Ii={time:null,delay:0,duration:250,ease:Gt};function Oi(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}function dn(t){var e,r;t instanceof _?(e=t._id,t=t._name):(e=qt(),(r=Ii).time=pt(),t=t==null?null:t+"");for(var n=this._groups,o=n.length,i=0;i<o;++i)for(var a=n[i],s=a.length,u,f=0;f<s;++f)(u=a[f])&&Y(u,t,e,f,a,r||Oi(u,e));return new _(n,this._parents,t,e)}O.prototype.interrupt=Vr;O.prototype.transition=dn;var{abs:Sc,max:kc,min:Nc}=Math;function gn(t){return[+t[0],+t[1]]}function Fi(t){return[gn(t[0]),gn(t[1])]}var Ic={name:"x",handles:["w","e"].map(pe),input:function(t,e){return t==null?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Oc={name:"y",handles:["n","s"].map(pe),input:function(t,e){return t==null?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Fc={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(pe),input:function(t){return t==null?null:Fi(t)},output:function(t){return t}};function pe(t){return{type:t}}var xn={},me={},de=34,gt=10,ge=13;function vn(t){return new Function("d","return {"+t.map(function(e,r){return JSON.stringify(e)+": d["+r+\'] || ""\'}).join(",")+"}")}function Ri(t,e){var r=vn(t);return function(n,o){return e(r(n),o,t)}}function yn(t){var e=Object.create(null),r=[];return t.forEach(function(n){for(var o in n)o in e||r.push(e[o]=o)}),r}function D(t,e){var r=t+"",n=r.length;return n<e?new Array(e-n+1).join(0)+r:r}function zi(t){return t<0?"-"+D(-t,6):t>9999?"+"+D(t,6):D(t,4)}function Yi(t){var e=t.getUTCHours(),r=t.getUTCMinutes(),n=t.getUTCSeconds(),o=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":zi(t.getUTCFullYear(),4)+"-"+D(t.getUTCMonth()+1,2)+"-"+D(t.getUTCDate(),2)+(o?"T"+D(e,2)+":"+D(r,2)+":"+D(n,2)+"."+D(o,3)+"Z":n?"T"+D(e,2)+":"+D(r,2)+":"+D(n,2)+"Z":r||e?"T"+D(e,2)+":"+D(r,2)+"Z":"")}function xt(t){var e=new RegExp(\'["\'+t+`\n\\r]`),r=t.charCodeAt(0);function n(c,h){var p,m,d=o(c,function(v,T){if(p)return p(v,T-1);m=v,p=h?Ri(v,h):vn(v)});return d.columns=m||[],d}function o(c,h){var p=[],m=c.length,d=0,v=0,T,E=m<=0,M=!1;c.charCodeAt(m-1)===gt&&--m,c.charCodeAt(m-1)===ge&&--m;function Q(){if(E)return me;if(M)return M=!1,xn;var wt,_t=d,j;if(c.charCodeAt(_t)===de){for(;d++<m&&c.charCodeAt(d)!==de||c.charCodeAt(++d)===de;);return(wt=d)>=m?E=!0:(j=c.charCodeAt(d++))===gt?M=!0:j===ge&&(M=!0,c.charCodeAt(d)===gt&&++d),c.slice(_t+1,wt-1).replace(/""/g,\'"\')}for(;d<m;){if((j=c.charCodeAt(wt=d++))===gt)M=!0;else if(j===ge)M=!0,c.charCodeAt(d)===gt&&++d;else if(j!==r)continue;return c.slice(_t,wt)}return E=!0,c.slice(_t,m)}for(;(T=Q())!==me;){for(var U=[];T!==xn&&T!==me;)U.push(T),T=Q();h&&(U=h(U,v++))==null||p.push(U)}return p}function i(c,h){return c.map(function(p){return h.map(function(m){return l(p[m])}).join(t)})}function a(c,h){return h==null&&(h=yn(c)),[h.map(l).join(t)].concat(i(c,h)).join(`\n`)}function s(c,h){return h==null&&(h=yn(c)),i(c,h).join(`\n`)}function u(c){return c.map(f).join(`\n`)}function f(c){return c.map(l).join(t)}function l(c){return c==null?"":c instanceof Date?Yi(c):e.test(c+="")?\'"\'+c.replace(/"/g,\'""\')+\'"\':c}return{parse:n,parseRows:o,format:a,formatBody:s,formatRows:u,formatRow:f,formatValue:l}}var V=xt(","),xe=V.parse,Pi=V.parseRows,Ui=V.format,$i=V.formatBody,Hi=V.formatRows,Li=V.formatRow,Bi=V.formatValue;var X=xt("	"),ye=X.parse,Wi=X.parseRows,Vi=X.format,Xi=X.formatBody,qi=X.formatRows,Gi=X.formatRow,Ki=X.formatValue;function Zi(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function Kt(t,e){return fetch(t,e).then(Zi)}function wn(t){return function(e,r,n){return arguments.length===2&&typeof r=="function"&&(n=r,r=void 0),Kt(e,r).then(function(o){return t(o,n)})}}var Zt=wn(xe),Jt=wn(ye);function Ji(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);if(!(t.status===204||t.status===205))return t.json()}function Qt(t,e){return fetch(t,e).then(Ji)}function ve(t){return(e,r)=>Kt(e,r).then(n=>new DOMParser().parseFromString(n,t))}var jt=ve("application/xml"),Qi=ve("text/html"),ji=ve("image/svg+xml");var we=new Date,_e=new Date;function C(t,e,r,n){function o(i){return t(i=arguments.length===0?new Date:new Date(+i)),i}return o.floor=i=>(t(i=new Date(+i)),i),o.ceil=i=>(t(i=new Date(i-1)),e(i,1),t(i),i),o.round=i=>{let a=o(i),s=o.ceil(i);return i-a<s-i?a:s},o.offset=(i,a)=>(e(i=new Date(+i),a==null?1:Math.floor(a)),i),o.range=(i,a,s)=>{let u=[];if(i=o.ceil(i),s=s==null?1:Math.floor(s),!(i<a)||!(s>0))return u;let f;do u.push(f=new Date(+i)),e(i,s),t(i);while(f<i&&i<a);return u},o.filter=i=>C(a=>{if(a>=a)for(;t(a),!i(a);)a.setTime(a-1)},(a,s)=>{if(a>=a)if(s<0)for(;++s<=0;)for(;e(a,-1),!i(a););else for(;--s>=0;)for(;e(a,1),!i(a););}),r&&(o.count=(i,a)=>(we.setTime(+i),_e.setTime(+a),t(we),t(_e),Math.floor(r(we,_e))),o.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?o.filter(n?a=>n(a)%i===0:a=>o.count(0,a)%i===0):o)),o}var yt=C(t=>t.setHours(0,0,0,0),(t,e)=>t.setDate(t.getDate()+e),(t,e)=>(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*6e4)/864e5,t=>t.getDate()-1),ta=yt.range,_n=C(t=>{t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCDate(t.getUTCDate()+e)},(t,e)=>(e-t)/864e5,t=>t.getUTCDate()-1),ea=_n.range,bn=C(t=>{t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCDate(t.getUTCDate()+e)},(t,e)=>(e-t)/864e5,t=>Math.floor(t/864e5)),ra=bn.range;var vt=C(t=>{t.setDate(1),t.setHours(0,0,0,0)},(t,e)=>{t.setMonth(t.getMonth()+e)},(t,e)=>e.getMonth()-t.getMonth()+(e.getFullYear()-t.getFullYear())*12,t=>t.getMonth()),na=vt.range,Dn=C(t=>{t.setUTCDate(1),t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCMonth(t.getUTCMonth()+e)},(t,e)=>e.getUTCMonth()-t.getUTCMonth()+(e.getUTCFullYear()-t.getUTCFullYear())*12,t=>t.getUTCMonth()),oa=Dn.range;var J=C(t=>{t.setMonth(0,1),t.setHours(0,0,0,0)},(t,e)=>{t.setFullYear(t.getFullYear()+e)},(t,e)=>e.getFullYear()-t.getFullYear(),t=>t.getFullYear());J.every=t=>!isFinite(t=Math.floor(t))||!(t>0)?null:C(e=>{e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)},(e,r)=>{e.setFullYear(e.getFullYear()+r*t)});var ia=J.range,De=C(t=>{t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCFullYear(t.getUTCFullYear()+e)},(t,e)=>e.getUTCFullYear()-t.getUTCFullYear(),t=>t.getUTCFullYear());De.every=t=>!isFinite(t=Math.floor(t))||!(t>0)?null:C(e=>{e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCFullYear(e.getUTCFullYear()+r*t)});var aa=De.range;function P(t,e,r){this.k=t,this.x=e,this.y=r}P.prototype={constructor:P,scale:function(t){return t===1?this:new P(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new P(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Te=new P(1,0,0);Me.prototype=P.prototype;function Me(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Te;return t.__zoom}function Tn(t,e="auto"){let r=["json","csv","tsv","xml"],n=a=>r.includes(a),o=()=>{let a=e.toLowerCase();if(n(a))return a;let s=t.split(".").pop()?.toLowerCase()||"";return n(s)?s:"json"},i=()=>{throw new Error(`Failed to load data as ${e.toUpperCase()} from ${t}`)};switch(o()){case"json":return Qt(t).catch(i);case"csv":return Zt(t).catch(i);case"tsv":return Jt(t).catch(i);case"xml":return jt(t).catch(i);default:throw new Error(`Unsupported data type: ${e}`)}}function Ce(t,e){for(;t.toString().length<e;)t="0"+t;return t}function ua(t,e,r=!1){let n;return function(o,i){let a=this,s=arguments,u=function(){n=null,r||t.apply(a,s)},f=r&&!n;clearTimeout(n),n=setTimeout(u,e),f&&t.apply(a,s)}}var Sp=ua(function(t,e){e(t)},250);function N(t){let e=new Date(t);if(isNaN(+e))throw new Error(`"${t}" is not a valid date`);let r=e.getFullYear().toString(),n=Ce((1+e.getMonth()).toString(),2),o=Ce(e.getDate().toString(),2);return`${r}-${n}-${o}`}function Mn(t,e,r){let n=[t,...yt.range(t,e)],o=l=>new Date(l.getFullYear(),l.getMonth()+1,0).getDate(),i=t.getDate()===e.getDate(),a=t.getMonth()===e.getMonth(),s=vt.count(t,e),u=J.count(t,e),f=[];return r==="year"?a&&i?f=n.filter(l=>{if(l.getMonth()===t.getMonth()){if(l.getDate()===t.getDate())return!0;if(t.getDate()>o(l))return l.getDate()===o(l)}return!1}):f=n.filter(l=>n.indexOf(l)%Math.round(n.length/u)===0):r==="month"?i?f=n.filter(l=>l.getDate()===t.getDate()?!0:t.getDate()>o(l)?l.getDate()===o(l):!1):f=n.filter(l=>n.indexOf(l)%Math.round(n.length/s)===0):r==="day"&&(f=n),f.length===0&&(f=[t,e]),N(t)!==N(f[0])&&(f=[t,...f]),N(e)!==N(f[f.length-1])&&(f=[...f,e]),f}function Cn(t,e,r){return fa(t,e.dataType,r).then(ca).then(ha(e.startDate,e.endDate)).then(En(e.dataShape)).then(pa(e.fixedOrder)).then(ma).then(da(e.fillDateGapsInterval,e.fillDateGapsValue,e.topN)).then(ga(e.makeCumulative))}function fa(t,e,r){if(typeof t=="string"){let n=t;if(la(n))try{n=new URL(t,r).href}catch{throw new Error(`Invalid URL: ${t}`)}return Tn(n,e)}return Promise.resolve(t)}function la(t){return!t.startsWith("https://")&&!t.startsWith("http://")&&!t.startsWith("data:")}function ca(t){return!Array.isArray(t)||t.length===0?[{date:N(new Date),value:0,name:""}]:t}function ha(t,e){return function(r){return r.map(n=>({...n,date:N(n.date)})).filter(n=>t?n.date>=t:!0).filter(n=>e?n.date<=e:!0)}}function pa(t){return function(e){return t.length===0?e:e.filter(r=>t.includes(r.name)).map(r=>({...r,rank:t.indexOf(r.name)}))}}function ma(t){return t.map(e=>{let r=e.name?e.name:"",n=isNaN(+e.value)?0:+e.value;return{...e,name:r,value:n}}).sort((e,r)=>e.date.localeCompare(r.date)||e.name.localeCompare(r.name))}function da(t,e,r){return function(n){return t?va(n,t,e,r):n}}function ga(t=!1){return function(e){return e.sort((r,n)=>r.name.localeCompare(n.name)||r.date.localeCompare(n.date)).reduce((r,n)=>{if(r.length===0)n.lastValue=n.value;else{let o=r[r.length-1];n.name===o.name?(n.lastValue=o.value,t&&(n.value=o.value+n.value)):n.lastValue=n.value}return[...r,n]},[])}}function xa(t,e){if(e==="long"||e==="wide")return e;let r=t[0];return"date"in r&&"name"in r&&"value"in r?"long":"wide"}function En(t,e=!1){return function(r){if(t==="long"||xa(r,t)==="long")return r;let n=[];return r.forEach(o=>{for(let[i,a]of Object.entries(o)){if(i==="date")continue;let s={date:o.date,name:i};e?s={...s,...a}:s={...s,value:a},n.push(s)}}),n}}function ya(t){let e=[];return t.forEach(r=>{let n=e.filter(s=>s.date===r.date),o=n.length>0?n[0]:{},{date:i,...a}=r;o[r.name]=a,n.length===0&&(o.date=r.date,e.push(o))}),e}function va(t,e,r,n){if(!e)return t;let o=ya(t).map(a=>({...a,date:new Date(a.date)})),i=o.reduce((a,s,u)=>{let f=a[a.length-1].date,l=Mn(f,s.date,e).slice(1),c=1/l.length;if(u<o.length){let h=wa(o[u-1],o[u],n),p=[];return l.forEach((m,d)=>{let v=h(r==="last"?0:(d+1)*c),T={date:l[d]};for(let[E,M]of Object.entries(v))E!=="date"&&(T[E]={...M});p.push(N(s.date)===N(T.date)?s:T)}),[...a,...p]}else return[...a]},[o[0]]).map(a=>({...a,date:N(a.date)}));return En("wide",!0)(i)}function wa(t={},e={},r){let n=u(t,r),o=u(e,r),i=Array.from(new Set([...n,...o])),a=i.reduce((f,l)=>({...f,[l]:t[l]}),{}),s=i.reduce((f,l)=>({...f,[l]:e[l]}),{});return z(a,s);function u(f={},l){return Object.keys(f).filter(c=>c!=="date").map(c=>f[c]).sort(function(c,h){return h.value-c.value}).slice(0,l).map(c=>c.name)}}var An=self;An.addEventListener("message",async t=>{let{type:e,data:r,options:n,baseUrl:o,messageId:i}=t.data;if(e==="prepare-data"){let a=await Cn(r,n,o);An.postMessage({type:"data-prepared",data:a,messageId:i})}});})();\n';
function Vt(t, e) {
    let { names: r, groups: n } = e.getState().data, { showGroups: o, colorSeed: i, colorMap: a } = e.getState().options;
    if (t.color) return t.color;
    let s = !!t.group && o && n.length > 0, l = s ? n : r;
    i && (l = kl(l, zi(i)));
    let u = s ? t.group : t.name, c = l.indexOf(u);
    if (a) {
        if (Array.isArray(a)) {
            for(; c > a.length - 1;)c = c - a.length;
            return a[c];
        } else if (a[u]) return a[u];
    }
    let f = c % 2 === 0 ? 1 : -1, p = Hi(u) / 10 * f, h = 360 / (l.length + 1), m = (l.indexOf(u) + 1) * h;
    return ne(m, .75, .75 + p);
}
function Yt(t) {
    return "icon-" + it(t.name);
}
function cr(t, e) {
    for(; t.toString().length < e;)t = "0" + t;
    return t;
}
function zi(t) {
    t = String(t);
    let e = "";
    for(let r = 0; r < t.length; r++)e += cr(String(t.charCodeAt(r)), 3);
    return +e;
}
var Ut = (t)=>String(t).split(".")[1]?.length || 0;
function Hi(t) {
    let e = zi(t), r = Math.sin(e) * 1e4;
    return r - Math.floor(r);
}
function kl(t, e) {
    let r = [
        ...t
    ], n = r.length, o, i;
    for(; n;)i = Math.floor(Hi(e) * n--), o = r[n], r[n] = r[i], r[i] = o, ++e;
    return r;
}
function Ft(t = "racingbars", e = 8) {
    let r = Array(3).fill(null).map(()=>Math.random().toString(36).substr(2)).join("");
    return t + r.slice(-e);
}
function fr(t, e, r) {
    let n;
    if (!r) n = t.getBoundingClientRect().height;
    else if (String(r).startsWith("window")) {
        let o = +r.split("*")[1] || 1;
        n = window.innerHeight * o;
    } else n = +r;
    return n > e ? n : e;
}
function pr(t, e, r) {
    let n;
    if (!r) n = t.getBoundingClientRect().width;
    else if (String(r).startsWith("window")) {
        let o = +r.split("*")[1] || 1;
        n = window.innerWidth * o;
    } else n = +r;
    return n > e ? n : e;
}
function hr(t, e) {
    if (t) return e ? t.querySelector("." + e) : t;
}
function yt(t, e, r = !1) {
    let n = hr(t, e);
    n && (r ? n.style.visibility = "unset" : n.style.display = "flex");
}
function J(t, e, r = !1) {
    let n = hr(t, e);
    n && (r ? n.style.visibility = "hidden" : n.style.display = "none");
}
function ot(t, e, r, n, o = !1) {
    return typeof t == "function" ? t(e, r, n) : o ? Bi(e, t) : t;
}
function it(t) {
    return String(t).replace(/[\W]+/g, "_");
}
function wn(t, e, r) {
    j(t).select(e).classed(r, function() {
        return !j(this).classed(r);
    });
}
function Sl(t, e, r = !1) {
    let n;
    return function(o, i) {
        let a = this, s = arguments, l = function() {
            n = null, r || t.apply(a, s);
        }, u = r && !n;
        clearTimeout(n), n = setTimeout(l, e), u && t.apply(a, s);
    };
}
var mr = Sl(function(t, e) {
    e(t);
}, 250);
var Al = (t, e = "text/javascript")=>`data:${e};charset=UTF-8;base64,` + btoa(t), $i = (t)=>{
    try {
        return new Worker(Al(t));
    } catch  {
        return new Worker(URL.createObjectURL(new Blob([
            t
        ], {
            type: "application/javascript"
        })));
    }
};
var Vi = (t)=>Array.from(new Set(t.map((e)=>e.date))).sort();
function qt(t) {
    let e = new Date(t);
    if (isNaN(+e)) throw new Error(`"${t}" is not a valid date`);
    let r = e.getFullYear().toString(), n = cr((1 + e.getMonth()).toString(), 2), o = cr(e.getDate().toString(), 2);
    return `${r}-${n}-${o}`;
}
function Bi(t, e = "YYYY-MM-DD") {
    let r = t.slice(0, 4), n = t.slice(5, 7), o = t.slice(8, 10), i = new Date(t), a = String(i.getDay()), s = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    }, l = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    };
    return e.replace("MMM", s[n]).replace("DDD", l[a]).replace("YYYY", r).replace("MM", n).replace("DD", o);
}
function Yi(t, e) {
    let r = t.indexOf(e);
    if (r === -1) return t[0];
    let n = t.length - 1;
    return r === n ? t[0] : t[r + 1];
}
var _n = $i(Pi);
async function bn(t, e, r = !1) {
    let { dataTransform: n, dataType: o } = e.getState().options;
    typeof n == "function" && (typeof t == "string" && (t = await lr(t, o)), t = n(await t));
    let i = Ft();
    _n.postMessage({
        type: "prepare-data",
        data: await t,
        options: Tl(e.getState().options),
        baseUrl: location.href,
        messageId: i
    });
    let a = await new Promise((s)=>{
        let l = (u)=>{
            u.data.type === "data-prepared" && u.data.messageId === i && (s(u.data.data), _n.removeEventListener("message", l));
        };
        _n.addEventListener("message", l);
    });
    return Ml(a, e, r), a;
}
function Tl(t) {
    return Object.keys(t).reduce((e, r)=>(typeof t[r] != "function" && (e[r] = t[r]), e), {});
}
function Ml(t, e, r) {
    let n = Array.from(new Set(t.map((a)=>String(a.name)))).sort(), o = Array.from(new Set(t.map((a)=>String(a.group)))).filter(Boolean).sort(), i = Vi(t);
    e.dispatch(T.data.dataLoaded({
        names: n,
        groups: o,
        datesCache: i
    })), r ? e.dispatch(T.ticker.changeDates(i)) : e.dispatch(T.ticker.initialize(i));
}
function me(t, e, r) {
    let n;
    if (r.getState().data.dateSlices[t]) n = r.getState().data.dateSlices[t];
    else {
        let i = e.filter((s)=>s.date === t && !isNaN(s.value)).sort((s, l)=>l.value - s.value).map((s, l)=>({
                ...s,
                rank: qi(s, l, r)
            })), a = [
            {
                name: "",
                value: 0,
                lastValue: 0,
                date: t,
                rank: 1
            }
        ];
        n = i.length > 0 ? i : a, r.dispatch(T.data.addDateSlice(t, n));
    }
    return r.getState().data.groupFilter.length > 0 ? El(n, r) : n;
}
function El(t, e) {
    let r = e.getState().data.groupFilter;
    return t.filter((n)=>n.group ? !r.includes(n.group) : !0).map((n, o)=>({
            ...n,
            rank: qi(n, o, e)
        }));
}
function Ui(t, e) {
    return function() {
        if (e.getState().ticker.isRunning) {
            let r = Yi(e.getState().ticker.dates, e.getState().ticker.currentDate);
            me(r, t, e);
        }
    };
}
function qi(t, e, r) {
    return r.getState().options.fixedOrder.length > 0 ? t.rank : e;
}
var dr = {
    dataShape: "auto",
    dataType: "auto",
    dataTransform: null,
    valueDecimals: "preserve",
    fillDateGapsInterval: null,
    fillDateGapsValue: "interpolate",
    makeCumulative: !1,
    startDate: "",
    endDate: "",
    colorSeed: "",
    showGroups: !1,
    tickDuration: 500,
    topN: 10,
    mouseControls: !1,
    keyboardControls: !1,
    autorun: !0,
    loop: !1,
    injectStyles: !0,
    title: "",
    subTitle: "",
    caption: "",
    dateCounter: "MM/YYYY",
    labelsPosition: "inside",
    labelsWidth: 150,
    showIcons: !1,
    controlButtons: "all",
    overlays: "none",
    inputHeight: "",
    inputWidth: "",
    minHeight: 300,
    minWidth: 250,
    height: "",
    width: "",
    marginTop: 0,
    marginRight: 20,
    marginBottom: 5,
    marginLeft: 0,
    theme: "light",
    colorMap: {},
    fixedScale: !1,
    fixedOrder: [],
    highlightBars: !1,
    selectBars: !1
}, vn = (t = dr, e)=>{
    switch(e.type){
        case Lt.loadOptions:
        case Lt.changeOptions:
            {
                let r = [
                    "inputHeight",
                    "inputWidth",
                    "minHeight",
                    "minWidth"
                ], n = {};
                Object.keys(e.payload).forEach((b)=>{
                    r.includes(b) || (n[b] = e.payload[b] ?? t[b]);
                });
                let o = n.startDate ? qt(n.startDate) : t.startDate, i = n.endDate ? qt(n.endDate) : t.startDate, a = n.height || t.inputHeight, s = n.width || t.inputWidth, l = Array.isArray(n.fixedOrder) ? [
                    ...n.fixedOrder
                ] : t.fixedOrder, u = Array.isArray(n.colorMap) ? [
                    ...n.colorMap
                ].map(String) : typeof n.colorMap == "object" ? {
                    ...n.colorMap
                } : t.colorMap, c = l.length || Number(n.topN) || t.topN, f = Number(n.tickDuration) || t.tickDuration, p = Number(n.labelsWidth) || t.labelsWidth, h = Number(n.marginTop) || t.marginTop, m = Number(n.marginRight) || t.marginRight, g = Number(n.marginBottom) || t.marginBottom, x = Number(n.marginLeft) || t.marginLeft;
                return {
                    ...t,
                    ...n,
                    startDate: o,
                    endDate: i,
                    inputHeight: a,
                    inputWidth: s,
                    fixedOrder: l,
                    colorMap: u,
                    topN: c,
                    tickDuration: f,
                    labelsWidth: p,
                    marginTop: h,
                    marginRight: m,
                    marginBottom: g,
                    marginLeft: x
                };
            }
        default:
            return t;
    }
};
var Cl = [
    "makeCumulative",
    "loop",
    "showIcons",
    "showGroups",
    "mouseControls",
    "keyboardControls",
    "autorun",
    "injectStyles",
    "highlightBars",
    "selectBars",
    "fixedScale"
], Nl = [
    "labelsWidth",
    "tickDuration",
    "topN",
    "minHeight",
    "minWidth",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft"
], Rl = [
    "theme",
    "startDate",
    "endDate"
], Fl = [
    "colorSeed",
    "inputHeight",
    "inputWidth",
    "height",
    "width"
], Ol = [
    "title",
    "subTitle",
    "dateCounter",
    "caption"
], Il = [
    "long",
    "wide",
    "auto"
], Ll = [
    "json",
    "csv",
    "tsv",
    "xml",
    "auto"
], Pl = [
    "inside",
    "outside",
    "none"
], zl = [
    "all",
    "play",
    "none"
], Hl = [
    "all",
    "play",
    "repeat",
    "none"
], $l = [
    null,
    "year",
    "month",
    "day"
], Bl = [
    "last",
    "interpolate"
];
function gr(t) {
    let e = {};
    return Cl.forEach((r)=>{
        if (tt(t[r], "boolean")) e[r] = t[r];
        else if (tt(t[r], "string")) {
            let n = t[r];
            (n === "true" || n === "false") && (e[r] = n === "true");
        }
    }), Nl.forEach((r)=>{
        tt(t[r], "number") && (e[r] = Number(t[r]));
    }), Rl.forEach((r)=>{
        tt(t[r], "string") && (e[r] = t[r]);
    }), Fl.forEach((r)=>{
        !tt(t[r], "string") && !tt(t[r], "number") || (e[r] = t[r]);
    }), Ol.forEach((r)=>{
        !tt(t[r], "string") && !tt(t[r], "function") || (e[r] = t[r]);
    }), Ot(Il, t.dataShape) && (e.dataShape = t.dataShape), Ot(Ll, t.dataType) && (e.dataType = t.dataType), Ot(Pl, t.labelsPosition) && (e.labelsPosition = t.labelsPosition), Ot(zl, t.controlButtons) && (e.controlButtons = t.controlButtons), Ot(Hl, t.overlays) && (e.overlays = t.overlays), Ot($l, t.fillDateGapsInterval) && (e.fillDateGapsInterval = t.fillDateGapsInterval), Ot(Bl, t.fillDateGapsValue) && (e.fillDateGapsValue = t.fillDateGapsValue), t.valueDecimals === "preserve" && (e.valueDecimals = "preserve"), tt(t.valueDecimals, "number") && (e.valueDecimals = Number(t.valueDecimals)), tt(t.fixedOrder, "array", "string") && (e.fixedOrder = t.fixedOrder), Vl(t.dataTransform) && (e.dataTransform = t.dataTransform), Yl(t.colorMap) && (e.colorMap = t.colorMap), e;
}
function Vl(t) {
    return typeof t > "u" ? !1 : t === null || typeof t == "function";
}
function Yl(t) {
    return typeof t > "u" || t === null ? !1 : tt(t, "array", "string") ? !0 : tt(t, "object") && Object.values(t).every((e)=>typeof e == "string");
}
function tt(t, e, r) {
    return typeof t > "u" ? !1 : e === "number" ? typeof t == "number" && !isNaN(Number(t)) : e === "boolean" ? typeof t == "boolean" || t === "true" || t === "false" : e === "array" ? Array.isArray(t) ? r ? t.every((n)=>tt(n, r)) : !0 : !1 : e === "object" ? t !== null && typeof t == "object" : typeof t === e;
}
function Ot(t, e) {
    return e != null && t.includes(e);
}
function Wi(t, e) {
    let { minHeight: r, inputHeight: n, minWidth: o, inputWidth: i, title: a, subTitle: s, showGroups: l, controlButtons: u, marginTop: c, marginRight: f, marginBottom: p, marginLeft: h, labelsPosition: m, labelsWidth: g, showIcons: x, fixedOrder: b } = t.getState().options, { root: D, maxValue: k } = e, S = b.length > 0 ? b.length : t.getState().options.topN, d = e.height = fr(D, r, String(n)), w = e.width = pr(D, o, String(i)), E = 5, R = a ? 55 : 0, I = s ? a ? 20 : 40 : 0, H = l ? R || I ? 20 : 30 : 0, _ = u !== "none" ? 50 : 0, C = Math.max(R + I + H, _ + H, 10), A = m !== "outside" ? 0 : g, O = {
        top: c + C + 15,
        right: f,
        bottom: p,
        left: h + A
    }, z = e.x = Nt().domain([
        0,
        k
    ]).range([
        O.left,
        w - O.right - 65
    ]), $ = e.y = Nt().domain([
        S,
        0
    ]).range([
        d - O.bottom,
        O.top
    ]), G = e.barPadding = (d - (O.bottom + O.top)) / (S * 5), y = e.labelPadding = 8;
    e.barWidth = (xt)=>Math.abs(z(xt.value) - z(0) - 1);
    let M = e.barHeight = $(1) - $(0) - G;
    e.barHalfHeight = ($(1) - $(0)) / 2 + 1, e.barY = (xt)=>$(xt.rank) + 5;
    let jt = e.iconSize = x ? M * .9 : 0, Gt = e.iconSpace = x ? jt + y : 0;
    e.labelX = m !== "outside" ? (xt)=>z(xt.value) - y - Gt : O.left - y, e.titlePadding = E, e.titleHeight = R, e.margin = O;
}
function yr(t, e) {
    e.svg.selectAll(".halo").remove(), t.select(function() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this);
    }).classed("halo", !0);
}
function Xi(t, e, r) {
    mr(t, function(n) {
        let o = n.detail;
        o === 3 ? r.dispatch(T.data.resetFilters()) : o === 2 ? r.dispatch(T.data.allExceptFilter(e)) : r.dispatch(T.data.toggleFilter(e));
    });
}
function lt(t, e, r) {
    e.getState().options.highlightBars && wn(r.root, "rect." + it(t.name), "highlight");
}
function Wt(t, e, r) {
    e.getState().options.selectBars && (wn(r.root, "rect." + it(t.name), "selected"), e.dispatch(T.data.toggleSelection(t.name)));
}
function ji(t, e, r) {
    let n = t.getState().data.groups, o = t.getState().ticker.dates, i = t.getState().ticker.currentDate, { title: a, subTitle: s, marginTop: l, marginLeft: u, showGroups: c } = t.getState().options, { svg: f, margin: p, width: h, titlePadding: m, titleHeight: g } = e;
    if (e.titleText = f.append("text").attr("class", "title").attr("x", u + m).attr("y", l + 24).html(ot(a, i, r, o)), e.subTitleText = f.append("text").attr("class", "subTitle").attr("x", u + m).attr("y", l + (g || 24)).html(ot(s, i, r, o)), c) {
        let b = f.append("g").selectAll(".legend-wrapper").data(n).enter().append("g").attr("class", "legend legend-wrapper").style("cursor", "pointer").style("opacity", (S)=>t.getState().data.groupFilter.includes(S) ? .3 : 1).on("click", (S, d)=>Xi(S, d, t));
        b.append("rect").attr("class", "legend legend-color").attr("width", 10).attr("height", 10).attr("y", p.top - 35).style("fill", (S)=>Vt({
                group: S
            }, t)), b.append("text").attr("class", "legend legend-text").attr("x", 20).attr("y", p.top - 25).html((S)=>S);
        let D = p.left + m, k = 0;
        b.each(function() {
            let S = j(this), w = S.select("text").node().getBBox();
            D + w.width > h && (D = p.left + m, k += 30), S.attr("transform", "translate(" + D + ", " + k + ")"), D += w.width + 40;
        }), p.top += k;
    }
}
var N = {
    controls: "controls",
    skipBack: "skipBack",
    play: "play",
    pause: "pause",
    skipForward: "skipForward",
    overlay: "overlay",
    overlayPlay: "overlayPlay",
    overlayRepeat: "overlayRepeat"
};
var It = {
    skipBack: '<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M28.46,4a3,3,0,0,0-3,.07l-15.2,9.41A3,3,0,0,0,9,15V5A3,3,0,0,0,6,2H5A3,3,0,0,0,2,5V27a3,3,0,0,0,3,3H6a3,3,0,0,0,3-3V17a3,3,0,0,0,1.22,1.53L25.42,28a3,3,0,0,0,1.58.46,3,3,0,0,0,3-3V6.59A3,3,0,0,0,28.46,4Z"/></g></svg>',
    play: '<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M26.78,13.45,11.58,4A3,3,0,0,0,7,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,11.58,28l15.2-9.41a3,3,0,0,0,0-5.1Z"/></g></svg>',
    pause: '<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns:svg="http://www.w3.org/2000/svg"><g transform="translate(-17)"><path d="m 27,2 h -1 c -1.656854,0 -3,1.3431458 -3,3 v 12 c -0.04755,3.269656 0,6.666667 0,10 0,1.656854 1.343146,3 3,3 h 1 c 1.656854,0 3,-1.343146 3,-3 V 5 C 30,3.3431458 28.656854,2 27,2 Z" /></g><g transform="translate(-4)"><path d="m 27,2 h -1 c -1.656854,0 -3,1.3431458 -3,3 v 12 c -0.04755,3.269656 0,6.666667 0,10 0,1.656854 1.343146,3 3,3 h 1 c 1.656854,0 3,-1.343146 3,-3 V 5 C 30,3.3431458 28.656854,2 27,2 Z" /></g></svg>',
    skipForward: '<svg viewBox="0 0 32 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M27,2H26a3,3,0,0,0-3,3V15a3,3,0,0,0-1.22-1.53L6.58,4A3,3,0,0,0,2,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,6.58,28l15.2-9.41A3,3,0,0,0,23,17V27a3,3,0,0,0,3,3h1a3,3,0,0,0,3-3V5A3,3,0,0,0,27,2Z"/></g></svg>',
    overlayPlay: '<svg viewBox="0 0 32 32" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M26.78,13.45,11.58,4A3,3,0,0,0,7,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,11.58,28l15.2-9.41a3,3,0,0,0,0-5.1Z"/></g></svg>',
    overlayRepeat: '<svg viewBox="0 0 32 32" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="M18,4A12,12,0,0,0,6.05,15H3a1,1,0,0,0-.88.53,1,1,0,0,0,0,1l4,6a1,1,0,0,0,1.66,0l4-6a1,1,0,0,0,.05-1A1,1,0,0,0,11,15H8.05A10,10,0,1,1,18,26a1,1,0,0,0,0,2A12,12,0,0,0,18,4Z"/></g></svg>'
};
function Gi(t, e) {
    let { marginTop: r, controlButtons: n } = t.getState().options, { root: o, width: i, margin: a, barPadding: s } = e, l = o.getBoundingClientRect().width, u = [
        {
            skipBack: It.skipBack
        },
        {
            play: It.play
        },
        {
            pause: It.pause
        },
        {
            skipForward: It.skipForward
        }
    ];
    j(o).append("div").classed("controls", !0).style("position", "absolute").style("top", r + "px").style("right", l - i + a.right + s + "px").selectAll("div").data(u).enter().append("div").html((c)=>Object.values(c)[0]).attr("class", (c)=>Object.keys(c)[0]), n === "play" && (J(o, N.skipBack), J(o, N.skipForward)), n === "none" && J(o, N.controls);
}
function Xt(t, e) {
    let { overlays: r, loop: n } = t.getState().options, { root: o } = e;
    t.getState().ticker.isRunning ? (yt(o, N.pause), J(o, N.play)) : (yt(o, N.play), J(o, N.pause)), t.getState().ticker.isFirstDate && (r === "all" || r === "play") && !t.getState().ticker.isRunning ? (J(o, N.controls, !0), yt(o, N.overlay), yt(o, N.overlayPlay), J(o, N.overlayRepeat)) : t.getState().ticker.isLastDate && (r === "all" || r === "repeat") && !(n && t.getState().ticker.isRunning) ? (J(o, N.controls, !0), yt(o, N.overlay), yt(o, N.overlayRepeat), J(o, N.overlayPlay)) : (yt(o, N.controls, !0), J(o, N.overlay));
}
function Ki(t, e) {
    let { minHeight: r, minWidth: n } = t.getState().options, { root: o } = e, i = [
        {
            overlayPlay: It.overlayPlay
        },
        {
            overlayRepeat: It.overlayRepeat
        }
    ];
    j(o).append("div").classed("overlay", !0).style("min-height", r + "px").style("min-width", n + "px").selectAll("div").data(i).enter().append("div").html((a)=>Object.values(a)[0]).attr("class", (a)=>Object.keys(a)[0]);
}
function xr(t, e, r) {
    let { caption: n, dateCounter: o, labelsPosition: i, showIcons: a, fixedScale: s, fixedOrder: l } = e.getState().options, u = e.getState().ticker.dates, c = r.root, f = l.length > 0 ? l.length : e.getState().options.topN, p = e.getState().ticker.currentDate, h = me(p, t, e), m = h.slice(0, f), g = u.indexOf(p) > 0 ? u.indexOf(p) - 1 : 0, x = e.getState().options.valueDecimals;
    if (r.lastDate = u[g], !c || m.length === 0) return;
    c.innerHTML = "", b(), Gi(e, r), Ki(e, r), Xt(e, r);
    function b() {
        r.maxValue = s ? t.map((y)=>y.value).reduce((y, M)=>y > M ? y : M, 0) : wt(m, (y)=>y.value), Wi(e, r);
        let { margin: D, width: k, height: S, x: d, y: w, barWidth: E, barHeight: R, barY: I, barHalfHeight: H, labelX: _, iconSize: C, labelPadding: A } = r, L = r.svg = j(c).append("svg").attr("width", k).attr("height", S);
        ji(e, r, h);
        let O = r.xAxis = Se(d).ticks(k > 500 ? 5 : 2).tickSize(-(S - (D.top + D.bottom))).tickFormat((y)=>nt(",")(y));
        L.append("g").attr("class", "axis xAxis").attr("transform", `translate(0, ${D.top})`).call(O).selectAll(".tick line").classed("origin", (y)=>y === 0), L.selectAll("rect.bar").data(m, (y)=>y.name).enter().append("rect").attr("class", (y)=>"bar " + it(y.name)).classed("selected", (y)=>e.getState().data.selected.includes(y.name)).attr("x", d(0) + 1).attr("width", E).attr("y", I).attr("height", R).style("fill", (y)=>Vt(y, e)).on("click", (y, M)=>Wt(M, e, r)).on("mouseover", (y, M)=>lt(M, e, r)).on("mouseout", (y, M)=>lt(M, e, r)), L.selectAll("text.label").data(m, (y)=>y.name).enter().append("text").attr("class", "label").classed("outside-bars", i === "outside").classed("hidden", i === "none").attr("x", _).attr("y", (y)=>I(y) + H).style("text-anchor", "end").html((y)=>y.name).on("click", (y, M)=>Wt(M, e, r)).on("mouseover", (y, M)=>lt(M, e, r)).on("mouseout", (y, M)=>lt(M, e, r)), L.selectAll("text.valueLabel").data(m, (y)=>y.name).enter().append("text").attr("class", "valueLabel").attr("x", (y)=>d(y.value) + 5).attr("y", (y)=>I(y) + H).text((y)=>x === "preserve" ? y.lastValue : nt(`,.${Ut(y.lastValue ?? y.value)}f`)(y.lastValue)), a && ((r.defs = L.append("svg:defs")).selectAll("svg").data(m, (M)=>M.name).enter().append("svg:pattern").attr("class", "svgpattern").attr("id", Yt).attr("width", C).attr("height", C).append("svg:image").attr("xlink:href", (M)=>M.icon).attr("width", C).attr("height", C).attr("x", 0).attr("y", 0), L.append("clipPath").attr("id", "clipPath-" + e.getState().container.element.id).append("rect").attr("x", d(0) + 1).attr("y", D.top).attr("width", k).attr("height", S), L.selectAll("circle").data(m, (M)=>M.name).enter().append("circle").attr("cx", (M)=>d(M.value) - C / 2 - A).attr("cy", (M)=>w(M.rank) + H).attr("r", C / 2).style("fill", "transparent").style("fill", (M)=>`url(#${Yt(M)})`).attr("clip-path", `url(#clipPath-${e.getState().container.element.id})`));
        let z = S - D.bottom, $ = k - D.right, G = n ? z - 30 : z - 5;
        r.dateCounterText = L.append("text").attr("class", "dateCounterText").attr("x", $).attr("y", G).style("text-anchor", "end").html(ot(o, p, h, u, !0)).call((y)=>yr(y, r)), r.captionText = L.append("text").attr("class", "caption").attr("x", $ - 10).attr("y", z - 5).style("text-anchor", "end").html(ot(n, p, h, u));
    }
}
function de(t, e, r) {
    let { svg: n, titleText: o, subTitleText: i, dateCounterText: a, captionText: s, x: l, y: u, xAxis: c, labelPadding: f, barWidth: p, barHeight: h, barHalfHeight: m, barY: g, iconSize: x, labelX: b, defs: D, lastDate: k } = r, S = e.getState().ticker.dates, { showGroups: d } = e.getState().options;
    if (!l) return;
    let { tickDuration: w, title: E, subTitle: R, caption: I, dateCounter: H, marginBottom: _, fixedScale: C, fixedOrder: A, labelsPosition: L } = e.getState().options, O = A.length > 0 ? A.length : e.getState().options.topN, z = e.getState().ticker.currentDate, $ = me(z, t, e), G = $.slice(0, O), y = e.getState().options.valueDecimals;
    d && n.selectAll(".legend-wrapper").style("opacity", (v)=>e.getState().data.groupFilter.includes(v) ? .3 : 1), C || (l.domain([
        0,
        wt(G, (v)=>v.value) || 0
    ]), n.select(".xAxis").transition().duration(w).ease(X).call(c));
    let M = n.selectAll(".bar").data(G, (v)=>v.name);
    M.enter().append("rect").attr("class", (v)=>"bar " + it(v.name)).classed("selected", (v)=>e.getState().data.selected.includes(v.name)).attr("x", l(0) + 1).attr("width", p).attr("y", ()=>u(O + 1) + _ + 5).attr("height", h).style("fill", (v)=>Vt(v, e)).on("click", (v, Y)=>Wt(Y, e, r)).on("mouseover", (v, Y)=>lt(Y, e, r)).on("mouseout", (v, Y)=>lt(Y, e, r)).transition().duration(w).ease(X).attr("y", g), M.transition().duration(w).ease(X).attr("width", (v)=>Math.abs(l(v.value) - l(0) - 1)).attr("y", g), M.exit().transition().duration(w).ease(X).attr("width", (v)=>Math.abs(l(v.value) - l(0) - 1)).attr("y", ()=>u(O + 1) + _ + 5).remove();
    let jt = n.selectAll(".label").data(G, (v)=>v.name);
    jt.enter().append("text").attr("class", "label").classed("outside-bars", L === "outside").classed("hidden", L === "none").attr("x", b).attr("y", ()=>u(O + 1) + _ + 5 + m).style("text-anchor", "end").html((v)=>v.name).on("click", (v, Y)=>Wt(Y, e, r)).on("mouseover", (v, Y)=>lt(Y, e, r)).on("mouseout", (v, Y)=>lt(Y, e, r)).transition().duration(w).ease(X).attr("y", (v)=>g(v) + m), jt.transition().duration(w).ease(X).attr("x", b).attr("y", (v)=>g(v) + m), jt.exit().transition().duration(w).ease(X).attr("x", b).attr("y", ()=>u(O + 1) + _ + 5).remove();
    let Gt = n.selectAll(".valueLabel").data(G, (v)=>v.name);
    Gt.enter().append("text").attr("class", "valueLabel").attr("x", (v)=>l(v.value) + 5).attr("y", ()=>u(O + 1) + _ + 5).text((v)=>y === "preserve" ? v.lastValue : nt(`,.${Ut(v.lastValue ?? v.value)}f`)(v.lastValue)).transition().duration(w).ease(X).attr("y", (v)=>g(v) + m);
    let xt = k === z;
    if (Gt.transition().duration(w).ease(X).attr("x", (v)=>l(v.value) + 5).attr("y", (v)=>g(v) + m).tween("text", function(v) {
        let Y = Number(xt ? v.value : v.lastValue) || 0, B = st(Y, v.value);
        return function(oa) {
            let ia = y === "preserve" ? Math.max(Ut(v.value), Ut(Y)) : y;
            this.textContent = nt(`,.${ia || 0}f`)(B(oa));
        };
    }), Gt.exit().transition().duration(w).ease(X).attr("x", (v)=>l(v.value) + 5).attr("y", ()=>u(O + 1) + _ + 5).remove(), e.getState().options.showIcons) {
        let v = D.selectAll(".svgpattern").data(G, (B)=>B.name);
        v.enter().append("svg:pattern").attr("class", "svgpattern").attr("id", Yt).attr("width", x).attr("height", x).append("svg:image").attr("xlink:href", (B)=>B.icon).attr("width", x).attr("height", x).style("z-index", "99").attr("x", 0).attr("y", 0), v.exit().transition().duration(w).ease(X).remove();
        let Y = n.selectAll("circle").data(G, (B)=>B.name);
        Y.enter().append("circle").attr("cx", (B)=>l(B.value) - x / 2 - f).attr("cy", ()=>u(O + 1) + x + m).attr("r", x / 2).style("z-index", "99").style("fill", "transparent").style("fill", (B)=>`url(#${Yt(B)})`).transition().duration(w).ease(X).attr("cy", (B)=>u(B.rank) + m).attr("clip-path", `url(#clipPath-${e.getState().container.element.id})`), Y.transition().duration(w).ease(X).attr("cx", (B)=>l(B.value) - x / 2 - f).attr("cy", (B)=>u(B.rank) + m), Y.exit().transition().duration(w).ease(X).attr("cx", (B)=>l(B.value) - x / 2 - f).attr("cy", ()=>u(O + 1) + x + m).remove();
    }
    o.html(ot(E, z, $, S)), i.html(ot(R, z, $, S)), s.html(ot(I, z, $, S)), a.html(ot(H, z, $, S, !0)).call((v)=>yr(v, r)), Xt(e, r), r.lastDate = z;
}
function Zi(t, e, r) {
    let { inputHeight: n, inputWidth: o, minHeight: i, minWidth: a } = e.getState().options, { root: s } = r;
    if (s && (!n && !o || String(n).startsWith("window") || String(o).startsWith("window"))) {
        r.height = fr(s, i, String(n)), r.width = pr(s, a, String(o));
        let l = s.style.position;
        xr(t, e, r), de(t, e, r), de(t, e, r), Xt(e, r), s.style.position = l;
    }
}
function vr(t, e, r) {
    let n = {
        root: r
    };
    return {
        renderInitialView: ()=>xr(t, e, n),
        renderFrame: ()=>de(t, e, n),
        resize: ()=>Zi(t, e, n)
    };
}
function Dn(t) {
    return window.ResizeObserver && window.requestAnimationFrame ? new ResizeObserver((e)=>{
        window.requestAnimationFrame(()=>{
            e?.length && t();
        });
    }) : {
        observe: ()=>{
            window.addEventListener("resize", t);
        },
        unobserve: ()=>{
            window.removeEventListener("resize", t);
        }
    };
}
function kn(t, e) {
    return function() {
        t.getState().triggerRender && e.renderFrame();
    };
}
var Qi = "__selector__{--base-font-size:max(1vw,12px);--text-font-size:calc(var(--base-font-size)*1.2);--title-font-size:calc(var(--base-font-size)*2);--caption-font-size:calc(var(--base-font-size)*1.5);--counter-font-size:calc(var(--base-font-size)*4);--controls-font-size:calc(var(--base-font-size)*1.5)}__selector__ text{font-family:Open Sans,sans-serif;font-size:var(--text-font-size)}__selector__ text.title{font-size:var(--title-font-size);font-weight:500}__selector__ text.subTitle{font-weight:500}__selector__ text.caption{font-size:var(--caption-font-size);font-weight:400}__selector__ text.legend-text{user-select:none}__selector__ text.label{font-weight:600}__selector__ text.label.hidden{visibility:hidden}__selector__ text.valueLabel{font-weight:300}__selector__ text.dateCounterText{font-size:var(--counter-font-size);font-weight:700}__selector__ .xAxis .tick:nth-child(2) text{text-anchor:start}__selector__ .tick line{shape-rendering:CrispEdges}__selector__ path.domain{display:none}__selector__{position:relative}__selector__ .controls{display:flex}__selector__ .controls div,__selector__ .overlay div{align-items:center;border-radius:5px;cursor:pointer;display:flex;justify-content:center;margin:5px}__selector__ .controls div{height:10vw;max-height:32px;max-width:32px;width:10vw}__selector__ .controls svg{height:7vw;margin:5px auto;max-height:24px;max-width:24px;width:7vw}__selector__ .overlay{height:100%;left:0;position:absolute;top:0;width:100%}__selector__ .overlay,__selector__ .overlay div{align-items:center;display:flex;justify-content:center}__selector__ .overlay div{border-radius:100px;height:20vw;max-height:200px;max-width:200px;position:relative;width:20vw}__selector__ .overlay svg{height:50%;width:50%}";
var Ji = "__selector__ text.subTitle{fill:#777}__selector__ text.dateCounterText{fill:#bbb;opacity:1}__selector__ text.caption{fill:#777}__selector__ .halo{fill:#fff;opacity:1;stroke:#fff;stroke-linejoin:round;stroke-width:10}__selector__ text.label,__selector__ text.label.outside-bars,__selector__ text.legend-text,__selector__ text.valueLabel{fill:#000}__selector__ .tick text{fill:#777}__selector__ .tick line{shape-rendering:CrispEdges;stroke:#ddd}__selector__ .tick line.origin{stroke:#aaa}__selector__ .controls div,__selector__ .overlay div{background:#777;border:1px solid #000;color:#fff;opacity:.5}__selector__ .controls div:hover,__selector__ .overlay div:hover{background:#aaa;color:#000}__selector__ .overlay{background-color:#000;opacity:.7}__selector__ .highlight{fill:#ff2727!important}__selector__ .selected{fill:#d12020!important;stroke:#777!important;stroke-width:1!important}";
var ta = "__selector__{background-color:#1e1e1e}__selector__ text.title{fill:#fafafa}__selector__ text.subTitle{fill:#ccc}__selector__ text.dateCounterText{fill:#ccc;opacity:1}__selector__ text.caption{fill:#ccc}__selector__ .halo{fill:#313639;opacity:1;stroke:#313639;stroke-linejoin:round;stroke-width:10}__selector__ text.legend-text{fill:#fafafa}__selector__ text.label{fill:#313639}__selector__ text.label.outside-bars,__selector__ text.valueLabel{fill:#fafafa}__selector__ .tick text{fill:#ccc}__selector__ .tick line{shape-rendering:CrispEdges;stroke:#ddd}__selector__ .tick line.origin{stroke:#aaa}__selector__ .controls div,__selector__ .overlay div{background:#777;border:1px solid #000;color:#fff;opacity:.5}__selector__ .controls div:hover,__selector__ .overlay div:hover{background:#aaa;color:#000}__selector__ .overlay{background-color:#000;opacity:.7}__selector__ .highlight{fill:#ff2727!important}__selector__ .selected{fill:#d12020!important;stroke:#777!important;stroke-width:1!important}";
var Xl = {
    light: Ji,
    dark: ta
};
function wr(t, e, r = "top", n = Qi, o = Xl) {
    let i = n + o[e];
    if (!i || !t || typeof document > "u") return "";
    t.id = t.id || Ft(), i = i.replace(/__selector__/g, "#" + t.id);
    let a = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    return s.id = Ft("styles"), s.type = "text/css", r === "top" && a.firstChild ? a.insertBefore(s, a.firstChild) : a.appendChild(s), s.styleSheet ? s.styleSheet.cssText = i : s.appendChild(document.createTextNode(i)), s.id;
}
function ea(t, e) {
    let r = t.getState().container.element, n = [];
    return o(), {
        reregister: i,
        unregister: f,
        addApiEventHandler: h
    };
    function o() {
        a(), s(), l(), u();
    }
    function i() {
        f(!1), o();
    }
    function a() {
        p(r, N.skipBack, "click", ()=>e.skipBack()), p(r, N.play, "click", ()=>e.start()), p(r, N.pause, "click", ()=>e.stop()), p(r, N.skipForward, "click", ()=>e.skipForward());
    }
    function s() {
        p(r, N.overlayPlay, "click", ()=>{
            J(r, N.overlay), e.start();
        }), p(r, N.overlayRepeat, "click", ()=>{
            J(r, N.overlay), e.skipBack(), e.start();
        });
    }
    function l() {
        t.getState().options.mouseControls && r.querySelector("svg").addEventListener("click", (g)=>{
            let x = g.target;
            !x || x.classList.contains("legend") || mr(g, function(b) {
                let D = b.detail;
                D === 3 ? e.skipBack() : D === 2 ? e.skipForward() : e.toggle();
            });
        });
    }
    function u() {
        t.getState().options.keyboardControls && p(document, "", "keyup", c);
    }
    function c(m) {
        let g = document.activeElement;
        if (g && [
            "input",
            "textarea"
        ].includes(g.tagName.toLowerCase())) return;
        let x = {
            spacebar: " ",
            A: "a",
            S: "s",
            D: "d"
        };
        switch(m.key){
            case x.spacebar:
                e.toggle(), m.preventDefault();
                break;
            case x.A:
                e.skipBack();
                break;
            case x.S:
                e.toggle();
                break;
            case x.D:
                e.skipForward();
                break;
        }
    }
    function f(m = !0) {
        n.filter((g)=>m ? !0 : !g.userDefined).forEach((g)=>{
            g.element.removeEventListener(g.eventType, g.handler), n.splice(n.indexOf(g), 1);
        });
    }
    function p(m, g, x, b) {
        let D = hr(m, g);
        D && (D.addEventListener(x, b), n.push({
            element: D,
            userDefined: !1,
            eventType: x,
            handler: b
        }));
    }
    function h(m, g) {
        return r.addEventListener(m, g), n.push({
            element: r,
            userDefined: !0,
            eventType: m,
            handler: g
        }), {
            remove: ()=>{
                r.removeEventListener(m, g);
            }
        };
    }
}
function _r(t) {
    let { ticker: e, data: r } = t.getState();
    return {
        date: e.currentDate,
        isFirstDate: e.isFirstDate,
        isLastDate: e.isLastDate,
        isRunning: e.isRunning,
        allDates: r.datesCache
    };
}
function ge(t, e) {
    let r = t.getState().container.element;
    r && r.dispatchEvent(new CustomEvent(e, {
        bubbles: !0,
        detail: _r(t)
    }));
}
function ra(t) {
    let e = "", r;
    return function() {
        let n = t.getState().ticker.currentDate, o = t.getState().ticker.isRunning;
        n !== e && (ge(t, "dateChange"), t.getState().ticker.isFirstDate && ge(t, "firstDate"), t.getState().ticker.isLastDate && ge(t, "lastDate"), e = n), !r && o && ge(t, "play"), r && !o && ge(t, "pause"), r = o;
    };
}
async function na(t, e, r = {}) {
    if (typeof e == "object" && !(e instanceof HTMLElement) && (!r || Object.keys(r).length === 0) && (r = e, e = r.selector), !e) {
        let d = document.createElement("div");
        document.body.appendChild(d), e = d;
    }
    let n = typeof e == "string" ? document.querySelector(e) : e;
    if (!n) throw new Error("Container element is not found.");
    let o = gr(r), i = Li(ur);
    i.dispatch(T.container.setContainer({
        element: n
    })), i.dispatch(T.options.loadOptions(o));
    let a = gn(i), s = await bn(t, i), l = vr(s, i, n), { injectStyles: u, theme: c, autorun: f } = i.getState().options, p = [];
    x(i, l, s);
    let h;
    u && (h = wr(n, c)), l.renderInitialView(), a.start(), f || a.stop();
    let m = ea(i, a), g = Dn(D);
    g?.observe(n);
    function x(d, w, E) {
        [
            kn(d, w),
            Ui(E, d),
            ra(d),
            ...p
        ].forEach((I)=>{
            d.subscribe(I);
        });
    }
    function b(d) {
        return p.push(d), i.subscribe(d);
    }
    function D() {
        l.resize(), m.reregister();
    }
    function k() {
        throw new Error("Cannot perform this operation after calling destroy()");
    }
    return {
        play () {
            i.getState().ticker.isRunning || a.start();
        },
        pause () {
            a.stop();
        },
        toggle () {
            a.toggle();
        },
        skipBack () {
            a.skipBack();
        },
        skipForward () {
            a.skipForward();
        },
        inc (d = 1) {
            isNaN(Number(d)) || (d = 1), i.dispatch(T.ticker.inc(Number(d)));
        },
        dec (d = 1) {
            isNaN(Number(d)) || (d = 1), i.dispatch(T.ticker.dec(Number(d)));
        },
        setDate (d) {
            i.dispatch(T.ticker.updateDate(qt(d)));
        },
        getDate () {
            return i.getState().ticker.currentDate;
        },
        getAllDates () {
            return [
                ...i.getState().ticker.dates
            ];
        },
        isRunning () {
            return i.getState().ticker.isRunning;
        },
        select (d) {
            j(n).select("rect." + it(d)).classed("selected", !0), i.dispatch(T.data.addSelection(String(d)));
        },
        unselect (d) {
            j(n).select("rect." + it(d)).classed("selected", !1), i.dispatch(T.data.removeSelection(String(d)));
        },
        unselectAll () {
            j(n).selectAll("rect").classed("selected", !1), i.dispatch(T.data.resetSelections());
        },
        hideGroup (d) {
            i.dispatch(T.data.addFilter(String(d)));
        },
        showGroup (d) {
            i.dispatch(T.data.removeFilter(String(d)));
        },
        showOnlyGroup (d) {
            i.dispatch(T.data.allExceptFilter(String(d)));
        },
        showAllGroups () {
            i.dispatch(T.data.resetFilters());
        },
        async changeOptions (d) {
            let w = gr(d);
            [
                "dataShape",
                "dataType"
            ].forEach((A)=>{
                if (w[A] && w[A] !== i.getState().options[A]) throw new Error(`The option "${A}" cannot be changed.`);
            });
            let R = [
                "dataTransform",
                "fillDateGapsInterval",
                "fillDateGapsValue",
                "startDate",
                "endDate",
                "fixedOrder",
                "makeCumulative"
            ], I = !1;
            R.forEach((A)=>{
                w[A] && w[A] !== i.getState().options[A] && (I = !0);
            }), i.dispatch(T.options.changeOptions(w));
            let { injectStyles: H, theme: _, autorun: C } = i.getState().options;
            if (I && (i.unsubscribeAll(), i.dispatch(T.data.clearDateSlices()), s = await bn(t, i, !0), l = vr(s, i, n), x(i, l, s)), ("injectStyles" in w || "theme" in w) && (document.getElementById(h)?.remove(), H && (h = wr(n, _))), l.renderInitialView(), m.reregister(), C) {
                let { isFirstDate: A, isRunning: L } = i.getState().ticker;
                A && !L && a.start();
            }
        },
        onDate (d, w) {
            if (typeof w != "function") throw new Error("The second argument must be a function");
            let E = qt(d), R = "", I = b(()=>{
                i.getState().ticker.currentDate === E && E !== R && (R = i.getState().ticker.currentDate, w(_r(i))), R = i.getState().ticker.currentDate;
            });
            return {
                remove () {
                    I.unsubscribe();
                }
            };
        },
        on (d, w) {
            if (typeof w != "function") throw new Error("The second argument must be a function");
            let E = m.addApiEventHandler(d, ()=>{
                w(_r(i));
            });
            return {
                remove () {
                    E.remove();
                }
            };
        },
        destroy () {
            a.stop(), i.unsubscribeAll(), m.unregister(), g?.unobserve(n), n.innerHTML = "", document.getElementById(h)?.remove();
            for (let d of Object.keys(this))this[d] = k;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7fIXz","dDe6p"], "dDe6p", "parcelRequire94c2")

//# sourceMappingURL=index.293c461d.js.map
