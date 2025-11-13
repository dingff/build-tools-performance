# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-13`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B11003%2C2003%2C1813%2C1268%2C2027%2C1214%2C34754%2C10402%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A39967.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B865%2C236%2C157%2C75%2C145%2C100%2C539%2C599%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A994.7499999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B202%2C187%2C111%2C89%2C152%2C83%2C58%2C132%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A232.29999999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B12846%2C2868%2C3143%2C3192%2C4367%2C5863%2C22377%2C3764%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A25733.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.3%27%2C%277403.2%27%2C%277395.8%27%2C%277485.5%27%2C%277485.5%27%2C%277485.5%27%2C%277929.6%27%2C%276877.9%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.294999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272513.5%27%2C%271674.5%27%2C%271672.1%27%2C%271708.1%27%2C%271708.1%27%2C%271708.1%27%2C%272017.8%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2890.5249999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR      | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | ------------- | ------------- | --------------- |
| Farm 1.7.11                   | 11003ms (9.1x)  | 865ms (11.5x) | 202ms (3.5x)  | 12846ms (4.5x)  |
| Rspack CLI 1.6.3              | 2003ms (1.6x)   | 236ms (3.1x)  | 187ms (3.2x)  | 2868ms (1.0x) ◆ |
| Rsbuild 1.6.5                 | 1813ms (1.5x)   | 157ms (2.1x)  | 111ms (1.9x)  | 3143ms (1.1x)   |
| Unpack (Native Watcher) 3.5.0 | 1268ms (1.0x)   | 75ms (1.0x) ◆ | 89ms (1.5x)   | 3192ms (1.1x)   |
| Unpack 3.5.0                  | 2027ms (1.7x)   | 145ms (1.9x)  | 152ms (2.6x)  | 4367ms (1.5x)   |
| Unpack (Prebundle) 3.5.0      | 1214ms (1.0x) ◆ | 100ms (1.3x)  | 83ms (1.4x)   | 5863ms (2.0x)   |
| Next.js (Turbopack) 16.0.2    | 34754ms (28.6x) | 539ms (7.2x)  | 58ms (1.0x) ◆ | 22377ms (7.8x)  |
| Vite (Rolldown) 7.2.5         | 10402ms (8.6x)  | 599ms (8.0x)  | 132ms (2.3x)  | 3764ms (1.3x)   |

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






































