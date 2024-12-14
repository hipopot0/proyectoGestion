import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = () => {
  const [productId, setProductId] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/comments', { productId, comment, rating })
      .then(response => alert('Comentario enviado con éxito'))
      .catch(error => alert('Error al enviar el comentario'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dejar Comentario</h2>
      <div>
        <label>ID del Producto:</label>
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} required />
      </div>
      <div>
        <label>Comentario:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
      </div>
      <div>
        <label>Calificación (1-5):</label>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
      </div>
      <button type="submit">Enviar Comentario</button>
    </form>
  );
};

export default CommentForm;
