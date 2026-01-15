import React from 'react'
import ChildB from './ChildB'

function ChildA(props) {
  return (
    <div>ChildA
        <br/>
        Number:{props.num}<br/>
        String:{props.str}<br/>
        IsPassed:{""+props.isPassed}<br/>
        IsPassed:{props.isPassed.toString()}
        <br/>
        Array Element
        {
            props.arr.map((v,i)=>(
                <div>{v}</div>
            ))
        }

        <br/>
        <ChildB num={props.num}/>
    </div>
  )
}

export default ChildA