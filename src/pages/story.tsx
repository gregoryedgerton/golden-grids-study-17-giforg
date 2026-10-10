import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { GridBand, type Cell } from "../bands/bands";
import { Credit, FactStrip, FactTile, NewsCard, Pic, PositionTile } from "../lib/cards";
import { Listen } from "../lib/modules";
import { FIGURES, PAGES, POSITIONS, REFERENCE, RELATED, STORY, WHOSE_STORY, type Fact } from "../content";
import { cited } from "../sources";
import "../styles.css";

const fact = (f: Fact): Cell => (_x, _k, flat) => flat ? <FactStrip f={f} /> : <FactTile f={f} />;

function App() {
  cited.add("story");
  return (
    <Page current={PAGES.story} source={REFERENCE.story} extra={WHOSE_STORY}>
      <article className="story" aria-labelledby="story-title">
        <header className="wrap story__head">
          <p className="slug"><span className="slug__name">{STORY.slug}</span></p>
          <h1 id="story-title" className="story__title">{STORY.title}</h1>
          <p className="story__date"><time dateTime="2026-10-10T07:00">{STORY.date}</time> · {STORY.time}</p>
          <p className="story__byline">{STORY.byline}</p>
          <Listen />
        </header>
        <figure className="wrap story__figure">
          <Pic k="pen" sizes="(min-width: 800px) 760px, 100vw" eager />
          <figcaption className="story__caption">{STORY.caption}</figcaption>
          <Credit k="pen" />
        </figure>
        <div className="wrap story__text">{STORY.lead.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>
      </article>
      <GridBand id="figures" title="The numbers in this report" sub="Who takes the drugs, what has been reported and who has sued." variant={1} from={2}
        cells={[fact(FIGURES.optic), fact(FIGURES.gallup), fact(FIGURES.naion), fact(FIGURES.all)]} strip={fact(FIGURES.seven)} />
      <section className="story" aria-label="The report, continued">
        <div className="wrap story__text">
          {STORY.sections.slice(0, 2).map((s) => <div key={s.h}><h2>{s.h}</h2>{s.p.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>)}
        </div>
      </section>
      <GridBand id="positions" title="Who says what" sub="Five parties to the question, and where each stands." variant={3} cells={POSITIONS.map((p): Cell => (x, key) => <PositionTile p={p} x={x} slotKey={key} />)} />
      <section className="story" aria-label="The report, concluded">
        <div className="wrap story__text">
          {STORY.sections.slice(2).map((s) => <div key={s.h}><h2>{s.h}</h2>{s.p.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>)}
          <p>{STORY.close}</p>
          <p className="story__advice">{STORY.advice}</p>
          <ul className="tags" aria-label="Tags, for show">{STORY.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <ul className="share" aria-label="Share, for show">{STORY.share.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </section>
      <GridBand id="related" title="More on these drugs" variant={0} from={2}
        cells={RELATED.map((s): Cell => (x, key) => <NewsCard s={s} x={x} slotKey={key} />)} strip={fact(FIGURES.pancreatitis)} />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
