import { useEffect } from "react";
import "./App.css";
import Counter from "./components/counter";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductAct } from "./redux/features/product/productSlice";
import { Spin } from "antd";

function App() {
  const { products, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductAct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderProducts = (products) => {
    return products.map((productItem) => {
      return (
        <div key={productItem?.id} className="product-item">
          <img
            className="product-item__img"
            alt="#"
            src={productItem?.imgUrl}
          />
          <div className="product-item__name">{productItem?.productName}</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <Counter />
      <h1>Products</h1>
      <div className="product-container">
        {isLoading && <Spin />}
        {renderProducts(products)}
      </div>
    </div>
  );
}

export default App;
