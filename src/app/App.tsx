import { FC } from "react";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/Navbar";

const App: FC = () => {
    const { theme } = useTheme();    

    return ( 
        <div className={classNames('app', {}, [theme])}>
            <NavBar />                 
            <AppRouter />  
        </div>
    );
};

export default App;