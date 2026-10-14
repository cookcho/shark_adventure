# 남은 그림 — 우선순위별 생성 프롬프트

2026-10-13 다시 정리. 적용 완료 32장 / 지금 게임에 필요한 것 **21장** / 다음 해역용 **10장**.
규격·등록 방법은 [`ASSETS.md`](ASSETS.md), 이미 만든 것들의 프롬프트는 [`ASSET_PROMPTS.md`](ASSET_PROMPTS.md).

| 순위 | 내용 | 장수 | 왜 이 순서인가 |
|---|---|---|---|
| ~~🔴 1~~ ✅ | ~~해금 상어 3종 × 4단계~~ **2026-10-14 적용 완료** | 12 | 판마다 화면 한가운데 있는 게 내 상어다. 알을 깨서 얻었는데 도형으로 나오면 보상감이 없다 |
| ~~🟠 2~~ ✅ | ~~난파선 해구 물고기~~ **2026-10-14 적용 완료 (3×3 격자 한 장)** | 9 | 3해역 완성. 도감에서 이 칸만 도형이라 티가 난다. 기뢰·아귀는 새 장치의 주인공 |
| 🟡 **3** | **다음 해역 — 빙하 해역 세트** | 10 | 미리 만들어 두면 해역을 만들 때 바로 넣는다 (지도에 "준비 중"으로 이미 보인다) |

**순위 안에서도 위에서부터** 만들면 된다. 한 번에 4~5장씩 보내주면 받아서 넣는다.

---

## 0. 공통 — 모든 프롬프트 앞에 붙일 것

```
Style: high-quality 2D game art, vibrant stylized cartoon realism,
clean readable silhouette, soft cel shading with clear highlights and rim light,
rich saturated ocean palette (deep navy #062D49, ocean blue #087DB5,
aqua #14B8D4, light aqua #A7E7F9), warm accents (orange #FF8A24, gold #FFD34F).
Friendly and appealing to an 8-year-old but not babyish. Mobile game asset quality.
No text, no logo, no watermark, no UI elements, no border or frame.

Pure side view (direct profile, NOT three-quarter angle).
Facing RIGHT. Full body including all fins and tail inside the frame.
Minimal empty padding — the creature fills the canvas edge to edge horizontally.
Transparent background (PNG with alpha). Single subject, centered.
```

### 받고 나서 확인할 4가지

① 투명 배경인가 ② **오른쪽**을 보는가 ③ **정측면**인가 (비스듬하면 안 됨) ④ 지느러미·꼬리가 안 잘렸나

> **예외**: `mine`(기뢰) `kingcrab`(왕게)은 방향 없이 **똑바로 선 모습**. `yellowray`(노랑가오리)는 **위에서 본 모습**.

### 신경 쓰지 않아도 되는 것

- 해상도·여백·용량은 받아서 자동 처리한다. **1536×1024** 정도로 뽑으면 된다
- 첨부로 보내도 투명도가 보존된다 (32장 전부 확인됨)
- 배경은 좌우가 안 이어져도 된다 (거울 타일링)
- 파일 이름은 신경 쓰지 말고 **"톱상어 0단계"처럼 무엇인지만** 적어 보내면 된다

---

## ~~🔴 1순위 — 해금 상어 12장~~ ✅ 적용 완료 (2026-10-14)

`assets/shark/<id>_<0~3>.png` · 투명 필수 · 오른쪽 정측면

**리프 샤크와 같은 세계관의 캐릭터**로 보여야 한다 → **리프 샤크 4장(`reef_0~3.png`)을 레퍼런스로 같이 넣으면 톤이 맞는다.**
단계마다 단순 확대가 아니라 **실루엣이 달라지게**. 0=치어 / 1=유어 / 2=기본 / 3=성체.

한 상어의 4장은 **한 대화에서 연달아** 뽑는 게 좋다 (색·얼굴이 일관된다).

### 1-A. 톱상어 `saw_0 ~ saw_3` — 가장 먼저

첫 번째로 부화하는 상어이고, 산호 정원에 가려면 꼭 필요하다. 껍질을 부스트 없이 부순다.
**톱날 주둥이가 핵심 실루엣.**

```
saw_0 (치어):
A baby sawshark. Small chubby body, olive-green back with a cream belly,
oversized friendly eyes. A short stubby flat saw-snout with tiny soft teeth
along both edges — cute rather than dangerous. Small rounded fins.

saw_1 (유어):
A juvenile sawshark. Longer flatter body, olive-green with a pale belly,
the saw-snout now clearly elongated with visible rows of small teeth
along both edges. Two short barbels hanging under the saw. Alert eyes.

saw_2 (기본):
An adult sawshark. Long flattened heavy body, olive and bronze-green with a
cream belly, a long formidable saw-snout about a third of its body length
lined with sharp alternating teeth, two barbels, broad pectoral fins,
low dorsal fins. Built like a bulldozer — sturdy and powerful.

saw_3 (성체):
An apex sawshark, final evolution. Massive armored body, deep bronze-green
with scarred plating along the back, an enormous battle-worn saw-snout with
jagged chipped teeth, glowing amber highlights along the saw edge,
heavy muscular build. Looks like it can cut through anything.
```

