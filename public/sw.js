if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-df677636"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/327.720bec88e55659c0.js",revision:"720bec88e55659c0"},{url:"/_next/static/chunks/framework-4a40a5487363a506.js",revision:"4a40a5487363a506"},{url:"/_next/static/chunks/main-f7f0022b11d3dd2f.js",revision:"f7f0022b11d3dd2f"},{url:"/_next/static/chunks/pages/404-58b18c1b0a9340a8.js",revision:"58b18c1b0a9340a8"},{url:"/_next/static/chunks/pages/_app-17cab1eeaf63ab8b.js",revision:"17cab1eeaf63ab8b"},{url:"/_next/static/chunks/pages/_error-8a31d96fd595e475.js",revision:"8a31d96fd595e475"},{url:"/_next/static/chunks/pages/index-40853330e7eaa1b6.js",revision:"40853330e7eaa1b6"},{url:"/_next/static/chunks/pages/server-sitemap.xml-82c160d190666fcb.js",revision:"82c160d190666fcb"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-a50506563b35ea59.js",revision:"a50506563b35ea59"},{url:"/_next/static/css/57a15061696945e6.css",revision:"57a15061696945e6"},{url:"/_next/static/gOVWjreIP22YgGBJC1VWN/_buildManifest.js",revision:"bbae5ccc6ce15f23ae0a6f26d9946fa8"},{url:"/_next/static/gOVWjreIP22YgGBJC1VWN/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/gOVWjreIP22YgGBJC1VWN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/logo-128x128.png",revision:"230694da52b81bc04c241169fca8dc92"},{url:"/icons/logo-192x192.png",revision:"ae4876e315c0e2348329454b3bd770bf"},{url:"/icons/logo-384x384.png",revision:"2fd1969af0e955c9a3dc3c4f86b19f41"},{url:"/icons/logo-512x512.png",revision:"586511fbb9632f8b85fbdb22e3e7a6bc"},{url:"/locales/en/common.json",revision:"584508aedbac5ad7273589f5817bd438"},{url:"/locales/en/home.json",revision:"cedf108f07a521dd995be8613b3c5283"},{url:"/locales/ru/common.json",revision:"fd5a66c16647d19ac1d60ab50ba4e348"},{url:"/locales/ru/home.json",revision:"f0e68948182fb7f105d667d7df24e743"},{url:"/manifest.json",revision:"1ec477b1bc1c5c9ff2739b65e4ae9a4c"},{url:"/maskable/maskable_icon_x128.png",revision:"230694da52b81bc04c241169fca8dc92"},{url:"/maskable/maskable_icon_x192.png",revision:"ae4876e315c0e2348329454b3bd770bf"},{url:"/maskable/maskable_icon_x384.png",revision:"2fd1969af0e955c9a3dc3c4f86b19f41"},{url:"/maskable/maskable_icon_x512.png",revision:"586511fbb9632f8b85fbdb22e3e7a6bc"},{url:"/robots.txt",revision:"042c01d6ba1699ced2dab960a4a5d8a1"},{url:"/sitemap-0.xml",revision:"99bd9524a4038e82a4e834facae0af44"},{url:"/sitemap.xml",revision:"0026a26708001173a70ceee3f2a8982d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
