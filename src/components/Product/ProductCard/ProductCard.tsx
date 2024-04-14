import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { IProduct } from "../../../redux/ducks/products/typings";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <Card
        className="product-card"
        sx={{ width: 345, height: "90%", mt: 1, mb: 1, ml: 0, mr: 0 }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={product.thumbnail}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
};
