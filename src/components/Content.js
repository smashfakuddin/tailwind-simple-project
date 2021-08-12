import React from 'react';
import imageOne from '../img/imgOne.jpg';
import imageTwo from '../img/imageTwo.jpg';
import Cart from './Cart';

const contentData = [
    {
        name: 'Eggs Muffins',
        description: 'Crispy,Delicious and nutritious',
        price: '15',
        img: imageOne
    },
    {
        name: 'Eggs Salad',
        description: 'Crispy,Delicious and nutritious ',
        price: '12',
        img: imageTwo
    },
]

const Content = () => {
    return (
        <>
            {contentData.map(content => <Cart content={content} />)}
        </>
    );
};

export default Content;