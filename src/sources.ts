/** Where the news comes from. The credits list every source the page drew on. */
export const SOURCES = {
  home: { ref: true, short: "npr.org", full: "NPR, npr.org, the home page as shown on October 10, 2026: the stories, their sections and what each headline and summary said.", url: "https://www.npr.org/" },
  news: { ref: true, short: "npr.org, News", full: "NPR, the News page as shown on October 10, 2026.", url: "https://www.npr.org/sections/news/" },
  story: { ref: true, short: "NPR, report of October 10, 2026", full: "NPR, a report on lawsuits over GLP-1 drugs, by Yuki Noguchi with Sydney Lupkin, October 10, 2026. Restated and shortened; not reproduced.", url: "https://www.npr.org/2026/10/10/nx-s1-5996652/glp1-fda-naion-blind-lawsuit-ozempic" },
} as const;
export type SourceKey = keyof typeof SOURCES;
export const cited = new Set<SourceKey>();
