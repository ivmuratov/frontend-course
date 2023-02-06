import { FC } from "react";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App: FC = () => {
    const { theme } = useTheme();    

    return ( 
        <div className={classNames('app', {}, [theme])}>
            <NavBar />                 
            <div className="content-page">
                <Sidebar />
                <AppRouter />  
            </div>
        </div>
    );
};

export default App;