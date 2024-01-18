import React, { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  useEffect(() => {
    if (query) {
      fetchData(query, page);
    }
  }, [query, page]);

  const fetchData = (query, pageNumber) => {
    const apiKey = '40931429-8ff889ea2e193444bfa6c5882';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    if (loading) return;

    setLoading(true);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setPage(pageNumber);

        if (data.totalHits <= pageNumber * perPage) {
          setLoadMoreVisible(false);
        } else {
          setLoadMoreVisible(true);
        }
      })
      .catch(error => console.error('Помилка отримання даних:', error))
      .finally(() => setLoading(false));
  };

  const handleSearch = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setLoadMoreVisible(true);
    fetchData(value, 1);
  };

  const handleLoadMore = () => {
    fetchData(query, page + 1);
  };

  const handleImageClick = largeImageURL => {
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loadMoreVisible && images.length > 0 && (
        <Button onLoadMore={handleLoadMore} loading={loading} />
      )}
      {selectedImage && (
        <Modal onCloseModal={handleCloseModal} imageUrl={selectedImage} />
      )}
      {loading && <Loader />}
    </AppContainer>
  );
};

export default App;
