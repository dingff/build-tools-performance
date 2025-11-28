# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-28`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B9871%2C2054%2C1503%2C2420%2C1827%2C36729%2C9780%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A42238.35%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B817%2C257%2C215%2C160%2C95%2C673%2C677%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A939.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B211%2C257%2C132%2C117%2C69%2C65%2C125%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A295.54999999999995%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B12065%2C3355%2C3730%2C3569%2C3245%2C24817%2C4106%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A28539.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277403.8%27%2C%277396.3%27%2C%277485.9%27%2C%277485.9%27%2C%277915.2%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271674.6%27%2C%271672.3%27%2C%271708.1%27%2C%271708.1%27%2C%272014.1%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR      | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | ------------- | ------------- | --------------- |
| Farm 1.7.11                | 9871ms (6.6x)   | 817ms (8.6x)  | 211ms (3.2x)  | 12065ms (3.7x)  |
| Rspack CLI 1.6.5           | 2054ms (1.4x)   | 257ms (2.7x)  | 257ms (4.0x)  | 3355ms (1.0x)   |
| Rsbuild 1.6.9              | 1503ms (1.0x) ◆ | 215ms (2.3x)  | 132ms (2.0x)  | 3730ms (1.1x)   |
| Unpack 3.5.4               | 2420ms (1.6x)   | 160ms (1.7x)  | 117ms (1.8x)  | 3569ms (1.1x)   |
| Unpack (Prebundle) 3.5.4   | 1827ms (1.2x)   | 95ms (1.0x) ◆ | 69ms (1.1x)   | 3245ms (1.0x) ◆ |
| Next.js (Turbopack) 16.0.5 | 36729ms (24.4x) | 673ms (7.1x)  | 65ms (1.0x) ◆ | 24817ms (7.6x)  |
| Vite (Rolldown) 7.2.8      | 9780ms (6.5x)   | 677ms (7.1x)  | 125ms (1.9x)  | 4106ms (1.3x)   |

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






































































