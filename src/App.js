import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import products_data from './datastore/products_data'
import Card from "./components/Card";
import Products from "./products/Products";


function App() {
  function filteredData (products) {
    let filteredProducts = products;
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

  const result = filteredData(products_data);
  return (
    <>
      <Navbar/>
      <Products result={result}/>
    </>
  );
}

export default App;
