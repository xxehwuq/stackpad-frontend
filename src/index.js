import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Notebooks from './pages/notebooks/Notebooks';
import Notebook from './pages/notebooks/Notebook';
import './styles/main.sass'
import Note from './pages/note/Note';
import Bookmarks from './pages/bookmarks/Bookmarks';
import SignUp from './pages/user/SignUp';
import LayoutCenter from './components/layout/LayoutCenter';
import SignOut from './pages/user/SignOut';
import Confirm from './pages/user/Confirm';
import SignIn from './pages/user/SignIn';
import NotePrint from './pages/note/NotePrint';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/u/print/:noteId' element={<NotePrint/>}/>
          <Route path='/u' element={<Layout/>}>
            <Route path='notebooks' element={<Notebooks/>}/>
            <Route path='notebooks/:notebookId' element={<Notebook/>}/>
            <Route path='notebooks/:notebookId/:noteId' element={<Note/>}/>
            <Route path='bookmarks' element={<Bookmarks/>}/>
            <Route path='user/sign-out' element={<SignOut/>}/>
            <Route path='user/confirm' element={<Confirm/>}/>
          </Route> 
          <Route path='' element={<LayoutCenter/>}>
            <Route path='' element={<SignIn/>}/>
            <Route path='sign-up' element={<SignUp/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
