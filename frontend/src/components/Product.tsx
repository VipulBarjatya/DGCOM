import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Rating from "./Rating";

interface ProductProps {
  product: {
    _id: string;
    name: string;
    image: string;
    rating: number;
    numReviews: number;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className="card my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className="rounded"
          src={require(`../images/${product.image}`)}
          variant="top"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>{" "}
          </Card.Title>
        </Link>
        {/* <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
