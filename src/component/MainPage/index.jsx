import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListProduct from "../ListProduct";
import "./MainPage.css";
import { removeProduct } from "./productSlice";

import { NavLink, Outlet, useParams } from "react-router-dom";

function MainPage(props) {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) => state.products);

  function handleonRemoveClick(product) {
    const removeProductId = product.id;
    const action = removeProduct(removeProductId);
    dispatch(action);
  }

  function handleonEditClick(product) {}
  return (
    <div>
      <h1>List product</h1>

      <ListProduct
        products={products}
        onRemoveClick={handleonRemoveClick}
        onEditClick={handleonEditClick}
      />
      <div className="margin-top">
        <NavLink to="add" className="btn-add">
          {productId ? "Edit" : "New"} product
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
