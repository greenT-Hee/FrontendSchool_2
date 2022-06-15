import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log(1)
    return () => {
      console.log('return_1')
    }
  }, []) //처음 mount됐을 때만 한 번 실행

  useLayoutEffect(()=>{
    console.log(2)
    return () => {
      console.log('return_2')
    }
  }) //unmount안되고 udate만 실행이 된다

  useLayoutEffect(()=>{
    console.log(3)
    return () => {
      console.log('return_3')
    }
  }, [num]) //unmount안되고 udate만 실행이 된다

  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect _return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect_return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect_return_3')
    }
  }, [num])


  return (
    <div className="App">
      <button onClick={handleonClick}>{num}</button>
      
    </div>
  );
}

export default App