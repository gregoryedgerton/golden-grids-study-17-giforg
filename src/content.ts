/**
 * Every word and number on the three pages.
 *
 * What is real: the news. Each story is one the reference carried on its home
 * page or its News page on October 10, 2026, and the facts given for it are
 * the ones the reference's headline and summary gave. The people and
 * organizations in the news are named as the reference named them; private
 * people (a plaintiff, a student, a deported man) are not named here.
 *
 * What is the study's: every sentence. Headlines and summaries are restated,
 * nothing is quoted, and the one report with a page of its own (`STORY`) is a
 * shorter restatement of the reference's, without its quotations. The
 * newsroom on the pages is GIF.org, a parody name: where the copy says
 * GIF.org found, was told or reports, the reference did, and the disclosure
 * says so. The reference's named programs are given plain section names.
 */
export const PAGES = { home: "index.html", news: "news.html", story: "story.html" } as const;

export const REFERENCE = {
  home: { label: "npr.org", url: "https://www.npr.org/" },
  news: { label: "npr.org, News", url: "https://www.npr.org/sections/news/" },
  story: { label: "npr.org, the report on lawsuits over GLP-1 drugs", url: "https://www.npr.org/2026/10/10/nx-s1-5996652/glp1-fda-naion-blind-lawsuit-ozempic" },
} as const;

/** The header's items: the reference's own, for show, with the study's pages as links. */
export const UTIL = ["Newsletters", "Sign In", "GIF.org Shop", "Get GIF.org+"]; // written in the case they are shown in: the name is never transformed
export const NAV: { label: string; href?: string }[] = [
  { label: "News", href: PAGES.news }, { label: "Culture" }, { label: "Music" }, { label: "Podcasts & Shows" },
];
export const SUBTOPICS = ["National", "World", "Politics", "Business", "Climate", "Science", "Health", "Race"];
export const FOOTER: [string, { label: string; href?: string }[]][] = [
  ["Read & Listen", [{ label: "Home", href: PAGES.home }, { label: "News", href: PAGES.news }, { label: "Culture" }, { label: "Music" }, { label: "Podcasts & Shows" }]],
  ["Connect", [{ label: "Newsletters" }, { label: "Facebook" }, { label: "Instagram" }, { label: "Press" }, { label: "Public Editor" }, { label: "Corrections" }, { label: "Transcripts" }, { label: "Contact & Help" }]],
  ["About GIF.org", [{ label: "Overview" }, { label: "Diversity" }, { label: "GIF.org Network" }, { label: "Accessibility" }, { label: "Ethics" }, { label: "Finances" }]],
  ["Get Involved", [{ label: "Support Public Radio" }, { label: "Sponsor GIF.org" }, { label: "GIF.org Careers" }, { label: "GIF.org Shop" }, { label: "GIF.org Extra" }]],
];

export type Tone = "grey" | "blue" | "black" | "red" | "white";
const D10 = "October 10, 2026", D9 = "October 9, 2026";

export interface Story { id: string; slug: string; tag?: string; title: string; teaser?: string; date: string; photo?: string; audio?: string; tone?: Tone; href?: string }

