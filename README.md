# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-07`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B11462%2C2199%2C3275%2C3889%2C2284%2C54050%2C16937%2C12990%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A59455.00000000001%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B662%2C392%2C301%2C289%2C191%2C901%2C948%2C883%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1042.8000000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B197%2C203%2C189%2C298%2C106%2C71%2C136%2C135%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A327.8%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B12408%2C4904%2C4806%2C4819%2C5065%2C33858%2C5367%2C32736%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A37243.8%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710601.1%27%2C%277378.5%27%2C%277468.1%27%2C%277468.1%27%2C%277468.1%27%2C%277912.2%27%2C%276862.3%27%2C%276710.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A11661.210000000001%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272508.4%27%2C%271669.4%27%2C%271705.3%27%2C%271705.3%27%2C%271705.3%27%2C%272015.4%27%2C%271795.7%27%2C%271732.5%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2759.2400000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 11462ms (5.2x)  | 662ms (3.5x)   | 197ms (2.8x)  | 12408ms (2.6x)  |
| Rsbuild 1.6.2                 | 2199ms (1.0x) ◆ | 392ms (2.1x)   | 203ms (2.9x)  | 4904ms (1.0x)   |
| Unpack (Native Watcher) 3.3.6 | 3275ms (1.5x)   | 301ms (1.6x)   | 189ms (2.7x)  | 4806ms (1.0x) ◆ |
| Unpack 3.3.6                  | 3889ms (1.8x)   | 289ms (1.5x)   | 298ms (4.2x)  | 4819ms (1.0x)   |
| Unpack (Prebundle) 3.3.6      | 2284ms (1.0x)   | 191ms (1.0x) ◆ | 106ms (1.5x)  | 5065ms (1.1x)   |
| Next.js (Turbopack) 16.0.1    | 54050ms (24.6x) | 901ms (4.7x)   | 71ms (1.0x) ◆ | 33858ms (7.0x)  |
| Vite (Rolldown) 7.2.1         | 16937ms (7.7x)  | 948ms (5.0x)   | 136ms (1.9x)  | 5367ms (1.1x)   |
| Vite (SWC) 7.2.1              | 12990ms (5.9x)  | 883ms (4.6x)   | 135ms (1.9x)  | 32736ms (6.8x)  |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10601.1kB (1.6x)  | 2508.4kB (1.5x)   |
| Rsbuild 1.6.2                 | 7378.5kB (1.1x)   | 1669.4kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.6 | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack 3.3.6                  | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack (Prebundle) 3.3.6      | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 7912.2kB (1.2x)   | 2015.4kB (1.2x)   |
| Vite (Rolldown) 7.2.1         | 6862.3kB (1.0x)   | 1795.7kB (1.1x)   |
| Vite (SWC) 7.2.1              | 6710.6kB (1.0x) ◆ | 1732.5kB (1.0x)   |
<!-- BENCHMARK:END -->

















