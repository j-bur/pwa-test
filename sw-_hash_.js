if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let t={};const a=e=>i(e,r),o={module:{uri:r},exports:t,require:a};n[r]=Promise.all(s.map((e=>o[e]||a(e)))).then((e=>(c(...e),t)))}}define(["./workbox-17eed999"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ODIN"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c9cfc228971b7c03ac2a56441410ca2d"},{url:"favicon.png",revision:"8a71971a70fb242822127d983751b3e2"},{url:"favicon@2x.png",revision:"731333a2a0cdf0c8fe33fb28847b5dbb"},{url:"favicon@3x.png",revision:"e7f9847bed7dd9f6bd4e92747def768c"},{url:"odin_512.png",revision:"f10642bb436bcba1e32af513e8ae7629"},{url:"Progressive_Web_Apps_Logo.svg",revision:"b50455e046f84b118de3f049b0f27e23"},{url:"odin_512.png",revision:"f10642bb436bcba1e32af513e8ae7629"},{url:"manifest.webmanifest",revision:"8d260ae1906734aeb5c00e46bd18c991"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/pwa-test/index.html"))),e.registerRoute((({request:e})=>"document"===e.destination||"navigate"===e.mode),new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"style"===e.destination||"script"===e.destination),new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination||"font"===e.destination),new e.CacheFirst({cacheName:"assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\/data\/.*\.json$/,new e.CacheFirst({cacheName:"local-data",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:3600})]}),"GET")}));