const list: Story[] = [
  { id: "glp1", slug: "Health", title: "Lawsuits say GLP-1 drugs can do serious harm. How often is not known", teaser: "Data on serious side effects are thin, which makes it hard to answer, in science or in court, how often the drugs might cause harm such as blindness or pancreatitis.", date: D10, photo: "pen", audio: "4:29", href: PAGES.story },
  { id: "isaias", slug: "Weather", title: "Hurricane Isaias batters the Gulf Coast and pushes across Alabama", date: D10, photo: "hurricane" },
  { id: "oil", slug: "Business", title: "How the oil industry is getting ready for Hurricane Isaias", teaser: "Isaias is the first Atlantic hurricane of the season and is headed for the northern Gulf Coast.", date: D9, photo: "oil" },
  { id: "gaza", slug: "Photography", title: "In pictures: a year of ceasefire in Gaza", teaser: "A year after the last Israeli hostages were released and an end to the war was promised, Palestinians say the truce has held in name only.", date: D10, tone: "black" },
  { id: "latino", slug: "Elections", title: "Democrats lost ground with Latino voters. Now they are turning to influencers", teaser: "The party hopes Latino content creators can reach voters who have soured on both parties.", date: D10, photo: "creator" },
  { id: "execution", slug: "National", title: "The last public execution in the U.S. was in the 1930s. The Pentagon plans another", teaser: "The Pentagon says it will livestream the firing-squad execution, at Fort Hood, of the man convicted of the 2009 shooting there.", date: D9, audio: "3:24", tone: "grey" },
  { id: "india", slug: "Asia", title: "India cracks down on youth protests as anger at Modi and the election chief grows", teaser: "The protests are over a revision of the voter rolls. The opposition says it strips millions of the vote; the government says it removes duplicate entries.", date: D10, tone: "grey" },
  { id: "kalshi", slug: "Technology", tag: "Exclusive", title: "Kalshi hires a former FBI agent to fight money laundering", teaser: "The prediction market says it wants to keep criminals off its platform. It faces growing pressure over market manipulation and insider trading.", date: D9, photo: "chart" },
  { id: "met", slug: "Fine Art", title: "The Met puts Lee Krasner front and center, with Jackson Pollock beside her", teaser: "A major show at the Metropolitan Museum of Art hangs the work of the two married painters side by side.", date: D10, photo: "museum" },
  { id: "fall", slug: "Life Advice", title: "Sixteen cozy things to do before fall is over", date: D10, photo: "autumn" },
  { id: "beans", slug: "Breakfast Around the World", title: "Egypt's favorite breakfast is a pair of fava bean dishes with ancient roots", date: D10, photo: "beans", audio: "3:33" },
  { id: "tennessee", slug: "ONLY ON GIF.org", title: "Tennessee had Arizona's botched executions as a warning", teaser: "The official in charge of Tennessee's prisons during a botched execution there had earlier overseen three in Arizona that also went wrong.", date: D10, audio: "4:20", tone: "blue" },
  { id: "russia", slug: "Global Health", title: "Did Russia follow the rules in reporting a lab worker's death?", teaser: "A treaty signed by 197 countries, Russia among them, requires any death that could signal an outbreak to be reported.", date: D9, photo: "lab" },
  { id: "openai", slug: "Understanding AI", title: "Fired OpenAI employees question the company's commitment to safety", teaser: "Three former workers say they were punished for speaking out. The company disputes that and says they mishandled sensitive information.", date: D9, photo: "server" },
  { id: "deport", slug: "Immigration", title: "U.S. works to reverse an Egyptian man's deportation to a third country in Africa", teaser: "The effort to bring him back follows an Arizona judge's ruling that the deportation violated due process.", date: D9, tone: "grey" },
  { id: "hamilton", slug: "Obituaries", title: "Margaret Hamilton, whose software took astronauts to the moon, dies at 90", teaser: "She was in her early thirties when she led the engineers who wrote the software for NASA's Apollo missions.", date: D10, photo: "apollo", audio: "3:13" },
  { id: "ditka", slug: "Obituaries", title: "Mike Ditka, who coached the Bears to their only Super Bowl title, dies at 86", date: D10, photo: "football" },
  { id: "diesel", slug: "Energy", title: "Trump says the U.S. will get diesel from Russia to ease prices before the midterms", teaser: "He says he made the deal in a phone call with President Vladimir Putin. It relaxes years of American pressure on Moscow.", date: D9, photo: "fuel" },
  { id: "sivan", slug: "Music", title: "Troye Sivan is leaning into loneliness", teaser: "His new album gives the Australian singer-songwriter room for some darker feelings.", date: D10, photo: "stage", audio: "28:12" },
  { id: "podcast", slug: "Student Podcast Challenge", title: "She hated reading for years. Her winning podcast is about finding out why", teaser: "A middle schooler from Long Island has won the 2026 student podcast challenge with a story about dyslexia.", date: D10, photo: "podcast", audio: "3:37" },
  { id: "warehouse", slug: "ONLY ON GIF.org", title: "Neighbors say ICE has used a New Jersey warehouse as a detention center all summer", teaser: "Rumors ran through northern New Jersey all summer. GIF.org looked into them.", date: D10, audio: "7:52", tone: "black" },
  { id: "teens", slug: "Mental Health", title: "ChatGPT for Teens has safeguards. A watchdog says most of them fail", teaser: "A study by Common Sense Media found the chatbot talks to teens like a friend and does not alert parents when self-harm comes up.", date: D9, photo: "teen", audio: "2:54" },

  { id: "maine", slug: "Elections", title: "Democrats need more men. Voters in Maine say the party needs a better pitch", date: D10, photo: "maine", audio: "7:11" },
  { id: "postmark", slug: "Elections", tag: "Explainer", title: "Why a ballot mailed close to Election Day can be rejected for a late postmark", teaser: "Officials suggest having it postmarked at a post office counter, so that changes in mail processing do not delay the mark.", date: D9, photo: "mailbox" },
  { id: "sanantonio", slug: "Elections", title: "Trump makes a late pitch in San Antonio after upending the GOP map", date: D10, tone: "grey" },
  { id: "chatvote", slug: "Elections", title: "Voters are asking ChatGPT to help them decide in the midterms", date: D10, tone: "blue" },
  { id: "blackburn", slug: "Elections", title: "In the race for Tennessee governor, Blackburn declines to debate Green", date: D10, tone: "grey" },
  { id: "housemap", slug: "Elections", title: "Toss-ups, triage and targets: how to read the 2026 House map", date: D10, photo: "capitol" },
  { id: "alaska", slug: "Elections", title: "Alaska's Senate race runs into the pollock industry", date: D10, photo: "fishboat" },

  { id: "cancer", slug: "Life Advice", tag: "Perspective", title: "I had breast cancer. This is how my friends showed up", teaser: "October is Breast Cancer Awareness Month. A host who was diagnosed at 34 on how to support someone through treatment and after.", date: D10, photo: "friends" },
  { id: "desk", slug: "Watch", title: "Los Texmaniacs play a desk concert", teaser: "Accordion-driven music that is a living history lesson and good for a turn on the dance floor.", date: D10, photo: "accordion" },
  { id: "harass", slug: "Life Advice", title: "What to do if you are being harassed online", date: D10, tone: "grey" },
  { id: "decide", slug: "Life Advice", title: "How to make a hard decision", date: D10, photo: "desk" },
  { id: "freetime", slug: "Life Advice", title: "How to make more free time for yourself", date: D10, tone: "blue" },
  { id: "apologize", slug: "Life Advice", title: "There is a better way to apologize", date: D10, tone: "grey" },
  { id: "flock", slug: "Law", title: "Flock gets the criticism. Experts worry more about other police surveillance tools", teaser: "Real-time crime-center software lets police pull together vast amounts of data, and is often overlooked.", date: D10, photo: "camera" },
  { id: "plague", slug: "Global Health", title: "What is pneumonic plague?", teaser: "An ancient disease is back in the news after the death of a Russian lab worker this month.", date: D10, tone: "grey" },
  { id: "pillay", slug: "World", title: "Navi Pillay, South African human rights lawyer, wins the Nobel Peace Prize", teaser: "The 2026 prize honors her work for human rights and international law.", date: D10, tone: "black" },
  { id: "voicemail", slug: "Science Podcast", title: "In flood-prone Southeast Asia, these voicemails save lives", date: D10, photo: "flood" },
  { id: "flying", slug: "Science Podcast", title: "Why you need not fear flying, according to a flight expert", date: D10, photo: "plane" },
  { id: "marsbody", slug: "Science Podcast", title: "What living on Mars could do to the human body", date: D10, photo: "mars" },
  { id: "influence", slug: "Understanding AI", title: "OpenAI says it caught Russians and Iranians using ChatGPT for influence campaigns", teaser: "The company says Russian operatives used its chatbot to keep their bosses informed.", date: D10, tone: "grey" },
  { id: "fossil", slug: "Research News", title: "A surprising mammal fossil gives scientists something to chew on", teaser: "New evidence puts chewing and swallowing at least as far back as the middle Jurassic.", date: D10, photo: "fossil" },
  { id: "pumpkins", slug: "Ohio", title: "Growing colossal pumpkins inside Ohio's prisons", teaser: "People held at Belmont Correctional Institution raise giant pumpkins for competition each year.", date: D10, photo: "pumpkin" },
  { id: "misty", slug: "Movie Reviews", title: "‘Misty Green’ squanders its potential", date: D10, tone: "grey" },
  { id: "sorkin", slug: "Movie Reviews", title: "Aaron Sorkin warns of Facebook's recklessness in ‘The Social Reckoning’", date: D10, photo: "cinema" },
  { id: "fjord", slug: "Movie Reviews", title: "In ‘Fjord,’ winner of the top prize at Cannes, five children are taken from their parents", date: D10, tone: "black" },
  { id: "gibney", slug: "Movie Interviews", title: "How Alex Gibney, director of ‘Musk,’ became a critic", date: D10, tone: "grey" },
  { id: "carson", slug: "Books", title: "Anne Carson, poet and essayist, wins the 2026 Nobel Prize in literature", teaser: "Her writing ranges widely in genre and theme.", date: D10, photo: "books" },
  { id: "border", slug: "Middle East", title: "Three years after Oct. 7, Israelis return to the border to rebuild", teaser: "Residents are going back to communities along the Gaza border, and new families are moving in.", date: D10, tone: "grey" },

  { id: "baseball", slug: "Opinion", tag: "Opinion", title: "Opinion: I caught a playoff baseball. Can I keep it?", teaser: "A fan at an MLB playoff game this week kept a ball instead of handing it to a child nearby. What would you do?", date: D10, photo: "baseball" },
  { id: "tariffs", slug: "Economy", title: "Should we all be getting tariff refunds right now?", teaser: "Companies are getting billions of dollars back.", date: D9, photo: "port" },
  { id: "alabama", slug: "Elections", title: "In Alabama, the long fight for voting rights hangs over the election", teaser: "Three generations of activists on what the weakening of the Voting Rights Act means for the midterms.", date: D9, photo: "booth" },
  { id: "fandango", slug: "World", title: "The roots of fandango, the music of Veracruz", teaser: "A joyful tradition from Mexico's Gulf Coast, more than 300 years old and now heard around the world.", date: D9, tone: "grey" },
  { id: "defense", slug: "Economy", title: "Why American investors like European defense startups", teaser: "About half of this year's funding for Europe's defense technology comes from American investors.", date: D9, tone: "blue" },
  { id: "car", slug: "Immigration", title: "Deported to the Central African Republic, three men describe a life in limbo", teaser: "The administration says it has sent more than 25,000 people to countries they have no ties to.", date: D9, tone: "black" },
  { id: "memory", slug: "Student Podcast Challenge", title: "Why we remember: one student's journey into memory", teaser: "Why one teenager cannot forget the time he ate fries with his great-grandfather.", date: D9, photo: "fries" },
];
export const S = Object.fromEntries(list.map((s) => [s.id, s])) as Record<string, Story>;
export const pick = (...ids: string[]): Story[] => ids.map((id) => { const s = S[id]; if (!s) throw new Error(`no story "${id}"`); return s; });

