import { CampaignFooter, CampaignHeader, GetInvolved, asset, sitePath } from "./components/campaign";
import { priorities } from "./content";

export default function Home() {
  return (
    <div className="campaign" id="top">
      <CampaignHeader active="home" />
      <main id="main-content">
        <section className="campaign-hero" aria-labelledby="hero-title">
          <div className="campaign-container hero-grid">
            <div className="campaign-hero-copy">
              <p className="campaign-eyebrow">Chasmia · Re-election 2070</p>
              <h1 id="hero-title">James<br />Bluespan</h1>
              <p className="hero-tagline">A stronger Chasmia.<br />A future we build together.</p>
              <p className="campaign-hero-description">Proven leadership. Public investment. Lasting prosperity. Re-elect James Bluespan to keep Chasmia moving forward.</p>
              <div className="campaign-hero-actions">
                <a className="campaign-button" href={sitePath("/agenda/")}>Read the agenda</a>
                <a className="campaign-text-link light" href={sitePath("/about/")}>Explore the record</a>
              </div>
            </div>
            <figure className="campaign-portrait">
              <div className="portrait-frame">
                <img src={asset("/images/james-bluespan.webp")} alt="Governor James Bluespan" width="648" height="1000" fetchPriority="high" />
              </div>
              <figcaption><span>James Bluespan</span><span>Governor of Chasmia</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="campaign-priorities campaign-section" id="priorities" aria-labelledby="priorities-title">
          <div className="campaign-container">
            <div className="campaign-section-heading centered">
              <p className="campaign-eyebrow">The next chapter</p>
              <h2 id="priorities-title">The 2070 priorities</h2>

              <p>A clear plan to turn today’s progress into tomorrow’s opportunity.</p>
            </div>
            <div className="campaign-priority-grid">
              {priorities.map((priority, index) => (
                <a className="campaign-priority-card" key={priority.id} href={sitePath(`/agenda/#${priority.id}`)}>
                  <span className="priority-number">0{index + 1}</span>
                  <h3>{priority.title}</h3>
                  <p>{priority.summary}</p>
                  <span className="card-link">Explore the plan</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="campaign-future campaign-section" aria-labelledby="future-title">
          <div className="campaign-container campaign-split">
            <figure className="campaign-feature-image">
              <img src={asset("/images/hydro-night.jpg")} alt="An illuminated hydroelectric dam at night" width="1200" height="900" loading="lazy" />
              <figcaption>Reliable energy. Lasting opportunity.</figcaption>
            </figure>
            <div className="campaign-feature-copy">
              <p className="campaign-eyebrow">Built for the long term</p>
              <h2 id="future-title">Powering a<br />brighter future.</h2>

              <p>Chasmia’s strength is what we build together: good schools, dependable infrastructure, and an economy that gives people room to grow.</p>
              <p>With nuclear and hydro power, a protected wealth fund, and investment in communities, James Bluespan’s agenda puts our resources to work for generations.</p>
              <a className="campaign-text-link" href={sitePath("/agenda/#clean-energy")}>Discover the energy plan</a>
            </div>
          </div>
        </section>

        <section className="campaign-record campaign-section" aria-labelledby="record-title">
          <div className="campaign-container">
            <div className="record-heading">
              <div><p className="campaign-eyebrow">A foundation to build on</p><h2 id="record-title">A record of delivery.</h2></div>
              <a className="campaign-text-link" href={sitePath("/about/")}>Meet James</a>
            </div>
            <div className="campaign-record-grid">
              <article><span>Public finances</span><h3>Balanced books.<br /> Big ambition.</h3><p>A record centered on a balanced budget, debt-free public finances, and education as the top priority.</p></article>
              <article><span>Families & schools</span><h3>Support where<br /> it matters.</h3><p>A refundable childcare boost and fully funded lunches for public and charter school students.</p></article>
              <article><span>Jobs & opportunity</span><h3>Open to<br /> the world.</h3><p>From Kabuki Gardens to ChasAir, a platform for tourism, enterprise, and connections beyond Chasmia.</p></article>
            </div>
          </div>
        </section>
        <GetInvolved />
      </main>
      <CampaignFooter />
    </div>
  );
}
