import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../dataStore/api';
import { useNavigate } from 'react-router-dom';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooksData = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };

    fetchBooksData();
  }, []);

  const addToReadingList = (book) => {
    setSelectedBooks([...selectedBooks, book]);
    window.alert(`${book.title} is added to your reading list`)
  };

  const viewReadingList = () => {
    navigate('/readlist', { state: { selectedBooks } });
  };

  return (
    <div>
      <h2 className="h2">Books List</h2>
      <button onClick={viewReadingList}>View Reading List</button>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <p>{book.description}</p>
            <button className="button" onClick={() => addToReadingList(book)}>Add to Reading List</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BooksList;
