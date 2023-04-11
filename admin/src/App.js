import React from 'react';
import Header from './components/Template/Header';
import Footer from './components/Template/Footer';
import { Outlet } from 'react-router-dom';
function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
  
export default App;