# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-13`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B12378%2C2860%2C1930%2C3362%2C2484%2C1655%2C67655%2C12621%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A77803.25%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1382%2C481%2C298%2C240%2C287%2C122%2C855%2C924%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1589.3%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B191%2C361%2C182%2C206%2C130%2C99%2C66%2C159%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A415.15%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B12733%2C4752%2C4589%2C4695%2C5099%2C4131%2C30311%2C4896%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A34857.649999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.3%27%2C%277403.2%27%2C%277395.8%27%2C%277485.5%27%2C%277485.5%27%2C%277485.5%27%2C%277929.6%27%2C%276877.9%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.294999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272513.5%27%2C%271674.5%27%2C%271672.1%27%2C%271708.1%27%2C%271708.1%27%2C%271708.1%27%2C%272017.8%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2890.5249999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 12378ms (7.5x)  | 1382ms (11.3x) | 191ms (2.9x)  | 12733ms (3.1x)  |
| Rspack CLI 1.6.3              | 2860ms (1.7x)   | 481ms (3.9x)   | 361ms (5.5x)  | 4752ms (1.2x)   |
| Rsbuild 1.6.5                 | 1930ms (1.2x)   | 298ms (2.4x)   | 182ms (2.8x)  | 4589ms (1.1x)   |
| Unpack (Native Watcher) 3.5.0 | 3362ms (2.0x)   | 240ms (2.0x)   | 206ms (3.1x)  | 4695ms (1.1x)   |
| Unpack 3.5.0                  | 2484ms (1.5x)   | 287ms (2.4x)   | 130ms (2.0x)  | 5099ms (1.2x)   |
| Unpack (Prebundle) 3.5.0      | 1655ms (1.0x) ◆ | 122ms (1.0x) ◆ | 99ms (1.5x)   | 4131ms (1.0x) ◆ |
| Next.js (Turbopack) 16.0.2    | 67655ms (40.9x) | 855ms (7.0x)   | 66ms (1.0x) ◆ | 30311ms (7.3x)  |
| Vite (Rolldown) 7.2.5         | 12621ms (7.6x)  | 924ms (7.6x)   | 159ms (2.4x)  | 4896ms (1.2x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10633.3kB (1.5x)  | 2513.5kB (1.5x)   |
| Rspack CLI 1.6.3              | 7403.2kB (1.1x)   | 1674.5kB (1.0x)   |
| Rsbuild 1.6.5                 | 7395.8kB (1.1x)   | 1672.1kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.5.0 | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack 3.5.0                  | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.0      | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.2    | 7929.6kB (1.2x)   | 2017.8kB (1.2x)   |
| Vite (Rolldown) 7.2.5         | 6877.9kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->





































