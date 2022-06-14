import styled from "styled-components";
import { Link } from "react-router-dom";


const NavCont = styled.div`
  background-color: #20232a ;
  display: flex;
  flex-flow: row wrap;
  width: 1920px;
  padding: 10px 16%;
`
const Btn = styled.button`
  width: 100px;
  margin-right: 40px;
`

const LogoImg = styled.img`
  width: 100px;
  
`
const SearchForm = styled.form`
  width: 100px;
  
`
const SearchIpt = styled.input`
  width: 200px;
  height: 23px;
  background-color: #20232a;
  border-radius: 3px;
  font-size: 14px;
`
const NavUl = styled.ul`
  color: white;
  font-size: 18px;
  width: 480px;
  margin-left: 5%;
  text-decoration: none;
`
const Li = styled.li`
  display: inline-block;
  padding-right: 5px;
  width: 80px;
  vertical-align: middle;
  line-height: 1.5;
`


const Div2 = styled.div`
  margin-left: 140px;
`
const A = styled.a`
  padding: 0 10px;
  display: inline-block;
  color: white;
  font-size: 14px;
  line-height: 2;
  vertical-align: middle;
  text-decoration: none;
`


function BtnLogo(){
  return (
    <Btn>
      <LogoImg 
      src={require('../../img/reactLogo.PNG')} 
      alt="리액트 로고"
      />
    </Btn>
  )
}


function Input(){
  return <SearchIpt type="text" placeholder="검색"/>
}

export default function Nav() {
  return (
    <NavCont>
      <BtnLogo/>
      <NavUl>
        <Li>
          <Link to = "/docs" target={"blank"} style={{color:"white", textDecoration:"none" }}>문서</Link>
        </Li>
        <Li>
            <Link to = "/study" target={"blank"} style={{color:"white", textDecoration:"none" }}>자습서</Link>
        </Li>
        <Li>
          <Link to = "/blog" target={"blank"} style={{color:"white", textDecoration:"none" }}>블로그</Link>
        </Li>
        <Li>
          <Link to = "/community" target={"blank"} style={{color:"white", textDecoration:"none" }}>커뮤니티</Link>
        </Li>
      </NavUl>
      <SearchForm action="">
        <Input />
      </SearchForm>
      <Div2>
        <A href="#">v.18.0.0</A>
        <A href="#">Languages</A>
        <A href="https://github.com/greenT-Hee" target= 'blank' >Github</A>
      </Div2>
    </NavCont>
  )
}

