import { FC } from "react";
import { Link } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();    

    return ( 
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О странице</Link>
            <button onClick={toggleTheme}>toggle theme</button>           
            <AppRouter />  
        </div>
    );
};

export default App;