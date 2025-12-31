import './BakanesCategoriesStyles.css';
import { useState } from 'react';

function BakanesCategories() {

    const [showPopup, setShowPopup] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [categoryIcon, setCategoryIcon] = useState(null);
    const [categoryColor, setCategoryColor] = useState('');
    const [categoryStatus, setCategoryStatus] = useState(false);

    const createCategory = categoryName!=='' && categoryDescription!=='' && categoryIcon!==null && categoryColor!=='';

    //Ejemplos para simular datos en la tabla

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const categoryList = [
        {id:1,name: "Foto + Descripción",icon:"/physical_therapy.svg",state:true,description:'Realizar actividad fisica al menos 30 minutos cada dia',date:'Abr 3, 2024'},
        {id:2,name: "Foto + Descripción",icon:"/physical_therapy.svg",state:true,description:'Realizar actividad fisica al menos 30 minutos cada dia',date:'Abr 3, 2024'},
        {id:3,name: "Foto + Descripción",icon:"/physical_therapy.svg",state:true,description:'Realizar actividad fisica al menos 30 minutos cada dia',date:'Abr 3, 2024'},
    ]

    const totalItems = 40;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    return(
        <div className="bakanes-categories-container">
            <div className='search-filter'>
                <input className='seach-category' type="text" placeholder='Buscar'/>
                <div style={{display:'flex'}}>
                    <img className='' src="/filter_alt.svg" alt="search" />
                    <p className='filter'>Filtros</p>
                </div>
                
                <button
                className='Create-Category-Button'
                onClick={() => setShowPopup(true)}>
                    Crear Tipo de Categoria
                </button>
            </div>

            <div className="table-responsive">
                <table className="category-table">
                <thead>
                    <tr>
                    <th>
                        Nombre de la categoría
                        <img style={{marginLeft:'10px'}} src="/unfold_more.svg" alt="" />
                    </th>
                    <th>
                        Icono de la categoría
                        <img style={{marginLeft:'10px'}} src="/unfold_more.svg" alt="" />
                    </th>
                    <th>
                        Estado
                        <img style={{marginLeft:'10px'}} src="/unfold_more.svg" alt="" />
                    </th>
                    <th>
                        Descripción
                        <img style={{marginLeft:'10px'}} src="/unfold_more.svg" alt="" />
                    </th>
                    <th>
                        Fecha de creación
                        <img style={{marginLeft:'10px'}} src="/unfold_more.svg" alt="" />
                    </th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryList.map((categoryList) => (
                    <tr key={categoryList.id}>
                        <td>
                        <div className="category-name-cell">
                            <span className="category-name">{categoryList.name}</span>
                        </div>
                        </td>
                        <td>
                        <img className='categoryIcon' src={categoryList.icon} alt="icon" />
                        </td>
                        <td>
                        <span className={`status-badge ${categoryList.state ? 'active' : 'inactive'}`}>
                            {categoryList.state? 'activo' : 'inactivo'}
                        </span>
                        </td>
                        <td className="description-cell">{categoryList.description}</td>
                        <td>{categoryList.date}</td>
                        <td>
                        <div className="action-buttons">
                            <img src="/edit.svg" alt="" />
                            <img src="/delete.svg" alt="" />
                            <img src="/join.svg" alt="" />
                        </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>


            <div className="table-footer">
                <div className="results-info">
                <span>Resultados por página</span>
                <select 
                    value={itemsPerPage} 
                    onChange={handleItemsPerPageChange}
                    className="page-select"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
                <span className="results-count">
                    {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems}
                </span>
                </div>
                
                <div className="pagination">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="page-btn"
                >
                    ←
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                    <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                    {index + 1}
                    </button>
                ))}
                
                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="page-btn"
                >
                    →
                </button>
                </div>
            </div>

            {showPopup && (
                <div className="popup" onClick={() => setShowPopup(false)}>
                <div className="popup-contain" onClick={(e) => e.stopPropagation()}>
                    <h2>Crear Categoria</h2>
                    <form className='category-form' action="">
                        <label htmlFor="category-name">Nombre de la categoría*</label>
                        <input onChange={(e)=>{setCategoryName(e.target.value)}} type="text" id="category-name" placeholder="Escriba el nombre de la buena acción" />
                        <label htmlFor="category-description">descripción de la buena acción*</label>
                        <textarea onChange={(e)=>{setCategoryDescription(e.target.value)}} id="category-description" placeholder="Agregar descripción" />
                        <label htmlFor="category-icon">Logo*</label>
                        <input onChange={(e)=>{setCategoryIcon(e.target.files[0])}} type="file" id="category-icon" placeholder="Carga Archivo" />
                        <label htmlFor="category-color">Color*</label>
                        <input onChange={(e)=>{setCategoryColor(e.target.value)}} type="text" id="category-color" placeholder="Registra color codigo HEX" />
                        <div style={{display:'flex'}}>
                            <label className="switch">
                            <input id="category-status" type="checkbox" checked={categoryStatus} onChange={(e) => setCategoryStatus(e.target.checked)} />
                            <span className="slider" />
                            </label>
                            <label style={{marginLeft:'10px'}} htmlFor="category-status">Activo</label>
                        </div>
                        
                        <div className='form-btn'>
                            <button className="close-btn" onClick={() => setShowPopup(false)}>
                            Cancelar
                            </button>
                            <button disabled={!createCategory} style={{cursor:createCategory?'pointer':'default'}} className="submit-btn" type="submit">Crear</button>

                        </div>
                        
                    </form>

                    
                </div>
                </div>
            )}
            

        </div>
    )
}

export default BakanesCategories;