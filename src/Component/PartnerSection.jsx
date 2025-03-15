import React from 'react';

const PartnerSection = () => {
  return (
    <div className="partner-section">
      {/* Hero Section */}
      <div className="hero">
        <h1>53 partners</h1>
      </div>

      {/* Filters and Search */}
      <div className="filters">
        <div className="filters-header">
          <h2>53 partners</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search by restaurant or food" />
            <button className="search-button">🔍</button>
          </div>
        </div>

        <div className="filter-options">
          <label>
            <input type="radio" name="filter" defaultChecked />
            All
          </label>
          <label>
            <input type="radio" name="filter" />
            Delivery
          </label>
          <label>
            <input type="radio" name="filter" />
            Pickup
          </label>
          <label className="open-now">
            <input type="checkbox" />
            Open now
          </label>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;