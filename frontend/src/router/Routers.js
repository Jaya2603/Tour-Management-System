// src/router/Routers.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import GalleryPage from './../pages/GalleryPage';
import About from './../pages/About'; 
import MyBookings from "../components/Booking/MyBookings";
import Login from './../pages/Login';
import Register from '../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/About' element={<About />} /> 
      <Route path="/booking/my-bookings" element={<MyBookings />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/tours/search' element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
