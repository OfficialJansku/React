import React, {useState} from 'react';
import Products from './components/product.js';
import productslist from './components/Productlist.js';
import './App.css';


function App() {

  const [products, setProducts] = useState(productslist);

  return (
    <div className="App">
      <h1>Fanikauppa</h1>

        <section className="sectioncontainer">
        <Products products={products} setProducts={setProducts} />
        </section>

        

      </div>
  );
}

export default App;
