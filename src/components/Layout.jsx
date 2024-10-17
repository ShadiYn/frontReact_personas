import { useNavigate } from 'react-router-dom';
import '../app/layoutstyle.css';

const Layout = ({ children }) => {
    const navigate = useNavigate(); // Llama a useNavigate correctamente

    const handleReadClick = () => {
        navigate('.'); // Navega a la ruta actual
    };

    const handleCreateClick = () => {
        navigate('/create'); // Navega a la ruta de creación
    };

    return (
        <div>
            <div className='posicionBotones'>
              
                    
                        <button onClick={handleReadClick} className="btn btn-outline-success">
                            Read
                        </button>
                  
                    
                        <button onClick={handleCreateClick} className="btn btn-outline-warning">
                            Create
                        </button>
                   
                
            </div>
            {children}
        </div>
    );
};

export default Layout;
