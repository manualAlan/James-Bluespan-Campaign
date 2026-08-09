export const metadata = {
  title: "The Kalahooska File | William Douglas Davis",
  description: "Kalahooska is exporting its danger. Is Chasmia prepared?",
};

const charges = [
  ["01", "The water standoff", "He hoarded water during a natural crisis, turning an emergency into a political weapon."],
  ["02", "Flags, flags, flags", "Another identity rule before breakfast, and somehow still no rule against bad ideas."],
  ["03", "The policy roulette", "Communes on Monday. Tax cuts on Tuesday. A National Guard vanity parade by Friday."],
  ["04", "The Capitol extremist link", "Burnham backed Rachel Eldeinstein after she supported the call to ‘Storm the Myrati Capitol.’"],
];

export default function KalahooskaPage() {
  return (
    <main className="danger-page">
      <header className="danger-nav">
        <div className="campaign-wordmarks">
          <a className="wordmark davis-wordmark" href="https://manualalan.github.io/davis-for-kalahooska/" aria-label="Visit William Douglas Davis campaign website">
            <span className="monogram" aria-hidden="true">WD</span><span>William Douglas Davis</span>
          </a>
        </div>
        <nav className="danger-links" aria-label="Campaign links">
          <a className="elect-link" href="https://manualalan.github.io/davis-for-kalahooska/">← Elect change</a>
        </nav>
      </header>

      <section className="danger-hero">
        <div className="warning-tape top" aria-hidden="true">CAUTION: ANDY BURNHAM LET LOOSE X THIS IS NOT A DRILL!</div>
        <div className="danger-copy">
          <p className="alert-kicker"><span>!</span> An extremely serious briefing</p>
          <h1><span className="andy">ANDY</span><b>HUSSEIN</b><em><span className="burn">BURN</span><span className="ham">ham</span></em></h1>
          <p className="danger-deck">Would you trust him with your grandma?</p>
          <a href="#evidence" className="danger-button">Inspect the “evidence” <span>↓</span></a>
        </div>
        <div className="burnham-shot">
          <div className="target-rings" aria-hidden="true" />
          <img src="/images/andy-burnham.jpeg" alt="Andy Burnham" />
          <span className="photo-stamp">RADICAL?</span>
        </div>
      </section>

      <section className="panic-strip" aria-label="S">
        <strong>WOKE.</strong><strong>BROKE.</strong><strong>SUPPORTS TERRORISM.</strong>
      </section>

      <section className="case-file" id="evidence">
        <div className="case-intro">
          <p className="file-label">CASE FILE: K-0001</p>
          <h2>The danger<br />is <em>mildly</em><br />organized.</h2>
        </div>
        <div className="charge-list">
          {charges.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="titan-attack" aria-label="Stop Andy Burnham campaign graphic">
        <img className="titan-scene" src="/images/attack-on-titan-scene.png" alt="Andy Burnham depicted as a fiery giant looming over a walled city" />
        <div className="titan-shade" aria-hidden="true" />
        <h2><span>STOP ANDY</span><strong>BURN-’EM</strong></h2>
      </section>

      <section className="final-warning">
        <p>The Kalahooskan program</p>
        <h2><span>WOKE</span><span>BROKE</span><span>TERRORISM</span></h2>
        <div className="final-actions">
          <a href="https://manualalan.github.io/davis-for-kalahooska/">Vote out Burnham <span>↗</span></a>
        </div>
      </section>

      <footer className="danger-footer">
        <small>Paid for by Davis for Kalahooska</small>
      </footer>
    </main>
  );
}
