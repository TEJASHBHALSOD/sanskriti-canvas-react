import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo-mark.png'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>&nbsp; About</span> 
          </div>
          <h1>About Sanskriti Canvas</h1>
          <p>
            A digital heritage concept created to make India's cultural stories easier to discover, understand and remember.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <aside className="about-panel reveal">
            <img
              src={logo}
              alt="Sanskriti Canvas emblem"
              style={{ width: '145px', height: '145px', objectFit: 'contain', margin: '0 auto 22px' }}
            />
            <h3>Our identity</h3>
            <p>
              The lotus-inspired emblem represents continuity, beauty and cultural depth, while the warm maroon, gold and cream palette reflects a classic Indian heritage aesthetic.
            </p>
            <div className="pill-list">
              <span className="pill">Heritage</span>
              <span className="pill">Traditions</span>
              <span className="pill">Culture</span>
              <span className="pill">History</span>
              <span className="pill">Stories</span>
            </div>
          </aside>

          <div className="reveal delay-1">
            <span className="kicker">The idea</span>
            <h2>A canvas for India's many stories.</h2>
            <p>
              India's cultural heritage cannot be represented by a single monument or a single tradition. It is a collection of places, languages, memories, practices, art forms, food, festivals and people.
            </p>
            <p>
              Sanskriti Canvas aims to bring these dimensions together in a simple interface. The visual direction is intentionally calm and classic so the content remains the focus.
            </p>
            <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '25px' }}>
              <article className="card">
                <div className="card-icon">01</div>
                <h3>Preserve</h3>
                <p>Present heritage with respect and clear cultural context.</p>
              </article>
              <article className="card">
                <div className="card-icon">02</div>
                <h3>Connect</h3>
                <p>Link places with traditions, people and regional stories.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="kicker">What we value</span>
            <h2>Respect, clarity and discovery.</h2>
            <p>The project is guided by a few simple principles that shape its content and visual experience.</p>
          </div>
          <div className="cards">
            <article className="card reveal">
              <div className="card-icon">◆</div>
              <h3>Respect the heritage</h3>
              <p>Present cultural subjects with sensitivity, context and a focus on learning.</p>
            </article>
            <article className="card reveal delay-1">
              <div className="card-icon">◇</div>
              <h3>Make it understandable</h3>
              <p>Use clean structure and readable information instead of overwhelming visitors.</p>
            </article>
            <article className="card reveal delay-2">
              <div className="card-icon">✦</div>
              <h3>Make discovery enjoyable</h3>
              <p>Combine visual storytelling, thoughtful interactions and a warm heritage-inspired interface.</p>
            </article>
          </div>
        </div>
      </section>
      </>
  );
}