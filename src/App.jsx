import React, { useState } from 'react';
import { getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
  addNote, } from '../src/utils/local-data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import pages
import Home from './pages/Home';
import Arsip from './pages/Arsip';
import NoteDetail from './pages/NoteDetail';
//import AddNote from './pages/AddNote';
//import components
import NoteList from '../component/NoteList';

function App () {
  const [notes, setNotes] = useState(getAllNotes);

  const handleDelete = (id) => {
    deleteNote(id); 
    const updatedNotes = getAllNotes(); 
    setNotes(updatedNotes);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home notes={notes} onDelete={handleDelete} />} />
          <Route path="/home" element={<Home notes={notes} onDelete={handleDelete} />} />
          <Route path="/note" element={<Home notes={notes} onDelete={handleDelete} />} />
          <Route path="/note/:id" element={<NoteDetail notes={notes} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

 /*
  return (
    <div>
      <Title />
      <Nav />
      <Search onSearch={setSearchKeyword} />
      <AddNote onAdd={addNote} />
      <NoteList
        notes={filteredNotes}
        onDelete={deleteNote}
        onArchive={toggleArchive}
      />
    </div>
  );
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home notes={notes} onDelete={deleteNote} onArchive={toggleArchive} />} />
          <Route path="/home" element={<Home notes={notes} onDelete={deleteNote} onArchive={toggleArchive} />} />
          <Route path="/arsip" element={<Arsip notes={notes} onDelete={deleteNote} onArchive={toggleArchive} />} />
          <Route path="/note/:id" element={<NoteDetail notes={notes} />} />
        </Routes>
    </Router>
  );
  */

export default App;