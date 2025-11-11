# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `small`
- Date: `2025-11-11`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B1391%2C1393%2C1290%2C1359%2C1416%2C2015%2C10671%2C7508%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12271.65%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B151%2C266%2C216%2C193%2C171%2C153%2C236%2C747%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A859.05%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B160%2C243%2C168%2C165%2C125%2C134%2C88%2C171%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A279.45%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B857%2C739%2C762%2C1006%2C935%2C838%2C8122%2C660%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9340.3%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%271023.8%27%2C%27780.0%27%2C%27814.0%27%2C%27826.2%27%2C%27826.2%27%2C%27826.2%27%2C%271861.8%27%2C%27762.2%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2141.0699999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%27240.8%27%2C%27198.8%27%2C%27194.7%27%2C%27200.3%27%2C%27200.3%27%2C%27200.3%27%2C%27499.2%27%2C%27206.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A574.0799999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build     |
| ----------------------------- | --------------- | -------------- | ------------- | -------------- |
| Farm 1.7.11                   | 1391ms (1.1x)   | 151ms (1.0x) ◆ | 160ms (1.8x)  | 857ms (1.3x)   |
| Rspack CLI 1.6.1              | 1393ms (1.1x)   | 266ms (1.8x)   | 243ms (2.8x)  | 739ms (1.1x)   |
| Rsbuild 1.6.3                 | 1290ms (1.0x) ◆ | 216ms (1.4x)   | 168ms (1.9x)  | 762ms (1.2x)   |
| Unpack (Native Watcher) 3.4.2 | 1359ms (1.1x)   | 193ms (1.3x)   | 165ms (1.9x)  | 1006ms (1.5x)  |
| Unpack 3.4.2                  | 1416ms (1.1x)   | 171ms (1.1x)   | 125ms (1.4x)  | 935ms (1.4x)   |
| Unpack (Prebundle) 3.4.2      | 2015ms (1.6x)   | 153ms (1.0x)   | 134ms (1.5x)  | 838ms (1.3x)   |
| Next.js (Turbopack) 16.0.1    | 10671ms (8.3x)  | 236ms (1.6x)   | 88ms (1.0x) ◆ | 8122ms (12.3x) |
| Vite (Rolldown) 7.2.3         | 7508ms (5.8x)   | 747ms (4.9x)   | 171ms (1.9x)  | 660ms (1.0x) ◆ |

**Bundle sizes**

| Name                          | Total size       | Gzipped size     |
| ----------------------------- | ---------------- | ---------------- |
| Farm 1.7.11                   | 1023.8kB (1.3x)  | 240.8kB (1.2x)   |
| Rspack CLI 1.6.1              | 780.0kB (1.0x)   | 198.8kB (1.0x)   |
| Rsbuild 1.6.3                 | 814.0kB (1.1x)   | 194.7kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.4.2 | 826.2kB (1.1x)   | 200.3kB (1.0x)   |
| Unpack 3.4.2                  | 826.2kB (1.1x)   | 200.3kB (1.0x)   |
| Unpack (Prebundle) 3.4.2      | 826.2kB (1.1x)   | 200.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 1861.8kB (2.4x)  | 499.2kB (2.6x)   |
| Vite (Rolldown) 7.2.3         | 762.2kB (1.0x) ◆ | 206.6kB (1.1x)   |
<!-- BENCHMARK:END -->






























