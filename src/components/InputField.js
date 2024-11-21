import React from 'react'

export default function InputField(props) {
  return (
    <div>
        <input type={props.type} className={props.className} id={props.id} placeholder={props.placeHolder}/>
    </div>
  )
}