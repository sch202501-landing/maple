# D-BET 모바일 랜딩페이지 디자인 문서 (개선안)

## 1. 프로젝트 개요

- **프로젝트명**: 메이플 스토리 게임 내의 메소, 큐브 이벤트 영업
- **목적**: 첫 진입 후 3초 이내 클릭 유도
- **핵심 전환 우선순위**:
  1. 바로접속 (메인 CTA)
  2. 카카오톡 / 텔레그램 문의 (보조 CTA)
- **타겟 사용자**: 모바일로 빠르게 접속·문의하려는 사용자
- **톤앤매너**: 강렬함, 신뢰감, 즉시성

---

## 2. 설계 원칙

1. **적을수록 클릭한다** — 섹션 수, 버튼 수, 텍스트 양 모두 최소화
2. **엄지손가락 기준 설계** — 주요 CTA는 화면 하단 1/3 영역에 배치
3. **숫자로 신뢰 만들기** — 추상적 문구 대신 수치 노출
4. **로딩 속도 우선** — 이미지 경량화, 애니메이션 최소화

---

## 3. 전체 구조 (간소화)

```
[1] 히어로 섹션 (풀스크린 + 즉시 CTA)
       ↓
[2] 핵심 가치 + 신뢰 수치 (통합 섹션)
       ↓
[3] 최종 CTA 섹션
       ↓
[하단 고정] 메인 CTA + 문의 버튼
```

기존 6개 섹션 → 3개 섹션으로 통합. "핵심 장점"과 "포인트 요약"은 메시지가 중복되므로 하나로 합침.

---

## 4. 섹션별 상세 기획

### 4-1. 히어로 섹션

**목적**: 첫 화면에서 서비스 인지 + 즉시 클릭 유도

**레이아웃**
- 풀스크린 (100vh, iOS safe-area 대응)
- 배경: 다크 네이비 + 미묘한 그라데이션 (정적 이미지 권장, 동영상 지양 — 로딩 부담)
- 중앙 정렬: 헤드라인 → 서브카피 → CTA → 신뢰 시그널

**카피**
| 요소 | 내용 |
|------|------|
| 헤드라인 | 가장 빠른 접속<br>가장 쉬운 이동 |
| 서브카피 | 필요한 링크, 지금 바로 연결하세요 |
| 메인 CTA | 🔗 지금 바로 접속 |
| 신뢰 시그널 (신규) | ✓ 실시간 접속 가능 · 24시간 문의 대응 |

**인터랙션**
- 진입 시: 헤드라인 fade-up (0.3s) → 서브카피 (0.5s) → CTA (0.7s)
- CTA 버튼: 약한 pulse 효과 (2s 간격, 너무 강하면 광고처럼 보임)
- 버튼 탭: scale(0.96) 축소 피드백

---

### 4-2. 핵심 가치 + 신뢰 수치 (통합 섹션)

**목적**: 장점 전달 + 이탈 방지 동시 수행

**구성 A — 3단 카드 (장점)**

| 아이콘 | 타이틀 | 서브 |
|--------|--------|------|
| ⚡ | 즉시 연결 | 검색 없이 한 번의 탭으로 이동 |
| 🎯 | 직관적 구성 | 필요한 경로만 깔끔하게 |
| 📱 | 모바일 최적화 | 어떤 화면에서도 선명하게 |

**구성 B — 수치 신뢰 배너 (신규 추가)**

카드 아래에 가로 스크롤 또는 3열 그리드로:

```
[ 000,000+ ]       [ 평균 0.0초 ]       [ 24시간 ]
 누적 접속자          연결 속도           문의 대응
```

> 실제 수치는 운영 데이터 기반으로 채워야 함. 수치가 없으면 이 섹션은 넣지 말 것 — 빈 신뢰는 역효과.

---

### 4-3. 최종 CTA 섹션

**목적**: 스크롤 끝에서 마지막 클릭 유도

