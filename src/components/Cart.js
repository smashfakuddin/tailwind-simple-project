import React from 'react';

const Cart = ({ content }) => {
    const { img, name, description, price } = content;
    return (
        <div className=' menu-card'>
            <img src={img} alt="" className="h-full w-96 rounded mb-20 shadow" />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>{name}</h2>
                <p className="mb-2">{description}</p>
                <span className='mb-5'>${price}</span>
            </div>
        </div>
    );
};

export default Cart;