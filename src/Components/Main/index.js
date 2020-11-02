import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from '../../Redux/Actions/listings';
import ListingList from '../ListingList';
import SearchBar from '../SearchBar';

import './main.css';

const Main = () => {
  const dispatch = useDispatch();
  const listings = useSelector(store => store.listings.listings);

  useEffect(() => {
    fetchListings(dispatch);
  }, [dispatch]);

  return (
    <main className="main">
      <div className="main-top">
        <h1>Find your perfect outdoor experience</h1>
        <SearchBar />
      </div>
      <div>
        <ListingList listings={listings} />
      </div>
    </main>
  );
};

export default Main;
