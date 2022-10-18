import React, { useEffect, useState, createContext } from "react";
import NavBar from "../component/navbar/Navbar";
import "./css/Products.css";

import Item from "../component/cart/Item";
import Footer from "../component/footer/Footer";


export interface productsProps {
  id: number;
  image?: string;
  title: string;
  price: number;
  group: string;
  amount: number;
  description: string;

}

export const DataContext = createContext<Array<productsProps>>([]);

export default function Products() {
  const [data, setData] = useState<Array<productsProps>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredResult, setfilteredResult] = useState<Array<productsProps>>(
    []
  );


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/Priya-Pdh/ClothesAPI/Data"
        );
        const productsList = await response.json();

        setData(productsList);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="productLoading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ErrorFetching">
        <p>Error fetching data!!</p>
      </div>
    );
  }

  //filter function for category section
  const filterResult = (groupItem: string, data: productsProps[]) => {
    const allData = data;
    setIsFiltered(true);

    const result = allData.filter((curData) => {
      return curData.group === groupItem;
    });
    setfilteredResult(result);
    console.log(filteredResult);
  };

  const clearFilterResult = () => {
    setIsFiltered(false);
  };

  const productContent = () => {
    if (isFiltered) {
      return filteredResult.map((items) => (
        <Item key={items.id} item={items} />
      ));
    } else {
      return data.map((items) => (
        <Item key={items.id} item={items} />
      ));
    }
  };

  return (
    <>
      <NavBar />
      <div className="main-products-container">

        {/* Products container */}
        <h1 className="text-center">LET'S SHOP</h1>
        <h2 className="category-title">CATEGORY</h2>
        <div className="caterory-product-wrapper">
          <ul className="category-container">
            <li className="category-list">
              <button
                className="category-button"
                onClick={() => filterResult("Women", data)}
              >
                Women
              </button>
              <button
                className="category-button"
                onClick={() => filterResult("Men", data)}
              >
                Men
              </button>
              <button
                className="category-button"
                onClick={() => filterResult("Unisex", data)}
              >
                Unisex
              </button>
              <button
                className="category-button"
                onClick={() => clearFilterResult()}
              >
                All Products
              </button>
            </li>
          </ul>
          <div className="products-container">{productContent()}</div>
        </div>
      </div>



      <Footer />
    </>
  );
}
