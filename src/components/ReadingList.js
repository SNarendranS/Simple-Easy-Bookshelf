import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../stylings/reading.css'

const ReadingList = () => {
  const location = useLocation();
  const selectedBooks = location.state?.selectedBooks || [];
  const [readingList, setReadingList] = useState(selectedBooks);
  const [removeConfirmation, setRemoveConfirmation] = useState(null);

  const removeFromReadingList = (bookId) => {
    const confirmed = window.confirm('Are you sure you want to remove this book from the reading list?');

    if (confirmed) {
      const updatedList = readingList.filter((book) => book.id !== bookId);
      setReadingList(updatedList);
    }
  };

  return (
    <div>
      <h2>Reading List</h2>
      {readingList.length > 0 ? (
        <ul>
          {readingList.map((book) => (
            <li key={book.id}>
              {book.title}{' '}
              <button onClick={() => setRemoveConfirmation(book.id)}>Remove</button>
              {removeConfirmation === book.id && (
                <span>
                  {' '}
                  <button onClick={() => removeFromReadingList(book.id)}>Confirm</button>
                  {' '}
                  <button onClick={() => setRemoveConfirmation(null)}>Cancel</button>
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books added to the reading list.</p>
      )}
    </div>
  );
};

export default ReadingList;
