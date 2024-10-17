import { useEffect, useState } from 'react';
import { getGuests, deleteGuest } from '../app/api';
import {useNavigate} from 'react-router-dom';
import '../app/estiloRead.css';

const Read = () => {
    const [guests, setGuests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGuests = async () => {
            const response = await getGuests();
            setGuests(response.data);
            console.log(response.data);
        };
        fetchGuests();
    }, []);

    const handleDelete = async (id) => {
        await deleteGuest(id); 
        setGuests((prevGuests) => prevGuests.filter(people=> people.id !== id))
    };
    
    const handleReadClick = () => {
        navigate('.'); 
    };

    const handleCreateClick = () => {
        navigate('/create'); 
    };

    return (
        <div className='baackgroind'>
            <h1 className='titulo'>Read</h1>
            <button onClick={handleReadClick} className="btn btn-success">
                            Read
                        </button>
                  
                    
                        <button onClick={handleCreateClick} className="btn btn-warning">
                            Create
                        </button>
            <div className="grid-container">
                {guests.map((people) => (
                    <div key={people.id} className="card">
                        <h6 className="card-title">{people.nombre}</h6>
                        <p>ID: {people.id}</p>
                        <p>EDAD: {people.edad}</p>
                        <button 
                            className='btn btn-outline-danger' 
                            onClick={async () => {
                                await handleDelete(people.id); 
                            }}>Delete</button>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default Read;
