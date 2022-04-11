> ## emmet란?
#### html과 같은 마크업 언어를 빠르게 처리하기 위한 수단

#### 🚩 emmet가 아직 익숙하지 않더라도 연습해야, 추후 개발하는 데 있어 효율적으로 시간을 관리할 수 있을 것이라고 생각한다. 

### 💜emmet 코딩 수식어💜
```
  		**emmet 문법**
         h1
         h1+h2
         h1>p
         h1+h2+p
         h1{hello}
         h1
         h1>p+P = h1>p*2
         h1>p*6 
         h1#one (id)
         h1.one (class)
         .one
         #one
         h${hello}*6
         lorem*2 - 문단 2개
         lorem5  - 5개 단어
         img:z
         p[a="value1" b="valuee" c=1]
         a
         a[href="https://www.naver.com"]
         h1.one.two#three
         table>(tr>td*4)*3 
   
```

### 💜emmet 결과💜 
```
<body>
    <h1></h1>
    <h2></h2>   
    
    <h1>
        <p></p>
    </h1>

    <h1></h1>
    <h2></h2>
    <p></p>

    <h1>hello</h1>

    <h1>
        <p></p>
        <p></p>
    </h1> 

    <h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </h1>

    <h1 id="one"></h1>
    
    <h1 class="one"></h1>

    <div class="one"></div>

    <div id="one"></div>

    <h1>hello</h1>
    <h2>hello</h2>
    <h3>hello</h3>
    <h4>hello</h4>
    <h5>hello</h5>
    <h6>hello</h6>

    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque unde reiciendis expedita quo atque ullam? Itaque ipsum ex, voluptatem natus, commodi corporis quae dolores tenetur error asperiores magnam. Fugiat, quidem.
    Nostrum nulla dicta vel eius corporis reiciendis possimus autem totam fugit a iusto, dolorem, ab eos tempore at sunt sint? Maxime doloribus doloremque inventore minima tempora eius laborum cum quod.

    Lorem ipsum dolor sit amet.

    <img src="" alt="" sizes="" srcset="">

    <p a="value1" b="value2" c="1"></p>

    <a href=""></a>

    <a href="https://www.naver.com"></a>

    <h1 class="one two" id="three"></h1>

    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>

</body>
```