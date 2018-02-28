importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "26084f5c427fc96c4ae7b8905ee0fbad"
  },
  {
    "url": "/public/pc/javascripts/0.js",
    "revision": "ba062606c4ef13e05528ba7c52d0a2ae"
  },
  {
    "url": "/public/pc/javascripts/1.js",
    "revision": "d17c398b3f62025c2adee0efad7f28b8"
  },
  {
    "url": "/public/pc/javascripts/2.js",
    "revision": "c9bcac6e7eeb4b30742fe8ebbf1be620"
  },
  {
    "url": "/public/pc/javascripts/3.js",
    "revision": "c7afecc4caeb2f43e550d108005c80a0"
  },
  {
    "url": "/public/pc/javascripts/7.js",
    "revision": "f78604d5b2f64fd1794bb0de2065febf"
  },
  {
    "url": "/public/pc/javascripts/8.js",
    "revision": "8a66a145b965c536752f534587d1272d"
  },
  {
    "url": "/public/pc/javascripts/app.js",
    "revision": "2fbb302c73e511d18e1a1f5e0e9b29f1"
  },
  {
    "url": "/public/pc/javascripts/importSW.js",
    "revision": "a601a54a57f88ccc0e13c8237c4b5403"
  },
  {
    "url": "/public/pc/javascripts/manifest.js",
    "revision": "1a103f5d900760c3202f8842809f5c39"
  },
  {
    "url": "/public/pc/javascripts/vendor.js",
    "revision": "68c2aabd211d3ff4cf9c8739679b7125"
  },
  {
    "url": "/public/pc/stylesheets/app.css",
    "revision": "f03a5e31d8ba5974186426c5a08d85f4"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
