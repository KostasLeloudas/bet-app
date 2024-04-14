import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectProductById } from "../../redux/ducks/products/selectors";
import { RouteParams } from "./typings";
import { ImageCarousel } from "../../components/Product/ImageCarousel/ImageCarousel";
import { TAppState } from "../../redux/typings";

import "./ProductPage.scss";
import { ProductContent } from "../../components/Product/ProductContent/ProductContent";

export const ProductPage = () => {
  const { productId } = useParams<RouteParams>();
  const selectedProduct = useSelector((state: TAppState) =>
    selectProductById(state, +productId)
  );

  return (
    <>
      {selectedProduct && (
        <div className="product-page">
          <ImageCarousel images={selectedProduct.images!} />
          <ProductContent product={selectedProduct} />
        </div>
      )}
    </>
  );
};
