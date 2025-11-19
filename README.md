# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-19`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.6%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B17069%2C3459%2C3680%2C4446%2C2885%2C69493%2C18045%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2837%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A79916.95%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.6%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1071%2C561%2C309%2C248%2C192%2C927%2C326%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2837%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1231.6499999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.6%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B187%2C392%2C234%2C218%2C102%2C71%2C135%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2837%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A450.79999999999995%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.6%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B21971%2C6617%2C7183%2C5934%2C6607%2C44527%2C6855%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2837%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A51206.049999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.6%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277403.8%27%2C%277396.3%27%2C%277485.9%27%2C%277485.9%27%2C%277915.3%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2837%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.4%27%2C%27Rsbuild+1.6.7%27%2C%27Unpack+3.5.3%27%2C%27Unpack+%28Prebundle%29+3.5.3%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.6%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.9%27%2C%271674.6%27%2C%271672.3%27%2C%271708.1%27%2C%271708.1%27%2C%272014.1%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28219%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2880%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2841%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28151%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2837%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2892.1349999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 17069ms (5.9x)  | 1071ms (5.6x)  | 187ms (2.6x)  | 21971ms (3.7x)  |
| Rspack CLI 1.6.4           | 3459ms (1.2x)   | 561ms (2.9x)   | 392ms (5.5x)  | 6617ms (1.1x)   |
| Rsbuild 1.6.7              | 3680ms (1.3x)   | 309ms (1.6x)   | 234ms (3.3x)  | 7183ms (1.2x)   |
| Unpack 3.5.3               | 4446ms (1.5x)   | 248ms (1.3x)   | 218ms (3.1x)  | 5934ms (1.0x) ◆ |
| Unpack (Prebundle) 3.5.3   | 2885ms (1.0x) ◆ | 192ms (1.0x) ◆ | 102ms (1.4x)  | 6607ms (1.1x)   |
| Next.js (Turbopack) 16.0.3 | 69493ms (24.1x) | 927ms (4.8x)   | 71ms (1.0x) ◆ | 44527ms (7.5x)  |
| Vite (Rolldown) 7.2.6      | 18045ms (6.3x)  | 326ms (1.7x)   | 135ms (1.9x)  | 6855ms (1.2x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.9kB (1.5x)   |
| Rspack CLI 1.6.4           | 7403.8kB (1.1x)   | 1674.6kB (1.0x)   |
| Rsbuild 1.6.7              | 7396.3kB (1.1x)   | 1672.3kB (1.0x) ◆ |
| Unpack 3.5.3               | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.3   | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.3 | 7915.3kB (1.2x)   | 2014.1kB (1.2x)   |
| Vite (Rolldown) 7.2.6      | 6878.3kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->

























































