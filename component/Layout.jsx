// src/components/Layout.jsx
import React from 'react';
import Nav from './Nav';
import Search from './Search';
import AddNote from './Add';

const Layout = ({ children, onAdd }) => (
  <div>
    <Nav />
    <Search onSearch={() => {}} />
    <AddNote onAdd={onAdd} />
    {children}
  </div>
);

export default Layout;
