# 바다 지도 나머지 — 해역 4~6 기획

> 2026-10-14. 지도에 "준비 중"으로 보이는 세 곳을 지금 게임 구조(STAGES · HAZARDS · 보스 굴 ·
> 도감 · 업적)에 그대로 얹을 수 있게 설계했다. **아직 코드는 안 바꿨다.**

---

## 0. 한눈에

```
☀️ 햇살 연안 ─▶ 🪸 산호 정원 ─▶ ⚓ 난파선 해구 ─▶ 🧊 빙하 해역 ─▶ 🌋 심해 열수구 ─▶ 👑 왕좌의 해구 ─▶ ♾️ 끝없는 바다
 리프 샤크(2)    톱상어(3)       톱·귀상어(3)     청상아리(4)      백상아리(5)        범고래(6)          메갈로돈(7)
```

| # | 해역 | 필요 기본 티어 | 들어가는 상어 | 보스 | 클리어 보상(알) | 새 규칙 한 줄 |
|---|---|---|---|---|---|---|
| 4 | 🧊 빙하 해역 | 4 | 청상아리 | 범고래 알파 | **백상아리** | 얼음 천장 · 고드름 · 차가운 물 |
| 5 | 🌋 심해 열수구 | 5 | 백상아리 | 크라켄 | **범고래** | 깜깜함 · 빛을 먹으면 밝아진다 · 뜨거운 물기둥 |
| 6 | 👑 왕좌의 해구 | 6 | 범고래 | 메갈로돈 | **메갈로돈** + 엔딩 | 왕관 조각 3개를 모아야 왕좌 문이 열린다 |
| ♾️ | 끝없는 바다 | — | 아무 상어 | 계속 | 기록 | 클리어 후 열림. 얼마나 오래 버티나 |

**사슬이 한 줄로 이어진다** — 지금 쓸 데 없는 청상아리(기본 티어 4)가 빙하 해역의 열쇠가 되고,
해역을 깰 때마다 다음 해역에 들어갈 상어가 나온다. 지금 1~3해역의 구조와 똑같다.

### 지금 수치에서 이어 붙인 값

| | 1 연안 | 2 산호 | 3 난파선 | **4 빙하** | **5 열수구** | **6 왕좌** |
|---|---|---|---|---|---|---|
| 맵 크기 | 3200×1700 | 3400×1800 | 3600×2000 | **3600×1900** | **3800×2100** | **4000×2200** |
| 포만감 배수 | 1.0 | 1.1 | 1.2 | **1.3** | **1.4** | **1.5** |
| 물고기 티어 | 1~5 | 2~5 | 3~6 | **3~7** | **4~8** | **5~9** |
| 보스 체력 | 500 | 700 | 950 | **1300** | **1700** | **2400** |
| 보스 접촉 피해 | 11 | 13 | 15 | **17** | **19** | **22** |

규칙은 지금과 같다: 해역의 가장 낮은 먹이 = 들어가는 상어의 기본 티어 − 1 (바로 먹을 게 있게),
가장 위험한 것 = 기본 티어 + 3.

---

## 1. 🧊 빙하 해역 (4)

> **"차갑고 맑다. 위는 얼음, 머리를 조심해라"**

| 항목 | 값 |
|---|---|
| 수심 | 0 ~ 150m |
| 물색 | `#7fc4dc → #1f5f7e` (창백한 청록), 깊으면 `#0e3448 → #04121c` |
| 조명 | 얼음 틈으로 내리는 굵은 빛줄기 (`shafts` 를 더 밝고 차갑게) |
| 지형 | 위: 얼음 천장 + 고드름 / 아래: 바위 + 검은 다시마 |
| 부유물 | 하얀 얼음 가루 |
| BGM | A단조 120 BPM — 맑고 반짝이는 고음 리드, 느린 베이스 |

### 어종 10종

