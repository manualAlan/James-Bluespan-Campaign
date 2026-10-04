import type { Metadata } from "next";
import { CampaignFooter, CampaignHeader, GetInvolved, asset, sitePath } from "../components/campaign";
import { priorities } from "../content";

export const metadata: Metadata = {
  title: "The 2070 Agenda | James Bluespan",
  description: "James Bluespan’s 2070 agenda for Chasmia: lasting prosperity, education and families, reliable clean power, and connected communities.",
};

export default function Agenda() {
  return (
    <div className="campaign" id="top">
      <CampaignHeader active="agenda" />
      <main id="main-content">
        <section className="campaign-page-hero">
          <div className="campaign-container">
            <p className="campaign-eyebrow">James Bluespan · Re-election 2070</p>
            <h1>The Bluespan<br /><span>agenda.</span></h1>
            <p>A stronger economy. Opportunity in every community. A plan for Chasmia’s next chapter.</p>
          </div>
        </section>
        <section className="campaign-section agenda-section" aria-label="The 2070 platform">
          <div className="campaign-container">
            <nav className="agenda-index" aria-label="Agenda topics">
              {priorities.map((priority, index) => <a key={priority.id} href={`#${priority.id}`}><span>0{index + 1}</span>{priority.title}<span aria-hidden="true">↓</span></a>)}
            </nav>
            <div className="agenda-grid">
              {priorities.map((priority, index) => (
                <article className="agenda-card" id={priority.id} key={priority.id}>
                  <span className="priority-number">0{index + 1} / The 2070 priorities</span>
                  <h2>{priority.title}</h2>
                  <p>{priority.description}</p>
                  <h3>The commitments</h3>
                  <ul>{priority.commitments.map((commitment) => <li key={commitment}>{commitment}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="campaign-section campaign-energy-detail">
          <div className="campaign-container campaign-split">
            <div className="campaign-feature-copy"><p className="campaign-eyebrow">Invest today. Build for tomorrow.</p><h2>Resources that<br />keep giving.</h2><div className="gold-rule" /><p>Turn finite resource wealth into permanent public capacity. Protect the fund, invest in people and places, and make room for businesses to build the next generation of Chasmian prosperity.</p><a className="campaign-text-link" href={sitePath("/about/")}>See the foundation for this plan <span aria-hidden="true">→</span></a></div>
            <figure className="campaign-feature-image"><img src={asset("/images/ap1000.jpg")} alt="AP1000 nuclear reactor units, the technology in the Verasul energy agenda" width="1200" height="900" loading="lazy" /><figcaption>Modern nuclear technology · Verasul energy agenda</figcaption></figure>
          </div>
        </section>
        <GetInvolved />
      </main>
      <CampaignFooter />
    </div>
  );
}
