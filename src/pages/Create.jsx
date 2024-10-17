import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGuest } from "../app/api";
import '../app/createStyle.css'

const Create = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [edad,setEdad]=useState('');
   
  

    const handleSave = () =>{
        const person ={nombre:nombre,edad:edad}
        createGuest(person)
    }
    const handleReadClick = () => {
        navigate('/'); 
    };




    return (
        <div>
            <h1>Create</h1>
            <div className=''>
            <button onClick={handleReadClick} className="btn btn-success">
                            Read
                        </button>
                    <span className="input-group-text">Nombre y Edad</span>
                        <input type="text"  className="form-control" onChange={e=> setNombre(e.target.value)}></input>
                        <input type="text"  className="form-control" onChange={e=> setEdad(e.target.value)}></input>
                        <button type='button' className="btn btn-outline-warning" onClick={async () => {
                            await handleSave({ nombre });
                            navigate('/');
                        }}>Create</button>
                
            </div>
           
               </div>
    )
}

export default Create;