**구성**
- 헤드라인: **지금 원하는 경로로 바로 이동하세요**
- 보조 설명: 클릭 한 번이면 충분합니다
- 버튼 2개 (수직 배치, 메인 강조)
  - 🔗 **바로접속** (Primary, 강조)
  - 💬 **카카오톡 문의** (Secondary)

> 텔레그램은 하단 고정 네비게이션에만 배치 (버튼 과다 방지)

---

### 4-4. 하단 고정 네비게이션 (재설계)

**기존**: 카톡 / 텔레그램 / 바로접속 3분할
**개선**: 메인 CTA 1개 + 문의 1개 (2분할)

```
┌──────────────────────┬──────────┐
│   🔗 바로 접속하기    │  💬 문의  │
│       (Primary)       │ (Toggle)  │
└──────────────────────┴──────────┘
```

- 메인 CTA가 전체 폭의 65~70% 차지
- 💬 문의 탭 시: 카카오톡 / 텔레그램 선택 시트(bottom sheet) 등장
- 높이: 64px 이상 (iOS safe-area inset 포함 시 80px 내외)
- 스크롤과 무관하게 하단 고정

**왜 2분할인가**
3버튼은 각 버튼 폭이 33%로 좁아져 터치 실수 유발. 메인 전환(바로접속)을 시각적으로 압도적으로 크게 가져가는 게 전환율에 유리.

---

## 5. 비주얼 가이드

### 컬러 시스템

| 용도 | 컬러 | 비고 |
|------|------|------|
| 메인 배경 | `#081633` | 진한 네이비 |
| 포인트 | `#2D8BFF` | CTA, 강조 요소 전용 (로고 시안블루 매칭) |
| 서브 텍스트 | `#C9D4F2` | 본문 보조 |
| 기본 텍스트 | `#FFFFFF` | 헤드라인·버튼 |
| 카드 배경 | `rgba(255,255,255,0.06)` | 반투명 다크 카드 |
| 구분선 | `rgba(201,212,242,0.15)` | 얕게 |

### 버튼 스타일

- Primary: `#2D8BFF` 배경 + 흰색 텍스트 + 둥근 모서리 12px
- Secondary: 투명 배경 + 흰색 1px 테두리
- 최소 높이: 52px (터치 영역 확보)
- 그림자: `0 4px 16px rgba(45, 139, 255, 0.32)` — Primary 버튼에만

### 카드 스타일

- 배경: 반투명 화이트 (6% opacity)
- 테두리: 1px solid `rgba(255,255,255,0.08)`
- 모서리: 16px
- 패딩: 20px
- 그림자: 없음 또는 매우 얕게 (무거워 보이지 않게)

---

## 6. 타이포그래피

### 폰트 패밀리

**Paperozi (Paperlogy)** 단일 폰트로 전체 통일.
9단계 굵기(100~900)를 모두 로드하여 위계 표현.

```css
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-1Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-2ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-3Light.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-display: swap;
}
@font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-9Black.woff2') format('woff2');
    font-weight: 900;
    font-display: swap;
}

:root {
    font-family: 'Paperozi', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif;
}
```

### 위계 시스템

| 레벨 | 크기 | 굵기 | 줄간격 | 용도 |
|------|------|------|--------|------|
| Display | 36px | 900 (Black) | 1.2 | 수치 강조 배너 |
| H1 (히어로) | 32px | 800 (ExtraBold) | 1.3 | 메인 헤드라인 |
| H2 (섹션) | 24px | 700 (Bold) | 1.4 | 섹션 타이틀 |
| H3 (카드) | 18px | 600 (SemiBold) | 1.4 | 카드 제목 |
| Body | 16px | 400 (Regular) | 1.6 | 본문 |
| Body Emphasis | 16px | 500 (Medium) | 1.6 | 강조 본문 |
| Caption | 13px | 300 (Light) | 1.5 | 보조 텍스트 |
| 버튼 | 16px | 700 (Bold) | 1 | CTA |

### 운용 가이드

