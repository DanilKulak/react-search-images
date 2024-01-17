import React from 'react';
import { LoadMoreButton } from './Button.styled';

const Button = ({ onLoadMore, loading }) => {
  return (
    <LoadMoreButton onClick={onLoadMore} disabled={loading}>
      Load more
    </LoadMoreButton>
  );
};

export default Button;