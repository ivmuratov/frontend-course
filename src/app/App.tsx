import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

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