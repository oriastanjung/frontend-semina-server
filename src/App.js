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
import EventsCreate from './pages/Events/create';
import EventsEdit from './pages/Events/edit';
import Transactions from './pages/Transactions';
import Logout from './pages/Logout';
import { listen } from './redux/listener';
import PaymentsPage from './pages/Payments';
import PaymentsCreate from './pages/Payments/create';
import PaymentsEdit from './pages/Payments/edit';

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
        <Route path='events/create' element={<EventsCreate />} />
        <Route path='events/edit/:eventId' element={<EventsEdit />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='logout' element={<Logout />} />
        <Route path='payments' element={<PaymentsPage />} />
        <Route path='payments/create' element={<PaymentsCreate />} />
        <Route path='payments/edit/:paymentsId' element={<PaymentsEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
