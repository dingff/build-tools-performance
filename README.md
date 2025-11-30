# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-30`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B13282%2C2940%2C2346%2C2783%2C2128%2C52304%2C18557%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A60149.6%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B880%2C375%2C301%2C338%2C127%2C817%2C784%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1011.9999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B217%2C248%2C168%2C177%2C128%2C81%2C146%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A285.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B14046%2C4364%2C4959%2C3784%2C5755%2C41366%2C5504%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A47570.899999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277403.8%27%2C%277396.3%27%2C%277485.9%27%2C%277485.9%27%2C%277915.2%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271674.6%27%2C%271672.3%27%2C%271708.1%27%2C%271708.1%27%2C%272014.1%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 13282ms (6.2x)  | 880ms (6.9x)   | 217ms (2.7x)  | 14046ms (3.7x)  |
| Rspack CLI 1.6.5           | 2940ms (1.4x)   | 375ms (3.0x)   | 248ms (3.1x)  | 4364ms (1.2x)   |
| Rsbuild 1.6.9              | 2346ms (1.1x)   | 301ms (2.4x)   | 168ms (2.1x)  | 4959ms (1.3x)   |
| Unpack 3.5.4               | 2783ms (1.3x)   | 338ms (2.7x)   | 177ms (2.2x)  | 3784ms (1.0x) ◆ |
| Unpack (Prebundle) 3.5.4   | 2128ms (1.0x) ◆ | 127ms (1.0x) ◆ | 128ms (1.6x)  | 5755ms (1.5x)   |
| Next.js (Turbopack) 16.0.5 | 52304ms (24.6x) | 817ms (6.4x)   | 81ms (1.0x) ◆ | 41366ms (10.9x) |
| Vite (Rolldown) 7.2.8      | 18557ms (8.7x)  | 784ms (6.2x)   | 146ms (1.8x)  | 5504ms (1.5x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.1kB (1.5x)   |
| Rspack CLI 1.6.5           | 7403.8kB (1.1x)   | 1674.6kB (1.0x)   |
| Rsbuild 1.6.9              | 7396.3kB (1.1x)   | 1672.3kB (1.0x) ◆ |
| Unpack 3.5.4               | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.4   | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.5 | 7915.2kB (1.2x)   | 2014.1kB (1.2x)   |
| Vite (Rolldown) 7.2.8      | 6878.3kB (1.0x) ◆ | 1797.7kB (1.1x)   |
<!-- BENCHMARK:END -->








































































