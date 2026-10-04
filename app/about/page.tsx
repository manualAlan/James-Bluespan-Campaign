import type { Metadata } from "next";
import { CampaignFooter, CampaignHeader, GetInvolved, asset, sitePath } from "../components/campaign";

export const metadata: Metadata = {
  title: "Meet James Bluespan | Chasmia 2070",
  description: "Meet Governor James Bluespan and explore his record on public finances, schools, families, energy, and opportunity in Chasmia.",
};

export default function About() {
  return (
    <div className="campaign" id="top">
      <CampaignHeader active="about" />
      <main id="main-content">
        <section className="campaign-page-hero about-hero">
          <div className="campaign-container campaign-split">
            <div><p className="campaign-eyebrow">Governor of Chasmia</p><h1>Meet James<br /><span>Bluespan.</span></h1><p>Proven leadership. A belief in public investment. A commitment to Chasmia’s future.</p><a className="campaign-button" href={sitePath("/agenda/")}>The 2070 agenda <span aria-hidden="true">↗</span></a></div>
            <figure className="about-portrait"><img src={asset("/images/james-bluespan.webp")} alt="Governor James Bluespan" width="648" height="1000" fetchPriority="high" /></figure>
          </div>
        </section>
        <section className="campaign-section" aria-labelledby="about-record-title">
          <div className="campaign-container campaign-about-content">
            <div className="campaign-section-heading"><p className="campaign-eyebrow">A record of delivery</p><h2 id="about-record-title">Progress with purpose.</h2><div className="gold-rule" /><p>James Bluespan’s record combines disciplined public finances with ambitious investment in the people and places that make Chasmia thrive.</p></div>
            <div className="about-record-list">
              <article><span>01</span><div><h3>Balanced finances. Education first.</h3><p>The 2063 budget placed education first, increased infrastructure investment, and carried no debt-interest costs. That foundation informs the next chapter: protect public wealth and invest for the long term.</p></div></article>
              <article><span>02</span><div><h3>Practical support for families.</h3><p>A targeted levy on harmful products supports a refundable childcare boost for working families. Sports consumption and a public lottery fund free lunches for every public and charter school student.</p></div></article>
              <article><span>03</span><div><h3>Enterprise that creates opportunity.</h3><p>Kabuki Gardens in Littlewoods is a licensed entertainment district built around nightlife, hospitality, and high-value tourism, with 20% gaming and 25% services levies.</p></div></article>
              <article><span>04</span><div><h3>A stronger foundation for growth.</h3><p>The energy agenda combines nuclear and hydro power. ChasAir’s publicly backed, commercially managed model connects passengers, businesses, and cargo to opportunity at home and abroad.</p></div></article>
            </div>
          </div>
        </section>
        <section className="campaign-section about-connections">
          <div className="campaign-container campaign-split">
            <figure className="campaign-feature-image"><img src={asset("/images/chasair-a220.png")} alt="A ChasAir Airbus A220 in flight" width="1200" height="900" loading="lazy" /><figcaption>Connecting Chasmia to opportunity</figcaption></figure>
            <div className="campaign-feature-copy"><p className="campaign-eyebrow">The next chapter</p><h2>Opportunity.<br />Everywhere.</h2><div className="gold-rule" /><p>The 2070 agenda builds on this foundation with a protected wealth fund, support for investment, strong schools, dependable power, and infrastructure that reaches urban and rural communities alike.</p><a className="campaign-text-link" href={sitePath("/agenda/")}>Read the full agenda <span aria-hidden="true">→</span></a></div>
          </div>
        </section>
        <GetInvolved />
      </main>
      <CampaignFooter />
    </div>
  );
}
