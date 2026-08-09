export const metadata = {
  title: "The Kalahooska File | James Bluespan",
  description: "A fictional campaign satire about the very dramatic danger next door.",
};

const charges = [
  ["01", "The water standoff", "He hoarded water during a natural crisis—turning an emergency into a political weapon."],
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
        <a className="back-link" href="/">← Back to sanity</a>
      </header>

      <section className="danger-hero">
        <div className="warning-tape top" aria-hidden="true">CAUTION: KALAHOOSKA NEXT DOOR • CAUTION: KALAHOOSKA NEXT DOOR •</div>
        <div className="danger-copy">
          <p className="alert-kicker"><span>!</span> An extremely serious briefing</p>
          <h1>Andy<br /><b>Hussein</b><br /><em>Burnham.</em></h1>
          <p className="danger-deck">Would you trust him with your grandmother?</p>
          <a href="#evidence" className="danger-button">Inspect the “evidence” <span>↓</span></a>
        </div>
        <div className="burnham-shot">
          <div className="target-rings" aria-hidden="true" />
          <img src="/images/andy-burnham.jpeg" alt="Andy Burnham, used in a fictional satirical campaign page" />
          <span className="photo-stamp">RADICAL?</span>
        </div>
      </section>

      <section className="panic-strip" aria-label="Satirical warning">
        <strong>WOKE.</strong><strong>BROKE.</strong><strong>SUPPORTS TERRORISM.</strong>
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
        </div>
      </section>

      <section className="contrast">
        <div className="puppet-card">
          <span className="puppet-label">THE KALAHOOSKAN CANDIDATE?</span>
          <img src="/images/argus.png" alt="Argus Driscoll, a fictional candidate" />
          <strong>ARGUS<br />DRISCOLL</strong>
        </div>
        <div className="contrast-copy">
          <p>Twenty-seven. No regional budget. No record of balancing schools, energy, safety, taxation, and long-term stability. So whose hand is really on the strings?</p>
          <h2>Burnham’s<br /><em>puppet?</em></h2>
          <p className="rejection-copy">Argus brings the politics of Kalahooska to Chasmia: personality over competence, slogans over stewardship. Reject the proxy. Reject the danger next door.</p>
          <a href="/#record">See the actual record →</a>
        </div>
      </section>

      <section className="final-warning">
        <p>Protect Chasmia from the terrifying prospect of</p>
        <h2>reasonably<br />priced bus fares.</h2>
        <a href="/#join">Stand with James <span>↗</span></a>
      </section>

      <footer className="danger-footer">
        <span>In-game political fiction; claims concern fictional characters and events.</span>
        <small>Paid for by Bluespan for Chasmia</small>
      </footer>
    </main>
  );
}
