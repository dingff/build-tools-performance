# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-18`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B19289%2C3321%2C3931%2C4306%2C2978%2C99984%2C24221%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A114981.59999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B377%2C723%2C527%2C390%2C170%2C1154%2C570%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1327.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B312%2C480%2C400%2C230%2C257%2C169%2C116%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A552%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B24400%2C7380%2C9010%2C8552%2C9917%2C59577%2C8280%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A68513.54999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710631.6%27%2C%277403.1%27%2C%277395.8%27%2C%277485.4%27%2C%277485.4%27%2C%277914.7%27%2C%276877.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12226.34%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+3.5.1%27%2C%27Unpack+%28Prebundle%29+3.5.1%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.3%27%2C%271674.4%27%2C%271672.2%27%2C%271708.0%27%2C%271708.0%27%2C%272014.0%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28190%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28301%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.445%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| -------------------------- | --------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                | 19289ms (6.5x)  | 377ms (2.2x)   | 312ms (2.7x)   | 24400ms (3.3x)  |
| Rspack CLI 1.6.3           | 3321ms (1.1x)   | 723ms (4.3x)   | 480ms (4.1x)   | 7380ms (1.0x) ◆ |
| Rsbuild 1.6.6              | 3931ms (1.3x)   | 527ms (3.1x)   | 400ms (3.4x)   | 9010ms (1.2x)   |
| Unpack 3.5.1               | 4306ms (1.4x)   | 390ms (2.3x)   | 230ms (2.0x)   | 8552ms (1.2x)   |
| Unpack (Prebundle) 3.5.1   | 2978ms (1.0x) ◆ | 170ms (1.0x) ◆ | 257ms (2.2x)   | 9917ms (1.3x)   |
| Next.js (Turbopack) 16.0.3 | 99984ms (33.6x) | 1154ms (6.8x)  | 169ms (1.5x)   | 59577ms (8.1x)  |
| Vite (Rolldown) 7.2.5      | 24221ms (8.1x)  | 570ms (3.4x)   | 116ms (1.0x) ◆ | 8280ms (1.1x)   |

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

















































