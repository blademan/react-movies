import React from 'react';

export default function Card(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: img } = props;

  return (
    <div className="row" id={id}>
      <div className="card">
        <div className="card-image">
          <img src={img} alt={title} />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>
            {year} <span className="right">{type}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
