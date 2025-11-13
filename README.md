# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-13`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B13445%2C3461%2C4062%2C2903%2C3393%2C1803%2C67192%2C15833%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A77270.79999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1231%2C630%2C481%2C300%2C313%2C203%2C1032%2C832%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1415.6499999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B190%2C322%2C282%2C196%2C192%2C161%2C132%2C124%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A370.29999999999995%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B15746%2C6005%2C6134%2C4978%2C5024%2C7208%2C41980%2C5732%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A48276.99999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.3%27%2C%277403.2%27%2C%277395.8%27%2C%277485.5%27%2C%277485.5%27%2C%277485.5%27%2C%277929.6%27%2C%276877.9%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.294999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272513.5%27%2C%271674.5%27%2C%271672.2%27%2C%271708.1%27%2C%271708.1%27%2C%271708.1%27%2C%272017.8%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2890.5249999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| ----------------------------- | --------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                   | 13445ms (7.5x)  | 1231ms (6.1x)  | 190ms (1.5x)   | 15746ms (3.2x)  |
| Rspack CLI 1.6.2              | 3461ms (1.9x)   | 630ms (3.1x)   | 322ms (2.6x)   | 6005ms (1.2x)   |
| Rsbuild 1.6.4                 | 4062ms (2.3x)   | 481ms (2.4x)   | 282ms (2.3x)   | 6134ms (1.2x)   |
| Unpack (Native Watcher) 3.4.2 | 2903ms (1.6x)   | 300ms (1.5x)   | 196ms (1.6x)   | 4978ms (1.0x) ◆ |
| Unpack 3.4.2                  | 3393ms (1.9x)   | 313ms (1.5x)   | 192ms (1.5x)   | 5024ms (1.0x)   |
| Unpack (Prebundle) 3.4.2      | 1803ms (1.0x) ◆ | 203ms (1.0x) ◆ | 161ms (1.3x)   | 7208ms (1.4x)   |
| Next.js (Turbopack) 16.0.2    | 67192ms (37.3x) | 1032ms (5.1x)  | 132ms (1.1x)   | 41980ms (8.4x)  |
| Vite (Rolldown) 7.2.5         | 15833ms (8.8x)  | 832ms (4.1x)   | 124ms (1.0x) ◆ | 5732ms (1.2x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10633.3kB (1.5x)  | 2513.5kB (1.5x)   |
| Rspack CLI 1.6.2              | 7403.2kB (1.1x)   | 1674.5kB (1.0x)   |
| Rsbuild 1.6.4                 | 7395.8kB (1.1x)   | 1672.2kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.4.2 | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack 3.4.2                  | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.4.2      | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.2    | 7929.6kB (1.2x)   | 2017.8kB (1.2x)   |
| Vite (Rolldown) 7.2.5         | 6877.9kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->


































