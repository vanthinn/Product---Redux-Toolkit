import React from "react";
import "./ListProduct.css";
import { NavLink } from "react-router-dom";

function ListProduct(props) {
  const { products, onRemoveClick, onEditClick } = props;

  function handleonRemoveClick(product) {
    if (!onRemoveClick) return;

    console.log(product);

    onRemoveClick(product);
  }

  return (
    <div>
      {products.map((product) => (
        <ul key={product.id} className="product-item">
          <span>{product.id} &nbsp;- </span>
          <li className="product-name">{product.title}</li>
          <span>{product.price}</span>
          <button className="btn-edit btn">
            <NavLink to={`${product.id}`} className="text">
              Edit
            </NavLink>{" "}
          </button>
          <button
            className="btn-remove btn"
            onClick={() => handleonRemoveClick(product)}
          >
            {" "}
            Remove
          </button>
        </ul>
      ))}
    </div>
  );
}

ListProduct.propTypes = {};

export default ListProduct;
