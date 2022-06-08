import './App.css'

// function App() {
//   // 주석입니다
//   const name = 'taehee';
//   function age(){
//     return 10;
//   }
//   const 로그인 = true
//   const somestyle = {backgroundColor:"black", color:"white"}
//   return (
//     <div>
//       {/*리턴 
//       후 
//     주석입니다 */}
      
//       <h1 className="one">안녕! 라이캣!</h1>
//       <h1 style={{backgroundColor:"black", color:"white"}}>hello world</h1>
//       <h1>hello {name} {age()}</h1>
//       <p>{로그인?'로그아웃':'로그인'}</p>
//       <h1 style={somestyle}>안녕 라이캣!2</h1>
//     </div>
//   )
// }


function App() {
	const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
      
      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div>
    </div>
  );
}

export default App;