/** The News page's river, newest first, as the reference's ran. */
export const RIVER: string[] = ["latino", "met", "gaza", "india", "kalshi", "openai", "diesel", "tariffs", "alabama", "execution", "fandango", "deport", "russia", "oil", "defense", "car", "postmark", "teens", "memory"];
export const FEATURED: string[] = ["baseball", "glp1", "fall"];

/* ---------- The report ---------- */

export interface Fact { label: string; line: string; body?: string; tone?: Tone; spoken?: string }
export interface Position { who: string; line: string; body: string; tone: Tone }

export const STORY = {
  slug: "Health",
  title: "Lawsuits say GLP-1 drugs can do serious harm. How often is not known",
  date: "October 10, 2026", time: "7:00 AM ET",
  byline: "GIF.org health desk",
  listen: "4-Minute Listen",
  caption: "An injection pen. GLP-1 drugs are given by pen, most of them once a week.",
  lead: [
    "A man in suburban Maryland who had driven forklifts and loaders for forty years was put on Ozempic, a GLP-1 drug, for diabetes in early 2023. On New Year's Eve he woke unable to see out of his right eye.",
    "His doctor named the cause as NAION, a form of optic neuropathy in which small strokes cut off the eye's blood supply. It cannot be operated on. When the man's wife asked whether the drug might be involved, the doctor said he had heard nothing of the kind.",
    "Seven months later a study in JAMA Ophthalmology reported higher rates of NAION among diabetic patients taking semaglutide, the drug's active ingredient. Neither the man nor his doctor knew of it. He kept up his weekly injections, and a year after the first eye he lost the sight of the second.",
    "He has sued the drug's maker, Novo Nordisk, saying it failed to warn patients and doctors. His case is one of many gathered into two large consolidated lawsuits that allege life-threatening or life-altering harm from GLP-1 drugs. The company told GIF.org that the cases are without merit and pointed to later research that casts doubt on a link.",
  ],
  sections: [
    { h: "Correlation, not cause", p: ["What the courts must weigh is whether the drugs caused the harm. Observational data can show that people on the drugs had a complication more often; they cannot show why.", "Two medical societies, the American Academy of Ophthalmology and the North American Neuro-Ophthalmology Society, said the JAMA study was not of a kind that can show cause. They acknowledged a possible link and called for more research, and they do not recommend that patients stop taking their medication."] },
    { h: "An incomplete database", p: ["The Food and Drug Administration keeps a database of adverse events. Reporting to it is mostly voluntary and the agency does not verify what comes in, but it is the first step toward further study and, in time, a change to a label.", "GIF.org found more than 1,000 reports of optic neuropathy tied to GLP-1 drugs since 2024, among nearly 190,000 reports in all, most of them about stomach trouble, dosing mistakes or redness where the needle went in. The agency says it has begun its own study of the risk and will decide whether to act when that is done. It has not asked for a change to the warning label."] },
    { h: "In court", p: ["A lead attorney for the plaintiffs says that is not enough, and that the makers should update their warnings now, as they have in Europe, however rare the conditions are. No clinical trial, he argues, is large or varied enough to catch the rarest events.", "His cases include 247 plaintiffs with NAION and more than 4,000 with serious digestive conditions such as pancreatitis or gallstones. Eli Lilly, which makes the GLP-1 drugs Mounjaro and Zepbound, says it will defend itself vigorously."] },
    { h: "Why reports go unfiled", p: ["Obesity and diabetes affect many organs and raise the risk of other illness, which makes it hard to say that a problem arising during treatment was caused by the drug. A diabetes specialist at Emory University says he did not report three patients who developed pancreatitis or gallstones on the drugs, because he could not be sure of the cause: they may have had disease that had not yet shown itself.", "Online sales add to the difficulty. A pharmacist at the West Texas Poison Control Center says many sites offer little or no medical supervision, that calls about vomiting and other side effects are rising, and that a patient who bought the drug that way may have no doctor to tell."] },
  ],
  close: "The plaintiffs are seeking damages. The man's wife also wants more warnings, which she believes could have spared her husband's sight.",
  advice: "This page restates a news report and is not medical advice. The medical societies named in it do not recommend that patients stop taking their medication; questions about a prescription are for the doctor who wrote it.",
  tags: ["glp-1", "side effect", "ozempic", "lawsuit", "fda"],
  share: ["Facebook", "Flipboard", "Email"],
};

