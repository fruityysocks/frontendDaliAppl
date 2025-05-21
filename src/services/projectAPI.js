import axios from 'axios';

const API_URL = 'https://backenddaliappl.onrender.com/api';

const getUsers = async (term) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('error fetching users:', error);
    throw error;
  }
};

const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users/newUser`, user);
    return response.data;
  } catch (error) {
    console.error('error creating user:', error);
    throw error;
  }
};

const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('error fetching user:', error);
    throw error;
  }
};

const updateUser = async (user) => {
  try {
    const response = await axios.put(`${API_URL}/users/${user.id}`, user);
    return response.data;
  } catch (error) {
    console.error('error updating user:', error);
    throw error;
  }
};

const deleteUser = async ({ id }) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

const getNaps = async (term) => {
  try {
    console.log(API_URL);
    const response = await axios.get(`${API_URL}/naps`, {
      params: {
        fields: ['content', 'date'],
        term,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error fetching naps:', error);
    throw error;
  }
};

const getNap = async (napId) => {
  try {
    const response = await axios.get(`${API_URL}/naps/${napId}`);
    return response.data;
  } catch (error) {
    console.error('error getting nap:', error);
    throw error;
  }
};

const addReply = async (napId, message) => {
  try {
    const response = await axios.put(
      `${API_URL}/naps/${napId}/addReply`,
      { message },
    );
    return response.data;
  } catch (error) {
    console.error('error replying to nap:', error);
    throw error;
  }
};

export {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getNaps,
  getNap,
  addReply,
};
