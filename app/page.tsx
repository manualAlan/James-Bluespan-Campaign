const record = [
  ["10", "years as governor"],
  ["#1", "education investment per capita"],
  ["↓", "taxes for families & enterprise"],
];

const priorities = [
  {
    number: "01",
    title: "Prosperity that lasts",
    copy: "A permanent wealth fund, financed by the resource severance tax.",
  },
  {
    number: "02",
    title: "Power for a generation",
    copy: "Cheaper, abundant, reliable energy from Chasmia’s new hydro project.",
  },
  {
    number: "03",
    title: "Opportunity, everywhere",
    copy: "World-class schools, modern infrastructure, and a climate where ideas grow.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav-shell">
        <a className="wordmark" href="#top" aria-label="James Bluespan campaign home">
          <span className="monogram" aria-hidden="true">JB</span>
          <span>James Bluespan</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#record">Record</a>
          <a href="#priorities">Priorities</a>
          <a className="nav-button" href="#join">Join us</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A proven hand for Chasmia</p>
          <h1>Steady<br />progress.</h1>
          <p className="hero-line">Experience that delivers.<br />Ambition grounded in results.</p>
          <a className="primary-button" href="#record">See the record <span>↘</span></a>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-halo" aria-hidden="true" />
          <img src="/images/james-bluespan.webp" alt="James Bluespan" />
          <div className="portrait-label">
            <span>James Bluespan</span>
            <small>For Chasmia</small>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">01 / 03</div>
      </section>

      <section className="record" id="record">
        <div className="section-heading">
          <p className="eyebrow dark"><span /> The record</p>
          <h2>Built to<br /><em>endure.</em></h2>
        </div>
        <div className="record-body">
          <blockquote>“Through a national recession, Chasmia kept investing—and kept moving forward.”</blockquote>
          <div className="stat-grid">
            {record.map(([figure, label]) => (
              <article key={label}>
                <strong>{figure}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Campaign message">
        <div>TESTED LEADERSHIP <i>✦</i> SOUND GOVERNANCE <i>✦</i> A STRONGER CHASMIA <i>✦</i></div>
      </section>

      <section className="priorities" id="priorities">
        <div className="priorities-head">
          <p className="eyebrow light"><span /> The work ahead</p>
          <h2>Keep<br />building.</h2>
          <p>Practical choices. Long horizons.<br />A government ready on day one.</p>
        </div>
        <div className="priority-list">
          {priorities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              <b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="join" id="join">
        <p className="eyebrow dark"><span /> Join the campaign</p>
        <h2>Chasmia,<br /><em>forward.</em></h2>
        <form>
          <label className="sr-only" htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="Email address" />
          <button type="button">I’m with James <span>→</span></button>
        </form>
        <p className="form-note">Campaign updates only. Unsubscribe anytime.</p>
      </section>

      <footer>
        <a className="wordmark" href="#top"><span className="monogram">JB</span><span>James Bluespan</span></a>
        <p>Forward, together.</p>
        <small>Paid for by Bluespan for Chasmia</small>
      </footer>
    </main>
  );
}
