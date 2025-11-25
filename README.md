# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-25`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.7%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B14361%2C4215%2C3561%2C2897%2C1998%2C81317%2C16899%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28112%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A93514.54999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.7%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B406%2C559%2C408%2C317%2C154%2C1044%2C526%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28112%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1200.6%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.7%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B214%2C436%2C289%2C253%2C239%2C81%2C126%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28112%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A501.4%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.7%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B19756%2C6271%2C7741%2C8268%2C8223%2C41711%2C6178%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28112%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A47967.649999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.7%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277403.8%27%2C%277396.3%27%2C%277485.9%27%2C%277485.9%27%2C%277915.3%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28112%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.7%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.9%27%2C%271674.6%27%2C%271672.3%27%2C%271708.1%27%2C%271708.1%27%2C%272014.1%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28112%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2892.1349999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 14361ms (7.2x)  | 406ms (2.6x)   | 214ms (2.6x)  | 19756ms (3.2x)  |
| Rspack CLI 1.6.4           | 4215ms (2.1x)   | 559ms (3.6x)   | 436ms (5.4x)  | 6271ms (1.0x)   |
| Rsbuild 1.6.7              | 3561ms (1.8x)   | 408ms (2.6x)   | 289ms (3.6x)  | 7741ms (1.3x)   |
| Unpack 3.5.3               | 2897ms (1.4x)   | 317ms (2.1x)   | 253ms (3.1x)  | 8268ms (1.3x)   |
| Unpack (Prebundle) 3.5.3   | 1998ms (1.0x) ◆ | 154ms (1.0x) ◆ | 239ms (3.0x)  | 8223ms (1.3x)   |
| Next.js (Turbopack) 16.0.3 | 81317ms (40.7x) | 1044ms (6.8x)  | 81ms (1.0x) ◆ | 41711ms (6.8x)  |
| Vite (Rolldown) 7.2.7      | 16899ms (8.5x)  | 526ms (3.4x)   | 126ms (1.6x)  | 6178ms (1.0x) ◆ |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.9kB (1.5x)   |
| Rspack CLI 1.6.4           | 7403.8kB (1.1x)   | 1674.6kB (1.0x)   |
| Rsbuild 1.6.7              | 7396.3kB (1.1x)   | 1672.3kB (1.0x) ◆ |
| Unpack 3.5.3               | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.3   | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.3 | 7915.3kB (1.2x)   | 2014.1kB (1.2x)   |
| Vite (Rolldown) 7.2.7      | 6878.3kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->

































































