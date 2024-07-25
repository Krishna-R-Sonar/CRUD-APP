import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from './actions/itemActions';

const Form = ({ currentItem, setCurrentItem }) => {
  const [item, setItem] = useState({ id: '', name: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    } else {
      setItem({ id: '', name: '' });
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id) {
      dispatch(updateItem(item));
    } else {
      dispatch(addItem({ ...item, id: Date.now().toString() }));
    }
    setItem({ id: '', name: '' });
    setCurrentItem(null);
  };

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Enter item name"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
