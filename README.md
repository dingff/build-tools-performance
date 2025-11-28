# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-28`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B12195%2C3180%2C1883%2C2724%2C1763%2C52351%2C15563%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A60203.649999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1047%2C373%2C365%2C209%2C169%2C1063%2C590%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1222.4499999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B189%2C361%2C167%2C120%2C92%2C98%2C145%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A415.15%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B12778%2C5235%2C4328%2C3298%2C4415%2C38176%2C5366%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A43902.399999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277403.8%27%2C%277396.3%27%2C%277485.9%27%2C%277485.9%27%2C%277915.1%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271674.6%27%2C%271672.3%27%2C%271708.1%27%2C%271708.1%27%2C%272014.1%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 12195ms (6.9x)  | 1047ms (6.2x)  | 189ms (2.1x)  | 12778ms (3.9x)  |
| Rspack CLI 1.6.5           | 3180ms (1.8x)   | 373ms (2.2x)   | 361ms (3.9x)  | 5235ms (1.6x)   |
| Rsbuild 1.6.9              | 1883ms (1.1x)   | 365ms (2.2x)   | 167ms (1.8x)  | 4328ms (1.3x)   |
| Unpack 3.5.4               | 2724ms (1.5x)   | 209ms (1.2x)   | 120ms (1.3x)  | 3298ms (1.0x) ◆ |
| Unpack (Prebundle) 3.5.4   | 1763ms (1.0x) ◆ | 169ms (1.0x) ◆ | 92ms (1.0x) ◆ | 4415ms (1.3x)   |
| Next.js (Turbopack) 16.0.5 | 52351ms (29.7x) | 1063ms (6.3x)  | 98ms (1.1x)   | 38176ms (11.6x) |
| Vite (Rolldown) 7.2.8      | 15563ms (8.8x)  | 590ms (3.5x)   | 145ms (1.6x)  | 5366ms (1.6x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.1kB (1.5x)   |
| Rspack CLI 1.6.5           | 7403.8kB (1.1x)   | 1674.6kB (1.0x)   |
| Rsbuild 1.6.9              | 7396.3kB (1.1x)   | 1672.3kB (1.0x) ◆ |
| Unpack 3.5.4               | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.4   | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.5 | 7915.1kB (1.2x)   | 2014.1kB (1.2x)   |
| Vite (Rolldown) 7.2.8      | 6878.3kB (1.0x) ◆ | 1797.7kB (1.1x)   |
<!-- BENCHMARK:END -->





































































