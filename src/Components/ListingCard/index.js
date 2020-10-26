import React from 'react';
import { useHistory } from 'react-router';

import './listing-card.css';

const ListingCard = ({ listing }) => {
  const history = useHistory();
  const showListing = id => history.push(`/listing/${id}`);

  return (
    <div
      className="listing-card"
      onClick={() => showListing(listing.id)}
      onKeyDown={() => showListing(listing.id)}
      role="button"
      tabIndex={0}
    >
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
