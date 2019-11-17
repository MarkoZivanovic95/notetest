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
                    <form>
                        <input className='inputFieldForNewModal' id='newtitle' placeholder='title'></input>
                        <br/>
                        <textarea className='inputFieldForNewModal' id='newtext' placeholder='text'></textarea>
                        <br/>
                        <input className='inputFieldForNewModal' id='newauthor' placeholder='author'></input>
                        <br/>
                        <select name="list" id="noteStatus">
                            <option value="published">publish</option>
                            <option value="draft">save as draft</option>
                         </select>
                        <button type='button' className='submitStatus' onClick={props.addNewNote}>Add note</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewNote;