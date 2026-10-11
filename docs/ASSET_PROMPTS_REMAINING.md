# 남은 에셋 21장 — 생성 프롬프트

2026-10-11 기준. 적용 완료 32장, 남은 것 21장.
(배치 A·B 완료 — 산호 정원 전 어종에 그림이 들어갔다)
규격·등록 방법은 [`ASSETS.md`](ASSETS.md), 이미 만든 것들의 프롬프트는
[`ASSET_PROMPTS.md`](ASSET_PROMPTS.md).

**이 문서만 있으면 나머지를 전부 뽑을 수 있다.** 배치 순서대로 진행하면 된다.

| 배치 | 내용 | 장수 |
|---|---|---|
| ~~A~~ | ~~타이틀 상어~~ | ✅ 완료 |
| ~~B~~ | ~~산호 정원 물고기~~ | ✅ 완료 |
| C | 난파선 해구 물고기 | 9 |
| D | 해금 상어 3종 × 4단계 | 12 |

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

### 받고 나서 반드시 확인할 4가지

① 투명 배경인가 ② 오른쪽을 보는가 ③ 정측면인가 ④ 지느러미가 안 잘렸나

> **예외 3종**: `urchin`(성게) `clam`(대왕조개) `mine`(기뢰)은 게임에서 회전하지 않는다.
> 방향 없이 **똑바로 선 모습**으로 그릴 것. `yellowray`(노랑가오리)는 **위에서 본 모습**.

### 이미 통과한 조건 (신경 쓰지 않아도 됨)

- 첨부로 보내도 **투명도가 보존된다** (22장 전부 확인됨)
- 여백·해상도·용량은 **내가 받아서 자동 처리**한다. 1536×1024 정도로 뽑으면 된다
- 배경은 좌우가 안 이어져도 된다 (거울 타일링 적용됨)

---

## ~~배치 A — 타이틀 상어 (1장)~~ ✅ 적용 완료

`assets/title/shark.png` · 투명 필수 · **2026-10-11 적용됨**

타이틀 화면 중앙에 크게 들어가는 간판 상어. 지금은 게임용 리프 샤크를
그대로 쓰고 있어서 임팩트가 약하다.

```
The hero shark of the game, posed for a title screen.
A powerful adult reef shark in a dynamic three-quarter-forward swimming pose,
body angled toward the viewer, looking straight at the camera with a confident
determined expression and a slight grin showing white teeth.
Strong blue-grey back (#52788f) fading to a crisp white belly, tall dorsal fin,
long pectoral fins spread wide, crescent tail sweeping behind.
Dramatic rim lighting from above, faint caustic light patterns on the back,
a few bubbles trailing from the tail.
Heroic and appealing — the face of the game.

NOTE: this one may break the pure-side-view rule — a slight three-quarter
hero angle is wanted here. Still facing RIGHT-ish. Transparent background.
```

---

## ~~배치 B — 산호 정원 물고기 9종~~ ✅ 전부 적용 완료

공통: `assets/fish/<id>.png` · 1536×1024 권장 · 투명 필수 · 오른쪽 정측면