export const FIGURES = {
  gallup: { label: "Americans on a GLP-1 for weight loss", line: "1 in 10", body: "More than one in ten Americans, by a recent Gallup analysis. One in seven has taken one at some point.", tone: "blue", spoken: "More than one in ten" },
  optic: { label: "Reports of optic neuropathy since 2024", line: "1,000+", body: "Found by GIF.org in the FDA's adverse-events database. The agency does not verify the reports.", tone: "black", spoken: "more than one thousand" },
  all: { label: "Reports about GLP-1 drugs in that time", line: "190,000", body: "Nearly. Most concern stomach trouble, dosing mistakes or redness at the injection site.", tone: "grey", spoken: "nearly one hundred and ninety thousand" },
  naion: { label: "Plaintiffs with NAION", line: "247", body: "In the two consolidated lawsuits, by the count of a lead attorney for the plaintiffs.", tone: "red" },
  digestive: { label: "Plaintiffs with serious digestive conditions", line: "4,000+", body: "Pancreatitis and gallstones among them.", tone: "grey", spoken: "more than four thousand" },
  pancreatitis: { label: "Reports of pancreatitis since 2024", line: "1,928", body: "A further 135 are listed as necrotizing pancreatitis.", tone: "blue" },
  seven: { label: "Americans who have ever taken one", line: "1 in 7", tone: "grey", spoken: "one in seven" },
} satisfies Record<string, Fact>;

