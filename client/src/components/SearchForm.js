import React from "react";


function SearchForm(props) {

    return (
        <>
        <form onSubmit={props.handleFormSubmit}>
            <input name="name" type="text"  placeholder="search by book" onClick={props.handleInputChange} required></input>
            <button type='submit'  >search</button>

    
        </form>

        </>
  )
}

export default SearchForm;






