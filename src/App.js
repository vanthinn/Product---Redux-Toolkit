import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header";
import MainPage from "./component/MainPage";
import Banner from "./component/Banner";
import AddProduct from "./component/AddProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Navigate replace to="/product" />} />
        <Route path="/product" element={<MainPage />}>
          <Route path="add" element={<AddProduct />} />
          <Route path=":productId" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
