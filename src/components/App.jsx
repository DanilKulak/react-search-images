import React, { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchData } from '../services/pixabay-api';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  const handleSearch = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setLoadMoreVisible(true);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = largeImageURL => {
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      if (query) {
        try {
          setLoading(true);
          const data = await fetchData(query, page, setLoading, setImages, setPage, setLoadMoreVisible);
          setImages(prevImages => [...prevImages, ...data.hits]);

          // Перевіряємо, чи є додаткові зображення
          setLoadMoreVisible(data.hits.length > 0);
        } catch (error) {
          console.error('Помилка при отриманні даних:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDataAndSetState();
  }, [query, page]);

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
