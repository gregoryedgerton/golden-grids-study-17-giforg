import { ExpandedCell, type ExpandGroup } from "./expand";
import { Fact as FactBox } from "./boxes";
import { Fit } from "./fit";
import { Icon, type IconName } from "../icons";
import { photo, seen } from "../photos";
import type { Fact, Position, Story } from "../content";
export { Icon };

/**
 * What goes in a square. The reference's promo card is a picture, a small
 * capital slug, a title and sometimes a serif summary and a blue play pill.
 * Here the same card takes whatever square the grid gives it and its type
 * scales with that square (`--u`, set in styles.css from the square's side):
 * what a square cannot hold it leaves out whole. A story with no picture
 * that could stand in for it honestly is a flat tile with its title fitted.
 */
export function Pic({ k, sizes = "(min-width: 1100px) 50vw, 100vw", eager, pos }: { k: string; sizes?: string; eager?: boolean; pos?: string }) {
  const p = photo(k);
  seen.add(k);
  return <img src={p.src} srcSet={p.srcSet} sizes={sizes} alt={p.alt} loading={eager ? "eager" : "lazy"} decoding="async" style={pos ? { objectPosition: pos } : undefined} />;
}
export function Credit({ k }: { k: string }) {
  const p = photo(k);
  return <figcaption className="credit">Photograph: <a href={p.page}>{p.credit}</a>, {p.source}, {p.licence}. It stands in for the story's subject and does not show it.</figcaption>;
}

/** The slug over a story: a blue tag where the reference has one, then the section in small capitals. A slug that carries the parody name keeps its case. */
export function Slug({ s }: { s: Story }) {
  const cased = s.slug.includes("GIF.org");
  return <p className="slug">{s.tag && <span className="slug__tag">{s.tag}</span>}{s.tag === s.slug ? null : <span className={cased ? "slug__name slug__name--cased" : "slug__name"}>{s.slug}</span>}</p>;
}
/** The reference's play pill, for show: nothing is played. */
export function Audio({ t }: { t: string }) {
  return <span className="audio" role="img" aria-label={`Audio, ${t.replace(":", " minutes ")} seconds, not available here`}><Icon name="playsolid" size={14} />{t}</span>;
}

function Detail({ s }: { s: Story }) {
  return (
    <div className="detail">
      <Slug s={s} />
      <p className="detail__lead">{s.title}</p>
      {s.teaser && <p className="detail__teaser">{s.teaser}</p>}
      {(s.date || s.audio) && <p className="detail__meta">{s.date}{s.date && s.audio ? " · " : null}{s.audio ? <Audio t={s.audio} /> : null}</p>}
      {s.href && <p><a className="btn" href={s.href}>Read the story</a></p>}
      <p className="note">Restated from the headline and summary the reference gave this story. The report itself is not reproduced here.</p>
    </div>
  );
}

/** A story: with a picture it is a photograph over text; without, a flat tile. It opens in place. */
export function NewsCard({ s, x, slotKey }: { s: Story; x: ExpandGroup; slotKey: string }) {
  if (!s.photo) {
    return (
      <FactBox label={s.slug} labelClass={s.slug.includes("GIF.org") ? "box__label--cased" : undefined} fitClass="fit--title" min={12} max={64} tone={`${s.tone ?? "grey"}${(s.teaser?.length ?? 0) > 110 ? " box--wordy" : ""}`} body={s.teaser ? <p>{s.teaser}</p> : undefined}
        expand={{ group: x, slotKey, title: s.title, full: <Detail s={s} /> }}>
        {s.title}
      </FactBox>
    );
  }
  return (
    <>
      <article className="card">
        <div className="card__media">
          <Pic k={s.photo} />
          <button className="media__open" {...x.triggerProps(slotKey)}><span className="visually-hidden">More: {s.title}</span></button>
          <span className={`card__pill${s.slug.includes("GIF.org") ? " card__pill--cased" : ""}`} aria-hidden="true">{s.slug}</span>
        </div>
        <div className="card__text">
          <Slug s={s} />
          <p className="card__title">{s.href ? <a href={s.href}>{s.title}</a> : s.title}</p>
          {s.teaser && <p className="card__body card__line--more">{s.teaser}</p>}
          {s.audio && <p className="card__audio card__line--more"><Audio t={s.audio} /></p>}
        </div>
      </article>
      {x.isOpen(slotKey) && (
        <ExpandedCell id={x.panelId(slotKey)} title={s.slug} onClose={x.close} closeRef={x.closeRef}>
          <div className="cell__split">
            <figure className="cell__photo"><Pic k={s.photo} sizes="(min-width: 1100px) 60vw, 100vw" /><Credit k={s.photo} /></figure>
            <Detail s={s} />
          </div>
        </ExpandedCell>
      )}
    </>
  );
}

/** A figure from a report: the number fitted to the square, what it counts above it. */
export function FactTile({ f }: { f: Fact }) {
  return (
    <FactBox label={f.label} fitClass="fit--display fit--num" max={150} spoken={f.spoken} tone={`${f.tone ?? "grey"}${(f.body?.length ?? 0) > 110 ? " box--wordy" : ""}`} body={f.body ? <p>{f.body}</p> : undefined}>
      {f.line}
    </FactBox>
  );
}
export function FactStrip({ f }: { f: Fact }) {
  return (
    <div className={`box box--strip box--${f.tone ?? "grey"}`} role="group" aria-label={`${f.spoken ?? f.line}: ${f.label}`}>
      <p className="box__label">{f.label}</p>
      <div className="box__fit"><Fit as="span" className="fit--display fit--num" min={8} max={150}>{f.line}</Fit></div>
    </div>
  );
}

/** A party to the story and where it stands: two or three words fitted, the rest behind More. */
export function PositionTile({ p, x, slotKey }: { p: Position; x: ExpandGroup; slotKey: string }) {
  return (
    <FactBox label={p.who} fitClass="fit--title" min={12} max={84} tone={`${p.tone} box--wordy`} body={<p>{p.body}</p>}
      expand={{ group: x, slotKey, title: p.who, full: <div className="cell__prose"><p className="detail__lead">{p.line}</p><p>{p.body}</p><p className="note">As the reference reported it. Nothing is quoted.</p></div> }}>
      {p.line}
    </FactBox>
  );
}

/** A flat tile of the shell's own: the station box, the newsletter, a donation. For show. */
export function PromoTile({ label, line, body, cta, tone, icon }: { label: string; line: string; body?: string; cta?: string; tone: "blue" | "red" | "black" | "grey"; icon?: IconName }) {
  return (
    <div className={`box box--${tone} promo`}>
      <p className="box__label box__label--cased">{icon && <Icon name={icon} size={16} />}{label}</p>
      <div className="box__fit"><Fit as="p" className="fit--title" min={12} max={72}>{line}</Fit></div>
      {body && <div className="box__body"><Fit as="div" className="fit--body" min={12} max={20}><p>{body}</p></Fit></div>}
      {cta && <div className="box__foot"><span className="pillbtn">{cta}</span></div>}
    </div>
  );
}
export function PromoStrip({ label, line, tone }: { label: string; line: string; tone: "blue" | "red" | "black" | "grey" }) {
  return (
    <div className={`box box--strip box--${tone}`} role="group" aria-label={`${label}: ${line}`}>
      <p className="box__label box__label--cased">{label}</p>
      <div className="box__fit"><Fit as="span" className="fit--title" min={8} max={64}>{line}</Fit></div>
    </div>
  );
}
export type { IconName };
