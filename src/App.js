import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Speakers from './pages/Speakers';
import PageSignin from './pages/Signin';
import Categories from './pages/Categories';
import CategoriesCreate from './pages/Categories/create';
import CategoriesEdit from './pages/Categories/edit';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path='/login' element={<PageSignin />} />
        <Route path='categories' element={<Categories />} />
        <Route path='categories/create' element={<CategoriesCreate />} />
        <Route
          path='categories/edit/:categoryId'
          element={<CategoriesEdit />}
        />
        <Route path='speakers' element={<Speakers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
