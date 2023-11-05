import axios from 'axios'

export const instance = axios.create({
  baseURL: "http://localhost:1919/api",
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers here
  },
});

export const getter = async () => {
  try {
    const response = await instance.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};