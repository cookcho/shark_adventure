# Shark Adventure — 작업 인수인계

8살 아이와 함께 만드는 2D 모바일 웹 상어 성장 게임.
참고작은 *Feed and Grow: Fish* 와 *Shark Universe*. **3D 가 아니라 2D** 다.

플레이: https://cookcho.github.io/shark_adventure/

---

## 1. 이 프로젝트의 규칙 (반드시 지킬 것)

1. **게임 전체가 `demo/index.html` 파일 하나다.** 2900줄, 외부 의존성 0개,
   빌드 단계 0개. 분할하지 말 것 — 아이 폰에서 파일 하나만 받으면 돌아가는 게 장점이다.
2. **Canvas 2D 절차적 렌더링이 항상 폴백으로 남아야 한다.** 이미지가 없어도,
   로딩에 실패해도 게임은 멈추지 않고 도형으로 그린다. 이 레이어를 걷어내지 말 것.
3. **이미지는 보이는 것만 바꾼다.** 충돌 판정·이동 속도·성장 수치·먹이 판정·
   저장 데이터는 이미지 유무와 무관해야 한다. 스프라이트 크기는 `len` 에서만 계산한다.
4. **새 엔진·프레임워크·빌드툴을 도입하지 말 것.** 바닐라 JS + Canvas 2D 유지.
5. **모바일 세로 화면이 1순위.** 390×844 에서 먼저 확인한다.
6. 커밋 메시지는 한국어. 무엇을 왜 고쳤는지, 검증한 내용까지 적는다.

## 2. 실행과 검증

```bash
cd demo && python3 -m http.server 8000     # http://localhost:8000
```

`?debug` 를 붙이면 내부 상태가 `window` 에 노출된다.

| 훅 | 내용 |
|---|---|
| `__G` | 게임 상태 (player, fish, cam, stage, boss) |
| `__SAVE()` | 현재 저장 데이터 |
| `__WORLD` `__FISH` `__SHARKS` `__ART` `__IMGS` | 데이터 테이블 |
| `__SFX` `__BGM` `__TRACKS` `__emitStep` `__noteHz` | 사운드 |
| `__spawnBoss()` | 보스 즉시 소환 |

**검증은 Playwright 헤드리스로 한다.** 스크린샷 · 콘솔 에러 · 404 ·
`document.documentElement.scrollWidth` (가로 오버플로) · fps 를 매번 본다.
390×844 / 360×640 / 844×390 세 가지를 돌린다.

저장 데이터를 심어 2·3해역을 바로 여는 법:

```js
localStorage.setItem('seaking.save.v1', JSON.stringify({
  v:1, pearls:999, stage:'coral', active:'reef', sharks:{reef:true},
  stages:{ shore:{cleared:true}, coral:{cleared:false} } }));
```

**헤드리스 fps 는 소프트웨어 렌더링이라 실기기와 다르다.** 숫자를 믿고
최적화하지 말 것 (한 번 속아서 엉뚱한 곳을 고친 적이 있다 — 부록 참고).

## 3. 코드 지도 (`demo/index.html`)

| 줄 | 블록 |
|---|---|
| ~13 | CSS 변수 (색 토큰) · `color-scheme:dark` |
| ~367 | 상수 · `EVO` · `FISH` · `BOSSES` · `STAGES` · `SHARKS` |
| ~517 | localStorage 저장 (`seaking.save.v1`) |
| ~577 | 이미지 에셋 레이어 (`ART` 레지스트리 · `drawSprite` · 실루엣 외곽선) |
| ~694 | 효과음 13종 (WebAudio 합성) |
| ~786 | 칩튠 BGM 6곡 |
| ~1143 | 시뮬레이션 (고정 1/60 틱) |
| ~1270 | 보스 상태기계 |
| ~1699 | 렌더 |
| ~2549 | HUD · 화면 전환 · 메인 루프 |

핵심 상수: `WORLD 3200×1700` · `TARGET_FISH 170` · `SPRITE_SPAN 1.5` ·
`CAM_OVER 300` · `CAM_UNDER 110` · `HUNGER_DRAIN 1.2`

## 4. 게임 규칙 한 줄 요약

**티어가 전부다.** 내 티어 > 상대 → 먹는다 / 같다 → 물어서 체력을 깎아야 먹는다 /
낮다 → 내가 다친다. 티어는 스프라이트 실루엣을 따라 번지는 외곽선으로 표시한다
(없음 = 먹이 / 노랑 = 동급 / 빨강 = 포식자 / 하늘 = 껍질).
가까울 때만 보인다 — 포식자 560px, 나머지 300px.

성장은 두 축이다. **런 안**에서 4단계 진화, **런 밖**에서 진주로 능력치를 올리고
알을 부화시켜 새 상어를 얻는다. 해역은 3곳이고 각각 보스가 있다.

**보스 부위 판정**이 이 게임의 설계 핵심이다. 머리를 물면 1.0배 받고 0.6배 주지만,
꼬리를 물면 **0배 받고 1.3배 준다**. 숫자를 낮추지 않고 난이도를 내리는 장치다.

## 5. 지금 상태

| 영역 | 상태 |
|---|---|
| 게임 루프 | ✅ 타이틀 → 기지 → 런 → 보스 → 정산 → 기지 완결 |
| 해역 | ✅ 3곳 (햇살 연안 / 산호 정원 / 난파선 해구) |
| 보스 | ✅ 3체, 3페이즈 상태기계 + 부위 판정 |
| 메타 성장 | ✅ 진주 · 능력치 5종 · 알 부화 · 상어 4종 |
| 사운드 | ✅ 효과음 13 + 칩튠 BGM 6곡 (오디오 파일 0개) |
| 아트 | 🔶 **32/53** — 아래 참고 |

