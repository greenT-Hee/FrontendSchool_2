import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
// 여기에 like가 있기 때문에 herat도 같이 아래에서 재렌더링이 된 것 
let heart = like % 2 === 1 ? "💚" : "";


  function handleClickLike() {
      setLike(like + 1)
      // console.log(like);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{heart ? heart : ""}</span>
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;