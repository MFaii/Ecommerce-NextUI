import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState(data);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        const responseData = await response.json();
        setData(responseData);
        setFilter(responseData);
        localStorage.setItem("products", JSON.stringify(responseData));
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonGroup className="flex flex-wrap justify-center gap-4">
            <Button variant="faded" onClick={() => setFilter(data)}>
              All
            </Button>
            <Button
              variant="faded"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </Button>
            <Button
              variant="faded"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </Button>
            <Button variant="faded" onClick={() => filterProduct("jewelery")}>
              Jewelery
            </Button>
            <Button
              variant="faded"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </Button>
          </ButtonGroup>
        </div>
        <br />
        <div className="cardContainer">
          {filter.map((item, index) => (
            <NavLink to={`/products/${item.id}`} key={item.id}>
              <Card
                shadow="sm"
                isPressable
                // onPress={() => console.log("item pressed")}
                className="fixedCard"
              >
                <CardBody className="flex flex-col justify-center items-center ">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={"300px"}
                    height={"200px"}
                  />
                </CardBody>
                <CardFooter className="text-small text-center flex justify-center items-center gap-2">
                  <b>{item.title}</b>
                  <p className="text-default-500">${item.price}</p>
                </CardFooter>
              </Card>
            </NavLink>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4 p-4">
      <div className="flex justify-center">
        <h1 style={{ fontSize: "50px" }}>Latest Products</h1>
      </div>
      <div>
        <ShowProducts />
      </div>
    </section>
  );
};

export default Products;
