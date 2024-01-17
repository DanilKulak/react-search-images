import React from 'react';
import { GalleryItem, GalleryItemImage } from '../ImageGallery/ImageGallery.styled';

const ImageGalleryItem = ({ imageUrl, largeImageUrl, onImageClick }) => {
  return (
    <GalleryItem onClick={() => onImageClick(largeImageUrl)}>
      <GalleryItemImage src={imageUrl} alt="photo" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

