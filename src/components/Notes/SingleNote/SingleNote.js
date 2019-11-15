import React from 'react'
import './SingleNote.css'

const Note=(props)=>(
    <div className="col-sm-6 col-md-4 col-lg-3 note">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>{props.author}</p>
        
    </div>
)

export default Note;