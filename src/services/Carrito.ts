import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//Fetching all carts
const fetchCart = async () => {
  const url = 'carrito/findAll';
  try {
    const response = await axios.get(`${baseUrl}${url}`);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Fetching one cart
const fetchOneCart = async (id: string) => {
  const url = `carrito/findOne/${id}`;
  try {
    const response = await axios.get(`${baseUrl}${url}`);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { fetchCart, fetchOneCart };

//Create a new cart
const createCart = async (data: any) => {
  const url = 'carrito/';
  try {
    const response = await axios.post(`${baseUrl}${url}`, data);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Update a cart
const updateCart = async (id: string, data: any) => {
  const url = `carrito/${id}`;
  try {
    const response = await axios.put(`${baseUrl}${url}`, data);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Delete a cart
const deleteCart = async (id: string) => {
  const url = `carrito/${id}`;
  try {
    const response = await axios.delete(`${baseUrl}${url}`);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { createCart, updateCart, deleteCart };

//Add a product to a cart
const addProductToCart = async (carritoId: string, data: any) => {
  const url = `addItem/${carritoId}`;
  try {
    const response = await axios.put(`${baseUrl}${url}`, data);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Remove a product from a cart
const removeProductFromCart = async (carritoId: string, articuloId: string) => {
  const url = `subItem/${carritoId}/${articuloId}`;
  try {
    const response = await axios.put(`${baseUrl}${url}`);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { addProductToCart, removeProductFromCart };
