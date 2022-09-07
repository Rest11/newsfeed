import React                  from 'react';
import './App.css';
import { Footer }             from './app/components/Footer/Footer';
import { Header }             from './app/components/Header/Header';
import { HomePage }           from './app/pages/HomePage';
import { LoginPage }          from './app/pages/LoginPage';
import { Route, Routes,Link }      from 'react-router-dom';
import { AboutPage }          from './app/pages/AboutPage';
import { NotFoundPage }       from './app/pages/NotFoundPage';
import { FilteredNews }       from './app/components/News/FilteredNews';

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
      <Route path = 'login' element  = {<LoginPage/>}/>
      <Route path = '/news' element  = {<FilteredNews/>}/>
      <Route path = '*' element      = {<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;
