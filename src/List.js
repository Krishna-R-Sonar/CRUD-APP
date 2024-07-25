import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from './actions/itemActions';

const List = ({ setCurrentItem }) => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
