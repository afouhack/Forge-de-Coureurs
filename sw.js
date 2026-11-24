/* Forge de Coureurs : mode hors ligne.
   Les fichiers de l'appli sont gardés sur l'appareil ; une nouvelle version arrive au chargement suivant.
   Pour forcer une mise à jour chez tout le monde, change le numéro de CACHE ci-dessous. */
const CACHE="forge-v2";
const FICHIERS=["./","index.html","pdf-lib.min.js","manifest.webmanifest","icone-192.png","icone-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FICHIERS)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const u=new URL(r.url),police=u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com";
  if(u.origin!==location.origin&&!police)return;
  e.respondWith(caches.match(r).then(hit=>{
    const reseau=fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque")){const copie=res.clone();caches.open(CACHE).then(c=>c.put(r,copie))}return res}).catch(()=>hit);
    return hit||reseau;
  }));
});
