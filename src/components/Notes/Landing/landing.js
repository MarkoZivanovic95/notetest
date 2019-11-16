import React, { useState } from 'react';
import SingleNote from '../SingleNote/SingleNote';
import NotesJson from '../../../json/Notes.json'
import NewNote from '../NewNote/NewNote'

var json=NotesJson
const NoteList=()=>{
    var [arrayOfNotes, setArray] = useState(json)
    var [FilterByLetters, setFilter] = useState('');
    var status='published'
    const DeleteNote=(id)=>{
        let result = arrayOfNotes.filter(obj => {
            return obj.id === id
        })
        let indexFromObject=arrayOfNotes.indexOf(result[0])
        let removedObject=[...arrayOfNotes.splice(indexFromObject,1)]
        let newArrayOfNotes=[...arrayOfNotes]
        setArray(newArrayOfNotes)
    } 
    const addNewNote=()=>{
        let newId=[...arrayOfNotes].length
        let newTitleValue=document.getElementById('newtitle').value
        let newTextValue=document.getElementById('newtext').value
        let newAuthorValue=document.getElementById('newauthor').value
        let newNoteStatus=document.getElementById('noteStatus').value
        console.log(newNoteStatus)
        let newNoteObject={
                "id":newId+1,
                "title":newTitleValue,
                "text":newTextValue,
                "author":newAuthorValue,
                "status":newNoteStatus
            }
        let newArrayOfNotes=[...arrayOfNotes]
        newArrayOfNotes.push(newNoteObject)
        setArray(newArrayOfNotes)
        console.log(arrayOfNotes)
    }
    const FilterNotes=()=>{
        var lettersForFilter=document.getElementById('filter').value
        console.log(lettersForFilter)
        let result = arrayOfNotes.filter(obj => {
            return obj.title === lettersForFilter
        })
        console.log(result)











    }
    const SortByDate=()=>{
        let arraySortedByDate=[...arrayOfNotes]
        arraySortedByDate.sort(function(a,b){
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c-d;
        });
        setArray(arraySortedByDate)
    }
    return(
        <div className='container'>
            <button type="button" className="btn btn-primary" onClick={()=>SortByDate()}>Sort By Date</button>
            <input id='filter' placeholder='Filter' onChange={()=>FilterNotes()}></input>
            <div className='row' id='myUL'>
                {
                    arrayOfNotes.map(note=>{
                        if (note.status===status){
                            return(
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
                    
                    })
                }
            </div>
            <NewNote addNewNote={addNewNote}/>
        </div>
    )
}
const Landing =()=>(
    <div>
        {NoteList()}
    </div>
);

export default Landing;