export const POSITIONS: Position[] = [
  { who: "The plaintiffs", line: "Warn now", body: "They say the makers failed to warn patients and doctors of risks such as NAION and pancreatitis, and that warnings should be updated however rare the harm. They are seeking damages.", tone: "black" },
  { who: "Novo Nordisk", line: "Without merit", body: "The maker of Ozempic and Wegovy says the cases are without merit, that NAION and other serious conditions were exceedingly rare in its trials, and that later research casts doubt on a link. It says it keeps collecting side-effect data and sharing it with the FDA.", tone: "grey" },
  { who: "Eli Lilly", line: "Will defend", body: "The maker of Mounjaro and Zepbound, whose active ingredient is tirzepatide, says it will defend itself vigorously against the claims.", tone: "grey" },
  { who: "The FDA", line: "Still assessing", body: "The agency says it has begun its own study of the NAION risk and will decide whether regulatory action is needed when its assessment is complete. It has not asked for a change to the label.", tone: "blue" },
  { who: "Two eye societies", line: "Do not stop", body: "The American Academy of Ophthalmology and the North American Neuro-Ophthalmology Society say the study that found the correlation cannot show cause, that a link is possible and needs research, and that patients should not stop their medication for now.", tone: "red" },
];

export const RELATED: Story[] = [
  { id: "rel-1", slug: "Health", title: "GLP-1 drugs do not work for everyone. Personalized obesity care one day might", date: "Earlier", photo: "pharmacy" },
  { id: "rel-2", slug: "Your Health", title: "The new obesity drugs work. The dilemma comes when people have to stop", date: "Earlier", photo: "eye" },
  { id: "rel-3", slug: "Living Better", title: "I quit Ozempic and chose feeling healthy over chasing thinness", date: "Earlier", tone: "grey" },
];

/** For the disclosure on every page: whose reporting this is. */
export const WHOSE = "GIF.org is this study's name for the newsroom on these pages; it does not exist. The news is NPR's: every story here was on npr.org's home page or its News page on October 10, 2026, and is restated in the study's own words from the headline and summary NPR gave it. Where the copy says GIF.org found, was told, looked into or reports something, NPR did. Nothing is quoted, and the reports themselves are not reproduced.";
export const WHOSE_STORY = "The report on this page is NPR's, by Yuki Noguchi, with Sydney Lupkin contributing, published October 10, 2026. This page is a shorter restatement of it without its quotations; the people it interviewed are not named here. The figures and the positions of the companies, the agency and the medical societies are as NPR reported them.";
