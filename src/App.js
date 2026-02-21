import React, { useEffect } from 'react';
import './App.css';
import logoBrand from './logo-brand.jpeg';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="zimca-app-branding">
      {/* HEADER */}
      <header className="header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="nav-logo">ZIMCA</div>
          <div className="store-buttons" style={{ transform: 'scale(0.8)' }}>
            <div className="store-btn">
              <div className="store-btn-text">
                <span className="small">Download on the</span>
                <span className="bold">App Store</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="app-hero">
        <div className="container app-hero-grid">
          <div className="app-hero-content">
            <div className="app-badge reveal">
              WORLD'S FIRST <span>3D DESIGN STUDIO</span> APP
            </div>
            <h1 className="app-title reveal" style={{ transitionDelay: '0.1s' }}>
              Your Brand. <br />
              In Your <span>Pocket.</span>
            </h1>
            <p className="app-desc reveal" style={{ transitionDelay: '0.2s' }}>
              The ZIMCA mobile app brings professional-grade high-fidelity 3D modeling to your smartphone. Design, preview, and manifest your style anywhere.
            </p>
            <div className="store-buttons reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="store-btn">
                <div className="store-btn-text">
                  <span className="small">Download on the</span>
                  <span className="bold">App Store</span>
                </div>
              </div>
              <div className="store-btn" style={{ background: '#333' }}>
                <div className="store-btn-text">
                  <span className="small">Get it on</span>
                  <span className="bold">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-perspective reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="screen-header">
                  <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>ZIMCA</span>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#f1f1f1' }}></div>
                </div>
                <div className="screen-preview">
                  <img src={logoBrand} alt="App Preview" />
                </div>
                <div className="screen-controls">
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.4 }}>SELECT FABRIC</span>
                  <div className="control-dot-grid">
                    <div className="control-dot" style={{ background: '#000' }}></div>
                    <div className="control-dot" style={{ background: 'var(--accent)' }}></div>
                    <div className="control-dot" style={{ background: '#eee' }}></div>
                  </div>
                  <button style={{ width: '100%', padding: '15px', background: '#000', color: '#fff', border: 'none', borderRadius: '15px', fontWeight: 800, fontSize: '0.8rem', marginTop: '10px' }}>
                    Generate 3D Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE FEATURES GRID */}
      <section className="features-section section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Native Power. <br />Artisan Results.</h2>
          </div>
          <div className="feature-pill-grid">
            <div className="feature-pill reveal">
              <span className="icon">◈</span>
              <h3>Bespoke 3D Engine</h3>
              <p>Built on a custom mobile renderer, ZIMCA App provides pixel-perfect textile simulation that reacts to light in real-time.</p>
            </div>
            <div className="feature-pill reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="icon">✦</span>
              <h3>Haptic Precision</h3>
              <p>Feel every adjustment. Our touch-optimized design lab makes complex layouts intuitive and precise.</p>
            </div>
            <div className="feature-pill reveal">
              <span className="icon">◎</span>
              <h3>AR Fitting Room</h3>
              <p>Project your designs into your physical space using advanced ARKit integration. See it before you wear it.</p>
            </div>
            <div className="feature-pill reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="icon">⚡</span>
              <h3>Seamless Checkout</h3>
              <p>From final render to production in two taps. Integrated with Apple Pay and Google Pay for instant ordering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS SECTION */}
      <section className="section">
        <div className="container interaction-grid">
          <div className="reveal">
            <div className="step-card active">
              <span className="step-num">STEP 01</span>
              <h3>Initialize Canvas</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Choose from our signature 240 GSM oversized or classic premium tees.</p>
            </div>
            <div className="step-card">
              <span className="step-num">STEP 02</span>
              <h3>Inject Vision</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Upload graphics or use our typography lab to manifest your identity.</p>
            </div>
            <div className="step-card">
              <span className="step-num">STEP 03</span>
              <h3>Manifest</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Finalize in AR and order. Handmade quality delivered to your door.</p>
            </div>
          </div>
          <div className="reveal">
            <div style={{ padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '40px', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>"The design studio of tomorrow, finally in your hands."</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                We've spent 2 years refining the mobile UI to ensure that professional designers and enthusiasts alike have zero friction between thought and creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="app-cta reveal">
        <div className="container">
          <h2 style={{ fontSize: '4rem', marginBottom: '3rem' }}>The Studio is Open.</h2>
          <div className="store-buttons" style={{ justifyContent: 'center' }}>
            <div className="store-btn">
              <div className="store-btn-text">
                <span className="small">Download on the</span>
                <span className="bold">App Store</span>
              </div>
            </div>
            <div className="store-btn" style={{ background: '#333' }}>
              <div className="store-btn-text">
                <span className="small">Get it on</span>
                <span className="bold">Google Play</span>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '4rem', opacity: 0.5, fontSize: '0.8rem', letterSpacing: '0.3em' }}>JOIN 140,000+ CREATIVES GLOBALLY</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="nav-logo">ZIMCA</div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', fontWeight: 700, opacity: 0.6 }}>
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>SUPPORT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
