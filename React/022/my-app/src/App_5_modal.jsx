import { useState, useEffect, useLayoutEffect } from 'react'
//useLayoutEffect : 페인팅 되기 전 미리 렌더륑 > 노 깜빡 

function App() {
const [value, setValue] = useState(100);

//useLayoutEffect로 바꿔보기
useEffect(() => {
    if (value >= 1000) {
    setValue(300);
    }
}, [value]);

return (
    <div>
    {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
    <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
    <button onClick={() => {setValue(1000)}}>커져랏!</button>
    <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
)
}

export default App;