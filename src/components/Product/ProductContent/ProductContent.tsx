import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
// import { selectProductById } from "../../redux/ducks/products/selectors";
// import { RouteParams } from "./typings";
// import { ImageCarousel } from "../../components/Product/ImageCarousel/ImageCarousel";
// import { TAppState } from "../../redux/typings";
import { IProduct } from "../../../redux/ducks/products/typings";

import "./ProductContent.scss";

interface IProductContentProps {
  product: Partial<IProduct>;
}

export const ProductContent = ({ product }: IProductContentProps) => {
  return (
    <div className="product-content">
      <Typography gutterBottom variant="h5" sx={{ flexGrow: 2 }}>
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 150 }}>
        {product.description}
      </Typography>
      <div className="product-content-footer">
        <Typography gutterBottom variant="body2" sx={{ flexGrow: 1 }}>
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          Price: {product.price}
        </Typography>
      </div>
    </div>
  );
};
