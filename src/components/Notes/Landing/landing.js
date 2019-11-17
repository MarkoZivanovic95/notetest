import React, { useState } from 'react';
import SingleNote from '../SingleNote/SingleNote';
import NotesJson from '../../../json/Notes.json'
import FilterSortNew from '../FilterSortNew/FilterSortNew'
import './Landing.css'

const NoteList=()=>{
    var [arrayOfNotes, setArray] = useState(NotesJson)
    var [NoteStatus, setStatus] = useState('published')
    var [filterValue, setSort] = useState()
    // function for deleting note, filtering the array based on id, then removing said object
    const DeleteNote=(id)=>{
        let result = arrayOfNotes.filter(obj => {
            return obj.id === id
        })
        let indexFromObject=arrayOfNotes.indexOf(result[0])
        let removedObject=[...arrayOfNotes.splice(indexFromObject,1)]
        console.log(removedObject)
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
    // sorts by date,from newest to oldest
    const SortByDate=()=>{
        let arraySortedByDate=[...arrayOfNotes]
        arraySortedByDate.sort(function(a,b){
            var c = new Date(a.date);
            var d = new Date(b.date);
            return d-c;
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
    const publishDraft=(idForArray)=>{
        let arrayOfDrafts=[...arrayOfNotes]
        var indexOfId = arrayOfDrafts.findIndex(obj => obj.id === idForArray);
        arrayOfDrafts[indexOfId].status='published'
        setArray(arrayOfDrafts)
    }
    return(
        <div className='container'>
            <FilterSortNew 
                addNewNote={addNewNote} 
                clickedStatus={()=>showDrafrs()} 
                checkNoteStatus={NoteStatus} 
                clickedSort={()=>SortByDate()} 
                changed={e => setSort(e.target.value)}
            />
            <div className='row notes'>
                {
                    // filter function added, filter value is set to state then array is filtered based on that state
                    arrayOfNotes.filter(item => {
                    if (!filterValue) return true
                    if (item.title.toLowerCase().includes(filterValue) && item.title[0].toLowerCase() === filterValue[0]) {
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
                                                delete={()=>DeleteNote(note.id)}
                                                publish={()=>publishDraft(note.id)}
                                                publishCheck='yes'
                                            />
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
                                            delete={()=>DeleteNote(note.id)}
                                            publish={()=>publishDraft(note.id)}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default NoteList;