| id | 이름 | 티어 | 행동 | 특징 | 그림 |
|---|---|---|---|---|---|
| `krill` | 크릴 떼 | 3 | 떼 | 들어가자마자 먹을 간식. 콤보 쌓기 좋음 | 새로 |
| `herring` | 청어 | 4 | 떼 | 은빛 큰 떼 | 새로 |
| `cod` | 대구 | 4 | 표류 | 느리고 통통 | 새로 |
| `salmon` | 연어 | 5 | 도망 | 빠름. BOOST 로 쫓기 | 새로 |
| `kingcrab` | 왕게 | 5 | 바닥 · 껍질 | BOOST 로 깬다 (톱상어는 그냥) | 새로 |
| `penguin` | 펭귄 | 6 | 도망 | **지그재그로 피한다** (새 행동 `zigzag`) | 새로 |
| `seal` | 바다표범 | 6 | 도망 | 가까이 가면 위로 휙 솟구친다 | 새로 |
| `walrus` | 바다코끼리 | 7 | 추격 | 느리지만 체력 2배 — 탱커 | 새로 |
| `leopardseal` | 레오파드바다표범 | 7 | 추격 | 빠른 포식자 | 새로 |
| `icejelly` | 사자갈기해파리 | 위험 | 떠다님 · 감전 | 기존 해파리 그림을 **하늘색으로 물들여** 재사용 (`tintOf`) | 재사용 |

### 고유 장치 2개

| 키 | 이름 | 동작 | 아이에게 가르치는 것 |
|---|---|---|---|
| `icicle` | 🧊 고드름 | 얼음 천장 밑을 지나가면 고드름이 **흔들리다(1초 예고)** 떨어진다. 맞으면 피해 + 1초 느려짐. 바닥에 떨어진 고드름에 맞은 물고기는 기절 | 예고를 보고 피하기 |
| `cold` | ❄️ 차가운 물 | 맵 곳곳의 세로 띠(푸르게 얼어붙은 물). 안에 있으면 **포만감 2배로 빨리 닳고** 조금 느려진다. 화면 가장자리에 서리가 낀다 | 위험한 곳을 피해 돌아가기 |

**얼음 천장**: 이 해역은 수면 대신 얼음이라 위로 끝까지 못 올라간다 (위쪽 140px 막힘).

### 보스 — 범고래 알파 🐋 "북극의 폭군"

| 항목 | 값 |
|---|---|
| 티어 / 체력 / 접촉 | 9 / 1300 / 17 |
| 크기 | len 210 |
| 소환 | 청어 · 크릴 |

| 패턴 | 페이즈 | 동작 | 피하는 법 → 보상 |
|---|---|---|---|
| 돌진 | 1~3 | 기존과 같음 | 옆으로 → 경직 1.7초 |
| **얼음 깨고 내리꽂기** (`breach`) | 2~3 | 위로 사라졌다가 플레이어 위치에 **빨간 세로 기둥 예고(1.2초)** → 얼음을 깨고 수직으로 내리꽂힌다 | 옆으로 비키기 → **바닥에 박혀 경직 2.5초** (가장 큰 반격 기회) |
| **음파** (`sonar`) | 3 | 보스에서 퍼지는 고리 3개. 맞으면 1.5초 느려짐 | 고리 사이 틈으로 빠지거나 BOOST |
| 소환 | 2~3 | 청어·크릴 떼 — 먹어서 회복 | |

**클리어 보상**: 상어알 → **백상아리** (기본 티어 5)

---

## 2. 🌋 심해 열수구 (5)

> **"빛이 없는 바다. 빛나는 걸 먹으면 내가 빛난다"**

| 항목 | 값 |
|---|---|
| 수심 | 1000 ~ 4000m |
| 물색 | `#2a1414 → #0a0404` (검붉은 어둠) |
| 조명 | **암흑** — 난파선보다 더 좁은 시야. 대신 빛나는 생물·열수구 주변만 밝다 (새 조명 `glow`) |
| 지형 | 바닥의 검은 굴뚝(열수구) · 관벌레 군락 · 붉게 갈라진 바위 |
| 부유물 | 주황 불티 + 파란 발광 점 |
| BGM | C단조 100 BPM — 낮게 웅웅거리는 베이스, 느린 심장박동 드럼 |

