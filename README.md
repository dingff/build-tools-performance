# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Benchmark Results

- Case: `medium`
- Date: `2025-11-04`

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| ----------------------------- | --------------- | -------------- | -------------- | --------------- |
| Rsbuild 1.6.1                 | 765ms (1.0x) ◆  | 165ms (1.4x)   | 140ms (1.3x)   | 2047ms (1.1x)   |
| Unpack 3.3.5                  | 1246ms (1.6x)   | 146ms (1.3x)   | 106ms (1.0x) ◆ | 2029ms (1.1x)   |
| Unpack (Prebundle) 3.3.5      | 1709ms (2.2x)   | 114ms (1.0x) ◆ | 107ms (1.0x)   | 1843ms (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.5 | 1371ms (1.8x)   | 161ms (1.4x)   | 136ms (1.3x)   | 1906ms (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 29850ms (39.0x) | 304ms (2.7x)   | 109ms (1.0x)   | 20865ms (11.3x) |
| Farm 1.7.11                   | 9968ms (13.0x)  | 1061ms (9.3x)  | 194ms (1.8x)   | 8336ms (4.5x)   |
| Vite (Rolldown) 7.1.20        | 6164ms (8.1x)   | 141ms (1.2x)   | 164ms (1.5x)   | 2805ms (1.5x)   |
| Vite (SWC) 7.1.12             | 8610ms (11.3x)  | 215ms (1.9x)   | 131ms (1.2x)   | 11993ms (6.5x)  |
| webpack (SWC) 5.102.1         | 11607ms (15.2x) | 1506ms (13.2x) | 1364ms (12.9x) | 15980ms (8.7x)  |

**Bundle sizes**

| Name                          | Total size        | Gzipped size     |
| ----------------------------- | ----------------- | ---------------- |
| Rsbuild 1.6.1                 | 2882.7kB (1.1x)   | 680.6kB (1.0x) ◆ |
| Unpack 3.3.5                  | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack (Prebundle) 3.3.5      | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack (Native Watcher) 3.3.5 | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 3701.7kB (1.4x)   | 982.7kB (1.4x)   |
| Farm 1.7.11                   | 3574.5kB (1.4x)   | 827.3kB (1.2x)   |
| Vite (Rolldown) 7.1.20        | 2654.3kB (1.0x)   | 726.5kB (1.1x)   |
| Vite (SWC) 7.1.12             | 2578.5kB (1.0x) ◆ | 690kB (1.0x)     |
| webpack (SWC) 5.102.1         | 2962.5kB (1.1x)   | 746kB (1.1x)     |
<!-- BENCHMARK:END -->

