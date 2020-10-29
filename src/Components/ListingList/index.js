import React from 'react';
import Proptypes from 'prop-types';
import ListingCard from '../ListingCard';

import './listing-list.css';

const ListingList = ({ listings }) => (
  <div className="listing-list">
    {
        listings.map(listing => (
          <ListingCard listing={listing} key={listing.id} />
        ))
      }
  </div>
);

ListingList.propTypes = {
  listings: Proptypes.instanceOf(Array).isRequired,
};

export default ListingList;
