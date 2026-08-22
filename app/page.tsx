const prosperProjects = [
  { figure: "4B", unit: "ARGENTS", title: "Port Aaron expansion", copy: "Four deep-water berths, a 1.2 million TEU container terminal, new shipbuilding docks, and a permanent mainland trade corridor." },
  { figure: "9M", unit: "PASSENGERS", title: "A regional air hub", copy: "A second runway, expanded cargo capacity, modern customs facilities, and new commercial and hospitality districts." },
  { figure: "1,200", unit: "SCHOLARSHIPS", title: "Opportunity for students", copy: "Annual support for Myrati students attending colleges, universities, technical institutes, and professional schools." },
  { figure: "500M", unit: "ARGENTS", title: "Rebuild and recover", copy: "Targeted reconstruction for damaged homes, utilities, schools, clinics, local businesses, and civilian government services." },
];

const policies = [
  { icon: "⌂", title: "Homes within reach", text: "Build more homes, support first-time buyers, and keep Myrati communities affordable." },
  { icon: "↗", title: "Prosperity in motion", text: "Finish the port, airport, trade corridor, and free-trade zone that connect Myrati to opportunity." },
  { icon: "✦", title: "Safe streets, trusted law", text: "Community policing, independent oversight, rule of law, and firm action against political violence." },
  { icon: "≈", title: "A proud Myrati voice", text: "Protect our language, schools, and regional institutions while securing our place in Caprica." },
];

const timeline = [
  ["DEC 2056", "Rejected the voters' decision", "Edelstein-Powell refused to accept the election result and alleged fraud."],
  ["THE CALL", "“Storm the Myrati Capitol”", "Her rhetoric became the fuse for a wave of unrest."],
  ["FEB 2058", "Convicted", "The Supreme Court found her guilty of provocation of violence."],
  ["2064", "Back for another rematch", "Eight years after rejecting defeat, Rachel is asking Myrati to trust her again."],
];

