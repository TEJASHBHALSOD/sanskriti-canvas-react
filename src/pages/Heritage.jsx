import React from 'react';
import { Link } from 'react-router-dom';

export default function HeritageList() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="index.html">India</Link> /{' '}
            <Link to="gujarat.html">Gujarat</Link> /{' '}
            <Link to="ahmedabad.html">Ahmedabad</Link> / Heritage
          </div>

          <h1>Heritage of Ahmedabad</h1>

          <p>
            Discover the historic places, monuments and architectural treasures
            that preserve Ahmedabad's rich cultural identity and history.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Explore Heritage</h2>
          <p>Discover important heritage places of Ahmedabad</p>
        </div>

        <div className="heritage-grid">
          <article className="heritage-card">
            <img
              src="assets/images/heritage/sabarmati-ashram.jpg"
              alt="Sabarmati Ashram"
            />

            <div className="card-content">
              <span className="tag">Historic Site</span>
              <h3>Sabarmati Ashram</h3>
              <p>
                A historically significant place associated with India's
                freedom movement and Mahatma Gandhi.
              </p>

              <Link
                to="heritage-detail.html?place=sabarmati-ashram"
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          </article>

          <article className="heritage-card">
            <img
              src="assets/images/heritage/adalaj-stepwell.jpg"
              alt="Adalaj Stepwell"
            />

            <div className="card-content">
              <span className="tag">Architecture</span>
              <h3>Adalaj Stepwell</h3>
              <p>
                A remarkable stepwell known for its intricate stone
                architecture and traditional craftsmanship.
              </p>

              <Link
                to="heritage-detail.html?place=adalaj-stepwell"
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          </article>

          <article className="heritage-card">
            <img
              src="assets/images/heritage/bhadra-fort.jpg"
              alt="Bhadra Fort"
            />

            <div className="card-content">
              <span className="tag">Fort</span>
              <h3>Bhadra Fort</h3>
              <p>
                One of Ahmedabad's historic landmarks, reflecting the
                city's medieval architectural heritage.
              </p>

              <Link
                to="heritage-detail.html?place=bhadra-fort"
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          </article>

          <article className="heritage-card">
            <img
              src="assets/images/heritage/sidi-saiyyed-mosque.jpg"
              alt="Sidi Saiyyed Mosque"
            />

            <div className="card-content">
              <span className="tag">Architecture</span>
              <h3>Sidi Saiyyed Mosque</h3>
              <p>
                Famous for its finely carved stone jali work and one of
                Ahmedabad's most recognizable architectural details.
              </p>

              <Link
                to="heritage-detail.html?place=sidi-saiyyed-mosque"
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          </article>

          <article className="heritage-card">
            <img
              src="assets/images/heritage/somnath-temple.jpg"
              alt="Somnath Temple"
            />

            <div className="card-content">
              <span className="tag">Religious Heritage</span>
              <h3>Somnath Temple</h3>
              <p>
                A major heritage and pilgrimage destination of Gujarat,
                included here as a Gujarat-wide cultural reference.
              </p>

              <Link
                to="heritage-detail.html?place=somnath-temple"
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          </article>
        </div>

        <div className="info-box">
          <strong>Why Heritage Matters</strong>
          <br />
          Heritage is more than an old building or monument. It carries stories,
          traditions, architecture and memories from one generation to another.
          Sanskriti Canvas aims to make these stories easier to discover,
          document and preserve.
        </div>

        <div className="back-link">
          <Link to="ahmedabad.html">← Back to Ahmedabad</Link>
        </div>
      </section>
    </>
  );
}