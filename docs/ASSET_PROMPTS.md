# 에셋 생성 프롬프트

생성형 이미지 AI에 바로 넣을 수 있는 프롬프트 모음.
파일 경로·크기·등록 방법은 [`ASSETS.md`](ASSETS.md) 참고.

**작업 순서는 아래 배치 순서대로.** 배치 1~2만 들어와도 게임 인상이 크게 달라진다.

---

## 0. 공통 스타일 (모든 프롬프트 앞에 붙일 것)

```
Style: high-quality 2D game art, vibrant stylized cartoon realism,
clean readable silhouette, soft cel shading with clear highlights and rim light,
rich saturated ocean palette (deep navy #062D49, ocean blue #087DB5,
aqua #14B8D4, light aqua #A7E7F9), warm accents (orange #FF8A24, gold #FFD34F).
Friendly and appealing to an 8-year-old but not babyish. Mobile game asset quality.
No text, no logo, no watermark, no UI elements, no border or frame.
```

### 생물 공통 (물고기·상어 전부)

```
Pure side view (direct profile, NOT three-quarter angle).
Facing RIGHT. Full body including all fins and tail inside the frame.
Minimal empty padding — the creature fills the canvas edge to edge horizontally.
Transparent background (PNG with alpha). Single subject, centered.
```

> **이 네 가지를 AI가 가장 자주 틀립니다.** 결과물 받으면 꼭 확인하세요:
> ① 투명 배경인가 ② 오른쪽을 보는가 ③ 정측면인가(비스듬하지 않은가) ④ 지느러미가 잘리지 않았는가

---

## 배치 1 — 타이틀 배경 (1장)

`assets/title/background.png` · **1920×1080** · JPG/PNG · 투명 불필요

```
Underwater coral reef scene for a game title screen background.
Sunlit shallow tropical ocean, god rays streaming down from the surface,
colorful coral formations and sea anemones along the bottom edges,
ancient sunken stone ruins silhouetted in the blue distance,
small schools of tiny fish far away, drifting bubbles, soft depth haze.

IMPORTANT: the CENTER 50% of the image must stay visually calm and uncluttered —
open mid-water with just gradient and light rays. Title text, the hero shark and
buttons will be composited on top of that area. Put all detail
(coral, ruins, fish) along the LEFT, RIGHT and BOTTOM edges only.

No characters, no large fish, no shark, no text, no logo, no buttons.
Horizontal composition, 16:9.
```

---

## 배치 2 — 주인공 상어 4단계 (4장) ★ 가장 중요

리프 샤크 한 마리의 **성장 4단계**. 같은 캐릭터인 것이 알아보여야 하되,
단순 확대가 아니라 **단계마다 실루엣이 달라져야** 한다.

공통: `assets/shark/` · **1024×683** · PNG 투명 필수 · 오른쪽 보는 정측면

| 파일 | 단계 |
|---|---|
| `reef_0.png` | 치어 |
| `reef_1.png` | 유어 |
| `reef_2.png` | 기본 |
| `reef_3.png` | 성체 |

**`reef_0.png` — 치어**
```
A baby reef shark character. Small, round, chubby body with a short blunt snout.
Oversized friendly eyes with bright highlights. Tiny dorsal fin and small
rounded tail. Smooth blue-grey back (#52788f) fading to a pale cream belly.
Mouth closed in a small confident smile, no visible teeth. Cute and harmless
looking, like a plucky little hero at the start of an adventure.
```

**`reef_1.png` — 유어**
```
A juvenile reef shark character. Body noticeably longer and more streamlined
than a hatchling, snout starting to taper to a point. Eyes still large but
more alert. Dorsal fin clearly grown and pointed, tail developing a
crescent shape. Blue-grey back (#52788f) with a white belly and a faint
lighter stripe along the flank. A few small teeth just visible.
Growing confidence, still friendly.
```

**`reef_2.png` — 기본**
```
An adult reef shark character. Sleek powerful torpedo body, sharply pointed
snout, muscular tail with a full crescent shape. Tall pointed dorsal fin and
long pectoral fins. Strong blue-grey back (#52788f) with crisp white belly
separation and visible gill slits. Determined confident eye. Row of white
teeth visible in a slightly open mouth. Looks fast and capable — a real predator,
still heroic rather than scary.
```

**`reef_3.png` — 성체**
```
An apex reef shark character, the final evolution. Massive and imposing,
heavily muscled body with a broad chest tapering to a powerful crescent tail.
Very tall dorsal fin, long scarred pectoral fins. Deep blue-grey back with
subtle luminous cyan markings along the spine and a faint glowing aura.
Battle-worn scars. Fierce intelligent eye with a bright highlight.
Full row of large white teeth. Looks like the king of the ocean —
powerful and majestic, heroic not evil.
```

---

## 배치 3 — 햇살 연안 물고기 10종

첫 번째 해역에 나오는 종. 여기부터 넣으면 초반 체감이 바뀐다.
공통: `assets/fish/<id>.png` · **512×342** · PNG 투명 필수 · 오른쪽 보는 정측면

| id | 이름 | 프롬프트 (공통 스타일 + 생물 공통 뒤에 붙일 것) |
|---|---|---|
| `anchovy` | 멸치 | `A tiny slender silver anchovy. Thin darting body, large eye, translucent fins, bright silver-white scales with a pale blue sheen along the back.` |
| `shrimp` | 새우 | `A small coral-orange shrimp. Curved segmented body, long thin antennae swept back, many small legs, translucent fan tail, large dark eye.` |
| `clown` | 흰동가리 | `A clownfish. Rounded compact body, vivid orange with three bold white vertical bands outlined in black, rounded fins, big friendly eye.` |
| `mackerel` | 고등어 | `A mackerel. Streamlined spindle body, metallic teal-green back with dark wavy tiger stripes, bright silver belly, deeply forked tail.` |
| `puffer` | 복어 | `A pufferfish inflated into a ball. Round spherical yellow body covered in short blunt spines, tiny flapping pectoral fins, small tail, big surprised eyes, small pouty mouth.` |
| `seabass` | 농어 | `A sea bass. Elongated sturdy body, olive-green back fading to pale silver belly, spiny dorsal fin, large mouth, alert eye.` |
| `crab` | 게 | `A red crab seen from the side. Wide rounded shell, two large raised claws, jointed walking legs, two stalked eyes on top. Facing right.` |
| `ray` | 가오리 | `A stingray seen from above (top-down view), wide flat diamond-shaped body with gracefully curved wings, long thin whip tail, purple-grey with pale spots, two small eyes on top. This one is top-down, not side view.` |
| `barra` | 바라쿠다 | `A barracuda. Long slender torpedo predator, silver-white with a steel sheen, pointed head, underbite jaw with visible needle teeth, forked tail, menacing eye.` |
| `jelly` | 해파리 | `A jellyfish. Translucent glowing pale-violet dome bell, long trailing frilly tentacles, soft inner glow, ethereal and delicate. Upright (not facing a direction).` |

> `ray` 는 위에서 본 모습, `jelly` 는 똑바로 선 모습으로 그립니다. 나머지는 전부 오른쪽 정측면.

---

## 배치 4 — 보스 3종

공통: `assets/boss/<id>.png` · **1536×768** · PNG 투명 필수 · 오른쪽 정측면

**`giant_barra.png` — 거대 바라쿠다**
```
A colossal barracuda boss monster. Enormous elongated silver-white body with a
steel-blue sheen, massive underbite jaw crowded with long needle teeth,
scarred flanks, torn fins, cold predatory yellow eye. Intimidating but
cartoon-stylized, not gory.
```

**`giant_moray.png` — 대왕 곰치**
```
A giant moray eel boss monster. Very long thick serpentine body in mottled
olive-green and yellow, curving in an S shape, continuous dorsal fin ridge
running down the spine, huge gaping mouth with rows of needle teeth,
small malevolent eyes. Cartoon-stylized menace.
```

**`rogue_white.png` — 무법자 백상아리**
```
A massive rogue great white shark boss monster. Heavy muscular body, slate-grey
back with a sharp white belly line, enormous jaws open showing triangular teeth,
torn dorsal fin, old harpoon scars across the flank, cold black eye.
Powerful and threatening, cartoon-stylized.
```

---

## 배치 5 — 해역 배경 2장 (나중)

`assets/stage/` · **2048×1152** · 투명 불필요 · **좌우 끝이 이어지면** 끊김 없이 반복됨

**`coral.png` — 산호 정원**
```
Seamlessly tileable horizontal underwater background: a vibrant coral garden
at medium depth. Emerald and teal water, towering coral pillars and sea fans in
pink, purple and orange along the bottom, swaying anemones, filtered sunlight
from above, drifting particles. Distant parallax layer — soft focus, low contrast,
no foreground detail. The LEFT and RIGHT edges must match seamlessly for tiling.
No characters, no text.
```

**`wreck.png` — 난파선 해구**
```
Seamlessly tileable horizontal underwater background: a dark deep-sea trench
with sunken shipwrecks. Murky blue-grey water fading to near black, broken
ship hulls and leaning masts in silhouette, scattered debris and rusted beams,
a few faint shafts of light from far above, heavy gloom and depth haze.
Distant parallax layer — very low contrast, dark, no foreground detail.
The LEFT and RIGHT edges must match seamlessly for tiling. No characters, no text.
```

> 햇살 연안(`shore.png`)은 배치 1 타이틀 배경을 재활용하거나 같은 톤으로 한 장 더 받으면 된다.

---

## 배치 6 — 나머지 물고기 19종 (나중)

산호 정원·난파선 해구 어종. id 목록과 규격은 [`ASSETS.md`](ASSETS.md) 3-4 절 참고.

`parrot` `butterfly` `wrasse` `lionfish` `striped` `squid` `moraykid` `reefpup` `clam` `urchin`
`sardine` `yellowray` `angler` `conger` `tuna` `swordfish` `hammer` `blueshark` `mine`

## 배치 7 — 나머지 상어 3종 × 4단계 (나중)

`saw`(톱상어) `hammerhead`(귀상어) `mako`(청상아리). 각 4단계.
해금 콘텐츠라 우선순위가 가장 낮다.

---

## 받은 뒤 확인할 것

| 항목 | 왜 |
|---|---|
| 투명 배경인가 | 흰/검 배경이 딸려오면 네모가 그대로 보인다 |
| 오른쪽을 보는가 | 왼쪽을 보면 게임에서 거꾸로 헤엄친다 |
| 정측면인가 | 비스듬한 각도는 옆으로 헤엄칠 때 어색하다 |
| 지느러미가 안 잘렸나 | 프레임에 꽉 차되 잘리면 안 된다 |
| 여백이 과하지 않나 | 여백이 많으면 게임에서 실제보다 작게 보인다 |
| 파일 300KB 이하인가 | 모바일 로딩·메모리 |

파일을 주시면 제가 `ART` 에 등록하고 실제 화면에서 크기·위치·방향을 맞춘 뒤
스크린샷으로 보여드리겠습니다.
