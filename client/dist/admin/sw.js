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
    "revision": "b6edaaed27b9133fcf20597cec53bb91"
  },
  {
    "url": "/public/admin/javascripts/0.js",
    "revision": "47e369bc2d549f08cb261a2f4f91f30b"
  },
  {
    "url": "/public/admin/javascripts/1.js",
    "revision": "05227f5e67cc1ea28bfee024242c9df8"
  },
  {
    "url": "/public/admin/javascripts/2.js",
    "revision": "d365d4829d013be969b08d331b03a13b"
  },
  {
    "url": "/public/admin/javascripts/app.js",
    "revision": "dc19743e890ba118e10e2da09dc0241d"
  },
  {
    "url": "/public/admin/javascripts/importSW.js",
    "revision": "03b8826827859aab00a18983d2347480"
  },
  {
    "url": "/public/admin/javascripts/manifest.js",
    "revision": "2e2f5f153faec2e154f4e3e2fdf80488"
  },
  {
    "url": "/public/admin/javascripts/vendor.js",
    "revision": "fc0f8eaf65b2fea48b0dc99981420b3e"
  },
  {
    "url": "/public/admin/stylesheets/app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
