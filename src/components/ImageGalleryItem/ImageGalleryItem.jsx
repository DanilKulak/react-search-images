import React, { Component } from 'react';
import { GalleryItem, GalleryItemImage } from '../ImageGallery/ImageGallery.styled'

class ImageGalleryItem extends Component {
  render() {
    const { imageUrl, largeImageUrl, onImageClick } = this.props;
    return (
      <GalleryItem onClick={() => onImageClick(largeImageUrl)}>
        <GalleryItemImage src={imageUrl} alt="photo" />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
