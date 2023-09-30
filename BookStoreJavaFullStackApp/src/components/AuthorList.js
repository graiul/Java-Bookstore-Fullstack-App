// src/components/AuthorList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AuthorList() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/authors')
            .then(response => {
                setAuthors(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Authors</h1>
            <ul>
                {authors.map(author => (
                    <li key={author.id}>{author.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AuthorList;
