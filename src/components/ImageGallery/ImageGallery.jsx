import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            largeImageUrl={image.largeImageURL}
            onImageClick={onImageClick}
          />
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
