import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchPagos = async (pasarelaId: number, carritoId: number) => {
  const url = `pago-mercadopago/create-order/${pasarelaId}/${carritoId}`;
  try {
    const response = await axios.post(`${baseUrl}${url}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { fetchPagos };