| id | 이름 | 티어 | 프롬프트 |
|---|---|---|---|
| ~~`parrot`~~ ✅ | ~~비늘돔~~ | 2 | `A parrotfish. Chunky oval body with a blunt rounded forehead and a distinctive beak-like fused mouth. Brilliant emerald green body with pink and turquoise scale edges, a pink stripe along the cheek, broad rounded fins. Cheerful expression.` |
| ~~`butterfly`~~ ✅ | ~~나비고기~~ | 2 | `A butterflyfish. Very tall, flat, disc-shaped body (almost as tall as it is long). Bright lemon yellow with bold black vertical stripes and a black band masking the eye. Small pointed snout, delicate trailing fins.` |
| ~~`wrasse`~~ ✅ | ~~청줄놀래기~~ | 2 | `A cleaner wrasse. Slender elongated torpedo body. Electric blue upper half fading to pale cream below, with one sharp black horizontal stripe running nose to tail. Small pointed head, bright yellow accents on the fins.` |
| ~~`lionfish`~~ ✅ | ~~쏠배감펭~~ | 3 | `A lionfish. Oval body covered in bold red-orange and white vertical stripes, surrounded by a dramatic fan of long feathery venomous spines radiating from the dorsal and pectoral fins. Spiky and dangerous looking but cartoon-stylized.` |
| ~~`striped`~~ ✅ | ~~돌돔~~ | 3 | `A striped knifejaw fish. Deep oval compressed body, silvery white with seven bold black vertical bands from top to bottom, small powerful beak-like mouth, stiff spiny dorsal fin. Sturdy and alert.` |
| ~~`squid`~~ ✅ | ~~오징어~~ | 4 | `A squid. Long torpedo-shaped mantle with two triangular fins at the rear tip, large expressive eye, and a bundle of eight trailing tentacles plus two longer feeding arms streaming behind. Translucent pink and coral iridescent skin. Mantle pointing RIGHT, tentacles trailing LEFT.` |
| ~~`moraykid`~~ ✅ | ~~곰치 치어~~ | 4 | `A young moray eel. Long slender serpentine body in a gentle S curve, olive green and yellow mottled skin, continuous fin ridge along the spine, small head with a slightly open mouth showing tiny teeth, beady eye. Juvenile — less bulky than an adult moray. Head RIGHT, tail curving LEFT.` |
| ~~`clam`~~ ✅ | ~~대왕조개~~ | 5 | `A giant clam, slightly open. Two thick ribbed fan-shaped shells in pale lavender and cream, revealing a vivid iridescent purple-blue mantle inside with wavy frilled edges. Resting upright on its base. NOT facing a direction — draw it upright and symmetrical.` |
| ~~`urchin`~~ ✅ | ~~성게~~ | 위험 | `A sea urchin. Dark purple spherical body completely covered in long sharp radiating black-purple spines pointing in every direction. Menacing and prickly. NOT facing a direction — draw it as a symmetrical ball of spines.` |

---

## 배치 C — 난파선 해구 물고기 9종

공통: `assets/fish/<id>.png` · 1536×1024 권장 · 투명 필수 · 오른쪽 정측면

이 해역은 **어둡다.** 게임에서 시야가 제한되므로, 어두운 배경에서도 실루엣이
읽히도록 **명도 대비를 조금 높게** 잡아 달라고 요청하면 좋다.

| id | 이름 | 티어 | 프롬프트 |
|---|---|---|---|
| `sardine` | 정어리 | 3 | `A sardine. Small slim streamlined body, bright metallic silver with a blue-green iridescent back and a row of faint dark spots along the flank, deeply forked tail, large round eye. Simple and clean — this one appears in large schools.` |
| `yellowray` | 노랑가오리 | 3 | `A yellow stingray seen from ABOVE (top-down view). Wide flat disc-shaped body with rounded wing edges, golden yellow with darker brown mottled blotches, two eyes on top of the head, long thin whip tail trailing behind with a barb. This one is top-down, not side view. Head RIGHT, tail trailing LEFT.` |
| `angler` | 아귀 | 4 | `An anglerfish. Enormous bulbous head with a huge gaping mouth full of long needle teeth, tiny tapering body and tail behind it, warty dark brown-grey skin, small cruel eye, and a long curved stalk rising from the forehead with a glowing yellow-green bioluminescent lure at the tip. Deep-sea menace, cartoon-stylized.` |
| `conger` | 붕장어 | 4 | `A conger eel. Very long thick snake-like body in a gentle S curve, smooth grey-brown skin with a pale belly, continuous fin ridge running along the back, blunt rounded head with a wide mouth and small sharp teeth. Head RIGHT, body coiling LEFT.` |
| `tuna` | 참치 | 5 | `A bluefin tuna. Powerful muscular torpedo body built for speed, deep metallic blue back fading to silver sides and a white belly, small bright yellow finlets running along the top and bottom toward the tail, stiff crescent tail, pointed snout. Looks fast.` |
| `swordfish` | 황새치 | 5 | `A swordfish. Long sleek body, dark purple-blue back with a silvery belly, a very long flat sword-like bill extending forward from the snout, tall rigid sickle-shaped dorsal fin, crescent tail. Sleek and aggressive. The sword points RIGHT.` |
| `hammer` | 귀상어 | 6 | `A hammerhead shark. Distinctive wide flattened T-shaped head with an eye at each far end, slender grey-brown body, tall curved dorsal fin, crescent tail. Unmistakable silhouette from the side. Predatory but cartoon-stylized.` |
| `blueshark` | 청새리상어 | 6 | `A blue shark. Very slender elegant body, deep indigo blue back fading sharply to a white belly, unusually long scythe-like pectoral fins, long pointed conical snout, large dark eye, slim crescent tail. Graceful ocean predator.` |
| `mine` | 기뢰 | 위험 | `A naval sea mine. Rusted dark steel sphere covered in protruding horn-shaped detonator spikes pointing in all directions, barnacles and rust streaks on the surface, a single small red warning light glowing on the side, a short length of broken chain hanging below. NOT facing a direction — draw it as a symmetrical spiked sphere.` |

