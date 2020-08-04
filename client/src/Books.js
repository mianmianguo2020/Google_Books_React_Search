import React from "react";
import API from "./utils/API";
import { useState, useEffect } from "react";

function SearchBooks(props) {
    const [books, setBooks] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const searchTerm = event.target.name.value
        API.queryForBooks(searchTerm)
            .then(res => res.data.items)
            .then(items => {

                const booksDetail = items.map(book => {
                    let authors = ''
                    if (book.volumeInfo.authors) {
                        authors = book.volumeInfo.authors.join(' and ')
                    }
                    return {
                        bookId: book.id,
                        title: book.volumeInfo.title,
                        subtitle: book.volumeInfo.subtitle,
                        description: book.volumeInfo.description,
                        authors: authors,
                        imageURL: book.volumeInfo.imageLinks.smallThumbnail
                    }
                })

                setBooks(booksDetail);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <SearchForm handleFormSubmit={handleFormSubmit} />
            <BookList books={books} />
        </div>
    )
}

function SearchForm(props) {
    return (
        <div>
            <h1>Book Search</h1>
            <form onSubmit={props.handleFormSubmit}>
                <div><label htmlFor="name">Book</label></div>
                <input name="name" type="text" placeholder="search by book" required></input>
                <div><button type='submit'  >search</button></div>
            </form>
        </div>
    )
}

function BookList(props) {
    const books = props.books;

    const renderBookDetail = (book) => {
        if (book) return <BookDetail key={book.bookId} book={book} fromSaved={props.fromSaved}/>
    }

    return (
        <div>
            {books.map(book => renderBookDetail(book))}
        </div>
    )
}

function BookDetail(props) {
    const book = props.book;
    const container = {
        border: '2px solid black',
        padding: 5
    }
    const header = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    const content = {
        display: 'flex'
    }

    const handleSave = () => {
        API.createPosts(book);
    }

    const handleDelete = () => {
        API.deletePosts(book.bookId);
    }

    const renderSaveButton = () => <button onClick={handleSave}>Save</button>
    const renderDeleteButton = () => <button onClick={handleDelete}>Delete</button>
    const secondButton = props.fromSaved ? renderDeleteButton() : renderSaveButton()
    return (
        <div style={container}>
            <div style={header}>
                <div>
                    <div>{book.title}</div>
                    <div>{book.subtitle}</div>
                    <div>{book.authors ? `Written by ${book.authors}` : null}</div>
                    <div>{book.bookId}</div>
                </div>
                <div>
                    <button>View</button>
                    {secondButton}
                </div>
            </div>
            <div style={content}>
                <div><img src={book.imageURL} alt='Not available' /></div>
                <div>{book.description}</div>
            </div>
            
        </div>
    )
}

function SavedBooks(props) {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        API.getPosts().then(res => setBooks(res.data))
    }, [])
    return (
        <div>
            <h1>Saved Books</h1>
            <BookList books={books} fromSaved={true}/>
        </div>
    )
}

export { SearchBooks, SavedBooks };
