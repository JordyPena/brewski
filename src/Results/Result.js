import "../Results/Result.css";
const Result = ({ brewery }) => {
  return (
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
};

export default Result;
