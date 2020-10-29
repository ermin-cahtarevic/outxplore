import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { ImUsers } from 'react-icons/im';
import { fetchListingDetails } from '../../Redux/Actions/listings';
import LoadingSpinner from '../LoadingSpinner';

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
    return <LoadingSpinner />;
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
            <div>
              <h2>{listing.title}</h2>
            </div>
            <div className="listing-page-main-info">
              <div>
                <ImUsers />
              </div>
              <p>
                Up to
                {listing.guest_max_num}
                {
                  listing.guest_max_num > 1 ? ' people' : ' person'
                }
              </p>
            </div>
            <div>
              <h4>Location</h4>
              <p>{listing.location}</p>
            </div>
            <div>
              <h4>Description of the activity</h4>
              <p>{listing.description}</p>
            </div>
          </div>
          <aside className="listing-page-side-info">
            <h1>
              $
              {listing.price}
            </h1>
            <span> per person</span>
            <button>Contact the host</button>
            <div className="listing-page-host-info">
              <img src={listing.host.photo} alt={`${listing.host.first_name} ${listing.host.last_name}`} />
              <h3>{`${listing.host.first_name} ${listing.host.last_name}`}</h3>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
