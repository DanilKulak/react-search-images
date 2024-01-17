import React, { Component } from 'react';
import { LoadMoreButton } from './Button.styled';

class Button extends Component {
  render() {
    const { onLoadMore } = this.props;
    return (
      <LoadMoreButton onClick={onLoadMore}>
        Load more
      </LoadMoreButton>
    );
  }
}

export default Button;
