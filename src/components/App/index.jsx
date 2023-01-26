import { useState } from "react";
import AddProduct from "../AddProduct";
import BlockInfo from "../BlockInfo";
import Product from "../Product";
import s from "./style.module.css";



function App() {

  const defaultProducts =[
    {id: 1, title: 'велосипед', count: 1, price: 450},
    {id: 2, title: 'ролики', count: 8, price: 150},
    {id: 3, title: 'самокат', count: 2, price: 800},
    {id: 4, title: 'скейт', count: 3, price: 400},
    {id: 5, title: 'лыжи', count: 4, price: 1000},
    {id: 6, title: 'сноуборд', count: 6, price: 1200},
    {id: 7, title: 'санки', count: 10, price: 40},
    {id: 8, title: 'коньки', count: 3, price: 40}
  ]

  const [products, setProducts] = useState(defaultProducts);

  const deleteProduct = (delId) => {
    const newArr = products.filter(({id}) => id !== delId);
    setProducts(newArr);
  }

  const createProduct = (title,price,count) => {
    const newProduct = {
      id: Date.now(),
      title,
      price,
      count
    };
    const newArr = [...products, newProduct];
    setProducts(newArr);
  }

  const changeCount = (changeId, value) => {
  products.find(({id}) => id === changeId).count += value;
    setProducts([...products]);
  }

  
  const counter = products.reduce((sum, product) => sum + (product.count), 0);
  const amount = products.reduce((prev, product) => prev + (product.price*product.count),0);
  

  return (
    <div>
      <h2> Корзина </h2>
      <AddProduct createProduct={createProduct} />
      
      <div className={s.container}>
        {
        products.map(product => <Product key={product.id} {...product}
          deleteProduct={deleteProduct} 
          changeCount={changeCount} />
          )
      }
      </div>
      
      <BlockInfo amount={amount} counter={counter} />
      
    </div>
  );
}

export default App;
