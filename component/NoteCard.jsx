import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../src/utils/index';

function NoteCard ({ note, onDelete }) {
  return (
    <div id='noteCard'>
      <Link to={"/note/" + note.id}>
        <h3>{note.title}</h3>
      </Link>
      <small>{showFormattedDate(note.createdAt)}</small>
      <p>{note.body}</p>
      <br />
      <button id='buttonHapus' onClick={() => onDelete(note.id)}>Hapus</button>
      <button id='buttonArsip' onClick={() => onArchive(note.id)}>
        {note.archived ? 'Kembalikan' : 'Arsipkan'}
      </button>
    </div>
  )
};

export default NoteCard;