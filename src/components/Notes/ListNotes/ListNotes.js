import React from 'react';
import SingleNote from '../SingleNote/SingleNote';
import NotesJson from '../../../json/Notes.json'

const json=NotesJson
json.splice(4,1)
const NoteId=(id)=>{
    console.log(json[id])
}
const NoteList=(json)=>{
    return(
        <div className='row'>
            {
                json.map(note=> 
                <div>
                    <SingleNote 
                    key={note}
                    id={note.id}
                    title={note.title}
                    text={note.text} 
                    author={note.author}
                    status={note.status}
                    />
                    <button type="button" className="btn btn-danger" onClick={()=>NoteId(note.id)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}
const Notes =()=>(
    <div className='row'>
        {NoteList(json)}
    </div>
);

export default Notes;