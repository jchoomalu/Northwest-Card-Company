import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:1919/api",
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers here
  },
});

export const verify = async (token) => {
  const response = await instance.get("/users/verify", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return response
};

export const createUser = async (formData) => {
  const response = await instance.post("/users/signup", formData);
  return response;
};

export const loginUser = async (formData) => {
  const response = await instance.post("/users/signin", formData);
  return response;
};
