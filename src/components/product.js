import React, {useState} from 'react';
import '../App.css';

const Product = ({product, products, setProducts}) => {

    const addToShoppingCart = (id) => {
        const tempLikes = products.map(product => {
            if(product.id === id) {
                product = {...product, bought: (product.bought + 1)};
            }
            return product
        })
        setProducts(tempLikes);
    }

    return (

        

        <div className="products">
        <img src={product.url} />
        <p><b>{product.name}</b></p>
        <p><b>{product.price}€</b></p>
        <button onClick={()=>addToShoppingCart(product.id)}>Lisää ostoskoriin</button>
        </div>
        )
}

const Products = ({products, setProducts}) => {

    const calcTotal = () =>{
        let amounts = products.map(product => product.bought);
        let total = amounts.reduce((a, b) => a + b, 0);
        return total;
    }

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div>
            <div className="ShoppingCart">
        <button onClick={()=>setShowInfo(!showInfo)}>Ostoskorisi{calcTotal()}</button>
        
        {showInfo && 
        <selection>
            {products.filter(product => product.bought > 0).map(product => <ShoppingCart product = {product} />)}
            </selection>}

        </div>
<div className="productinfos">
        {products.map(product => <Product key={product.id} product={product} products={products} setProducts={setProducts} />)}</div>
        </div>
    

    )
}

const ShoppingCart = ({product}) => {
    return (
        <div>
            {product.name}: {product.bought} {product.price}€ 

            <div>
            <h3><b>Subtotal:</b></h3>
            {product.bought * product.price}€
        </div>

        </div>


    )
}


export default Products;