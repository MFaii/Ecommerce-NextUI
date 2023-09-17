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
    return (
      <div className="flex flex-wrap justify-center items-center h-screen">
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
          <NavLink to="/products">
            <Button color="secondary" variant="ghost">
              Back to Products
            </Button>
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <>
      <ShowProductDetail />
    </>
  );
};

export default ProductDetail;
