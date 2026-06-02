function Card({ product0, lista, gremio, publico }) {
  return (
    <div className="card">
      <h1>{product0}</h1>
      <p>Precio de lista ${lista}</p>
      <p>Precio de gremio ${gremio}</p>
      <p>Precio de publico ${publico}</p>
    </div>
  );
}

export default Card;