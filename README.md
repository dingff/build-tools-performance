# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-18`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B10226%2C2154%2C1798%2C2771%2C1414%2C37005%2C10967%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A42555.75%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B876%2C295%2C176%2C165%2C92%2C575%2C623%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1007.4%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B185%2C241%2C160%2C120%2C83%2C65%2C46%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A277.15%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B12302%2C3692%2C3152%2C3457%2C3765%2C22967%2C3999%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A26412.05%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710631.6%27%2C%277403.1%27%2C%277395.8%27%2C%277485.4%27%2C%277485.4%27%2C%277914.7%27%2C%276877.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12226.34%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.3%27%2C%271674.4%27%2C%271672.2%27%2C%271708.0%27%2C%271708.0%27%2C%272014.0%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.445%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR      | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | ------------- | ------------- | --------------- |
| Farm 1.7.11                | 10226ms (7.2x)  | 876ms (9.5x)  | 185ms (4.0x)  | 12302ms (3.9x)  |
| Rspack CLI 1.6.3           | 2154ms (1.5x)   | 295ms (3.2x)  | 241ms (5.2x)  | 3692ms (1.2x)   |
| Rsbuild 1.6.6              | 1798ms (1.3x)   | 176ms (1.9x)  | 160ms (3.5x)  | 3152ms (1.0x) ◆ |
| Unpack 3.5.1               | 2771ms (2.0x)   | 165ms (1.8x)  | 120ms (2.6x)  | 3457ms (1.1x)   |
| Unpack (Prebundle) 3.5.1   | 1414ms (1.0x) ◆ | 92ms (1.0x) ◆ | 83ms (1.8x)   | 3765ms (1.2x)   |
| Next.js (Turbopack) 16.0.3 | 37005ms (26.2x) | 575ms (6.3x)  | 65ms (1.4x)   | 22967ms (7.3x)  |
| Vite (Rolldown) 7.2.5      | 10967ms (7.8x)  | 623ms (6.8x)  | 46ms (1.0x) ◆ | 3999ms (1.3x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10631.6kB (1.5x)  | 2514.3kB (1.5x)   |
| Rspack CLI 1.6.3           | 7403.1kB (1.1x)   | 1674.4kB (1.0x)   |
| Rsbuild 1.6.6              | 7395.8kB (1.1x)   | 1672.2kB (1.0x) ◆ |
| Unpack 3.5.1               | 7485.4kB (1.1x)   | 1708.0kB (1.0x)   |
| Unpack (Prebundle) 3.5.1   | 7485.4kB (1.1x)   | 1708.0kB (1.0x)   |
| Next.js (Turbopack) 16.0.3 | 7914.7kB (1.2x)   | 2014.0kB (1.2x)   |
| Vite (Rolldown) 7.2.5      | 6877.6kB (1.0x) ◆ | 1797.7kB (1.1x)   |
<!-- BENCHMARK:END -->



















