### 어종 10종

| id | 이름 | 티어 | 행동 | 특징 |
|---|---|---|---|---|
| `glowplankton` | 발광 플랑크톤 | 4 | 떼 | **먹으면 10초 동안 내 빛 반경이 커진다** — 이 해역의 핵심 |
| `deepshrimp` | 심해새우 | 5 | 표류 | 파랗게 빛난다 |
| `hatchet` | 도끼고기 | 5 | 떼 | 은빛 납작한 떼 |
| `tubeworm` | 관벌레 | 5 | 바닥 · 껍질 | 열수구 옆에 산다. BOOST 로 깬다 |
| `vampsquid` | 흡혈오징어 | 6 | 표류 | **먹물** (산호 정원 장치 재사용) |
| `gulper` | 풍선장어 | 6 | 추격 | 입이 몸보다 크다 |
| `manta` | 심해 만타 | 7 | 표류 | 크고 느리게 활공. 큰 먹이 |
| `greenland` | 그린란드상어 | 7 | 추격 | 느리지만 끈질기다 |
| `oarfish` | 산갈치 | 8 | 표류 | 아주 길고 희귀. 먹으면 대박 |
| `siphon` | 관해파리 | 위험 | 떠다님 · 감전 | 기존 해파리를 **보라색으로 물들여** 재사용 |

### 고유 장치 2개

| 키 | 이름 | 동작 |
|---|---|---|
| `vent` | 🌋 열수 분출 | 바닥 굴뚝이 주기적으로 뜨거운 물기둥을 뿜는다. **1.5초 전 거품이 보글보글** (예고). 맞으면 피해 + 위로 튕겨 오름. 보스가 맞아도 피해 |
| `glow` | ✨ 빛 먹기 | 시야는 아주 좁다(반경 170). 발광 생물을 먹으면 10초 동안 반경 +120. 빛나는 생물은 어둠 위에 그려져 멀리서도 보인다 (아귀 불빛 장치 확장) |

### 보스 — 크라켄 🦑 "심연의 주인"

**지금 보스들과 다른 싸움** — 본체는 굴 안에 거의 가만히 있고, **촉수 4개**와 싸운다.

| 항목 | 값 |
|---|---|
| 티어 / 체력 / 접촉 | 10 / 1700 (본체) + 촉수 4개 × 200 |
| 소환 | 발광 플랑크톤 · 심해새우 |

| 패턴 | 동작 | 대처 |
|---|---|---|
| **촉수 휘두르기** | 촉수가 예고선(호)을 그린 뒤 크게 쓸어간다 | 범위 밖으로 |
| **촉수 붙잡기** | 촉수가 플레이어를 감싸 붙잡는다 — **그물 장치의 BOOST 연타 탈출을 그대로 재사용** | BOOST 연타 |
| **먹물 폭발** | 화면 전체가 어두워진다 (먹물 장치 재사용) | 발광 플랑크톤을 먹어 빛으로 버틴다 |
| 소환 | 빛나는 먹이 — 시야와 체력 회복 | |

- **촉수를 물어서 끊는다** (촉수마다 체력 200). 촉수가 2개 이상 끊기면 본체가 굴 밖으로 나와 **본체 경직 3초** → 본체를 물 수 있다
- 끊긴 촉수는 20초 뒤 다시 자란다 — 오래 끌면 처음부터
- **열수 분출이 촉수에 맞으면 촉수가 피해를 입는다** → 굴뚝 위로 유인하는 전략 (난파선 기뢰처럼)

**클리어 보상**: 상어알 → **범고래** (기본 티어 6)

---

## 3. 👑 왕좌의 해구 (6) — 마지막

> **"모든 바다의 강자가 모인 곳. 왕관 조각을 모아 왕좌의 문을 열어라"**

