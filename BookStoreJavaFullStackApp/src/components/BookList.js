// src/components/BookList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(response => {
                setBooks(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title} by {book.author.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
