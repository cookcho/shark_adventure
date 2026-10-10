# assets/

이미지 에셋을 넣는 곳. 규격은 `../../docs/ASSETS.md` 참고.

```
title/   타이틀 배경, 타이틀 상어
stage/   해역 원경 배경 3종
shark/   플레이어 상어 (상어 4종 × 진화 4단계)
fish/    물고기 29종
boss/    보스 3종
```

파일을 넣은 뒤 `demo/index.html` 의 `ART` 객체에 해당 줄을 등록해야 적용된다.
등록하지 않으면 로드하지 않고 Canvas 렌더링을 쓴다.
