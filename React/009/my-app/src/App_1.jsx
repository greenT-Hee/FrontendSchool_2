import './App.css'

function App() {
  // 주석입니다.
  const name = 'hojun'
  function age(){
    return 10
  }
  const 값 = true
  const someStyle = {backgroundColor:"black", color:"white"}
  return (
    <div>
      {/* 주석입니다 */}
      {/* 
      주
      석
      입
      니
      다
      */}
      <h1 className="one">hello world</h1>
      {/* 바깥 괄호는 자스를 실행시킬 수 있는 괄호, 안 쪽 괄호는 오브젝트의 괄호 */}
      <h1 style={{backgroundColor:"black", color:"white"}}>hello world</h1>
      <h1>hello {name}, {age()}</h1>
      <p>{값?'one':'two'}</p>
      <h1 style={someStyle}>hello world</h1>
    </div>
  );
}

export default App;