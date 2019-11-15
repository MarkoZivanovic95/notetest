import React, { useState } from 'react';
import SingleNote from '../SingleNote/SingleNote';
import NotesJson from '../../../json/Notes.json'

var json=NotesJson
const NoteList=()=>{
    var [arrayOfNotes, setArray] = useState(json);
    const NoteId=(id)=>{
        let result = arrayOfNotes.filter(obj => {
            return obj.id === id
        })
        let indexFromObject=arrayOfNotes.indexOf(result[0])
        let removedObject=[...arrayOfNotes.splice(indexFromObject,1)]
        let newArrayOfNotes=[...arrayOfNotes]
        setArray(newArrayOfNotes)
    }     
    return(
        <div className='row'>
            {
                arrayOfNotes.map(note=> 
                <div>
                    <SingleNote 
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text} 
                    author={note.author}
                    status={note.status}
                    />
                    <button type="button" className="btn btn-danger" onClick={()=>NoteId(note.id)}>Delete</button>
                    <button type="button" className="btn btn-danger"onClick={()=>console.log(arrayOfNotes)}>add</button>
                </div>
                )
            }
        </div>
    )
}
const Landing =()=>(
    <div className='row'>
        {NoteList()}
    </div>
);

export default Landing;