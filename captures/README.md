# Captures

No screenshot of the reference is kept: its pages carry agencies' photographs.

- `find/unsplash.json`: Unsplash candidates (search results read in a browser on 2026-10-10).
- `picks.json`, `pick.py`: which candidate each photograph is, and its alt text; `pick.py` downloads them to `public/assets/` and writes `src/photos.json` (author, licence, page). Two are Wikimedia Commons files, named by title.
- `find.py`: searches Wikimedia Commons and Openverse for candidates.
- `scan.cjs`: overflow, fitted-line floor and axe, Chrome and WebKit, three widths, both schemes.
- `cells.cjs`: opens every expandable square at a phone width and fails on overflow or a drifting head.
- `site-issue.cjs`: run once, after the first deploy is live: it opens the "add this study to the gallery" issue on the marketing site's board from `src/study.json`. `--dry` prints it instead.

```bash
NODE_PATH=<a node_modules with playwright> node captures/scan.cjs http://localhost:5193/ index news story
```
