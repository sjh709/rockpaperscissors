import React from 'react';

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        className='item-img'
        src='https://www.sliceproducts.com/cdn/shop/products/10544_42f8515e-f918-4b7d-b1e8-d32ebaff0955.jpg?v=1660659479&width=1946'
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
