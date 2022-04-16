import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Speakers from './pages/Speakers';
import SpeakersCreate from './pages/Speakers/create';
import SpeakersEdit from './pages/Speakers/edit';
import PageSignin from './pages/Signin';
import Categories from './pages/Categories';
import CategoriesCreate from './pages/Categories/create';
import CategoriesEdit from './pages/Categories/edit';
import Events from './pages/Events';
import { listen } from './redux/listener';

function App() {
  React.useEffect(() => {
    listen();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path='login' element={<PageSignin />} />
        <Route path='categories' element={<Categories />} />
        <Route path='categories/create' element={<CategoriesCreate />} />
        <Route
          path='categories/edit/:categoryId'
          element={<CategoriesEdit />}
        />
        <Route path='speakers' element={<Speakers />} />
        <Route path='speakers/create' element={<SpeakersCreate />} />
        <Route path='speakers/edit/:speakerId' element={<SpeakersEdit />} />
        <Route path='events' element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