| 항목 | 값 |
|---|---|
| 수심 | ??? |
| 물색 | `#3a2a5e → #0e0820` (보라 어둠) + 금빛 유적 빛 |
| 조명 | 어둡지만 금빛 유적 기둥이 군데군데 빛난다 (새 조명 `royal`) |
| 지형 | 무너진 기둥 · 계단 · 금빛 문양 바닥 |
| BGM | D단조 → D장조 132 BPM — 웅장하게. 메갈로돈전은 전용 곡 |

### 어종 — **엘리트 변종**이 핵심 (그림 재사용)

지난 해역의 물고기가 **보랏빛 오라 + 작은 왕관**을 달고 강해져서 나온다.
티어는 이 해역에 맞게 다시 매기고(5~9), 체력 ×2, 전원 조금 더 공격적. 그림은 기존 스프라이트를 **보라색으로 물들여 재사용**(`tintOf`) — 새 그림이 거의 필요 없다.

| id | 이름 | 티어 | 원본 | 행동 |
|---|---|---|---|---|
| `e_mackerel` | 엘리트 고등어 | 5 | 고등어 | 떼 |
| `e_squid` | 엘리트 오징어 | 6 | 오징어 | 먹물 |
| `e_tuna` | 엘리트 참치 | 7 | 참치 | 도망 (아주 빠름) |
| `e_barra` | 엘리트 바라쿠다 | 7 | 바라쿠다 | 추격 |
| `e_hammer` | 엘리트 귀상어 | 8 | 귀상어(적) | 추격 |
| `e_leopard` | 엘리트 레오파드바다표범 | 9 | 레오파드 | 추격 |
| `seahorse` | 해마 기사 | 6 | **새로** | 도망 · 왕궁 경비 |
| `nautilus` | 앵무조개 | 6 | **새로** | 껍질 |
| `guardian` | 유적 수호어 | 8 | **새로** | 바닥 · 껍질 · 돌로 된 물고기 |
| `crownjelly` | 왕관해파리 | 위험 | 해파리 금색 물들임 | 감전 |

**황금 물고기 확률 2% → 6%** — 왕의 보물창고.

### 고유 장치 2개

| 키 | 이름 | 동작 |
|---|---|---|
| `crown` | 👑 왕관 조각 | **보스 굴 대신 쓰인다.** 진화 3단계가 되면 맵에 왕관 조각 3개가 나타나고 화살표가 가리킨다. 3개를 다 모으면 왕좌의 문이 열리고 메갈로돈이 나온다. 넓은 맵을 끝까지 탐험하게 만든다 |
| `whirl` | 🌀 소용돌이 | 맵에 고정된 소용돌이 3개. 가까이 가면 끌려간다 (보스 소용돌이 물리 재사용). BOOST 로 탈출. 물고기도 끌려가서 소용돌이 근처는 먹이가 많다 — 위험과 보상 |

### 최종 보스 — 메갈로돈 🦈 "바다의 왕"

| 항목 | 값 |
|---|---|
| 티어 / 체력 / 접촉 | 11 / 2400 / 22 |
| 크기 | len 260 (화면 폭의 2/3 — 세로 화면 규칙 예외, 최종 보스라서) |

| 페이즈 | 패턴 |
|---|---|
| 1 (100~66%) | 돌진 · **턱 물기**: 앞쪽에 커다란 턱 범위 예고 → 쾅 (옆으로 피하기) |
| 2 (66~33%) | + 소환 (엘리트 떼) · 소용돌이 |
| 3 (33~0%) | **분노** — 화면이 붉게 맥동하고 시야가 좁아진다. 돌진 2연속. 대신 경직이 길어진다 (2.2초) |

### 엔딩

메갈로돈을 쓰러뜨리면:
1. 슬로모션 → 화면이 금빛으로 → **"👑 바다의 왕"** 칭호 수여 연출
2. 지금까지의 기록 한 장: 먹은 물고기 수 · 도감 · 플레이 시간 · 쓰러뜨린 보스
3. 짧은 스태프 롤 (아이 이름을 넣을 자리 — 같이 만든 사람으로)
4. 상어알 → **메갈로돈** (기본 티어 7) + **끝없는 바다** 열림

