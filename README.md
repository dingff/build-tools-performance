# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-06`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B15168%2C2451%2C2677%2C2959%2C2249%2C56289%2C12597%2C18887%2C22810%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A61917.9%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B927%2C297%2C281%2C254%2C153%2C1197%2C849%2C837%2C3444%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3788.4%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B208%2C179%2C244%2C214%2C142%2C114%2C115%2C146%2C3698%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A4067.8%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B15232%2C4687%2C5432%2C4577%2C4445%2C37929%2C5263%2C33889%2C34869%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A41721.9%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710601.1%27%2C%277378.5%27%2C%277468.1%27%2C%277468.1%27%2C%277468.1%27%2C%277912.2%27%2C%276862.3%27%2C%276710.6%27%2C%277536.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A11661.210000000001%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272508.4%27%2C%271669.4%27%2C%271705.3%27%2C%271705.3%27%2C%271705.3%27%2C%272015.3%27%2C%271795.7%27%2C%271732.5%27%2C%271851.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2759.2400000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| ----------------------------- | --------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                   | 15168ms (6.7x)  | 927ms (6.1x)   | 208ms (1.8x)   | 15232ms (3.4x)  |
| Rsbuild 1.6.2                 | 2451ms (1.1x)   | 297ms (1.9x)   | 179ms (1.6x)   | 4687ms (1.1x)   |
| Unpack (Native Watcher) 3.3.6 | 2677ms (1.2x)   | 281ms (1.8x)   | 244ms (2.1x)   | 5432ms (1.2x)   |
| Unpack 3.3.6                  | 2959ms (1.3x)   | 254ms (1.7x)   | 214ms (1.9x)   | 4577ms (1.0x)   |
| Unpack (Prebundle) 3.3.6      | 2249ms (1.0x) ◆ | 153ms (1.0x) ◆ | 142ms (1.2x)   | 4445ms (1.0x) ◆ |
| Next.js (Turbopack) 16.0.1    | 56289ms (25.0x) | 1197ms (7.8x)  | 114ms (1.0x) ◆ | 37929ms (8.5x)  |
| Vite (Rolldown) 7.2.1         | 12597ms (5.6x)  | 849ms (5.5x)   | 115ms (1.0x)   | 5263ms (1.2x)   |
| Vite (SWC) 7.2.1              | 18887ms (8.4x)  | 837ms (5.5x)   | 146ms (1.3x)   | 33889ms (7.6x)  |
| webpack (SWC) 5.102.1         | 22810ms (10.1x) | 3444ms (22.5x) | 3698ms (32.4x) | 34869ms (7.8x)  |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10601.1kB (1.6x)  | 2508.4kB (1.5x)   |
| Rsbuild 1.6.2                 | 7378.5kB (1.1x)   | 1669.4kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.6 | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack 3.3.6                  | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack (Prebundle) 3.3.6      | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 7912.2kB (1.2x)   | 2015.3kB (1.2x)   |
| Vite (Rolldown) 7.2.1         | 6862.3kB (1.0x)   | 1795.7kB (1.1x)   |
| Vite (SWC) 7.2.1              | 6710.6kB (1.0x) ◆ | 1732.5kB (1.0x)   |
| webpack (SWC) 5.102.1         | 7536.3kB (1.1x)   | 1851.6kB (1.1x)   |
<!-- BENCHMARK:END -->













