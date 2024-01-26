import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [countAdd , setCountAdd] = useState(0);
    const [countSub , setCountSub] = useState(0);
    const [countMul , setCountMul] = useState(0);
  return (
    <div>
        <p>{countAdd}</p>
        <button onClick={() => setCountAdd(countAdd + 25)}>ADD</button>
        
       >
       <p>{countSub}</p>
        <button onClick={() => setCountSub(countSub -25)}>Sub</button>
       >
       <p>{countMul}</p>
        <button onClick={() => setCountMul(countMul * 25)}>Mul</button>
       >
    </div>
  )
}
 