---

## 4. ♾️ 끝없는 바다 (엔드게임)

- 왕좌 클리어 후 지도 맨 아래에 열린다
- 모든 해역의 물고기가 섞여 나오고, **1분마다 더 강한 물고기**가 늘어난다. 보스가 2분마다 번갈아 온다
- 목표는 **오래 버티기 + 많이 먹기**. 해역별 최고 기록처럼 "최장 생존 시간"을 남긴다
- 업적: "끝없는 바다 5분 / 10분", "보스 5마리 연속"

---

## 5. 새 상어 4종

| 상어 | 기본 티어 | 얻는 법 | 특성 | 능력 |
|---|---|---|---|---|
| 백상아리 | 5 | 빙하 해역 클리어 | 체력 1.15 · 속도 1.0 | **일격** — 동급 물기 피해 ×2 (동급 사냥이 빨라짐) |
| 범고래 | 6 | 열수구 클리어 | 체력 1.3 · 속도 0.95 | **음파** — BOOST 를 켤 때 주변 작은 물고기 1초 기절 |
| 메갈로돈 | 7 | 왕좌 클리어 | 체력 1.5 · 속도 0.9 | **군림** — 동급도 물지 않고 바로 먹는다 |
| (비밀) 고블린 상어 | 5 | 업적 20개 달성 | 체력 0.9 · 속도 1.0 | **턱 사출** — 흡입 반경이 앞쪽으로 길게 늘어난다 |

> 고블린 상어는 진행 사슬 밖의 **수집 보상**. 업적을 모으는 이유가 하나 더 생긴다.

---

## 6. 만드는 데 필요한 것

### 코드 (공통 먼저)

| 순서 | 작업 | 크기 | 비고 |
|---|---|---|---|
| A | **보스 패턴 데이터화** — 지금 `pickPattern` 의 고정 목록을 `BOSSES[id].patterns` 로. 패턴마다 상태 함수 | 반나절 | 4~6 보스 전부 이 위에 |
| B | **엘리트 변종** — `FISH` 에 `{ id:'e_barra', from:'barra', elite:true }` 만 쓰면 원본 그림을 물들이고 티어·체력 보정 | 2시간 | 왕좌 해역 그림이 거의 0장이 된다 |
| C | 새 조명 3종 `ice`(천장) · `glow`(빛 먹기) · `royal` | 반나절 | |
| D | 새 행동 `zigzag`(펭귄) · 위로 솟구치기(바다표범) | 2시간 | |
| 1 | **빙하 해역** — 데이터 + 고드름 + 차가운 물 + 범고래 알파 + 백상아리 | 하루 | 그림 11장 |
| 2 | **심해 열수구** — 열수 분출 + 빛 먹기 + 크라켄(촉수) + 범고래 | 하루 반 | 그림 11장. 촉수 보스가 가장 큰 작업 |
| 3 | **왕좌의 해구** — 왕관 조각 + 소용돌이 + 메갈로돈 + 엔딩 | 하루 반 | 그림 6장 |
| 4 | 끝없는 바다 + 고블린 상어 | 반나절 | |

**해역마다 따로 배포할 수 있다** — 1을 끝내면 빙하 해역만 먼저 열고, 나머지는 지도에 "준비 중"으로 남긴다.

### 그림 — 생성 횟수 약 13번 → ✅ 2026-10-14 전부 받아서 처리 완료

> 배경 3 · 보스 3 · 물고기 22 · 새 상어 16 = 44장이 `demo/assets/` 에 있다 (원본 컷은 `디자인에셋/빙하해역·열수구·왕좌·새상어·새해역_보스`).
> 해역을 만들 때 `ART` 에 등록만 하면 된다. 파일 이름 = 이 문서의 id (`shark/white_0~3` · `orca_*` · `megalodon_*` · `goblin_*`).
> 열수구 물고기는 원본에 옅은 빛 안개가 깔려 있어 알파 70 아래를 걷어냈다.

