import React, { useState, useEffect } from 'react';

const PurchaseForm = ({ selectedProduct }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  if (!product) {
    return <p>Por favor, selecciona un producto para comprar.</p>;
  }

  return (
    <div id="comprar">
      <h2>Formulario de Compra</h2>
      <form>
        <label>
          Producto:
          <input type="text" value={product.name} disabled />
        </label>
        <label>
          Precio:
          <input type="text" value={`$${product.price}`} disabled />
        </label>
        <label>
          Cantidad:
          <input type="number" min="1" defaultValue="1" />
        </label>
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default PurchaseForm;
