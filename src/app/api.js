import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/people' });

// CREATE
export const createGuest = async (obj) => await instance.post('/', obj);

// READ
export const getGuests = async () => await instance.get('');

// DELETE
export const deleteGuest = async (id) => await instance.delete('/' + id)