### 1-B. 귀상어 `hammerhead_0 ~ hammerhead_3`

두 번째 부화. 흡입 반경 1.8배, 어두운 바다에서 더 멀리 본다. **T자 머리가 핵심 실루엣.**

> 난파선 해구 물고기 중 `hammer`(적 귀상어)와 **헷갈리지 않게** — 플레이어 귀상어는 파란 회색 + 밝은 표정,
> 적 귀상어는 갈색 회색 + 사나운 표정.

```
hammerhead_0 (치어):
A baby hammerhead shark. Small round body with an adorably oversized
T-shaped hammer head, one big friendly eye at each end of the hammer,
soft grey-blue back with a white belly, tiny fins. Charming and a bit goofy.

hammerhead_1 (유어):
A juvenile hammerhead. Body lengthening and slimming, the hammer head now
wider and flatter with clearly separated eye stalks, grey-blue back,
white belly, dorsal fin growing tall and pointed. Curious alert expression.

hammerhead_2 (기본):
An adult hammerhead shark. Sleek muscular body, a wide flattened T-shaped
cephalofoil head with an eye at each far tip, slate grey-blue back with a sharp
white belly line, very tall curved dorsal fin, crescent tail.
Focused and intelligent looking.

hammerhead_3 (성체):
An apex hammerhead, final evolution. Enormous wide cephalofoil head,
heavily muscled body, deep slate blue-grey with faint luminous violet sensory
lines tracing the head and flanks that glow softly, scars along the hammer
edges, towering dorsal fin. Looks like it can sense everything in the ocean.
```

### 1-C. 청상아리 `mako_0 ~ mako_3`

세 번째 부화. 가장 빠르고 가장 약하다. 다음 해역(빙하)의 열쇠가 될 상어. **날렵함이 핵심 실루엣.**

```
mako_0 (치어):
A baby mako shark. Small slim body already streamlined like a dart,
vivid cobalt blue back with a bright white belly, large eager eyes,
a sharply pointed snout, small crescent tail. Eager and twitchy.

mako_1 (유어):
A juvenile mako. Noticeably longer and leaner, deep cobalt blue back
with a crisp white belly, very pointed conical snout, tail developing
into a stiff crescent, small sharp teeth showing. Looks impatient to move.

mako_2 (기본):
An adult shortfin mako shark. Extremely streamlined torpedo body built
purely for speed, brilliant metallic cobalt blue back with a sharp
white belly line, long pointed snout, stiff narrow crescent tail,
small tight fins. The fastest shark in the ocean.

mako_3 (성체):
An apex mako, final evolution. Razor-sleek elongated body, electric
cobalt blue with glowing cyan speed-lines streaking along the flanks and
fin edges, faint motion-blur energy trailing from the tail, piercing eye,
narrow swept-back fins. Looks like it is already moving.
```

---

## ~~🟠 2순위 — 난파선 해구 물고기 9장~~ ✅ 적용 완료 (2026-10-14, 격자 한 장으로)

`assets/fish/<id>.png` · 투명 필수 · 오른쪽 정측면

이 해역은 **어둡다.** 모든 프롬프트 끝에 이 줄을 붙이면 어둠 속에서도 실루엣이 읽힌다:

```
Slightly higher value contrast and a subtle light rim so the silhouette
stays readable against a very dark background.
```

위에서부터 순서대로 — **새 장치의 주인공 → 위험한 포식자 → 먹이** 순이다.

