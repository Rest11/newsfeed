import React                  from 'react';
import './App.css';
import { Footer }             from './app/components/Footer/Footer';
import { Header }             from './app/components/Header/Header';
import { HomePage }           from './app/pages/HomePage';
import { LoginPage }          from './app/pages/LoginPage';
import { Route, Routes }      from 'react-router-dom';
import { AboutPage }          from './app/pages/AboutPage';
import { NotFoundPage }       from './app/pages/NotFoundPage';
import { FilteredNews }       from './app/components/News/FilteredNews';
import { SinglePage } from './app/pages/SinglePage';
import { EditNewsPage } from './app/pages/EditNewsPage';
import RegistrationPage from './app/pages/RegistrationPage';
import { CreateNewsPage } from './app/pages/CreateNewsPage';

const App = () => {
  return (
    <>
    <Header/>
    {/* <HomePage/>
    <LoginPage/> */}
    <Footer/>
    <Routes>
      <Route path = '/' element      = {<HomePage/>}/>
      <Route path = '/about' element = {<AboutPage/>}/>
      <Route path = '/login' element  = {<LoginPage/>}/>
      <Route path = 'news/sort/:tag' element  = {<FilteredNews/>}/>
      <Route path = '/news/:id' element  = {<SinglePage/>}/>
      <Route path = '/sign-up' element  = {<RegistrationPage/>}/>
      <Route path = '/news/:id/edit' element  = {<EditNewsPage/>}/>
      <Route path = '/add_news' element  = {<CreateNewsPage/>}/>
      <Route path = '*' element      = {<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;
