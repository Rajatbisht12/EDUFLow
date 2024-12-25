import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Eduflow</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <button className="btn-demo">Request Demo</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Transform Your School Management</h1>
          <p>Streamline administrative tasks, enhance communication, and improve educational outcomes with our comprehensive school management system.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose Eduflow?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🏫</div>
            <h3>Complete School Management</h3>
            <p>From admissions to alumni management, handle all aspects of school administration in one place.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Multi-Stakeholder Platform</h3>
            <p>Connect administrators, teachers, students, and parents on a single unified platform.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Advanced Analytics</h3>
            <p>Make data-driven decisions with comprehensive reporting and analytics tools.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Basic</h3>
            <div className="price">Rs. 15<span>/month</span><span>/student</span></div>
            <ul>
              <li>Basic modules included</li>
              <li>Email support</li>
              <li>Basic reporting</li>
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="price-card featured">
            <h3>Professional</h3>
            <div className="price">Rs. 30<span>/month/student</span></div>
            <ul>
              <li>All modules included</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="price-card">
            <h3>Enterprise</h3>
            <div className="price">Rs. 40<span>/month/student</span></div>
            <ul>
              <li>Custom modules</li>
              <li>24/7 support</li>
              <li>Custom integration</li>
            </ul>
            <button className="btn-primary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Transform Your School?</h2>
        <button className="btn-primary">Schedule a Demo</button>
      </section>
    </div>
  );
}

export default LandingPage;