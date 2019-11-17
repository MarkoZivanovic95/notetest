import React, { useState } from 'react';
import SingleNote from '../SingleNote/SingleNote';
import NotesJson from '../../../json/Notes.json'
import NewNote from '../NewNote/NewNote'
import './Landing.css'

const NoteList=()=>{
    var [arrayOfNotes, setArray] = useState(NotesJson)
    var [NoteStatus, setStatus] = useState('published')
    var [value, setSort] = useState()
    // function for deleting note, filtering the array based on id, then removing said object
    const DeleteNote=(id)=>{
        let result = arrayOfNotes.filter(obj => {
            return obj.id === id
        })
        let indexFromObject=arrayOfNotes.indexOf(result[0])
        let removedObject=[...arrayOfNotes.splice(indexFromObject,1)]
        let newArrayOfNotes=[...arrayOfNotes]
        setArray(newArrayOfNotes)
    }
    // function for adding new notes to json, taking values from modal then adding to json
    const addNewNote=()=>{
        let newId=[...arrayOfNotes].length
        let newTitleValue=document.getElementById('newtitle').value
        let newTextValue=document.getElementById('newtext').value
        let newAuthorValue=document.getElementById('newauthor').value
        let newNoteStatus=document.getElementById('noteStatus').value
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let currentDate=`${month}.${date}.${year}`
        if(newTitleValue.length===0 || newTextValue.length===0 || newAuthorValue.length===0){
            alert('missing required fields')
        }else{
            let newNoteObject={
                "id":newId,
                "title":newTitleValue,
                "text":newTextValue,
                "author":newAuthorValue,
                "status":newNoteStatus,
                "date":currentDate
            }
            let newArrayOfNotes=[...arrayOfNotes]
            newArrayOfNotes.push(newNoteObject)
            setArray(newArrayOfNotes)
        }
    }
    // function to filter notes based on title and imput, not woking atm
    // const FilterNotes=()=>{
    //     var lettersForFilter=document.getElementById('filter').value
    //     console.log(lettersForFilter)
    //     let wwwww=[...arrayOfNotes]
    //     let ccc=wwwww.filter(item=>item.title.includes(lettersForFilter))
    //     setSort(ccc)
    //     console.log(sortArray)
    // }
    // function for date sort, simple compare function
    const SortByDate=()=>{
        let arraySortedByDate=[...arrayOfNotes]
        arraySortedByDate.sort(function(a,b){
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c-d;
        });
        setArray(arraySortedByDate)
    }
    // showing only drafts,changing button text
    const showDrafrs=()=>{
        if(NoteStatus==='published'){
            setStatus('draft')
        }else if(NoteStatus==='draft'){
            setStatus('published')
        }
    }
    // showing only published,changing button text
    const publishDraft=(id)=>{
        let arrayOfDrafts=[...arrayOfNotes]
        arrayOfDrafts[id].status='published'
        setArray(arrayOfDrafts)
    }
    return(
        <div className='container'>
            <button type="button" className="btn btn-primary" onClick={()=>showDrafrs()}>{NoteStatus}</button>
            <button type="button" className="btn btn-primary" onClick={()=>SortByDate()}>Sort By Date</button>
            <input id='filter' placeholder='Filter' onChange={e => setSort(e.target.value)}></input>
            <div className='row notes'>
                {
                    arrayOfNotes.filter(item => {
                    if (!value) return true
                    if (item.title.toLowerCase().includes(value) || item.text.includes(value)) {
                        return true
                    }
                    })
                    .map(note=>{
                        if (note.status===NoteStatus){
                            if(NoteStatus==='draft'){
                                return(
                                    <div className="col-sm-6 col-md-4 col-lg-3 notediv">
                                        <div className="customizenote">
                                            <SingleNote 
                                                key={note.id}
                                                id={note.id}
                                                title={note.title}
                                                text={note.text} 
                                                author={note.author}
                                                status={note.status}
                                                date={note.date}
                                            />
                                            <button type="button" className="btn btn-danger" onClick={()=>DeleteNote(note.id)}>Delete</button>
                                            <button type="button" className="btn btn-danger" onClick={()=>publishDraft(note.id)}>Publish</button>
                                        </div>
                                </div>
                                )
                            }
                            return(
                                <div className="col-sm-6 col-md-4 col-lg-3 notediv">
                                    <div className="customizenote">
                                        <SingleNote 
                                            key={note.id}
                                            id={note.id}
                                            title={note.title}
                                            text={note.text} 
                                            author={note.author}
                                            status={note.status}
                                            date={note.date}
                                        />
                                        <button type="button" className="btn btn-danger" onClick={()=>DeleteNote(note.id)}>Delete</button>
                                    </div>
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

export default NoteList;