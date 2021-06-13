import React from 'react';
import styled from 'styled-components';
import './Map.css'


const MapStyles = styled.div`


`;

export default function Map() {
  return (
    <div className="map_container">
      <div className="container map_section">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <h5>Tejgaon-Farmgate, Dhaka, Bangladesh</h5>
          <a
            className="map__card__link"
            href="https://goo.gl/maps/wg1AiwWsheaNBorb6"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </div>
  );
}
