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
        <div className='text-right'>
            <button id="myBtn" className='btn btn-success' onClick={()=>showModal()}>New Note</button>
            <div id="myModal" className="modal text-center" style={style}>
                <div className="modal-content">
                    <span className="close" onClick={()=>closeModal()}>&times;</span>
                    <div>
                        <input id='newtitle' placeholder='title'></input>
                        <br/>
                        <input id='newtext' placeholder='text'></input>
                        <br/>
                        <input id='newauthor' placeholder='author'></input>
                        <br/>
                        <select name="list" id="noteStatus">
                            <option value="published">publish</option>
                            <option value="draft">save as draft</option>
                         </select>
                        <button  onClick={props.addNewNote}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNote;