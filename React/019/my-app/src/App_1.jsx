import React, { useState, useEffect, useRef } from 'react';


// function sum(a,b){
//     let x= 100
//     let result = a + b + x
//     return result
// }

function Counter() {
    // useState는 비동기, 그리고 상태변화면 렌더링
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  // ref와 일반 변수는 변해도 렌더링 X 
  // ref는 일반 변수처럼 쓰지만 0으로 초기화가 되지 않음(휘발 방지, 상태누적)
  // 일반 변수는 렌더링 되면 0으로 초기화(함수 안에 있으니 휘발)
  let countThree = useRef(0)
  let countFour = 0
  console.log(countThree)

  // 랜더링 됨
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 랜더링 됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1
    console.log(countThree.current)
  }
  // 랜더링되 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
  const handleCountUpFour = (e) => {
    countFour = countFour + 1
    console.log(countFour)
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.')
    console.log(`감시된 변수 : ${count}`)
  }, [count]) // count가 변경되는 것을 감시
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;