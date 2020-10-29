import React from 'react';

import './listing-list.css';
import ListingCard from '../ListingCard';

const ListingList = ({ listings }) => (
  <div className="listing-list">
    {
        listings.map(listing => (
          <ListingCard listing={listing} key={listing.id} />
        ))
      }
  </div>
);

export default ListingList;