- **Paperozi는 기하학적 산세리프 계열**이라 굵기 대비가 강할수록 임팩트가 커집니다.
- 헤드라인은 **800~900** 권사용, 본문은 **400**으로 낮춰 대비를 확실히.
- Caption은 **300(Light)** 로 정보 위계 분리 — 같은 폰트 내에서 굵기로만 위계 표현.
- `font-display: swap` 설정으로 CDN 로딩 지연 시 시스템 폰트 우선 노출 → FCP 유지.
- 폰트 9종 전량 로드는 용량이 크므로, **실제 사용 굵기(300/400/500/700/800/900)만 선별 로드** 권장.
- 문단은 2줄 이내 유지

---

## 7. 반응형 기준

- **모바일 우선**: 360px ~ 430px 기본
- 430px 이상: 최대 폭 480px로 제한하고 중앙 정렬
- 태블릿/PC: 모바일 뷰 그대로 중앙 고정 (단일 페이지 특성상 확장 불필요)
- iOS safe-area inset 대응 (하단 네비게이션 `env(safe-area-inset-bottom)` 적용 필수)

---

## 8. 인터랙션 가이드

| 동작 | 효과 | 속도 |
|------|------|------|
| 진입 | 히어로 순차 fade-up | 0.3 ~ 0.7s |
| 섹션 진입 | fade-up 200ms | IntersectionObserver |
| 버튼 탭 | scale(0.96) | 100ms |
| 메인 CTA | 약한 pulse | 2s loop |
| 문의 시트 | slide-up | 250ms |

> 애니메이션은 "빠르고 가볍게". 0.5s 넘는 트랜지션은 피할 것.

---

## 9. 개발 명세

### 기술 스택
- HTML5 / CSS3 / Vanilla JS
- 외부 라이브러리 최소화 (로딩 속도 우선)
- 폰트: Paperozi (jsDelivr CDN, woff2)

### 파일 구조
```
/
├── index.html
├── /css
│   └── style.css
├── /js
│   └── script.js
└── /assets
    ├── /images   (WebP 권장)
    └── /icons    (SVG 인라인 권장)
```

### 링크 설정

| 용도 | URL |
|------|-----|
| 바로접속 | `https://www.dms-996.com` |
| 카카오톡 | `https://open.kakao.com/o/gkOQk7qi` |
| 텔레그램 | `https://t.me/dms119` |

> ✅ **도메인 확정**: `dms-996.com` (최종 운영 도메인)

### 성능 목표
- First Contentful Paint: 1.5s 이내
- 총 페이지 용량: 500KB 이하
- 이미지: WebP + lazy-loading
- 스크립트: 하단 defer 로드

---

## 10. 최종 점검 체크리스트

### 콘텐츠
- [ ] 첫 화면 3초 안에 "무엇을 할 수 있는지" 전달되는가
- [ ] CTA가 시각적으로 가장 먼저 보이는가
- [ ] 텍스트가 각 섹션당 3줄 이내로 유지되는가
- [ ] 신뢰 수치가 실제 데이터 기반인가

### UX
- [ ] 모든 버튼 높이가 48px 이상인가
- [ ] 하단 네비게이션이 콘텐츠를 가리지 않는가 (스크롤 하단 여백 80px 이상)
- [ ] iOS safe-area에서 버튼이 잘리지 않는가
- [ ] 가로 스크롤이 발생하지 않는가

### 기술
- [ ] Lighthouse 성능 점수 85점 이상
- [ ] 이미지 총 용량 300KB 이하
- [ ] 외부 요청 10개 이하
- [ ] HTTPS 외부 링크 모두 `rel="noopener"` 처리

---

## 11. 기존 문서 대비 변경 요약

| 항목 | 기존 | 개선 |
|------|------|------|
| 섹션 수 | 6개 | 3개 (통합) |
| 하단 버튼 | 3분할 | 2분할 (메인 강조) |
| 신뢰 요소 | 추상적 문구 | 수치 기반 |
| 히어로 | 헤드라인 + 서브 + CTA | + 신뢰 시그널 1줄 |
| 최종 CTA | 버튼 2개+ | 메인/보조 명확 위계 |
| 성능 기준 | 언급 없음 | 구체 수치 명시 |
