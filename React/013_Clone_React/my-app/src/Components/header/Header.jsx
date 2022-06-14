import styled from "styled-components";
import Nav from "../nav/Nav"

const HH = styled.div`
    background-color: #16181d;
    font-size: 18px;
    padding: 16px;
`
const PP = styled.p`
    color:white;
    text-align: center;
`

const Uk1 = styled.span`
    color: #61dafb;
    
`
const Div = styled.div`
    background-color: #282c34;
    height: 350px;
    text-align: center;
`

const H1 = styled.h1`
    color: #61dafb;
    font-size: 60px;
    font-weight: 900;
    padding: 45px 0 20px;
`
const P = styled.p`
    font-size: 26px;
    color: white;
`

const BtnStart = styled.button`
    font-size: 20px;
    color: #282c34;
    width: 120px;
    height: 50px;
    line-height: 2.5;
    background-color: #61dafb;
    margin: 65px 25px 0 0 ;
`
const BtnRead = styled.button`
    font-size: 20px;
    width: 170px;
    color: #61dafb;
`

export default function Header(){
    return(
        <header>
            <HH>
                <PP>Support Ukraine 🇺🇦 <Uk1>Help Provide Humanitarian Aid to Ukraine.</Uk1></PP>
            </HH>
            <Nav/>
            <Div>
                <H1>React</H1>
                <P>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</P>
                <div>
                    <BtnStart>시작하기</BtnStart>
                    <BtnRead>자습서 읽어보기 </BtnRead>
                </div>
            </Div>
        </header>
    )
}