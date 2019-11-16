import React, { useState } from 'react';
import SingleNote from '../SingleNote/SingleNote';
import NotesJson from '../../../json/Notes.json'
import NewNote from '../NewNote/NewNote'

var json=NotesJson
const NoteList=()=>{
    var [arrayOfNotes, setArray] = useState(json);
    const DeleteNote=(id)=>{
        let result = arrayOfNotes.filter(obj => {
            return obj.id === id
        })
        let indexFromObject=arrayOfNotes.indexOf(result[0])
        let removedObject=[...arrayOfNotes.splice(indexFromObject,1)]
        let newArrayOfNotes=[...arrayOfNotes]
        setArray(newArrayOfNotes)
    } 
    const AddNote=()=>{
        let zzz={
            "id":222222,
        "title":"zzzzzzzzzzzzz",
        "text":"Blah Blah Blaaa",
        "author":"John Doe",
        "status":"published"
        }
        let eee=[...arrayOfNotes]
        eee.push(zzz)
        setArray(eee)
    }
    const addNewNote=()=>{
        let newId=[...arrayOfNotes].length
        let newTitleValue=document.getElementById('newtitle').value
        let newTextValue=document.getElementById('newtext').value
        let newAuthorValue=document.getElementById('newauthor').value
        let zzz={
                "id":newId+1,
                "title":newTitleValue,
                "text":newTextValue,
                "author":newAuthorValue,
                "status":"published"
            }
        let eee=[...arrayOfNotes]
        eee.push(zzz)
        setArray(eee)
    }
    return(
        <div className='container'>
            <div className='row'>
                {
                    arrayOfNotes.map(note=> 
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <SingleNote 
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            text={note.text} 
                            author={note.author}
                            status={note.status}
                        />
                        <button type="button" className="btn btn-danger" onClick={()=>DeleteNote(note.id)}>Delete</button>
                    </div>
                    )
                }
            </div>
            <NewNote newNote={AddNote} addNewNote={addNewNote}/>
        </div>
    )
}
const Landing =()=>(
    <div>
        {NoteList()}
    </div>
);

export default Landing;