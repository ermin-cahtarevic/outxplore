import React from 'react';

import './listing-card.css';

const ListingCard = ({ listing }) => {
  return (
    <div key={listing.id} className="listing-card">
      <img src={listing.photos[0]} alt={listing.title} />
      <div>
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <div>
          <span className="listing-card-price">$ {listing.price} <span className="listing-card-price-it">per person</span></span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
