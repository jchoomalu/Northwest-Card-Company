import axios from 'axios'


export const instance = axios.create({
  baseURL: "http://localhost:1919/api",
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers here
  },
});

export const getFive = async () => {
  try {
    const response = await instance.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const addCard = async (form) => {
  try {
    const response = await instance.post('/admin/addcard', form);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
export const addCardImage = async (form) => {
  try {
    const response = await instance.post('/admin/addimage', form);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const signup = async (formData) => {
  try {
    const response = await instance.post('/users/signup', formData);
    return response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
