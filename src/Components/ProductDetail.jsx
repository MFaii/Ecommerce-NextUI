import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);
  const ShowProductDetail = () => {
    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div
        className="flex flex-wrap justify-center gap-4
      p-4"
      >
        <div className="fixedCard">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="flex flex-col justify-center gap-4 p-4 text-center">
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <Button color="primary" variant="ghost">
            Add to Cart <AiOutlineShoppingCart />
          </Button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <ShowProductDetail />
      </div>
    </>
  );
};

export default ProductDetail;
