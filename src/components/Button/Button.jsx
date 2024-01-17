import React from 'react';
import { LoadMoreButton } from './Button.styled';

const Button = ({ onLoadMore }) => {
  return (
    <LoadMoreButton onClick={onLoadMore}>
      Load more
    </LoadMoreButton>
  );
};

export default Button;
