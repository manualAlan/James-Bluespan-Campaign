export const sitePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
export const asset = sitePath;

const links = [
  { id: "home", href: "/", label: "Home" },
  { id: "about", href: "/about/", label: "Meet James" },
  { id: "agenda", href: "/agenda/", label: "2070 agenda" },
];

export function CampaignHeader({ active }: { active: string }) {
  return (
    <>
      <a className="campaign-skip" href="#main-content">Skip to content</a>
      <header className="campaign-header">
        <div className="campaign-nav-shell">
          <a className="campaign-brand" href={sitePath("/")} aria-label="Bluespan 2070 home">Bluespan <span>2070</span></a>
          <nav className="campaign-desktop-nav" aria-label="Main navigation">
            {links.map((link) => <a key={link.id} href={sitePath(link.href)} aria-current={active === link.id ? "page" : undefined}>{link.label}</a>)}
          </nav>
          <a className="campaign-nav-action" href="#join">Get involved <span aria-hidden="true">↗</span></a>
          <details className="campaign-mobile-nav">
            <summary aria-label="Navigation menu"><span className="menu-lines" aria-hidden="true" /><span className="sr-only">Menu</span></summary>
            <nav aria-label="Mobile navigation">
              {links.map((link) => <a key={link.id} href={sitePath(link.href)} aria-current={active === link.id ? "page" : undefined}>{link.label}</a>)}
              <a href="#join">Get involved</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function GetInvolved() {
  return (
    <section className="campaign-join" id="join" aria-labelledby="join-title">
      <div className="campaign-container">
        <p className="campaign-eyebrow">Chasmia, forward. Together.</p>
        <h2 id="join-title">Stand with<br />James Bluespan.</h2>
        <p>Make the case for a stronger Chasmia. Share the 2070 agenda with your community.</p>
        <div className="campaign-join-actions">
          <button className="campaign-button" type="button" data-share-campaign hidden>Copy campaign link <span aria-hidden="true">↗</span></button>
          <a className="campaign-button campaign-button-outline" href={asset("/bluespan-2070.svg")} download="bluespan-2070.svg">Download campaign card <span aria-hidden="true">↓</span></a>
        </div>
        <p className="campaign-share-status" data-share-status role="status" aria-live="polite" />
        <noscript><p><a className="campaign-text-link light" href={sitePath("/agenda/")}>Read and share the 2070 agenda →</a></p></noscript>
      </div>
    </section>
  );
}

export function CampaignFooter() {
  return (
    <footer className="campaign-footer">
      <div className="campaign-container campaign-footer-grid">
        <a className="campaign-footer-brand" href={sitePath("/")}>Bluespan <span>2070</span><small>Chasmia, forward.</small></a>
        <nav aria-label="Footer navigation">
          <a href={sitePath("/about/")}>Meet James</a>
          <a href={sitePath("/agenda/")}>The agenda</a>
          <a href="#join">Get involved</a>
        </nav>
        <div className="campaign-party"><img src={asset("/images/liberal-party.png")} alt="Liberal Party" width="38" height="38" loading="lazy" /><span>Liberal Party<br /><small>Bluespan for Chasmia</small></span></div>
      </div>
      <div className="campaign-container campaign-footer-bottom"><small>© 2070 Bluespan for Chasmia Campaign.</small><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
    </footer>
  );
}
