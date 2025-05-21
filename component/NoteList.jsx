import React from 'react';
import NoteCard from './NoteCard';

function NoteList ({ notes, onDelete }) {
  return (
    <div id='activeNote'>
      {notes.length ? (
        notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>Tidak ada catatan</p>
      )}
    </div>
  )
};

export default NoteList;