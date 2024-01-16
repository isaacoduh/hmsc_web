import logo from './logo.svg';
import "./index.css";
import Navbar from "./components/navbar";
import products_data from './datastore/products_data'
import Card from "./components/Card";
import Products from "./products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import {useState} from "react";
import Recommended from "./recommended/Recommended";


function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // input filter
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {setQuery(event.target.value);
    }

    const filteredItems = products_data.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    }

  function filteredData (products, selected,query) {
    let filteredProducts = products;

    // filtering input items
      if(query){
          filteredProducts = filteredItems;
      }

    if(selected){
        filteredProducts = filteredProducts.filter(
            ({category, color, company, newPrice, title}) =>
            category === selected ||
                color === selected ||
                company === selected ||
                newPrice === selected ||
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

  const result = filteredData(products_data, selectedCategory, query);
  return (
    <>
        <Sidebar handleChange={handleChange}/>
      <Navbar query={query} handleInputChange={handleInputChange}/>
        <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );
}

export default App;