export default function Home() {
  return (
    <main>
      <div className="alert-strip"><span className="alert-pulse" aria-hidden="true" />2064 ELECTION ALERT: RACHEL EDELSTEIN-POWELL IS BACK AGAIN</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="JB Stoner 2064 home"><img className="brand-logo" src="/images/mr-logo.png" alt="" /></a>
        <nav aria-label="Main navigation"><a href="#record">Her record</a><a href="#prosper">Our record</a><a href="#choice">The choice</a><a href="#plan">The plan</a><a className="nav-cta" href="#pledge">Stand with JB</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Rachel Edelstein-Powell escorted after her capture" /><div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content"><p className="eyebrow"><span /> THE SAME RACHEL. THE SAME RISK.</p><h1>SHE&apos;S<br /><em>BACK.</em></h1><p className="hero-deck">Rachel Edelstein-Powell is challenging JB Stoner again in 2064. Myrati has seen what her politics bring—and what steady leadership can build instead.</p><div className="hero-actions"><a className="button button-red" href="#record">Remember the record <span>↓</span></a><a className="text-link" href="#prosper">See what JB delivered <span>→</span></a></div></div>
        <aside className="verdict-card"><p>THE CHOICE IN 2064</p><strong>CHAOS?</strong><span>OR FOUR MORE YEARS<br />OF PROGRESS</span><small>JB Stoner for Myrati</small></aside><div className="scroll-cue">THE RECORD <span>↓</span></div>
      </section>

      <section className="ticker" aria-label="Key campaign facts"><div><strong>8 YEARS</strong><span>since Rachel rejected defeat</span></div><div><strong>8.68B+</strong><span>argents backed for Myrati</span></div><div><strong>1,200</strong><span>annual student scholarships</span></div></section>

      <section className="record-section" id="record"><div className="section-intro"><p className="kicker">THE EDELSTEIN-POWELL RECORD</p><h2>DON&apos;T LET<br />HISTORY <span>REPEAT.</span></h2><p>Rachel&apos;s 2064 campaign asks Myrati to forget. The record gives voters every reason to remember.</p></div><div className="timeline">{timeline.map(([date,title,text],index)=><article className="timeline-item" key={date}><div className="timeline-number">{String(index+1).padStart(2,"0")}</div><div><time>{date}</time><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className="prosper-section" id="prosper"><div className="prosper-head"><div><p className="kicker light">JB STONER&apos;S RECORD</p><h2>WE DIDN&apos;T<br />JUST RECOVER.<br /><span>WE BUILT.</span></h2></div><p>JB Stoner supported the Prosper Myrati Act: a long-term commitment to turn recovery into jobs, trade, education, security, and lasting opportunity.</p></div><div className="prosper-grid">{prosperProjects.map((item,index)=><article key={item.title}><div className="prosper-index">0{index+1}</div><strong>{item.figure}</strong><small>{item.unit}</small><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div><div className="act-strip"><span>PROSPER MYRATI ACT · SUPPORTED BY JB STONER</span><b>PORTS · AIRPORTS · SCHOLARSHIPS · RECONSTRUCTION</b></div></section>

      <section className="evidence-section"><div className="evidence-lead"><p className="kicker light">WHAT RACHEL WANTS FORGOTTEN</p><h2>THE LAST<br /><span>HIDEOUT.</span></h2><p>The concealed space identified as Edelstein-Powell&apos;s last hideout before her 2057 capture remains a stark image of where her politics led.</p><div className="stamp">CAPTURED<br /><small>13 OCT 2057</small></div></div><figure className="hideout"><img src="/images/hideout-diagram.png" alt="Diagram of a concealed underground chamber and air vent" /><figcaption><b>THE RECORD</b><span>Hideout reconstruction</span></figcaption></figure><figure className="transport"><img src="/images/transport.jpg" alt="Edelstein-Powell in protective transport equipment after capture" /><figcaption><b>THE RECORD</b><span>Transfer from custody</span></figcaption></figure></section>

      <section className="choice-section" id="choice"><p className="kicker centered">THE CHOICE IN 2064</p><h2>GO BACK TO CHAOS.<br /><span>OR KEEP BUILDING.</span></h2><div className="choice-grid"><article className="choice-card chaos"><div className="choice-image"><img src="/images/capture-group.png" alt="Edelstein-Powell escorted in handcuffs after capture" /><span>RACHEL</span></div><div className="choice-copy"><p className="choice-label">THE POLITICS OF GRIEVANCE</p><h3>Division. Drama.<br />Disorder.</h3><ul><li>Rejected a democratic result</li><li>Inflamed a regional crisis</li><li>Convicted of provoking violence</li><li>Asks Myrati to forget the past</li></ul></div></article><div className="versus">OR</div><article className="choice-card future"><div className="future-graphic"><span className="sun" /><div className="horizon" /><div className="future-word">JB</div></div><div className="choice-copy"><p className="choice-label">THE MODERATE WAY FORWARD</p><h3>Steady. Proven.<br />Building.</h3><ul><li>Backed billions in investment</li><li>Supported 1,200 annual scholarships</li><li>Put reconstruction before revenge</li><li>Kept Myrati moving forward</li></ul></div></article></div></section>

      <section className="manifesto" id="plan"><div className="manifesto-head"><div><p className="kicker">JB STONER&apos;S 2064 PLAN</p><h2>FINISH<br /><span>THE JOB.</span></h2></div><p>Four more years of practical, moderate government—turning the Prosper Myrati Act from blueprint into everyday results.</p></div><div className="policy-grid">{policies.map((policy,index)=><article className="policy-card" key={policy.title}><div className="policy-top"><span className="policy-icon" aria-hidden="true">{policy.icon}</span><small>0{index+1}</small></div><h3>{policy.title}</h3><p>{policy.text}</p><a href="#pledge" aria-label={`Support ${policy.title}`}>OUR COMMITMENT <span>→</span></a></article>)}</div><div className="manifesto-banner"><span>DON&apos;T REOPEN OLD WOUNDS.</span><strong>KEEP MYRATI MOVING.</strong></div></section>

      <section className="pledge" id="pledge"><div><p className="kicker light">THE MODERATE MAJORITY</p><h2>JB STONER<br /><span>2064.</span></h2></div><form className="pledge-form"><label htmlFor="email">Stand with JB</label><div className="input-row"><input id="email" type="email" placeholder="Your email address" aria-label="Your email address" /><button type="button">I&apos;M IN <span>→</span></button></div></form></section>
      <footer><a className="brand footer-brand" href="#top" aria-label="JB Stoner 2064 home"><img className="brand-logo" src="/images/mr-logo.png" alt="" /></a><div className="imprint">Friends of JB Stoner, 23021, Port Aaron.</div></footer>
    </main>
  );
}
