import './Result.css';

import React from 'react';

import propTypes from 'prop-types';

const Result = ({ brewery }) => (
  <article className="breweries-container">
    <h4>
      <a href={`${brewery.website_url}`} className="brewery-name-styles">
        {brewery.name}
      </a>
    </h4>
    <dl>
      <dt>Type of Brewery</dt>
      <dd>{brewery.brewery_type}</dd>
      <dt>Website</dt>
      {/* <dd><a href={`${brewery.website_url}`}>{brewery.website_url}</a> </dd> */}

      <dt>Phone</dt>
      <dd>{brewery.phone}</dd>
    </dl>
    <address>
      Visit us at:
      <br />
      {brewery.street}
      <br />
      {brewery.city}
      <br />
      {brewery.postal_code}
      <br />
      {brewery.state}
      <br />
    </address>
  </article>
);
export default Result;

Result.propTypes = {
  // eslint-disable-next-line react/require-default-props
  brewery: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    brewery_type: propTypes.string,
    street: propTypes.string,
    address_2: propTypes.string,
    address_3: propTypes.string,
    city: propTypes.string,
    state: propTypes.string,
    country_province: propTypes.string,
    postal_code: propTypes.string,
    country: propTypes.string,
    longitude: propTypes.string,
    latitude: propTypes.string,
    phone: propTypes.string,
    website_url: propTypes.string,
    updated_at: propTypes.string,
    created_at: propTypes.string,
  }),
};
