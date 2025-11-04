# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Benchmark Results

- Case: `small`
- Date: `2025-11-04 09:38:09`

**Build performance**

| Name                          | Dev cold start              | Root HMR      | Leaf HMR      | Prod build                |
| ----------------------------- | --------------------------- | ------------- | ------------- | ------------------------- |
| Rsbuild 1.6.1                 | 2596ms (2162 + 434) 1.3x    | 489ms (5.1x)  | 266ms (3.6x)  | 820ms (610 + 210) 1.1x    |
| Unpack 3.3.5                  | 2588ms (1395 + 1193) 1.3x   | 321ms (3.3x)  | 279ms (3.8x)  | 3799ms (3030 + 769) 4.9x  |
| Unpack (Prebundle) 3.3.5      | 12921ms (9638 + 3283) 6.6x  | 126ms (1.3x)  | 391ms (5.3x)  | 2708ms (1900 + 808) 3.5x  |
| Unpack (Native Watcher) 3.3.5 | 2249ms (1115 + 1134) 1.1x   | 160ms (1.7x)  | 124ms (1.7x)  | 1080ms (722 + 358) 1.4x   |
| Next.js (Turbopack) 16.0.1    | 11516ms (1363 + 10153) 5.8x | 205ms (2.1x)  | 159ms (2.1x)  | 7512ms (5300 + 2212) 9.7x |
| Farm 1.7.11                   | 1971ms (1461 + 510) 1.0x ◆  | 96ms (1.0x) ◆ | 204ms (2.8x)  | 934ms (853 + 81) 1.2x     |
| Vite (Rolldown) 7.1.20        | 8379ms (292 + 8087) 4.3x    | 875ms (9.1x)  | 129ms (1.7x)  | 776ms (533 + 243) 1.0x ◆  |
| Vite (SWC) 7.1.12             | 8479ms (334 + 8145) 4.3x    | 209ms (2.2x)  | 74ms (1.0x) ◆ | 2896ms (2640 + 256) 3.7x  |
| webpack (SWC) 5.102.1         | 9168ms (7154 + 2014) 4.7x   | 758ms (7.9x)  | 596ms (8.1x)  | 3924ms (3192 + 732) 5.1x  |

**Bundle sizes**

| Name                          | Total size       | Gzipped size     |
| ----------------------------- | ---------------- | ---------------- |
| Rsbuild 1.6.1                 | 814kB (1.1x)     | 194.7kB (1.0x) ◆ |
| Unpack 3.3.5                  | 826.2kB (1.1x)   | 200.3kB (1.0x)   |
| Unpack (Prebundle) 3.3.5      | 826.2kB (1.1x)   | 200.3kB (1.0x)   |
| Unpack (Native Watcher) 3.3.5 | 826.2kB (1.1x)   | 200.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 1861.7kB (2.5x)  | 499.3kB (2.6x)   |
| Farm 1.7.11                   | 1023.8kB (1.4x)  | 240.8kB (1.2x)   |
| Vite (Rolldown) 7.1.20        | 762.4kB (1.0x)   | 206.7kB (1.1x)   |
| Vite (SWC) 7.1.12             | 739.2kB (1.0x) ◆ | 197.6kB (1.0x)   |
| webpack (SWC) 5.102.1         | 873.1kB (1.2x)   | 237.9kB (1.2x)   |
<!-- BENCHMARK:END -->
