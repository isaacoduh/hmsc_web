import logo from './logo.svg';
import "./index.css";
import Navbar from "./components/navbar";
import products_data from './datastore/products_data'
import Card from "./components/Card";
import Products from "./products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import {useState} from "react";


function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    }
  function filteredData (products, selected) {
    let filteredProducts = products;
    if(selected){
        filteredProducts = filteredProducts.filter(
            ({category, color, company, newPrice, title}) =>
            category === selected ||
                title === selected
        );
    }
    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
        <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
        />
    ));
  }

  const result = filteredData(products_data, selectedCategory);
  return (
    <>
        <Sidebar handleChange={handleChange}/>
      <Navbar/>
      <Products result={result}/>
    </>
  );
}

export default App;
