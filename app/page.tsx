const policies = [
  {
    icon: "⌂",
    title: "Homes within reach",
    text: "Release public land for mixed-income homes, reward first-time buyers, and make absentee speculators pay their fair share.",
  },
  {
    icon: "↗",
    title: "Pay packets that grow",
    text: "Back Myrati firms, apprenticeships, port jobs, and a practical tax settlement that keeps enterprise moving.",
  },
  {
    icon: "✦",
    title: "Safe streets, trusted law",
    text: "Community policing, independent oversight, rule of law, and firm action against political violence.",
  },
  {
    icon: "≈",
    title: "A proud Myrati voice",
    text: "Protect our language, schools, and regional institutions while keeping Myrati secure inside Caprica.",
  },
];

const timeline = [
  ["DEC 2056", "Lost the House election", "Edelstein-Powell refused to accept the result and alleged fraud."],
  ["THE CALL", "“Storm the Myrati Capitol”", "Her rhetoric became the fuse for a wave of unrest."],
  ["FEB 2058", "Convicted", "The Supreme Court found her guilty of provocation of violence."],
  ["NOW", "She wants her seat back", "Myrati deserves accountability, not chaos and lawlessness."],
];

export default function Home() {
  return (
    <main>
      <div className="alert-strip">
        <span className="alert-pulse" aria-hidden="true" />
        ELECTION ALERT: RACHEL EDELSTEIN-POWELL IS RUNNING AGAIN
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="JB Stoner 2060 home">
          <img className="brand-logo" src="/images/mr-logo.png" alt="" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#record">The record</a>
          <a href="#choice">The choice</a>
          <a href="#plan">Our plan</a>
          <a className="nav-cta" href="#pledge">Stand with us</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Rachel Edelstein-Powell escorted by officers after her capture" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> SHE BROKE OUR TRUST</p>
          <h1>RACHEL<br />IS <em>BACK.</em></h1>
          <p className="hero-deck">
            After the lies. After the violence. After a criminal conviction.
            Rachel Edelstein-Powell wants Myrati to hand her power again.
          </p>
          <div className="hero-actions">
            <a className="button button-red" href="#record">See the record <span>↓</span></a>
            <a className="text-link" href="#plan">Choose the moderate way forward <span>→</span></a>
          </div>
        </div>
        <aside className="verdict-card">
          <p>THE VERDICT</p>
          <strong>GUILTY</strong>
          <span>Provocation of violence<br />26 February 2058</span>
          <small>Supreme Court of Caprica</small>
        </aside>
        <div className="scroll-cue">THE FACTS <span>↓</span></div>
      </section>

      <section className="ticker" aria-label="Key facts">
        <div><strong>1B+</strong><span>argents in damage</span></div>
        <div><strong>891</strong><span>people injured</span></div>
        <div><strong>6 MONTHS</strong><span>maximum sentence</span></div>
      </section>

      <section className="record-section" id="record">
        <div className="section-intro">
          <p className="kicker">THE EDELSTEIN-POWELL RECORD</p>
          <h2>FROM DEFEAT<br />TO <span>DISORDER.</span></h2>
          <p>When Myrati voted for change, she chose herself over democracy. This is not an opinion. It is the sequence of events.</p>
        </div>
        <div className="timeline">
          {timeline.map(([date, title, text], index) => (
            <article className="timeline-item" key={date}>
              <div className="timeline-number">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <time>{date}</time>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section">
        <div className="evidence-lead">
          <p className="kicker light">THE LAST HIDEOUT</p>
          <h2>SIX FEET<br />FROM <span>ACCOUNTABILITY.</span></h2>
          <p>Forensic reconstruction of the concealed space identified as Edelstein-Powell&apos;s last hideout before capture.</p>
          <div className="stamp">CAPTURED<br /><small>13 OCT 2057</small></div>
        </div>
        <figure className="hideout">
          <img src="/images/hideout-diagram.png" alt="Diagram showing a concealed underground chamber and air vent" />
          <figcaption><b>EXHIBIT 01</b><span>Hideout reconstruction</span></figcaption>
        </figure>
        <figure className="transport">
          <img src="/images/transport.jpg" alt="Edelstein-Powell wearing protective transport equipment after capture" />
          <figcaption><b>EXHIBIT 02</b><span>Transfer from custody</span></figcaption>
        </figure>
      </section>

      <section className="choice-section" id="choice">
        <p className="kicker centered">THE CHOICE BEFORE MYRATI</p>
        <h2>DON&apos;T GO BACK.<br /><span>MOVE FORWARD.</span></h2>
        <div className="choice-grid">
          <article className="choice-card chaos">
            <div className="choice-image">
              <img src="/images/capture-group.png" alt="Edelstein-Powell in handcuffs being escorted after capture" />
              <span>CHAOS</span>
            </div>
            <div className="choice-copy">
              <p className="choice-label">RACHEL&apos;S WAY</p>
              <h3>Division. Drama.<br />Danger.</h3>
              <ul>
                <li>Refused a democratic result</li>
                <li>Inflamed a regional crisis</li>
                <li>Convicted of provoking violence</li>
                <li>Puts one family before Myrati</li>
              </ul>
            </div>
          </article>
          <div className="versus">OR</div>
          <article className="choice-card future">
            <div className="future-graphic">
              <span className="sun" />
              <div className="horizon" />
              <div className="future-word">FUTURE</div>
            </div>
            <div className="choice-copy">
              <p className="choice-label">THE MODERATE WAY</p>
              <h3>Steady. Local.<br />Forward.</h3>
              <ul>
                <li>Respect every legitimate vote</li>
                <li>Rebuild trust and public safety</li>
                <li>Put wages, homes, and services first</li>
                <li>Make Myrati matter in Caprica</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="manifesto" id="plan">
        <div className="manifesto-head">
          <div>
            <p className="kicker">OUR MODERATE MANIFESTO</p>
            <h2>SERIOUS ABOUT<br /><span>YOUR FUTURE.</span></h2>
          </div>
          <p>No fantasies. No vendettas. A practical programme for a safer, fairer, more confident Myrati.</p>
        </div>
        <div className="policy-grid">
          {policies.map((policy, index) => (
            <article className="policy-card" key={policy.title}>
              <div className="policy-top">
                <span className="policy-icon" aria-hidden="true">{policy.icon}</span>
                <small>0{index + 1}</small>
              </div>
              <h3>{policy.title}</h3>
              <p>{policy.text}</p>
              <a href="#pledge" aria-label={`Support ${policy.title}`}>OUR COMMITMENT <span>→</span></a>
            </article>
          ))}
        </div>
        <div className="manifesto-banner">
          <span>MODERATION ISN&apos;T WEAKNESS.</span>
          <strong>IT&apos;S HOW WE WIN THE FUTURE.</strong>
        </div>
      </section>

      <section className="pledge" id="pledge">
        <div>
          <p className="kicker light">THIS ELECTION, DRAW THE LINE.</p>
          <h2>MYRATI<br /><span>DESERVES BETTER.</span></h2>
        </div>
        <form className="pledge-form">
          <label htmlFor="email">Join the moderate majority</label>
          <div className="input-row">
            <input id="email" type="email" placeholder="Your email address" aria-label="Your email address" />
            <button type="button">I&apos;M IN <span>→</span></button>
          </div>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="JB Stoner 2060 home">
          <img className="brand-logo" src="/images/mr-logo.png" alt="" />
        </a>
        <div className="imprint">Friends of JB Stoner, 23021, Port Aaron.</div>
      </footer>
    </main>
  );
}
