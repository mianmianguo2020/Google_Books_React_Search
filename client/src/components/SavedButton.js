import React from "react";


function SavedButton(props) {

    return (
        <>
        <form onSubmit={props.handleFormSubmit}>
            <input name="saved" type="text"  placeholder="search by book" onClick={props.handleInputChange} required></input>
            <button type='submit'  >search</button>

    
        </form>

        </>
  )
}

export default SavedButton;






