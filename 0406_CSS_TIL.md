# 📌 DOM
<img width="800" src="https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/856cc5ea-49fa-4bee-9ae5-a1eb68683100/public">

***

# 📌 [CSS] Selector 선택자

## 1. 종류
### 1) 전체 선택자(Universal Selelctor) <br> ``` * { }``` 
<br>

### 2) 타입 선택자(Type Selelctor) <br> h1, body, p 등...
<br> 

### 3) 아이디 선택자(ID Selelctor) 
#### - html 페이지에 하나만 사용 가능/ 왜? js에서 혼란 방지<br> ex) id=wrapper는 무조건 하나만 존재 <br> - 아이디는 직관적, 간단명료 (회사의 규약에 따른다) <br> - 숫자로 시작하는 이름 X, 알파벳 또는 -, _로 시작
<br> 

### 4) class 선택자
#### - 복수 선택 가능 / css 디자인은 대부분 class <br> - js에도 활용 가능 <br> - 숫자로 시작하는 이름 X/ 알파벳 또는 -, _로 시작
<br>

### 5) Selector list
#### - 다수 선택자를 (,)로 연결 <br>- h1, h2, h3{  } <br>- 점수 1점(type selector이라서)
<br>
<br>

## 2. 선택자의 우선순위
### 원칙 1) 후자 선택의 우선순위
### 원칙 2) 구체성(Specificity)
#### 가중치,특이성, 명시도! 얼마나 더 구체적으로 선택자를 작성하냐
### <span style ="background-color:#a4d8fc">선택자 우선순위</span>
<img src="https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/3d4afc89-918e-4935-3e4d-f9e4aadf2300/public">

#### ex) ul#primary-nav li.active (112점)

## 3. 중요성의 원칙
### important!는  나쁜 습관!
### 그런데 사용하는 이유는?
#### 대규모 웹사이트 경우, 다른 스타일을 섯불리 제거/ 수정하여 손상되는 것을 방지하기 위해 사용할 때가 있음

<br>

*** 
# 📌 [CSS] Box model
<img width="900" src="https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/f508aa92-46f7-41bb-416a-eccb58359500/public">

## 1. block-level 박스 
#### - 사용 가능한 공간을 양 옆으로 100% 차지 <br><span style="color:blue">- width, height 설정 가능</span> <br> - padding, margin 사용 가능하고, 다슨 요소를 밀어냄

## 2. inline 박스 
#### - 콘텐츠 크기만큼만 차지 <br> - <span style="color:blue">width, height 설정 불가능</span> <br> - <span style="color:red">padding, margin이 좌우만 적용되고 상하에는 X</span>

## 3. inline-box 박스 
#### - block 요소의 특징을 그대로 유지한 채 inline 요소로 만들어줌 <br> - 텍스트 기준으로 한 줄 정렬

<img src="https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/2482c3a5-9cbd-498c-001c-f2368474ac00/public">


## 3. radius
#### - 테두리 꼭짓점 둥글게 만들기 <br> - 설정한 radius 값을 반지름으로 하는 원을 박스의 꼭짓점에서 그려 둥근 테두리를 그리는 원리
### ✔ border-radius: 50%는 완전한 동그라미
<img width="500" src="https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/e7edd84e-1415-4196-427e-6fd3c7896c00/public">

<br>

### ✔ 4개의 꼭짓점 radius를 각각 설정할 수 있음
<img width="500" src="https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/e28fabc4-70c0-4807-f59f-52eefba09a00/public">


<br>
<br>

***

# 📌margin 겹침(margin collapsing)
### 블럭 레벨 요소는은 서로 margin이 상쇄되는 겹침 현상이 일어남

#### ✔ 요소 사이에 마진 탑/바텀의 공간이 있을 경우 더 높은 값의 마진 적용
#### ✔ 부모/ 자식 요소 관계에서, 자식 요소 마진 탑/바텀이 적용 X

![](https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/48dd4f68-2f76-4bd8-0ab6-399c8bf31700/public)
 
### <span style="background-color:#19ff9c">[해결 방법]</span>
### 1.overflow:hidden (부모 요소에 적용) 
### 2.display: inline-block(자식 요소를 갖는 인라인 요소로 바뀜으로 인해 해결)
### 3. border: solid 1px (부모 또는 자식 요소에 모두 가능)
####  * 어떤 방법이 더 좋다는 결론은 절대적으로 내릴 수 없다. 상황에 따라서 달라짐
#### * margin 겹침 해결방안 참고) https://velog.io/@ursr0706/%EB%A7%88%EC%A7%84margin 

*** 

# 📌 고정 단위/ 가변 단위
## 1. 고정 단위
### px, in(인치), cm, mm, pt(포인트) 


## 2. 가변 단위
### em: 부모태그 폰트 기준 
### rem: 최상위 요소 폰트(보통 body) 기준
### width=50%는 전체 화면 기준이 아니라 부모 태그 기준!!!
### width= 50vw가 뷰포트 기준


# 📌 대체박스 모델
  
<img src="https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/bde2c914-d08c-440a-8233-5357ea15c700/public" width="1200px">

## box-sizing: border-box 설정 이유
### - 내가 설정한 width, height이  margin과 padding으로<br>크기가 변경되지 않도록 해줌 <br>- <span style="background-color:#ddbdff"> 다른 요소로부터 밀려남 방지</span> <br> - 단, 그만큼 content 부분이 작아짐 

<br>
<br>

***

### 📗 어도비 컬러 트렌드
컬러조합 참고 사이트
https://color.adobe.com/ko/trends


### 📗 [표기법]
python -> snake : who_am_i
js -> camel : whoAmI
html,css -> 엄펑 많음

### 📗 단축키  
* 들여쓰기 단축키
Ctrl + ]
내어쓰기 단축키
Ctrl + [

* ctrl + alt + 방향키 : 전체 선택하기

* alt+화살표 위/아래 : 드래그한 줄들이 단체로 움직임

* ctrl + B: vscode 옆에 창 보기 


### 📗 {margin: _ _ _ _ }
margin에 갯수에 따른 값
4개: 상우좌하
3개: 상 가로 하
2개: 상하/좌우
1개: 네방향 동시

### 📗 단축키  
* oven, 프로토파이 - 프로토타입 작성하는 프로그램(개발자)
* 피그마: 디자인 툴(디자이너) 
- https://brunch.co.kr/@nyeric/78
