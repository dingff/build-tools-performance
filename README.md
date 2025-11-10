# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-10`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.1%27%2C%27Unpack+3.4.1%27%2C%27Unpack+%28Prebundle%29+3.4.1%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B10148%2C1563%2C2137%2C2230%2C2025%2C1182%2C37741%2C10149%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2891%2C+81%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2872%2C+72%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28310%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28336%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A43402.149999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.1%27%2C%27Unpack+3.4.1%27%2C%27Unpack+%28Prebundle%29+3.4.1%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1016%2C235%2C151%2C267%2C150%2C89%2C534%2C926%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2891%2C+81%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2872%2C+72%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28310%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28336%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1168.3999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.1%27%2C%27Unpack+3.4.1%27%2C%27Unpack+%28Prebundle%29+3.4.1%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B156%2C188%2C123%2C104%2C111%2C68%2C64%2C128%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2891%2C+81%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2872%2C+72%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28310%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28336%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A216.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.1%27%2C%27Unpack+3.4.1%27%2C%27Unpack+%28Prebundle%29+3.4.1%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B12806%2C3946%2C5243%2C4645%2C3656%2C2903%2C22486%2C3793%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2891%2C+81%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2872%2C+72%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28310%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28336%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A25858.899999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.1%27%2C%27Unpack+3.4.1%27%2C%27Unpack+%28Prebundle%29+3.4.1%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710601.1%27%2C%277366.1%27%2C%277378.5%27%2C%277468.1%27%2C%277468.1%27%2C%277468.1%27%2C%277912.3%27%2C%276860.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2891%2C+81%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2872%2C+72%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28310%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28336%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12191.265%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.1%27%2C%27Unpack+3.4.1%27%2C%27Unpack+%28Prebundle%29+3.4.1%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272508.4%27%2C%271671.4%27%2C%271669.4%27%2C%271705.3%27%2C%271705.3%27%2C%271705.3%27%2C%272015.4%27%2C%271795.0%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2891%2C+81%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2872%2C+72%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28310%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28336%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.66%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 10148ms (8.6x)  | 1016ms (11.4x) | 156ms (2.4x)  | 12806ms (4.4x)  |
| Rspack CLI 1.6.1              | 1563ms (1.3x)   | 235ms (2.6x)   | 188ms (2.9x)  | 3946ms (1.4x)   |
| Rsbuild 1.6.3                 | 2137ms (1.8x)   | 151ms (1.7x)   | 123ms (1.9x)  | 5243ms (1.8x)   |
| Unpack (Native Watcher) 3.4.1 | 2230ms (1.9x)   | 267ms (3.0x)   | 104ms (1.6x)  | 4645ms (1.6x)   |
| Unpack 3.4.1                  | 2025ms (1.7x)   | 150ms (1.7x)   | 111ms (1.7x)  | 3656ms (1.3x)   |
| Unpack (Prebundle) 3.4.1      | 1182ms (1.0x) ◆ | 89ms (1.0x) ◆  | 68ms (1.1x)   | 2903ms (1.0x) ◆ |
| Next.js (Turbopack) 16.0.1    | 37741ms (31.9x) | 534ms (6.0x)   | 64ms (1.0x) ◆ | 22486ms (7.7x)  |
| Vite (Rolldown) 7.2.2         | 10149ms (8.6x)  | 926ms (10.4x)  | 128ms (2.0x)  | 3793ms (1.3x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10601.1kB (1.5x)  | 2508.4kB (1.5x)   |
| Rspack CLI 1.6.1              | 7366.1kB (1.1x)   | 1671.4kB (1.0x)   |
| Rsbuild 1.6.3                 | 7378.5kB (1.1x)   | 1669.4kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.4.1 | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack 3.4.1                  | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack (Prebundle) 3.4.1      | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 7912.3kB (1.2x)   | 2015.4kB (1.2x)   |
| Vite (Rolldown) 7.2.2         | 6860.7kB (1.0x) ◆ | 1795.0kB (1.1x)   |
<!-- BENCHMARK:END -->




























