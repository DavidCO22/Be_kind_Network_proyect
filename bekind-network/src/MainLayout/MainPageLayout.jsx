import './MainPageStyles.css';
import { Outlet, NavLink } from 'react-router-dom';

function MainPageLayout() {

    const lateralBarItems = [
        { to: "/home", name: "Home", icon:'/home.svg' },
        { to: "/impact", name: "Impacto Social", icon:'/insights.svg' },
        { to: "/community", name: "Comunidad", icon:'/groups.svg' },
        { to: "/sponsors", name: "Sponsors", icon:'/attach_money.svg' },
        { to: "/marketplace", name: "Marketplace", icon:'/storefront.svg' },
        { to: "/bakanes/categories", name: "Bakanes", icon:'/workspace_premium.svg' },
        { to: "/contents", name: "Contenidos", icon:'/content.svg' },
        { to: "/ActionCategories", name: "Categorias de Acciones", icon:'/category.svg' },
    ];

    return(
        <div className="main-container">
        <nav className="main-navbar">
            <img src="Blanco.svg" alt="bekind-logo" className="main-logo" />
            <img src="Avatar.svg" alt="avatar"  className="main-avatar"/>
        </nav>

        <div className="main-content">
            <div className='column-options'>
                <img src="LateralLogo.svg" className='LateralLogo' alt="LateralLogo" />
                <aside className="lateralBar">

                    {lateralBarItems.map((item) => (
                        <NavLink
                        key={item.name} 
                        to={item.to}
                        className={({ isActive }) =>isActive ? "lateralBar-link active" : "lateralBar-link"}>
                            <img style={{marginRight:'10px'}} src={item.icon} alt="" />
                            {item.name} 
                        </NavLink>
                    ))}

                </aside>
                <NavLink to={'/'} style={{marginTop:'60px',textAlign:'center',fontWeight:'bold'}} className={({ isActive }) =>isActive ? "lateralBar-link active" : "lateralBar-link"}>
                    Cerrar sesión 
                </NavLink>
            </div>

            <div className="main-view">
                <Outlet />
            </div>
        </div>

    </div>
    )
}

export default MainPageLayout;