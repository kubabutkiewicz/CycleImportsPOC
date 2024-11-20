var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now(),__DEV__=false,process=this.process||{},__METRO_GLOBAL_PREFIX__='';process.env=process.env||{};process.env.NODE_ENV=process.env.NODE_ENV||"production";
!(function(e){"use strict";e.__r=f,e[`${__METRO_GLOBAL_PREFIX__}__d`]=function(n,o,i){if(r.has(o)){if(__DEV__){var l=arguments[4];l&&e.__accept(o,n,i,l)}return}var u={dependencyMap:i,factory:n,hasError:!1,importedAll:t,importedDefault:t,isInitialized:!1,publicModule:{exports:{}}};if(r.set(o,u),__DEV__){u.hot=b();var f=arguments[3];f&&(u.verboseName=f,a.set(f,o))}},e.__c=i,e.__registerSegment=function(e,t,n){if(y[e]=t,__DEV__){if(0===e&&n)throw new Error("registerSegment: Expected moduleIds to be null for main segment");if(0!==e&&!n)throw new Error("registerSegment: Expected moduleIds to be passed for segment #"+e)}n&&n.forEach((function(t){r.has(t)||E.has(t)||E.set(t,e)}))};var r=i(),t={},n={},o={}.hasOwnProperty;function i(){return r=new Map}if(__DEV__&&(e.$RefreshReg$=function(){},e.$RefreshSig$=function(){return function(e){return e}}),__DEV__)var a=new Map,l=function(e){var r=a.get(e);if(null==r)throw new Error(`Unknown named module: "${e}"`);return r},u=[];function f(e){if(__DEV__&&"string"==typeof e){var t=e;e=l(t),console.warn(`Requiring module "${t}" by name is only supported for debugging purposes and will BREAK IN PRODUCTION!`)}var n=e;if(__DEV__){var o=u.indexOf(n);if(-1!==o){var i=u.slice(o).map((function(e){var t,n;return null!=(t=null==(n=r.get(e))?void 0:n.verboseName)?t:"[unknown]"}));c(i)&&(i.push(i[0]),console.warn(`Require cycle: ${i.join(" -> ")}\n\nRequire cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.`))}}var a=r.get(n);return a&&a.isInitialized?a.publicModule.exports:p(n,a)}function c(r){var t=e[__METRO_GLOBAL_PREFIX__+"__requireCycleIgnorePatterns"];if(!Array.isArray(t))return!0;var n=function(e){return null!=e&&t.some((function(r){return r.test(e)}))};return r.every((function(e){return!n(e)}))}function d(e){__DEV__&&"string"==typeof e&&(e=l(e));var n=e,o=r.get(n);if(o&&o.importedDefault!==t)return o.importedDefault;var i=f(n),a=i&&i.__esModule?i.default:i;return r.get(n).importedDefault=a}function s(e){__DEV__&&"string"==typeof e&&(e=l(e));var n=e,i=r.get(n);if(i&&i.importedAll!==t)return i.importedAll;var a,u=f(n);if(u&&u.__esModule)a=u;else{if(a={},u)for(var c in u)o.call(u,c)&&(a[c]=u[c]);a.default=u}return r.get(n).importedAll=a}f.importDefault=d,f.importAll=s,f.context=function(){if(__DEV__)throw new Error("The experimental Metro feature `require.context` is not enabled in your project.\nThis can be enabled by setting the `transformer.unstable_allowRequireContext` property to `true` in your Metro configuration.");throw new Error("The experimental Metro feature `require.context` is not enabled in your project.")},f.resolveWeak=function(){if(__DEV__)throw new Error("require.resolveWeak cannot be called dynamically. Ensure you are using the same version of `metro` and `metro-runtime`.");throw new Error("require.resolveWeak cannot be called dynamically.")};var _=!1;function p(r,t){if(!_&&e.ErrorUtils){var n;_=!0;try{n=w(r,t)}catch(r){e.ErrorUtils.reportFatalError(r)}return _=!1,n}return w(r,t)}var v=16,h=65535;function g(e){return{segmentId:e>>>v,localId:e&h}}f.unpackModuleId=g,f.packModuleId=function(e){return(e.segmentId<<v)+e.localId};var y=[],E=new Map;function w(t,n){if(!n&&y.length>0){var o,i=null!=(o=E.get(t))?o:0,a=y[i];null!=a&&(a(t),n=r.get(t),E.delete(t))}var l=e.nativeRequire;if(!n&&l){var c=g(t),_=c.segmentId;l(c.localId,_),n=r.get(t)}if(!n)throw m(t);if(n.hasError)throw n.error;if(__DEV__)var p=A(),v=C();n.isInitialized=!0;var h=n,w=h.factory,b=h.dependencyMap;__DEV__&&u.push(t);try{__DEV__&&p.beginEvent("JS_require_"+(n.verboseName||t));var R=n.publicModule;if(__DEV__){R.hot=n.hot;var M=e.$RefreshReg$,D=e.$RefreshSig$;if(null!=v){var x=v;e.$RefreshReg$=function(e,r){x.register(e,t+" "+r)},e.$RefreshSig$=x.createSignatureFunctionForTransform}}return R.id=t,w(e,f,d,s,R,R.exports,b),__DEV__||(n.factory=void 0,n.dependencyMap=void 0),__DEV__&&(p.endEvent(),null!=v&&k(v,R.exports,t)),R.exports}catch(e){throw n.hasError=!0,n.error=e,n.isInitialized=!1,n.publicModule.exports=void 0,e}finally{if(__DEV__){if(u.pop()!==t)throw new Error("initializingModuleIds is corrupt; something is terribly wrong");e.$RefreshReg$=M,e.$RefreshSig$=D}}}function m(e){var r='Requiring unknown module "'+e+'".';return __DEV__&&(r+=" If you are sure the module exists, try restarting Metro. You may also want to run `yarn` or `npm install`."),Error(r)}if(__DEV__){f.Systrace={beginEvent:function(){},endEvent:function(){}},f.getModules=function(){return r};var b=function(){var e={_acceptCallback:null,_disposeCallback:null,_didAccept:!1,accept:function(r){e._didAccept=!0,e._acceptCallback=r},dispose:function(r){e._disposeCallback=r}};return e},R=null,M=function(e,r,t){var o=[],i=new Set,a=new Set;function l(e){if(a.has(e))throw n;if(!i.has(e)){i.add(e),a.add(e);var u=r(e);t(e)?a.delete(e):(u.forEach((function(e){l(e)})),a.delete(e),o.push(e))}}return e.forEach((function(e){l(e)})),o},D=function(e,n,o){var i=r.get(e);if(null==i)throw new Error("[Refresh] Expected to find the module.");var a=i.hot;if(!a)throw new Error("[Refresh] Expected module.hot to always exist in DEV.");if(a._disposeCallback)try{a._disposeCallback()}catch(r){console.error(`Error while calling dispose handler for module ${e}: `,r)}n&&(i.factory=n),o&&(i.dependencyMap=o),i.hasError=!1,i.error=void 0,i.importedAll=t,i.importedDefault=t,i.isInitialized=!1;var l=i.publicModule.exports;if(i.publicModule.exports={},a._didAccept=!1,a._acceptCallback=null,a._disposeCallback=null,f(e),i.hasError)return i.hasError=!1,i.isInitialized=!0,i.error=null,i.publicModule.exports=l,!0;if(a._acceptCallback)try{a._acceptCallback()}catch(r){console.error(`Error while calling accept handler for module ${e}: `,r)}return!1},x=function(e,r){if("undefined"!=typeof window&&null!=window.location&&"function"==typeof window.location.reload)window.location.reload();else{var t=C();if(null!=t){var n,o,i,a,l=null!=(n=null==(o=r.source)?void 0:o.verboseName)?n:"unknown",u=null!=(i=null==(a=r.failed)?void 0:a.verboseName)?i:"unknown";t.performFullRefresh(`Fast Refresh - ${e} <${l}> <${u}>`)}else console.warn("Could not reload the application after an edit.")}},I=function(e,r){if(e.isLikelyComponentType(r))return!0;if(null==r||"object"!=typeof r)return!1;var t=!1,n=!0;for(var o in r)if(t=!0,"__esModule"!==o){var i=Object.getOwnPropertyDescriptor(r,o);if(i&&i.get)return!1;var a=r[o];e.isLikelyComponentType(a)||(n=!1)}return t&&n},$=function(e,r,t){var n=V(e,r),o=V(e,t);if(n.length!==o.length)return!0;for(var i=0;i<o.length;i++)if(n[i]!==o[i])return!0;return!1},V=function(e,r){var t=[];if(t.push(e.getFamilyByType(r)),null==r||"object"!=typeof r)return t;for(var n in r)if("__esModule"!==n){var o=Object.getOwnPropertyDescriptor(r,n);if(!o||!o.get){var i=r[n];t.push(n),t.push(e.getFamilyByType(i))}}return t},k=function(e,r,t){if(e.register(r,t+" %exports%"),null!=r&&"object"==typeof r)for(var n in r){var o=Object.getOwnPropertyDescriptor(r,n);if(!o||!o.get){var i=r[n],a=t+" %exports% "+n;e.register(i,a)}}};e.__accept=function(e,t,o,i){var a=r.get(e);if(!a){if(t)return;throw m(e)}if(!a.hasError&&!a.isInitialized)return a.factory=t,void(a.dependencyMap=o);var l,u=C(),f=new Set,c=!1;try{l=M([e],(function(e){var t=r.get(e);if(null==t)return[];var n=t.hot;if(null==n)throw new Error("[Refresh] Expected module.hot to always exist in DEV.");var o=n._didAccept;o||null==u||I(u,t.publicModule.exports)&&(o=!0,f.add(e));if(o)return[];var l=i[e];return 0===l.length?(x("No root boundary",{source:a,failed:t}),c=!0,[]):l}),(function(){return c})).reverse()}catch(e){if(e===n)return void x("Dependency cycle",{source:a});throw e}if(!c){for(var d=new Set,s=0;s<l.length;s++){var _=l[s];if(!d.has(_)){d.add(_);var p=r.get(_);if(null==p)throw new Error("[Refresh] Expected to find the updated module.");var v=p.publicModule.exports,h=D(_,_===e?t:void 0,_===e?o:void 0),g=p.publicModule.exports;if(h)return;if(f.has(_)){var y=!I(u,g),E=$(u,v,g);if(y||E){var w=i[_];if(0===w.length)return void x(y?"No longer a boundary":"Invalidated boundary",{source:a,failed:p});for(var b=0;b<w.length;b++){var V=w[b],k=r.get(V);if(null==k)throw new Error("[Refresh] Expected to find parent module.");if(!I(u,k.publicModule.exports))return void x("Invalidated boundary",{source:a,failed:k});f.add(V),l.push(V)}}}}}null!=u&&null==R&&(R=setTimeout((function(){R=null,u.performReactRefresh()}),30))}}}if(__DEV__)var A=function(){return e[__METRO_GLOBAL_PREFIX__+"__SYSTRACE"]||f.Systrace},C=function(){return e[__METRO_GLOBAL_PREFIX__+"__ReactRefresh"]||f.Refresh}})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
!(function(n){var e=(function(){function n(n,e){return n}function e(n){var e={};return n.forEach((function(n,t){e[n]=!0})),e}function t(n,t,u){if(n.formatValueCalls++,n.formatValueCalls>200)return`[TOO BIG formatValueCalls ${n.formatValueCalls} exceeded limit of 200]`;var c=r(n,t);if(c)return c;var f=Object.keys(t),p=e(f);if(d(t)&&(f.indexOf('message')>=0||f.indexOf('description')>=0))return o(t);if(0===f.length){if(v(t)){var g=t.name?': '+t.name:'';return n.stylize('[Function'+g+']','special')}if(s(t))return n.stylize(RegExp.prototype.toString.call(t),'regexp');if(y(t))return n.stylize(Date.prototype.toString.call(t),'date');if(d(t))return o(t)}var h,b,m='',j=!1,O=['{','}'];(h=t,Array.isArray(h)&&(j=!0,O=['[',']']),v(t))&&(m=' [Function'+(t.name?': '+t.name:'')+']');return s(t)&&(m=' '+RegExp.prototype.toString.call(t)),y(t)&&(m=' '+Date.prototype.toUTCString.call(t)),d(t)&&(m=' '+o(t)),0!==f.length||j&&0!=t.length?u<0?s(t)?n.stylize(RegExp.prototype.toString.call(t),'regexp'):n.stylize('[Object]','special'):(n.seen.push(t),b=j?i(n,t,u,p,f):f.map((function(e){return l(n,t,u,p,e,j)})),n.seen.pop(),a(b,m,O)):O[0]+m+O[1]}function r(n,e){if(p(e))return n.stylize('undefined','undefined');if('string'==typeof e){var t="'"+JSON.stringify(e).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return n.stylize(t,'string')}return f(e)?n.stylize(''+e,'number'):u(e)?n.stylize(''+e,'boolean'):c(e)?n.stylize('null','null'):void 0}function o(n){return'['+Error.prototype.toString.call(n)+']'}function i(n,e,t,r,o){for(var i=[],a=0,u=e.length;a<u;++a)b(e,String(a))?i.push(l(n,e,t,r,String(a),!0)):i.push('');return o.forEach((function(o){o.match(/^\d+$/)||i.push(l(n,e,t,r,o,!0))})),i}function l(n,e,r,o,i,l){var a,u,f;if((f=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?u=f.set?n.stylize('[Getter/Setter]','special'):n.stylize('[Getter]','special'):f.set&&(u=n.stylize('[Setter]','special')),b(o,i)||(a='['+i+']'),u||(n.seen.indexOf(f.value)<0?(u=c(r)?t(n,f.value,null):t(n,f.value,r-1)).indexOf('\n')>-1&&(u=l?u.split('\n').map((function(n){return'  '+n})).join('\n').slice(2):'\n'+u.split('\n').map((function(n){return'   '+n})).join('\n')):u=n.stylize('[Circular]','special')),p(a)){if(l&&i.match(/^\d+$/))return u;(a=JSON.stringify(''+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.slice(1,a.length-1),a=n.stylize(a,'name')):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=n.stylize(a,'string'))}return a+': '+u}function a(n,e,t){return n.reduce((function(n,e){return e.indexOf('\n')>=0&&0,n+e.replace(/\u001b\[\d\d?m/g,'').length+1}),0)>60?t[0]+(''===e?'':e+'\n ')+' '+n.join(',\n  ')+' '+t[1]:t[0]+e+' '+n.join(', ')+' '+t[1]}function u(n){return'boolean'==typeof n}function c(n){return null===n}function f(n){return'number'==typeof n}function p(n){return void 0===n}function s(n){return g(n)&&'[object RegExp]'===h(n)}function g(n){return'object'==typeof n&&null!==n}function y(n){return g(n)&&'[object Date]'===h(n)}function d(n){return g(n)&&('[object Error]'===h(n)||n instanceof Error)}function v(n){return'function'==typeof n}function h(n){return Object.prototype.toString.call(n)}function b(n,e){return Object.prototype.hasOwnProperty.call(n,e)}return function(e,r){return t({seen:[],formatValueCalls:0,stylize:n},e,r.depth)}})(),t=0,r=1,o=2,i=3,l=[];l[t]='debug',l[r]='log',l[o]='warning',l[i]='error';var a=__DEV__?2:1;function u(t){return function(){var r;r=1===arguments.length&&'string'==typeof arguments[0]?arguments[0]:Array.prototype.map.call(arguments,(function(n){return e(n,{depth:10})})).join(', ');var u=arguments[0],c=t;'string'==typeof u&&'Warning: '===u.slice(0,9)&&c>=i&&(c=o),n.__inspectorLog&&n.__inspectorLog(l[c],r,[].slice.call(arguments),a),f.length&&(r=p('',r)),n.nativeLoggingHook(r,c)}}function c(n,e){return Array.apply(null,Array(e)).map((function(){return n}))}var f=[];function p(n,e){return f.join('')+n+' '+(e||'')}if(n.nativeLoggingHook){var s=n.console;if(__DEV__&&s){var g=Object.getOwnPropertyDescriptor(n,'console');g&&Object.defineProperty(n,'originalConsole',g)}n.console=Object.assign({},null!=s?s:{},{error:u(i),info:u(r),log:u(r),warn:u(o),trace:u(t),debug:u(t),table:function(e){if(!Array.isArray(e)){var t=e;for(var o in e=[],t)if(t.hasOwnProperty(o)){var i=t[o];i["(index)"]=o,e.push(i)}}if(0!==e.length){var l=Object.keys(e[0]).sort(),a=[],u=[];l.forEach((function(n,t){u[t]=n.length;for(var r=0;r<e.length;r++){var o=(e[r][n]||'?').toString();a[r]=a[r]||[],a[r][t]=o,u[t]=Math.max(u[t],o.length)}}));for(var f=g(u.map((function(n){return c('-',n).join('')})),'-'),p=[g(l),f],s=0;s<e.length;s++)p.push(g(a[s]));n.nativeLoggingHook('\n'+p.join('\n'),r)}else n.nativeLoggingHook('',r);function g(n,e){var t=n.map((function(n,e){return n+c(' ',u[e]-n.length).join('')}));return e=e||' ',t.join(e+'|'+e)}},group:function(e){n.nativeLoggingHook(p("\u2510",e),r),f.push("\u2502")},groupEnd:function(){f.pop(),n.nativeLoggingHook(p("\u2518"),r)},groupCollapsed:function(e){n.nativeLoggingHook(p("\u2518",e),r),f.push("\u2502")},assert:function(e,t){e||n.nativeLoggingHook('Assertion failed: '+t,i)}}),Object.defineProperty(console,'_isPolyfilled',{value:!0,enumerable:!1}),__DEV__&&s&&(Object.keys(console).forEach((function(n){var e=console[n];s[n]&&e!==s[n]&&(console[n]=function(){s[n].apply(s,arguments),e.apply(console,arguments)})})),['clear','dir','dirxml','profile','profileEnd'].forEach((function(n){'function'==typeof s[n]&&(console[n]=function(){s[n].apply(s,arguments)})})))}else if(!n.console){var y=function(){},d=n.print||y;n.console={debug:d,error:d,info:d,log:d,trace:d,warn:d,assert:function(n,e){n||d('Assertion failed: '+e)},clear:y,dir:y,dirxml:y,group:y,groupCollapsed:y,groupEnd:y,profile:y,profileEnd:y,table:y},Object.defineProperty(console,'_isPolyfilled',{value:!0,enumerable:!1})}})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
!(function(n){var r=0,t=function(n,r){throw n},l={setGlobalHandler:function(n){t=n},getGlobalHandler:function(){return t},reportError:function(n){t&&t(n,!1)},reportFatalError:function(n){t&&t(n,!0)},applyWithGuard:function(n,t,u,o,e){try{return r++,n.apply(t,u)}catch(n){l.reportError(n)}finally{r--}return null},applyWithGuardIfNeeded:function(n,r,t){return l.inGuard()?n.apply(r,t):(l.applyWithGuard(n,r,t),null)},inGuard:function(){return!!r},guard:function(n,r,t){var u;if('function'!=typeof n)return console.warn('A function must be passed to ErrorUtils.guard, got ',n),null;var o=null!=(u=null!=r?r:n.name)?u:'<generated guard>';return function(){for(var r=arguments.length,u=new Array(r),e=0;e<r;e++)u[e]=arguments[e];return l.applyWithGuard(n,null!=t?t:this,u,null,o)}}};n.ErrorUtils=l})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
__d((function(g,_r,_i,_a,m,_e,d){var e=(function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&{}.hasOwnProperty.call(e,f)){var a=u?Object.getOwnPropertyDescriptor(e,f):null;a&&(a.get||a.set)?Object.defineProperty(o,f,a):o[f]=e[f]}return o.default=e,n&&n.set(e,o),o})(_r(d[0]));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}console.log(e.useServiceB())}),0,[1]);
__d((function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.complexChainA=function(){var t=e.useServiceC(),n=r.testCircularC2();return`Chain A: ${t} + ${n}`},_e.doSomethingA=function(){for(var e=g.performance.now(),r=0,t=0;t<1e7;t++)r+=Math.sqrt(t);var n=g.performance.now();return console.log(`ServiceA Operation took: ${n-e}ms`),r},_e.testCircularA1=function(){return e.testCircularB2()},_e.testCircularA2=function(){return r.testCircularC1()},_e.useServiceB=function(){var r=g.performance.now(),t=e.doSomethingB(),n=g.performance.now();return console.log(`ServiceA->ServiceB Call took: ${n-r}ms`),t};var e=n(_r(d[0])),r=n(_r(d[1]));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}function n(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var c=u?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}}),1,[2,3]);
__d((function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.complexChainB=function(){var t=e.useServiceA(),n=r.testCircularA1();return`Chain B: ${t} + ${n}`},_e.doSomethingB=function(){for(var e=g.performance.now(),r=0,t=0;t<1e7;t++)r+=Math.sqrt(t);var n=g.performance.now();return console.log(`ServiceB Operation took: ${n-e}ms`),r},_e.testCircularB1=function(){return e.testCircularC2()},_e.testCircularB2=function(){return r.testCircularA2()},_e.useServiceC=function(){var r=g.performance.now(),t=e.doSomethingC(),n=g.performance.now();return console.log(`ServiceB->ServiceC Call took: ${n-r}ms`),t};var e=n(_r(d[0])),r=n(_r(d[1]));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}function n(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var c=u?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}}),2,[3,1]);
__d((function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.complexChainC=function(){var n=e.useServiceB(),t=r.complexChainB();return`Chain C: ${n} + ${t}`},_e.doSomethingC=function(){for(var e=g.performance.now(),r=0,n=0;n<1e7;n++)r+=Math.sqrt(n);var t=g.performance.now();return console.log(`ServiceC Operation took: ${t-e}ms`),r},_e.testCircularC1=function(){return r.testCircularB1()},_e.testCircularC2=function(){return e.complexChainA()},_e.useServiceA=function(){var r=g.performance.now(),n=e.doSomethingA(),t=g.performance.now();return console.log(`ServiceC->ServiceA Call took: ${t-r}ms`),n};var e=t(_r(d[0])),r=t(_r(d[1]));function n(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(n=function(e){return e?t:r})(e)}function t(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n(r);if(t&&t.has(e))return t.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var c=u?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}return o.default=e,t&&t.set(e,o),o}}),3,[1,2]);
__r(0);