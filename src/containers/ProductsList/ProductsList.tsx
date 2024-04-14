import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';

import { selectProducts } from '../../redux/ducks/products/selectors';
import { ProductCard } from '../../components/Product/ProductCard/ProductCard';
import { responsive } from './configs';

import 'react-multi-carousel/lib/styles.css';
import './ProductsList.scss';

export const ProductsList = () => {
  const productsArr = useSelector( selectProducts );
  return (
    <Carousel responsive={responsive} className="products-list">
      {productsArr.map( ( product ) => (
        <ProductCard key={product.id} product={product} />
      ) )}
    </Carousel>
  );
};
