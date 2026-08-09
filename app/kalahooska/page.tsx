export const metadata = {
  title: "The Kalahooska File | James Bluespan",
  description: "A fictional campaign satire about the very dramatic danger next door.",
};

const charges = [
  ["01", "The fare cap fiasco", "Cheap buses at the border. Commuters arriving on time. Where does it end?"],
  ["02", "Flags, flags, flags", "Another identity rule before breakfast—and somehow still no rule against bad ideas."],
  ["03", "The policy roulette", "Communes on Monday. Tax cuts on Tuesday. A National Guard vanity parade by Friday."],
];

export default function KalahooskaPage() {
  return (
    <main className="danger-page">
      <header className="danger-nav">
        <a className="wordmark" href="/" aria-label="Back to James Bluespan home">
          <span className="monogram" aria-hidden="true">JB</span><span>James Bluespan</span>
        </a>
        <span className="satire-tag">Fictional campaign satire</span>
        <a className="back-link" href="/">← Back to sanity</a>
      </header>

      <section className="danger-hero">
        <div className="warning-tape top" aria-hidden="true">CAUTION: KALAHOOSKA NEXT DOOR • CAUTION: KALAHOOSKA NEXT DOOR •</div>
        <div className="danger-copy">
          <p className="alert-kicker"><span>!</span> An extremely serious briefing</p>
          <h1>Andy<br /><em>Burnham.</em></h1>
          <p className="danger-deck">One man. One border. Far too many bus-fare opinions.</p>
          <a href="#evidence" className="danger-button">Inspect the “evidence” <span>↓</span></a>
        </div>
        <div className="burnham-shot">
          <div className="target-rings" aria-hidden="true" />
          <img src="/images/andy-burnham.jpeg" alt="Andy Burnham, used in a fictional satirical campaign page" />
          <span className="photo-stamp">RADICAL?<small>Our graphics team says yes</small></span>
        </div>
        <p className="fiction-note">PARODY • The setting, office, and claims on this page are fictional.</p>
      </section>

      <section className="panic-strip" aria-label="Satirical warning">
        <strong>WOKE.</strong><strong>BROKE.</strong><strong>HAS A BUS TIMETABLE.</strong>
      </section>

      <section className="case-file" id="evidence">
        <div className="case-intro">
          <p className="file-label">CASE FILE: K-0001</p>
          <h2>The danger<br />is <em>mildly</em><br />organized.</h2>
          <p>Our investigators opened the file. What they found was shocking: policies. Lots of them. Some even contradicted other policies.</p>
        </div>
        <div className="charge-list">
          {charges.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b>ALARMING*</b>
            </article>
          ))}
          <small>*According to a campaign leaflet printed in very large type.</small>
        </div>
      </section>

      <section className="contrast">
        <div className="quote-card">
          <span>BLUESPAN, PROBABLY</span>
          <blockquote>“Okay, seriously—<em>Argus who?</em>”</blockquote>
        </div>
        <div className="contrast-copy">
          <p>While Kalahooska experiments with personality politics, Chasmia has a wealth fund, lower taxes, record education investment, and power for a generation.</p>
          <h2>Less drama.<br /><em>More dams.</em></h2>
          <a href="/#record">See the actual record →</a>
        </div>
      </section>

      <section className="final-warning">
        <p>Protect Chasmia from the terrifying prospect of</p>
        <h2>reasonably<br />priced bus fares.</h2>
        <a href="/#join">Stand with James <span>↗</span></a>
      </section>

      <footer className="danger-footer">
        <span>Fictional satire—not a statement of real-world fact.</span>
        <small>Paid for by Bluespan for Chasmia</small>
      </footer>
    </main>
  );
}