| 순서 | id | 이름 | 티어 | 왜 | 프롬프트 |
|---|---|---|---|---|---|
| 1 | `mine` | 기뢰 | 위험 | 터지는 장치의 주인공 | `A naval sea mine. Rusted dark steel sphere covered in protruding horn-shaped detonator spikes pointing in all directions, barnacles and rust streaks on the surface, a single small red warning light glowing on the side, a short length of broken chain hanging below. NOT facing a direction — draw it as a symmetrical spiked sphere.` |
| 2 | `angler` | 아귀 | 4 | 어둠 속 불빛 장치의 주인공 | `An anglerfish. Enormous bulbous head with a huge gaping mouth full of long needle teeth, tiny tapering body and tail behind it, warty dark brown-grey skin, small cruel eye, and a long curved stalk rising from the forehead with a glowing yellow-green bioluminescent lure at the tip. The lure should sit in FRONT of and ABOVE the head. Deep-sea menace, cartoon-stylized.` |
| 3 | `hammer` | 귀상어 (적) | 6 | 쫓아오는 포식자 | `A wild hammerhead shark, predator version. Distinctive wide flattened T-shaped head with an eye at each far end, slender brownish-grey body, tall curved dorsal fin, crescent tail, fierce narrowed eyes. Unmistakable silhouette from the side. Predatory but cartoon-stylized.` |
| 4 | `blueshark` | 청새리상어 | 6 | 쫓아오는 포식자 | `A blue shark. Very slender elegant body, deep indigo blue back fading sharply to a white belly, unusually long scythe-like pectoral fins, long pointed conical snout, large dark eye, slim crescent tail. Graceful ocean predator.` |
| 5 | `swordfish` | 황새치 | 5 | 돌진해오는 적 | `A swordfish. Long sleek body, dark purple-blue back with a silvery belly, a very long flat sword-like bill extending forward from the snout, tall rigid sickle-shaped dorsal fin, crescent tail. Sleek and aggressive. The sword points RIGHT.` |
| 6 | `tuna` | 참치 | 5 | 빠른 먹이 | `A bluefin tuna. Powerful muscular torpedo body built for speed, deep metallic blue back fading to silver sides and a white belly, small bright yellow finlets running along the top and bottom toward the tail, stiff crescent tail, pointed snout. Looks fast.` |
| 7 | `conger` | 붕장어 | 4 | 먹이 | `A conger eel. Very long thick snake-like body in a gentle S curve, smooth grey-brown skin with a pale belly, continuous fin ridge running along the back, blunt rounded head with a wide mouth and small sharp teeth. Head RIGHT, body coiling LEFT.` |
| 8 | `yellowray` | 노랑가오리 | 3 | 먹이 | `A yellow stingray seen from ABOVE (top-down view). Wide flat disc-shaped body with rounded wing edges, golden yellow with darker brown mottled blotches, two eyes on top of the head, long thin whip tail trailing behind with a barb. This one is top-down, not side view. Head RIGHT, tail trailing LEFT.` |
| 9 | `sardine` | 정어리 | 3 | 떼로 나오는 먹이 | `A sardine. Small slim streamlined body, bright metallic silver with a blue-green iridescent back and a row of faint dark spots along the flank, deeply forked tail, large round eye. Simple and clean — this one appears in large schools.` |

---

## 💡 격자 한 장으로 받기 — 물고기는 이 방법 추천

물고기는 게임에서 작게(긴 변 256px) 쓰므로 **1536×1024 한 장에 3×3 = 9마리**를 받아도 충분하다.
난파선 9종을 이렇게 받아 잘라 썼다. 배경·보스·상어(크게 보이는 것)는 한 장씩 받는 게 낫다.

공통 스타일 대신 아래 틀을 쓰고, `Row 1~3` 에 생물 설명만 바꿔 넣는다:

```
A sprite sheet of 9 different sea creatures for a 2D mobile game,
arranged in a neat 3×3 grid (3 columns, 3 rows) on ONE image, 1536×1024.

Style: high-quality 2D game art, vibrant stylized cartoon realism,
clean readable silhouettes, soft cel shading with clear highlights and rim light.
Friendly and appealing to an 8-year-old but not babyish.
Transparent background (PNG with alpha). No text, no labels, no numbers,
no grid lines, no frames, no shadows on the ground.

VERY IMPORTANT layout rules:
- Each creature sits alone in the CENTER of its own cell.
- Wide empty transparent gaps between all creatures — nothing touches or overlaps.
- Every creature is complete: all fins, tails, spikes and lures fully inside its cell.
- All fish in pure side view (direct profile), all facing RIGHT.

Row 1 (left to right):
1. ...
2. ...
3. ...
Row 2:
4. ... 5. ... 6. ...
Row 3:
7. ... 8. ... 9. ...
```

받고 나서 확인: ① 투명 배경 ② 9마리가 서로 떨어져 있는지. **순서(1~9)대로 어떤 생물인지 알아본다.**

---

> 해역 4~6 전체 기획과 열수구·왕좌·새 상어 프롬프트는 [`STAGE_PLAN_4_6.md`](STAGE_PLAN_4_6.md) 부록에 있다.
> 빙하 해역은 기획에서 **크릴(`krill`)이 추가**되어 격자 9칸이 꽉 찬다.

## 🟡 3순위 — 다음 해역 "빙하 해역" 세트 10장

> 생물 8종은 위 **격자 틀**에 넣어 한 장(3×3 중 8칸)으로 받아도 된다. 배경·보스는 한 장씩.

지도에 🧊 **빙하 해역 (준비 중)** 으로 이미 보이는 곳이다. 기획서 스테이지 4.
**아직 게임 데이터가 없다** — 그림이 먼저 있으면 해역을 만들 때 바로 넣는다.
id·티어는 잠정이다 (해역을 만들 때 바뀔 수 있다).

