import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    // <main id="main">
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="container hero-content reveal">
          {/* <span className="eyebrow">A digital canvas of Indian heritage</span> */}
          <h1>Sanskriti Canvas</h1>
          <p>
            Discover India's historic places, traditions, cultural expressions, regional identity and timeless
            stories through one calm, visual experience.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/explore">
              Start Exploring
            </Link>
          </div>
        </div>

        <div className="hero-strip">
          <div className="strip-item">
            <div className="strip-icon">✦</div>
            <div>
              <strong>Rich Heritage</strong>
              <span>Monuments &amp; memories</span>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">◈</div>
            <div>
              <strong>Timeless Traditions</strong>
              <span>Living cultural practices</span>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">❖</div>
            <div>
              <strong>Diverse Culture</strong>
              <span>Many voices, one India</span>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">✧</div>
            <div>
              <strong>Incredible India</strong>
              <span>Stories worth discovering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section" id="heritage">
        <div className="container intro-grid">
          <div className="intro-copy reveal">
            <span className="kicker">Why Sanskriti Canvas</span>
            <h2>India is not just a place. It is a living story.</h2>
            <p>
              India's heritage is woven from architecture, languages, food, festivals, crafts, beliefs, art and
              everyday traditions. Every region adds another layer to the larger cultural canvas.
            </p>
            <p>
              Sanskriti Canvas is designed to present those layers in a clean and approachable way for
              students, travellers, researchers and anyone curious about India's cultural identity.
            </p>
            <div className="quote">
              “Preserve the past, understand the present, and pass the story forward.”
            </div>
            <div className="stats">
              <div className="stat">
                <b>01</b>
                <span>Unified heritage experience</span>
              </div>
              <div className="stat">
                <b>∞</b>
                <span>Stories waiting to be explored</span>
              </div>
            </div>
          </div>

          <div className="ornament-card reveal delay-1">
            <div className="ornament-logo">
              <img
                src="assets/images/logo-mark.png"
                alt="Sanskriti Canvas heritage emblem"
              />
            </div>
            <div className="ornament-caption">
              Sanskriti Canvas<small>भारत की विरासत • Stories of India</small>
            </div>
          </div>
        </div>
      </section>

      {/* Traditions & Culture Section */}
      <section className="section-sm alt" id="traditions">
        <div className="container">
          <div className="section-head reveal">
            <span className="kicker">A richer view</span>
            <h2>More than monuments.</h2>
            <p>
              Understanding heritage means looking at the people, practices and ideas surrounding a place—not
              only its photograph.
            </p>
          </div>

          <div className="cards">
            <article className="card reveal">
              <div className="card-icon">⌂</div>
              <h3>Heritage &amp; Architecture</h3>
              <p>
                Explore historic structures, sacred spaces, forts, stepwells and architectural traditions.
              </p>
            </article>

            <article className="card reveal delay-1">
              <div className="card-icon">◉</div>
              <h3>Traditions &amp; Festivals</h3>
              <p>
                Learn how rituals, celebrations and customs continue to connect communities.
              </p>
            </article>

            <article className="card reveal delay-2">
              <div className="card-icon">◇</div>
              <h3>Food &amp; Craft</h3>
              <p>
                Discover regional flavours, textiles, handicrafts and creative practices.
              </p>
            </article>

            <article className="card reveal">
              <div className="card-icon">अ</div>
              <h3>Languages &amp; Stories</h3>
              <p>
                Explore the languages, literature and oral memories that shape regional identity.
              </p>
            </article>

            <article className="card reveal delay-1">
              <div className="card-icon">✧</div>
              <h3>People &amp; Personalities</h3>
              <p>
                Discover people whose ideas, art and contributions influenced India's cultural journey.
              </p>
            </article>

            <article className="card reveal delay-2" id="culture">
              <div className="card-icon">◎</div>
              <h3>Culture in Context</h3>
              <p>
                Connect places, people and traditions so every discovery becomes more meaningful.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Band Banner */}
      <section className="band">
        <div className="container band-inner">
          <div>
            <h2>The next chapter is coming.</h2>
            <p>
              The Explore experience is being prepared as a richer journey through India's states, cities and
              cultural stories.
            </p>
          </div>
          <Link className="btn btn-outline" to="/explore">
            Visit Explore →
          </Link>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="kicker">Our approach</span>
            <h2>Designed for discovery, built for clarity.</h2>
            <p>
              A heritage experience should feel calm, premium and easy to navigate while giving every story
              room to breathe.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-dot">1</div>
              <div className="timeline-content">
                <h3>Discover</h3>
                <p>
                  Begin with a broad view of India's cultural landscape and choose the kind of story you
                  want to explore.
                </p>
              </div>
            </div>

            <div className="timeline-item reveal delay-1">
              <div className="timeline-dot">2</div>
              <div className="timeline-content">
                <h3>Understand</h3>
                <p>
                  Move beyond a photograph with context about history, people, traditions and regional
                  identity.
                </p>
              </div>
            </div>

            <div className="timeline-item reveal delay-2">
              <div className="timeline-dot">3</div>
              <div className="timeline-content">
                <h3>Remember</h3>
                <p>
                  Keep the experience visual and story-driven so heritage becomes easier to understand and
                  share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* </main> */}
    </>
  );
}