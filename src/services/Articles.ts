import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//Fetching all articles
const fetchArticles = async (search?: string | undefined | string[]) => {
  const urlAll = 'articulos/findAll?limit=100&offset=1';
  const urlSearch = `articulos/findAll?limit=100&offset=1&nombre=${
    search ? search : ''
  }`;
  try {
    const response = await axios.get(
      `${baseUrl}${search ? urlSearch : urlAll}`
    );

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