**3×3 격자 한 장 방식**(난파선에서 성공)을 쓰면 생성 횟수가 확 준다.

| 해역 | 받을 것 | 생성 횟수 |
|---|---|---|
| 🧊 빙하 | 물고기 9종 격자 1장 + 배경 1 + 범고래 알파 1 | 3 |
| 🌋 열수구 | 물고기 9종 격자 1장 + 배경 1 + 크라켄 1 | 3 |
| 👑 왕좌 | 새 생물 3종(+여유) 격자 1장 + 배경 1 + 메갈로돈 1 | 3 |
| 새 상어 | 상어마다 **4단계를 2×2 격자 한 장**에 (얼굴·색이 단계끼리 일관됨) × 4종 | 4 |

해파리 변종 3종과 엘리트 6종은 기존 그림을 물들여 쓰므로 **0장**.
프롬프트는 맨 아래 부록에 전부 적어 뒀다.

---

## 7. 같이 정할 것

1. **보스 이름** — 범고래 알파 "북극의 폭군" · 크라켄 "심연의 주인" · 메갈로돈 "바다의 왕". 아이가 짓게 해도 좋다
2. **범고래를 플레이어 상어로 줄지** — 범고래는 상어가 아니지만 아이들이 좋아한다. 아니면 그 자리에 "뱀상어"
3. **엔딩 스태프 롤에 아이 이름** 넣을지
4. **어디까지 먼저** — 추천: 공통(A~D) + 빙하 해역까지 한 번에 → 아이 반응 보고 다음
5. 끝없는 바다를 만들지

---

## 부록 — 그림 프롬프트

공통 스타일은 [`ASSET_PROMPTS_REMAINING.md`](ASSET_PROMPTS_REMAINING.md) 0절, 격자 틀은 "격자 한 장으로 받기" 절과 같다.

### 🧊 빙하 해역

**배경** `stage/ice.jpg` — `ASSET_PROMPTS_REMAINING.md` 3순위의 배경 프롬프트 그대로.

**물고기 격자 (3×3)** — 격자 틀의 Row 부분:
```
Row 1:
1. A swarm-unit krill — a tiny translucent pink-orange shrimp-like krill, big black eye, feathery legs.
2. A herring — slim silver fish, blue-green back, bright reflective belly, forked tail.
3. An Atlantic cod — chunky body, big head, speckled olive-gold back, pale belly, small chin barbel.
Row 2:
4. An Atlantic salmon — strong silver body with small black spots, pinkish sheen, square tail.
5. A red king crab — wide spiky red-orange shell, long jointed spiky legs. Upright, symmetrical, no facing direction.
6. An emperor penguin swimming underwater — body horizontal like a torpedo, flippers swept back, black back, white belly, yellow neck patch.
Row 3:
7. A harbor seal swimming — plump spotted grey body, big round dark eyes, whiskers, rear flippers trailing.
8. A walrus swimming — huge wrinkled brown-pink body, two long white tusks, bristly mustache.
9. A leopard seal swimming — long sleek silver-grey body with dark leopard spots, wide toothy grin.
```

**보스** `boss/orca_alpha.png` — `ASSET_PROMPTS_REMAINING.md` 3순위의 범고래 프롬프트 그대로.

### 🌋 심해 열수구

**배경** `stage/vent.jpg`
```
Seamlessly tileable horizontal underwater background: the deep-sea floor at
hydrothermal vents in near-total darkness. Black and deep crimson water,
tall black chimney vents along the BOTTOM edge glowing orange at the cracks,
faint plumes of dark smoke rising, clusters of pale tube worms, scattered tiny
blue bioluminescent specks in the distance. Very dark, low contrast, distant
parallax layer, no foreground detail. LEFT and RIGHT edges must match. No creatures, no text.
```

