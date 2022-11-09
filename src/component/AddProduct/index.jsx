import React, { useState } from "react";
import "./Addproduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../MainPage/productSlice";
import { useNavigate, useParams } from "react-router-dom";

function AddProduct(props) {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === Number(productId))
  );

  const isEditmode = product;

  const [nameProduct, setnameProduct] = useState(() => {
    var initial = product ? product.title : "";
    return initial;
  });

  const [priceProduct, setpriceProduct] = useState(() => {
    var initial = product ? product.price : "";
    return initial;
  });

  const randomNumber = (min, max) => {
    return min + Math.trunc(Math.random() * (max - min));
  };

  function handleonClick() {
    if (!isEditmode) {
      const newProduct = {
        id: randomNumber(1, 100),
        title: nameProduct,
        price: priceProduct,
      };

      const action = addProduct(newProduct);
      dispatch(action);
    } else {
      const newProduct = {
        ...product,
        title: nameProduct,
        price: priceProduct,
      };
      const action = updateProduct(newProduct);
      dispatch(action);
    }

    navigate("..");
  }

  function handleonChangeName(event) {
    setnameProduct(event.target.value);
  }

  function handleonChangePrice(event) {
    setpriceProduct(event.target.value);
  }
  return (
    <div className="info-product">
      <div className="form-group">
        <label>Name Product:</label>
        <input
          type="text"
          value={nameProduct}
          className="info-name"
          placeholder="Ex: TV,Tủ Lạnh..."
          onChange={(event) => handleonChangeName(event)}
        />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input
          type="text"
          value={priceProduct}
          className="info-price"
          placeholder="Ex: 1000000,2000"
          onChange={(event) => handleonChangePrice(event)}
        />
      </div>
      <button className="btn-submit" onClick={() => handleonClick()}>
        Submit
      </button>
    </div>
  );
}

AddProduct.propTypes = {};

export default AddProduct;
