import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { GridBand, type Cell } from "../bands/bands";
import { NewsCard, PromoStrip, PromoTile } from "../lib/cards";
import { PAGES, REFERENCE, pick, type Story } from "../content";
import { cited } from "../sources";
import "../styles.css";

const news = (s: Story): Cell => (x, key) => <NewsCard s={s} x={x} slotKey={key} />;
const cards = (...ids: string[]) => pick(...ids).map(news);
const onAir: Cell = (_x, _k, flat) => flat ? <PromoStrip tone="blue" label="On Air Now" line="Hourly News" /> : <PromoTile tone="blue" icon="headphones" label="On Air Now" line="Hourly News" cta="Listen Live" />;

function App() {
  cited.add("home");
  return (
    <Page current={PAGES.home} source={REFERENCE.home}>
      <h1 className="visually-hidden">GIF.org: breaking news, analysis, music, arts and podcasts</h1>
      <GridBand id="top" title="Top stories" quiet lead variant={0} from={2} cells={cards("glp1", "isaias", "latino", "gaza")} strip={onAir} />
      <GridBand id="top-2" title="More top stories" quiet variant={3} cells={cards("met", "kalshi", "execution", "india", "beans", "fall")} />
      <GridBand id="only" title="Only on GIF.org" quiet variant={1} from={2} cells={cards("hamilton", "tennessee", "deport", "openai")} strip={news(pick("russia")[0])} />
      <GridBand id="more" title="More news" quiet variant={4} cells={cards("diesel", "warehouse", "ditka", "sivan", "podcast")} />
      <GridBand id="midterms" title="Midterm elections 2026" variant={2} from={2} cells={cards("maine", "chatvote", "housemap", "postmark")} strip={news(pick("alaska")[0])} />
      <GridBand id="midterms-2" title="More on the midterms" quiet variant={5}
        cells={[...cards("sanantonio", "blackburn"), () => <PromoTile tone="red" icon="heartfill" label="Support public radio" line="Donate" body="GIF.org is a parody name and takes no donations." />, ...cards("teens")]} />
      <GridBand id="life" title="Life advice: tools to help you get it together" variant={0} cells={cards("cancer", "harass", "freetime", "apologize", "decide")} />
      <GridBand id="watch" title="Watch and read" quiet variant={3} from={2} cells={cards("desk", "pillay", "flock")} strip={news(pick("plague")[0])} />
      <GridBand id="science" title="Science podcast: the science behind everyday mysteries" variant={1} cells={cards("voicemail", "influence", "flying", "marsbody", "fossil")} />
      <GridBand id="movies" title="New movies" variant={4} from={2} cells={cards("sorkin", "fjord", "gibney")} strip={news(pick("misty")[0])} />
      <GridBand id="more-2" title="More from GIF.org" quiet variant={2} cells={cards("carson", "border", "pumpkins")} />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
