import React from 'react';
import { nanoid } from 'nanoid';

function List(items=[]) {
  return (
    <ul>
      {Object.entries(items).map((key, value) => (<li key={nanoid()}>{key}: {value}</li>))}
    </ul>
  )
}

export default List