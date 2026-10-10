import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "../icons";
import { seen, photo } from "../photos";
import { SOURCES, cited, type SourceKey } from "../sources";
import { STORY, type Story } from "../content";

/** Flat modules: bars, forms and running text. They are not grids because their content has no hierarchy to descend. */

/** A bar that sticks under the notice tells the page its height, so an opened square's head and in-page links clear it. It reports 0 when it is not sticking. */
export function useBarHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current; if (!el) return;
    const set = () => document.documentElement.style.setProperty("--bar-h", getComputedStyle(el).position === "sticky" ? `${Math.round(el.getBoundingClientRect().height)}px` : "0px");
    set();
    const ro = new ResizeObserver(set); ro.observe(el);
    window.addEventListener("resize", set);
    return () => { ro.disconnect(); window.removeEventListener("resize", set); document.documentElement.style.removeProperty("--bar-h"); };
  }, []);
  return ref;
}

/** The newsletter bar the News page carries. It sends nothing. */
export function Signup() {
  const [mail, setMail] = useState(""); const [msg, setMsg] = useState("");
  return (
    <form className="signup" onSubmit={(e) => { e.preventDefault(); setMsg(/^\S+@\S+\.\S+$/.test(mail.trim()) ? "Nothing was sent: this is a layout study and there is no newsletter." : "Enter an email address."); }}>
      <label htmlFor="signup-mail">Subscribe to the GIF.org morning email</label>
      <div className="signup__row">
        <input id="signup-mail" type="email" autoComplete="off" placeholder="Email address" value={mail} onChange={(e) => { setMail(e.target.value); setMsg(""); }} />
        <button type="submit" className="btn">Subscribe</button>
      </div>
      <p className="note" role="status">{msg || "This form sends nothing."}</p>
    </form>
  );
}

/** What a search on the News page finds: a plain list, newest first. */
export function Results({ q, list }: { q: string; list: Story[] }) {
  return (
    <section className="flat" aria-labelledby="results-title">
      <div className="wrap">
        <h2 id="results-title" className="flat__title" role="status">{list.length} {list.length === 1 ? "story" : "stories"} for “{q}”</h2>
        <p><a className="textlink" href="news.html">Clear the search</a></p>
        <ul className="results">
          {list.map((s) => (
            <li key={s.id}>
              <p className="slug"><span className="slug__name">{s.slug}</span></p>
              <p className="results__title">{s.href ? <a href={s.href}>{s.title}</a> : s.title}</p>
              {s.teaser && <p className="results__teaser">{s.date ? `${s.date} · ` : ""}{s.teaser}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** The listen bar on a story. The reference plays a recording; this reads the page's own text aloud with the browser's voice, where it has one. */
export function Listen() {
  const [on, setOn] = useState(false);
  const can = typeof window !== "undefined" && "speechSynthesis" in window;
  useEffect(() => () => { if (can) window.speechSynthesis.cancel(); }, [can]);
  const toggle = () => {
    if (!can) return;
    const synth = window.speechSynthesis;
    if (on) { synth.cancel(); setOn(false); return; }
    const text = [STORY.title, ...STORY.lead, ...STORY.sections.flatMap((s) => [s.h, ...s.p]), STORY.close].join(" ");
    const u = new SpeechSynthesisUtterance(text); u.lang = "en-US"; u.onend = () => setOn(false); u.onerror = () => setOn(false);
    synth.cancel(); synth.speak(u); setOn(true);
  };
  return (
    <div className="listen">
      <button type="button" className="listen__play" aria-pressed={on} disabled={!can} onClick={toggle}><Icon name={on ? "stop" : "playsolid"} size={18} /><span>{on ? "Stop" : STORY.listen}</span></button>
      <span className="listen__note">{can ? "Read aloud by your browser's own voice. No recording is played." : "Your browser has no voice to read this aloud."}</span>
      <span className="pillbtn pillbtn--light">Transcript</span>
    </div>
  );
}

/** Every photograph and every source on the page, for the disclosure. Rendered after the page has drawn. */
export function Credits() {
  const [keys, setKeys] = useState<string[]>([]);
  const [src, setSrc] = useState<SourceKey[]>([]);
  useEffect(() => {
    const read = () => {
      const k = [...seen], s = [...cited];
      setKeys((old) => (old.join() === k.join() ? old : k));
      setSrc((old) => (old.join() === s.join() ? old : s));
    };
    read();
    const t = setInterval(read, 1500);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      {keys.length > 0 && (
        <details>
          <summary>Photographs on this page ({keys.length})</summary>
          <ul>{keys.map((k) => { const p = photo(k); return <li key={k}>{p.alt}. <a href={p.page}>{p.credit}</a>, {p.source}, {p.licence}.</li>; })}</ul>
        </details>
      )}
      {src.length > 0 && (
        <details>
          <summary>Sources for the page ({src.length})</summary>
          <ul>{src.map((k) => <li key={k}><a href={SOURCES[k].url}>{SOURCES[k].short}</a>: {SOURCES[k].full}</li>)}</ul>
        </details>
      )}
    </>
  );
}
