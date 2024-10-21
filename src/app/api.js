import axios from 'axios';
const instance = axios.create({ baseURL: 'https://db-lista.onrender.com/people' });

// CREATE
export const createGuest = async (obj) => await instance.post('/', obj);

// READ
export const getGuests = async () => await instance.get('');

// DELETE
export const deleteGuest = async (id) => await instance.delete('/' + id)