# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/magicwarms/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/magicwarms/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A one-page poster of the news from Monday 23 November 2026: six stories from six regions, each confirmed by at least two independent outlets that day. The poster is drawn as inline SVG in `poster/poster.html`, rendered once to `entry.png` by `poster/render.mjs`, and `main.ts` copies that PNG to the output folder.

The six stories: Nvidia reinstating CEO Jensen Huang, Zelensky asking NATO to admit Ukraine, Oxfam's report on contamination in Gaza (disputed by Israel's embassy), UK sanctions on Myanmar military leaders after the ICJ genocide ruling, DR Congo's new cobalt export ban, and the death of Australian music broadcaster Molly Meldrum.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To redraw the poster after editing `poster/poster.html` (needs Chrome, set `CHROME_PATH` if it is not in the default place):

```sh
node poster/render.mjs
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=behh0318&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
