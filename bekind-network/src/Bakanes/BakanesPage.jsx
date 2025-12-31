import './BakanesStyles.css';
import {  Outlet, NavLink,useLocation } from 'react-router-dom';

function Bakanes() {

    const location = useLocation();

    const titles = {
        "/bakanes/categories": "Categorías",
        "/bakanes/types": "Tipos",
        "/bakanes/evidences": "Evidencias"
    };

    return(

        <div className="bakanes-container">
            <h1 className="bakanes-title">{titles[location.pathname] || "Bakanes"}</h1>
            <div className="options-container">
                <NavLink 
                to="/bakanes/categories" 
                className={({ isActive }) =>isActive ? "bakanes-option active" : "bakanes-option"}>
                    Categorias
                </NavLink>
                <NavLink 
                to="/bakanes/types" 
                className={({ isActive }) =>isActive ? "bakanes-option active" : "bakanes-option"}>
                    Tipos
                </NavLink>
                <NavLink 
                to="/bakanes/evidences" 
                className={({ isActive }) =>isActive ? "bakanes-option active" : "bakanes-option"}>
                    Evidencias
                </NavLink>
            </div>
            <div className="bakanes-outlet">
                <Outlet />
            </div>
        </div>

    )
}

export default Bakanes;