import { Button, Link } from "@nextui-org/react";
import React from "react";

const Landing = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://lowpostactive.com/wp-content/uploads/2019/07/Startups-moda-1.jpg"
        className="w-full h-full object-cover"
        alt="Background"
        style={{
          zIndex: "-1",
          filter: "blur(5px)",
          WebkitFilter: "blur(3px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-5xl font-semibold bg-opacity-70 bg-black">
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "50px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          new collection
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "20px",
            letterSpacing: "2px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Discover the latest trends
        </p>
        <Button
          variant="shadow"
          as={Link}
          href="/products"
          size="lg"
          auto
          className="font-bold text-2xl uppercase text-white bg-black border border-white hover:bg-white hover:text-black"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Landing;
