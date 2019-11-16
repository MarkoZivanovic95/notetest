import React from 'react'
import './SingleNote.css'

const Note=(props)=>(
    <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>{props.author}</p>
    </div>
)

export default Note;