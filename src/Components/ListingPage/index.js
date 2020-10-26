import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchListingDetails } from '../../Redux/Actions/listings';

import './listing-page.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListingPage = () => {
  const dispatch = useDispatch();
  const listing = useSelector(store => store.listings.currentListing);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetchListingDetails(id)(dispatch);
  }, [id, dispatch]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (Object.keys(listing).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="listing-page-wrap">
      <div className="listing-page-main">
        <div className="listing-page-photos">
          <Slider {...settings}>
            {
              listing.photos.map(photo => (
                <div key={photo} className="listing-page-img-wrap">
                  <img src={photo} alt={listing.title} />
                </div>
              ))
            }
          </Slider>
        </div>
        <div className="listing-page-details">
          <div>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
          </div>
          <aside>
            {listing.price}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
