import React from 'react'
import './TwittersideOptions.css'

function TwittersideOptions({active,text,Icon}) {
  return (
    <div className={`twittersideOptions ${active && "sideoption--active"}`}>
         <Icon/>
         <h2>{text}</h2>
    </div>
  )
}

export default TwittersideOptions;
   
