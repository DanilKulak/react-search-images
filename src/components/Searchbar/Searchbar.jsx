import React, { useState } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <span className="button-label">Search</span>
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form>
    </Header>
  );
};

export default Searchbar;
