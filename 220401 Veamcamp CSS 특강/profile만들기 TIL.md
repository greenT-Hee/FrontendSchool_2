<img src="https://media.vlpt.us/images/greenth322/post/d2cc6b8c-d129-48a0-a60d-5f04161a046d/ezgif.com-gif-maker%20(1).gif">

## 🌼 최종본
<img src="https://media.vlpt.us/images/greenth322/post/dc7c69ab-6a43-47e9-a78a-6c59c94349bc/%EC%BA%A1%EC%B2%98.JPG">

## <span style="background-color:#b8ff75">🌼 TIL</span>
### 1. font 설정<br>
#### 웹 전체 폰트는 * {font-family: '글꼴이름'} / 일부 폰트 설정은 선택자{ font-family: '글꼴이름'}
```
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

* {
    font-family: 'Montserrat';
}

.header h1{
    font-family: Permanent Marker;
```


### 2. 이미지 스프라이트(sprite)
```
    /* 이미지 스프라이트 기법 => 웹 성능 */
 .icon{
    background-image: url(images/icons.png);
    text-indent: -9999px; /* IR기법 */
    background-size: 180px 120px;
    }
```

### 3. block-level element와 margin 

#### block-element태그인 ```<section>, <main>, <p>, <h1>, <div>```등<br> <span style="color:red">css기본 특징: 블럭 태그끼리 만나는 부분은 margin이 상쇄되어 한번만 적용됨</span>

### 📌 해결방법
#### 부모 태그에 <span style="background-color:#b8ff75">overflow:hidden</span> 적용

![](https://media.vlpt.us/images/greenth322/post/0d7e1ed5-ff07-4c3e-a99f-b5760150ebe1/KakaoTalk_20220402_220044350.jpg)
