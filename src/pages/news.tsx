import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { GridBand, type Cell } from "../bands/bands";
import { NewsCard, PromoStrip } from "../lib/cards";
import { Results, Signup } from "../lib/modules";
import { FEATURED, PAGES, REFERENCE, RIVER, S, SUBTOPICS, pick, type Story } from "../content";
import { cited } from "../sources";
import "../styles.css";

const news = (s: Story): Cell => (x, key) => <NewsCard s={s} x={x} slotKey={key} />;
const river = pick(...RIVER);
const today = river.filter((s) => s.date === "October 10, 2026"), before = river.filter((s) => s.date !== "October 10, 2026");
const chunks = <T,>(list: T[], n: number): T[][] => list.length ? [list.slice(0, n), ...chunks(list.slice(n), n)] : [];

function App() {
  cited.add("news");
  const q = (new URLSearchParams(location.search).get("q") ?? "").trim();
  const found = q ? Object.values(S).filter((s) => `${s.slug} ${s.title} ${s.teaser ?? ""}`.toLowerCase().includes(q.toLowerCase())) : [];
  return (
    <Page current={PAGES.news} source={REFERENCE.news}>
      <section className="branding" aria-labelledby="news-title">
        <div className="wrap">
          <h1 id="news-title" className="branding__title">News</h1>
          <ul className="subtopics" aria-label="Sections, for show">{SUBTOPICS.map((t) => <li key={t}>{t}</li>)}</ul>
          <Signup />
        </div>
      </section>
      {q ? <Results q={q} list={found} /> : (
        <>
          <GridBand id="featured" title="Featured" quiet lead variant={0} from={2} cells={pick(...FEATURED).map(news)} strip={() => <PromoStrip tone="blue" label="On Air Now" line="Hourly News" />} />
          <GridBand id="today" title="October 10, 2026" variant={1} cells={today.map(news)} />
          {chunks(before, 5).map((list, i) => (
            <GridBand key={i} id={`before-${i + 1}`} title={i === 0 ? "October 9, 2026" : `October 9, 2026, part ${i + 1}`} quiet={i > 0} variant={i + 2} cells={list.map(news)} />
          ))}
        </>
      )}
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
