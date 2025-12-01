# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-01`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.10%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B13962%2C2561%2C2442%2C2419%2C2173%2C50348%2C16164%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2819%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A57900.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.10%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1036%2C353%2C291%2C258%2C136%2C902%2C836%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2819%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1191.3999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.10%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B203%2C245%2C242%2C153%2C98%2C97%2C123%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2819%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A281.75%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.10%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B17027%2C3094%2C5389%2C4695%2C4577%2C31595%2C5284%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2819%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A36334.25%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.10%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277403.8%27%2C%277396.3%27%2C%277485.9%27%2C%277485.9%27%2C%277915.2%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2819%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.10%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271674.6%27%2C%271672.3%27%2C%271708.1%27%2C%271708.1%27%2C%272014.0%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2819%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 13962ms (6.4x)  | 1036ms (7.6x)  | 203ms (2.1x)  | 17027ms (5.5x)  |
| Rspack CLI 1.6.5           | 2561ms (1.2x)   | 353ms (2.6x)   | 245ms (2.5x)  | 3094ms (1.0x) ◆ |
| Rsbuild 1.6.10             | 2442ms (1.1x)   | 291ms (2.1x)   | 242ms (2.5x)  | 5389ms (1.7x)   |
| Unpack 3.5.4               | 2419ms (1.1x)   | 258ms (1.9x)   | 153ms (1.6x)  | 4695ms (1.5x)   |
| Unpack (Prebundle) 3.5.4   | 2173ms (1.0x) ◆ | 136ms (1.0x) ◆ | 98ms (1.0x)   | 4577ms (1.5x)   |
| Next.js (Turbopack) 16.0.6 | 50348ms (23.2x) | 902ms (6.6x)   | 97ms (1.0x) ◆ | 31595ms (10.2x) |
| Vite (Rolldown) 7.2.8      | 16164ms (7.4x)  | 836ms (6.1x)   | 123ms (1.3x)  | 5284ms (1.7x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.1kB (1.5x)   |
| Rspack CLI 1.6.5           | 7403.8kB (1.1x)   | 1674.6kB (1.0x)   |
| Rsbuild 1.6.10             | 7396.3kB (1.1x)   | 1672.3kB (1.0x) ◆ |
| Unpack 3.5.4               | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.4   | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.6 | 7915.2kB (1.2x)   | 2014.0kB (1.2x)   |
| Vite (Rolldown) 7.2.8      | 6878.3kB (1.0x) ◆ | 1797.7kB (1.1x)   |
<!-- BENCHMARK:END -->









































































