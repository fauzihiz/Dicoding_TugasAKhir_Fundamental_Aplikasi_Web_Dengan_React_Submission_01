// src/pages/NoteDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';

const NoteDetail = ({ notes }) => {
  const { id } = useParams();
  //const note = notes.find(n => n.id.toString() === id);
  const note = notes.find(n => n.id === id);

  if (!note) return <p>Catatan tidak ditemukan</p>;

  return (
    <div>
      <h2>{note.title}</h2>
      <small>{showFormattedDate(note.createdAt)}</small>
      <p>{note.body}</p>
    </div>
  );
};

export default NoteDetail;