분위기: 창백한 청록 물 · 위에 떠 있는 얼음 천장 · 차갑고 맑다. 청상아리(기본 티어 4)로 가는 곳.

### 배경 `assets/stage/ice.jpg` · 2048×1152 · 투명 불필요

```
Seamlessly tileable horizontal underwater background: a cold polar sea
beneath an ice sheet. Pale teal and icy blue water, a ceiling of floating
ice floes along the TOP edge with bright light leaking through the cracks
in long soft beams, the submerged roots of icebergs as pale blue-white
shapes in the distance, a rocky seabed with dark kelp along the BOTTOM.
Distant parallax layer — soft focus, low contrast, no foreground detail.
The LEFT and RIGHT edges must match seamlessly for tiling.
No characters, no animals, no text.
```

### 생물 8종 · `assets/fish/<id>.png` · 투명 필수 · 오른쪽 정측면

| 순서 | id | 이름 | 티어 | 역할 | 프롬프트 |
|---|---|---|---|---|---|
| 1 | `herring` | 청어 | 4 | 떼 먹이 | `A herring. Slim silver fish with a blue-green back and a bright reflective silver belly, forked tail, big round eye. Simple and clean — appears in large schools.` |
| 2 | `cod` | 대구 | 4 | 먹이 | `An Atlantic cod. Chunky body with a big head, speckled olive-brown and gold back fading to a pale belly, a pale lateral line, three rounded dorsal fins, a small chin barbel. Friendly and a bit grumpy.` |
| 3 | `salmon` | 연어 | 5 | 빠른 먹이 | `An Atlantic salmon. Strong streamlined body, silver sides with small black spots on the back, pinkish sheen along the flank, slightly hooked jaw, square tail. Looks like a strong swimmer.` |
| 4 | `kingcrab` | 왕게 | 5 | 껍질 (BOOST 로 깸) | `A red king crab. Wide spiky reddish-orange shell covered in short spines, long jointed spiky legs spread out, one bigger claw. Seen from the FRONT-SIDE, standing upright on the seabed. NOT facing a direction — draw it upright and roughly symmetrical.` |
| 5 | `penguin` | 펭귄 | 6 | 도망치는 먹이 | `An emperor penguin swimming underwater, seen in pure side view, body stretched horizontally like a torpedo, flippers swept back, black back and white belly, a soft yellow-orange patch on the neck, a trail of tiny bubbles. Cute and fast. Head RIGHT.` |
| 6 | `seal` | 바다표범 | 6 | 도망치는 먹이 | `A harbor seal swimming underwater, pure side view, plump torpedo body, spotted grey fur, big dark round eyes, whiskers, front flippers tucked and rear flippers trailing. Cute and nimble. Head RIGHT.` |
| 7 | `walrus` | 바다코끼리 | 7 | 쫓아오는 탱커 | `A walrus swimming underwater, pure side view, huge bulky wrinkled brown-pink body, two long white tusks pointing down, bristly mustache whiskers, small eyes, heavy flippers. Big and tough but cartoon-stylized. Head RIGHT.` |
| 8 | `leopardseal` | 레오파드바다표범 | 7 | 쫓아오는 포식자 | `A leopard seal swimming underwater, pure side view, long sleek serpentine body, silver-grey fur with dark leopard spots, a large reptile-like head with a wide toothy grin, long front flippers. Sneaky predator, cartoon-stylized. Head RIGHT.` |

### 보스 `assets/boss/orca_alpha.png` · 1536×768 · 투명 필수 · 오른쪽 정측면

```
An alpha orca boss. A massive killer whale in pure side view, glossy black
body with crisp white eye patch, white belly and grey saddle patch behind the
dorsal fin, an extremely tall scarred dorsal fin, a few battle scars along the
flank, a confident fierce expression with a row of white teeth. King of the
polar sea — intimidating but cartoon-stylized, not gory. Head RIGHT.
```

---

## 이미 끝난 것 (참고)

- 타이틀 배경 · 타이틀 상어 ✅
- 해역 배경 3곳 (햇살 연안 · 산호 정원 · 난파선 해구) ✅
- 보스 3체 ✅
- 햇살 연안 물고기 10종 · 산호 정원 물고기 10종 ✅
- 리프 샤크 4단계 ✅
- 톱상어 · 귀상어 · 청상아리 각 4단계 ✅
- 난파선 해구 물고기 9종 ✅

## 보낼 때

- **제가 답변을 끝낸 뒤에** 보내야 파일이 디스크에 남는다 (작업 중에 보내면 유실됨)
- 한 번에 4~5장. **"톱상어 0~3단계"처럼 무엇인지만** 적으면 파일 이름·크기·투명 처리는 내가 한다
