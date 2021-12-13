import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'


export default function Counter() {
   const {lang,setLang}= useContext(CounterContext)

    const change = ()=>{
        if(lang==="en"){
            setLang("ar")
        }else{setLang('en')}
    }
    return (
        <div>
            <h1>Language  : {lang}</h1>
            <button className="btn btn-dark" onClick={()=>change()}>Chang language</button>
        </div>
    )
}
