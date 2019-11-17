import React from 'react'
import './SingleNote.css'

const Note=(props)=>{
    if(props.publishCheck==='yes'){
        var publishButton=<button type="button" className="btn btn-danger" onClick={props.publish}>Publish</button>
    }
    return(
        <div>
            <h3>{props.title}</h3>
            <p className='monospace'>{props.date}</p>
            <p className='textp'>{props.text}</p>
            <i>{props.author}</i>
            <p className='monospace'>{props.status}</p>
            <button type="button" className="btn btn-danger" onClick={props.delete}>Delete</button>
            {publishButton}
        </div>
    )
}

export default Note;