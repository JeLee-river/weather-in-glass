# **Project Weather of Cocktail**

> 날씨에 어울리는 칵테일을 추천하는 서비스

<br>

[**Weather of Cocktail 방문하기**:cocktail:](https://weather-of-cocktail.vercel.app)

<br>
<br>

## **1. 프로젝트 소개**

### :bulb:기획 배경

**코로나19로 인한 취향 소비 확산**

- 코로나19로 인해 소주, 맥주 등 대중적인 주류 소비가 약 10% 감소한 반면, 개인의 취향에 따른 주류 구매는 5% 증가함.

- 취향 소비를 주도하는 2030세대의 경우, 자신이 선호하는 주류를 적극적으로 탐색하며 개인의 컨디션과 의지에 따라 가볍게 즐길 수 있는 음주를 선호하는 것으로 나타남.

- 바카디의 칵테일 트렌드 보고서에 따르면, 코로나19로 인한 lockdown이 집에서 술을 즐기는 이른바 '홈술' 문화를 일으켰으며 팬데믹 이후에도 유지될 것으로 보고 있음.
  바카디가 실시한 설문조사 응답자의 44%는 친구 또는 가족과 함께 휴식을 취할 때 칵테일을 가장 많이 소비한다고 답함.

- 위와 같은 취향 소비 문화의 확산과 다양한 주류에 대한 니즈 증가는 칵테일 수요를 높일 것으로 예상하고 있음.

  이에 따라, 칵테일들을 맛과 원료에 따라 분류하고 사용자에게 추천하여 손쉽게 취향에 맞는 칵테일을 찾을 수 있는 서비스를 구상함.

- 특히 칵테일에 익숙하지 않거나 취향을 파악하는 단계인 사용자를 주요 타겟으로 하여, 칵테일 추천 기능 다변화를 서비스의 핵심으로 함.

<br>

[출처1-바카디 리미티드의 칵테일 트렌드 보고서 2023](https://mpost.io/wp-content/uploads/BACARDI-Cocktail-Trends-Report-2023.pdf)

[출처2-메조 미디어 주류 소비 트렌드 리포트 2022](https://www.adic.or.kr/lit/report/show.do?ukey=184358&oid=@71536%7C3%7C17)

<br>

### :dart:기획 목적 및 목표

1. 서비스 측면

- 서비스 이용자의 기호에 맞는 칵테일 추천을 목적으로 한다.
- 칵테일에 익숙하지 않거나 다양한 종류의 칵테일을 접하고 싶은 이용자를 타겟으로, 날씨, 퀴즈, 무작위 랜덤 기능을 토대로 칵테일을 추천하여 서비스 진입장벽을 낮추는 것을 목표로 한다.

<br>

2. 스터디 측면

- React, TypeScript에 익숙해진다.

  - 팀원 6명 중 3명이 React, TypeScript를 처음으로 사용하므로 숙련도를 높이는 것을 목적으로 한다.

- 직접 Redux를 사용하며 장단점을 파악하고 이를 토대로 향후 프로젝트 및 업무를 수행할 때 Redux를 채택하는 기준을 정립한다.

  - 이론으로만 학습한 Redux를 직접 사용하면서 자신만의 Redux 사용 기준을 정립하는 것을 목표로 한다.

<br>

### :bust_in_silhouette:서비스 대상(페르소나)

- **김학생 / 22세 / 학생**

  - 친구와 칵테일 바에 방문했다가 칵테일의 매력에 빠졌어요. 이 기회에 다양한 칵테일을 접하면서 제 취향을 찾고 싶어요. 맛이나 원료 같은 뚜렷한 취향이 없어도 쉽게 추천받을 수 있는 방법이 없을까요?

- **김알콜 / 30세 / 직장인**

  - 퇴근하고 집에서 혼자 술 마시는게 삶의 낙인 직장인입니다.
    다음날 출근을 생각해서 도수가 낮은 칵테일을 주로 마시는데, 늘 마시던 것만 계속 마시니 조금 지겹네요.  
    색다른 칵테일을 찾고 싶은데 어떻게 찾아야 할 지 모르겠어요.

<br>
<br>

## **2. 서비스 기능**

### :sparkles:주요 기능

- 칵테일 추천

  - 사용자의 위치 정보에 기반해 날씨에 어울리는 칵테일 하나를 무작위로 추천합니다.
  - 사용자가 지역을 검색하면 해당 지역의 날씨에 어울리는 칵테일 목록을 추천합니다.
  - 사용자가 칵테일 종류, 알콜유무를 선택하면 무작위로 칵테일 하나를 추천합니다.

- 퀴즈 게임

  - 화면에 무작위로 칵테일이 뜨면, 칵테일명을 선택지에서 고르는 게임을 할 수 있습니다.

- 칵테일 정보 열람

  - 칵테일 종류, 알콜유무로 분류된 칵테일 목록을 확인할 수 있습니다.
  - 특정 칵테일의 제조법, 재료를 확인할 수 있습니다.

<br>

### :sparkles:세부 기능

- 메인 페이지

  - 사용자 위치 정보에 기반한 날씨 표시
  - 날씨에 어울리는 추천 칵테일 하나를 표시
  - 칵테일의 정보를 구글(google)에서 검색하는 기능
  - 다른 칵테일을 추천받는 기능

  <br>

- 칵테일 목록 페이지

  - 칵테일명을 검색하는 기능
  - 칵테일 목록을 알콜유무와 종류에 따라 필터링하는 기능
  - 칵테일 목록을 페이지별로 최대 20개씩 페이지네이션하는 기능

  <br>

- 칵테일 상세정보 페이지

  - 칵테일 제조법, 재료를 표시

  <br>

- 칵테일 랜덤 추천 페이지

  - 알콜/논알콜, 칵테일 종류를 선택하는 기능
  - 사용자가 선택한 옵션을 토대로 무작위 칵테일을 추천하는 기능

  <br>

- 날씨에 어울리는 칵테일 목록 페이지

  - 사용자의 위치 정보에 기반해 지역 날씨를 표시하는 기능
  - 주소로 다른 지역을 검색하여 날씨 데이터를 변경하는 기능
  - 날씨를 토대로 추천 칵테일 목록을 표시하는 기능
  - 칵테일 목록을 페이지별로 최대 20개씩 페이지네이션하는 기능

  <br>

- 퀴즈 게임 페이지

  - 사용자가 무작위로 화면에 표시되는 칵테일의 이름을 선택지에서 골라 정답을 맞히는 기능
  - 게임이 끝날 때마다 사용자가 얻은 점수를 표시하는 기능

<br>
<br>

## **3. 팀원 및 역할 분담**

### :star:팀원 소개

| 이름                                         | 담당 업무            | 주요 역할                                                  |
| -------------------------------------------- | -------------------- | ---------------------------------------------------------- |
| [조정현](https://github.com/whThswh)         | 팀장/프론트엔드 개발 | 칵테일 상세정보 페이지 담당                                |
| [김현정](https://github.com/hjkim1137)       | 프론트엔드 개발      | 메인 페이지 담당                                           |
| [박기영](https://github.com/Rki0)            | 프론트엔드 개발      | 칵테일 랜덤 추천 페이지, Header, Footer 담당               |
| [장준희](https://github.com/junhui324)       | 프론트엔드 개발      | 날씨에 어울리는 칵테일 목록 페이지 담당                    |
| [연정환](https://github.com/pisces330)       | 프론트엔드 개발      | 퀴즈 게임 페이지 담당                                      |
| [**이정은**](https://github.com/JeLee-river) | 프론트엔드 개발      | [칵테일 목록 페이지 담당](###-:page_facing_up:페이지-소개) |

<br>
<br>

## **4. 프로젝트 구조**

### :wrench:기술 스택

| 부문       | 주요 기술 스택                 |
| ---------- | ------------------------------ |
| 프론트엔드 | React, TypeScript, Redux, SASS |

<br>

- [칵테일 Open API](https://www.thecocktaildb.com/api.php) 활용

  - 순수 개발에 투자하는 기간이 약 일주일이며 팀원 전원이 FE 직무를 목표로 하기 때문에 개발에 집중하고자 백엔드 부문을 오픈 API로 대체함.

<img src="https://res.cloudinary.com/dr26wooar/image/upload/v1693751387/weather-of-cocktail/tech-stack.png" alt='Tech Stack' width="400" height="210"/>

<br>

### :art:Wireframes

[**Wireframes 보러가기**:arrow_forward:](https://dent-ulna-126.notion.site/Wireframes-35ad589b2ca642c8bcbd601187f00e71?pvs=4)

<img src="https://res.cloudinary.com/dr26wooar/image/upload/v1693754079/weather-of-cocktail/wireframes.png" alt='Figma' width="400" height="216"/>

<br>

### :page_with_curl:사용한 Open API

[**API 보러가기**:arrow_forward:](https://www.thecocktaildb.com/api.php)

<img src="https://res.cloudinary.com/dr26wooar/image/upload/v1693820194/weather-of-cocktail/api.png" alt='API' width="400" height="231"/>

<br>
