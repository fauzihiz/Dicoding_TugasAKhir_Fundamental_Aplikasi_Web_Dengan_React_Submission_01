// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NoteList from '../../component/NoteList';

function Home ({ notes, onDelete }) {
  return (
    <div>
      <Link to='/home'>
        <h1>Personal Notes</h1>
      </Link>
        <ul>
          <NoteList notes={notes} onDelete={onDelete} />
        </ul>
      </div>
  )
};

export default Home;