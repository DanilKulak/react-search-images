import axios from 'axios';

const fetchData = async (query, pageNumber) => {
  const apiKey = '40931429-8ff889ea2e193444bfa6c5882';
  const perPage = 12;
  const url = `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
    throw error;
  }
};

export { fetchData };
