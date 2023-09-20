import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

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
      return null;
    }

    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
        }}
      >
        <div className="w-1/2 p-4">
          <div
            className="w-64 h-80 mx-auto"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              maxWidth: "300px",
              maxHeight: "400px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="text-lg">Price: ${product.price}</p>
            <div className="text-lg max-h-40 overflow-y-auto">
              {product.description}
            </div>
            <div className="flex justify-center gap-4">
              <Button color="primary" variant="ghost" className="mt-4">
                Add to Cart <AiOutlineShoppingCart className="ml-2" />
              </Button>
              <Link to="/products" className="mt-4 block">
                <Button color="secondary" variant="ghost">
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <ShowProductDetail />;
};

export default ProductDetail;
