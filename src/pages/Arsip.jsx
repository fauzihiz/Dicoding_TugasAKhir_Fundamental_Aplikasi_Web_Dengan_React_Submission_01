// src/pages/Arsip.jsx
import React from 'react';
import NoteList from '../../component/NoteList';

function Arsip ({ notes }) {
  return (
    <div>
        <h1>Personal Notes</h1>
        <ul>
          <NoteList notes={notes}/>
        </ul>
      </div>
  )
};

export default Arsip;
