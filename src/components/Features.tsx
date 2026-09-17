export function Features() {
  return (
    <section className="features" id="about">
      <div className="wrap section">
        <div className="section-head">
          <div>
            <span className="eyebrow">What Makes Us Different</span>
            <h2>Built by athletes. Backed by science.</h2>
            <p>Join thousands of athletes who trust SuppHardy for their supplement needs.</p>
          </div>
        </div>

        <div className="feat-grid">
          <div className="feat lead">
            <div>
              <span className="eyebrow">Expert formulated</span>
              <h3>Created by bodybuilders &amp; fitness experts for maximum results.</h3>
            </div>
            <p>
              Every product is formulated by expert nutritionists and fitness professionals who train
              the way you do.
            </p>
          </div>

          <div className="feat">
            <div className="ic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <h3>Lab-tested purity</h3>
            <p>All ingredients are research-backed and lab-tested for purity and potency.</p>
          </div>

          <div className="feat">
            <div className="ic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Clean formulas</h3>
            <p>No artificial fillers or harmful additives — just what works.</p>
          </div>

          <div className="feat">
            <div className="ic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7" />
                <circle cx="5.5" cy="18.5" r="1.5" />
                <circle cx="18.5" cy="18.5" r="1.5" />
              </svg>
            </div>
            <h3>Fast delivery</h3>
            <p>Get your supplements delivered quickly with expedited shipping and exceptional customer service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
