GIFcommit00016

# Layout study — NPR, as GIF.org

**Live:** [`https://gregoryedgerton.github.io/golden-grids-study-17-npr/`](https://gregoryedgerton.github.io/golden-grids-study-17-npr/)

An unaffiliated layout study. It rebuilds three pages of
[npr.org](https://www.npr.org/) (the home page, the News page and one report)
as stacked golden grids under a parody name, GIF.org. GIF.org is not a newsroom.
The news is NPR's of October 10, 2026, restated in the study's own words and
never quoted; nothing is broadcast, no form sends anything, and none of the
reference's sentences, photographs or marks is reproduced. Built with
[Golden Grids](https://github.com/gregoryedgerton/golden-grids) from the
[study template](https://github.com/gregoryedgerton/golden-grids-study-template).

## Reference

Read on 2026-10-10 in a desktop browser at 1,280px wide, signed out; text and
computed styles were taken from the pages. No screenshot is kept.

- **Home:** a lead story with three beside it, two rows of three cards, a
  river of single stories with pictures at the left, and titled groups (the
  midterm elections, a life-advice program, a science podcast, new movies), a
  video, and a footer of four lists. A column at the right carries the station
  player and sponsor messages.
- **News:** the section's name and eight subsections, a newsletter sign-up, a
  featured story with two beside it, then a dated river.
- **A report:** a slug, a headline, a dateline and byline, a blue audio bar, a
  photograph, serif text under four subheads with three related stories set
  into it, tags and share links.

**Measured register:** a white header with a three-block mark and a red Donate;
a grey (`#575757`) bar of sections in white capitals; `#212121` text; slugs in
tracked capitals at `#575757`; one blue, `#0a61db`, for links and play pills,
and `#07459c` for the audio bar; sans titles at 500 to 700, serif summaries and
story text (Inter and Source Serif 4 stand in for the reference's own faces);
4px corners on pictures. The reference has one scheme; dark is the study's own.

## Approach

The reference sets a lead beside a short stack, then rows of equal cards, then
a single-column river. The study sets each group as one grid: the first story
in the largest square, the rest in descending squares. A story with a
photograph that can stand in for it is a picture card; a story for which a
stand-in would mislead (a war, an execution, a deportation, a prize to a named
person) is a flat tile with its headline fitted to the square. A card's type is
set from its square's side, and what a square cannot hold is left out whole:
the summary and the play pill first, then the title and slug, leaving the
photograph with its section on a black label.

The report keeps its text as a column, as the reference sets it; its figures
and the positions of the parties are lifted out of the text into two grids.

## The pages

Three Vite entries, plain relative links, no router. `GridBand`
([`src/bands/bands.tsx`](src/bands/bands.tsx)) draws every band from cells;
`lib/plan.ts` chooses each grid.

| Page | Band | Cells |
| --- | --- | --- |
| Home | Top stories | the lead (it links to the report), three stories, the station box in the strip |
| | More top stories | six stories |
| | Only on GIF.org / More news | ten stories in two bands |
| | Midterm elections 2026 | eight stories and a donation tile in two bands |
| | Life advice | five stories |
| | Watch and read | four stories, one in the strip |
| | Science podcast | five stories |
| | New movies | four stories, one in the strip |
| | More from GIF.org | three stories |
| News | Head | flat: the section's name, its subsections, a newsletter form |
| | Featured | three stories and the station box |
| | October 10 / October 9 | nineteen stories in four bands, newest first |
| A report | Head and text | flat: slug, headline, dateline, the listen bar, a photograph, the text |
| | The numbers in this report | four figures and a strip |
| | Who says what | five parties, each opening to its position |
| | More on these drugs | three related stories and a figure |

**What answers back.** Every story opens its square in place. The lead's title
and its opened card lead to the report. Search (in the grey bar) looks through
the study's own stories and lists what it finds on the News page
(`news.html?q=`). On the report, the listen bar reads the page's own text
aloud with the browser's voice, where it has one. The newsletter form checks
the address and sends nothing.

## Content and provenance

- **The news is real; the words are not NPR's.** Each story was on NPR's home
  page or News page on October 10, 2026. Its headline and summary are restated;
  nothing is quoted. Public figures and organizations are named as NPR named
  them; private people (a plaintiff, a student, a deported man) are not named.
- **GIF.org stands for NPR in the copy.** Where a sentence says GIF.org found,
  was told or reports something, NPR did; the disclosure on every page says so.
- **The report** is a restatement at under half the length of NPR's, without
  its quotations. It was reported by Yuki Noguchi, with Sydney Lupkin
  contributing, and the disclosure credits them. A note under the text says it
  is not medical advice.
- **Program names** (NPR's shows and newsletters) are replaced by plain section
  names. The paid tier is played as GIF.org+.
- **Photographs** are in [`src/photos.json`](src/photos.json), each with its
  author, licence, page and alt text: from Unsplash under the Unsplash License
  (free to use; not a Creative Commons licence) and two NASA images in the
  public domain. None is NPR's or an agency's; each stands in for its subject
  and says so when opened.
- **Icons and the mark** are the study's own drawings.

## Notes for review

Observations for whoever reviews this study, recorded without a verdict.
Whether the layout suits the page is assessed separately, after every study
has been reviewed.

- **Real news under a parody name.** The stories are a real day's, including
  deaths, executions and a war, attributed in the copy to a newsroom that does
  not exist. The notice and the disclosure say whose reporting it is. Reviewers
  may want to judge whether that is said clearly enough, and whether the news
  should be refreshed, frozen at this date or replaced.
- **Stand-in photographs.** A hurricane seen from orbit stands in for another
  hurricane; a rocket for an engineer's obituary; a football field for a
  coach's. Twenty-two of the fifty-seven stories have no picture.
- **Order.** A grid gives its first cell the most room, so the order of cells
  is an editorial ranking the reference makes with position alone. Text-only
  stories are set in the larger squares so their headlines can be read.
- **Dates.** A story carries a date only where the reference showed one (its
  News page and the report). The home page shows none, so those stories have
  none here.
- **Left out.** The local headlines (they follow the reader's location), the
  sponsor messages, the station finder, two stories on suicide and a shooting,
  the quiz, and the right-hand column.
- **Accessibility.** `captures/scan.cjs` reports no overflow, no fitted line
  under 12px and no axe violations in Chrome and WebKit at 390, 820 and 1440,
  light and dark; `captures/cells.cjs` opens every square at 390. No
  screen-reader user has tested it.
- **Not rebuilt.** The menus under each section, sign-in (the header leaves
  out the reference's Sign In item), the audio player and playlist, the story
  pages other than one.

## Disclosure

Every page says it is a study in three places, all read from
[`src/study.json`](src/study.json): the page's metadata, a sticky notice at the
top, and "About this layout study", the last element on the page.

## Running it

```bash
npm install
npm run dev
NODE_PATH=<a node_modules with playwright> node captures/scan.cjs http://localhost:5173/ index news story
```

Pushing to `main` deploys to GitHub Pages.
