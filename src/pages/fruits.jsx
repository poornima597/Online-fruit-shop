import React, { useEffect, useContext,useState} from "react";
import ProductCard from "components/Product";
import {
  ProductsStateContext,
  ProductsDispatchContext,
  getProducts
} from "contexts/products";
import { CommonStateContext } from "contexts/common";

const Fruits = (data) => {
  const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const { image, name, price, id } = data;
  const { searchKeyword } = useContext(CommonStateContext);
  const dispatch = useContext(ProductsDispatchContext);

  const [count, setCount] = useState(4);  
  const productsList =
    products &&
    products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        !searchKeyword
      );
    });

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  if (isLoading) {
    return (
      <div className="products-wrapper">
        <h1>Loading...</h1>
      </div>
    );
  }
  const loadMore = () => {
    setCount(count + 4);
  }
  return (
    <div className="products-wrapper">
      <div className="products">
        {isLoaded &&
          productsList.slice(0, count).map((data) => {
            return <ProductCard key={data.id} data={data} />;
          })}
      </div>
      <div className="text-center w-100">      
      <button onClick={() => loadMore()} type="button" className="load-more">Load more</button>     
  </div>
    </div>
  );
};

export default Fruits;
