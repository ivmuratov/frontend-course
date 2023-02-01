import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.async";
import AboutPage from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import './styles/index.scss';
import { classNames } from "./helpers/classNames/classNames";

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();    

    return ( 
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О странице</Link>
            <button onClick={toggleTheme}>toggle theme</button>
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