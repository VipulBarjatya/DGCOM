import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import { RootState } from "../store";

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  rating: number;
  numReviews: number;
  price: number;
}

const Homescreen = () => {
  const dispatch: any = useDispatch();

  const productList = useSelector((state: RootState) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading... </h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product: IProduct) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homescreen;
