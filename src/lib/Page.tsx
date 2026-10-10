import { useState, type ReactNode } from "react";
import { Tools } from "./tools";
import { StudyBanner, StudyDisclosure } from "./study";
import { Credits } from "./modules";
import { Icon, type IconName } from "../icons";
import { FOOTER, NAV, PAGES, UTIL, WHOSE } from "../content";
import { useFontsReady } from "./fonts";

/**
 * The shell, after the reference's: a white bar with the mark at the left,
 * four small capital links (newsletters, sign in, the shop, the paid tier)
 * and a red Donate; under it a grey bar of News, Culture, Music, Podcasts &
 * Shows and Search; a footer of four lists and the legal line. The items are
 * the reference's, for show; News is the study's own page and the search
 * looks through the study's own stories. Nothing in the shell leaves for the
 * reference: its pages are linked only from the notice and the disclosure.
 */
const NAV_ICON: Record<string, IconName> = { News: "news", Culture: "culture", Music: "music", "Podcasts & Shows": "headphones" };
const UTIL_ICON: Record<string, IconName> = { Newsletters: "mail", "Sign In": "user", "GIF.org Shop": "bag", "Get GIF.org+": "plus" };

/** The mark: G, I and F on three blocks, then the rest of the name. */
export function Mark() {
  return (
    <a className="mark" href={PAGES.home} aria-label="GIF.org, home">
      <span className="mark__blocks" aria-hidden="true"><b>G</b><b>I</b><b>F</b></span><span className="mark__tail" aria-hidden="true">.org</span>
    </a>
  );
}

function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div className="hsearch">
      <button type="button" className="menu__item menu__btn" aria-expanded={open} aria-controls="hsearch-form" onClick={() => setOpen(!open)}><Icon name="search" size={16} /><span>Search</span></button>
      {open && (
        <form id="hsearch-form" className="hsearch__form" role="search" action={PAGES.news} method="get">
          <label className="visually-hidden" htmlFor="hq">Search the stories</label>
          <input id="hq" name="q" type="search" autoFocus placeholder="Search the stories" required />
          <button type="submit" className="btn">Search</button>
        </form>
      )}
    </div>
  );
}

export function Page({ current, source, extra, children }: { current: string; source: { label: string; url: string }; extra?: string; children: ReactNode }) {
  useFontsReady(["400 1em Inter", "700 1em Inter", "400 1em 'Source Serif 4'"]);
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <StudyBanner />
      <Tools />
      <header className="top">
        <div className="wrap top__row">
          <Mark />
          <ul className="util">{UTIL.map((u) => <li key={u}><Icon name={UTIL_ICON[u]} size={15} /><span>{u}</span></li>)}</ul>
          <span className="donate"><Icon name="heartfill" size={14} />Donate</span>
        </div>
        <nav className="menu" aria-label="Primary">
          <div className="wrap menu__row">
            {NAV.map((n) => n.href
              ? <a key={n.label} className="menu__item" href={n.href} aria-current={n.href === current ? "page" : undefined}><Icon name={NAV_ICON[n.label]} size={16} /><span>{n.label}</span></a>
              : <span key={n.label} className="menu__item menu__item--show"><Icon name={NAV_ICON[n.label]} size={16} /><span>{n.label}</span></span>)}
            <Search />
          </div>
        </nav>
      </header>
      <main id="content">{children}</main>
      <footer className="foot">
        <div className="wrap foot__cols">
          {FOOTER.map(([title, items]) => <div key={title}><h2>{title}</h2><ul>{items.map((i) => <li key={i.label}>{i.href ? <a href={i.href}>{i.label}</a> : <span>{i.label}</span>}</li>)}</ul></div>)}
        </div>
        <p className="wrap foot__legal"><span>Terms of Use</span><span>Privacy</span><span>Your Privacy Choices</span><span>Text Only</span><span>© 2026 GIF.org</span></p>
      </footer>
      <StudyDisclosure>
        <p>{WHOSE}</p>
        {extra && <p>{extra}</p>}
        <p>This page follows <a href={source.url}>{source.label}</a> as it was shown on October 10, 2026.</p>
        <Credits />
      </StudyDisclosure>
    </>
  );
}
