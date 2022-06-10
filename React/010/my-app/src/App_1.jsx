function Resume(props) {
  let like = 0;

  function handleClickLike() {
      like += 1;
      console.log(like);
  }

  // {like}를 변해야 하는지 아닌지 잘 확인 불가 => useStake
  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
    </div>
  );
}

export default App;