---

## 배치 D — 해금 상어 3종 × 4단계 (12장)

공통: `assets/shark/<id>_<0~3>.png` · 1536×1024 권장 · 투명 필수 · 오른쪽 정측면

리프 샤크와 **같은 세계관의 캐릭터**로 보여야 한다. 단계마다 단순 확대가 아니라
실루엣이 달라지게. 0=치어 / 1=유어 / 2=기본 / 3=성체.

> 리프 샤크 4장을 레퍼런스로 함께 넣으면 톤이 맞는다.

### D-1. 톱상어 `saw_0 ~ saw_3` — 파괴형, 기본 티어 3

껍질을 부스트 없이 부순다. 체력이 높고 조금 느리다. **톱날 주둥이가 핵심 실루엣.**

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

### D-2. 귀상어 `hammerhead_0 ~ hammerhead_3` — 감각형, 기본 티어 3

흡입 반경 1.8배, 어두운 해역 시야 1.35배. **T자 머리가 핵심 실루엣.**

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
cephalofoil head with an eye at each far tip, slate grey back with a sharp
white belly line, very tall curved dorsal fin, crescent tail.
Focused and intelligent looking.

hammerhead_3 (성체):
An apex hammerhead, final evolution. Enormous wide cephalofoil head,
heavily muscled body, deep slate grey with faint luminous violet sensory
lines tracing the head and flanks that glow softly, scars along the hammer
edges, towering dorsal fin. Looks like it can sense everything in the ocean.
```

### D-3. 청상아리 `mako_0 ~ mako_3` — 속도형, 기본 티어 4

가장 빠르고 가장 약하다. **날렵함이 핵심 실루엣.**

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

## 작업 순서 추천

| 순서 | 배치 | 이유 |
|---|---|---|
| 1 | **D (상어 12장)** | 해금 보상이 그림으로 바뀌면 메타 성장의 보람이 커진다 |
| ~~2~~ | ~~**B (산호 정원 9종)**~~ | ✅ 2026-10-11 적용 완료 |
| 3 | **C (난파선 해구 9종)** | 3해역 완성 |
| ~~4~~ | ~~**A (타이틀 상어)**~~ | ✅ 2026-10-11 적용 완료 |

한 번에 5장씩 보내주시면 됩니다. **제가 답변을 끝낸 뒤에** 보내셔야
파일이 디스크에 남습니다 (작업 중에 보내면 유실됨).

보내실 때 **어떤 파일인지만** 적어주시면 됩니다. 파일명은 제가 맞춥니다.
