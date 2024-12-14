import React, { useState } from 'react';
import './App.css';
import PurchaseForm from './components/PurchaseForm';
import ReturnForm from './components/ReturnForm';
import CommentForm from './components/CommentForm';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Producto A', price: 100, img: 'https://via.placeholder.com/250' },
    { id: 2, name: 'Producto B', price: 200, img: 'https://via.placeholder.com/250' },
    { id: 3, name: 'Producto C', price: 300, img: 'https://via.placeholder.com/250' },
  ];

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <nav>
        <a href="#home">Inicio</a>
        <a href="#comprar">Comprar</a>
        <a href="#devoluciones">Devoluciones</a>
        <a href="#comentarios">Comentarios</a>
      </nav>

      <h1>Bienvenido a nuestra Tienda Online</h1>

      <div className="container">
        {products.map(product => (
          <div key={product.id} className="card" onClick={() => handleProductSelect(product)}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Seleccionar</button>
          </div>
        ))}
      </div>

      <PurchaseForm selectedProduct={selectedProduct} />
      <ReturnForm />
      <CommentForm />
    </div>
  );
};

export default App;