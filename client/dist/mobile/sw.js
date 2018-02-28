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
    "revision": "60ee93f18629b0790658008e642e1417"
  },
  {
    "url": "/public/mobile/javascripts/0.js",
    "revision": "b9dfdeaf8ed88436a9b14acb4425ce41"
  },
  {
    "url": "/public/mobile/javascripts/1.js",
    "revision": "baea78b07482026cca6e096b41897a5c"
  },
  {
    "url": "/public/mobile/javascripts/2.js",
    "revision": "dbf74ed4c762ae156a85043fb67b6827"
  },
  {
    "url": "/public/mobile/javascripts/app.js",
    "revision": "dc19743e890ba118e10e2da09dc0241d"
  },
  {
    "url": "/public/mobile/javascripts/importSW.js",
    "revision": "9ba5963e8179c7ce3522cbdb1bf4c61b"
  },
  {
    "url": "/public/mobile/javascripts/manifest.js",
    "revision": "fcc4b4e6408a80c082a4553182dfeddc"
  },
  {
    "url": "/public/mobile/javascripts/vendor.js",
    "revision": "fc0f8eaf65b2fea48b0dc99981420b3e"
  },
  {
    "url": "/public/mobile/stylesheets/app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
