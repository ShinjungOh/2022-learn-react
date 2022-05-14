import './app.module.css';
import styles from './app.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({authService}) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                           element={<Login authService={authService}/>}>
                    </Route>
                    <Route path="/maker"
                           element={<Maker authService={authService}/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
