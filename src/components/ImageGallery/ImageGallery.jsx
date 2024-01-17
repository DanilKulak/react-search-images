import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          largeImageUrl={image.largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;
