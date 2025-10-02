import React from 'react'
import {useParames} from 'react-router-dom'

const ItemDetails = () => {
    const {id} = useParams();
    const itemData = {
    1: { name: "Item 1", description: "Description for Item 1" },
    2: { name: "Item 2", description: "Description for Item 2" },
    3: { name: "Item 3", description: "Description for Item 3" }
  };
   const item = itemData[id];

  if (!item) {
    return <h1>Item not found</h1>;
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default ItemDetails