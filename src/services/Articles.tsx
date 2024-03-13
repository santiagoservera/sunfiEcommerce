import axios from 'axios';

const apiUrl = 'https://ecommerce-suinfi-production.up.railway.app/api/v1/articulos/findAll?limit=100&offset=1';


//Fetching all articles
const fetchArticles = async () => {
  try {
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchArticles;