import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
span {
    color : red;
    font-size : 12px;
}
a{
    text-decoration : none;
    color : inherit;
}

button{
    border : none;
    cursor : pointer;
}

* {
    box-sizing: border-box;
}
`;

function Hello(){
    return <span> 🐰 world 🐰</span>
}

function App() {
    return (
        //<GlobalStyle /> 위치는 크게 상관 없음 (div 안 어디서나 가능)
        <div className="App">
            <GlobalStyle/>
            <h1>test2</h1>
            <span>hello</span>
            <Hello/>
        </div>
    );
}

export default App;