### 남은 아트 21장

- **물고기 9종** (난파선 해구): `sardine` `yellowray` `angler` `conger` `tuna`
  `swordfish` `hammer` `blueshark` `mine`
- **상어 12장**: `saw` `hammerhead` `mako` × 4단계

생성 프롬프트가 **[`docs/ASSET_PROMPTS_REMAINING.md`](docs/ASSET_PROMPTS_REMAINING.md)**
에 전부 적혀 있다. 규격은 [`docs/ASSETS.md`](docs/ASSETS.md).

**해금 상어(12장)를 먼저 권한다** — 알을 깨서 새 상어를 얻어도 지금은 도형으로만
보여서 부화의 보상감이 비어 있다.

### 에셋 넣는 절차

1. 알파 임계값 12 로 여백을 자른다 (가장자리 near-zero 알파가 `getbbox()` 를 무력화한다)
2. 긴 변 **256px** 로 줄인다 (화면에서 차지하는 폭이 66~156px 라 512는 낭비)
3. **RGB 만 양자화하고 알파는 원본을 되붙인다.** RGBA 를 통째로 양자화하면
   반투명 가장자리가 불투명해져 흰 테두리가 생긴다
4. `demo/assets/fish/<id>.png` 로 저장하고 `ART` 에 한 줄 등록
5. 해당 해역에서 스크린샷으로 확인. 좌·우 양방향 모두 그려봐서 배가 뒤집히지 않는지 본다

처리 스크립트 (프로젝트에는 없음, 필요하면 다시 작성):

```python
from PIL import Image
im = Image.open(src).convert('RGBA')
a = im.split()[3]
im = im.crop(a.point(lambda v: 255 if v > 12 else 0).getbbox())
k = 256 / max(im.width, im.height)
if k < 1: im = im.resize((round(im.width*k), round(im.height*k)), Image.LANCZOS)
alpha = im.split()[3]
out = im.convert('RGB').quantize(colors=128, method=Image.MEDIANCUT,
                                 dither=Image.FLOYDSTEINBERG).convert('RGB')
out.putalpha(alpha)                 # ← 알파는 반드시 원본으로 되붙인다
out.save(dst, optimize=True)
```

## 6. 아직 사람이 확인해야 하는 것

자동 테스트로 판단할 수 없어 남겨둔 것들이다.

- **보스 난이도** — 자동 플레이 2회가 정반대 결과(3/140 체력으로 클리어 / 1페이즈 사망)를
  내서 튜닝을 중단했다. 아이가 실제로 해봐야 안다
- **실기기 fps** — 헤드리스 수치(51~60)는 믿을 수 없다
- **BGM 이 듣기 좋은지** — 음정·박자·클리핑은 검사했지만 곡의 좋고 나쁨은 판단 못 했다
- **어두운 해역 시야 반경** (235 + 34×감각) 과 해역별 포만감 배수 (1.0 / 1.1 / 1.2)

## 7. 밟았던 지뢰 (다시 밟지 말 것)

[`docs/GAME_PLAN.md`](docs/GAME_PLAN.md) 부록 1~6 에 전부 기록해뒀다. 특히:

- **브라우저 자동 다크모드** — 삼성 인터넷·크롬이 밝은 CSS 색을 멋대로 어둡게 칠한다.
  캔버스는 멀쩡한데 버튼과 체력바만 검붉어진다. `color-scheme:dark` 선언으로 막았다.
  **헤드리스에서는 재현되지 않는다**
- **스프라이트와 외곽선의 배율이 다르면** 외곽선이 그림 안쪽에 묻혀 전혀 안 보인다.
  이 게임의 유일한 핵심 규칙(먹을 수 있나/먹히나) 표시가 통째로 사라졌던 적이 있다
- **바닥 생물(게·대왕조개·성게)은 흡입이 아니라 접촉으로만 잡힌다.**
  접촉 반경이 21~27px 뿐이라 플레이어 하한을 조금만 올려도 영원히 닿지 않게 된다
- **BGM 채널 길이는 멜로디 길이의 약수여야 한다.** 드럼을 17칸으로 쓰면 박자가 어긋난다
- 학교(school) 어종은 `spawnFish()` 한 번에 4~9마리가 들어온다.
  `for (i < TARGET_FISH)` 가 아니라 `while (G.fish.length < TARGET_FISH)` 로 센다

## 8. 문서

| 파일 | 내용 |
|---|---|
| [`docs/GAME_PLAN.md`](docs/GAME_PLAN.md) | 기획서 + 부록 1~6 (구현 차이와 교훈 기록) |
| [`docs/ASSETS.md`](docs/ASSETS.md) | 에셋 규격 — 경로·크기·투명·등록법 |
| [`docs/ASSET_PROMPTS.md`](docs/ASSET_PROMPTS.md) | 완료분 생성 프롬프트 |
| [`docs/ASSET_PROMPTS_REMAINING.md`](docs/ASSET_PROMPTS_REMAINING.md) | **남은 21장 프롬프트** |

## 9. 배포

`main` 에 push 하면 GitHub Pages 가 자동으로 올린다. 루트 `index.html` 은
`demo/` 로 보내는 리다이렉트다. 보통 30~60초 걸리고, 폰에서는 캐시 때문에
한 번 더 당겨 새로고침해야 할 수 있다.
