/* 샤크 어드벤처 — 서비스 워커
   폰에 설치(홈 화면 아이콘)되고, 한 번 연 뒤에는 인터넷이 없어도 돌아가게 한다.

   - 게임 파일(index.html)은 "네트워크 먼저" — 고친 게임이 바로 반영된다.
     인터넷이 없을 때만 저장해 둔 것을 쓴다
   - 그림(assets/ · icons/)은 "저장본 먼저 + 뒤에서 새로 받기" — 빨리 뜨고,
     같은 이름으로 그림을 바꿔도 다음 실행부터는 새 그림이 나온다
   - 그림 목록을 여기 따로 적지 않는다. 게임이 처음 켜질 때 ART 를 전부 불러오므로
     그때 저장된다 (목록이 두 군데로 갈라지지 않게)

   저장 방식을 바꿀 때만 CACHE 이름의 숫자를 올린다 */
const CACHE = 'shark-v1';
const CORE = ['./', './index.html', './manifest.webmanifest',
              './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // 게임 페이지 — 네트워크 먼저, 안 되면 저장본
  if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true })
                         .then(r => r || caches.match('./index.html'))));
    return;
  }

  // 그림·아이콘·매니페스트 — 저장본 먼저, 뒤에서 새로 받아 둔다
  e.respondWith(
    caches.open(CACHE).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; })
                            .catch(() => hit);
      return hit || net;
    })));
});
