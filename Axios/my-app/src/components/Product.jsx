import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'


// axios도 프로미스
// axios(axios 설치 및 cdn 필요)가 편리한 점은 데이터가 바로 반환되는데
// fetch(js 내장)는 json()을 해줘야 data를 가져옴 
export default function Product() {
  useEffect(()=> {
    axios.get('http://test.api.weniv.co.kr/mall')
    .then(res => {
        console.log('axios')
        console.log(res)
        console.log(res.data)
    })
    

    fetch('http://test.api.weniv.co.kr/mall')
    .then(res => {
        console.log('fetch')
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
  },[])
    return (
    <div>Product</div>
  )
}
