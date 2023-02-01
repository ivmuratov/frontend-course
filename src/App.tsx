import { FC, Suspense } from "react";
import './App.scss';
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.async";
import AboutPage from "./pages/AboutPage/AboutPage.async";

const App: FC = () => {
    return ( 
        <div className='app'>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О странице</Link>
            <Suspense fallback={<div>... loading</div>}>
                <Routes>                
                    <Route index element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />                        
                </Routes>
            </Suspense>       
        </div>
    );
};

export default App;