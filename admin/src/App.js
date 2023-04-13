import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
              <ToastContainer />

            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
  
export default App;