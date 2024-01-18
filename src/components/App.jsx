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
  const [hasMore, setHasMore] = useState(true);

  const handleSearch = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = largeImageURL => {
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      if (query && hasMore) {
        try {
          setLoading(true);
          const data = await fetchData(query, page);
          setImages(prevImages => [...prevImages, ...data.hits]);

          // Перевірка, чи відповідь містить останні зображення
          setHasMore(data.hits.length === 12); // Припустимо, що 12 - максимальна кількість зображень на сторінці
        } catch (error) {
          console.error('Помилка при отриманні даних:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDataAndSetState();
  }, [query, page, hasMore]);

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !loading && hasMore && (
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
