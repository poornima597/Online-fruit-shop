import React, { useState, useContext } from "react";
import { CartDispatchContext, addToCart } from "contexts/cart";
import {
  ProductsStateContext
  
} from "contexts/products";
import { CommonStateContext } from "contexts/common";

const ProductCard = ({ data }) => {
  const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const { searchKeyword } = useContext(CommonStateContext);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const { image, name, price, id } = data;
  

  const productsList =
  products &&
  products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      !searchKeyword
    );
  }); 

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };


  
  return (
    <>
    
   
       
          <div className="product" key={data.id} >
            <div className="product-image">
              <img src={data.image} alt={data.name} />
            </div>
            <h4 className="product-name">{data.name}</h4>
            <p className="product-price">{data.price}</p>
            <div className="product-action">
              <button
                className={!isAdded ? "" : "added"}
                type="button"
                onClick={handleAddToCart}
              >
                {!isAdded ? "ADD TO CART" : "✔ ADDED"}
              </button>
            </div>
          </div>      
      
          
  
  
  </>
  );
};

export default ProductCard;
