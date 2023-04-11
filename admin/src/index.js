import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import App from './App';
import './App.css';
import Addexam from './components/pages/Addexam';
import Addsubject from './components/pages/Addsubject';
import Addunit from './components/pages/Addunit';
import Addchapter from './components/pages/Addchapter';
import Addvideo from './components/pages/Addvideo';
import Detail from './components/pages/Detail';
import Formone from './components/pages/Formone';
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='add-exam' element={<Addexam />} />
                <Route path='add-subject' element={<Addsubject />} />
                <Route path='add-unit' element={<Addunit />} />
                <Route path='add-chapter' element={<Addchapter />} />
                <Route path='add-video' element={<Addvideo />} />
                <Route path='form-one' element={<Formone />} />
               
                <Route path='detail' element={<Detail />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

