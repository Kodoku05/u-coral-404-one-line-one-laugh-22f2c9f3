[![make.fun · u-coral-404-one-line-one-laugh-22f2c9f3](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-one-laugh-22f2c9f3)
[![rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Kodoku05/u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-one-laugh-22f2c9f3)
[![reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Kodoku05/u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-one-laugh-22f2c9f3)

A deterministic program that writes one funny line of at most 200 characters to `/output/entry.txt`. Built for the make.fun "One Line, One Laugh" competition using only the Node.js standard library.

## Run it

Use Node.js 22 with TypeScript execution support enabled (22.18 or later), or a newer Node.js release.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Without `MAKEFUN_OUTPUT_DIR`, the output directory defaults to `/output`. The program validates the Unicode code-point count and reports failures with a nonzero exit status.

Built for [make.fun](https://make.fun).
