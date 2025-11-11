# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-11`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B13314%2C2752%2C2481%2C2839%2C2669%2C2256%2C75771%2C17383%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A87136.65%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1087%2C487%2C216%2C198%2C335%2C156%2C1027%2C1059%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1250.05%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B209%2C332%2C194%2C136%2C215%2C157%2C98%2C165%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A381.79999999999995%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B13391%2C5661%2C4497%2C4287%2C5770%2C6668%2C42232%2C6259%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A48566.799999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710601.2%27%2C%277366.1%27%2C%277378.5%27%2C%277468.1%27%2C%277468.1%27%2C%277468.1%27%2C%277912.3%27%2C%276860.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12191.38%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272508.0%27%2C%271671.4%27%2C%271669.4%27%2C%271705.3%27%2C%271705.3%27%2C%271705.3%27%2C%272015.4%27%2C%271795.0%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 13314ms (5.9x)  | 1087ms (7.0x)  | 209ms (2.1x)  | 13391ms (3.1x)  |
| Rspack CLI 1.6.1              | 2752ms (1.2x)   | 487ms (3.1x)   | 332ms (3.4x)  | 5661ms (1.3x)   |
| Rsbuild 1.6.3                 | 2481ms (1.1x)   | 216ms (1.4x)   | 194ms (2.0x)  | 4497ms (1.0x)   |
| Unpack (Native Watcher) 3.4.2 | 2839ms (1.3x)   | 198ms (1.3x)   | 136ms (1.4x)  | 4287ms (1.0x) ◆ |
| Unpack 3.4.2                  | 2669ms (1.2x)   | 335ms (2.1x)   | 215ms (2.2x)  | 5770ms (1.3x)   |
| Unpack (Prebundle) 3.4.2      | 2256ms (1.0x) ◆ | 156ms (1.0x) ◆ | 157ms (1.6x)  | 6668ms (1.6x)   |
| Next.js (Turbopack) 16.0.1    | 75771ms (33.6x) | 1027ms (6.6x)  | 98ms (1.0x) ◆ | 42232ms (9.9x)  |
| Vite (Rolldown) 7.2.3         | 17383ms (7.7x)  | 1059ms (6.8x)  | 165ms (1.7x)  | 6259ms (1.5x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10601.2kB (1.5x)  | 2508.0kB (1.5x)   |
| Rspack CLI 1.6.1              | 7366.1kB (1.1x)   | 1671.4kB (1.0x)   |
| Rsbuild 1.6.3                 | 7378.5kB (1.1x)   | 1669.4kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.4.2 | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack 3.4.2                  | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack (Prebundle) 3.4.2      | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 7912.3kB (1.2x)   | 2015.4kB (1.2x)   |
| Vite (Rolldown) 7.2.3         | 6860.6kB (1.0x) ◆ | 1795.0kB (1.1x)   |
<!-- BENCHMARK:END -->































