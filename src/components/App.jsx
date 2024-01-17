import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    query: '',
    images: [],
    selectedImage: null,
    page: 1,
    loading: false,
  };

  handleSearch = value => {
    this.setState({
      query: value,
      images: [],
      page: 1,
    });
    this.fetchData(value, 1);
  };

  handleLoadMore = () => {
    this.fetchData(this.state.query, this.state.page + 1);
  };

  handleImageClick = largeImageURL => {
    this.setState({ selectedImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  fetchData = (query, pageNumber) => {
    const apiKey = '40931429-8ff889ea2e193444bfa6c5882';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    this.setState({ loading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: pageNumber,
        }));
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.handleImageClick}
        />
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        {this.state.selectedImage && (
          <Modal
            onCloseModal={this.handleCloseModal}
            imageUrl={this.state.selectedImage}
          />
        )}
        {this.state.loading && <Loader />}
      </AppContainer>
    );
  }
}

export default App;
