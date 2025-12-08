# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-08`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B26847%2C5587%2C4914%2C4969%2C7643%2C68061%2C96940%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A111480.99999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1580%2C925%2C651%2C771%2C1404%2C1434%2C938%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1816.9999999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B296%2C561%2C352%2C406%2C177%2C97%2C137%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A645.15%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B28954%2C4523%2C3900%2C4757%2C5463%2C42581%2C8258%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A48968.149999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710730.8%27%2C%277219.0%27%2C%277440.6%27%2C%277523.1%27%2C%277523.1%27%2C%278027.5%27%2C%276977.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272510.2%27%2C%271704.5%27%2C%271572.3%27%2C%271609.5%27%2C%271609.5%27%2C%272037.6%27%2C%271825.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 26847ms (5.5x)  | 1580ms (2.4x)  | 296ms (3.1x)  | 28954ms (7.4x)  |
| Rspack CLI 1.6.6           | 5587ms (1.1x)   | 925ms (1.4x)   | 561ms (5.8x)  | 4523ms (1.2x)   |
| Rsbuild 1.6.13             | 4914ms (1.0x) ◆ | 651ms (1.0x) ◆ | 352ms (3.6x)  | 3900ms (1.0x) ◆ |
| Unpack 3.6.1               | 4969ms (1.0x)   | 771ms (1.2x)   | 406ms (4.2x)  | 4757ms (1.2x)   |
| Unpack (Prebundle) 3.6.1   | 7643ms (1.6x)   | 1404ms (2.2x)  | 177ms (1.8x)  | 5463ms (1.4x)   |
| Next.js (Turbopack) 16.0.6 | 68061ms (13.9x) | 1434ms (2.2x)  | 97ms (1.0x) ◆ | 42581ms (10.9x) |
| Vite 8.0.0-beta.1          | 96940ms (19.7x) | 938ms (1.4x)   | 137ms (1.4x)  | 8258ms (2.1x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10730.8kB (1.5x)  | 2510.2kB (1.6x)   |
| Rspack CLI 1.6.6           | 7219.0kB (1.0x)   | 1704.5kB (1.1x)   |
| Rsbuild 1.6.13             | 7440.6kB (1.1x)   | 1572.3kB (1.0x) ◆ |
| Unpack 3.6.1               | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Unpack (Prebundle) 3.6.1   | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Next.js (Turbopack) 16.0.6 | 8027.5kB (1.2x)   | 2037.6kB (1.3x)   |
| Vite 8.0.0-beta.1          | 6977.3kB (1.0x) ◆ | 1825.8kB (1.2x)   |
<!-- BENCHMARK:END -->
































































































