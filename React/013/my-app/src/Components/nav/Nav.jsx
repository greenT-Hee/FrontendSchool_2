import styled from "styled-components";


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

function NavMenu ({menu}){
  return(
    <Li>{menu}</Li>
  )
}


export default function Nav() {
  return (
    <NavCont>
      <BtnLogo/>
      <NavUl>
        <NavMenu menu = {"문서"}/>
        <NavMenu menu = {"자습서"}/>
        <NavMenu menu = {"블로그"}/>
        <NavMenu menu = {"커뮤니티"}/>
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


// <BrowserRouter>
// <Link to="">
//   홈
// </Link>
// <Link to="/one">
//   현재시간
// </Link>
// <Link to="/two">
//   안녕
// </Link>
// <Link to="/three">
//   소개
// </Link>
// <Route path="/" exact component={Homepage} />
// <Route path="/one" exact component={One} />
// <Route path="/two" exact component={Two} />
// <Route path="/Three" exact component={Three} />
// </BrowserRouter>