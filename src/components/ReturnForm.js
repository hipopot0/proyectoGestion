import React, { useState } from 'react';
import axios from 'axios';

const ReturnForm = () => {
  const [productId, setProductId] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/returns', { productId, reason })
      .then(response => alert('Devolución realizada con éxito'))
      .catch(error => alert('Error al realizar la devolución'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Realizar Devolución</h2>
      <div>
        <label>ID del Producto:</label>
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} required />
      </div>
      <div>
        <label>Razón de la Devolución:</label>
        <textarea value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
      </div>
      <button type="submit">Devolver</button>
    </form>
  );
};

export default ReturnForm;
