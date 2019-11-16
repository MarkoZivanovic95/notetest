import React, { useState } from 'react';
import './NewNote.css'

const NewNote=(props)=>{
    var [style, setStyle] = useState({display:'none'});
    const showModal=()=>{
        setStyle({display:'block'})
    }
    const closeModal=()=>{
        setStyle({display:'none'})
    }
    return(
        <div>
            <button>New Note</button>
            <button id="myBtn" onClick={()=>showModal()}>Open Modal</button>
            <div id="myModal" class="modal" style={style}>
                <div class="modal-content">
                    <span class="close" onClick={()=>closeModal()}>&times;</span>
                    <div>
                        <input id='newtitle' placeholder='title'></input>
                        <input id='newtext' placeholder='text'></input>
                        <input id='newauthor' placeholder='author'></input>
                        <select name="list" id="noteStatus">
                            <option value="published">publish</option>
                            <option value="draft">draft</option>
                         </select>
                        <button  onClick={props.addNewNote}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNote;