import React from 'react';

export default function Explore() {
  return (
    <main id="main" className="explore-page">
      <div className="container">
        <section className="explore-heading">
          <span className="eyebrow">✦ Explore India</span>
          <h1>Discover India, one state at a time.</h1>
          <p>
            Hover over a state to highlight it and show its famous heritage places above the map. Click a state to continue.
          </p>
        </section>

        <section className="featured-preview" id="featuredPreview" aria-live="polite">
          <div className="featured-top">
            <div className="featured-kicker" id="featuredKicker">
              State Preview
            </div>
            <h2 className="featured-title" id="featuredTitle">
              Hover over a state
            </h2>
            <span className="featured-hint">Famous places appear here</span>
          </div>
          <div className="famous-list" id="famousList">
            <div className="famous-card">
              <div className="famous-icon">🇮🇳</div>
              <div>
                <div className="famous-name">Explore a state</div>
                <div className="famous-type">Hover on the map</div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Interactive map of India">
          <div className="map-card">
            <div className="map-toolbar" aria-label="Map controls">
              <button className="map-control" id="zoomIn" type="button" aria-label="Zoom in">
                +
              </button>
              <button className="map-control" id="zoomOut" type="button" aria-label="Zoom out">
                −
              </button>
              <button className="map-control" id="resetMap" type="button" aria-label="Reset map">
                ⌂
              </button>
            </div>
            <div className="map-loading" id="mapLoading">
              Loading India map…
            </div>
            <svg id="indiaMap" role="img" aria-label="Interactive India state map"></svg>
            <div className="map-note">Hover → Highlight → Preview → Click</div>
          </div>
          <div className="below-map-note">
            Select a state to explore its districts, heritage, culture, food and festivals.
          </div>
        </section>
      </div>
    </main>
  );
}