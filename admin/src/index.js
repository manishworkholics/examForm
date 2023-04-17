import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import App from './App';
import './App.css';
import Addexam from './pages/Addexam';
import Addsubject from './pages/Addsubject';
import Addunit from './pages/Addunit';
import Addchapter from './pages/Addchapter';
import Addvideo from './pages/Addvideo';
import Detail from './pages/Detail';
import Formone from './pages/Formone';
import Formtwo from './pages/Formtwo';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import StudentRegistration from './pages/StudentRegistration'
import Editmovies from './pages/Editmovies';
import Editmember from './pages/Editmember';
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='subscription' element={<Addexam />} />
                <Route path='users-management' element={<Addsubject />} />
                <Route path='add-unit' element={<Addunit />} />
                <Route path='add-chapter' element={<Addchapter />} />
                <Route path='add-video' element={<Addvideo />} />
                <Route path='form-one' element={<Formone />} />
                <Route path='form-two' element={<Formtwo />} />
                <Route path='detail' element={<Detail />} />
                <Route path='login' element={<Login />} />
                <Route path='edit-movies' element={<Editmovies />} />
                <Route path='edit-member' element={<Editmember />} />
                <Route path='forgetpassword' element={<ForgetPassword />} />
                <Route path='studentRegistration' element={<StudentRegistration />} />
                {/* <Route path="dashboard" element={<Dashboard/>} */}
            </Route>
           
        </Routes>
    </BrowserRouter>
);