**물고기 격자 (3×3)** — 어두운 배경용 대비 문구를 붙인다:
```
Row 1:
1. A cluster of glowing plankton — a small round blob of tiny glowing cyan-green dots, soft light halo.
2. A deep-sea shrimp — bright red translucent shrimp with glowing blue spots along its body.
3. A hatchetfish — tiny very flat silver fish shaped like a hatchet blade, huge upward eyes, glowing belly dots.
Row 2:
4. A cluster of giant tube worms — white tubes with bright red feathery plumes on top. Upright, no facing direction.
5. A vampire squid — deep red-black body with webbed cape-like arms, big glowing blue eyes, two fins like ears.
6. A gulper eel — tiny thin body with an ENORMOUS balloon-like mouth wide open, glowing pink tail tip.
Row 3:
7. A deep-sea manta ray seen from the side-top, dark charcoal with faint glowing blue edge lines, gliding.
8. A Greenland shark — huge slow grey-brown shark, small pale eyes, rough skin, heavy body.
9. An oarfish — extremely long ribbon-like silver body, bright red crest fin along the whole back. Head RIGHT.
```

**보스** `boss/kraken.png` — 본체만 그린다 (촉수는 코드가 그린다)
```
A colossal kraken boss — the HEAD and MANTLE only, emerging from a dark cave,
deep crimson-purple skin with glowing blue spots, enormous fierce yellow eyes,
a few short tentacle stubs at the bottom edge. Massive and terrifying but
cartoon-stylized, not gory. Facing RIGHT, three-quarter allowed.
Transparent background.
```

### 👑 왕좌의 해구

**배경** `stage/throne.jpg`
```
Seamlessly tileable horizontal underwater background: sunken royal ruins at the
bottom of the deepest trench. Dark violet water, broken golden pillars and
grand staircases along the BOTTOM, faint golden glowing runes on stone, a distant
silhouette of a giant throne, drifting golden particles, mysterious and majestic.
Distant parallax layer, low contrast. LEFT and RIGHT edges must match. No creatures, no text.
```

**새 생물 격자 (2×2 로 받아도 됨)**
```
1. A seahorse knight — a proud seahorse wearing a tiny golden helmet, violet and gold body, curled tail.
2. A nautilus — spiral striped cream-and-rust shell, tentacles peeking out, one big eye. Facing RIGHT.
3. A guardian fish made of ancient carved stone — blocky gray stone body with glowing golden rune lines, moss patches.
4. (spare) A golden crown shard — a jagged glowing golden piece of a crown with a purple gem. No facing direction.
```

**보스** `boss/megalodon.png`
```
The final boss: a colossal megalodon, the King of the Sea. Gigantic prehistoric
shark in pure side view, dark slate-blue armored skin covered in ancient battle
scars, rows of enormous white serrated teeth, a jagged golden crown-like ridge
of scars on its head, glowing amber eyes, faint golden aura. Overwhelming and
majestic — cartoon-stylized, not gory. Facing RIGHT. Transparent background.
```

### 새 상어 — 상어마다 2×2 격자 한 장

```
A sprite sheet of ONE shark character at 4 growth stages for a 2D mobile game,
arranged in a 2×2 grid on ONE image, 1536×1024, transparent background.
Top-left = baby, top-right = juvenile, bottom-left = adult, bottom-right = apex (final evolution).
Same character, same colors and face in all four — it grows up, silhouette changes each stage.
Pure side view, all facing RIGHT. Wide transparent gaps, nothing touches.
(공통 스타일 문구 + 리프 샤크 4장 레퍼런스 첨부)

[백상아리] A great white shark: slate grey back, crisp white belly, powerful build.
  Apex: battle scars, glowing white-blue rim light, huge jaw.
[범고래] An orca (killer whale, friendly hero version): glossy black and white,
  white eye patch. Apex: tall dorsal fin with golden tip, sonar ripple glow.
[메갈로돈] A megalodon hero: deep blue-slate, enormous teeth.
  Apex: golden crown-like ridge, amber eyes, golden aura (friendlier than the boss version).
[고블린 상어] A goblin shark: pink-grey skin, long flat blade-like snout, protruding jaw.
  Apex: jaw shoots forward, glowing violet edges.
```
